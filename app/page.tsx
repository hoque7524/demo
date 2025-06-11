import Hero from "@/components/hero"
import ServiceCategories from "@/components/service-categories"
import ProductCategories from "@/components/product-categories"
import ContactCTA from "@/components/contact-cta"
import AboutSection from "@/components/about-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServiceCategories />
      <ProductCategories />
      <AboutSection />
      <ContactCTA />
    </div>
  )
}
