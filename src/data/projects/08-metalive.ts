import type { Project } from '../schema'

export const metalive: Project = {
  id: 'p08',
  no: '08',
  navLabel: '메타라이브 iOS',
  title: "메타버스 플랫폼 '메타라이브' iOS 앱",
  tagline: 'Unity로 제작되어 있던 메타버스 플랫폼 iOS 앱을 Swift 네이티브 앱으로 전환하고 실서비스 운영·배포까지 담당',
  period: '2022.12 ~ 2024.06',
  role: 'iOS 개발 · 배포',
  pill: 'iOS',
  stack: ['Swift', 'UIKit', 'Alamofire', 'REST API', 'Firebase'],
  visual: {
    columns: '1fr 1.6fr',
    items: [{ type: 'image', src: '/assets/metalive-app.png', alt: '메타라이브 메타버스 홈', frame: 'phone' }],
  },
  highlights: [
    {
      title: 'Unity → Swift 네이티브 전환',
      body: 'Unity 기반 앱을 Swift 네이티브로 Converting 하여 실시간 영상 송출 성능과 앱 안정성 확보.',
      emphasis: 'Swift 네이티브로 Converting',
    },
    {
      title: '코드 기반 UI 리팩토링',
      body: 'Storyboard 기반 UI를 코드 기반 UI로 단계적 리팩토링하여 화면 재사용성과 협업 효율 개선.',
      emphasis: '코드 기반 UI로 단계적 리팩토링',
    },
    {
      title: 'SNS 로그인과 푸시',
      body: 'Apple · Meta · Kakao · Google 4종 SNS 로그인 연동 및 푸시 알림 구현.',
      emphasis: '4종 SNS 로그인',
    },
    {
      title: '네트워크 레이어와 배포',
      body: 'Alamofire 기반 네트워크 레이어 구성, 앱스토어 심사·배포 및 운영 전담.',
      emphasis: '앱스토어 심사·배포',
    },
  ],
}
