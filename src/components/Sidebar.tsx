'use client'

import { useEffect, useMemo, useState } from 'react'
import type { NavItem } from '@/data/nav'

type Props = {
  name: string
  role: string
  items: readonly NavItem[]
  version: string
  updated: string
}

function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0)
    }
    update()
    document.addEventListener('scroll', update, { passive: true })
    return () => document.removeEventListener('scroll', update)
  }, [])
  return progress
}

function useActiveSection(hrefs: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const targets = hrefs.map((h) => document.querySelector(h)).filter((t): t is Element => t !== null)
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting)
        if (hit) setActive(`#${hit.target.id}`)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [hrefs])
  return active
}

export function Sidebar({ name, role, items, version, updated }: Props) {
  const progress = useScrollProgress()
  const hrefs = useMemo(() => items.map((i) => i.href), [items])
  const active = useActiveSection(hrefs)

  return (
    <>
      <div className="progress">
        <div className="bar" style={{ width: `${progress}%` }} />
      </div>
      <aside className="nav">
        <div className="brand">
          <div className="logo">L</div>
          <div>
            <div className="who">{name}</div>
            <div className="role">{role}</div>
          </div>
        </div>
        <nav>
          <div className="label">Index</div>
          <ol>
            {items.map((item, i) => (
              <li key={item.href}>
                <a href={item.href} className={active === item.href ? 'active' : undefined}>
                  <span className="num">{String(i).padStart(2, '0')}</span>
                  <span>{item.label}</span>
                  <span className="yr">{item.year ?? ''}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="meta">
          Portfolio · {version}
          <br />
          <span className="v">Last updated · {updated}</span>
          <br />
          <a href="#contact">↘ get in touch</a>
        </div>
      </aside>
    </>
  )
}
