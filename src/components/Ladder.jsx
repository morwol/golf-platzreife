import { LADDER } from '../data/ladder.js'

export default function Ladder({ level }) {
  return (
    <aside className="ladder">
      <h3>Weg zur Platzreife</h3>
      {LADDER.map((rung, i) => {
        const cls =
          i === level ? 'current' : i < level ? 'passed' : rung.safe ? 'safe' : ''
        return (
          <div key={i} className={`rung ${cls}`}>
            <span className="num">{i + 1}</span>
            <span className="label">{rung.label}</span>
          </div>
        )
      })}
    </aside>
  )
}
