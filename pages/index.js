import Head from 'next/head'
import styled from 'styled-components'

const Heading = styled.h1`
  background: red;
  height: 2em;
  width: 3em;
`
export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello</div>
      <Heading />
    </div>
  )
}
