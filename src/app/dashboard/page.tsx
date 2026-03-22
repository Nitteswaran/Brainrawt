import { currentUser } from "@clerk/nextjs/server"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DashboardStats } from "@/components/dashboard/DashboardStats"
import { CompletedSkillsSection } from "@/components/dashboard/CompletedSkillsSection"

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ upgraded?: string }>;
}) {
  const user = await currentUser();
  const { upgraded } = await searchParams;
  
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto flex flex-col gap-12">
      
      {upgraded === "true" && (
        <div className="border-4 border-black p-6 bg-green-400 shadow-neo-md rotate-1 animate-bounce-once text-center z-50">
          <h2 className="text-3xl font-black uppercase mb-2">🚀 Welcome to Premium!</h2>
          <p className="font-bold text-lg">Your account has been upgraded. Unleash the beast!</p>
        </div>
      )}

      {/* HEADER */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Your Training <span className="text-neo-accent neo-stroke-text block sm:inline">Grounds</span></h1>
        <p className="text-xl font-bold bg-white border-4 border-black py-2 px-4 shadow-neo-sm w-fit -rotate-1">
          Welcome back, {user?.firstName || 'Learner'}. Ready to level up?
        </p>
      </div>

      {/* TODAY'S SKILL */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-2">Today&apos;s Mission</h2>
          <Badge className="rotate-3 shadow-neo-sm">+100 XP</Badge>
        </div>
        
        <Card className="hover:-translate-y-2 hover:shadow-neo-xl rotate-1 group w-full bg-neo-secondary border-black shadow-[12px_12px_0px_0px_#FF6B6B]">
          <CardHeader className="bg-white border-b-4 border-black">
            <Badge variant="outline" className="w-fit mb-2 shadow-neo-sm">Thinking &amp; Productivity</Badge>
            <CardTitle className="text-3xl">The 2-Minute Rule</CardTitle>
            <CardDescription className="text-black text-lg font-bold mt-2">If it takes less than 2 minutes, do it now—instantly kill procrastination.</CardDescription>
          </CardHeader>
          <CardContent className="bg-neo-secondary p-6">
            <div className="font-bold mb-4">
              Estimated Read: 3 mins • Challenge: 2 mins
            </div>
          </CardContent>
          <CardFooter className="bg-white border-t-4 border-black p-6">
            <Link href="/dashboard/skill/the-2-minute-rule" className="w-full">
              <Button size="lg" className="w-full text-xl shadow-neo-sm bg-neo-accent text-white hover:bg-neo-accent/90">Begin Lesson</Button>
            </Link>
          </CardFooter>
        </Card>
      </section>

      {/* STATS — live from Database/localStorage */}
      <DashboardStats />

      {/* COMPLETED SKILLS */}
      <CompletedSkillsSection />

    </div>
  )
}
