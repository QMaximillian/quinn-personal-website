import ProjectDetailThumbnail from '../../components/ProjectDetailThumbnail'
import ProjectPeak from '../../components/ProjectPeak'
import { lorem } from '../../utilities/index'
import projects from '../../projects.json'
import Spacer from '../../components/Spacer'
import Contact from '../../components/Contact'

function Project() {
  return (
    <>
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
                key={project.title}
              >
                <ProjectPeak {...project} key={project.title} />
              </div>
            ))}
          </div>
        </Spacer>
        <Spacer>
          <h2 className="text-shadow-violet">Other Projects</h2>
          <ProjectDetailThumbnail title="Simon Says" />
          <ProjectDetailThumbnail title="Flashcards" />
          <ProjectDetailThumbnail title="Smart Shopping Cart" />
        </Spacer>
      </div>
      <Contact />
    </>
  )
}

export default Project
