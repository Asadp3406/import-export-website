import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MapPin, Phone, Mail, CheckCircle, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'

const productImages = [
  'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600',
  'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&sat=-50',
  'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&brightness=10'
]

const relatedProducts = Array(4).fill(null).map((_, i) => ({
  id: i + 1,
  name: `Related Product ${i + 1}`,
  price: `₹${(i + 1) * 150} - ₹${(i + 1) * 300}`,
  moq: `${(i + 1) * 100} Kg`,
  image: `https://images.unsplash.com/photo-${1580000000000 + i * 10000000}?w=400`,
  seller: `Supplier ${i + 1}`,
  location: 'Mumbai, India',
  attributes: ['Certified', 'Premium']
}))

export default function ProductDetailPage() {
  const { productSlug } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [showEnquiryModal, setShowEnquiryModal] = useState(false)
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600">
            Home / Category / <span className="text-gray-800 font-medium">{productSlug}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={productImages[selectedImage]}
                    alt="Product"
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="flex gap-2">
                    {productImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                          selectedImage === idx ? 'border-primary' : 'border-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Organic Ashwagandha Powder - Premium Quality
                  </h1>
                  <div className="text-3xl font-bold text-primary mb-2">₹250 - ₹450</div>
                  <div className="text-gray-600 mb-4">Per Kilogram</div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">MOQ:</span>
                      <span className="font-semibold">100 Kg</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold">Organic Powder</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Certification:</span>
                      <span className="font-semibold">ISO, FSSAI</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Packaging:</span>
                      <span className="font-semibold">25 Kg Bags</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowEnquiryModal(true)}
                    className="w-full btn-secondary py-3 text-lg mb-3"
                  >
                    Send Inquiry
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 flex items-center justify-center">
                    <Phone size={18} className="mr-2" />
                    View Contact Details
                  </button>
                </div>
              </div>

              <div className="mt-8 border-t pt-6">
                <div className="flex gap-4 mb-6 border-b">
                  {['description', 'specifications'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 px-4 font-medium capitalize ${
                        activeTab === tab
                          ? 'border-b-2 border-primary text-primary'
                          : 'text-gray-600'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {activeTab === 'description' && (
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      Premium quality organic Ashwagandha powder sourced from certified farms. 
                      Known for its adaptogenic properties and health benefits. Perfect for export 
                      and bulk orders. Our product undergoes strict quality control and is tested 
                      for purity and potency.
                    </p>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div><strong>Origin:</strong> India</div>
                    <div><strong>Shelf Life:</strong> 24 Months</div>
                    <div><strong>Moisture:</strong> Max 10%</div>
                    <div><strong>Purity:</strong> 99%</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-500 mr-2" size={24} />
                <span className="font-semibold text-lg">Verified Supplier</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Herbal Exports Ltd</h3>
              <div className="text-sm text-gray-600 space-y-2 mb-4">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  Mumbai, Maharashtra, India
                </div>
                <div>Business Type: Manufacturer, Exporter</div>
                <div>Years in Business: 15+ Years</div>
              </div>
              <button
                onClick={() => setShowEnquiryModal(true)}
                className="w-full btn-primary py-3 mb-2"
              >
                Contact Supplier
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {showEnquiryModal && (
        <EnquiryModal onClose={() => setShowEnquiryModal(false)} />
      )}
    </div>
  )
}

function EnquiryModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', pincode: '', enquiryType: 'product', message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Enquiry submitted! Our team will contact you shortly.')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Send Inquiry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="input-field"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="input-field"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input
            type="tel"
            placeholder="Phone"
            required
            className="input-field"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <input
            type="text"
            placeholder="Pin Code"
            className="input-field"
            value={formData.pincode}
            onChange={(e) => setFormData({...formData, pincode: e.target.value})}
          />
          <select
            className="input-field"
            value={formData.enquiryType}
            onChange={(e) => setFormData({...formData, enquiryType: e.target.value})}
          >
            <option value="product">Product Inquiry</option>
            <option value="bulk">Bulk Order</option>
            <option value="sample">Sample Request</option>
          </select>
          <textarea
            placeholder="Your Message"
            rows="4"
            required
            className="input-field"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          <button type="submit" className="w-full btn-primary py-3">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  )
}
