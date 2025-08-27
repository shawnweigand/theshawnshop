import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo"
import EmailCard from "@/components/ui/email-card"
import { Cta4 } from "@/components/ui/cta-4"
import { About3 } from "@/components/ui/about-3"
import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  {
    step: 'Step 1',
    title: 'Learn the Basics',
    content: 'Start your journey by learning the basics of our platform and its core features.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    step: 'Step 2',
    title: 'Deep Dive',
    content: 'Dive deep into advanced features and customization options to maximize your experience.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    step: 'Step 3',
    title: 'Build Projects',
    content: 'Graduate with hands-on experience through building real-world projects and applications.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80'
  },
]

export default function Giveaway() {
  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Animation Demo */}
      <HeroScrollDemo />

      {/* Feature Steps Section */}
      <FeatureSteps
        features={features}
        title="Your Journey Starts Here"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />

      {/* Email Card Component */}
      <EmailCard />

      {/* About Section */}
      <About3
        title="About Our Platform"
        description="We are a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age."
        mainImage={{
          src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
          alt: "Modern office workspace",
        }}
        secondaryImage={{
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          alt: "Team collaboration",
        }}
        breakout={{
          src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
          alt: "Company logo",
          title: "Hundreds of successful projects completed",
          description: "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
          buttonText: "Learn More",
          buttonUrl: "#",
        }}
        companiesTitle="Trusted by leading companies worldwide"
        achievementsTitle="Our Success in Numbers"
        achievementsDescription="We've helped hundreds of businesses achieve their digital transformation goals with our innovative solutions."
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
    </div>
  )
}
