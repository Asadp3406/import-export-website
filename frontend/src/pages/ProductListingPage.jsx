import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChevronDown, Filter, X } from 'lucide-react'
import ProductCard from '../components/ProductCard'

const mockProducts = Array(12).fill(null).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1} - High Quality Export Grade`,
  price: `₹${(i + 1) * 100} - ₹${(i + 1) * 200}`,
  moq: `${(i + 1) * 50} ${i % 2 === 0 ? 'Kg' : 'Pieces'}`,
  image: `https://images.unsplash.com/photo-${1580000000000 + i * 10000000}?w=400`,
  seller: `Supplier ${i + 1} Ltd`,
  location: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'][i % 4] + ', India',
  attributes: ['Certified', 'Export Quality', 'Premium']
}))

const businessTypes = ['Manufacturer', 'Exporter', 'Wholesaler', 'Retailer', 'Supplier']
const relatedCategories = ['Herbal Products', 'Ayurvedic Medicine', 'Health Supplements', 'Natural Extracts']

export default function ProductListingPage() {
  const { categorySlug } = useParams()
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([])

  const toggleBusinessType = (type) => {
    setSelectedBusinessTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600">
            Home / Categories / <span className="text-gray-800 font-medium">{categorySlug}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 capitalize">
            {categorySlug?.replace('-', ' ')} Products
          </h1>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border rounded-lg"
          >
            <Filter size={18} />
            Filters
          </button>
        </div>

        <div className="flex gap-6">
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-20">
              <div className="flex justify-between items-center mb-4 lg:hidden">
                <h3 className="font-semibold">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Related Categories</h3>
                <ul className="space-y-2">
                  {relatedCategories.map(cat => (
                    <li key={cat}>
                      <a href="#" className="text-sm text-gray-600 hover:text-primary flex items-center">
                        <ChevronDown size={14} className="mr-1" />
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 border-t pt-4">
                <h3 className="font-semibold text-gray-800 mb-3">Business Type</h3>
                <div className="space-y-2">
                  {businessTypes.map(type => (
                    <label key={type} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBusinessTypes.includes(type)}
                        onChange={() => toggleBusinessType(type)}
                        className="mr-2 w-4 h-4 text-primary"
                      />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6 border-t pt-4">
                <h3 className="font-semibold text-gray-800 mb-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>

              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200">
                Clear All Filters
              </button>
            </div>
          </aside>

          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing <span className="font-semibold">1-12</span> of <span className="font-semibold">1,250</span> products
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>Sort by: Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map(page => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg ${
                    page === 1 ? 'bg-primary text-white' : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
