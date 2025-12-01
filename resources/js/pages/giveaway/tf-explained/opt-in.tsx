import EmailCard from "@/components/ui/email-card"
import { Cta4 } from "@/components/ui/cta-4"
import { Feature } from "@/components/ui/feature"
import { Feature1 } from "@/components/ui/feature-1"
import { CTA } from "@/components/ui/call-to-action"
import { MoveRight, PhoneCall } from "lucide-react"
import { useEffect } from "react"
import { Link, usePage } from "@inertiajs/react"
import { route } from "ziggy-js"
import { toast } from "sonner"

export default function TfExplainedGiveaway() {
  const { flash } = usePage().props as any;

  // Handle smooth scrolling for anchor links
  useEffect(() => {
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

  // Show error toast when page loads with flash error message
  useEffect(() => {
    const errorMessage = flash?.error;

    if (errorMessage) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        toast.error("Error", {
          description: errorMessage,
          duration: 5000,
        });
      });
    }
  }, [flash]);
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Feature Section */}
      <section id="hero">
        <Feature1
          title={`Master Terraform with this <i style="color: #316DE6;">free</i>, comprehensive guide and codebase.`}
          description="Take the first step towards mastering Infrastructure-as-Code with this FREE, comprehensive Terraform guide containing step-by-step instructions, real-world examples, and a complete codebase to get you started."
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Terraform_Logo.svg/1280px-Terraform_Logo.svg.png"
          imageAlt="Laptop with Terraform setup"
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
          title="Get Your Free Terraform Guide & Codebase!"
          description="Enter your details below and get your comprehensive Terraform guide and codebase delivered to your inbox."
          mailGroup="giveaway.tf-explained"
          redirectUrl={route('giveaway.tf-explained.thanks')}
        />
      </section>

      {/* CTA Section */}
      <section id="guide" className="-mb-16">
        <Cta4
          title="In this free guide, you'll get..."
          description="Master Terraform with proven resources, real-world examples, and a complete codebase to accelerate your Infrastructure-as-Code journey."
          buttonText="Get Your Guide"
          buttonUrl="#signup"
          items={[
            "Complete Terraform codebase",
            "Step-by-step explanations",
            "Real-world examples and best practices",
            "Ready-to-use infrastructure templates",
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
              description: "Watch detailed videos that explain complex Terraform concepts in a simple, yet digestible way."
            },
            {
              title: "Step-by-step tutorials",
              description: "Follow along as you level up your Infrastructure-as-Code skills through incremental learning steps."
            },
            {
              title: "Real-world codebase",
              description: "Get hands-on experience immediately with a complete, production-ready Terraform codebase you can use right away."
            }
          ]}
          imageSrc="/images/me.jpg"
          imageAlt="Terraform learning setup"
        />
      </section>

      {/* Final CTA Section */}
      <section id="cta">
        <CTA
          badgeText="Let's get started!"
          title="Ready to Master Terraform?"
          description="Join thousands of professionals who have already mastered Infrastructure-as-Code and have built a lucrative career in the cloud industry. Start building your Terraform expertise and advance your career now."
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
