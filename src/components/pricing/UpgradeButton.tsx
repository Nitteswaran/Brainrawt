"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser, useSignIn } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function UpgradeButton() {
  const { isLoaded, user } = useUser()
  const { signIn } = useSignIn()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleUpgrade = async () => {
    if (!isLoaded) return

    if (!user) {
      // If not logged in, redirect to signup
      router.push("/signup")
      return
    }

    try {
      setLoading(true)
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        console.error("Failed to create checkout session:", data.error)
        alert(data.error || "Failed to initiate checkout. Please try again.")
      }
    } catch (error) {
      console.error("Error during upgrade:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button 
      onClick={handleUpgrade}
      disabled={loading}
      className="w-full text-lg h-16 bg-neo-secondary text-black hover:bg-neo-secondary/90 border-t-4 border-l-4 shadow-neo-sm border-black font-black"
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-6 w-6 animate-spin" />
          Processing...
        </>
      ) : (
        "Upgrade Now"
      )}
    </Button>
  )
}
