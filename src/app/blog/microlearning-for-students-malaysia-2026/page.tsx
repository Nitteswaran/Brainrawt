import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Microlearning for Students in Malaysia (2026 Guide) | Brainrawt',
  description: 'Discover how microlearning helps Malaysian students beat procrastination, stay consistent, and learn new skills daily.',
};

export default function BlogPage() {
  return (
    <article className="min-h-screen bg-white font-sans text-slate-900 selection:bg-neo-accent selection:text-white pt-12">
      {/* Header / Hero Section */}
      <header className="py-12 px-4 md:py-20 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Education & Productivity
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight uppercase italic">
            Microlearning for Students in Malaysia: Learn Smarter in 2026
          </h1>
          <div className="mt-6 flex items-center justify-center gap-4 text-slate-500 text-sm font-bold uppercase">
            <span>March 27, 2026</span>
            <span className="w-1.5 h-1.5 bg-neo-accent rounded-full" />
            <span>8 min read</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 pb-20">
        <section className="prose prose-lg prose-slate max-w-none">
          {/* Intro Section */}
          <p className="text-xl text-slate-600 leading-relaxed italic border-l-8 border-neo-accent pl-6 my-8 font-medium">
            It&apos;s 2 AM. You&apos;re lying in bed in your hostel room, the blue light of your phone illuminating your tired face. You&apos;ve been scrolling through TikTok and Reels for three hours. What started as a &quot;5-minute break&quot; turned into a dopamine-fueled marathon of short-form content. 
          </p>
          <p className="font-medium">
            You feel that familiar weight of guilt. You know you have a midterm next week, a presentation due, and a growing list of skills you <i>actually</i> want to learn. But the thought of sitting down for a two-hour study session feels impossible. You want to improve, you want to be that &quot;top student,&quot; but you just can&apos;t seem to stay consistent. 
          </p>
          <p className="font-medium">
            If this sounds like your daily reality, you aren&apos;t alone. In 2026, the battle for your attention has never been more intense. The good news? You don&apos;t need to fight your brain—you just need to change how you feed it.
          </p>

          {/* H2: Why Students Struggle */}
          <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900 uppercase tracking-tight">Why Students Struggle to Stay Consistent in 2026</h2>
          <p>
            The Malaysian education system is demanding, and the digital world is even more so. Most students fail to stay consistent not because they lack &quot;willpower,&quot; but because they are fighting a losing battle against <strong>dopamine addiction</strong>. 
          </p>
          <p>
            When we consume short-form media, our brains get instant rewards. Traditional studying—opening a thick textbook or watching a 60-minute recorded lecture—simply can&apos;t compete with that. The sheer volume of <strong>distractions</strong> from notifications, social pressure, and &quot;FOMO&quot; makes it nearly impossible to maintain deep focus.
          </p>
          <p>
            The biggest hurdle is the <strong>lack of structure</strong>. Many students think they need to block out half their day to be productive. When they can&apos;t find that massive block of time, they give up entirely. Learning <strong>how to focus on studying without distractions</strong> starts by acknowledging that your brain is now wired for shorter bursts of information.
          </p>

          {/* H2: What is Microlearning? */}
          <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900 uppercase tracking-tight">What is Microlearning?</h2>
          <p>
            Instead of trying to eat the whole elephant at once, microlearning breaks it into bite-sized pieces. <strong>Microlearning for students</strong> is an approach where you acquire knowledge in small, highly focused bursts—usually between 3 to 10 minutes.
          </p>
          <p>
            Why is it so effective? It&apos;s <strong>backed by psychology</strong>, specifically the &quot;Spacing Effect&quot; and &quot;Chunking.&quot; When you learn in small increments, you avoid cognitive overload. Your brain can actually process and retain the information before moving on to the next piece.
          </p>
          <ul className="list-disc pl-6 space-y-2 font-bold uppercase text-sm">
            <li><strong>Retention:</strong> Shorter sessions lead to better long-term memory.</li>
            <li><strong>Flexibility:</strong> You can learn while waiting for the LRT or during a lunch break at the café.</li>
            <li><strong>Engagement:</strong> It matches the pace of modern life, keeping you from getting bored.</li>
          </ul>

          {/* H2: How Microlearning Helps You Beat Procrastination */}
          <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900 uppercase tracking-tight">How Microlearning Helps You Beat Procrastination</h2>
          <p>
            Procrastination is often a defense mechanism against a task that feels too big. When a task feels overwhelming, your brain chooses the easy path (scrolling!). 
          </p>
          <p>
            Microlearning lowers the &quot;activation energy&quot; required to start. It is significantly <strong>easier to start</strong> a 5-minute lesson than a 2-hour study block. Once you finish that first small lesson, you get a small win. This <strong>builds momentum</strong>, often leading you to do &quot;just one more.&quot; 
          </p>
          <p>
            By focusing on the &quot;micro,&quot; you effectively <strong>reduce overwhelm</strong>. When you know exactly <strong>how to stop procrastination studying</strong>, you realize that consistency is more important than intensity.
          </p>

          {/* H2: Simple Daily Microlearning System */}
          <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900 uppercase tracking-tight">Simple Daily Microlearning System</h2>
          <p>
            You don&apos;t need a complex planner to start. Use this 4-step system to start to <strong>learn new skills daily</strong>:
          </p>
          <div className="bg-neo-secondary/10 p-8 rounded-2xl border-4 border-black shadow-neo-sm my-8">
            <ol className="space-y-6 list-none pl-0">
              <li className="flex gap-4">
                <span className="flex-none w-10 h-10 border-4 border-black bg-neo-accent text-white rounded-none flex items-center justify-center font-black text-xl shadow-neo-sm">1</span>
                <div>
                  <strong className="block text-slate-900 uppercase text-xl font-black">Pick one micro-skill</strong>
                  <span className="text-slate-600 font-bold">Focus on one specific thing: a coding concept, a language phrase, or a productivity technique.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-none w-10 h-10 border-4 border-black bg-neo-accent text-white rounded-none flex items-center justify-center font-black text-xl shadow-neo-sm">2</span>
                <div>
                  <strong className="block text-slate-900 uppercase text-xl font-black">Learn 5–10 minutes</strong>
                  <span className="text-slate-600 font-bold">Use a dedicated platform or a single short video. No multitasking allowed.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-none w-10 h-10 border-4 border-black bg-neo-accent text-white rounded-none flex items-center justify-center font-black text-xl shadow-neo-sm">3</span>
                <div>
                  <strong className="block text-slate-900 uppercase text-xl font-black">Apply immediately</strong>
                  <span className="text-slate-600 font-bold">Write one line of code, say the phrase out loud, or use the hack right away.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-none w-10 h-10 border-4 border-black bg-neo-accent text-white rounded-none flex items-center justify-center font-black text-xl shadow-neo-sm">4</span>
                <div>
                  <strong className="block text-slate-900 uppercase text-xl font-black">Track progress</strong>
                  <span className="text-slate-600 font-bold">Mark it off. The visual streak is what keeps the habit alive.</span>
                </div>
              </li>
            </ol>
          </div>

          {/* H2: Why Brainrawt is Different */}
          <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900 uppercase tracking-tight">Why Brainrawt is Different</h2>
          <p>
            Most learning platforms were built for the desktop era—hours of video and endless text. <strong>Brainrawt</strong> was built for the mobile-first, short-attention-span generation of Malaysia.
          </p>
          <p>
            We don&apos;t want you to spend hours on our app. We want you to spend 5 minutes getting better, and then go live your life. 
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 list-none pl-0">
            <li className="p-6 bg-white border-4 border-black shadow-neo-sm">
              <h4 className="font-black text-neo-accent mb-2 uppercase text-xl">Daily Micro-lessons</h4>
              <p className="text-sm m-0 font-bold">Content curated for maximum impact in minimum time.</p>
            </li>
            <li className="p-6 bg-white border-4 border-black shadow-neo-sm">
              <h4 className="font-black text-neo-accent mb-2 uppercase text-xl">Progress Tracking</h4>
              <p className="text-sm m-0 font-bold">Visual rewards that gamify your self-improvement journey.</p>
            </li>
            <li className="p-6 bg-white border-4 border-black shadow-neo-sm">
              <h4 className="font-black text-neo-accent mb-2 uppercase text-xl">Focus-friendly UX</h4>
              <p className="text-sm m-0 font-bold">No clutter, no ads, no rabbit holes. Just learning.</p>
            </li>
            <li className="p-6 bg-white border-4 border-black shadow-neo-sm">
              <h4 className="font-black text-neo-accent mb-2 uppercase text-xl">Built for Consistency</h4>
              <p className="text-sm m-0 font-bold">Designed to fit into the busiest Malaysian student schedule.</p>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="mt-20 p-10 bg-black text-white text-center relative overflow-hidden border-4 border-black shadow-neo-lg group">
          <div className="absolute top-0 left-0 w-full h-2 bg-neo-accent" />
          <h3 className="text-4xl font-black mb-4 uppercase italic">Start Learning Smarter Today</h3>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto font-bold uppercase tracking-tight">
            Join thousands of Malaysian students beating &quot;brain rot&quot; and building real skills, 5 minutes at a time.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-neo-accent hover:bg-neo-accent/90 text-white font-black uppercase text-xl h-16 px-10 transition-transform group-hover:scale-105"
          >
            <Link href="https://www.brainraw.my">
              Start Free Now
            </Link>
          </Button>
        </section>

        {/* FAQ Section */}
        <section className="mt-20 pt-16 border-t-8 border-black border-dashed">
          <h2 className="text-4xl font-black mb-12 text-center text-slate-900 uppercase italic">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is microlearning?",
                a: "Microlearning is an educational approach that delivers content in small, focused segments—typically under 10 minutes—designed to help users learn specific skills without overwhelming their schedule."
              },
              {
                q: "Is microlearning effective?",
                a: "Yes. Studies show that learning in short bursts improves retention by up to 20% compared to long-form study sessions, as it aligns with the brain&apos;s natural attention span."
              },
              {
                q: "How to stop procrastinating?",
                a: "The best way to stop procrastinating is to make the starting point incredibly easy. Microlearning does this by offering tasks so small that your brain has no reason to avoid them."
              },
              {
                q: "Best way to learn daily?",
                a: "Set a specific trigger (e.g., while drinking your morning coffee) and commit to just 5 minutes of focused learning. Consistency over time produces massive results."
              },
              {
                q: "Is Brainrawt free?",
                a: "Brainrawt offers a generous free tier that allows students to access daily micro-lessons and track their progress without any cost."
              }
            ].map((faq, index) => (
              <div key={index} className="p-8 bg-white border-4 border-black shadow-neo-sm hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <h4 className="font-black text-slate-900 text-xl mb-3 uppercase tracking-tight">{faq.q}</h4>
                <p className="text-slate-600 m-0 font-bold">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
