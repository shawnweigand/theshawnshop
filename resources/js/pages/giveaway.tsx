import EmailCard from "@/components/ui/email-card"
import { Cta4 } from "@/components/ui/cta-4"
import { Feature } from "@/components/ui/feature"
import { Feature1 } from "@/components/ui/feature-1"
import { CTA } from "@/components/ui/call-to-action"

export default function Giveaway() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Feature Section */}
      <Feature1
        title="Amazing Giveaway Platform"
        description="Join thousands of users who have already discovered incredible prizes and opportunities. Our platform makes it easy to participate in exciting giveaways and win amazing rewards."
        imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
        imageAlt="Giveaway platform showcase"
        buttonPrimary={{
          label: "Enter Giveaway",
          href: "#"
        }}
        buttonSecondary={{
          label: "Learn More",
          href: "#"
        }}
      />

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

      {/* Feature Section */}
      <Feature />

      {/* Final CTA Section */}
      <CTA />
    </div>
  )
}
