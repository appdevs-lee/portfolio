import type { Project } from '../schema'

export const webUi: Project = {
  id: 'p10',
  no: '10',
  navLabel: '웹 UI 개선',
  title: '웹 서비스 UI 개선 및 프론트엔드 개발',
  tagline: '사내 웹 서비스의 사용성 문제를 개선하는 업무로 개발 커리어를 시작',
  period: '2020.12 ~ 2022.01',
  role: '웹 프론트엔드',
  pill: 'Frontend',
  context: '프리랜서로 시작 → 입사 후 지속',
  stack: ['HTML5', 'CSS3', 'JavaScript'],
  highlights: [
    {
      title: '기획부터 퍼블리싱까지',
      body: 'UI 개선 기획 및 디자인 프로토타입 제작 후 화면 퍼블리싱까지 직접 수행.',
    },
    {
      title: '접근성 강화',
      body: '화면 구조와 디자인 개선을 통해 사용자 접근성 강화.',
    },
  ],
}
