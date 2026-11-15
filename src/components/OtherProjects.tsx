import type { OtherProject } from '@/data/schema'
import { SectionHead } from './SectionHead'

export function OtherProjects({ items }: { items: readonly OtherProject[] }) {
  return (
    <section id="others" style={{ marginTop: 96 }}>
      <SectionHead title="Other Projects" tag={`// ${items.length} more`} />
      <div className="others">
        {items.map((o) => (
          <div className="other" key={o.title}>
            <div className="yr">{o.period.replace(' ~ ', ' — ')}</div>
            <h4>{o.title}</h4>
            <span className="role">{o.role}</span>
            <p>{o.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
