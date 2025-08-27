import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo"
import EmailCard from "@/components/ui/email-card"
import { Cta4 } from "@/components/ui/cta-4"

export default function Giveaway() {
  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Animation Demo */}
      <HeroScrollDemo />

      {/* CTA Section */}
      <Cta4
        title="Ready to Get Started?"
        description="Join thousands of users who have already transformed their experience with our powerful platform."
        buttonText="Start Now"
        buttonUrl="#"
        items={[
          "Easy Integration",
          "24/7 Support",
          "Customizable Design",
          "Scalable Performance",
          "Premium Features"
        ]}
      />

      {/* Email Card Component */}
      <EmailCard />
    </div>
  )
}
