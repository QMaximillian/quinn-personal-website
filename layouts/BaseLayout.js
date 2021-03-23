import PropTypes from 'prop-types'
import Navigation from '../components/Navigation'

function BaseLayout({ children }) {
  return (
    <main className="h-full min-h-full w-full bg-black flex flex-col relative">
      <section className="flex flex-grow px-6 pt-6">{children}</section>
      <div className="bg-black">
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
