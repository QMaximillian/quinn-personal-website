import * as React from 'react'
import skills from '../skills.json'

function DeveloperPreview() {
  return (
    <div className="w-full tracking-wide text-white font-bold flex flex-col justify-center items-start h-full">
      <div className="w-full">
        <div className="text-green-300 text-6xl md:text-7xl">
          I&apos;m Quinn
        </div>
        <div className="text-xl md:text-2xl font-semibold">
          Web Developer • Runner • Baseball
        </div>
        <button
          type="button"
          className="w-full sm:w-60 rounded-sm py-2 mt-6 sm:min-w-min sm:max-w-xs text-md md:text-lg text-center border-2 hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300"
        >
          Contact Me
        </button>
      </div>
      <div className="mt-5 w-full">
        <div className="text-2xl md:text-4xl text-green-300 underline">
          Skills
        </div>
        {skills.map((skill) => {
          return (
            <div className="text-lg sm:text-2xl" key={skill.name}>
              <div className="">{skill.name}</div>
              <div className="">
                {skill.frameworks?.map((framework, i) => (
                  <span
                    key={framework}
                    className=" text-yellow-500 first:pl-2 font-medium"
                  >
                    {framework}
                    <span className="mx-2">
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
  )
}

DeveloperPreview.displayName = 'DeveloperPreview'

export default DeveloperPreview
