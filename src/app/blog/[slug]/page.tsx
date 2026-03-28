import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

interface Props {
  params: { slug: string };
}

// Dynamically generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: [post.seo.primaryKeyword, ...post.seo.secondaryKeywords.split(', ')],
  };
}

// Optional: Generates static routes at build time (helpful for SEO/speed)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white font-sans text-slate-900 selection:bg-neo-accent selection:text-white pt-12 pb-24">
      {/* Article Header */}
      <header className="py-12 md:py-20 px-4 bg-gradient-to-b from-neo-muted/10 to-white shadow-neo-sm border-b-4 border-black">
        <div className="max-w-3xl mx-auto text-center">
          
          <Link href="/blog" className="inline-block text-slate-500 font-bold uppercase tracking-tight hover:text-neo-accent transition-colors mb-8">
            ← Back to Blog
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="inline-block px-4 py-1.5 text-sm font-black tracking-wide text-white uppercase bg-neo-accent border-2 border-black rotate-1 shadow-neo-sm">
              {post.tag}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight uppercase italic drop-shadow-sm">
            {post.title}
          </h1>

          <div className="mt-8 flex items-center justify-center gap-4 text-slate-600 text-sm font-bold uppercase">
            <span>{post.date}</span>
            <span className="w-2 h-2 bg-neo-secondary rounded-full border-2 border-black" />
            <span>{post.readTime}</span>
          </div>
          
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-4 mt-12 md:mt-16">
        
        {/* We use global base classes but scoped using prose & nested custom utility classes to match Neo-Brutalism */}
        <section 
          className="prose prose-lg prose-slate max-w-none 
          prose-headings:font-black prose-headings:uppercase prose-headings:text-slate-900 prose-headings:tracking-tight 
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b-4 prose-h2:border-black prose-h2:pb-2 prose-h2:inline-block
          prose-h3:text-2xl prose-h3:mt-8
          prose-p:font-bold prose-p:text-slate-700 prose-p:leading-relaxed
          prose-a:text-neo-accent prose-a:font-black prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-4
          prose-strong:font-black prose-strong:text-black prose-strong:bg-neo-secondary/20 prose-strong:px-1
          prose-ul:font-bold prose-ul:text-slate-700
          prose-li:marker:text-neo-accent
          [&_p.intro]:text-xl [&_p.intro]:italic [&_p.intro]:border-l-8 [&_p.intro]:border-neo-accent [&_p.intro]:pl-6 [&_p.intro]:bg-neo-muted/10 [&_p.intro]:p-4 [&_p.intro]:border-y-4 [&_p.intro]:border-black
          [&_.highlight]:text-xl [&_.highlight]:font-black [&_.highlight]:bg-neo-accent [&_.highlight]:text-white [&_.highlight]:p-4 [&_.highlight]:border-4 [&_.highlight]:border-black [&_.highlight]:shadow-neo-sm [&_.highlight]:rotate-1 [&_.highlight]:my-10 [&_.highlight]:inline-block"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {/* Post Footer/CTA */}
        <div className="mt-20 pt-16 border-t-8 border-black border-dashed flex flex-col items-center text-center group">
          <div className="bg-neo-accent text-white p-10 border-4 border-black shadow-neo-lg group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all w-full relative overflow-hidden">
            <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase italic drop-shadow-md">
              Level Up Your Mind Daily
            </h3>
            <p className="text-indigo-100 mb-8 max-w-md mx-auto font-bold uppercase tracking-tight">
              Join thousands of learners building real skills 5 minutes at a time. No burnout. No boring videos.
            </p>
            <Link 
              href="/signup" 
              className="inline-block bg-white text-neo-accent border-4 border-black hover:bg-slate-100 font-black uppercase text-xl py-4 px-10 transition-transform hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Start Free Now
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
