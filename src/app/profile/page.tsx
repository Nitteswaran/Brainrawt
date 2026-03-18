import { UserProfile } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto flex flex-col gap-12 min-h-[85vh]">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Your <span className="text-neo-accent neo-stroke-text block sm:inline">Profile</span></h1>
        <p className="text-xl font-bold bg-white border-4 border-black py-2 px-4 shadow-neo-sm w-fit -rotate-2">
          Manage your account and view your brain gains.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        
        {/* PROFILE CUSTOMIZATION CARD */}
        <div className="w-full">
          <div className="border-4 border-black shadow-neo-lg bg-white p-2 rotate-1 hover:rotate-0 transition-transform overflow-hidden">
            <UserProfile 
               routing="hash"
               appearance={{
                 elements: {
                   cardBox: "shadow-none border-none max-w-full w-full",
                   navbar: "hidden", 
                   pageScrollBox: "p-0 sm:p-4",
                   rootBox: "w-full"
                 }
               }}
             />
          </div>
        </div>

        {/* STATS & PREFERENCES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Card className="rotate-0 shadow-neo-md border-4 border-black group hover:-translate-y-1 transition-transform">
            <CardHeader className="bg-white border-b-4 border-black">
              <CardTitle className="text-2xl">Learning Preferences</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white flex-1">
              <div className="space-y-6">
                <div>
                  <h4 className="font-black uppercase tracking-widest text-sm mb-3">Favorite Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="shadow-neo-sm">Productivity ⚡</Badge>
                    <Badge className="shadow-neo-sm">Psychology 🧠</Badge>
                    <Badge className="shadow-neo-sm">Business 💼</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-sm mb-2">Main Goal</h4>
                  <p className="font-bold border-l-4 border-black pl-4 py-1">Advance my career</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 bg-neo-secondary/20 border-t-4 border-black">
               <Button variant="outline" className="w-full shadow-neo-sm bg-white border-black border-4 hover:bg-slate-50">Update Preferences</Button>
            </CardFooter>
          </Card>

          <Card className="-rotate-1 shadow-[8px_8px_0px_0px_#C4B5FD] border-4 border-black hover:-translate-y-1 transition-transform">
            <CardHeader className="bg-neo-muted border-b-4 border-black">
              <CardTitle className="text-2xl text-black">Achievements</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white flex flex-col gap-4">
              <div className="flex items-center gap-4 border-4 border-black p-4 shadow-neo-sm rotate-1 bg-slate-50">
                 <div className="text-4xl grayscale opacity-50">🔥</div>
                 <div className="opacity-70">
                   <h4 className="font-black uppercase">7-Day Streak</h4>
                   <p className="font-bold text-sm">Complete 7 days of daily learning. (0/7)</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 border-4 border-black p-4 shadow-neo-sm -rotate-1 bg-slate-50">
                 <div className="text-4xl grayscale opacity-50">🧠</div>
                 <div className="opacity-70">
                   <h4 className="font-black uppercase">First 500 XP</h4>
                   <p className="font-bold text-sm">Earn 500 XP points. (500 to go)</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 border-4 border-black p-4 shadow-neo-sm rotate-1 bg-slate-50">
                 <div className="text-4xl grayscale opacity-50">⭐</div>
                 <div className="opacity-70">
                   <h4 className="font-black uppercase">First Skill Mastered</h4>
                   <p className="font-bold text-sm">Complete your first lesson to unlock.</p>
                 </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
