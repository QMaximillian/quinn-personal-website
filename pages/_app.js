import PropTypes from 'prop-types'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Navigation from '../components/Navigation'
import GradientBackground from '../components/GradientBackground'
import DeveloperInfoPreview from '../components/DeveloperInfoPreview'
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
      <GradientBackground>
        <motion.div
          key={router.route}
          initial={{ opacity: reducedMotionOpacity }}
          animate={{ opacity: 1 }}
          exit={{ opacity: reducedMotionOpacity }}
          className="flex flex-col md:flex-row min-h-full"
        >
          <div className="sticky z-50 top-0 md:h-screen md:w-40 lg:w-64 xl:w-96">
            <Navigation />
          </div>
          <main className="flex-grow flex md:w-3/4">
            <Component {...pageProps} />
          </main>
        </motion.div>
      </GradientBackground>
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
