import Head from 'next/head'
import DeveloperPreview from '../components/DeveloperPreview'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full flex flex-col justify-start items-center bg-black">
        <DeveloperPreview />
        {/* <Footer /> */}
      </main>
    </>
  )
}
