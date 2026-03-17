import Sidebar from "@/components/layout/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 w-full bg-neo-background flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 w-full relative">
        {children}
      </div>
    </div>
  )
}
