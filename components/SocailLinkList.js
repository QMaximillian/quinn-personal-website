import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubSquare,
  faTwitterSquare,
  faDev,
} from '@fortawesome/free-brands-svg-icons'

function SocailLinkList() {
  return (
    <div className="flex justify-center items-center my-2">
      <a
        href="https://github.com/QMaximillian"
        target="_blank"
        rel="noreferrer"
        className="w-8"
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>

      <a
        href="https://twitter.com/quinn_max_codes"
        target="_blank"
        rel="noreferrer"
        className="w-8 mx-2"
      >
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
      <a
        href="https://dev.to/qmaximillian"
        target="_blank"
        rel="noreferrer"
        className="w-8"
      >
        <FontAwesomeIcon icon={faDev} />
      </a>
    </div>
  )
}

SocailLinkList.displayName = 'SocailLinkList'
export default SocailLinkList
