import Head from 'next/head'
import DeveloperPreview from '../components/DeveloperPreview'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full flex flex-col md:flex-row justify-start items-center bg-black md:p-8">
        <div className="h-full justify-center">
          <div className="w-full sm:w-10/12 md:w-1/2 min-h-full md:mr-2 flex items-center px-4">
            <DeveloperPreview />
          </div>
          {/* Placeholder Component 
        <div className="w-1/2 h-full border border-red-500 ml-2 hidden md:block" />
        */}
        </div>
      </main>
    </>
  )
}
