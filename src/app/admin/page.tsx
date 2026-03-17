import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const PENDING_LESSONS = [
  { id: "cm0x1", title: "Atomic Habits", category: "Productivity", generatedDate: "2023-10-25" },
  { id: "cm0x2", title: "Stoicism 101", category: "Psychology", generatedDate: "2023-10-25" },
  { id: "cm0x3", title: "SEO Basics", category: "Marketing", generatedDate: "2023-10-24" },
]

export default function AdminDashboard() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto flex flex-col gap-12 min-h-[85vh]">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Command <span className="bg-neo-accent text-white px-2 border-4 border-black shadow-neo-sm rotate-2 inline-block ml-2">Center</span></h1>
        <p className="text-lg font-bold bg-white border-4 border-black py-2 px-4 shadow-neo-sm w-fit -rotate-1 mt-2">
          Admin Dashboard: Approve AI Content and Monitor Platform Health
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-neo-secondary border-4 border-black shadow-neo-sm rotate-1">
          <CardContent className="p-6 text-center mt-0">
             <h3 className="font-black text-xl uppercase mb-2 text-black/70">Total Users</h3>
             <p className="font-black text-6xl neo-stroke-text text-white">12,450</p>
          </CardContent>
        </Card>
        <Card className="bg-neo-muted border-4 border-black shadow-neo-sm -rotate-1">
          <CardContent className="p-6 text-center mt-0">
             <h3 className="font-black text-xl uppercase mb-2 text-black/70">Premium Active</h3>
             <p className="font-black text-6xl text-white drop-shadow-[2px_2px_0px_#000]">3,100</p>
          </CardContent>
        </Card>
        <Card className="bg-neo-accent border-4 border-black shadow-neo-sm rotate-1">
          <CardContent className="p-6 text-center mt-0">
             <h3 className="font-black text-xl uppercase mb-2 text-black/70">Total Skills</h3>
             <p className="font-black text-6xl text-white drop-shadow-[2px_2px_0px_#000]">542</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-[8px_8px_0px_0px_#C4B5FD] border-4 border-black rotate-0">
        <CardHeader className="bg-white border-b-4 border-black flex flex-row justify-between items-center">
          <CardTitle className="text-2xl">Pending AI Lessons</CardTitle>
          <Badge className="bg-neo-warning text-black border-2 border-black shadow-neo-sm font-black bg-yellow-300">{PENDING_LESSONS.length} Requires Review</Badge>
        </CardHeader>
        <CardContent className="p-0 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-4 border-black bg-neo-muted/20 text-sm uppercase font-black">
                  <th className="p-4 border-r-4 border-black">Skill Title</th>
                  <th className="p-4 border-r-4 border-black">Category</th>
                  <th className="p-4 border-r-4 border-black whitespace-nowrap">Generated</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="font-bold">
                {PENDING_LESSONS.map((lesson) => (
                  <tr key={lesson.id} className="border-b-4 border-black last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="p-4 border-r-4 border-black text-lg">
                      {lesson.title}
                    </td>
                    <td className="p-4 border-r-4 border-black">
                      <Badge variant="outline" className="border-2 border-black bg-white text-black shadow-none pointer-events-none">{lesson.category}</Badge>
                    </td>
                    <td className="p-4 border-r-4 border-black whitespace-nowrap">
                      {lesson.generatedDate}
                    </td>
                    <td className="p-4 text-center space-x-2 whitespace-nowrap">
                       <Button size="sm" variant="outline" className="h-10 border-2 font-black shadow-none bg-green-200 hover:bg-green-300">Approve</Button>
                       <Button size="sm" variant="outline" className="h-10 border-2 font-black shadow-none bg-red-200 hover:bg-red-300 text-black">Reject</Button>
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
