import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-black bg-neo-background px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo element with rotate for neo-brutalism */}
          <div className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-accent text-white shadow-neo-sm -rotate-3 transition-transform hover:rotate-0">
            <span className="font-black text-2xl uppercase">B</span>
          </div>
          <span className="hidden sm:inline-block font-black text-2xl uppercase tracking-tighter">
            Brainrawt
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/library" className="hidden sm:inline-block font-bold uppercase hover:underline decoration-4 underline-offset-4">
            Library
          </Link>
          <Link href="/pricing" className="hidden sm:inline-block font-bold uppercase hover:underline decoration-4 underline-offset-4">
            Pricing
          </Link>
          <Show when="signed-out">
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <Button variant="outline" className="h-10 px-4 sm:h-12 sm:px-6 text-xs sm:text-sm">Login</Button>
            </SignInButton>
            <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
              <Button className="h-10 px-4 sm:h-12 sm:px-6 text-xs sm:text-sm">Start Learning - Free</Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </nav>
  )
}
