"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface ProductCategory {
  id: string
  name: string
  description: string
  image: string
  productCount: number
}

export default function ProductsPage() {
  const [categories, setCategories] = useState<ProductCategory[]>([
    {
      id: "laptops",
      name: "Laptops & Computers",
      description: "High-performance computers for work and gaming",
      image: "/placeholder.svg?height=300&width=400",
      productCount: 12,
    },
    {
      id: "networking",
      name: "Networking Equipment",
      description: "Routers, switches, and networking accessories",
      image: "/placeholder.svg?height=300&width=400",
      productCount: 8,
    },
    {
      id: "accessories",
      name: "Computer Accessories",
      description: "Keyboards, mice, and other peripherals",
      image: "/placeholder.svg?height=300&width=400",
      productCount: 15,
    },
    {
      id: "software",
      name: "Software Solutions",
      description: "Business and productivity software",
      image: "/placeholder.svg?height=300&width=400",
      productCount: 6,
    },
    {
      id: "servers",
      name: "Servers & Storage",
      description: "Enterprise-grade servers and storage solutions",
      image: "/placeholder.svg?height=300&width=400",
      productCount: 4,
    },
    {
      id: "security",
      name: "Security Equipment",
      description: "Hardware and software for IT security",
      image: "/placeholder.svg?height=300&width=400",
      productCount: 7,
    },
  ])

  useEffect(() => {
    // For now, we'll just use the hardcoded data
    // When the API is implemented, we can uncomment this fetch
    /*
    fetch("/api/product-categories")
      .then((response) => {
        if (response.ok) return response.json();
        return null;
      })
      .then((data) => {
        if (data) setCategories(data);
      })
      .catch((error) => {
        console.error("Failed to load product categories:", error);
      });
    */
  }, [])

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Explore our range of high-quality IT products and electronic devices to enhance your business operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link href={`/products/${category.id}`} key={category.id}>
              <div className="card overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{category.productCount} products</span>
                    <span className="text-red-600 font-semibold flex items-center">
                      View Products
                      <i className="fas fa-arrow-right ml-2"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
