import { useMemo, useState } from 'react'
import {
  QUESTIONS,
  CATEGORIES,
  LEVELS,
  withShuffledOptions,
} from '../data/questions.js'

const LETTERS = ['A', 'B', 'C', 'D']

const LEVEL_FILTERS = [
  { value: 'ALLE', label: 'Alle Niveaus' },
  { value: LEVELS.PLATZREIFE, label: 'Platzreife' },
  { value: LEVELS.TURNIER, label: 'Turnierreife' },
]

export default function LearnMode({ onBack }) {
  const [level, setLevel] = useState('ALLE')
  const [filter, setFilter] = useState('ALLE')

  const cats = ['ALLE', ...Object.values(CATEGORIES)]

  // Optionen einmal beim Öffnen mischen – stabil, solange der Lernmodus offen ist.
  const shuffled = useMemo(() => QUESTIONS.map(withShuffledOptions), [])

  const list = useMemo(() => {
    return shuffled.filter(
      (q) =>
        (level === 'ALLE' || q.level === level) &&
        (filter === 'ALLE' || q.category === filter)
    )
  }, [shuffled, level, filter])

  return (
    <div className="learn">
      <div className="learn-head">
        <h2>Lernmodus · alle {QUESTIONS.length} Fragen</h2>
        <button className="btn btn-ghost" onClick={onBack}>
          ◂ Zurück
        </button>
      </div>

      <div className="filter-row" style={{ marginBottom: '0.7rem' }}>
        {LEVEL_FILTERS.map((lv) => (
          <button
            key={lv.value}
            className={`chip chip-level ${level === lv.value ? 'active' : ''}`}
            onClick={() => setLevel(lv.value)}
          >
            {lv.label}
          </button>
        ))}
      </div>

      <div className="filter-row" style={{ marginBottom: '1.4rem' }}>
        {cats.map((c) => (
          <button
            key={c}
            className={`chip ${filter === c ? 'active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c === 'ALLE' ? `Alle Kategorien (${list.length})` : c}
          </button>
        ))}
      </div>

      {list.map((q) => (
        <article key={q.id} className="learn-card">
          <div className="lc-top">
            <span>
              <span
                className={`level-badge ${
                  q.level === LEVELS.TURNIER ? 'turnier' : 'platz'
                }`}
              >
                {q.level === LEVELS.TURNIER ? 'Turnier' : 'Platzreife'}
              </span>
              {q.category}
              {q.hole > 0
                ? ` · Loch ${q.hole}`
                : q.level === LEVELS.TURNIER
                ? ' · Turnierwissen'
                : ' · Vor der Runde'}
            </span>
            <span className="diff">{q.difficulty}</span>
          </div>
          <h4>{q.question}</h4>
          <ul>
            {q.options.map((opt, i) => (
              <li key={i} className={i === q.correct ? 'right' : ''}>
                <strong style={{ marginRight: 6, opacity: 0.7 }}>{LETTERS[i]}</strong>
                {opt}
              </li>
            ))}
          </ul>
          <p className="lc-exp">{q.explanation}</p>
        </article>
      ))}

      <button className="back-link" onClick={onBack}>
        ◂ Zurück zum Start
      </button>
    </div>
  )
}
