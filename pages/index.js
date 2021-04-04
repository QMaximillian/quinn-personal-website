import Head from 'next/head'
import DeveloperInfo from '../components/DeveloperInfo'
import Skills from '../components/Skills'
import GradientBackground from '../components/GradientBackground'
import SectionBreak from '../components/SectionBreak'
import Contact from '../components/Contact'
import ProjectPeak from '../components/ProjectPeak'
import ProjectList from '../components/ProjectList'
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
      <main style={{ background: 'var(--primary-gradient)' }}>
        <GradientBackground>
          <DeveloperInfo />
          <SectionBreak />
          <section
            className="w-full h-full flex flex-col justify-center items-center p-2"
            id="skills"
          >
            <Skills />
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
        </GradientBackground>
      </main>
    </>
  )
}
