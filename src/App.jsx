import { useState } from 'react'
import {
  QUESTIONS,
  LEVELS,
  TOTAL_PLATZREIFE,
  TOTAL_TURNIER,
  withShuffledOptions,
} from './data/questions.js'
import { LADDER } from './data/ladder.js'
import ShowGame from './components/ShowGame.jsx'
import LearnMode from './components/LearnMode.jsx'

const DIFF_RANK = { leicht: 0, mittel: 1, schwer: 2 }
const GAME_SIZE = 15

const LEVEL_OPTIONS = [
  {
    value: LEVELS.PLATZREIFE,
    label: 'Platzreife',
    hint: 'Grundlagen für die erste Runde',
  },
  {
    value: LEVELS.TURNIER,
    label: 'Turnierreife',
    hint: 'Wettspiel · WHS · Spielformen',
  },
  { value: 'beides', label: 'Beides', hint: 'Alle Fragen gemischt' },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 15 Fragen mit ansteigender Schwierigkeit zusammenstellen (wie eine echte Show)
function buildGame(level) {
  const pool =
    level === 'beides'
      ? QUESTIONS
      : QUESTIONS.filter((q) => q.level === level)
  const byDiff = { leicht: [], mittel: [], schwer: [] }
  pool.forEach((q) => byDiff[q.difficulty].push(q))
  const pick = (arr, n) => shuffle(arr).slice(0, n)
  const chosen = [
    ...pick(byDiff.leicht, 5),
    ...pick(byDiff.mittel, 6),
    ...pick(byDiff.schwer, 4),
  ]
  // falls eine Kategorie zu klein ist, mit Rest auffüllen
  while (chosen.length < GAME_SIZE) {
    const extra = shuffle(pool).find((q) => !chosen.includes(q))
    if (!extra) break
    chosen.push(extra)
  }
  return chosen
    .slice(0, GAME_SIZE)
    .sort((a, b) => DIFF_RANK[a.difficulty] - DIFF_RANK[b.difficulty])
    .map(withShuffledOptions)
}

export default function App() {
  const [screen, setScreen] = useState('start') // start | show | result | learn
  const [level, setLevel] = useState(LEVELS.PLATZREIFE)
  const [game, setGame] = useState([])
  const [result, setResult] = useState(null)

  function startShow() {
    setGame(buildGame(level))
    setResult(null)
    setScreen('show')
  }

  function finish(res) {
    setResult(res)
    setScreen('result')
  }

  return (
    <div className="stage">
      <div className="shell">
        {screen === 'start' && (
            <div key="start" className="start anim-fade">
              <div className="kicker">Die grosse Golf-Quizshow</div>
              <div className="flag-orb">
                <img src={`${import.meta.env.BASE_URL}golf-flag.svg`} alt="Golffahne" />
              </div>
              <div className="logo">
                <h1>Platzreife</h1>
                <span className="sub">Die Millionenshow</span>
              </div>
              <p className="lede">
                15 Fragen pro Runde. Eine gedachte 18-Loch-Runde vom ersten Abschlag
                bis zum letzten Putt – Regeln, Etikette, Sicherheit und Platzpflege.
                Oder steig hoch zur <strong>Turnierreife</strong>: WHS, Spielformen
                und Wettspiel-Regeln. Drei Joker helfen dir: <strong>50:50</strong>,{' '}
                <strong>Publikum</strong> und <strong>Telefon</strong>.
              </p>

              <div className="level-pick">
                <span className="level-pick-label">Wähle dein Niveau</span>
                <div className="segmented" role="tablist">
                  {LEVEL_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      role="tab"
                      aria-selected={level === opt.value}
                      className={`seg ${level === opt.value ? 'active' : ''}`}
                      onClick={() => setLevel(opt.value)}
                    >
                      <b>{opt.label}</b>
                      <small>{opt.hint}</small>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mode-row">
                <button className="btn btn-primary" onClick={startShow}>
                  ▸ Show starten
                </button>
                <button className="btn btn-ghost" onClick={() => setScreen('learn')}>
                  Alle {QUESTIONS.length} Fragen lernen
                </button>
              </div>
              <div className="meta-line">
                <b>{TOTAL_PLATZREIFE}</b> Platzreife · <b>{TOTAL_TURNIER}</b> Turnier ·
                Golfregeln <b>2023</b> &amp; WHS
              </div>
            </div>
          )}

          {screen === 'show' && (
            <div key="show" className="anim-fade" style={{ flex: 1, display: 'flex' }}>
              <ShowGame questions={game} onFinish={finish} />
            </div>
          )}

          {screen === 'result' && result && (
            <ResultScreen
              key="result"
              result={result}
              level={level}
              onRetry={startShow}
              onHome={() => setScreen('start')}
              onLearn={() => setScreen('learn')}
            />
          )}

          {screen === 'learn' && (
            <div key="learn" className="anim-fade" style={{ flex: 1, display: 'flex' }}>
              <LearnMode onBack={() => setScreen('start')} />
            </div>
          )}
      </div>
    </div>
  )
}

function ResultScreen({ result, level, onRetry, onHome, onLearn }) {
  const won = result.won
  const reached = result.reachedLevel
  const safe = result.safeLevel ?? reached
  const safeLabel = safe > 0 ? LADDER[safe - 1].label : '—'
  const goalName =
    level === LEVELS.TURNIER
      ? 'Turnierreife'
      : level === 'beides'
      ? 'Golf-Champion'
      : 'Platzreife'

  let trophy, title, line
  if (won) {
    trophy = '🏆'
    title = `${goalName}!`
    line =
      level === LEVELS.TURNIER
        ? 'Sensationell – alle 15 Turnierfragen gemeistert. WHS, Spielformen und Wettspiel-Regeln sitzen. Bereit fürs Turnier!'
        : 'Sensationell – du hast alle 15 Fragen gemeistert und dir die Platzreife verdient. Regeln, Etikette und Spielablauf sitzen. Ab auf den Platz!'
  } else if (reached >= 10) {
    trophy = '🦅'
    title = 'Stark gespielt!'
    line = `Du bist weit gekommen (${reached} von 15 richtig). Auf der Leiter abgesichert bei: „${safeLabel}". Noch ein bisschen Feinschliff bei den kniffligen Regeln – dann klappt die Platzreife.`
  } else if (reached >= 5) {
    trophy = '⛳'
    title = 'Guter Lauf!'
    line = `${reached} von 15 richtig – die Grundlagen stimmen. Abgesichert bei „${safeLabel}". Schau dir im Lernmodus die Regeln rund um Strafgebiete, Drops und Erleichterung an.`
  } else {
    trophy = '🏌️'
    title = 'Weiter üben!'
    line = `${reached} von 15 richtig. Kein Problem – Golfregeln sind am Anfang viel Stoff. Geh den Lernmodus durch und starte gleich nochmal.`
  }

  return (
    <div className="result anim-pop">
      <div className="trophy">{trophy}</div>
      <h2>{title}</h2>
      <div className="score-big">
        <b>{result.correctCount}</b> / 15 Fragen richtig
      </div>
      <p className="verdict-line">{line}</p>
      <div className="mode-row">
        <button className="btn btn-primary" onClick={onRetry}>
          ▸ Nochmal spielen
        </button>
        <button className="btn btn-ghost" onClick={onLearn}>
          Fragen lernen
        </button>
        <button className="btn btn-ghost" onClick={onHome}>
          Startseite
        </button>
      </div>
    </div>
  )
}
