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
export function completeSkill(
  slug: string,
  meta: { title: string; category: string; categoryIcon: string }
): boolean {
  const progress = getProgress()

  // Don't double-count
  if (progress.completedSkills.some((s) => s.slug === slug)) {
    return false
  }

  const today = todayString()

  // Update streak
  if (progress.lastLearnedDate === today) {
    // Already learned today, streak stays the same
  } else if (progress.lastLearnedDate === yesterdayString()) {
    // Consecutive day
    progress.streak += 1
  } else {
    // Gap or first time
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

export function isSkillCompleted(slug: string): boolean {
  const progress = getProgress()
  return progress.completedSkills.some((s) => s.slug === slug)
}

export { XP_PER_SKILL }
