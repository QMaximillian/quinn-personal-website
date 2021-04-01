import * as React from 'react'
import PropTypes from 'prop-types'

function SectionBreak({ children }) {
  return (
    <div className="p-2 my-10 mx-20 h-20 border-white border-t-2 border-b-2">
      {children}
    </div>
  )
}

SectionBreak.propTypes = {
  children: PropTypes.node,
}

SectionBreak.defaultProps = {
  children: <div />,
}
SectionBreak.displayName = 'SectionBreak'

export default SectionBreak
