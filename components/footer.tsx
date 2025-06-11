import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ItSmartSolution</h3>
            <p className="mb-4">
              We offer reliable IT services and solutions for businesses of all sizes — local or corporate.
            </p>
            <p className="text-sm text-gray-400">
              If you are not serious about business, then please don't waste our time. Message only if you are
              interested in our services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                <a href="tel:+8801716607988">+8801716607988</a>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp mr-2"></i>
                <a href="https://wa.me/8801716607988" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <a href="mailto:itservicebdofficial@gmail.com">itservicebdofficial@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-red-400">
                  Know Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-red-400">
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-red-400">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ItSmartSolution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
