import type { Profile } from '@/data/schema'
import { SectionHead } from './SectionHead'

export function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contact" style={{ marginTop: 96 }}>
      <SectionHead title="Get in Touch" tag="// contact" />
      <div className="contact-card">
        <div>
          <h3>
            함께 좋은 프로덕트를
            <br />
            만들고 싶으신 분에게.
          </h3>
          <p>
            도메인을 깊이 파고드는 풀스택 개발자가 필요하신 분 — 언제든 편하게 연락 주세요. 신규 프로덕트 0→1 설계,
            ERP / 실시간 관제 / 통신 서버 구축에 강점이 있습니다.
          </p>
        </div>
        <ul className="contact-list" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {profile.contacts.map((c) => (
            <li key={c.label}>
              <span className="k">{c.label}</span>
              <a className="v" href={c.href}>
                {c.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="foot">
        <span>© 2026 — PORTFOLIO {profile.version}</span>
        <span>— THANK YOU FOR READING —</span>
      </footer>
    </section>
  )
}
