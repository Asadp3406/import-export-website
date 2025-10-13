import { Link } from 'react-router-dom'
import { ArrowRight, Package, Users, Globe, TrendingUp } from 'lucide-react'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'

const categories = [
  { name: 'Ayurveda & Herbal', slug: 'ayurveda', icon: '🌿', count: 1250 },
  { name: 'Electronics', slug: 'electronics', icon: '💻', count: 3400 },
  { name: 'Agriculture', slug: 'agriculture', icon: '🌾', count: 2100 },
  { name: 'Home Accessories', slug: 'home-accessories', icon: '🏠', count: 1800 },
  { name: 'Textiles & Garments', slug: 'textiles', icon: '👔', count: 2900 },
  { name: 'Machinery', slug: 'machinery', icon: '⚙️', count: 1600 },
  { name: 'Chemicals', slug: 'chemicals', icon: '🧪', count: 980 },
  { name: 'Food Products', slug: 'food', icon: '🍎', count: 2200 }
]

const featuredProducts = [
  {
    id: 1,
    name: 'Organic Ashwagandha Powder',
    price: '₹250 - ₹450',
    moq: '100 Kg',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400',
    seller: 'Herbal Exports Ltd',
    location: 'Mumbai, India',
    attributes: ['Organic', 'Certified', 'Premium Quality']
  },
  {
    id: 2,
    name: 'LED Smart Bulbs',
    price: '₹150 - ₹300',
    moq: '500 Pieces',
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400',
    seller: 'TechLight Industries',
    location: 'Delhi, India',
    attributes: ['Energy Efficient', 'WiFi Enabled', '2 Year Warranty']
  },
  {
    id: 3,
    name: 'Basmati Rice Premium',
    price: '₹80 - ₹120',
    moq: '1000 Kg',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    seller: 'AgriTrade Co.',
    location: 'Punjab, India',
    attributes: ['Export Quality', 'Long Grain', 'Aged']
  },
  {
    id: 4,
    name: 'Cotton Bed Sheets',
    price: '₹400 - ₹800',
    moq: '200 Pieces',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400',
    seller: 'Textile Exports',
    location: 'Surat, India',
    attributes: ['100% Cotton', 'Thread Count 300', 'Colorfast']
  }
]

const stats = [
  { icon: Package, label: 'Products Listed', value: '50,000+' },
  { icon: Users, label: 'Active Suppliers', value: '12,000+' },
  { icon: Globe, label: 'Countries Served', value: '150+' },
  { icon: TrendingUp, label: 'Daily Enquiries', value: '5,000+' }
]

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Connect with Global Suppliers & Buyers
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            India's Leading B2B Marketplace for Import & Export
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/category/all" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Products
            </Link>
            <Link to="/become-supplier" className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Become a Supplier
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Browse by Category</h2>
            <Link to="/categories" className="text-primary hover:underline flex items-center">
              View All <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of suppliers reaching buyers worldwide
          </p>
          <Link to="/become-supplier" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Register as Supplier
          </Link>
        </div>
      </section>
    </div>
  )
}
