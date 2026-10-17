const CAREER_START = new Date(2021, 5, 1) // junho 2021 — primeira experiência profissional (Alkent)

export function getYearsExp() {
  return Math.floor((Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25))
}
