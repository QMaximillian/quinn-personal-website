import PropTypes from 'prop-types'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Navigation from '../components/Navigation'

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
      <Navigation />
      <motion.div
        key={router.route}
        initial={{ opacity: reducedMotionOpacity }}
        animate={{ opacity: 1 }}
        exit={{ opacity: reducedMotionOpacity }}
        // className="flex flex-grow justify-center"
      >
        <Component {...pageProps} />
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
