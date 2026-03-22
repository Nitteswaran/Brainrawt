import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        progress: {
          where: { completed: true },
          select: { skillId: true, completedAt: true, score: true }
        }
      }
    })

    if (!user) {
       // If no user record yet, it will be created on sync/completion
      return NextResponse.json({ 
        xp: 0, 
        streak: 0, 
        completedSkills: [] 
      })
    }

    return NextResponse.json({
      xp: user.xp,
      streak: user.streak,
      lastLearnedAt: user.lastLearnedAt,
      completedSkills: user.progress
    })
  } catch (error) {
    console.error("[GET_STATS_ERROR]", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
