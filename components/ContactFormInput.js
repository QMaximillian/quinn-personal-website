import * as React from 'react'

function ContactFormInput({
  id,
  name,
  type = 'text',
  value,
  onChange,
  className,
}) {
  return (
    <input
      className={`focus:border-green-300 active:border-green-300 w-full ${className}`}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}

export default ContactFormInput
