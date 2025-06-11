import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how our IT services and products can benefit your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/8801716607988"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 flex items-center"
          >
            <i className="fab fa-whatsapp mr-2 text-xl"></i>
            WhatsApp
          </a>
          <a
            href="tel:+8801716607988"
            className="bg-gray-800 text-white hover:bg-gray-900 font-bold py-3 px-6 flex items-center"
          >
            <i className="fas fa-phone mr-2"></i>
            Call Us
          </a>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-6 transition-all duration-300"
          >
            Contact Form
          </Link>
        </div>
      </div>
    </section>
  )
}
