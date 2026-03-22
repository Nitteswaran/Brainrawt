"use client"

import { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { completeSkill, completeSkillInDb, isSkillCompleted, XP_PER_SKILL } from "@/lib/skill-progress"
import { Quiz } from "@/components/learning/Quiz"
import Link from "next/link"
interface SkillCompletionHandlerProps {
  slug: string
  title: string
  category: string
  categoryIcon: string
  questions: { question: string; options: string[]; answer: string }[]
}

export function SkillCompletionHandler({
  slug,
  title,
  category,
  categoryIcon,
  questions,
}: SkillCompletionHandlerProps) {
  const { isSignedIn } = useUser()
  const [alreadyCompleted, setAlreadyCompleted] = useState(false)
  const [justCompleted, setJustCompleted] = useState(false)

  useEffect(() => {
    setAlreadyCompleted(isSkillCompleted(slug))
  }, [slug])

  const handleComplete = async () => {
    // 1. Always save to local for legacy support/guest state
    completeSkill(slug, { title, category, categoryIcon })

    // 2. If logged in, sync with database
    if (isSignedIn) {
      await completeSkillInDb(slug, { title, category, categoryIcon })
    }

    setJustCompleted(true)
    setAlreadyCompleted(true)
  }


  // Show completion banner after finishing
  if (justCompleted) {
    return (
      <div className="flex flex-col gap-6">
        {/* XP Celebration Banner */}
        <div className="border-4 border-black p-8 bg-neo-secondary shadow-neo-xl text-center relative animate-bounce-once">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="font-black text-4xl uppercase mb-2">Skill Unlocked!</h3>
          <p className="font-bold text-xl mb-6">
            <span className="bg-neo-accent text-white px-2 py-1 border-4 border-black shadow-neo-sm inline-block rotate-1 mx-1">
              +{XP_PER_SKILL} XP
            </span>
            {" "}added to your profile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="bg-black text-white font-black uppercase px-8 py-3 border-4 border-black shadow-neo-sm hover:-translate-y-1 transition-transform text-lg text-center"
            >
              ← Back to Dashboard
            </Link>
            <Link
              href="/library"
              className="bg-white text-black font-black uppercase px-8 py-3 border-4 border-black shadow-neo-sm hover:-translate-y-1 transition-transform text-lg text-center"
            >
              Learn Another Skill →
            </Link>
          </div>
        </div>

        {/* Already-completed quiz state */}
        <div className="border-4 border-black p-8 bg-neo-accent text-white shadow-neo-md text-center rotate-1">
          <h3 className="font-black text-4xl uppercase mb-4">Quiz Completed!</h3>
          <p className="font-bold text-xl">You&apos;ve solidified your knowledge. Great work!</p>
        </div>
      </div>
    )
  }

  // Already completed before this session
  if (alreadyCompleted) {
    return (
      <div className="flex flex-col gap-6">
        <div className="border-4 border-black p-6 bg-neo-secondary shadow-neo-sm text-center -rotate-1">
          <p className="font-black text-2xl uppercase mb-2">✅ Skill Already Mastered!</p>
          <p className="font-bold text-lg">
            You&apos;ve already earned{" "}
            <span className="bg-neo-accent text-white px-2 border-4 border-black shadow-neo-sm inline-block rotate-1">
              +{XP_PER_SKILL} XP
            </span>
            {" "}for this skill.
          </p>
        </div>
        {/* Still show the quiz for review */}
        <Quiz questions={questions} />
      </div>
    )
  }

  // Not completed yet — show interactive quiz
  return <Quiz questions={questions} onComplete={handleComplete} />
}
