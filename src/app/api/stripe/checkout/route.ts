import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { priceId, userId } = await req.json()

    // 1. In a real app with Stripe SDK:
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // const session = await stripe.checkout.sessions.create({
    //   mode: 'subscription',
    //   payment_method_types: ['card'],
    //   line_items: [{ price: priceId, quantity: 1 }],
    //   success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?upgraded=true`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    //   client_reference_id: userId,
    // });
    // return NextResponse.json({ url: session.url })

    // 2. Mock Implementation for Development WITHOUT API key
    console.log(`[STRIPE MOCK] Creating checkout session for user ${userId} and price ${priceId}`)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return a fake URL to redirect the user back to the dashboard simulating a success 
    // In actual dev this would be a Stripe hosted checkout URL
    return NextResponse.json({ url: '/dashboard?upgraded=true' })

  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}
