import * as React from 'react'
import skills from '../skills.json'

function DeveloperPreview() {
  return (
    <div className="tracking-wide text-white font-bold flex flex-col justify-center items-start w-10/12 min-h-full">
      <div>
        <div className="text-green-300 text-7xl">I&apos;m Quinn</div>
        <div className="text-2xl font-semibold">
          Web Developer • Runner • Baseball
        </div>
        <button
          type="button"
          className="rounded-sm p-2 mt-6 w-1/2 text-lg border-2 hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300"
        >
          Contact Me
        </button>
      </div>
      <div className="mt-5">
        {skills.map((skill) => {
          return (
            <div className="text-2xl" key={skill.name}>
              <div className="pt-1">{skill.name}</div>
              <div className="pt-1">
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
