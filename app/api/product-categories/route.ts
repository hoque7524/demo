import { NextResponse } from "next/server"

export async function GET() {
  // This would typically fetch from a database or JSON file
  // For now, we'll return hardcoded data
  const categories = [
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
  ]

  return NextResponse.json(categories)
}
