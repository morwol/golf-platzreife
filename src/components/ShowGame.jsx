import { useRef, useState } from 'react'
import Ladder from './Ladder.jsx'
import { LADDER, lastSafeLevel } from '../data/ladder.js'

const LETTERS = ['A', 'B', 'C', 'D']
const REVEAL_DELAY = 1500 // ms Spannungspause

export default function ShowGame({ questions, onFinish }) {
  const [level, setLevel] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [eliminated, setEliminated] = useState([])
  const [jokers, setJokers] = useState({ fifty: false, audience: false, phone: false })
  const [audience, setAudience] = useState(null)
  const [phone, setPhone] = useState(null)
  const timer = useRef(null)

  const q = questions[level]
  const isCorrect = selected !== null && selected === q.correct

  function resetPerQuestion() {
    setSelected(null)
    setRevealed(false)
    setEliminated([])
    setAudience(null)
    setPhone(null)
  }

  function handleSelect(i) {
    if (selected !== null || eliminated.includes(i)) return
    setSelected(i)
    timer.current = setTimeout(() => setRevealed(true), REVEAL_DELAY)
  }

  function handleNext() {
    const nextLevel = level + 1
    if (nextLevel >= questions.length) {
      onFinish({ won: true, correctCount: questions.length, reachedLevel: questions.length })
      return
    }
    resetPerQuestion()
    setLevel(nextLevel)
  }

  function handleStopOrLose() {
    const safe = lastSafeLevel(level)
    onFinish({ won: false, correctCount: level, reachedLevel: level, safeLevel: safe })
  }

  // ----- Joker -----
  function useFifty() {
    if (jokers.fifty || selected !== null) return
    const wrongs = q.options.map((_, i) => i).filter((i) => i !== q.correct)
    // zwei falsche zufällig entfernen
    const shuffled = wrongs.sort(() => Math.random() - 0.5)
    setEliminated(shuffled.slice(0, 2))
    setJokers((j) => ({ ...j, fifty: true }))
  }

  function useAudience() {
    if (jokers.audience || selected !== null) return
    const available = q.options.map((_, i) => i).filter((i) => !eliminated.includes(i))
    const base = q.difficulty === 'leicht' ? 68 : q.difficulty === 'mittel' ? 56 : 44
    const correctPct = base + Math.floor(Math.random() * 12)
    let remaining = 100 - correctPct
    const others = available.filter((i) => i !== q.correct)
    const pct = {}
    others.forEach((idx, k) => {
      if (k === others.length - 1) pct[idx] = remaining
      else {
        const give = Math.floor(Math.random() * (remaining / (others.length - k)))
        pct[idx] = give
        remaining -= give
      }
    })
    pct[q.correct] = correctPct
    setAudience(pct)
    setJokers((j) => ({ ...j, audience: true }))
  }

  function usePhone() {
    if (jokers.phone || selected !== null) return
    const letter = LETTERS[q.correct]
    const confident =
      q.difficulty === 'leicht'
        ? `Ganz klar – das ist Antwort ${letter}, da bin ich mir hundertprozentig sicher.`
        : q.difficulty === 'mittel'
        ? `Ich bin mir ziemlich sicher: Ich würde Antwort ${letter} nehmen.`
        : `Puh, knifflig … aber mein Bauchgefühl sagt Antwort ${letter}. Geh damit.`
    setPhone(confident)
    setJokers((j) => ({ ...j, phone: true }))
  }

  function classFor(i) {
    let c = 'answer'
    if (eliminated.includes(i)) return c + ' dimmed'
    if (!revealed && selected === i) c += ' selected'
    if (revealed) {
      if (i === q.correct) c += ' correct'
      else if (selected === i) c += ' wrong'
      else c += ' dimmed'
    }
    return c
  }

  return (
    <div className="game">
      <div className="main-col">
        <div className="topbar">
          <div className="lifelines">
            <button
              className={`lifeline ${jokers.fifty ? 'used' : ''}`}
              onClick={useFifty}
              title="50:50 – zwei falsche Antworten entfernen"
            >
              50:50
            </button>
            <button
              className={`lifeline ${jokers.audience ? 'used' : ''}`}
              onClick={useAudience}
              title="Publikumsjoker"
            >
              👥<span>Publikum</span>
            </button>
            <button
              className={`lifeline ${jokers.phone ? 'used' : ''}`}
              onClick={usePhone}
              title="Telefonjoker"
            >
              ☎<span>Telefon</span>
            </button>
          </div>
          <div className="progress-pill">
            Frage <b>{level + 1}</b> / {questions.length}
          </div>
        </div>

        <div className="qwrap">
            <div
              key={q.id}
              className="anim-rise"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}
            >
              <span className="category-tag">
                {q.category}
                {q.hole > 0
                  ? ` · Loch ${q.hole}`
                  : q.level === 'turnierreife'
                  ? ' · Turnierwissen'
                  : ''}
              </span>

              <div className="question-box">
                <p>{q.question}</p>
              </div>

              <div className="answers">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    className={classFor(i)}
                    onClick={() => handleSelect(i)}
                    disabled={selected !== null || eliminated.includes(i)}
                  >
                    <span className="letter">{LETTERS[i]}</span>
                    <span>{opt}</span>
                  </button>
                ))}
              </div>

              {audience && !revealed && (
                <div className="audience">
                  {q.options.map((_, i) => (
                    <div key={i} className="bar-col">
                      <b>{eliminated.includes(i) ? '–' : `${audience[i] ?? 0}%`}</b>
                      <div
                        className="bar"
                        style={{ height: `${eliminated.includes(i) ? 0 : audience[i] ?? 0}%` }}
                      />
                      <span>{LETTERS[i]}</span>
                    </div>
                  ))}
                </div>
              )}

              {phone && !revealed && (
                <p className="phone-hint">☎ Telefonjoker: „{phone}“</p>
              )}
            </div>

          {revealed && (
            <div className="explain anim-rise">
              <div className={`verdict ${isCorrect ? 'ok' : 'no'}`}>
                {isCorrect ? '✔ Richtig!' : '✘ Leider falsch'}
              </div>
              {!isCorrect && (
                <div className="right-answer">
                  Richtige Antwort: {LETTERS[q.correct]} — {q.options[q.correct]}
                </div>
              )}
              <p className="text">{q.explanation}</p>
              <div className="next">
                {isCorrect ? (
                  <button className="btn btn-primary" onClick={handleNext}>
                    {level + 1 >= questions.length ? 'Finale auflösen 🏆' : 'Weiter ▸'}
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={handleStopOrLose}>
                    Ergebnis ansehen ▸
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <Ladder level={level} />
    </div>
  )
}
