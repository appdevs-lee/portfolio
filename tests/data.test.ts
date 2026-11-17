import { describe, expect, it } from 'vitest'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { z } from 'zod'
import {
  CareerSchema,
  EducationSchema,
  OtherProjectSchema,
  ProfileSchema,
  ProjectSchema,
  SkillGroupSchema,
} from '@/data/schema'
import { projects } from '@/data/projects'
import { others } from '@/data/others'
import { career } from '@/data/career'
import { education } from '@/data/education'
import { skills } from '@/data/skills'
import { profile } from '@/data/profile'
import { navItems } from '@/data/nav'

const PUBLIC_DIR = join(__dirname, '..', 'public')
const BANNED_TERMS = ['성화', 'Sunghwa', 'sunghwa', '오썸피아']

describe('schemas', () => {
  it('validates every data module', () => {
    expect(() => z.array(ProjectSchema).parse(projects)).not.toThrow()
    expect(() => z.array(OtherProjectSchema).parse(others)).not.toThrow()
    expect(() => z.array(CareerSchema).parse(career)).not.toThrow()
    expect(() => z.array(EducationSchema).parse(education)).not.toThrow()
    expect(() => z.array(SkillGroupSchema).parse(skills)).not.toThrow()
    expect(() => ProfileSchema.parse(profile)).not.toThrow()
  })

  it('rejects an emphasis that is not part of the body', () => {
    const bad = { ...projects[0], highlights: [{ title: 't', body: 'abc', emphasis: 'xyz' }] }
    expect(() => ProjectSchema.parse(bad)).toThrow()
  })
})

describe('resume parity (261115)', () => {
  it('has the 10 main projects numbered 01..10 in order', () => {
    expect(projects.map((p) => p.no)).toEqual(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'])
    expect(projects.map((p) => p.id)).toEqual(projects.map((p) => `p${p.no}`))
  })

  it('has 7 other projects, 6 career rows, 2 education rows, 7 skill groups', () => {
    expect(others).toHaveLength(7)
    expect(career).toHaveLength(6)
    expect(education).toHaveLength(2)
    expect(skills).toHaveLength(7)
  })

  it('keeps the project-count stat in sync with the data', () => {
    const stat = profile.stats.find((s) => s.label.includes('프로젝트'))
    expect(stat?.value).toBe(String(projects.length + others.length))
  })
})

describe('career', () => {
  it('lists the transport-company and Innervix teams as separate rows, newest first', () => {
    expect(career.slice(0, 2).map((c) => [c.org, c.period, c.position])).toEqual([
      ['이너빅스 개발팀', '2026.03 ~ 2026.09', '팀장'],
      ['운수회사 개발팀', '2025.01 ~ 2026.09', '팀장'],
    ])
  })

  it('attributes eTMF only to the Innervix row', () => {
    const withEtmf = career.filter((c) => c.summary.includes('eTMF')).map((c) => c.org)
    expect(withEtmf).toEqual(['이너빅스 개발팀'])
  })
})

describe('employment facts', () => {
  it('lists pre-Kingbus freelance work as the oldest career row', () => {
    const last = career[career.length - 1]
    expect([last.org, last.period]).toEqual(['프리랜서', '2020.12 ~ 2021.11'])
  })

  it('shows nothing as currently employed (all roles ended 2026.09)', () => {
    expect(JSON.stringify({ projects, career, others })).not.toContain('재직 중')
  })

  it('marks main projects that started before joining Kingbus (2021.12) as freelance', () => {
    projects
      .filter((p) => p.period.slice(0, 7) < '2021.12')
      .forEach((p) => expect(p.context ?? '', p.id).toContain('프리랜서'))
  })
})

describe('navigation', () => {
  it('links every project exactly once and has unique hrefs', () => {
    const hrefs = navItems.map((n) => n.href)
    expect(new Set(hrefs).size).toBe(hrefs.length)
    projects.forEach((p) => expect(hrefs).toContain(`#${p.id}`))
  })
})

describe('assets and privacy', () => {
  it('references only images that exist under public/', () => {
    const srcs = projects.flatMap((p) => p.visual?.items ?? []).flatMap((i) => (i.type === 'image' ? [i.src] : []))
    expect(srcs.length).toBeGreaterThan(0)
    srcs.forEach((src) => expect(existsSync(join(PUBLIC_DIR, src)), src).toBe(true))
  })

  it('does not expose undisclosed company names', () => {
    const text = JSON.stringify({ projects, others, career, education, skills, profile })
    BANNED_TERMS.forEach((term) => expect(text, term).not.toContain(term))
  })
})
