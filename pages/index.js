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
        <div className="h-full flex justify-center md:w-11/12">
          <div className="w-full sm:w-5/6 md:w-1/2 2xl:w-1/3 min-h-full md:mr-2 flex items-center px-4">
            <DeveloperPreview />
          </div>
          {/* Placeholder Component */}
          <div className="w-1/2 2xl:w-1/3 h-full border border-red-500 mx-2 hidden md:block" />
          {/* Placeholder Component */}
          <div className="w-1/2 2xl:w-1/3 h-full border border-red-500 ml-2 hidden 2xl:block" />
        </div>
      </main>
    </>
  )
}
