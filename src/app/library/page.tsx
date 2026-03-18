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
        {SKILL_CATEGORIES.map(cat => (
          <Badge key={cat.title} variant="outline" className="text-sm px-4 py-1.5 cursor-pointer hover:bg-neo-secondary border-2 border-black whitespace-nowrap">
            {cat.icon} {cat.title}
          </Badge>
        ))}
      </div>

      <div className="flex flex-col gap-20">
        {SKILL_CATEGORIES.map((category) => (
          <section key={category.title} className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{category.icon}</span>
              <h3 className="text-3xl font-black uppercase border-b-8 border-neo-accent pb-1">{category.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.skills.map((skill) => (
                <Card key={skill.title} className="border-4 border-black shadow-neo-md hover:shadow-neo-lg hover:-translate-y-2 transition-all flex flex-col group bg-white overflow-hidden">
                  <CardHeader className="p-6 bg-slate-50 border-b-4 border-black">
                    <Badge variant="outline" className="w-fit mb-2 shadow-neo-sm border-2 bg-white">{category.title}</Badge>
                    <CardTitle className="text-2xl font-black uppercase tracking-tight">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 flex-1">
                    <p className="font-bold text-lg text-black/80">{skill.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="text-xs font-black uppercase bg-neo-muted/30 border-2 border-black px-3 py-1.5">5 Mins</span>
                      <span className="text-xs font-black uppercase bg-neo-muted/30 border-2 border-black px-3 py-1.5 whitespace-nowrap">Micro-Skill</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-0 border-t-4 border-black mt-auto">
                    <Link href="/signup" className="w-full">
                      <button className="w-full bg-neo-accent text-white group-hover:bg-neo-accent active:translate-y-0.5 font-black uppercase text-xl py-6 transition-all shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-4px_-4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2">
                        View Lesson →
                      </button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

    </div>
  )
}

const SKILL_CATEGORIES = [
  {
    title: "Thinking & Productivity",
    icon: "🧠",
    skills: [
      { title: "The 2-Minute Rule", description: "If it takes less than 2 minutes, do it now—instantly kill procrastination." },
      { title: "Brain Dump Reset", description: "Clear mental clutter and regain focus in under 5 minutes." },
      { title: "The “Next Action” Trick", description: "Stop feeling overwhelmed by knowing exactly what to do next." },
      { title: "5-Minute Deep Focus", description: "Enter a distraction-free state almost instantly." },
      { title: "Decision Shortcut (10-10-10 Rule)", description: "Make better decisions without overthinking." },
    ],
  },
  {
    title: "Digital & Tech",
    icon: "💻",
    skills: [
      { title: "Google Like a Pro", description: "Find exactly what you need using simple search tricks." },
      { title: "Write Better AI Prompts", description: "Get smarter answers from AI with one simple structure." },
      { title: "Keyboard Shortcut Boost", description: "Save hours weekly using just a few key combos." },
      { title: "Spot Fake Websites", description: "Avoid scams instantly with quick checks anyone can do." },
      { title: "Clean Your Inbox Fast", description: "Go from chaos to organized in minutes." },
    ],
  },
  {
    title: "Money & Life Admin",
    icon: "💰",
    skills: [
      { title: "The 50/30/20 Money Split", description: "Instantly structure your finances without spreadsheets." },
      { title: "Quick Expense Audit", description: "Find where your money is leaking in 5 minutes." },
      { title: "Subscription Cleanup", description: "Cancel what you don’t need and save money instantly." },
      { title: "Price Check Trick", description: "Avoid overpaying using a simple comparison habit." },
      { title: "Split Bills Fairly", description: "Never overpay in group expenses again." },
    ],
  },
  {
    title: "Social & Communication",
    icon: "🗣️",
    skills: [
      { title: "Remember Names Easily", description: "Use a simple trick to never forget names again." },
      { title: "The Pause Power Move", description: "Sound more confident by speaking slightly slower." },
      { title: "Ask Better Questions", description: "Make conversations instantly more interesting." },
      { title: "Exit Conversations Smoothly", description: "Leave without awkwardness or excuses." },
      { title: "Compliment Like a Pro", description: "Give compliments that actually feel genuine." },
    ],
  },
  {
    title: "Confidence & Presence",
    icon: "🧍‍♂️",
    skills: [
      { title: "Fix Your Posture Instantly", description: "Look more confident in under 10 seconds." },
      { title: "Eye Contact Rule (3 Seconds)", description: "Build trust without making it weird." },
      { title: "The “Slow Walk” Effect", description: "Appear more calm and in control immediately." },
      { title: "Stop Saying “Um”", description: "Replace filler words with silence for authority." },
      { title: "First Impression Hack", description: "Make people like you within seconds." },
    ],
  },
  {
    title: "Health & Energy",
    icon: "🏋️",
    skills: [
      { title: "The 5-Minute Energy Reset", description: "Beat fatigue without caffeine." },
      { title: "Hydration Check", description: "Know instantly if you’re dehydrated." },
      { title: "Stretch for Desk Pain", description: "Relieve stiffness and tension quickly." },
      { title: "Power Breathing", description: "Reduce stress and calm your mind fast." },
      { title: "Sleep Fast Trick", description: "Fall asleep quicker using a simple method." },
    ],
  },
  {
    title: "Learning & Growth",
    icon: "🎯",
    skills: [
      { title: "Learn Faster with Feynman", description: "Understand anything by explaining it simply." },
      { title: "Memory Anchor Trick", description: "Remember more using association." },
      { title: "Skim Smarter", description: "Extract key ideas from any text in minutes." },
      { title: "Avoid Information Overload", description: "Filter what actually matters instantly." },
      { title: "Turn Notes into Action", description: "Stop collecting info—start applying it." },
    ],
  },
  {
    title: "Modern Life Hacks",
    icon: "⚡",
    skills: [
      { title: "Pack Like a Minimalist", description: "Never overpack again with one rule." },
      { title: "Find Anything Faster", description: "Organize your space using one simple system." },
      { title: "Screenshot Organization Hack", description: "Never lose important info in your gallery again." },
      { title: "Quick Decision Filter", description: "Know if something is worth your time instantly." },
      { title: "Reset Your Day in 5 Minutes", description: "Recover from a bad mood or low productivity." },
    ],
  },
];
