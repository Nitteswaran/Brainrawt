import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Brainrawt",
  description: "Read the Brainrawt Terms of Service — rules and guidelines for using our micro-learning platform.",
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 lg:py-24">
      {/* Header */}
      <div className="mb-12">
        <span className="inline-block bg-neo-accent text-white font-black uppercase text-sm px-4 py-1.5 border-4 border-black shadow-neo-sm rotate-1 mb-6">
          Legal
        </span>
        <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
          Terms of <span className="text-neo-accent neo-stroke-text">Service</span>
        </h1>
        <p className="mt-4 text-lg font-bold border-l-4 border-black pl-4 bg-white shadow-neo-sm inline-block px-4 py-2 -rotate-1">
          Effective Date: March 19, 2026
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10">
        <p className="text-lg font-bold">
          Welcome to Brainrawt (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Brainrawt is a software-as-a-service (SaaS) platform that provides short, practical microskills designed to be learned quickly.
        </p>
        <p className="text-lg font-bold">
          By accessing or using Brainrawt, you agree to these Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use the platform.
        </p>

        {/* Section 1 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">1</span>
            Eligibility
          </h2>
          <p className="font-bold">
            You must be at least 13 years old to use Brainrawt. By using the service, you confirm that you meet this requirement.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">2</span>
            Your Account
          </h2>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> You are responsible for maintaining the confidentiality of your account</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> You agree to provide accurate and up-to-date information</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> You are responsible for all activity under your account</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">3</span>
            Acceptable Use
          </h2>
          <p className="font-bold mb-3">You agree not to:</p>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">✕</span> Use the platform for illegal or unauthorized purposes</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">✕</span> Upload harmful, abusive, misleading, or inappropriate content</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">✕</span> Attempt to disrupt, hack, or interfere with the platform</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">4</span>
            Nature of Content
          </h2>
          <p className="font-bold mb-3">Brainrawt provides <span className="bg-neo-secondary px-1 border-2 border-black">short-form educational microskills</span>.</p>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Content is for informational and educational purposes only</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Brainrawt does not provide professional, legal, financial, or medical advice</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> You apply any skills learned at your own risk</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">5</span>
            AI-Generated Content
          </h2>
          <p className="font-bold mb-3">Some content on Brainrawt may be generated or assisted by artificial intelligence.</p>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> We do not guarantee accuracy, completeness, or reliability</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Content may contain errors or outdated information</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">6</span>
            Progress Tracking &amp; Features
          </h2>
          <p className="font-bold mb-3">Brainrawt may include features such as streaks, progress tracking, or recommendations.</p>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> These are provided for motivation purposes only</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> We do not guarantee their accuracy or availability</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> We may modify or remove these features at any time</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">7</span>
            Intellectual Property
          </h2>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> All platform content, design, and materials are owned by Brainrawt or licensed to us</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> You may not copy, distribute, or resell content without permission</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">8</span>
            User-Generated Content
          </h2>
          <p className="font-bold mb-3">If you submit content:</p>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> You grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute it</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> You are responsible for ensuring your content does not violate any laws or rights</li>
          </ul>
        </section>

        {/* Section 9 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">9</span>
            Payments &amp; Subscriptions
          </h2>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Some features may require payment</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Subscriptions may automatically renew unless cancelled</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> All payments are non-refundable unless stated otherwise</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Payments are processed through third-party providers (e.g., Stripe)</li>
          </ul>
        </section>

        {/* Section 10 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-accent text-white shadow-neo-sm text-lg font-black shrink-0">10</span>
            Termination
          </h2>
          <p className="font-bold">
            We may suspend or terminate your account at any time if you violate these Terms or misuse the platform.
          </p>
        </section>

        {/* Section 11 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-accent text-white shadow-neo-sm text-lg font-black shrink-0">11</span>
            Disclaimer of Warranties
          </h2>
          <p className="font-bold">
            Brainrawt is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.
          </p>
        </section>

        {/* Section 12 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-accent text-white shadow-neo-sm text-lg font-black shrink-0">12</span>
            Limitation of Liability
          </h2>
          <p className="font-bold">
            To the fullest extent permitted by law, Brainrawt shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the platform.
          </p>
        </section>

        {/* Section 13 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-accent text-white shadow-neo-sm text-lg font-black shrink-0">13</span>
            Changes to Terms
          </h2>
          <p className="font-bold">
            We may update these Terms at any time. Continued use of the platform means you accept the updated Terms.
          </p>
        </section>

        {/* Section 14 */}
        <section className="bg-neo-secondary border-4 border-black shadow-neo-md p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-black text-white shadow-neo-sm text-lg font-black shrink-0">14</span>
            Contact
          </h2>
          <p className="font-bold">
            For questions, contact: <a href="mailto:support@brainrawt.com" className="text-neo-accent underline decoration-4 underline-offset-4 hover:bg-neo-accent hover:text-white hover:px-1 transition-all">support@brainrawt.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
