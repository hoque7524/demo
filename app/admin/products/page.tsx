"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  category: string
  inStock: boolean
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "laptop-1",
      name: "Business Laptop Pro",
      price: 1299.99,
      category: "laptops",
      inStock: true,
    },
    {
      id: "laptop-2",
      name: "Gaming Powerhouse X",
      price: 1899.99,
      category: "laptops",
      inStock: true,
    },
    {
      id: "laptop-3",
      name: "Ultrabook Slim",
      price: 899.99,
      category: "laptops",
      inStock: false,
    },
    {
      id: "router-1",
      name: "Enterprise Router Pro",
      price: 299.99,
      category: "networking",
      inStock: true,
    },
    {
      id: "switch-1",
      name: "Managed Switch 24-Port",
      price: 199.99,
      category: "networking",
      inStock: true,
    },
  ])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // In a real implementation, we would fetch from the API
    // For now, we'll use the hardcoded data
  }, [])

  const handleToggleStock = (id: string) => {
    setProducts(products.map((product) => (product.id === id ? { ...product, inStock: !product.inStock } : product)))
  }

  const handleDeleteProduct = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-red-600">Manage Products</h1>
            <Link href="/admin" className="text-gray-600 hover:text-red-600">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Products</h2>
          <Link href="/admin/products/add" className="admin-btn">
            Add New Product
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mx-auto"></div>
            <p className="mt-4">Loading products...</p>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4">{product.id}</td>
                    <td className="px-6 py-4">{product.name}</td>
                    <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Link href={`/admin/products/edit/${product.id}`} className="text-blue-600 hover:text-blue-900">
                          Edit
                        </Link>
                        <button
                          onClick={() => handleToggleStock(product.id)}
                          className={`${
                            product.inStock ? "text-red-600 hover:text-red-900" : "text-green-600 hover:text-green-900"
                          }`}
                        >
                          {product.inStock ? "Mark Out of Stock" : "Mark In Stock"}
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
