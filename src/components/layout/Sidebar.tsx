"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useUserProgress } from "@/hooks/useUserProgress"
import { Skeleton } from "@/components/ui/skeleton"

export default function Sidebar() {
  const { progress, loading } = useUserProgress()

  return (
    <aside className="w-64 border-r-4 border-black bg-neo-muted/20 hidden md:block flex-shrink-0 min-h-[calc(100vh-76px)]">
      <div className="p-6 flex flex-col h-full gap-8">
        <div className="flex flex-col gap-2">
          {loading ? (
            <>
              <Skeleton className="h-8 w-24 border-2 border-black" />
              <Skeleton className="h-8 w-32 border-2 border-black" />
            </>
          ) : (
            <>
              <Badge className="w-fit mb-2 shadow-neo-sm border-2 px-3 py-1 text-sm font-black uppercase">
                XP: {progress?.totalXP || 0}
              </Badge>
              <Badge variant="secondary" className="w-fit shadow-neo-sm border-2 px-3 py-1 text-sm font-black uppercase">
                Streak: {progress?.streak || 0} Days 🔥
              </Badge>
            </>
          )}
        </div>

        <nav className="flex flex-col gap-4">
          <Link href="/dashboard" className="font-black text-lg uppercase hover:underline decoration-4 underline-offset-4">Today&apos;s Skill</Link>
          <Link href="/library" className="font-black text-lg uppercase hover:underline decoration-4 underline-offset-4">Library</Link>
          <Link href="/profile" className="font-black text-lg uppercase hover:underline decoration-4 underline-offset-4">Profile</Link>
          <Link href="/leaderboard" className="font-black text-lg uppercase hover:underline decoration-4 underline-offset-4">Leaderboard</Link>
        </nav>

        <div className="mt-auto mb-4 p-4 border-4 border-black bg-neo-secondary shadow-neo-sm rotate-1 hover:rotate-0 transition-transform">
          <h4 className="font-black uppercase mb-2">Upgrade to Premium</h4>
          <p className="font-bold text-sm mb-4 leading-tight">Generate infinite AI skills. No limits.</p>
          <Link href="/pricing" className="bg-black text-white font-bold uppercase py-2 px-4 block text-center shadow-neo-sm active:-translate-x-0 active:translate-y-1 active:shadow-none hover:bg-black/90 border-2 border-black">
            View Plans
          </Link>
        </div>
      </div>
    </aside>
  )
}
