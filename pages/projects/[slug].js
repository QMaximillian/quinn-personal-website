import ImageCarousel from '../../components/ImageCarousel'
function ProjectDetail({ name, image, description }) {
  return (
    <>
      <section className="h-full w-full flex flex-col">
        <div className="h-1/2 w-full relative overflow-hidden bg-currentColor">
          <ImageCarousel />
        </div>
        <h1 className="text-shadow-violet">{name}</h1>
      </section>
    </>
  )
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
      name: projectPage.name,
      image: projectPage.image,
      description: projectPage.description,
      href: projectPage.href,
      slug: projectPage.slug,
    },
  }
}
export default ProjectDetail
