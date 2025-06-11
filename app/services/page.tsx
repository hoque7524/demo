"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface Service {
  id: string
  name: string
  description: string
  icon: string
  fullDescription: string
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([
    {
      id: "managed-it",
      name: "Managed IT Support Services",
      description: "Comprehensive IT management for your business",
      icon: "fa-cogs",
      fullDescription:
        "Our Managed IT Support Services provide comprehensive management of your IT infrastructure, ensuring optimal performance and security. We handle everything from routine maintenance to complex problem-solving, allowing you to focus on your core business activities.",
    },
    {
      id: "remote-it",
      name: "Remote IT Support",
      description: "Expert support from anywhere in the world",
      icon: "fa-laptop-code",
      fullDescription:
        "With our Remote IT Support services, you can get expert assistance no matter where you are. Our team can diagnose and resolve issues quickly and efficiently, minimizing downtime and keeping your business running smoothly.",
    },
    {
      id: "networking",
      name: "Computer Networking",
      description: "Setup and maintain reliable networks",
      icon: "fa-network-wired",
      fullDescription:
        "Our Computer Networking services include design, implementation, and maintenance of reliable network infrastructure. We ensure secure and efficient data transfer, optimal connectivity, and scalable solutions that grow with your business.",
    },
    {
      id: "service-desk",
      name: "24/7 Service Desk Support",
      description: "Round-the-clock assistance for your IT needs",
      icon: "fa-headset",
      fullDescription:
        "Our 24/7 Service Desk Support ensures that help is always available when you need it. Our team of experts is ready to assist with any IT issues, providing prompt and effective solutions at any time of day or night.",
    },
    {
      id: "onsite-it",
      name: "Onsite IT Support",
      description: "Face-to-face technical assistance",
      icon: "fa-tools",
      fullDescription:
        "Sometimes, IT issues require a hands-on approach. Our Onsite IT Support services bring skilled technicians directly to your location to address hardware problems, network issues, and other technical challenges that can't be resolved remotely.",
    },
    {
      id: "business-it",
      name: "Business IT Support",
      description: "Tailored IT solutions for your business",
      icon: "fa-briefcase",
      fullDescription:
        "Our Business IT Support services are tailored to meet the specific needs of your organization. We provide strategic guidance, technical expertise, and ongoing support to ensure your IT infrastructure aligns with your business goals.",
    },
    {
      id: "dedicated-it",
      name: "Dedicated IT Service Desk",
      description: "Exclusive support team for your organization",
      icon: "fa-users-cog",
      fullDescription:
        "With our Dedicated IT Service Desk, you get an exclusive team of IT professionals who understand your business and its unique challenges. This personalized approach ensures faster resolution times and more effective support.",
    },
    {
      id: "webmail",
      name: "Corporate Web Mail Services",
      description: "Professional email solutions for your business",
      icon: "fa-envelope",
      fullDescription:
        "Our Corporate Web Mail Services provide professional email solutions that enhance your business communication. We offer secure, reliable, and feature-rich email hosting with custom domain names, spam protection, and mobile access.",
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
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          We offer a comprehensive range of IT services designed to meet the needs of businesses of all sizes. Explore
          our services below to learn more about how we can help your business thrive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h2 className="text-2xl font-bold mb-3">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.fullDescription}</p>
              <Link
                href={`/services/${service.id}`}
                className="text-red-600 font-semibold hover:text-red-800 flex items-center"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
