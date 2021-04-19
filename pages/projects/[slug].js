function ProjectDetail({ name, image, description }) {
  return <div />
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
