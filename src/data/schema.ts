import { z } from 'zod'

const nonEmpty = z.string().trim().min(1)
const period = z.string().regex(/^\d{4}\.\d{2}( ~ (\d{4}\.\d{2}|재직 중))?$/, 'YYYY.MM ~ YYYY.MM 형식')

export const DIAGRAM_IDS = ['etmf', 'dtg', 'bus-monitoring', 'charter', 'hyosobang'] as const

export const HighlightSchema = z
  .object({
    title: nonEmpty,
    body: nonEmpty,
    emphasis: nonEmpty.optional(),
  })
  .refine((h) => !h.emphasis || h.body.includes(h.emphasis), {
    message: 'emphasis 는 body 안에 그대로 포함되어야 합니다',
  })

const ImageItemSchema = z.object({
  type: z.literal('image'),
  src: z.string().regex(/^\/assets\/[a-z0-9-]+\.png$/),
  alt: nonEmpty,
  caption: nonEmpty.optional(),
  frame: z.enum(['screen', 'phone', 'diagram']),
})

const DiagramItemSchema = z.object({
  type: z.literal('diagram'),
  id: z.enum(DIAGRAM_IDS),
  caption: nonEmpty,
})

export const VisualItemSchema = z.discriminatedUnion('type', [ImageItemSchema, DiagramItemSchema])

export const ProjectSchema = z.object({
  id: z.string().regex(/^p\d{2}$/),
  no: z.string().regex(/^\d{2}$/),
  navLabel: nonEmpty.max(14),
  title: nonEmpty,
  tagline: nonEmpty,
  period,
  role: nonEmpty,
  pill: nonEmpty,
  context: nonEmpty.optional(),
  stack: z.array(nonEmpty).min(1),
  highlights: z.array(HighlightSchema).min(1),
  why: nonEmpty.optional(),
  visual: z
    .object({
      columns: nonEmpty.optional(),
      items: z.array(VisualItemSchema).min(1),
    })
    .optional(),
})

export const OtherProjectSchema = z.object({
  period,
  title: nonEmpty,
  role: nonEmpty,
  description: nonEmpty,
})

export const CareerSchema = z.object({
  period,
  org: nonEmpty,
  position: nonEmpty,
  summary: nonEmpty,
})

export const EducationSchema = z.object({
  period: z.string().regex(/^\d{4}\.\d{2} ~ (\d{4}\.\d{2}|휴학)$/),
  school: nonEmpty,
  detail: nonEmpty,
})

export const SkillGroupSchema = z.object({
  category: nonEmpty,
  primary: z.array(nonEmpty),
  items: z.array(nonEmpty),
})

export const StatSchema = z.object({
  value: nonEmpty,
  unit: nonEmpty,
  label: nonEmpty,
})

export const ProfileSchema = z.object({
  name: nonEmpty,
  role: nonEmpty,
  eyebrow: nonEmpty,
  headline: z.object({ lead: nonEmpty, accent: nonEmpty, tail: nonEmpty }),
  lede: z.array(nonEmpty).min(1),
  stats: z.array(StatSchema).length(4),
  contacts: z.array(z.object({ label: nonEmpty, value: nonEmpty, href: z.string().url().or(z.string().regex(/^(mailto|tel):/)) })),
  version: nonEmpty,
  updated: z.string().regex(/^\d{4}\.\d{2}$/),
})

export type Highlight = z.infer<typeof HighlightSchema>
export type VisualItem = z.infer<typeof VisualItemSchema>
export type DiagramId = (typeof DIAGRAM_IDS)[number]
export type Project = z.infer<typeof ProjectSchema>
export type OtherProject = z.infer<typeof OtherProjectSchema>
export type Career = z.infer<typeof CareerSchema>
export type Education = z.infer<typeof EducationSchema>
export type SkillGroup = z.infer<typeof SkillGroupSchema>
export type Profile = z.infer<typeof ProfileSchema>
