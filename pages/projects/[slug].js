import PropTypes from 'prop-types'
import ImageCarousel from '../../components/ImageCarousel'
import Spacer from '../../components/Spacer'
import ProjectList from '../../components/ProjectList'
import ProjectPeak from '../../components/ProjectPeak'
import { lorem } from '../../utilities/index'

function ProjectDetail({
  title,
  image,
  description,
  stack,
  liveWebsite,
  githubLink,
  moreProjects,
}) {
  return (
    <div className="max-w-3xl">
      <section className="flex flex-col p-3">
        <div className="h-40 sm:h-80 relative overflow-hidden bg-currentColor">
          <ImageCarousel />
        </div>
        <Spacer>
          <h1 className="text-shadow-orange underline">{title}</h1>
        </Spacer>
        <Spacer>
          <p>{description || lorem}</p>
        </Spacer>
        {liveWebsite && (
          <Spacer className="flex space-x-2">
            <a
              className="text-shadow-aquamarine border-white border-2 w-full inline-block text-center py-2 rounded-md bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500"
              target="_blank"
              rel="noreferrer"
              href={liveWebsite}
            >
              View Live Site
            </a>
            <a
              className="text-shadow-aquamarine border-white border-2 w-full inline-block text-center py-2 rounded-md bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500"
              target="_blank"
              rel="noreferrer"
              href={githubLink}
            >
              View Code
            </a>
          </Spacer>
        )}

        <Spacer className="md:flex">
          <ul className="w-full">
            <h2 className="text-shadow-violet underline">Stack</h2>
            {stack.map((techName) => (
              <li>{techName}</li>
            ))}
          </ul>
        </Spacer>
        <Spacer className="md:flex">
          <div className="w-full">
            <img src="/images/placeholder-image.png"></img>
          </div>
          <div className="w-full">
            <h2 className="text-shadow-aquamarine underline">
              Why I Built This
            </h2>
            <p>{lorem}</p>
          </div>
        </Spacer>
        <Spacer className="md:flex">
          <div className="w-full">
            <h2 className="text-shadow-violet underline">
              Why I Used This Stack
            </h2>
            <p>{lorem}</p>
          </div>
          <div className="w-full">
            <img src="/images/placeholder-image.png"></img>
          </div>
        </Spacer>
        <Spacer>
          <h2 className="text-shadow-aquamarine underline">Problems Solved</h2>
          <p>{lorem}</p>
        </Spacer>
        <Spacer>
          <div className="w-full">
            <img className="w-full" src="/images/placeholder-image.png" />
          </div>
        </Spacer>
        <Spacer>
          <h2 className="text-shadow-violet underline">What I Learned</h2>
          <p>{lorem}</p>
        </Spacer>
        <Spacer className="mt-24 border-grey-500 border-2 p-4 rounded-lg">
          <h3 className="text-shadow-violet underline">Other Projects</h3>
          <ProjectList>
            <div className="flex-col md:flex-row flex space-y-4 md:space-x-4 md:space-y-0 pt-2">
              {moreProjects.map((project) => (
                <ProjectPeak {...project} key={project.name} />
              ))}
            </div>
          </ProjectList>
        </Spacer>
      </section>
    </div>
  )
}

ProjectDetail.displayName = 'ProjectDetail'

ProjectDetail.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  liveWebsite: PropTypes.string,
  githubLink: PropTypes.string,
}

ProjectDetail.defaultProps = {
  liveWebsite: '',
  githubLink: '',
}

export async function getStaticPaths() {
  const projectPages = await import('../../projects.json')

  const slugs = projectPages.default.map((projectPage) => projectPage.slug)

  const paths = slugs.map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const projectPages = await import('../../projects.json')
  const projectPage = projectPages.default.find((x) => x.slug === slug)
  const moreProjects = projectPages.default
    .filter((x) => x.slug !== slug)
    .slice(0, 3)

  return {
    props: {
      title: projectPage.title,
      image: projectPage.image,
      description: projectPage.description,
      href: projectPage.href,
      slug: projectPage.slug,
      stack: projectPage.stack,
      liveWebsite: projectPage.liveWebsite,
      githubLink: projectPage.githubLink,
      moreProjects,
    },
  }
}
export default ProjectDetail
