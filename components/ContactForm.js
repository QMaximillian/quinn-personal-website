import * as React from 'react'

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
    <form id="contact-form" className="border-grey-500 border">
      <div className="mb-4">
        <label htmlFor="email">
          Email
          <input
            onChange={onChange}
            value={state.email}
            type="text"
            id="email"
            name="email"
          />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="subject">
          Subject
          <input
            onChange={onChange}
            value={state.subject}
            type="text"
            id="subject"
            name="subject"
          />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="message">
          Message
          <textarea
            onChange={onChange}
            value={state.message}
            type="text"
            id="message"
            name="message"
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default ContactForm
