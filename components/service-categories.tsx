"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface Service {
  id: string
  name: string
  description: string
  icon: string
}

export default function ServiceCategories() {
  const [services, setServices] = useState<Service[]>([
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
  ])

  useEffect(() => {
    // For now, we'll just use the hardcoded data
    // When the API is implemented, we can uncomment this fetch
    /*
    fetch("/api/services")
      .then((response) => {
        if (response.ok) return response.json();
        return null;
      })
      .then((data) => {
        if (data) setServices(data);
      })
      .catch((error) => {
        console.error("Failed to load services:", error);
      });
    */
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide a wide range of IT services to meet all your business needs. From remote support to on-site
          assistance, we've got you covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id}>
              <div className="card p-6 h-full flex flex-col items-center text-center hover:border-red-500 hover:border transition-all">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
