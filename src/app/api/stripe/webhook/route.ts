import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { clerkClient } from '@clerk/nextjs/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
})

// Disable Next.js default body parsing — Stripe needs the raw body to verify webhook signature
export const runtime = 'nodejs'

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret || webhookSecret.startsWith('whsec_REPLACE')) {
    console.error('[STRIPE WEBHOOK] STRIPE_WEBHOOK_SECRET is not configured')
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig!, webhookSecret)
  } catch (err) {
    console.error('[STRIPE WEBHOOK] Signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Handle successful checkout
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const userId = session.metadata?.userId || session.client_reference_id

    if (!userId) {
      console.error('[STRIPE WEBHOOK] No userId found on session:', session.id)
      return NextResponse.json({ error: 'No userId in session' }, { status: 400 })
    }

    try {
      const client = await clerkClient()
      await client.users.updateUserMetadata(userId, {
        publicMetadata: {
          plan: 'PREMIUM',
          stripeCustomerId: session.customer as string,
          stripeSubscriptionId: session.subscription as string,
        },
      })
      console.log(`[STRIPE WEBHOOK] User ${userId} upgraded to PREMIUM`)
    } catch (err) {
      console.error('[STRIPE WEBHOOK] Failed to update Clerk user metadata:', err)
      return NextResponse.json({ error: 'Failed to update user plan' }, { status: 500 })
    }
  }

  // Handle subscription cancellation / expiry — downgrade back to FREE
  if (
    event.type === 'customer.subscription.deleted' ||
    event.type === 'customer.subscription.paused'
  ) {
    const subscription = event.data.object as Stripe.Subscription
    const userId = subscription.metadata?.userId

    if (userId) {
      try {
        const client = await clerkClient()
        await client.users.updateUserMetadata(userId, {
          publicMetadata: { plan: 'FREE' },
        })
        console.log(`[STRIPE WEBHOOK] User ${userId} downgraded to FREE`)
      } catch (err) {
        console.error('[STRIPE WEBHOOK] Failed to downgrade user:', err)
      }
    }
  }

  return NextResponse.json({ received: true })
}
