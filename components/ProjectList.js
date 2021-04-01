import * as React from 'react'
import PropTypes from 'prop-types'

function ProjectList({ children }) {
  return <div className="border-white">{children}</div>
}

ProjectList.propTypes = {
  children: PropTypes.node,
}

ProjectList.defaultProps = {
  children: <div />,
}
ProjectList.displayName = 'ProjectList'

export default ProjectList
