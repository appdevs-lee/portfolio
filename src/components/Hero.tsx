import type { Profile } from '@/data/schema'

export function Hero({ profile }: { profile: Profile }) {
  const { eyebrow, headline, lede, stats, name } = profile
  return (
    <section className="hero" id="about">
      <div className="eyebrow">
        <span className="dot" />
        {eyebrow}
      </div>
      <h1 className="display">
        {headline.lead}
        <br />
        <em>{headline.accent}</em> {headline.tail}
        <br />
        <span style={{ color: 'var(--muted)', fontWeight: 600 }}>— {name}.</span>
      </h1>
      <ul className="lede-list">
        {lede.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <div className="stat-row">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="n">
              {s.value}
              <span className="u">{s.unit}</span>
            </div>
            <div className="l">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
