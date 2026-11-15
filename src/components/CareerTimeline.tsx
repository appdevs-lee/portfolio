import type { Career } from '@/data/schema'
import { SectionHead } from './SectionHead'

const splitPeriod = (period: string) => period.split(' ~ ')

export function CareerTimeline({ rows }: { rows: readonly Career[] }) {
  return (
    <section id="career" style={{ marginTop: 72 }}>
      <SectionHead title="Career" tag="// 02 ─ 2021 → 2026" />
      <div className="timeline">
        {rows.map((row) => {
          const [from, to] = splitPeriod(row.period)
          return (
            <div className="tl-row" key={row.period}>
              <div className="yr">
                {from}
                <br />— {to}
              </div>
              <div className="body">
                <div>
                  <div className="ttl">{row.org}</div>
                  <div className="sub">{row.summary}</div>
                </div>
                <span className="role">{row.position}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
