import EmailCard from "@/components/ui/email-card"
import { Cta4 } from "@/components/ui/cta-4"
import { Feature } from "@/components/ui/feature"
import { Feature1 } from "@/components/ui/feature-1"
import { CTA } from "@/components/ui/call-to-action"
import { MoveRight, PhoneCall } from "lucide-react"
import { useEffect } from "react"
import { Link } from "@inertiajs/react"
import { route } from "ziggy-js"

export default function AZ104Giveaway() {
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
          title={`Pass your AZ-104 exam with this <i style="color: #316DE6;">free</i>, comprehensive study guide.`}
        //   title={`<i style="color: #316DE6;">Maximize</i> your results<br />while <i style="color: #316DE6; font-weight: bold;">minimizing</i> the struggle.`}
          description="Take the first step towards mastering Azure Administrator skills with this FREE, comprehensive study guide containing step-by-step instructions and resource links."
          imageSrc="/images/az104/laptop.png"
          imageAlt="Laptop with Azure setup"
          buttonPrimary={{
            label: "Get Free Guide",
            href: "#signup"
          }}
          buttonSecondary={{
            label: "Learn More",
            href: "#about"
          }}
        />
      </section>

      {/* Email Card Component */}
      <section id="signup" className="pb-20">
        <EmailCard
          title="Get Your Free AZ-104 Study Guide!"
          description="Enter your details below and get your comprehensive study guide delivered to your inbox."
          mailGroup="giveaway.az104"
          redirectUrl={route('giveaway.az104.thanks')}
        />
      </section>

      {/* CTA Section */}
      <section id="guide" className="-mb-16">
        <Cta4
          title="In this free guide, you'll get..."
          description="Master the AZ-104 exam with proven resources and step-by-step preparation strategies."
          buttonText="Get Your Guide"
          buttonUrl="#signup"
          items={[
            "Step-by-step study plan",
            "Curated learning resources (linked)",
            "Practice exam strategies",
            "Exam day preparation tips",
          ]}
        />
      </section>

      {/* Feature Section */}
      <section id="about" className="-mb-10">
        <Feature
          badgeText="Bio"
          title="Welcome to The Shawn Shop"
          description="Hey everyone, I'm Shawn and I'm excited to have you here. Over the past 5 years, I've been able to break into the cloud space with no experience and build a career from the ground up. My goal is to make learning these skills approachable, actionable, and something you can immediately put into practice to grow your own journey in the tech landscape."
          features={[
            {
              title: "Visual explanations",
              description: "Watch detailed videos that explain complex Azure concepts in a simple, yet digestible way."
            },
            {
              title: "Step-by-step tutorials",
              description: "Follow along as you level up your Azure skills through incremental learning steps."
            },
            {
              title: "Interactive labs",
              description: "Put your knowledge into practice immediately with hands-on Azure exercises and real-world scenarios."
            }
          ]}
          imageSrc="/images/me.jpg"
          imageAlt="Azure learning setup"
        />
      </section>

      {/* Final CTA Section */}
      <section id="cta">
        <CTA
          badgeText="Let's get started!"
          title="Ready to Pass Your AZ-104 Exam?"
          description="Join thousands of professionals who have already mastered Azure Administrator skills and have built a lucrative career in the cloud industry. Start building your Azure expertise and advance your career now."
          primaryButton={{
            text: "Get Your Free Guide",
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

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href={route('privacy')} className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href={route('terms')} className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href={route('cookies')} className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} The Shawn Shop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
