import PropTypes from 'prop-types'
import ImageCarousel from '../../components/ImageCarousel'
import Spacer from '../../components/Spacer'
import { lorem } from '../../utilities/index'

function ProjectDetail({
  title,
  image,
  description,
  stack,
  liveWebsite,
  githubLink,
}) {
  return (
    <div className="max-w-3xl">
      <section className="h-full w-full flex flex-col p-3 overflow-y-scroll">
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
              className="text-shadow-aquamarine border-white border-2 w-full inline-block text-center py-2 rounded-md bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600"
              target="_blank"
              rel="noreferrer"
              href={liveWebsite}
            >
              View Live Site
            </a>
            <a
              className="text-shadow-aquamarine border-white border-2 w-full inline-block text-center py-2 rounded-md bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600"
              target="_blank"
              rel="noreferrer"
              href={githubLink}
            >
              View Code (GitHub)
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
            <img className="w-full" src="/images/placeholder-image.png"></img>
          </div>
        </Spacer>
        <Spacer>
          <h2 className="text-shadow-violet underline">What I Learned</h2>
          <p>{lorem}</p>
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
    },
  }
}
export default ProjectDetail
