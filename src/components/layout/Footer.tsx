import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-neo-secondary px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-accent text-white shadow-neo-sm rotate-2">
              <span className="font-black text-2xl uppercase">B</span>
            </div>
            <span className="font-black text-2xl uppercase tracking-tighter">
              Brainrawt
            </span>
          </Link>
          <p className="font-bold max-w-xs text-lg">
            Learn 1 useful skill every day in under 5 minutes. No fluff, just raw skills.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-black uppercase text-lg mb-2">Platform</h4>
          <Link href="/library" className="font-bold hover:underline decoration-2 underline-offset-4">Skill Library</Link>
          <Link href="/pricing" className="font-bold hover:underline decoration-2 underline-offset-4">Pricing</Link>
          <Link href="/blog/microlearning-for-students-malaysia-2026" className="font-bold hover:underline decoration-2 underline-offset-4">Blog</Link>
          <Link href="/login" className="font-bold hover:underline decoration-2 underline-offset-4">Login</Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-black uppercase text-lg mb-2">Legal</h4>
          <Link href="/terms-of-service" className="font-bold hover:underline decoration-2 underline-offset-4">Terms of Service</Link>
          <Link href="/privacy-policy" className="font-bold hover:underline decoration-2 underline-offset-4">Privacy Policy</Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-12 pt-8 border-t-4 border-black border-dashed flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-bold text-center md:text-left">© {new Date().getFullYear()} Brainrawt. All rights reserved.</p>
      </div>
    </footer>
  )
}
