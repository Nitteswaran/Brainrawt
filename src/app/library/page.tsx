"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useUser } from "@clerk/nextjs"
import { ALL_SKILLS } from "@/lib/skills-data"

const CATEGORIES = [
  { title: "Thinking & Productivity", icon: "🧠" },
  { title: "Digital & Tech", icon: "💻" },
  { title: "Money & Life Admin", icon: "💰" },
  { title: "Social & Communication", icon: "🗣️" },
  { title: "Confidence & Presence", icon: "🧍‍♂️" },
  { title: "Health & Energy", icon: "🏋️" },
  { title: "Learning & Growth", icon: "🎯" },
  { title: "Modern Life Hacks", icon: "⚡" },
  { title: "Criminology", icon: "🕵️" },
  { title: "Philosophy", icon: "🗿" },
  { title: "Statistics", icon: "📈" },
  { title: "Biology", icon: "🧬" },
  { title: "Geography", icon: "🌍" },
  { title: "Engineering", icon: "⚙️" },
  { title: "Cinema", icon: "🎞️" },
  { title: "Personal Finance", icon: "💰" },
  { title: "Space", icon: "🚀" },
  { title: "Psychology", icon: "🧠" },
  { title: "Literature", icon: "📖" },
  { title: "Art", icon: "🖼" },
  { title: "History", icon: "🏺" },
  { title: "Food", icon: "🥑" },
  { title: "Architecture", icon: "🏛️" },
  { title: "Fashion", icon: "👠" },
  { title: "Music", icon: "🎵" },
  { title: "Religion", icon: "🙏" },
  { title: "Artificial Intelligence", icon: "✨" },
  { title: "Paleontology", icon: "🦴" },
  { title: "Math", icon: "📐" },
  { title: "Logic", icon: "🤔" },
]

export default function LibraryPage() {
  const { isSignedIn } = useUser()

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
        {CATEGORIES.map(cat => (
          <Badge key={cat.title} variant="outline" className="text-sm px-4 py-1.5 cursor-pointer hover:bg-neo-secondary border-2 border-black whitespace-nowrap">
            {cat.icon} {cat.title}
          </Badge>
        ))}
      </div>

      <div className="flex flex-col gap-20">
        {CATEGORIES.map((category) => {
          const skills = ALL_SKILLS.filter(s => s.category === category.title)
          return (
            <section key={category.title} className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-3xl font-black uppercase border-b-8 border-neo-accent pb-1">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => (
                  <Card key={skill.slug} className="border-4 border-black shadow-neo-md hover:shadow-neo-lg hover:-translate-y-2 transition-all flex flex-col group bg-white overflow-hidden">
                    <CardHeader className="p-6 bg-slate-50 border-b-4 border-black">
                      <Badge variant="outline" className="w-fit mb-2 shadow-neo-sm border-2 bg-white">{category.title}</Badge>
                      <CardTitle className="text-2xl font-black uppercase tracking-tight">{skill.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 flex-1">
                      <p className="font-bold text-lg text-black/80">{skill.summary}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <span className="text-xs font-black uppercase bg-neo-muted/30 border-2 border-black px-3 py-1.5">5 Mins</span>
                        <span className="text-xs font-black uppercase bg-neo-muted/30 border-2 border-black px-3 py-1.5 whitespace-nowrap">Micro-Skill</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 border-t-4 border-black mt-auto">
                      <Link href={isSignedIn ? `/dashboard/skill/${skill.slug}` : "/signup"} className="w-full">
                        <button className="w-full bg-neo-accent text-white group-hover:bg-neo-accent active:translate-y-0.5 font-black uppercase text-xl py-6 transition-all shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-4px_-4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2">
                          View Lesson →
                        </button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          )
        })}
      </div>

    </div>
  )
}
