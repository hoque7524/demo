import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  // This would typically fetch from a database or JSON file
  // For now, we'll return hardcoded data
  const allProducts = [
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

  // Filter products by category if provided
  const products = category ? allProducts.filter((product) => product.category === category) : allProducts

  return NextResponse.json(products)
}
