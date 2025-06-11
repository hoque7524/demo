"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  inStock: boolean
  category: string
}

export default function ProductCategoryPage() {
  const params = useParams()
  const categoryId = params.category as string

  const [products, setProducts] = useState<Product[]>([])
  const [categoryName, setCategoryName] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // For now, we'll just use the hardcoded data
    // When the API is fully implemented, we can uncomment this fetch

    /*
    fetch(`/api/products?category=${categoryId}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Products not found');
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to load products:", error);
        setLoading(false);
      });
    */

    const mockProducts = [
      {
        id: "laptop-1",
        name: "Business Laptop Pro",
        description: "High-performance laptop for business professionals",
        price: 1299.99,
        image: "/placeholder.svg?height=300&width=400",
        inStock: true,
        category: "laptops",
      },
      {
        id: "laptop-2",
        name: "Gaming Powerhouse X",
        description: "Ultimate gaming laptop with high-end graphics",
        price: 1899.99,
        image: "/placeholder.svg?height=300&width=400",
        inStock: true,
        category: "laptops",
      },
      {
        id: "laptop-3",
        name: "Ultrabook Slim",
        description: "Lightweight and portable laptop for everyday use",
        price: 899.99,
        image: "/placeholder.svg?height=300&width=400",
        inStock: false,
        category: "laptops",
      },
      {
        id: "router-1",
        name: "Enterprise Router Pro",
        description: "High-performance router for business networks",
        price: 299.99,
        image: "/placeholder.svg?height=300&width=400",
        inStock: true,
        category: "networking",
      },
      {
        id: "switch-1",
        name: "Managed Switch 24-Port",
        description: "24-port managed switch for network expansion",
        price: 199.99,
        image: "/placeholder.svg?height=300&width=400",
        inStock: true,
        category: "networking",
      },
    ]

    const categoryNames: { [key: string]: string } = {
      laptops: "Laptops & Computers",
      networking: "Networking Equipment",
      accessories: "Computer Accessories",
      software: "Software Solutions",
      servers: "Servers & Storage",
      security: "Security Equipment",
    }

    setCategoryName(categoryNames[categoryId] || categoryId)
    setProducts(mockProducts.filter((product) => product.category === categoryId))
    setLoading(false)
  }, [categoryId])

  const handleContactWhatsApp = (product: Product) => {
    const message = `Hi, I'm interested in the ${product.name} (${product.id}) priced at $${product.price}. Is it available?`
    window.open(`https://wa.me/8801716607988?text=${encodeURIComponent(message)}`, "_blank")
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4">Loading products...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/products" className="text-red-600 hover:text-red-800 flex items-center">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Categories
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">{categoryName}</h1>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl mb-6">No products found in this category.</p>
            <Link href="/products" className="btn-primary">
              Explore Other Categories
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card overflow-hidden flex flex-col">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <span className="text-lg font-bold text-red-600">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mt-auto">
                    <div className="flex items-center mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                      >
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleContactWhatsApp(product)}
                        className="btn-primary flex-1 flex items-center justify-center"
                        disabled={!product.inStock}
                      >
                        <i className="fab fa-whatsapp mr-2"></i>
                        Buy via WhatsApp
                      </button>
                      <Link
                        href={`/products/${categoryId}/${product.id}`}
                        className="bg-gray-200 text-gray-800 hover:bg-gray-300 font-bold py-2 px-4 transition-all duration-300"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
