import React from 'react'
import skills from '../skills.json'

export default function Skills() {
  return (
    <>
      <div className="text-2xl md:text-4xl text-green-300 underline">
        Skills
      </div>
      {skills.map((skill) => {
        return (
          <div className="text-lg sm:text-2xl text-white" key={skill.name}>
            <ul className="text-center">{skill.name}</ul>
            <div className="w-full flex">
              {skill.frameworks?.map((framework, i) => (
                <React.Fragment key={framework}>
                  <li className=" text-yellow-500 font-medium w-full block">
                    {framework}
                  </li>

                  {i !== skill.frameworks.length - 1 && (
                    <span className="mx-2"> • </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )
      })}
    </>
  )
}
