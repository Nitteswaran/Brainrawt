import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function SignupPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 min-h-[80vh] bg-neo-secondary/10 relative overflow-hidden">
      
      {/* Decorative shapes */}
      <div className="absolute top-32 right-10 md:right-32 rotate-12 select-none w-24 h-24 bg-neo-accent border-4 border-black shadow-neo-lg rounded-full"></div>
      <div className="absolute bottom-32 left-10 md:left-32 -rotate-6 select-none w-32 h-32 bg-neo-muted border-4 border-black shadow-neo-md hidden md:block"></div>

      <Card className="w-full max-w-lg z-10 -rotate-1 hover:rotate-0 transition-transform shadow-neo-xl">
        <CardHeader className="bg-neo-accent text-white border-b-4 border-black">
          <Badge className="w-fit mb-2 border-2 border-white text-white shadow-neo-sm hover:rotate-3">Start Learning</Badge>
          <CardTitle className="text-white">Join Brainrawt</CardTitle>
          <CardDescription className="text-white/90 font-bold mt-2">
            Build 1 unignorable skill every day.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 flex flex-col gap-4">
          <Button variant="outline" className="w-full shadow-neo-sm">
            <span className="mr-2 uppercase font-black text-xl">G</span> Sign up with Google
          </Button>
          
          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t-4 border-black"></div>
            <span className="flex-shrink-0 mx-4 font-black text-sm uppercase text-black">OR</span>
            <div className="flex-grow border-t-4 border-black"></div>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-bold uppercase tracking-wide text-sm">Full Name</label>
              <Input type="text" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold uppercase tracking-wide text-sm">Email Address</label>
              <Input type="email" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold uppercase tracking-wide text-sm">Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button type="button" variant="secondary" className="w-full mt-4 text-lg">Create Account</Button>
          </form>
        </CardContent>
        <CardFooter className="bg-white border-t-4 border-black justify-center p-6">
          <p className="font-bold text-center">
            Already in? <Link href="/login" className="underline decoration-4 text-neo-accent underline-offset-4 hover:text-black hover:decoration-black">Log in</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
