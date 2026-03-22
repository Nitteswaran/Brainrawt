import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { XP_PER_SKILL } from "@/lib/skill-progress"

export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { slug, title, category, categoryIcon } = await req.json()

    if (!slug || !title) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // 1. Ensure Skill exists in DB
    const skill = await prisma.skill.upsert({
      where: { id: slug },
      update: {
        title,
        category,
        // we can update other fields if needed
      },
      create: {
        id: slug,
        title,
        category,
        difficulty: "BEGINNER", // Default
        summary: "N/A",
        lesson: "N/A",
        example: "N/A",
        challenge: "N/A",
        estimatedTime: 5,
        approved: true,
      }
    })

    // 2. Check if already completed to avoid double XP
    const existingProgress = await prisma.userProgress.findUnique({
      where: {
        userId_skillId: {
          userId,
          skillId: slug
        }
      }
    })

    if (existingProgress?.completed) {
      return NextResponse.json({ success: true, newlyCompleted: false })
    }

    // 3. Update UserProgress
    await prisma.userProgress.upsert({
      where: {
        userId_skillId: {
          userId,
          skillId: slug
        }
      },
      update: {
        completed: true,
        completedAt: new Date(),
        score: 100
      },
      create: {
        userId,
        skillId: slug,
        completed: true,
        completedAt: new Date(),
        score: 100
      }
    })

    // 4. Update User XP and Streak
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const today = new Date().toISOString().split("T")[0]
    const lastLearnedDate = user.lastLearnedAt ? user.lastLearnedAt.toISOString().split("T")[0] : null
    
    let newStreak = user.streak
    if (lastLearnedDate === today) {
      // Already learned today, streak stays
    } else {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayString = yesterday.toISOString().split("T")[0]

      if (lastLearnedDate === yesterdayString) {
        newStreak += 1
      } else {
        newStreak = 1
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        xp: { increment: XP_PER_SKILL },
        streak: newStreak,
        lastLearnedAt: new Date()
      }
    })

    return NextResponse.json({ 
      success: true, 
      newlyCompleted: true,
      newXP: updatedUser.xp,
      newStreak: updatedUser.streak
    })
  } catch (error) {
    console.error("[COMPLETE_SKILL_ERROR]", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
