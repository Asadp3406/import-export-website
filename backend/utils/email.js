import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export async function sendEnquiryEmail(enquiry) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: enquiry.email,
    subject: 'Thank you for your enquiry - TradeHub B2B',
    html: `
      <h2>Thank you for your enquiry!</h2>
      <p>Dear ${enquiry.name},</p>
      <p>We have received your enquiry and our team will contact you shortly.</p>
      <p><strong>Enquiry Details:</strong></p>
      <ul>
        <li>Product: ${enquiry.product}</li>
        <li>Type: ${enquiry.enquiryType}</li>
        <li>Message: ${enquiry.message}</li>
      </ul>
      <p>Best regards,<br>TradeHub Team</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
  } catch (error) {
    console.error('Email error:', error)
  }
}
