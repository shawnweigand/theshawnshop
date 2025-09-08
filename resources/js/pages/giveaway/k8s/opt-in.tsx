import EmailCard from "@/components/ui/email-card"
import { Cta4 } from "@/components/ui/cta-4"
import { Feature } from "@/components/ui/feature"
import { Feature1 } from "@/components/ui/feature-1"
import { CTA } from "@/components/ui/call-to-action"
import { MoveRight, PhoneCall } from "lucide-react"
import { useEffect } from "react"
import { Link } from "@inertiajs/react"
import { route } from "ziggy-js"

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
          title={`Want to learn k8s but not sure where to start?<br /><i style="color: #316DE6;">Accelerate</i> your skills <span style="color: #316DE6; font-weight: bold;"><u>now</u></span>.`}
        //   title={`Feel <u>stuck</u> in your IT job?<br /><i style="color: #316DE6;">Supercharge</i> your 6-figure cloud skills <span style="color: #316DE6; font-weight: bold;"><u>now</u></span>.`}
          description="Deploy and run your first Kubernetes application in just 13 minutes with this free, hands-on video guide."
          imageSrc="/images/8stepstok8s/laptop.png"
          imageAlt="Laptop with Kubernetes setup"
          buttonPrimary={{
            label: "Start Now",
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
          title="Get Your Free Guide Now!"
          description="Enter your details below and get your free guide delivered to your inbox."
          mailGroup="giveaway.k8s"
          redirectUrl={route('giveaway.k8s.thanks')}
        />
      </section>

      {/* CTA Section */}
      <section id="guide" className="-mb-16">
        <Cta4
          title="In this free guide, you'll learn..."
          description="Learn by doing and deploy your first application on Kubernetes in just 13 minutes."
          buttonText="Get Your Guide"
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

      {/* Salaries Image Section */}
      <section className="pb-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex justify-center">
            <img
              src="/images/8stepstok8s/salaries.png"
              alt="Kubernetes salaries and career opportunities"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
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
          imageSrc="/images/me.jpg"
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
