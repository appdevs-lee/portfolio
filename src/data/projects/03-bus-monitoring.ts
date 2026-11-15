import type { Project } from '../schema'

export const busMonitoring: Project = {
  id: 'p03',
  no: '03',
  navLabel: '버스 실시간 관제',
  title: '버스 실시간 관제 서비스',
  tagline: '전화·메신저 의존 운행 파악을 GPS 기반 실시간 관제로 전환 — 평일 약 110대 차량 위치 실시간 수집·표출',
  period: '2025.11 ~ 2026.07',
  role: '아키텍처 설계 · 개발 총괄',
  pill: 'Architecture · Lead',
  stack: ['Spring Boot', 'Redis', 'PostgreSQL', 'GCP Pub/Sub', 'WebSocket', 'SSE', 'Docker', 'Nginx'],
  visual: {
    columns: '1.3fr 1fr',
    items: [
      {
        type: 'image',
        src: '/assets/monitoring-map.png',
        alt: '실시간 차량 관제 화면',
        caption: '실시간 차량 관제 / GPS 위치 · 운행 현황',
        frame: 'screen',
      },
      {
        type: 'diagram',
        id: 'bus-monitoring',
        caption: 'Pub/Sub 수집 → Redis(최신 위치) · PostgreSQL(이력) → SSE/WebSocket push',
      },
    ],
  },
  highlights: [
    {
      title: '관제 서버 MSA 분리',
      body: '데이터 누적량 증가로 기존 배차관리(TRP) 서버의 리소스 부담이 커지는 문제를 해결하기 위해, 관제 서버를 MSA 형태로 분리 설계.',
      emphasis: 'MSA 형태로 분리',
    },
    {
      title: 'Pub/Sub 이벤트 수집',
      body: '위치 데이터는 Pub/Sub 이벤트로 수집 — 관제 서버 장애 시에도 메시지가 버퍼링되고 재시도·데드레터 처리가 가능한 구조 확보.',
      emphasis: '재시도·데드레터',
    },
    {
      title: '이원화 저장 전략',
      body: '최신 위치는 Redis에 TTL 기반으로 upsert, 경로 재생용 이력은 PostgreSQL에 날짜 파티셔닝하여 적재.',
      emphasis: 'Redis에 TTL 기반으로 upsert',
    },
    {
      title: 'BFF와 마스터 데이터 캐싱',
      body: '기사·차량·배차 등 변경 빈도가 낮은 마스터 데이터는 REST + TTL 캐싱으로 조회하고, 지도 표출 데이터를 한 번에 조합해 내려주는 BFF 구조 구현.',
      emphasis: 'BFF 구조',
    },
    {
      title: '변경분 실시간 push',
      body: 'SSE / WebSocket 브로커를 통해 변경분만 브라우저에 push 하여 지도 관제 화면 실시간 갱신.',
      emphasis: '변경분만 브라우저에 push',
    },
    {
      title: '"조용히 끊기는" 장애 대비',
      body: '관제 시스템의 대표 장애 유형인 데이터가 조용히 끊기는 상황에 대비해 마지막 수신 시각 커스텀 지표와 미확인 메시지 수 알림을 구성.',
      emphasis: '마지막 수신 시각 커스텀 지표',
    },
    {
      title: 'NFC 출석·점호 연동',
      body: 'NFC 출석·점호 기능과 연동해 첫 배차 기준 출근·지각·결근 실시간 관제 화면, 지도 클러스터링 및 점호 모드 실시간 추적 기능 개발.',
      emphasis: 'NFC 출석·점호',
    },
    {
      title: '인프라 구성',
      body: 'VPC 내부 IP 통신, 서비스 계정 기반 인증, dev/prod 환경 분리, Docker 이미지 빌드 및 배포 파이프라인 구성.',
    },
  ],
  why: '관제 데이터가 배차관리 서버의 리소스를 잠식하지 않도록 독립 서버로 분리하고, 수집 경로에 Pub/Sub을 두어 관제 서버가 내려가도 위치 데이터가 유실되지 않도록 했습니다.',
}
