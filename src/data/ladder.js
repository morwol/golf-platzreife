// Die "Gewinnleiter" – statt Geldbeträgen der Weg zur Platzreife.
// safe: garantierte Sicherheitsstufe (wie die Sicherheitsstufen in der Millionenshow)

export const LADDER = [
  { label: 'Erster Abschlag' },
  { label: 'Auf dem Fairway' },
  { label: 'Sauberes Eisen' },
  { label: 'Gute Annäherung' },
  { label: 'Auf dem Grün', safe: true },
  { label: 'Erstes Par gespielt' },
  { label: 'Sand-Save' },
  { label: 'Birdie!' },
  { label: 'Souverän unter Par' },
  { label: 'Eagle!', safe: true },
  { label: 'Platz-Profi' },
  { label: 'Regel-Experte' },
  { label: 'Etikette-Meister' },
  { label: 'Club-Champion' },
  { label: 'PLATZREIFE 🏆', safe: true },
]

// Index der höchsten erreichten Sicherheitsstufe bei gegebenem Level (0-basiert).
export function lastSafeLevel(level) {
  let safe = 0
  for (let i = 0; i < level && i < LADDER.length; i++) {
    if (LADDER[i].safe) safe = i + 1
  }
  return safe
}
