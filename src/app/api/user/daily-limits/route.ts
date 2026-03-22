import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
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
