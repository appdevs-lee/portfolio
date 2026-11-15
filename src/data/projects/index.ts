import { z } from 'zod'
import { ProjectSchema, type Project } from '../schema'
import { etmf } from './01-etmf'
import { dtg } from './02-dtg'
import { busMonitoring } from './03-bus-monitoring'
import { charter } from './04-charter'
import { erp } from './05-erp'
import { namyangLink } from './06-namyang-link'
import { hyosobang } from './07-hyosobang'
import { metalive } from './08-metalive'
import { trp } from './09-trp'
import { webUi } from './10-web-ui'

// 빌드 시점에 스키마 검증 — 데이터 오류가 있으면 next build 가 실패한다
export const projects: readonly Project[] = z.array(ProjectSchema).parse([
  etmf,
  dtg,
  busMonitoring,
  charter,
  erp,
  namyangLink,
  hyosobang,
  metalive,
  trp,
  webUi,
])
