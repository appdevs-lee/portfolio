import type { Profile } from './schema'

export const profile: Profile = {
  name: '이주성',
  role: 'Full-Stack Developer',
  eyebrow: 'PORTFOLIO · 2026 · 5년차 풀스택 개발자',
  headline: {
    lead: '도메인을 빠르게 이해하고,',
    accent: '시스템으로 풀어내는',
    tail: '풀스택 개발자',
  },
  lede: [
    '웹 프론트엔드에서 시작해 iOS, 백엔드, 인프라까지 경험을 넓혀왔고, 현재는 개발팀장으로 프로젝트 기획·설계·개발·배포 전 과정을 책임지고 있습니다.',
    '운수·모빌리티 ERP와 실시간 관제, 임상시험 문서관리(eTMF), 커머스·O2O 등 규제와 운영 제약이 뚜렷한 도메인에서 0→1 구축 경험을 쌓았습니다.',
    'TCP 소켓 기반 IoT 통신 서버, MSA 분리, 실시간 위치 처리, 다단계 워크플로우·권한 설계 등 백엔드 설계 난이도가 높은 과제를 직접 주도했습니다.',
    '8~10명 규모 개발팀의 업무 분배·온보딩·QA·일정 관리를 병행하며, 발주사·고객사와의 커뮤니케이션과 산출물 관리까지 수행했습니다.',
  ],
  stats: [
    { value: '5', unit: '년차', label: '실무 경험' },
    { value: '17', unit: '개', label: '참여 프로젝트 (주요 10 · 기타 7)' },
    { value: '8~10', unit: '명', label: '개발팀 리드 규모' },
    { value: '4', unit: '영역', label: 'Web · iOS · Backend · Infra' },
  ],
  contacts: [
    { label: 'Email', value: 'jsdev1008@gmail.com', href: 'mailto:jsdev1008@gmail.com' },
    { label: 'Phone', value: '010-6637-2652', href: 'tel:01066372652' },
    { label: 'GitHub', value: 'github.com/appdevs-lee', href: 'https://github.com/appdevs-lee' },
  ],
  version: 'v3.0',
  updated: '2026.11',
}
