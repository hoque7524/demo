import { NextResponse } from "next/server"

export async function GET() {
  // This would typically fetch from a database or JSON file
  // For now, we'll return hardcoded data
  const services = [
    {
      id: "managed-it",
      name: "Managed IT Support Services",
      description: "Comprehensive IT management for your business",
      icon: "fa-cogs",
    },
    {
      id: "remote-it",
      name: "Remote IT Support",
      description: "Expert support from anywhere in the world",
      icon: "fa-laptop-code",
    },
    {
      id: "networking",
      name: "Computer Networking",
      description: "Setup and maintain reliable networks",
      icon: "fa-network-wired",
    },
    {
      id: "service-desk",
      name: "24/7 Service Desk Support",
      description: "Round-the-clock assistance for your IT needs",
      icon: "fa-headset",
    },
    {
      id: "onsite-it",
      name: "Onsite IT Support",
      description: "Face-to-face technical assistance",
      icon: "fa-tools",
    },
    {
      id: "business-it",
      name: "Business IT Support",
      description: "Tailored IT solutions for your business",
      icon: "fa-briefcase",
    },
    {
      id: "dedicated-it",
      name: "Dedicated IT Service Desk",
      description: "Exclusive support team for your organization",
      icon: "fa-users-cog",
    },
    {
      id: "webmail",
      name: "Corporate Web Mail Services",
      description: "Professional email solutions for your business",
      icon: "fa-envelope",
    },
  ]

  return NextResponse.json(services)
}
