import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Quiz } from "@/components/learning/Quiz"
import { ALL_SKILLS, getSkillBySlug } from "@/lib/skills-data"
import { notFound } from "next/navigation"
import { LessonAccessGate } from "@/components/learning/LessonAccessGate"

export function generateStaticParams() {
  return ALL_SKILLS.map((skill) => ({
    id: skill.slug,
  }))
}

export default async function SkillPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const skill = getSkillBySlug(id)

  if (!skill) {
    notFound()
  }

  return (
    <LessonAccessGate skillSlug={skill.slug}>
      <div className="p-6 md:p-10 max-w-4xl mx-auto flex flex-col gap-12 pt-12 pb-24 relative overflow-hidden">
        
        <Link href="/library" className="font-bold border-2 border-black w-fit px-4 py-1 hover:bg-neo-secondary shadow-neo-sm -rotate-1 transition-transform inline-block bg-white text-black z-10">
          ← Back to Library
        </Link>

        <div className="border-4 border-black p-8 bg-neo-muted/30 shadow-[12px_12px_0px_0px_#FF6B6B] rotate-1 z-10">
          <Badge variant="secondary" className="mb-4 bg-white border-2 border-black inline-block text-black shadow-neo-sm">{skill.category}</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">{skill.title}</h1>
          <p className="text-xl font-bold bg-white p-4 border-4 border-black shadow-neo-sm -rotate-1">{skill.summary}</p>
        </div>

        <div className="space-y-12 z-10">
          <div className="border-l-[8px] border-black pl-6">
            <h2 className="text-3xl font-black uppercase mb-4 text-neo-accent drop-shadow-[2px_2px_0px_#000]">1. The Lesson</h2>
            <div className="font-bold text-lg whitespace-pre-wrap leading-relaxed max-w-3xl">
              {skill.lesson}
            </div>
          </div>

          <div className="border-l-[8px] border-black pl-6 pt-4 border-neo-secondary">
            <h2 className="text-3xl font-black uppercase mb-4 text-neo-secondary drop-shadow-[2px_2px_0px_#000]">2. Real World Example</h2>
            <div className="font-bold text-lg p-6 border-4 border-black bg-white shadow-neo-sm rotate-1">
              {skill.example}
            </div>
          </div>

          <div className="border-l-[8px] border-black pl-6 pt-4 border-neo-muted">
            <h2 className="text-3xl font-black uppercase mb-4 text-neo-muted drop-shadow-[2px_2px_0px_#000]">3. Interactive Challenge</h2>
            <div className="font-bold text-lg p-6 border-4 border-black bg-neo-secondary/30 shadow-neo-sm -rotate-1 flex flex-col gap-4">
              <p className="text-black bg-white p-4 border-4 border-black">{skill.challenge}</p>
              <textarea 
                placeholder="Jot down your explanation here (Optional)" 
                className="border-4 border-black p-4 min-h-[120px] bg-white font-bold resize-y focus-visible:outline-none focus-visible:bg-slate-50 shadow-neo-sm"
              />
            </div>
          </div>

          <div className="border-l-[8px] border-black pl-6 pt-4 border-neo-foreground">
            <h2 className="text-3xl font-black uppercase mb-4 drop-shadow-[2px_2px_0px_#FF6B6B] text-black bg-white inline-block px-2 border-4 border-black shadow-neo-sm rotate-2">4. Knowledge Check</h2>
            <Quiz questions={skill.quiz} />
          </div>
        </div>

      </div>
    </LessonAccessGate>
  )
}
