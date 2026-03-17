import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Quiz } from "@/components/learning/Quiz"

const DUMMY_SKILL = {
  title: "The Feynman Technique",
  category: "Communication",
  summary: "Learn anything faster by explaining it to a 12-year-old.",
  lesson: "The Feynman Technique is a mental model named after Richard Feynman, a Nobel Prize-winning physicist. It consists of 4 steps:\n\n1. Choose a concept you want to learn.\n2. Explain it to a 12-year-old. Remove jargon, simplify the language.\n3. Reflect, refine, and simplify. If you get stuck, go back to the source material.\n4. Organize and review. Create a simple narrative.",
  example: "If you're learning about blockchain, don't say 'It's a decentralized distributed ledger'. Say 'It's a shared Google Doc that no single person can randomly edit without everyone else agreeing'.",
  challenge: "Take 1 minute right now to explain the concept of 'Inflation' as if you're talking to a middle schooler. Write it down or speak it out loud.",
  quiz: [
    {
      question: "What is the core idea of the Feynman Technique?",
      options: [
        "Memorize everything by rote repetition.",
        "Highlight the entire textbook in different colors.",
        "Explain the concept simply to a 12-year-old.",
        "Read the material 10 times in a row."
      ],
      answer: "Explain the concept simply to a 12-year-old."
    },
    {
       question: "What should you do if you get stuck while explaining?",
       options: [
         "Use more complex vocabulary to sound smarter.",
         "Go back to the source material and relearn.",
         "Give up and try a new skill.",
         "Ask the 12-year-old for help."
       ],
       answer: "Go back to the source material and relearn."
    }
  ]
}

export default function SkillPage() {
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto flex flex-col gap-12 pt-12 pb-24 relative overflow-hidden">
      
      <Link href="/dashboard" className="font-bold border-2 border-black w-fit px-4 py-1 hover:bg-neo-secondary shadow-neo-sm -rotate-1 transition-transform inline-block bg-white text-black z-10">
        ← Back to Training Grounds
      </Link>

      <div className="border-4 border-black p-8 bg-neo-muted/30 shadow-[12px_12px_0px_0px_#FF6B6B] rotate-1 z-10">
        <Badge variant="secondary" className="mb-4 bg-white border-2 border-black inline-block text-black shadow-neo-sm">Communication</Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">{DUMMY_SKILL.title}</h1>
        <p className="text-xl font-bold bg-white p-4 border-4 border-black shadow-neo-sm -rotate-1">{DUMMY_SKILL.summary}</p>
      </div>

      <div className="space-y-12 z-10">
        <div className="border-l-[8px] border-black pl-6">
          <h2 className="text-3xl font-black uppercase mb-4 text-neo-accent drop-shadow-[2px_2px_0px_#000]">1. The Lesson</h2>
          <div className="font-bold text-lg whitespace-pre-wrap leading-relaxed max-w-3xl">
            {DUMMY_SKILL.lesson}
          </div>
        </div>

        <div className="border-l-[8px] border-black pl-6 pt-4 border-neo-secondary">
          <h2 className="text-3xl font-black uppercase mb-4 text-neo-secondary drop-shadow-[2px_2px_0px_#000]">2. Real World Example</h2>
          <div className="font-bold text-lg p-6 border-4 border-black bg-white shadow-neo-sm rotate-1">
            {DUMMY_SKILL.example}
          </div>
        </div>

        <div className="border-l-[8px] border-black pl-6 pt-4 border-neo-muted">
          <h2 className="text-3xl font-black uppercase mb-4 text-neo-muted drop-shadow-[2px_2px_0px_#000]">3. Interactive Challenge</h2>
          <div className="font-bold text-lg p-6 border-4 border-black bg-neo-secondary/30 shadow-neo-sm -rotate-1 flex flex-col gap-4">
            <p className="text-black bg-white p-4 border-4 border-black">{DUMMY_SKILL.challenge}</p>
            <textarea 
              placeholder="Jot down your explanation here (Optional)" 
              className="border-4 border-black p-4 min-h-[120px] bg-white font-bold resize-y focus-visible:outline-none focus-visible:bg-slate-50 shadow-neo-sm"
            />
          </div>
        </div>

        <div className="border-l-[8px] border-black pl-6 pt-4 border-neo-foreground">
          <h2 className="text-3xl font-black uppercase mb-4 drop-shadow-[2px_2px_0px_#FF6B6B] text-black bg-white inline-block px-2 border-4 border-black shadow-neo-sm rotate-2">4. Knowledge Check</h2>
          <Quiz questions={DUMMY_SKILL.quiz} />
        </div>
      </div>

    </div>
  )
}
