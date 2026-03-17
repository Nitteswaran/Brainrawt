import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: "productivity", name: "Productivity ⚡" },
  { id: "communication", name: "Communication 🗣️" },
  { id: "ai", name: "AI Tools 🤖" },
  { id: "business", name: "Business 💼" },
  { id: "psychology", name: "Psychology 🧠" },
  { id: "coding", name: "Coding 💻" },
  { id: "marketing", name: "Marketing 📈" },
  { id: "life", name: "Life Skills 🛠️" },
]

export default function OnboardingPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 min-h-[85vh] bg-neo-muted/10">
      <Card className="w-full max-w-2xl z-10 rotate-1 shadow-neo-xl">
        <CardHeader className="bg-neo-accent text-white border-b-4 border-black">
          <Badge className="w-fit mb-2 border-2 text-white shadow-neo-sm border-white">Step 1 of 1</Badge>
          <CardTitle className="text-3xl text-white">Customize Your Brainrawt</CardTitle>
          <CardDescription className="text-white/90 font-bold mt-2">
            What skills do you want to build? Select at least 3 categories.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((category) => (
              <label key={category.id} className="cursor-pointer group relative">
                <input type="checkbox" className="peer sr-only" name="categories" value={category.id} />
                <div className="border-4 border-black p-4 bg-white transition-all peer-checked:bg-neo-secondary peer-checked:shadow-neo-sm peer-checked:-translate-x-[2px] peer-checked:-translate-y-[2px] group-hover:bg-slate-50 font-black text-lg uppercase flex items-center justify-between">
                  <span>{category.name}</span>
                  <div className="w-6 h-6 border-4 border-black rounded-full peer-checked:bg-black transition-colors" />
                </div>
              </label>
            ))}
          </div>

          <div className="mt-8">
            <label className="font-black uppercase tracking-wide text-lg mb-2 block">What&apos;s your main learning goal?</label>
            <div className="relative">
              <select className="flex h-14 w-full rounded-none border-4 border-black bg-white px-4 py-2 text-lg font-bold focus-visible:bg-neo-secondary focus-visible:shadow-neo-sm focus-visible:outline-none appearance-none cursor-pointer">
                <option value="">Select a goal...</option>
                <option value="career">Advance my career</option>
                <option value="hobby">Learn for fun</option>
                <option value="business">Start a business</option>
                <option value="self_improvement">General self-improvement</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black text-2xl font-black border-l-4 border-black">
                ↓
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-neo-muted/20 border-t-4 border-black p-6">
          <Link href="/dashboard" className="w-full">
            <Button size="lg" className="w-full text-xl shadow-neo-sm">Generate Learning Path</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
