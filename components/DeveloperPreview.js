import * as React from 'react'
import skills from '../skills.json'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
function DeveloperPreview() {
  return (
    <div className="w-full tracking-wide text-white font-bold flex flex-col justify-center items-center h-full">
      <div className="w-full">
        <div className="text-yellow-500 text-6xl md:text-7xl">Hello! </div>
        <div className="text-green-300 text-6xl md:text-7xl">
          I&apos;m Quinn
        </div>

        <div className="text-xl md:text-2xl font-semibold">
          Junior Web Developer
        </div>
        <div className="mt-4 sm:text-2xl font-light ">{lorem}</div>
      </div>
      {/* <div className="mt-5 w-full">
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
      </div> */}
    </div>
  )
}

DeveloperPreview.displayName = 'DeveloperPreview'

export default DeveloperPreview
