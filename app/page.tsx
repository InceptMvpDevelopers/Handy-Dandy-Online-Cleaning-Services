import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Footer from "@/components/footer"
import WorkingProcess from "@/components/workingprocess"
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <WorkingProcess />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  )
}
