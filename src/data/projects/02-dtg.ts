import type { Project } from '../schema'

export const dtg: Project = {
  id: 'p02',
  no: '02',
  navLabel: 'DTG 통신 서버',
  title: 'DTG(디지털 운행기록계) 실시간 통신 서버',
  tagline: '차량 DTG 단말의 운행 데이터를 실시간 수신·저장하고 관제 시스템에 전달하는 전용 TCP 통신 서버',
  period: '2026.02 ~ 2026.07',
  role: '서버 아키텍처 설계 · 백엔드 개발',
  pill: 'Backend · Architecture',
  stack: ['Java', 'Spring Boot', 'Netty', 'JPA', 'PostgreSQL', 'Docker', 'GCP', 'AWS S3'],
  visual: {
    items: [
      {
        type: 'diagram',
        id: 'dtg',
        caption: 'DTG 단말 → Netty(TCP) 디코더·핸들러 → PostgreSQL / S3 원본 백업, Tomcat 관리 API 포트 분리',
      },
    ],
  },
  highlights: [
    {
      title: 'Spring Boot + Netty 소켓 서버 구조',
      body: 'HTTP가 아닌 raw TCP 바이너리 통신 요건에 맞춰 Spring Boot + Netty 기반 소켓 수신 서버 구조 설계. Tomcat은 관리·모니터링 REST API, Netty는 단말 통신으로 포트 분리.',
      emphasis: 'raw TCP 바이너리 통신',
    },
    {
      title: '패킷 디코더와 검증',
      body: 'STX/ETX 경계 기반 패킷 디코더, 헤더·바디 파싱, 체크섬 검증, 불완전 패킷 예외 처리 구현.',
      emphasis: 'STX/ETX 경계 기반 패킷 디코더',
    },
    {
      title: '메시지 타입별 핸들러',
      body: '단말 인증, 운행 데이터 수신, ACK/NAK 응답, 하트비트 등 메시지 타입별 핸들러 분기 처리.',
      emphasis: 'ACK/NAK',
    },
    {
      title: 'DB 병목 제거',
      body: '초당 수십~수백 건 유입 상황에 대비해 JPA 배치 INSERT 및 JDBC 옵션 튜닝, PostgreSQL 파티셔닝·인덱스 전략 적용으로 DB 병목 제거.',
      emphasis: 'JPA 배치 INSERT',
    },
    {
      title: '원본 패킷 S3 비동기 백업',
      body: '원본 패킷을 S3에 비동기 백업하여 프로토콜 해석 오류 시에도 데이터 재처리가 가능하도록 구성.',
      emphasis: '데이터 재처리',
    },
    {
      title: '커스텀 지표와 알림',
      body: 'Actuator·Micrometer 기반 단말 연결 수·수신 패킷 수 커스텀 지표 수집 및 수신 중단 알림 구성.',
      emphasis: 'Actuator·Micrometer',
    },
    {
      title: '테스트 도구 자체 제작',
      body: '바이너리 통신 테스트가 불가한 문제를 해결하기 위해 TCP 테스트 클라이언트 모듈과 hex dump 로깅 유틸을 자체 제작.',
      emphasis: 'TCP 테스트 클라이언트',
    },
    {
      title: '현장 대응과 연동 로드맵',
      body: 'DTG 단말 설치 대응·대장 정리·추가 물량 발주 및 IBMS 연동 로드맵 설계 참여.',
    },
  ],
  why: '단말이 HTTP가 아닌 raw TCP 바이너리로 통신하기 때문에 Netty로 소켓 계층을 직접 다루고, 관리·모니터링 API는 Tomcat으로 포트를 분리해 단말 트래픽과 운영 트래픽이 서로 영향을 주지 않도록 했습니다.',
}
