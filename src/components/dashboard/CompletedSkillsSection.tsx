import { useUserProgress } from "@/hooks/useUserProgress"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  } catch (e) {
    return "Recently"
  }
}

export function CompletedSkillsSection() {
  const { progress, loading } = useUserProgress()

  if (loading) {
    return (
      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-2">Completed Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <Skeleton key={i} className="h-48 w-full shadow-neo-sm" />
          ))}
        </div>
      </section>
    )
  }

  const completedSkills = [...(progress?.completedSkills || [])].reverse()

  if (completedSkills.length === 0) {
    return (
      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-2">Completed Skills</h2>
        <div className="border-4 border-black border-dashed p-10 text-center bg-white shadow-neo-sm -rotate-1">
          <p className="text-5xl mb-4">🧠</p>
          <p className="font-black text-2xl uppercase mb-2">Nothing here yet!</p>
          <p className="font-bold text-lg mb-6">Complete your first lesson to earn XP and see your skills here.</p>
          <Link href="/library">
            <Button className="shadow-neo-sm text-lg px-8">Browse Skills →</Button>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-4 flex-wrap">
        <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-2">Completed Skills</h2>
        <Badge className="rotate-3 shadow-neo-sm bg-neo-accent text-white border-2 border-black text-base px-4 py-1">
          {completedSkills.length} Mastered
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {completedSkills.map((skill, i) => {
          const rotate = i % 3 === 0 ? "rotate-1" : i % 3 === 1 ? "-rotate-1" : "rotate-0"
          return (
            <Card
              key={skill.slug}
              className={`bg-white border-black shadow-neo-sm hover:shadow-neo-md hover:-translate-y-1 transition-all ${rotate} group`}
            >
              <CardHeader className="bg-neo-secondary border-b-4 border-black pb-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white border-2 border-black text-black shadow-neo-sm text-sm">
                    {skill.categoryIcon} {skill.category}
                  </Badge>
                  <span className="font-black text-sm bg-neo-accent text-white px-2 py-0.5 border-2 border-black shadow-neo-sm rotate-1 inline-block">
                    +{skill.xpEarned} XP
                  </span>
                </div>
                <CardTitle className="text-xl mt-2">{skill.title}</CardTitle>
                <CardDescription className="text-black font-bold">
                  Completed {formatDate(skill.completedAt)}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <Link href={`/dashboard/skill/${skill.slug}`} className="w-full">
                  <Button
                    variant="secondary"
                    className="w-full shadow-neo-sm border-2 border-black font-black group-hover:bg-neo-accent group-hover:text-white transition-colors"
                  >
                    Review Lesson →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
