import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/Product.js'
import Category from './models/Category.js'
import Supplier from './models/Supplier.js'

dotenv.config()

const seedProduct = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/b2b-marketplace')
    console.log('MongoDB connected')

    // Create or get category
    let category = await Category.findOne({ name: 'Ayurveda & Herbal' })
    if (!category) {
      category = await Category.create({
        name: 'Ayurveda & Herbal',
        slug: 'ayurveda-herbal',
        description: 'Ayurvedic and herbal products'
      })
      console.log('✅ Category created:', category.name)
    }

    // Create or get supplier
    let supplier = await Supplier.findOne({ companyName: 'Herbal Exports Ltd' })
    if (!supplier) {
      supplier = await Supplier.create({
        companyName: 'Herbal Exports Ltd',
        contactPerson: 'Rajesh Kumar',
        email: 'contact@herbalexports.com',
        phone: '+91-9876543210',
        businessType: 'exporter',
        address: {
          street: '123 Export Street',
          city: 'Mumbai',
          state: 'Maharashtra',
          country: 'India',
          pincode: '400001'
        },
        categoryOption: 'Ayurveda & Herbal',
        productDescription: 'Leading exporter of organic herbal products'
      })
      console.log('✅ Supplier created:', supplier.companyName)
    }

    // Clear existing products
    await Product.deleteMany({})
    console.log('Cleared existing products')

    // Add Organic Ashwagandha Powder
    const product = await Product.create({
      name: 'Organic Ashwagandha Powder',
      slug: 'organic-ashwagandha-powder',
      description: 'Premium quality organic Ashwagandha powder sourced from certified farms. Rich in withanolides, perfect for health supplements and ayurvedic formulations. Export quality with all necessary certifications.',
      category: category._id,
      price: {
        min: 500,
        max: 800,
        currency: 'INR'
      },
      moq: {
        quantity: 100,
        unit: 'Kg'
      },
      images: ['https://images.unsplash.com/photo-1505944357-a3a6e3e8c3c3?w=400'],
      supplier: supplier._id,
      attributes: [
        { key: 'Certification', value: 'Organic Certified' },
        { key: 'Quality', value: 'Export Quality' },
        { key: 'Testing', value: 'Lab Tested' }
      ],
      isActive: true,
      isFeatured: true
    })

    console.log('✅ Product added successfully:', product.name)
    console.log('Category ID:', category._id)
    console.log('Supplier ID:', supplier._id)
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding product:', error)
    process.exit(1)
  }
}

seedProduct()
