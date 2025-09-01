import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CTAProps {
  badgeText?: string;
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryButton?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
}

function CTA({
  badgeText = "Get started",
  title = "Try our platform today!",
  description = "Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.",
  primaryButton = {
    text: "Sign up here",
    href: "#",
    icon: <MoveRight className="w-4 h-4" />
  },
  secondaryButton = {
    text: "Jump on a call",
    href: "#",
    icon: <PhoneCall className="w-4 h-4" />
  }
}: CTAProps) {
  return (
    <div className="w-full pb-20 lg:pb-40">
      <div className="container mx-auto max-w-[1400px] px-2 md:px-4">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>{badgeText}</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              {title}
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4" variant="outline" asChild>
              <a href={secondaryButton.href}>
                {secondaryButton.text} {secondaryButton.icon}
              </a>
            </Button>
            <Button className="gap-4" asChild>
              <a href={primaryButton.href}>
                {primaryButton.text} {primaryButton.icon}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
