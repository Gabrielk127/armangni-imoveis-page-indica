import Header from "@/components/header/header"
import { HeroSection } from "@/components/hero-section"
import { PrizesSection } from "@/components/prizes-section"
import { RulesSection } from "@/components/rules-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ReferralForm } from "@/components/referral-form"
import { Footer } from "@/components/footer"

export default function IndicacoesPage() {
  return (
    <main className="min-h-screen bg-[#1C1C1C]">
      <Header />
      <HeroSection />
      <PrizesSection />
      <HowItWorksSection />
      <RulesSection />
      <ReferralForm />
      <Footer />
    </main>
  )
}
