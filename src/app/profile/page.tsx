import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* PROFILE CARD */}
        <div className="md:col-span-1">
          <Card className="hover:rotate-0 rotate-1 transition-transform border-4 border-black shadow-neo-lg sticky top-24">
            <CardHeader className="bg-neo-secondary text-black text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-white border-4 border-black shadow-neo-sm rotate-2 mb-4 flex items-center justify-center font-black text-4xl uppercase">
                J
              </div>
              <CardTitle className="text-2xl">John Doe</CardTitle>
              <CardDescription className="text-black/80 font-bold mt-1">Premium Member</CardDescription>
            </CardHeader>
            <CardContent className="p-6 bg-white space-y-4">
              <div>
                <span className="font-bold text-sm uppercase tracking-widest text-black/60 block mb-1">Email</span>
                <span className="font-black">john@example.com</span>
              </div>
              <div>
                <span className="font-bold text-sm uppercase tracking-widest text-black/60 block mb-1">Joined</span>
                <span className="font-black">October 2023</span>
              </div>
            </CardContent>
            <CardFooter className="p-6 bg-neo-muted/20 border-t-4 border-black flex flex-col gap-3">
              <Button variant="outline" className="w-full bg-white shadow-neo-sm">Edit Profile</Button>
              <Button variant="secondary" className="w-full shadow-neo-sm border-white text-white bg-neo-accent border-2">Manage Subscription</Button>
            </CardFooter>
          </Card>
        </div>

        {/* STATS & PREFERENCES */}
        <div className="md:col-span-2 flex flex-col gap-8">
          
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
              <div className="flex items-center gap-4 border-4 border-black p-4 shadow-neo-sm rotate-1">
                 <div className="text-4xl">🔥</div>
                 <div>
                   <h4 className="font-black uppercase">7-Day Streak</h4>
                   <p className="font-bold text-sm">Completed one week of daily learning.</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 border-4 border-black p-4 shadow-neo-sm -rotate-1 bg-slate-50">
                 <div className="text-4xl grayscale opacity-50">🧠</div>
                 <div className="opacity-70">
                   <h4 className="font-black uppercase">First 500 XP</h4>
                   <p className="font-bold text-sm">Earn 500 XP points. (150 to go)</p>
                 </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
