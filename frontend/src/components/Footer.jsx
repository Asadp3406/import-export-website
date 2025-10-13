import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About TradeHub</h3>
            <p className="text-sm mb-4">
              Leading B2B marketplace connecting importers and exporters worldwide. 
              Trusted by thousands of businesses.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="cursor-pointer hover:text-white" />
              <Twitter size={20} className="cursor-pointer hover:text-white" />
              <Linkedin size={20} className="cursor-pointer hover:text-white" />
              <Instagram size={20} className="cursor-pointer hover:text-white" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/categories" className="hover:text-white">All Categories</Link></li>
              <li><Link to="/suppliers" className="hover:text-white">Find Suppliers</Link></li>
              <li><Link to="/become-supplier" className="hover:text-white">Become a Supplier</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Business Street, Trade City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@tradehub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 TradeHub B2B Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
