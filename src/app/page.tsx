import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      
      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <div className="flex flex-col space-y-8 z-10">
          <Badge className="w-fit rotate-2 text-sm px-4 py-1.5 shadow-neo-sm">Launch Offer: Free for 7 Days</Badge>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            Learn <span className="text-neo-accent neo-stroke-text block mt-2">1 Skill</span> Everyday.
          </h1>
          <p className="text-xl sm:text-2xl font-bold max-w-lg border-l-4 border-black pl-4 py-2 bg-white shadow-neo-sm -rotate-1">
            Build unignorable skills in under 5 minutes daily. The anti-boring, dopamine-driven way to level up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto text-xl shadow-neo-md -rotate-2 hover:rotate-0">Start Free Trial</Button>
            </Link>
            <Link href="/library">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-xl shadow-neo-md rotate-1 hover:rotate-0 border-neo-foreground">View Skills</Button>
            </Link>
          </div>
        </div>

        <div className="relative h-[400px] w-full mt-12 lg:mt-0 flex items-center justify-center">
          {/* Decorative SVG Hero Background */}
          <img 
            src="/hero_logo.svg" 
            alt="Hero Illustration" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-auto z-0 hidden lg:block object-contain pointer-events-none drop-shadow-neo-xl"
          />
          
          <Card className="relative z-20 w-80 rotate-2 hover:rotate-0 shadow-neo-xl">
            <CardHeader className="bg-neo-accent text-white border-b-4 border-black">
              <Badge variant="outline" className="w-fit mb-2 shadow-neo-sm border-2">Today&apos;s Skill</Badge>
              <CardTitle className="text-white">Active Listening</CardTitle>
            </CardHeader>
            <CardContent className="mt-4 p-6 pt-0">
              <CardDescription className="mb-4 text-black">
                Master the 3-second pause to command respect in any conversation.
              </CardDescription>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-slate-200 border-2 border-black w-full" />
                <div className="h-4 bg-slate-200 border-2 border-black w-3/4" />
                <div className="h-4 bg-slate-200 border-2 border-black w-5/6" />
              </div>
              <Button className="w-full h-12 shadow-neo-sm">Start 3-Min Lesson</Button>
            </CardContent>
          </Card>

          {/* Floating badge */}
          <Badge variant="secondary" className="absolute -top-6 -right-6 z-30 rotate-12 text-lg py-2 px-4 shadow-neo-sm border-4 border-black">
            +50 XP
          </Badge>
        </div>
      </section>

      {/* HOW IT WORKS BANNER */}
      <div className="w-full border-y-4 border-black bg-neo-secondary py-4 overflow-hidden flex whitespace-nowrap">
        <div className="text-2xl font-black uppercase tracking-widest px-4">
          ★ LESS THEORY ★ MORE ACTION ★ NO FLUFF ★ BUILD XP ★ DON&apos;T BREAK THE STREAK ★ LESS THEORY ★ MORE ACTION ★ NO FLUFF ★ BUILD XP
        </div>
      </div>

    </div>
  );
}
