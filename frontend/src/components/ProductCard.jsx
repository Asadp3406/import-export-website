import { Link } from 'react-router-dom'
import { MapPin, MessageSquare } from 'lucide-react'

export default function ProductCard({ product }) {
  const slug = product.slug || product.name.toLowerCase().replace(/\s+/g, '-')
  const image = product.images?.[0] || product.image || 'https://via.placeholder.com/400'
  const price = product.price 
    ? `₹${product.price.min} - ₹${product.price.max}` 
    : product.priceRange || 'Contact for price'
  const moq = product.moq 
    ? `${product.moq.quantity} ${product.moq.unit}` 
    : product.moqText || 'Contact for MOQ'
  const supplierName = product.supplier?.companyName || product.seller || 'Supplier'
  const location = product.supplier?.address?.city 
    ? `${product.supplier.address.city}, ${product.supplier.address.country || 'India'}` 
    : product.location || 'India'
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${slug}`}>
        <img 
          src={image} 
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${slug}`}>
          <h3 className="font-semibold text-gray-800 mb-2 hover:text-primary line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>
        </Link>
        <div className="text-primary font-bold text-lg mb-1">{price}</div>
        <div className="text-sm text-gray-600 mb-3">MOQ: {moq}</div>
        
        {product.attributes && product.attributes.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.attributes.slice(0, 2).map((attr, idx) => (
              <span key={idx} className="text-xs bg-blue-50 text-primary px-2 py-1 rounded">
                {attr.value || attr}
              </span>
            ))}
          </div>
        )}

        <div className="border-t pt-3 mb-3">
          <div className="text-sm font-medium text-gray-800">{supplierName}</div>
          <div className="text-xs text-gray-600 flex items-center mt-1">
            <MapPin size={12} className="mr-1" />
            {location}
          </div>
        </div>

        <Link 
          to={`/product/${slug}`}
          className="w-full btn-primary py-2 px-4 text-sm flex items-center justify-center"
        >
          <MessageSquare size={16} className="mr-2" />
          Send Enquiry
        </Link>
      </div>
    </div>
  )
}
