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
  features?: string[]
  specifications?: { [key: string]: string }
}

export default function ProductDetailPage() {
  const params = useParams()
  const categoryId = params.category as string
  const productId = params.id as string

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real implementation, we would fetch from the JSON file
    // For now, we'll simulate with hardcoded data
    const mockProduct = {
      id: productId,
      name: "Business Laptop Pro",
      description:
        "High-performance laptop for business professionals with the latest technology for optimal productivity.",
      price: 1299.99,
      image: "/placeholder.svg?height=400&width=600",
      inStock: true,
      category: categoryId,
      features: [
        "11th Gen Intel Core i7 processor",
        "16GB DDR4 RAM",
        "512GB NVMe SSD",
        '15.6" Full HD IPS Display',
        "Windows 11 Pro",
        "Backlit Keyboard",
        "Fingerprint Reader",
        "12-hour Battery Life",
      ],
      specifications: {
        Processor: "Intel Core i7-1165G7",
        Memory: "16GB DDR4 3200MHz",
        Storage: "512GB PCIe NVMe SSD",
        Display: '15.6" Full HD (1920 x 1080) IPS',
        Graphics: "Intel Iris Xe Graphics",
        "Operating System": "Windows 11 Pro",
        Battery: "4-cell, 56Wh Li-ion",
        Weight: "1.8 kg",
        Dimensions: "356.7 x 233.5 x 18.9 mm",
        Ports: "2x USB-C, 2x USB-A, HDMI, Audio jack",
      },
    }

    setProduct(mockProduct)
    setLoading(false)

    // In a real implementation:
    /*
    fetch(`/api/products/${categoryId}/${productId}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Product not found');
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to load product:", error);
        setLoading(false);
      });
    */
  }, [categoryId, productId])

  const handleContactWhatsApp = () => {
    if (!product) return
    const message = `Hi, I'm interested in the ${product.name} (${product.id}) priced at $${product.price}. Is it available?`
    window.open(`https://wa.me/8801716607988?text=${encodeURIComponent(message)}`, "_blank")
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4">Loading product details...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">The product you are looking for does not exist.</p>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href={`/products/${categoryId}`} className="text-red-600 hover:text-red-800 flex items-center">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>

              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-red-600 mr-4">${product.price.toFixed(2)}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={handleContactWhatsApp}
                  className="btn-primary flex items-center"
                  disabled={!product.inStock}
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Buy via WhatsApp
                </button>
                <a href="tel:+8801716607988" className="btn-secondary flex items-center">
                  <i className="fas fa-phone mr-2"></i>
                  Call for Inquiry
                </a>
              </div>

              {product.features && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-3">Key Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {product.specifications && (
            <div className="p-8 border-t">
              <h2 className="text-2xl font-bold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex">
                    <span className="font-semibold min-w-[120px]">{key}:</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
