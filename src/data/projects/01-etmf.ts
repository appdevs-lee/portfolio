import type { Project } from '../schema'

export const etmf: Project = {
  id: 'p01',
  no: '01',
  navLabel: '임상 eTMF',
  title: '임상시험 eTMF 시스템 구축',
  tagline: '임상시험 규제 문서를 전자적으로 수집·보관·감사 대응하는 eTMF(electronic Trial Master File) 시스템',
  period: '2026.03 ~ 2026.08',
  role: 'PM · 프론트엔드 개발',
  pill: 'PM · Frontend',
  context: '발주사 협업 프로젝트',
  stack: ['Next.js', 'TypeScript', 'React', 'REST API', 'Figma'],
  visual: {
    items: [
      {
        type: 'diagram',
        id: 'etmf',
        caption: 'DIA TMF Reference Model 폴더 트리 · 문서 라이프사이클 · 21 CFR Part 11 전자서명',
      },
    ],
  },
  highlights: [
    {
      title: '요구사항 구조화 및 설계 기준 수립',
      body: 'URS 120여 건의 요구사항을 6개 대분류로 정리하고, 운영정책·관리자·사용자·기능·연동 영역의 설계 기준을 수립.',
      emphasis: 'URS 120여 건',
    },
    {
      title: 'TMF 폴더 트리와 문서 라이프사이클',
      body: 'DIA TMF Reference Model 기반 Zone / Section / Artifact 폴더 트리와 문서 라이프사이클(Draft → Inspection Ready) 설계.',
      emphasis: 'Draft → Inspection Ready',
    },
    {
      title: '21 CFR Part 11 규제 요건 구현',
      body: '전자서명(All in Order / Any Order / Only One), 불변 Audit Trail, Auditor 읽기전용 권한 등 규제 요건을 화면 단위로 구현.',
      emphasis: '불변 Audit Trail',
    },
    {
      title: '보안 정책 UI',
      body: 'RBAC 기반 접근 제어, 개인정보 마스킹 3단계, 세션 타임아웃·중복 로그인 차단 등 보안 정책을 UI에 반영.',
      emphasis: 'RBAC',
    },
    {
      title: '문서 뷰어 선정과 대용량 처리',
      body: 'PDF·Word·Excel·이메일(.eml/.msg) 문서 뷰어 기술 검토 및 선정, 대용량 문서 페이지 단위 lazy loading 적용.',
      emphasis: '페이지 단위 lazy loading',
    },
    {
      title: '다단계 워크플로우와 모니터링',
      body: '다단계(최대 15라운드) 순차·병렬 워크플로우, Task 자동 생성·할당, Completeness 모니터링 대시보드 화면 개발.',
      emphasis: '최대 15라운드',
    },
    {
      title: '요구사항 변경 대응과 일정 재수립',
      body: '고객사 요구사항 변경에 따른 Flow 전면 재정비 상황에서 일정 영향도를 정리해 발주사·사업부·경영진에 공유하고 개발 일정을 재수립.',
    },
    {
      title: '인수인계 총괄',
      body: 'API 리스트·ERD 등 인수인계 문서 정리 및 코드 이관 프로세스 총괄.',
    },
  ],
}
