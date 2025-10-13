import mongoose from 'mongoose'

const supplierSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  businessType: { 
    type: String, 
    enum: ['manufacturer', 'exporter', 'wholesaler', 'retailer'],
    required: true 
  },
  address: {
    street: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, default: 'India' },
    pincode: String
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  productDescription: { type: String },
  certifications: [String],
  images: [String],
  yearsInBusiness: { type: Number },
  isVerified: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true })

export default mongoose.model('Supplier', supplierSchema)
