import Head from 'next/head'
import DeveloperPreview from '../components/DeveloperPreview'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full flex flex-col md:flex-row justify-start lg:justify-center items-center bg-black md:p-8">
        <div className="h-full flex justify-center lg:w-3/4">
          <div className="w-full sm:w-5/6 lg:w-1/2 min-h-full md:mr-2 flex items-center px-4">
            <DeveloperPreview />
          </div>
          {/* Placeholder Component */}
          {/* <div className="w-1/2 h-full border border-red-500 ml-2 hidden lg:block" /> */}
        </div>
      </main>
    </>
  )
}
