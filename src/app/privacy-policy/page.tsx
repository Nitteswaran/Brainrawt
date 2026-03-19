import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Brainrawt",
  description: "Read the Brainrawt Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 lg:py-24">
      {/* Header */}
      <div className="mb-12">
        <span className="inline-block bg-neo-muted text-black font-black uppercase text-sm px-4 py-1.5 border-4 border-black shadow-neo-sm -rotate-1 mb-6">
          Legal
        </span>
        <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
          Privacy <span className="text-neo-accent neo-stroke-text">Policy</span>
        </h1>
        <p className="mt-4 text-lg font-bold border-l-4 border-black pl-4 bg-white shadow-neo-sm inline-block px-4 py-2 rotate-1">
          Effective Date: March 19, 2026
        </p>
      </div>

      {/* Intro */}
      <p className="text-lg font-bold mb-10">
        This Privacy Policy explains how Brainrawt collects, uses, and protects your information.
      </p>

      {/* Content */}
      <div className="space-y-10">

        {/* Section 1 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">1</span>
            Information We Collect
          </h2>
          <p className="font-bold mb-3">We may collect:</p>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Personal information (e.g., name, email)</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Account data (login details, preferences)</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Usage data (pages visited, interactions, progress)</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Device data (IP address, browser type, device information)</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">2</span>
            How We Use Your Information
          </h2>
          <p className="font-bold mb-3">We use your information to:</p>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Provide and improve Brainrawt services</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Personalize your learning experience</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Track progress and recommend microskills</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Communicate updates and important information</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Ensure platform security and prevent fraud</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">3</span>
            Sharing of Information
          </h2>
          <div className="bg-neo-secondary border-4 border-black p-4 mb-4 rotate-1">
            <p className="font-black text-lg">We do not sell your personal data.</p>
          </div>
          <p className="font-bold mb-3">We may share information with:</p>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Service providers (hosting, analytics, payments)</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Legal authorities if required by law</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">4</span>
            Data Retention
          </h2>
          <p className="font-bold">
            We retain your data only as long as necessary to provide our services and comply with legal obligations.
          </p>
        </section>

        {/* Section 5 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">5</span>
            Security
          </h2>
          <p className="font-bold">
            We implement reasonable safeguards to protect your data. However, no system is completely secure.
          </p>
        </section>

        {/* Section 6 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-secondary shadow-neo-sm text-lg font-black shrink-0">6</span>
            Your Rights
          </h2>
          <p className="font-bold mb-3">Depending on your location, you may have the right to:</p>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Access your personal data</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Correct inaccurate data</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Request deletion of your data</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Withdraw consent where applicable</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-accent text-white shadow-neo-sm text-lg font-black shrink-0">7</span>
            Cookies
          </h2>
          <p className="font-bold mb-3">We may use cookies and similar technologies to:</p>
          <ul className="space-y-2 font-bold list-none">
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Improve user experience</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Analyze platform usage</li>
            <li className="flex items-start gap-2"><span className="text-neo-accent font-black">★</span> Store user preferences</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-accent text-white shadow-neo-sm text-lg font-black shrink-0">8</span>
            Third-Party Services
          </h2>
          <p className="font-bold">
            Brainrawt may use third-party tools (e.g., analytics, payment providers). These services have their own privacy policies.
          </p>
        </section>

        {/* Section 9 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-accent text-white shadow-neo-sm text-lg font-black shrink-0">9</span>
            International Users
          </h2>
          <p className="font-bold">
            If you access Brainrawt from outside your country, your data may be transferred and processed in other countries.
          </p>
        </section>

        {/* Section 10 */}
        <section className="bg-white border-4 border-black shadow-neo-sm p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-neo-accent text-white shadow-neo-sm text-lg font-black shrink-0">10</span>
            Changes to Privacy Policy
          </h2>
          <p className="font-bold">
            We may update this Privacy Policy from time to time. Continued use of the platform indicates acceptance of the updated policy.
          </p>
        </section>

        {/* Section 11 — Contact */}
        <section className="bg-neo-secondary border-4 border-black shadow-neo-md p-6">
          <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border-4 border-black bg-black text-white shadow-neo-sm text-lg font-black shrink-0">11</span>
            Contact
          </h2>
          <p className="font-bold">
            For privacy-related inquiries: <a href="mailto:support@brainrawt.com" className="text-neo-accent underline decoration-4 underline-offset-4 hover:bg-neo-accent hover:text-white hover:px-1 transition-all">support@brainrawt.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
