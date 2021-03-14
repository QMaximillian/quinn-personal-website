import Head from 'next/head'
import DeveloperPreview from '../components/DeveloperPreview'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full flex flex-col md:flex-row justify-start items-center bg-black p-8">
        <div className=" w-10/12 md:w-1/2 min-h-full md:mr-2 flex items-center">
          <DeveloperPreview />
        </div>
        {/* Placeholder Component 
        <div className="w-1/2 h-full border border-red-500 ml-2 hidden md:block" />
        */}
      </main>
    </>
  )
}
