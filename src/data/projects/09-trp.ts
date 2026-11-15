import type { Project } from '../schema'

export const trp: Project = {
  id: 'p09',
  no: '09',
  navLabel: 'TRP 배차 (초기)',
  title: 'TRP 전세버스 배차 관리 시스템 (초기 구축)',
  tagline: '수기로 운영되던 전세버스 배차 업무를 처음으로 전산화 — 이후 운수 ERP로 발전하는 기반',
  period: '2021.01 ~ 2022.10',
  role: '웹 프론트엔드 · 백엔드',
  pill: 'Full-stack',
  stack: ['Django', 'Python', 'MariaDB', 'HTML5', 'CSS3', 'JavaScript', 'TailwindCSS'],
  visual: {
    items: [
      {
        type: 'image',
        src: '/assets/trp-calendar.png',
        alt: '배차 캘린더',
        caption: '배차 캘린더 / 일별 출퇴근 · 일반 운행 현황',
        frame: 'screen',
      },
      {
        type: 'image',
        src: '/assets/trp-diagram.png',
        alt: 'TRP 시스템 아키텍처',
        caption: 'System Architecture / 관리자 · 배차담당자 → TRP Web → Django Server → MariaDB',
        frame: 'diagram',
      },
    ],
  },
  highlights: [
    {
      title: '기사·차량 매칭 배차',
      body: '기사·차량 매칭 배차 시스템 설계 및 구현으로 수기 배차 대비 소요 시간과 오류 감소.',
      emphasis: '수기 배차 대비 소요 시간과 오류 감소',
    },
    {
      title: '노선 캘린더와 변경 이력',
      body: '노선 일정 캘린더 및 일정 변경 이력 관리 기능 개발로 변경 공유 누락 문제 해결.',
      emphasis: '일정 변경 이력 관리',
    },
    {
      title: '운행 이력 조회와 대시보드',
      body: '날짜·기사·차량 기준 다중 검색 운행 이력 조회 기능 및 관리자 대시보드 개발.',
    },
    {
      title: '예약 웹뷰와 운임 계산',
      body: '거리·연비·시즌별 단가 기반 견적 산출, 45인 초과 예약의 다중 차량 자동 배치 및 차종별 가산·다일 할인 체계를 반영한 예약 웹뷰와 운임 계산 로직 개발.',
      emphasis: '45인 초과 예약의 다중 차량 자동 배치',
    },
  ],
}
