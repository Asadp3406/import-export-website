import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  return (
    <Link 
      to={`/category/${category.slug}`}
      className="card p-6 text-center hover:scale-105 transition-transform"
    >
      <div className="text-5xl mb-3">{category.icon}</div>
      <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
      <p className="text-sm text-gray-600">{category.count} Products</p>
    </Link>
  )
}
