import { AnimateSharedLayout, motion } from 'framer-motion'
import ProjectDetailThumbnail from '../components/ProjectDetailThumbnail'
import ProjectPeak from '../components/ProjectPeak'
import { lorem } from '../utilities/index'
import projects from '../projects.json'
import Spacer from '../components/Spacer'

function Project() {
  return (
    <div className="max-w-3xl p-4">
      <Spacer>
        <header>
          <h1 className="text-shadow-orange">Projects</h1>
        </header>
      </Spacer>
      <Spacer>
        <p>{lorem}</p>
      </Spacer>
      <Spacer>
        <div className="md:flex">
          {projects.map((project) => (
            <div
              className="md:w-1/3 w-auto mx-1 even:mt-4 first:mr-2 last:ml-2"
              key={project.name}
            >
              <ProjectPeak {...project} key={project.name} />
            </div>
          ))}
        </div>
      </Spacer>
      <Spacer>
        <h2 className="text-shadow-violet">Other Projects</h2>
        <AnimateSharedLayout>
          <motion.ul layout>
            <ProjectDetailThumbnail projectName="Simon Says" />
            <ProjectDetailThumbnail projectName="Flashcards" />
            <ProjectDetailThumbnail projectName="Smart Shopping Cart" />
          </motion.ul>
        </AnimateSharedLayout>
      </Spacer>
    </div>
  )
}

export default Project
