import type { Project } from '../schema'

export const namyangLink: Project = {
  id: 'p06',
  no: '06',
  navLabel: '현대 남양 Link',
  title: '현대 남양연구소 Link 통근 운영 시스템',
  tagline: '연구소 통근버스 운영을 디지털로 전환한 통합 솔루션 — 요구사항 관리부터 구조 설계·개발·QA 총괄',
  period: '2025.08 ~ 2026.06',
  role: 'PM · 프론트엔드·백엔드',
  pill: 'PM · Full-stack',
  stack: ['Spring Boot', 'JPA', 'Next.js', 'TypeScript', 'React', 'MariaDB', 'WebSocket'],
  visual: {
    columns: '1.6fr 1fr',
    items: [
      {
        type: 'image',
        src: '/assets/namyang-dashboard.png',
        alt: '관리자 대시보드',
        caption: '관리자 대시보드 / 운행 · 이상 운행 · 시간대별 승객수',
        frame: 'screen',
      },
      { type: 'image', src: '/assets/namyang-app.png', alt: '기사 앱', frame: 'phone' },
    ],
  },
  highlights: [
    {
      title: '기획과 고객사 시연',
      body: '통합 솔루션 자료 수집·기획 및 실시간 관제 시연 준비, 고객사 현장 발표 참여.',
    },
    {
      title: '전체 시스템 구조 설계',
      body: 'Link / Link-TRP / Link-D 전체 시스템 구조 설계 및 연동 API 스펙 정의.',
      emphasis: 'Link / Link-TRP / Link-D',
    },
    {
      title: '운영 관리 기능 개발',
      body: '사고·노선·정류장·운수사 관리 기능 프론트엔드 및 백엔드 개발.',
    },
    {
      title: '레거시 화면 Next.js 전환',
      body: '순수 HTML/JS로 작성된 레거시 화면을 Next.js · TypeScript로 전환해 유지보수성과 타입 안정성 확보.',
      emphasis: 'Next.js · TypeScript로 전환',
    },
    {
      title: '노선 날짜별 버전 관리',
      body: '날짜별 노선 변경이 잦은 운영 특성을 반영한 노선 자동 생성 및 날짜 기준 버전 관리 로직 설계.',
      emphasis: '날짜 기준 버전 관리',
    },
    {
      title: '멀티테넌시 권한 구조',
      body: '운영사 / 운수사 멀티 권한(멀티테넌시) 구조 설계로 다수 조직 동시 참여 시 권한 충돌 문제 해결.',
      emphasis: '멀티테넌시',
    },
    {
      title: '실시간 운영 대시보드',
      body: '정류장 승하차 인원 입력 및 피플 카운팅 데이터 분석, WebSocket 기반 실시간 운영 대시보드 제공.',
      emphasis: 'WebSocket 기반 실시간 운영 대시보드',
    },
    {
      title: 'API 통합과 QA',
      body: '신규 API 통합, 실서버 도메인 연결 및 QA 총괄.',
    },
  ],
}
