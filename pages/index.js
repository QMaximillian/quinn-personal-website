import Head from 'next/head'
import DeveloperInfoPreview from '../components/DeveloperInfoPreview'
import SkillsPreview from '../components/SkillsPreview'
import SectionBreak from '../components/SectionBreak'
import Contact from '../components/Contact'
import ProjectPeak from '../components/ProjectPeak'
import ProjectList from '../components/ProjectList'
import projects from '../projects.json'

export default function Home() {
  return (
    <div className="md:max-w-3xl">
      <Head>
        <title>Home</title>w
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/apercu-regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <DeveloperInfoPreview />
      <SectionBreak />
      <section
        className="w-full flex flex-col justify-center items-center p-2"
        id="skills"
      >
        <SkillsPreview />
      </section>
      <SectionBreak />
      <section id="projects">
        <ProjectList>
          {projects.map((project) => (
            <ProjectPeak {...project} key={project.name} />
          ))}
        </ProjectList>
      </section>

      <SectionBreak />
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}
