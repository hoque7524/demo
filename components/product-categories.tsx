"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface ProductCategory {
  id: string
  name: string
  description: string
  image: string
}

export default function ProductCategories() {
  const [categories, setCategories] = useState<ProductCategory[]>([
    {
      id: "laptops",
      name: "Laptops & Computers",
      description: "High-performance computers for work and gaming",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "networking",
      name: "Networking Equipment",
      description: "Routers, switches, and networking accessories",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "accessories",
      name: "Computer Accessories",
      description: "Keyboards, mice, and other peripherals",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "software",
      name: "Software Solutions",
      description: "Business and productivity software",
      image: "/placeholder.svg?height=200&width=300",
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Product Categories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our range of high-quality IT products and electronic devices to enhance your business operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link href={`/products/${category.id}`} key={category.id}>
              <div className="card overflow-hidden h-full flex flex-col">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
