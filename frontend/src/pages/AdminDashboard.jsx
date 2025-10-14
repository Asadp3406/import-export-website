import { useState, useEffect } from 'react'
import { Package, Users, MessageSquare, TrendingUp, Eye, Plus } from 'lucide-react'
import api from '../api'

const stats = [
  { icon: Package, label: 'Total Products', value: '1,250', change: '+12%' },
  { icon: Users, label: 'Active Suppliers', value: '342', change: '+8%' },
  { icon: MessageSquare, label: 'New Enquiries', value: '89', change: '+23%' },
  { icon: Eye, label: 'Total Views', value: '45.2K', change: '+15%' }
]

const recentEnquiries = [
  { id: 1, product: 'Ashwagandha Powder', user: 'John Doe', email: 'john@example.com', date: '2025-01-10', status: 'new' },
  { id: 2, product: 'LED Bulbs', user: 'Jane Smith', email: 'jane@example.com', date: '2025-01-10', status: 'responded' },
  { id: 3, product: 'Basmati Rice', user: 'Mike Johnson', email: 'mike@example.com', date: '2025-01-09', status: 'new' }
]


export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [suppliers, setSuppliers] = useState([])

  useEffect(() => {
    if (activeTab === 'suppliers') {
      api.get('/suppliers')
        .then(res => setSuppliers(res.data))
        .catch(() => setSuppliers([]))
    }
  }, [activeTab])

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-blue-100 mt-1">Manage your B2B marketplace</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="text-primary" size={32} />
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b">
            <div className="flex gap-4 px-6">
              {['overview', 'products', 'enquiries', 'suppliers'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-4 font-medium capitalize ${
                    activeTab === tab
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Enquiries</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Product</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">User</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {recentEnquiries.map(enquiry => (
                          <tr key={enquiry.id}>
                            <td className="px-4 py-3 text-sm">{enquiry.product}</td>
                            <td className="px-4 py-3 text-sm">{enquiry.user}</td>
                            <td className="px-4 py-3 text-sm">{enquiry.email}</td>
                            <td className="px-4 py-3 text-sm">{enquiry.date}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                enquiry.status === 'new' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {enquiry.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Manage Products</h3>
                  <button className="btn-primary flex items-center">
                    <Plus size={18} className="mr-2" />
                    Add Product
                  </button>
                </div>
                <p className="text-gray-600">Product management interface coming soon...</p>
              </div>
            )}

            {activeTab === 'enquiries' && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">All Enquiries</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Product</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">User</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {recentEnquiries.map(enquiry => (
                        <tr key={enquiry.id}>
                          <td className="px-4 py-3 text-sm">#{enquiry.id}</td>
                          <td className="px-4 py-3 text-sm">{enquiry.product}</td>
                          <td className="px-4 py-3 text-sm">{enquiry.user}</td>
                          <td className="px-4 py-3 text-sm">{enquiry.date}</td>
                          <td className="px-4 py-3">
                            <button className="text-primary hover:underline text-sm">View Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'suppliers' && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Supplier Requests</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {suppliers.length === 0 && (
                    <div className="text-gray-500">No supplier requests found.</div>
                  )}
                  {suppliers.map(supplier => (
                    <div key={supplier._id} className="border rounded-lg bg-white shadow p-6 flex flex-col">
                      <h4 className="font-semibold text-primary text-lg mb-2">{supplier.companyName}</h4>
                      <div className="text-sm text-gray-700 mb-2">
                        <span className="font-medium">Contact Person:</span> {supplier.contactPerson}
                      </div>
                      <div className="text-sm text-gray-700 mb-2">
                        <span className="font-medium">Email:</span> {supplier.email}
                      </div>
                      <div className="text-sm text-gray-700 mb-2">
                        <span className="font-medium">Phone:</span> {supplier.phone}
                      </div>
                      <div className="text-sm text-gray-700 mb-2">
                        <span className="font-medium">Business Type:</span> {supplier.businessType}
                      </div>
                      <div className="text-sm text-gray-700 mb-2">
                        <span className="font-medium">Categories:</span> {Array.isArray(supplier.categories) ? supplier.categories.join(', ') : supplier.categories}
                      </div>
                      <div className="text-sm text-gray-700 mb-2">
                        <span className="font-medium">Product Description:</span> {supplier.productDescription}
                      </div>
                      <div className="text-sm text-gray-700 mb-2">
                        <span className="font-medium">Certifications:</span> {Array.isArray(supplier.certifications) && supplier.certifications.length > 0 ? supplier.certifications.join(', ') : 'None'}
                      </div>
                      <div className="text-sm text-gray-700 mb-2">
                        <span className="font-medium">Address:</span>
                        <div>
                          {supplier.address?.street && <span>{supplier.address.street}, </span>}
                          {supplier.address?.city && <span>{supplier.address.city}, </span>}
                          {supplier.address?.state && <span>{supplier.address.state}, </span>}
                          {supplier.address?.country && <span>{supplier.address.country}, </span>}
                          {supplier.address?.pincode && <span>{supplier.address.pincode}</span>}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {supplier.images && supplier.images.length > 0 ? (
                          supplier.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt="Supplier"
                              className="w-16 h-16 object-cover rounded border"
                            />
                          ))
                        ) : (
                          <span className="text-xs text-gray-400">No images</span>
                        )}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button className="btn-secondary px-4 py-2 text-sm">Approve</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

