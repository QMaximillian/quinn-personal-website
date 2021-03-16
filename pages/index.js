import Head from 'next/head'
import DeveloperPreview from '../components/DeveloperPreview'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-6 pb-6 h-auto flex flex-grow flex-col justify-center ">
        <DeveloperPreview />
      </main>
    </>
  )
}
