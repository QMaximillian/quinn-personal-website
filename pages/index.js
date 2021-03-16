import Head from 'next/head'
import DeveloperPreview from '../components/DeveloperPreview'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DeveloperPreview />
    </>
  )
}
