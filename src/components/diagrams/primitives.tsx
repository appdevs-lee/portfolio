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

type Point = readonly [number, number]

type ArrowProps = {
  from: Point
  to: Point
  via?: readonly Point[]
  label?: string
  accent?: boolean
}

const HEAD_LEN = 7
const HEAD_SPREAD = Math.PI / 7

function labelPosition(a: Point, b: Point): { x: number; y: number; anchor: 'middle' | 'start' } {
  const vertical = Math.abs(b[1] - a[1]) > Math.abs(b[0] - a[0])
  const mx = (a[0] + b[0]) / 2
  const my = (a[1] + b[1]) / 2
  return vertical ? { x: mx + 6, y: my + 3, anchor: 'start' } : { x: mx, y: my - 6, anchor: 'middle' }
}

export function Arrow({ from, to, via = [], label, accent = false }: ArrowProps) {
  const points: readonly Point[] = [from, ...via, to]
  const last = points[points.length - 2]
  const [x2, y2] = to
  const angle = Math.atan2(y2 - last[1], x2 - last[0])
  const back = (offset: number) =>
    `${x2 - HEAD_LEN * Math.cos(angle + offset)},${y2 - HEAD_LEN * Math.sin(angle + offset)}`
  const cls = accent ? ' accent' : ''
  const labelSeg = via.length > 0 ? 1 : 0
  const pos = labelPosition(points[labelSeg], points[labelSeg + 1])
  return (
    <g>
      <polyline className={`dg-arrow${cls}`} points={points.map((p) => p.join(',')).join(' ')} />
      <polygon className={`dg-head${cls}`} points={`${x2},${y2} ${back(HEAD_SPREAD)} ${back(-HEAD_SPREAD)}`} />
      {label && (
        <text className="dg-arrow-label" x={pos.x} y={pos.y} textAnchor={pos.anchor}>
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

// 모바일에서 다이어그램 라벨이 읽히도록 유지하는 최소 배율 (viewBox 대비)
const MOBILE_SCALE = 0.85

type FrameProps = { width: number; height: number; title: string; children: React.ReactNode }

export function DiagramFrame({ width, height, title, children }: FrameProps) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={title}
      style={{ ['--dg-min' as string]: `${Math.round(width * MOBILE_SCALE)}px` }}
    >
      <title>{title}</title>
      {children}
    </svg>
  )
}
