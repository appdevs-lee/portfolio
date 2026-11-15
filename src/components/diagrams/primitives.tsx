type BoxProps = {
  x: number
  y: number
  w: number
  h: number
  label: string
  sub?: string
  variant?: 'default' | 'accent' | 'dark'
}

export function Box({ x, y, w, h, label, sub, variant = 'default' }: BoxProps) {
  const cx = x + w / 2
  const cy = y + h / 2
  const inv = variant === 'dark' ? ' inv' : ''
  return (
    <g>
      <rect className={`dg-box ${variant === 'default' ? '' : variant}`} x={x} y={y} width={w} height={h} rx={6} />
      <text className={`dg-label${inv}`} x={cx} y={sub ? cy - 3 : cy + 4} textAnchor="middle">
        {label}
      </text>
      {sub && (
        <text className={`dg-sub${inv}`} x={cx} y={cy + 13} textAnchor="middle">
          {sub}
        </text>
      )}
    </g>
  )
}

type ArrowProps = {
  from: readonly [number, number]
  to: readonly [number, number]
  label?: string
  accent?: boolean
}

const HEAD_LEN = 7
const HEAD_SPREAD = Math.PI / 7

export function Arrow({ from, to, label, accent = false }: ArrowProps) {
  const [x1, y1] = from
  const [x2, y2] = to
  const angle = Math.atan2(y2 - y1, x2 - x1)
  const back = (offset: number) =>
    `${x2 - HEAD_LEN * Math.cos(angle + offset)},${y2 - HEAD_LEN * Math.sin(angle + offset)}`
  const cls = accent ? ' accent' : ''
  return (
    <g>
      <line className={`dg-arrow${cls}`} x1={x1} y1={y1} x2={x2} y2={y2} />
      <polygon className={`dg-head${cls}`} points={`${x2},${y2} ${back(HEAD_SPREAD)} ${back(-HEAD_SPREAD)}`} />
      {label && (
        <text className="dg-arrow-label" x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 6} textAnchor="middle">
          {label}
        </text>
      )}
    </g>
  )
}

type ZoneProps = { x: number; y: number; w: number; h: number; label: string }

export function Zone({ x, y, w, h, label }: ZoneProps) {
  return (
    <g>
      <rect className="dg-zone" x={x} y={y} width={w} height={h} rx={8} />
      <text className="dg-zone-label" x={x + 12} y={y + 16}>
        {label}
      </text>
    </g>
  )
}

type FrameProps = { width: number; height: number; title: string; children: React.ReactNode }

export function DiagramFrame({ width, height, title, children }: FrameProps) {
  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={title}>
      <title>{title}</title>
      {children}
    </svg>
  )
}
