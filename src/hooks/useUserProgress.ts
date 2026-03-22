"use client"

import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { getProgress, SkillProgress, syncLocalToDb, CompletedSkill } from "@/lib/skill-progress"
import { ALL_SKILLS } from "@/lib/skills-data"

export function useUserProgress() {
  const { isLoaded, isSignedIn } = useUser()
  const [progress, setProgress] = useState<SkillProgress | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isLoaded) return

    const loadProgress = async () => {
      // 1. Load from localStorage immediately for fast UI
      const local = getProgress()
      setProgress(local)

      if (isSignedIn) {
        try {
          // 2. Sync local to DB (one-way migration/sync)
          await syncLocalToDb()

          // 3. Fetch latest from DB
          const res = await fetch("/api/user/stats")
          if (res.ok) {
            const dbData = await res.json()
            
            // Map DB structure to SkillProgress interface
            const unified: SkillProgress = {
              totalXP: dbData.xp,
              streak: dbData.streak,
              lastLearnedDate: dbData.lastLearnedAt ? dbData.lastLearnedAt.split("T")[0] : null,
              completedSkills: dbData.completedSkills.map((s: any) => {
                const meta = ALL_SKILLS.find(skill => skill.slug === s.skillId)
                return {
                  slug: s.skillId,
                  title: meta?.title || s.skillId,
                  category: meta?.category || "Unknown",
                  categoryIcon: meta?.categoryIcon || "🧠",
                  completedAt: s.completedAt,
                  xpEarned: 100, // Default for now
                }
              })
            }
            setProgress(unified)
          }
        } catch (error) {
          console.error("Failed to fetch DB progress:", error)
        }
      }
      setLoading(false)
    }

    loadProgress()
  }, [isLoaded, isSignedIn])

  return { progress, loading }
}
