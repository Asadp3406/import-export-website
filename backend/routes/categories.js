import express from 'express'
import Category from '../models/Category.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true })
      .populate('parent')
      .sort('name')
    res.json(categories)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const category = new Category(req.body)
    await category.save()
    res.status(201).json(category)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
