import { NextResponse } from "next/server"
import { auth, currentUser } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { getOrCreateUser } from "@/lib/user"

export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  try {
    const { userId } = await auth()
    const user = await currentUser()

    if (!userId || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { localStorageProgress } = await req.json()
    if (!localStorageProgress) {
      return NextResponse.json({ error: "No progress data provided" }, { status: 400 })
    }

    // Ensure user exists in Prisma
    const dbUser = await getOrCreateUser(
      userId,
      user.emailAddresses[0].emailAddress,
      `${user.firstName} ${user.lastName}`
    )

    // Sync only if DB has less XP than localStorage (simplistic migration)
    if (localStorageProgress.totalXP > dbUser.xp) {
      await prisma.user.update({
        where: { id: userId },
        data: {
          xp: localStorageProgress.totalXP,
          streak: localStorageProgress.streak,
          lastLearnedAt: localStorageProgress.lastLearnedDate ? new Date(localStorageProgress.lastLearnedDate) : null,
        }
      })

      // Sync completed skills
      for (const skill of localStorageProgress.completedSkills) {
        await prisma.userProgress.upsert({
          where: {
            userId_skillId: {
              userId,
              skillId: skill.slug
            }
          },
          update: {
            completed: true,
            completedAt: new Date(skill.completedAt),
            score: 100
          },
          create: {
            userId,
            skillId: skill.slug,
            completed: true,
            completedAt: new Date(skill.completedAt),
            score: 100
          }
        })
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[SYNC_PROGRESS_ERROR]", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
