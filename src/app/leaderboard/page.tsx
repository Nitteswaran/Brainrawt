import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const LEADERBOARD_DATA = [
  { rank: 1, name: "Alex R.", xp: 14500, streak: 142, tier: "Grandmaster" },
  { rank: 2, name: "Sarah J.", xp: 12400, streak: 98, tier: "Master" },
  { rank: 3, name: "Michael T.", xp: 11200, streak: 84, tier: "Master" },
  { rank: 4, name: "You", xp: 1450, streak: 12, tier: "Novice" },
  { rank: 5, name: "David M.", xp: 950, streak: 5, tier: "Beginner" },
]

export default function LeaderboardPage() {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto flex flex-col gap-12 min-h-[85vh]">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">The <span className="text-neo-secondary neo-stroke-text block sm:inline">Arena</span></h1>
        <p className="text-xl font-bold bg-white border-4 border-black py-2 px-4 shadow-neo-sm w-fit rotate-1">
          Compete globally. Who&apos;s the most skilled?
        </p>
      </div>

      <Card className="shadow-[12px_12px_0px_0px_#FFD93D] border-4 border-black rotate-0">
        <CardHeader className="bg-neo-secondary text-black border-b-4 border-black flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle className="text-3xl">Global Top Learners</CardTitle>
          <Badge className="bg-white text-black border-2 border-black shadow-neo-sm text-lg py-1 px-4">Season 4</Badge>
        </CardHeader>
        <CardContent className="p-0 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-4 border-black bg-neo-muted/20 text-lg uppercase font-black">
                  <th className="p-4 border-r-4 border-black text-center w-20">Rank</th>
                  <th className="p-4 border-r-4 border-black">Learner</th>
                  <th className="p-4 border-r-4 border-black text-right">XP</th>
                  <th className="p-4 border-r-4 border-black text-center">Streak</th>
                  <th className="p-4 text-center">Tier</th>
                </tr>
              </thead>
              <tbody className="font-bold">
                {LEADERBOARD_DATA.map((user) => (
                  <tr key={user.rank} className={`border-b-4 border-black last:border-0 hover:bg-slate-50 transition-colors ${user.name === "You" ? "bg-neo-accent/10" : ""}`}>
                    <td className="p-4 border-r-4 border-black text-center text-xl font-black">
                      {user.rank === 1 ? '👑 1' : user.rank}
                    </td>
                    <td className="p-4 border-r-4 border-black text-xl">
                      {user.name} {user.name === "You" && <Badge className="ml-2 text-xs py-0 shadow-none -translate-y-1">YOU</Badge>}
                    </td>
                    <td className="p-4 border-r-4 border-black text-right text-xl font-black text-neo-accent">
                      {user.xp.toLocaleString()}
                    </td>
                    <td className="p-4 border-r-4 border-black text-center">
                      {user.streak} 🔥
                    </td>
                    <td className="p-4 text-center uppercase text-sm tracking-widest">
                      {user.tier}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
