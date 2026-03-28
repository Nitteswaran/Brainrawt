import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Brainrawt - Micro learning platform",
  description: "Learn 1 useful skill every day in under 5 minutes.",
  verification: {
    google: "4wKk4ozcZMmm5x68EdGjRamvBDoQQZ00Otg0pdWIccU",
  },
};

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased selection:bg-neo-accent selection:text-white flex min-h-screen flex-col`}>
        <ClerkProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
