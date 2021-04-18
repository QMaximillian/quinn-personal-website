/* eslint-disable react/require-default-props */
import SkillsPreview from '../components/SkillsPreview'
import CurrentlyFocusedOn from '../components/CurrentlyFocusedOn'
import Contact from '../components/Contact'
import { lorem } from '../utilities/index'

function Skills() {
  return (
    <>
      <div className="max-w-3xl h-full overflow-auto p-4 text-center">
        <header>
          <h1>Web Development</h1>
          <div>{lorem}</div>
        </header>
        <SkillsPreview />
        <h2 className=" mt-4 underline">Currently Focused On</h2>
        <div className="mt-5">{lorem}</div>
        <CurrentlyFocusedOn />
      </div>
      <Contact />
    </>
  )
}

Skills.propTypes = {}

Skills.displayName = 'Skills'

export default Skills
