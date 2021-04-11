import PropTypes from 'prop-types'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Navigation from '../components/Navigation'
import GradientBackground from '../components/GradientBackground'
import DeveloperInfo from '../components/DeveloperInfo'
import '../styles/globals.css'
// @font-face {
//   font-family: 'Cera Pro Regular';
//   src: url('/fonts/CeraPRO-Regular.ttf');
//   font-style: normal;
// }

// @font-face {
//   font-family: 'Cera Pro Bold';
//   src: url('/fonts/CeraPRO-Bold.ttf');
//   font-style: bold;
// }

// @font-face {
//   font-family: 'Cera Pro Medium';
//   src: url('/fonts/CeraPRO-Medium.ttf');
//   font-style: medium;
// }

// body {
//   font-family: Cera Pro Regular;
//   height: 100vh;
// }

function MyApp({ Component, pageProps, router }) {
  const shouldReduceMotion = useReducedMotion()
  const reducedMotionOpacity = shouldReduceMotion ? 1 : 0
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial={{ opacity: reducedMotionOpacity }}
        animate={{ opacity: 1 }}
        exit={{ opacity: reducedMotionOpacity }}
        className="flex flex-col md:flex-row min-h-full"
      >
        <div className="sticky top-0 md:h-screen md:w-40 lg:w-64 xl:w-96">
          <div className="hidden">
            <DeveloperInfo />
          </div>
          {/* Placeholder Element */}
          <div className="border-2 border-black bg-purple-400 h-1/2 hidden md:block" />
          <Navigation />
        </div>
        <main className="flex-grow flex md:w-3/4 primary-gradient">
          <GradientBackground>
            <Component {...pageProps} />
          </GradientBackground>
        </main>
      </motion.div>
    </AnimatePresence>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({
    route: PropTypes.string.isRequired,
  }).isRequired,
}
export default MyApp
