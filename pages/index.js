import Head from 'next/head'
import Footer from '../components/Footer'
import skills from '../skills.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full flex flex-col justify-start items-center bg-black">
        <div className=" text-white font-semibold  rounded-sm flex flex-col justify-center items-start h-full w-10/12">
          <div>
            <div className="text-green-300 text-6xl">I&apos;m Quinn</div>
            <div className="text-lg">Web Developer • Runner • Baseball</div>
          </div>
          <button type="button" className="mt-2 p-1 text-base border">
            Contact Me
          </button>
          <div className="mt-10">
            {skills.map((skill) => {
              return (
                <div>
                  <div>{skill.name}</div>
                  <div>
                    {skill.frameworks?.map((framework, i) => (
                      <span className="text-yellow-500 first:pl-2">
                        {framework}
                        <span className="mx-1">
                          {i !== skill.frameworks.length - 1 && `•`}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* <Footer /> */}
      </main>
    </>
  )
}
