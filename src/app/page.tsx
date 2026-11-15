import { CareerTimeline } from '@/components/CareerTimeline'
import { Contact } from '@/components/Contact'
import { EducationList } from '@/components/EducationList'
import { Hero } from '@/components/Hero'
import { OtherProjects } from '@/components/OtherProjects'
import { ProjectCard } from '@/components/ProjectCard'
import { Sidebar } from '@/components/Sidebar'
import { TechStack } from '@/components/TechStack'
import { career } from '@/data/career'
import { education } from '@/data/education'
import { navItems } from '@/data/nav'
import { others } from '@/data/others'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'

export default function Home() {
  return (
    <div className="wrap">
      <Sidebar
        name={profile.name}
        role={profile.role}
        items={navItems}
        version={profile.version}
        updated={profile.updated}
      />
      <main>
        <Hero profile={profile} />
        <TechStack groups={skills} />
        <CareerTimeline rows={career} />
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} total={projects.length} />
        ))}
        <OtherProjects items={others} />
        <EducationList rows={education} />
        <Contact profile={profile} />
      </main>
    </div>
  )
}
