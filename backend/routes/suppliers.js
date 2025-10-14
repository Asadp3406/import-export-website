import express from 'express'
import Supplier from '../models/Supplier.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query
    const query = status ? { status } : {}
    
    const suppliers = await Supplier.find(query)
      .populate('categories')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort('-createdAt')
    
    const count = await Supplier.countDocuments(query)
    
    res.json({
      suppliers,
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
    const supplier = new Supplier(req.body)
    await supplier.save()
    res.status(201).json({ 
      message: 'Supplier registration submitted successfully',
      supplier 
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})



export default router
