import Head from 'next/head'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="contact-form"
        className="border-red-500 border  w-full overflow-y-scroll flex flex-col p-4 max-w-2xl"
      >
        <ContactForm />
      </div>
    </>
  )
}
