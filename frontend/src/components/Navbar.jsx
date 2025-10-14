import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Menu, X, Globe, User } from 'lucide-react'

const categories = [
  'All Categories',
  'Ayurveda & Herbal',
  'Electronics',
  'Agriculture',
  'Home Accessories',
  'Textiles',
  'Machinery',
  'Chemicals',
  'Food Products'
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/category/search?q=${searchQuery}&cat=${selectedCategory}`)
    }
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B2B</span>
            </div>
            <span className="font-bold text-xl text-gray-800 hidden sm:block">TradeHub</span>
          </Link>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg focus:outline-none bg-gray-50"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search products / services"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none"
            />
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded-r-lg hover:bg-blue-700">
              <Search size={20} />
            </button>
          </form>

          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={() => navigate("/admin")} className="flex items-center space-x-1 text-gray-700 hover:text-primary">
              <Globe size={18} />
              <span>EN</span>
            </button>
            <button onClick={() => navigate("/login")} className="flex items-center space-x-1 text-gray-700 hover:text-primary">
              <User size={18} />
              <span>Login</span>
            </button>
            <Link to="/become-supplier" className="btn-secondary">
              Become a Supplier
            </Link>
          </div>

          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <form onSubmit={handleSearch} className="mb-4">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg"
                />
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-lg">
                  <Search size={20} />
                </button>
              </div>
            </form>
            <div className="space-y-2">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <Link to="/become-supplier" className="block w-full text-center btn-secondary">
                Become a Supplier
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
