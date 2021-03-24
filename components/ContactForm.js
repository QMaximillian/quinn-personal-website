import * as React from 'react'
import ContactFormInput from './ContactFormInput'
// Data To Get From Form

/*
  from: USERS_EMAIL_ADDRESS
  to: "quinnlashinsky@gmail.com"
  subject USERS_SUBJECT
  text: USERS_TEXT
*/
function contactFormReducer(state, action) {
  return {
    ...state,
    [action.id]: action.data,
  }
}

function ContactForm(props) {
  const [state, dispatch] = React.useReducer(contactFormReducer, {
    email: 'work@gmail.com',
    subject: 'please work',
    message: 'please please work',
  })

  function onChange(event) {
    dispatch({ id: event.target.id, data: event.target.value })
  }
  function handleSubmit(event) {
    event.preventDefault()
    fetch(`/api/contact`, {
      method: 'POST',
      body: JSON.stringify(state),
      'content-type': 'application/json',
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <>
      <form
        id="contact-form"
        className="h-full flex flex-col justify-center items-center"
      >
        <h3 className="text-3xl text-green-300 underline">Reach Out</h3>
        <p className="text-white">
          I&apos;m always happy to help, feel free to reach out
        </p>
        <label htmlFor="email" className="text-green-300 text-2xl self-start">
          Email
        </label>
        <ContactFormInput
          className="mb-4 rounded-sm shadow-sm h-12 ring-4 focus:ring-indigo-500 outline-none px-2"
          onChange={onChange}
          value={state.email}
          type="text"
          id="email"
          name="email"
          required
        />

        <label htmlFor="subject" className="text-green-300 text-2xl self-start">
          Subject
        </label>
        <ContactFormInput
          className="mb-4 rounded-sm shadow-sm h-12 ring-4 focus:ring-indigo-500 outline-none px-2"
          onChange={onChange}
          value={state.subject}
          type="text"
          id="subject"
          name="subject"
          required
          rows={15}
          cols={15}
        />

        <label htmlFor="message" className="text-green-300 text-2xl self-start">
          Message
        </label>
        <textarea
          className="resize-none  h-40 w-full mb-4 rounded-sm shadow-sm ring-4 focus:ring-indigo-500 outline-none p-2"
          onChange={onChange}
          value={state.message}
          type="text"
          id="message"
          name="message"
          required
        />

        <button
          className="border-grey-500 border"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default ContactForm
