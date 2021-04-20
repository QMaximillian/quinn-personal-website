import * as React from 'react'

const currentlyFocusedOn = [
  'Algorithms',
  'Accessibility',
  'Semantic HTML',
  'Animations (JS and CSS)',
  'Deeper Understanding of CSS',
]
function CurrentlyFocusedOn() {
  return (
    <ul className="w-full text-center my-10">
      {currentlyFocusedOn.map((topic) => (
        <li className="flex justify-center items-center h-10 border border-gray-500">
          {topic}
        </li>
      ))}

      {/* <div>React Query</div>
      <div>Styled Components</div>
      <div>Auth</div>
      <div>Systems Design</div> */}
    </ul>
  )
}

export default CurrentlyFocusedOn
