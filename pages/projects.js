import ProjectDetailThumbnail from '../components/ProjectDetailThumbnail'
import ProjectPeak from '../components/ProjectPeak'
import { lorem } from '../utilities/index'
import projects from '../projects'
function Project() {
  return (
    <div className="max-w-3xl p-4">
      <header>
        <h1 className="text-shadow-orange">Projects</h1>
      </header>
      <p>{lorem}</p>
      <div>
        {projects.map((project) => (
          <ProjectPeak {...project} key={project.name} />
        ))}
      </div>
      <ProjectDetailThumbnail projectName="Simon Says" />
      <ProjectDetailThumbnail projectName="Flashcards" />
      <ProjectDetailThumbnail projectName="Smart Shopping Cart" />
    </div>
  )
}

export default Project
