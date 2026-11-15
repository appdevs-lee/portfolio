import type { Highlight, Project } from '@/data/schema'
import { ProjectVisual } from './ProjectVisual'

function HighlightBody({ body, emphasis }: Highlight) {
  if (!emphasis) return <p>{body}</p>
  const at = body.indexOf(emphasis)
  return (
    <p>
      {body.slice(0, at)}
      <span className="num">{emphasis}</span>
      {body.slice(at + emphasis.length)}
    </p>
  )
}

type Props = { project: Project; total: number }

export function ProjectCard({ project, total }: Props) {
  const { id, no, pill, title, tagline, period, role, context, stack, visual, highlights, why } = project
  const meta = [
    { k: 'Period', v: period.replace(' ~ ', ' ─ ') },
    { k: 'Role', v: role },
    { k: 'Stack', v: `${stack.length} technologies` },
    { k: 'Highlights', v: `${highlights.length} items` },
  ]
  return (
    <article className="project" id={id}>
      <header className="project-head">
        <div className="ph-top">
          <span className="ph-no">
            PROJECT {no} / {String(total).padStart(2, '0')}
            {context && <span className="ph-context">{context}</span>}
          </span>
          <span className="ph-pill">{pill}</span>
        </div>
        <h3 className="ph-title">{title}</h3>
        <p className="ph-tag">{tagline}</p>
        <div className="ph-meta">
          {meta.map((m) => (
            <div className="m" key={m.k}>
              <div className="k">{m.k}</div>
              <div className="v">{m.v}</div>
            </div>
          ))}
        </div>
      </header>

      <div className="project-body">
        <div className="pb-stack">
          {stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>

        {visual && <ProjectVisual visual={visual} />}

        <div className="hl">
          {highlights.map((h, i) => (
            <div className="hl-item" key={h.title}>
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4>{h.title}</h4>
                <HighlightBody {...h} />
              </div>
            </div>
          ))}
        </div>

        {why && (
          <div className="why">
            <div className="label">설계 판단의 근거</div>
            <p>{why}</p>
          </div>
        )}
      </div>
    </article>
  )
}
