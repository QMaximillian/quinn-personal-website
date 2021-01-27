import PropTypes from 'prop-types'
import { css, createGlobalStyle, ThemeProvider } from 'styled-components'
import { Normalize } from '../components/Normalize'

const globalStyle = css`
  @font-face {
    font-family: 'Cera Pro Regular';
    src: url('/fonts/CeraPRO-Regular.ttf');
    font-style: normal;
  }

  @font-face {
    font-family: 'Cera Pro Bold';
    src: url('/fonts/CeraPRO-Bold.ttf');
    font-style: bold;
  }

  @font-face {
    font-family: 'Cera Pro Medium';
    src: url('/fonts/CeraPRO-Medium.ttf');
    font-style: medium;
  }

  body {
    font-family: Cera Pro Regular;
  }
`

const GlobalStyle = createGlobalStyle(globalStyle)
GlobalStyle.displayName = 'GlobalStyle'

const theme = {
  // Colors
  colors: {
    'un-blue': '#5386e4',
    'middle-blue-green': '#77cbb9',
    xiketic: '#220C10',
    snow: '#fcf7f8',
  },
  // Fonts
  fonts: {},
  fontSizes: {
    sm: '.5em',
    md: '.75em',
    normal: '1em',
    lg: '1.25em',
    xl: '1.5em',
    '2xl': '2em',
  },
  breakpoints: {
    tablet: '43em',
    desktop: '62em',
    'desktop-xl': '82em',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
}
export default MyApp
