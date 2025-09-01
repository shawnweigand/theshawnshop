import EmailCard from "@/components/ui/email-card"
import { Cta4 } from "@/components/ui/cta-4"
import { Feature } from "@/components/ui/feature"
import { Feature1 } from "@/components/ui/feature-1"
import { CTA } from "@/components/ui/call-to-action"
import { MoveRight, PhoneCall } from "lucide-react"
import { useEffect } from "react"

export default function Giveaway() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Feature Section */}
      <section id="hero">
        <Feature1
          title="Learn Kubernetes in 8 Simple Steps!"
          description="Take the first step towards mastering a 6-figure skillset with this free, hands-on video guide."
          imageSrc="/images/8stepstok8s/laptop.png"
          imageAlt="Laptop with Kubernetes setup"
          buttonPrimary={{
            label: "Start Now",
            href: "#guide"
          }}
          buttonSecondary={{
            label: "Learn More",
            href: "#about"
          }}
        />
      </section>

      {/* CTA Section */}
      <section id="guide">
        <Cta4
          title="In this free guide, you'll learn..."
          description="Learn by doing and deploy your first application on Kubernetes in just 13 minutes."
          buttonText="Start Now"
          buttonUrl="#signup"
          items={[
            "To run your first cluster",
            "How to deploy your first application",
            "The Kubectl command line tool",
            "The difference in K8s vs Docker",
            "What makes up K8s architecture",
            "Next steps in your K8s journey",
          ]}
        />
      </section>

      {/* Email Card Component */}
      <section id="signup">
        <EmailCard
          title="Get Your Free Guide Now"
          description="Enter your details below and get your free guide delivered to your inbox."
        />
      </section>

      {/* Feature Section */}
      <section id="about">
        <Feature
          badgeText="Bio"
          title="Welcome to The Shawn Shop"
          description="Hey everyone, I'm Shawn and I'm excited to have your here. Over the past 5 years, I've been able to break into the cloud space with no experience and build a career from the ground up. My goal is to make learning these skills approachable, actionable, and something you can immediately put into practice to grow your own journey in the tech landscape."
          features={[
            {
              title: "Visual explanations",
              description: "Watch detailed videos that explain complex concepts in a simple, yet digestible way."
            },
            {
              title: "Step-by-step tutorials",
              description: "Follow along as you level up your skills through incremenental learning steps."
            },
            {
              title: "Interactive labs",
              description: "Put your knowledge into practice immediately with hands-on exercises and copyable code snippets."
            }
          ]}
          imageSrc=""
          imageAlt="Kubernetes learning setup"
        />
      </section>

      {/* Final CTA Section */}
      <section id="cta">
        <CTA
          badgeText="Let's get started!"
          title="Ready to Level Up Your Tech Skills?"
          description="Join thousands of developers who have already mastered Kubernetes and have built a lucrative career in the tech industry. Start building your cloud-native skills and advance your career now."
          primaryButton={{
            text: "Get Started Now",
            href: "#signup",
            icon: <MoveRight className="w-4 h-4" />
          }}
          secondaryButton={{
            text: "Learn More",
            href: "#about",
          //   icon: <PhoneCall className="w-4 h-4" />
          }}
        />
      </section>
    </div>
  )
}
