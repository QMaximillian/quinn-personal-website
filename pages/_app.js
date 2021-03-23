import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import BaseLayout from '../layouts/BaseLayout'
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
  return (
    <BaseLayout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-full flex justify-center"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </BaseLayout>
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
