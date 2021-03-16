import PropTypes from 'prop-types'
import '../styles/globals.css'
import Navigation from '../components/Navigation'
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

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full w-full bg-black flex flex-col">
      <Component {...pageProps} />
      <Navigation />
    </div>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
}
export default MyApp
