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
  // Populate product if it's just an ID
  let productName = 'Product'
  if (enquiry.product) {
    if (typeof enquiry.product === 'object' && enquiry.product.name) {
      productName = enquiry.product.name
    } else {
      // If it's just an ID, we'll use a generic name
      productName = 'Your selected product'
    }
  }

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
        <li>Product: ${productName}</li>
        <li>Type: ${enquiry.enquiryType}</li>
        <li>Message: ${enquiry.message}</li>
      </ul>
      <p>Best regards,<br>TradeHub Team</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully to:', enquiry.email)
  } catch (error) {
    console.error('❌ Email error:', error.message)
    // Don't throw error - enquiry should still be saved even if email fails
  }
}
