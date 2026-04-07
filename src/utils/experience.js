const LUZ_START = new Date(2023, 3, 1) // April 2023

export function getYearsExp() {
  return Math.floor((Date.now() - LUZ_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25))
}
