import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Brainrawt Blog | Learn Faster & Smarter',
  description: 'Read our latest articles on microlearning, memory retention, personal finance, space, and productivity to level up in life.',
};

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-neo-accent selection:text-white pt-12 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header section */}
        <header className="py-12 md:py-16 flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-black tracking-wide text-white uppercase bg-neo-accent rounded-none border-2 border-black rotate-1 shadow-neo-sm">
            Read & Grow
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase">
            The <span className="text-neo-secondary neo-stroke-text relative inline-block -rotate-2">Brainrawt</span> Blog
          </h1>
          <p className="mt-6 text-lg md:text-xl font-bold text-slate-700 max-w-2xl bg-white p-4 border-4 border-black shadow-neo-sm">
            Bite-sized articles to help you learn faster, boost productivity, and master new skills in minutes.
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group block focus:outline-none focus:ring-4 focus:ring-neo-accent">
              <article className="h-full flex flex-col bg-white border-4 border-black shadow-neo-md hover:shadow-neo-lg hover:-translate-y-2 transition-all overflow-hidden relative">
                
                {/* Visual Header block inside card */}
                <div className="h-4 bg-gradient-to-r from-neo-accent to-neo-secondary w-full border-b-4 border-black"></div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-neo-muted/30 border-2 border-black text-xs font-black uppercase text-slate-800 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {post.tag}
                    </span>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-tight">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-4 group-hover:text-neo-accent transition-colors line-clamp-3">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 font-bold text-sm line-clamp-3 mb-6 flex-1">
                    {post.seo.description}
                  </p>
                  
                  <div className="mt-auto border-t-4 border-black pt-4 flex items-center justify-between">
                    <span className="text-sm font-black uppercase text-slate-900">
                      Read Article →
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      {post.date}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
}
