import type { SkillGroup } from './schema'

export const skills: SkillGroup[] = [
  {
    category: 'Backend',
    primary: ['Django', 'Spring Boot'],
    items: ['Python', 'Django REST Framework', 'Java', 'JPA', 'Netty (TCP)', 'REST API', 'WebSocket', 'SSE'],
  },
  {
    category: 'Frontend',
    primary: ['React', 'Next.js', 'TypeScript'],
    items: ['JavaScript', 'HTML5', 'CSS3', 'TailwindCSS'],
  },
  {
    category: 'Mobile',
    primary: ['Swift · UIKit'],
    items: ['React Native', 'Expo'],
  },
  {
    category: 'Database',
    primary: ['PostgreSQL', 'MariaDB'],
    items: ['MySQL', 'Redis'],
  },
  {
    category: 'Infra / DevOps',
    primary: ['GCP', 'Docker'],
    items: ['Compute Engine', 'Pub/Sub', 'Cloud SQL', 'AWS S3', 'Nginx', 'GitHub Actions'],
  },
  {
    category: '연동 경험',
    primary: [],
    items: ['DTG 통신 프로토콜', 'GPS', 'NFC / QR', 'PortOne 결제', 'Twilio SMS', 'SMTP / IMAP', 'Google Sheets API'],
  },
  {
    category: '협업',
    primary: [],
    items: ['Git', 'GitHub', 'Jira', 'Slack', 'Figma', 'Notion'],
  },
]
