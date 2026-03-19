"use client"

import { useEffect, useState } from "react"
import { getProgress, SkillProgress } from "@/lib/skill-progress"
import { Card, CardContent } from "@/components/ui/card"

export function DashboardStats() {
  const [progress, setProgress] = useState<SkillProgress | null>(null)

  useEffect(() => {
    setProgress(getProgress())
  }, [])

  const streak = progress?.streak ?? 0
  const totalXP = progress?.totalXP ?? 0
  const skillsMastered = progress?.completedSkills.length ?? 0

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-neo-muted/50 rotate-1 shadow-neo-sm hover:shadow-neo-md hover:-translate-y-1 transition-all">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2 mt-0">
          <span className="text-5xl font-black text-neo-accent drop-shadow-[2px_2px_0px_#000]">
            {streak}
          </span>
          <span className="font-bold uppercase tracking-widest text-sm text-black pt-2">Day Streak 🔥</span>
        </CardContent>
      </Card>

      <Card className="bg-neo-secondary/50 -rotate-1 shadow-neo-sm hover:shadow-neo-md hover:-translate-y-1 transition-all">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2 mt-0">
          <span className="text-5xl font-black text-neo-foreground drop-shadow-[2px_2px_0px_#FF6B6B]">
            {totalXP}
          </span>
          <span className="font-bold uppercase tracking-widest text-sm pt-2">Total XP ⭐</span>
        </CardContent>
      </Card>

      <Card className="bg-white rotate-2 shadow-neo-sm hover:shadow-neo-md hover:-translate-y-1 transition-all">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2 mt-0">
          <span className="text-5xl font-black text-neo-muted drop-shadow-[2px_2px_0px_#000]">
            {skillsMastered}
          </span>
          <span className="font-bold uppercase tracking-widest text-sm pt-2">Skills Mastered 🧠</span>
        </CardContent>
      </Card>
    </section>
  )
}
