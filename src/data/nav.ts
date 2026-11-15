import { projects } from './projects'

export type NavItem = { href: string; label: string; year?: string }

const yearOf = (period: string) => `'${period.slice(2, 4)}`

export const navItems: readonly NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Tech Stack' },
  { href: '#career', label: 'Career' },
  ...projects.map((p) => ({ href: `#${p.id}`, label: p.navLabel, year: yearOf(p.period) })),
  { href: '#others', label: 'Other Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
