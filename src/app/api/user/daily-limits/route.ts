import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const { userId, sessionClaims } = await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user is premium via session claims (publicMetadata)
    const isPremium = (sessionClaims as any)?.publicMetadata?.plan === "PREMIUM"
    if (isPremium) {
      return NextResponse.json({ count: 0, isPremium: true })
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const lessonsDoneToday = await prisma.userProgress.count({
      where: {
        userId,
        completedAt: {
          gte: today
        }
      }
    })

    return NextResponse.json({ count: lessonsDoneToday })
  } catch (error) {
    console.error("[GET_DAILY_LIMIT_ERROR]", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth()
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const { slug } = await req.json()
    if (!slug) return NextResponse.json({ error: "Missing slug" }, { status: 400 })

    // Upsert UserProgress to record the hit
    await prisma.userProgress.upsert({
      where: {
        userId_skillId: {
          userId,
          skillId: slug
        }
      },
      update: {
        // Just updating the timestamp if it already exists but isn't completed
        completedAt: new Date()
      },
      create: {
        userId,
        skillId: slug,
        completed: false,
        completedAt: new Date(),
        score: 0
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[POST_DAILY_LIMIT_ERROR]", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
