// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

export default (req, res) => {
  const body = JSON.parse(req.body)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.TRANSPORT_EMAIL,
      pass: process.env.TRANSPORT_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  })

  const mailOptions = {
    from: process.env.TRANSPORT_EMAIL,
    to: process.env.TRANSPORT_EMAIL,
    subject: body.subject,
    text: `${body.email} - ${body.message}`,
    replyTo: body.email,
  }

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      // Handle telling user you weren't able to send email
      console.log({ error })
    } else {
      console.log({ response })
      res.send({ message: 'Email sent' })
    }
  })

  res.statusCode = 200
  res.end()
}
