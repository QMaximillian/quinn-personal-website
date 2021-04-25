import Head from 'next/head'
import DeveloperInfoPreview from '../components/DeveloperInfoPreview'
import SkillsPreview from '../components/SkillsPreview'
import SectionBreak from '../components/SectionBreak'
import ProjectPeak from '../components/ProjectPeak'
import ProjectList from '../components/ProjectList'
import ContactToastWrapper from '../components/ContactToastWrapper'
import projects from '../projects.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/apercu-regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div>
        <ContactToastWrapper message="Copied!">
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
                <ProjectPeak {...project} key={project.title} />
              ))}
            </ProjectList>
          </section>

          <SectionBreak />
        </ContactToastWrapper>
      </div>
    </>
  )
}
