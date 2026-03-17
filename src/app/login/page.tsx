import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function LoginPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 min-h-[80vh] bg-neo-muted/10 relative overflow-hidden">
      
      {/* Decorative stars */}
      <div className="absolute top-20 left-10 md:left-32 -rotate-12 select-none">
        <span className="text-6xl text-neo-secondary drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">★</span>
      </div>
      <div className="absolute bottom-20 right-10 md:right-32 rotate-12 select-none">
        <span className="text-8xl text-neo-accent drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">★</span>
      </div>

      <Card className="w-full max-w-lg z-10 rotate-1 hover:rotate-0 transition-transform shadow-neo-xl">
        <CardHeader className="bg-neo-secondary text-black">
          <Badge className="w-fit mb-2 border-2 bg-white text-black hover:rotate-0 shadow-neo-sm">Welcome Back</Badge>
          <CardTitle>Login to Brainrawt</CardTitle>
          <CardDescription className="text-black/80 font-bold mt-2">
            Don&apos;t break your streak. Re-enter the arena.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 flex flex-col gap-4">
          <Button variant="outline" className="w-full shadow-neo-sm">
            <span className="mr-2 uppercase font-black text-xl">G</span> Continue with Google
          </Button>
          
          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t-4 border-black"></div>
            <span className="flex-shrink-0 mx-4 font-black text-sm uppercase text-black">OR</span>
            <div className="flex-grow border-t-4 border-black"></div>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-bold uppercase tracking-wide text-sm">Email Address</label>
              <Input type="email" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold uppercase tracking-wide text-sm">Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button type="button" className="w-full mt-4 text-lg">Enter Arena</Button>
          </form>
        </CardContent>
        <CardFooter className="bg-neo-muted/20 border-t-4 border-black justify-center p-6">
          <p className="font-bold text-center">
            No account yet? <Link href="/signup" className="underline decoration-4 text-neo-accent underline-offset-4 hover:text-black hover:decoration-black">Sign up</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
