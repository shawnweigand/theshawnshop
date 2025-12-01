import { Head } from '@inertiajs/react';
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { CheckCircle, Download, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Feature1, Feature } from '@/components/ui';
import { SocialTooltip, SocialItem } from '@/components/ui/social-media';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function TfExplainedGiveawayThankYou() {
  const { flash } = usePage().props as any;

  // Show success toast when page loads with flash message
  useEffect(() => {
    if (flash?.success) {
      toast.success("Congrats!", {
        description: flash.success,
        duration: 5000,
      });
    }
  }, [flash]);

  console.log(flash);

  // Social media links data
  const socialLinks: SocialItem[] = [
    {
      href: "https://www.youtube.com/@theshawnshop",
      ariaLabel: "YouTube",
      tooltip: "YouTube",
      color: "#FF0000",
      svgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
    },
    {
      href: "https://instagram.com/attheshawnshop",
      ariaLabel: "Instagram",
      tooltip: "Instagram",
      color: "#E4405F",
      svgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
    },
    {
      href: "https://www.tiktok.com/@theshawnshop",
      ariaLabel: "TikTok",
      tooltip: "TikTok",
      color: "#FE2C55",
      svgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg",
    },
    {
      href: "https://medium.com/@theshawnshop",
      ariaLabel: "Medium",
      tooltip: "Medium",
      color: "#000000",
      svgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/medium.svg",
    },
    {
      href: "https://www.x.com/theshawnshop",
      ariaLabel: "X (formerly Twitter)",
      tooltip: "X (formerly Twitter)",
      color: "#000000",
      svgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Head title="Thank You - Your Guide is on the Way!" />

      <section id="hero">
        <Feature1
          title="Your free Terraform guide and codebase is headed to your inbox!"
          description="Don't see it? Make sure to check your promotions folder. Email shawn@theshawnshop.com for assistance."
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Terraform_Logo.svg/1280px-Terraform_Logo.svg.png"
          imageAlt="Terraform logo"
        />
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Let's Connect!</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Stay updated with our latest tutorials, tips, and community updates
          </p>
          <SocialTooltip items={socialLinks} />
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16">
        <Feature
          badgeText="Welcome"
          title="We can't wait to help you on your Terraform journey!"
          description="Be on the lookout for some amazing new content and exclusive offers for courses on the most in-demand Infrastructure-as-Code skills in the industry. We're hard at work to deliver the best value to you and the tech community. Talk soon!<br /><br />Sincerely,<br />Shawn from The Shawn Shop"
          features={[]}
          imageSrc="/images/me.jpg"
          imageAlt="Terraform learning setup"
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
  );
}
