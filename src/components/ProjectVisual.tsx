import type { Project, VisualItem } from '@/data/schema'
import { Diagram } from './diagrams'

const CAPTION_INLINE = { border: 0, padding: 0, background: 'transparent' } as const

function VisualShot({ item }: { item: VisualItem }) {
  if (item.type === 'diagram') {
    return (
      <div className="shot diagram">
        <Diagram id={item.id} />
        <div className="cap" style={CAPTION_INLINE}>
          — {item.caption}
        </div>
      </div>
    )
  }
  if (item.frame === 'phone') {
    return (
      <div className="shot phone">
        <img src={item.src} alt={item.alt} loading="lazy" />
      </div>
    )
  }
  const isDiagram = item.frame === 'diagram'
  return (
    <div className={isDiagram ? 'shot diagram' : 'shot'}>
      <img src={item.src} alt={item.alt} loading="lazy" />
      {item.caption && (
        <div className="cap" style={isDiagram ? CAPTION_INLINE : undefined}>
          — {item.caption}
        </div>
      )}
    </div>
  )
}

export function ProjectVisual({ visual }: { visual: NonNullable<Project['visual']> }) {
  const multi = visual.items.length > 1
  return (
    <div
      className={multi ? 'shots two' : 'shots'}
      style={{ marginBottom: 32, ...(visual.columns ? { gridTemplateColumns: visual.columns } : {}) }}
    >
      {visual.items.map((item) => (
        <VisualShot key={item.type === 'image' ? item.src : item.id} item={item} />
      ))}
    </div>
  )
}
