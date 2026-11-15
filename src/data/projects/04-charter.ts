import type { Project } from '../schema'

export const charter: Project = {
  id: 'p04',
  no: '04',
  navLabel: '전세버스 대절 앱',
  title: '킹버스 전세버스 대절 앱',
  tagline: '전세버스 대절을 중개하는 승객·기사용 모바일 서비스를 0에서부터 구축',
  period: '2026.06 ~ 재직 중',
  role: '프로젝트 총괄 · 인프라',
  pill: 'Lead · Infra',
  stack: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'GCP', 'Figma'],
  visual: {
    items: [
      {
        type: 'diagram',
        id: 'charter',
        caption: '승객 앱 · 기사 앱 · 관리자 → Django/DRF API → PostgreSQL, dev / prod 서버 분리',
      },
    ],
  },
  highlights: [
    {
      title: '즉시 매칭 모델 제안',
      body: '단순 대절 중개에 머무르던 초기 기획의 한계를 짚고, 버스 회사 수익 구조(통근·셔틀 사이의 공차 시간 손실)를 근거로 기사 가용 시간 사전 등록 기반 즉시 매칭 모델을 제안.',
      emphasis: '기사 가용 시간 사전 등록 기반 즉시 매칭 모델',
    },
    {
      title: '투트랙 전략',
      body: '기획 확정을 기다리다 프로젝트가 정체되는 상황을 막기 위해 1차 MVP 개발과 2차 기획을 병렬로 진행하는 투트랙 전략 수립 및 주차별 일정 관리.',
      emphasis: '투트랙 전략',
    },
    {
      title: '앱 구조와 가입 정책 설계',
      body: '승객 앱 / 기사 앱 분리 구조 확정, 회원가입·인증 플로우 및 버스회사 승인 프로세스 정책 설계.',
      emphasis: '승객 앱 / 기사 앱 분리',
    },
    {
      title: '기사–운수회사 연결 재설계',
      body: '앱 내 기사–운수회사 연결 구조를 재설계하고, 버스회사 등록·관리 기능을 관리자 페이지로 이관하는 방안 정리.',
    },
    {
      title: '백엔드 구조와 개발 환경 표준화',
      body: 'Django · DRF 기반 백엔드 구조 설계, Docker 개발 환경 표준화로 팀원 로컬 개발 환경 세팅 시간 단축.',
      emphasis: 'Docker 개발 환경 표준화',
    },
    {
      title: '서버 구축과 배포',
      body: 'dev / prod 자체 서버 구축, 연동 API 스펙 설계 및 배포 담당.',
    },
    {
      title: '팀 운영',
      body: '디자이너·백엔드 개발자 업무 분배, 신규 팀원 온보딩, 주간 회의 주도 및 기술 이슈 대응.',
    },
  ],
}
