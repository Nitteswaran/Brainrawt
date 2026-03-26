import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UpgradeButton } from "@/components/pricing/UpgradeButton"
import { Show } from "@clerk/nextjs"

export default function PricingPage() {
  return (
    <div className="flex-1 flex flex-col items-center py-20 px-4">
      <div className="text-center max-w-3xl mb-16 relative">
        <Badge className="mb-6 -rotate-2 text-lg shadow-neo-sm px-4 py-1.5 inline-block">No Hidden Fees. No B.S.</Badge>
        <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
          Invest in <br className="sm:hidden" />
          <span className="bg-neo-secondary px-2 border-4 border-black shadow-neo-sm rotate-1 inline-block mt-2">Yourself</span>
        </h1>
        <p className="text-xl sm:text-2xl font-bold bg-white border-4 border-black p-4 shadow-neo-sm rotate-[0.5deg]">
          Start for free to test the waters. Upgrade when you&apos;re ready to get serious and generate infinite AI skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* FREE PLAN */}
        <div className="relative isolate group mt-8 md:mt-0">
          <div className="absolute top-0 right-0 h-16 w-16 bg-white border-b-4 border-l-4 border-black z-20 flex items-center justify-center font-black text-xl">
            $0
          </div>
          <Card className="flex flex-col h-full rotate-1 hover:rotate-0 transition-transform shadow-neo-md border-black bg-neo-muted/10 h-[500px]">
            <CardHeader className="bg-white border-b-4 border-black flex-none">
              <CardTitle className="text-3xl">Free</CardTitle>
              <CardDescription className="text-lg">The 7-Day dopamine hit.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 mt-6 bg-transparent p-6">
              <ul className="space-y-4 font-bold text-lg mb-8">
                <li className="flex items-center"><span className="mr-2 text-2xl font-black">✓</span> 1 Skill per day</li>
                <li className="flex items-center"><span className="mr-2 text-2xl font-black">✓</span> Limited categories</li>
                <li className="flex items-center opacity-50"><span className="mr-2 text-2xl font-black">✕</span> No AI generated skills</li>
                <li className="flex items-center opacity-50"><span className="mr-2 text-2xl font-black">✕</span> No advanced roadmaps</li>
              </ul>
            </CardContent>
            <CardFooter className="bg-white justify-center border-t-4 border-black flex-none p-6 mt-auto">
              <Show when="signed-out">
                <Link href="/signup" className="w-full">
                  <Button variant="outline" className="w-full text-lg h-14 bg-neo-muted/30 border-black">Start Free</Button>
                </Link>
              </Show>
              <Show when="signed-in">
                <Link href="/dashboard" className="w-full">
                  <Button variant="outline" className="w-full text-lg h-14 bg-neo-muted/30 border-black">Go to Dashboard</Button>
                </Link>
              </Show>
            </CardFooter>
          </Card>
        </div>

        {/* PREMIUM PLAN */}
        <div className="relative isolate group mt-8 md:mt-0">
          <div className="absolute top-0 right-0 h-20 w-20 bg-neo-secondary border-b-4 border-l-4 border-black z-20 flex flex-col items-center justify-center font-black">
            <span className="text-2xl leading-none">$8</span>
            <span className="text-xs uppercase tracking-tighter">/mo</span>
          </div>
          <Badge className="absolute -top-6 -left-4 z-30 bg-neo-secondary border-4 border-black text-black px-4 py-2 text-sm shadow-neo-sm rotate-6">
            ★ Most Popular ★
          </Badge>
          <Card className="flex flex-col h-full -rotate-2 hover:rotate-0 transition-transform shadow-[12px_12px_0px_0px_#FF6B6B] border-black bg-neo-accent h-[500px]">
            <CardHeader className="bg-neo-accent text-white border-b-4 border-black flex-none pt-8">
              <CardTitle className="text-white text-4xl">Premium</CardTitle>
              <CardDescription className="text-white/90 text-lg">Unleash the beast.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 mt-0 bg-white border-black p-6">
              <ul className="space-y-4 font-bold text-lg pt-6">
                <li className="flex items-center"><span className="mr-2 text-xl font-black text-neo-accent">✓</span> Unlimited skills & history</li>
                <li className="flex items-center"><span className="mr-2 text-xl font-black text-neo-accent">✓</span> All categories & deep dives</li>
                <li className="flex items-center"><span className="mr-2 text-xl font-black text-neo-accent">✓</span> Dynamic AI Skill Generator</li>
                <li className="flex items-center"><span className="mr-2 text-xl font-black text-neo-accent">✓</span> Advanced roadmaps</li>
              </ul>
            </CardContent>
            <CardFooter className="bg-white justify-center border-t-4 border-black flex-none p-6 mt-auto">
              <UpgradeButton />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
