import type { Education } from '@/data/schema'
import { SectionHead } from './SectionHead'

export function EducationList({ rows }: { rows: readonly Education[] }) {
  return (
    <section id="education" style={{ marginTop: 96 }}>
      <SectionHead title="Education" tag="// 학력" />
      <div className="edu">
        {rows.map((r) => (
          <div key={r.school} style={{ display: 'contents' }}>
            <div className="yr">{r.period.replace(' ~ ', ' — ')}</div>
            <div className="body">
              {r.school}
              <span>{r.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
