import { prisma } from "./prisma"

export async function getOrCreateUser(clerkId: string, email: string, name?: string | null) {
  let user = await prisma.user.findFirst({
    where: {
      OR: [
        { id: clerkId },
        { email: email }
      ]
    }
  })

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: clerkId,
        email: email,
        name: name || null,
        xp: 0,
        streak: 0,
        plan: "FREE",
      }
    })
  } else if (user.id !== clerkId) {
    // If user exists by email but has a different ID (e.g. legacy), update it to match Clerk
    user = await prisma.user.update({
      where: { email },
      data: { id: clerkId }
    })
  }

  return user
}
