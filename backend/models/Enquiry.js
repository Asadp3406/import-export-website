import mongoose from 'mongoose'

const enquirySchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  pincode: String,
  enquiryType: { 
    type: String, 
    enum: ['product', 'bulk', 'sample'],
    default: 'product'
  },
  message: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['new', 'responded', 'closed'],
    default: 'new'
  }
}, { timestamps: true })

export default mongoose.model('Enquiry', enquirySchema)
