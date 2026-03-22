import { currentUser } from "@clerk/nextjs/server"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DashboardStats } from "@/components/dashboard/DashboardStats"
import { CompletedSkillsSection } from "@/components/dashboard/CompletedSkillsSection"
import { prisma } from "@/lib/prisma"
import { ALL_SKILLS } from "@/lib/skills-data"

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ upgraded?: string }>;
}) {
  const clerkUser = await currentUser();
  const { upgraded } = await searchParams;

  // Fetch completed skills from DB
  const completedSkills = clerkUser 
    ? await prisma.userProgress.findMany({
        where: { userId: clerkUser.id, completed: true },
        select: { skillId: true }
      })
    : [];
  
  const completedIds = new Set(completedSkills.map(s => s.skillId));
  
  // Find uncompleted skills
  const availableSkills = ALL_SKILLS.filter(skill => !completedIds.has(skill.slug));
  
  // Pick a skill - use date as seed so it stays same for the day, but changes if one is completed
  // Or just pick the first one available
  const todayMission = availableSkills.length > 0 ? availableSkills[0] : null;
  
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
          Welcome back, {clerkUser?.firstName || 'Learner'}. Ready to level up?
        </p>
      </div>

      {/* TODAY'S SKILL */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-2">Today&apos;s Mission</h2>
          <Badge className="rotate-3 shadow-neo-sm">+100 XP</Badge>
        </div>
        
        {todayMission ? (
          <Card className="hover:-translate-y-2 hover:shadow-neo-xl rotate-1 group w-full bg-neo-secondary border-black shadow-[12px_12px_0px_0px_#FF6B6B]">
            <CardHeader className="bg-white border-b-4 border-black">
              <Badge variant="outline" className="w-fit mb-2 shadow-neo-sm">{todayMission.category}</Badge>
              <CardTitle className="text-3xl">{todayMission.title}</CardTitle>
              <CardDescription className="text-black text-lg font-bold mt-2">{todayMission.summary}</CardDescription>
            </CardHeader>
            <CardContent className="bg-neo-secondary p-6">
              <div className="font-bold mb-4">
                Estimated Read: 3 mins • Challenge: 2 mins
              </div>
            </CardContent>
            <CardFooter className="bg-white border-t-4 border-black p-6">
              <Link href={`/dashboard/skill/${todayMission.slug}`} className="w-full">
                <Button size="lg" className="w-full text-xl shadow-neo-sm bg-neo-accent text-white hover:bg-neo-accent/90">Begin Lesson</Button>
              </Link>
            </CardFooter>
          </Card>
        ) : (
          <div className="border-4 border-black p-8 bg-white shadow-neo-md text-center rotate-1">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="font-black text-3xl uppercase mb-2">You&apos;ve Mastered Everything!</h3>
            <p className="font-bold text-xl">You completed all available missions. Check back soon for new skills.</p>
          </div>
        )}
      </section>

      {/* STATS — live from Database/localStorage */}
      <DashboardStats />

      {/* COMPLETED SKILLS */}
      <CompletedSkillsSection />

    </div>
  )
}
