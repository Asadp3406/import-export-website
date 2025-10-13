import express from 'express'
import Enquiry from '../models/Enquiry.js'
import Product from '../models/Product.js'
import { sendEnquiryEmail } from '../utils/email.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query
    const query = status ? { status } : {}
    
    const enquiries = await Enquiry.find(query)
      .populate('product supplier')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort('-createdAt')
    
    const count = await Enquiry.countDocuments(query)
    
    res.json({
      enquiries,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body)
    await enquiry.save()
    
    await Product.findByIdAndUpdate(req.body.product, { $inc: { enquiries: 1 } })
    
    await sendEnquiryEmail(enquiry)
    
    res.status(201).json({ 
      message: 'Enquiry submitted successfully',
      enquiry 
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.patch('/:id/status', async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    )
    res.json(enquiry)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
