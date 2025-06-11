"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"

interface Service {
  id: string
  name: string
  description: string
  icon: string
  fullDescription: string
  features?: string[]
  benefits?: string[]
}

export default function ServiceDetailPage() {
  const params = useParams()
  const serviceId = params.id as string

  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real implementation, we would fetch from the JSON file
    // For now, we'll simulate with hardcoded data
    const mockService = {
      id: serviceId,
      name: serviceId === "managed-it" ? "Managed IT Support Services" : "Service Name",
      description: "Comprehensive IT management for your business",
      icon: "fa-cogs",
      fullDescription:
        "Our Managed IT Support Services provide comprehensive management of your IT infrastructure, ensuring optimal performance and security. We handle everything from routine maintenance to complex problem-solving, allowing you to focus on your core business activities.",
      features: [
        "24/7 monitoring of your IT systems",
        "Proactive maintenance and updates",
        "Security management and threat prevention",
        "Regular performance optimization",
        "Dedicated support team",
      ],
      benefits: [
        "Reduced downtime and improved productivity",
        "Predictable monthly IT costs",
        "Enhanced security and data protection",
        "Access to expert IT professionals",
        "Peace of mind knowing your IT is in good hands",
      ],
    }

    setService(mockService)
    setLoading(false)

    // In a real implementation:
    /*
    fetch(`/api/services/${serviceId}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Service not found');
      })
      .then(data => {
        setService(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to load service:", error);
        setLoading(false);
      });
    */
  }, [serviceId])

  const handleContactWhatsApp = () => {
    const message = `Hi, I'm interested in your ${service?.name} service. Can you provide more information?`
    window.open(`https://wa.me/8801716607988?text=${encodeURIComponent(message)}`, "_blank")
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4">Loading service details...</p>
        </div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">The service you are looking for does not exist.</p>
          <Link href="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/services" className="text-red-600 hover:text-red-800 flex items-center">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Services
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-red-600 text-white p-8">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-red-600 mr-4">
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{service.name}</h1>
            </div>
            <p className="text-xl">{service.description}</p>
          </div>

          <div className="p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="mb-6">{service.fullDescription}</p>

              {service.features && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="mb-2 flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {service.benefits && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                  <ul className="mb-6">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="mb-2 flex items-start">
                        <i className="fas fa-star text-yellow-500 mt-1 mr-2"></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={handleContactWhatsApp} className="btn-primary flex items-center">
                <i className="fab fa-whatsapp mr-2"></i>
                Contact via WhatsApp
              </button>
              <a href="tel:+8801716607988" className="btn-secondary flex items-center">
                <i className="fas fa-phone mr-2"></i>
                Call Us
              </a>
              <Link
                href="/contact"
                className="bg-gray-200 text-gray-800 hover:bg-gray-300 font-bold py-2 px-4 transition-all duration-300 flex items-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                Email Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
