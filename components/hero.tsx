import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-red-900 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional IT Services & Solutions</h1>
          <p className="text-xl mb-8">
            We offer reliable IT services and solutions for businesses of all sizes — local or corporate. Get expert
            support with a 30-minute response time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="btn-primary">
              Explore Services
            </Link>
            <Link
              href="/products"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-2 px-4 transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
