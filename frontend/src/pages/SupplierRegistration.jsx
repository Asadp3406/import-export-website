import { useState } from 'react'
import api from '../api'

const businessTypes = ['manufacturer', 'exporter', 'wholesaler', 'retailer']
const categoryOptions = [
  'Ayurveda & Herbal',
  'Electronics',
  'Agriculture',
  'Textiles',
  'Machinery',
  'Chemicals',
  'Food Products'
];

export default function SupplierRegistration() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: 'India',
      pincode: ''
    },
    categoryOption: '',
    productDescription: ''
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name.startsWith('address.')) {
      const key = name.split('.')[1]
      setFormData(prev => ({ ...prev, address: { ...prev.address, [key]: value } }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  // Submit form as JSON
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/suppliers', formData, {
        headers: { 'Content-Type': 'application/json' }
      })
      alert('✅ Registration submitted! Our team will contact you within 24 hours.')
      // Optional: Reset form
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        businessType: '',
        address: {
          street: '',
          city: '',
          state: '',
          country: 'India',
          pincode: ''
        },
        categoryOption: '',
        productDescription: ''
      })
    } catch (err) {
      console.error('❌ Registration failed:', err.response?.data || err.message)
      alert('❌ Registration failed. Please try again.')
    }
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Become a Supplier</h1>
          <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input type="text" name="companyName" required className="input-field"
                  value={formData.companyName} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                <input type="text" name="contactPerson" required className="input-field"
                  value={formData.contactPerson} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" name="email" required className="input-field"
                  value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input type="tel" name="phone" required className="input-field"
                  value={formData.phone} onChange={handleChange} />
              </div>
                       <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Business Type *
  </label>
  <select
    name="businessType"
    required
    className="input-field"
    value={formData.businessType}
    onChange={handleChange}
  >
    <option value="">Select Type</option>
    {businessTypes.map((type) => (
      <option key={type} value={type}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </option>
    ))}
  </select>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Product Category *
  </label>
  <select
    name="productCategory"
    required
    className="input-field"
    value={formData.productCategory}
    onChange={handleChange}
  >
    <option value="">Select Category</option>
    {categoryOptions.map((type) => (
      <option key={type} value={type}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </option>
    ))}
  </select>
</div>

              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                <input type="text" name="address.street" className="input-field"
                  value={formData.address.street} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                <input type="text" name="address.city" required className="input-field"
                  value={formData.address.city} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                <input type="text" name="address.state" required className="input-field"
                  value={formData.address.state} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <input type="text" name="address.country" className="input-field"
                  value={formData.address.country} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                <input type="text" name="address.pincode" className="input-field"
                  value={formData.address.pincode} onChange={handleChange} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Description *</label>
              <textarea name="productDescription" required rows="4" className="input-field"
                placeholder="Describe your products and services..."
                value={formData.productDescription} onChange={handleChange} />
            </div>

            
            <div className="flex items-start">
              <input type="checkbox" required className="mt-1 mr-2" />
              <label className="text-sm text-gray-600">
                I agree to the Terms & Conditions and Privacy Policy
              </label>
            </div>

            <button type="submit" className="btn-primary px-6 py-2 text-base block mx-auto">
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
