import type { Project } from '../schema'

export const erp: Project = {
  id: 'p05',
  no: '05',
  navLabel: '운수 ERP',
  title: '운수 ERP(TRP) 통합 운영 시스템 구축 및 고도화',
  tagline: '엑셀과 수기 대장에 흩어져 있던 배차·스케줄·근태·인사·정산 업무를 하나의 ERP로 통합 — 1년 8개월간 지속 고도화',
  period: '2025.01 ~ 2026.08',
  role: '전산개발팀장 · 백엔드·프론트엔드',
  pill: 'Full-stack · Lead',
  stack: ['Django', 'DRF', 'Python', 'MariaDB', 'Redis', 'JavaScript', 'Docker', 'Nginx', 'GCP', 'Google Sheets API'],
  visual: {
    items: [
      {
        type: 'image',
        src: '/assets/erp-dashboard.png',
        alt: 'ERP 메인 대시보드',
        caption: 'ERP 메인 대시보드 / 용역 계약 · 서식 운영 현황',
        frame: 'screen',
      },
    ],
  },
  highlights: [
    {
      title: '스케줄 관리 시스템 신규 구축',
      body: '사무실 운영 체계 분석 후 DB·API·웹 화면(달력, 승인 대기, 미등록자)과 앱 API를 설계·개발하고 실서버 배포.',
      emphasis: 'DB·API·웹 화면',
    },
    {
      title: '출퇴근 체크 및 승하차 관제',
      body: '출퇴근 체크 및 승하차 관제 기능 기획·설계, 관리자 웹페이지 및 실시간 관제 백엔드 로직 개발.',
    },
    {
      title: '전자 근로계약서 시스템',
      body: '패드 서명 기술 적용, 면접자 관리부터 자동 직원 등록까지 연동, 2단계 직원 등록 프로세스 및 권한별 필터링 개발.',
      emphasis: '면접자 관리부터 자동 직원 등록까지',
    },
    {
      title: '인사 관리 스케줄러',
      body: '시용기간(3개월) 만료·근로계약 갱신·면접 D-1 알림 등 스케줄러 다수 개발로 인사 관리 누락 방지.',
      emphasis: '인사 관리 누락 방지',
    },
    {
      title: '회사 분리와 경영관리',
      body: '회사 분리 및 회사별 운행 기록 관리 — 복잡한 집계 요건에 맞춘 DB 쿼리·ORM 설계 및 경영관리 메뉴 개발.',
    },
    {
      title: '정산과 낙찰관리',
      body: '세금계산서 처리를 위한 회사별 노선 정산 DB·API 설계, 입찰 현황 연동 낙찰관리 시스템 구축.',
      emphasis: '회사별 노선 정산',
    },
    {
      title: '자체 메일 서비스',
      body: '네이버 메일 영구 백업 및 SMTP / IMAP 연동 자체 메일 서비스 개발로 고객 응대 이력 중앙화.',
      emphasis: '고객 응대 이력 중앙화',
    },
    {
      title: '동시성 제어와 장애 대응',
      body: '스케줄 배정 동시성 제어 로직 구현, 실서버 데이터 오류 복구 및 주말·새벽 상시 장애 대응.',
      emphasis: '동시성 제어',
    },
    {
      title: '기존 양식 그대로 내보내기',
      body: '스케줄표·승하차 관제 리포트를 기존 업무 양식 그대로 Excel / PDF 다운로드 기능으로 구현해 현업 도입 저항 최소화.',
      emphasis: '현업 도입 저항 최소화',
    },
    {
      title: '내부 운영 시스템',
      body: '개발팀 업무관리·결재·패치노트·개선 요청 게시판 등 내부 운영 시스템을 직접 구축해 팀 업무 프로세스 표준화.',
    },
  ],
}
