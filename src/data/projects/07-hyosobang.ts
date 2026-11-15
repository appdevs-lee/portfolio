import type { Project } from '../schema'

export const hyosobang: Project = {
  id: 'p07',
  no: '07',
  navLabel: '효소방 O2O',
  title: '효소방 O2O 서비스 및 키오스크 시스템',
  tagline: '관리자·고객·키오스크 세 종류의 클라이언트와 알림 시스템을 포함한 오프라인 매장 운영 서비스',
  period: '2025.10 ~ 2026.01',
  role: '풀스택 개발 · 인프라',
  pill: 'Full-stack · Infra',
  stack: ['React', 'Django', 'Redis', 'Twilio', 'Expo', 'Docker', 'GCP'],
  visual: {
    items: [
      {
        type: 'diagram',
        id: 'hyosobang',
        caption: '관리자 · 고객 · 키오스크 웹 → Django API → Redis 큐 → Expo 푸시 / Twilio SMS',
      },
    ],
  },
  highlights: [
    {
      title: '세 종류의 클라이언트',
      body: 'React 기반 관리자 / 고객 / 키오스크 웹 개발 및 화면 흐름 설계.',
      emphasis: '관리자 / 고객 / 키오스크',
    },
    {
      title: '무중단 배포',
      body: 'GCP + Docker 무중단 배포 환경 구축으로 운영 중 서비스 중단 없이 배포 가능하도록 개선.',
      emphasis: '무중단 배포',
    },
    {
      title: '비동기 알림 발송',
      body: 'Expo SDK 기반 푸시 알림, Twilio SMS 연동, Redis 큐를 활용한 비동기 발송 처리로 응답 지연 제거.',
      emphasis: 'Redis 큐를 활용한 비동기 발송',
    },
  ],
}
