import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LibraryPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto flex flex-col gap-12 min-h-[85vh]">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Skill <span className="text-neo-accent neo-stroke-text block sm:inline">Library</span></h1>
        <p className="text-xl font-bold bg-white border-4 border-black py-2 px-4 shadow-neo-sm w-fit rotate-1">
          Browse and search through all 500+ micro-skills.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 border-4 border-black p-4 bg-neo-muted/20 shadow-neo-sm -rotate-1">
        <Badge variant="secondary" className="text-sm px-4 py-1.5 cursor-pointer hover:bg-white border-2 border-black">All Categories</Badge>
        <Badge variant="outline" className="text-sm px-4 py-1.5 cursor-pointer hover:bg-neo-secondary border-2 border-black">Productivity</Badge>
        <Badge variant="outline" className="text-sm px-4 py-1.5 cursor-pointer hover:bg-neo-secondary border-2 border-black">Psychology</Badge>
        <Badge variant="outline" className="text-sm px-4 py-1.5 cursor-pointer hover:bg-neo-secondary border-2 border-black">Coding</Badge>
        <Badge variant="outline" className="text-sm px-4 py-1.5 cursor-pointer hover:bg-neo-secondary border-2 border-black text-black/50 line-through decoration-2">Premium Only</Badge>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="hover:-translate-y-2 hover:shadow-neo-lg transition-transform flex flex-col group h-full">
            <CardHeader className={`border-b-4 border-black flex-none ${i % 2 === 0 ? 'bg-neo-secondary' : 'bg-neo-accent text-white'}`}>
              <Badge variant="outline" className={`w-fit mb-2 shadow-neo-sm border-2 ${i % 2 === 0 ? 'bg-white text-black' : 'text-white border-white'}`}>Productivity</Badge>
              <CardTitle className={i % 2 === 0 ? 'text-black' : 'text-white'}>Time Blocking {i}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white flex-1 border-b-4 border-black">
              <p className="font-bold text-black/80">Take control of your calendar by assigning a strict block of time to specific tasks. Stop multitasking.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs font-black uppercase bg-slate-200 border-2 border-black px-2 py-1">3 Mins</span>
                <span className="text-xs font-black uppercase bg-slate-200 border-2 border-black px-2 py-1">Beginner</span>
              </div>
            </CardContent>
            <CardFooter className="p-0 bg-white flex-none">
              <Link href={`/dashboard/skill/${i}`} className="w-full">
                <button className="w-full bg-white hover:bg-neo-secondary font-black uppercase text-center py-4 transition-colors">
                  View Lesson →
                </button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </section>

    </div>
  )
}
