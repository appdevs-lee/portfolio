import type { SkillGroup } from '@/data/schema'
import { SectionHead } from './SectionHead'

export function TechStack({ groups }: { groups: readonly SkillGroup[] }) {
  return (
    <section id="stack">
      <SectionHead title="Tech Stack" tag="// 01 ─ tools" />
      <div className="stack">
        {groups.map((g) => (
          <div key={g.category} style={{ display: 'contents' }}>
            <div className="cat">{g.category}</div>
            <div className="chips">
              {g.primary.map((s) => (
                <span className="chip solid" key={s}>
                  {s}
                </span>
              ))}
              {g.items.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
