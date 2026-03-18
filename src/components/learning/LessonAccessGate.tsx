"use client"

import { useUser } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import Link from "next/link"

const DAILY_LIMIT_FREE = 3
const STORAGE_KEY = "brainrawt_daily_lessons"

interface DailyLessonData {
  date: string
  slugs: string[]
}

function getTodayString(): string {
  return new Date().toISOString().split("T")[0]
}

function getDailyData(): DailyLessonData {
  if (typeof window === "undefined") return { date: getTodayString(), slugs: [] }
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return { date: getTodayString(), slugs: [] }
  try {
    const data: DailyLessonData = JSON.parse(raw)
    if (data.date !== getTodayString()) {
      return { date: getTodayString(), slugs: [] }
    }
    return data
  } catch {
    return { date: getTodayString(), slugs: [] }
  }
}

function recordLesson(slug: string): void {
  const data = getDailyData()
  if (!data.slugs.includes(slug)) {
    data.slugs.push(slug)
  }
  data.date = getTodayString()
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

interface LessonAccessGateProps {
  skillSlug: string
  children: React.ReactNode
}

export function LessonAccessGate({ skillSlug, children }: LessonAccessGateProps) {
  const { user, isLoaded } = useUser()
  const [hasAccess, setHasAccess] = useState<boolean | null>(null)
  const [lessonsUsed, setLessonsUsed] = useState(0)

  useEffect(() => {
    if (!isLoaded) return

    const isPremium = user?.publicMetadata?.plan === "PREMIUM"
    
    if (isPremium) {
      setHasAccess(true)
      recordLesson(skillSlug)
      return
    }

    const dailyData = getDailyData()
    const alreadyAccessed = dailyData.slugs.includes(skillSlug)
    const currentCount = dailyData.slugs.length

    setLessonsUsed(currentCount)

    if (alreadyAccessed || currentCount < DAILY_LIMIT_FREE) {
      setHasAccess(true)
      recordLesson(skillSlug)
      setLessonsUsed(getDailyData().slugs.length)
    } else {
      setHasAccess(false)
    }
  }, [isLoaded, user, skillSlug])

  if (!isLoaded || hasAccess === null) {
    return (
      <div className="p-6 md:p-10 max-w-4xl mx-auto flex items-center justify-center min-h-[60vh]">
        <div className="border-4 border-black p-8 bg-white shadow-neo-lg animate-pulse text-center">
          <p className="font-black text-2xl uppercase">Loading lesson...</p>
        </div>
      </div>
    )
  }

  if (!hasAccess) {
    return (
      <div className="p-6 md:p-10 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[60vh] gap-8">
        <div className="border-4 border-black p-8 bg-neo-accent text-white shadow-[12px_12px_0px_0px_#000] rotate-1 text-center max-w-lg">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="font-black text-3xl uppercase mb-4">Daily Limit Reached</h2>
          <p className="font-bold text-lg mb-2">
            You&apos;ve completed {lessonsUsed}/{DAILY_LIMIT_FREE} free lessons today.
          </p>
          <p className="font-bold text-white/80 mb-6">
            Come back tomorrow for more, or upgrade to Premium for unlimited access!
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/pricing" className="bg-white text-black font-black uppercase py-3 px-6 border-4 border-black shadow-neo-sm hover:-translate-y-1 transition-transform block text-center text-lg">
              Upgrade to Premium → 
            </Link>
            <Link href="/library" className="bg-black/20 text-white font-bold uppercase py-2 px-4 border-2 border-white/50 hover:bg-black/30 transition-colors block text-center">
              ← Back to Library
            </Link>
          </div>
        </div>
        <div className="border-4 border-black p-4 bg-neo-secondary/30 shadow-neo-sm -rotate-1 text-center">
          <p className="font-black uppercase text-sm">⚡ Premium members get unlimited daily lessons + AI-generated skills</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {!user?.publicMetadata?.plan || user.publicMetadata.plan !== "PREMIUM" ? (
        <div className="bg-neo-muted/30 border-b-4 border-black py-2 px-4 text-center">
          <p className="font-bold text-sm">
            📚 Free lesson {lessonsUsed}/{DAILY_LIMIT_FREE} today • <Link href="/pricing" className="underline font-black hover:text-neo-accent">Upgrade for unlimited</Link>
          </p>
        </div>
      ) : null}
      {children}
    </>
  )
}
