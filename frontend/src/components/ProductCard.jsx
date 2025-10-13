import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'

export default function ProductCard({ product }) {
  const slug = product.name.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <div className="card overflow-hidden">
      <Link to={`/product/${slug}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${slug}`}>
          <h3 className="font-semibold text-gray-800 mb-2 hover:text-primary line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="text-primary font-bold text-lg mb-1">{product.price}</div>
        <div className="text-sm text-gray-600 mb-3">MOQ: {product.moq}</div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {product.attributes.slice(0, 2).map((attr, idx) => (
            <span key={idx} className="text-xs bg-blue-50 text-primary px-2 py-1 rounded">
              {attr}
            </span>
          ))}
        </div>

        <div className="border-t pt-3 mb-3">
          <div className="text-sm font-medium text-gray-800">{product.seller}</div>
          <div className="text-xs text-gray-600 flex items-center mt-1">
            <MapPin size={12} className="mr-1" />
            {product.location}
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded text-sm hover:bg-gray-200 flex items-center justify-center">
            <Phone size={14} className="mr-1" />
            View Mobile
          </button>
          <button className="flex-1 btn-secondary py-2 px-3 text-sm">
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  )
}
