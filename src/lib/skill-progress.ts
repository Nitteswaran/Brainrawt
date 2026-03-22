// Manages completed skills, XP, and streak in localStorage.
// Follows the same pattern as brainrawt_daily_lessons in LessonAccessGate.

const PROGRESS_KEY = "brainrawt_progress"
const XP_PER_SKILL = 100

export interface CompletedSkill {
  slug: string
  title: string
  category: string
  categoryIcon: string
  completedAt: string // ISO string
  xpEarned: number
}

export interface SkillProgress {
  completedSkills: CompletedSkill[]
  totalXP: number
  streak: number
  lastLearnedDate: string | null // YYYY-MM-DD
}

function getEmptyProgress(): SkillProgress {
  return {
    completedSkills: [],
    totalXP: 0,
    streak: 0,
    lastLearnedDate: null,
  }
}

function todayString(): string {
  return new Date().toISOString().split("T")[0]
}

function yesterdayString(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().split("T")[0]
}

export function getProgress(): SkillProgress {
  if (typeof window === "undefined") return getEmptyProgress()
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    if (!raw) return getEmptyProgress()
    return JSON.parse(raw) as SkillProgress
  } catch {
    return getEmptyProgress()
  }
}

function saveProgress(progress: SkillProgress): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
}

/**
 * Returns true if a skill was newly completed (false if already completed before).
 */
/**
 * Returns true if a skill was newly completed (false if already completed before).
 * If userId is provided, it also syncs with the database.
 */
export async function completeSkillInDb(
  slug: string,
  meta: { title: string; category: string; categoryIcon: string }
): Promise<{ success: boolean; newlyCompleted: boolean }> {
  try {
    const response = await fetch("/api/user/complete-skill", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, ...meta }),
    })
    return await response.json()
  } catch (error) {
    console.error("Failed to sync skill completion:", error)
    return { success: false, newlyCompleted: false }
  }
}

export function completeSkill(
  slug: string,
  meta: { title: string; category: string; categoryIcon: string }
): boolean {
  const progress = getProgress()

  // Don't double-count in localStorage
  if (progress.completedSkills.some((s) => s.slug === slug)) {
    return false
  }

  const today = todayString()

  // Update streak
  if (progress.lastLearnedDate === today) {
    // Already learned today
  } else if (progress.lastLearnedDate === yesterdayString()) {
    progress.streak += 1
  } else {
    progress.streak = 1
  }

  progress.lastLearnedDate = today
  progress.totalXP += XP_PER_SKILL

  progress.completedSkills.push({
    slug,
    title: meta.title,
    category: meta.category,
    categoryIcon: meta.categoryIcon,
    completedAt: new Date().toISOString(),
    xpEarned: XP_PER_SKILL,
  })

  saveProgress(progress)
  return true
}

export async function syncLocalToDb() {
  const progress = getProgress()
  if (progress.completedSkills.length === 0 && progress.totalXP === 0) return

  try {
    await fetch("/api/user/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ localStorageProgress: progress }),
    })
  } catch (error) {
    console.error("Failed to sync progress to database:", error)
  }
}

export function isSkillCompleted(slug: string): boolean {
  const progress = getProgress()
  return progress.completedSkills.some((s) => s.slug === slug)
}

export { XP_PER_SKILL }

