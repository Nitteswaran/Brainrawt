import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto flex flex-col gap-12">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Your Training <span className="text-neo-accent neo-stroke-text block sm:inline">Grounds</span></h1>
        <p className="text-xl font-bold bg-white border-4 border-black py-2 px-4 shadow-neo-sm w-fit -rotate-1">
          Welcome back, Learner. Ready to level up?
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
            <Badge variant="outline" className="w-fit mb-2 shadow-neo-sm">Communication</Badge>
            <CardTitle className="text-3xl">The Feynman Technique</CardTitle>
            <CardDescription className="text-black text-lg font-bold mt-2">Learn to explain complex ideas simply in 3 minutes.</CardDescription>
          </CardHeader>
          <CardContent className="bg-neo-secondary p-6">
            <div className="font-bold mb-4">
              Estimated Read: 3 mins • Challenge: 2 mins
            </div>
          </CardContent>
          <CardFooter className="bg-white border-t-4 border-black p-6">
            <Link href="/dashboard/skill/1" className="w-full">
              <Button size="lg" className="w-full text-xl shadow-neo-sm bg-neo-accent text-white hover:bg-neo-accent/90">Begin Lesson</Button>
            </Link>
          </CardFooter>
        </Card>
      </section>

      {/* STATS OVERVIEW */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-neo-muted/50 rotate-1 shadow-neo-sm hover:shadow-neo-md hover:-translate-y-1">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2 mt-0">
            <span className="text-5xl font-black text-neo-accent drop-shadow-[2px_2px_0px_#000]">12</span>
            <span className="font-bold uppercase tracking-widest text-sm text-black pt-2">Day Streak 🔥</span>
          </CardContent>
        </Card>
        
        <Card className="bg-neo-secondary/50 -rotate-1 shadow-neo-sm hover:shadow-neo-md hover:-translate-y-1">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2 mt-0">
            <span className="text-5xl font-black text-white drop-shadow-[2px_2px_0px_#FF6B6B] neo-stroke-text">1,450</span>
            <span className="font-bold uppercase tracking-widest text-sm pt-2">Total XP ⭐</span>
          </CardContent>
        </Card>
        
        <Card className="bg-white rotate-2 shadow-neo-sm hover:shadow-neo-md hover:-translate-y-1">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2 mt-0">
            <span className="text-5xl font-black text-neo-muted drop-shadow-[2px_2px_0px_#000]">14</span>
            <span className="font-bold uppercase tracking-widest text-sm pt-2">Skills Mastered 🧠</span>
          </CardContent>
        </Card>
      </section>

    </div>
  )
}
