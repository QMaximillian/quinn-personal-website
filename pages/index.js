import Head from 'next/head'
import DeveloperPreview from '../components/DeveloperPreview'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/apercu-regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main className="overflow-scroll-y h-full">
        <DeveloperPreview />
      </main>
    </>
  )
}
