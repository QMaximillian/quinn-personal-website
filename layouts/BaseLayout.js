import PropTypes from 'prop-types'
import Navigation from '../components/Navigation'

function BaseLayout({ children }) {
  return (
    <main>
      {children}
      <div className="absolute right-0 left-0 bottom-0 z-10 bg-black">
        <Navigation />
      </div>
    </main>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

BaseLayout.displayName = 'BaseLayout'
export default BaseLayout
