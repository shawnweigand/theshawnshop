import React from 'react';
import { Head } from '@inertiajs/react';
import { SocialTooltip, SocialItem } from '@/components/ui/social-media';

// Data for the social media links using Lucide React icons
const socialLinks: SocialItem[] = [
  {
    href: "https://github.com",
    ariaLabel: "GitHub",
    tooltip: "GitHub",
    color: "#333333",
    svgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
  },
  {
    href: "https://twitter.com",
    ariaLabel: "Twitter",
    tooltip: "Twitter",
    color: "#1DA1F2",
    svgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg",
  },
  {
    href: "https://linkedin.com",
    ariaLabel: "LinkedIn",
    tooltip: "LinkedIn",
    color: "#0077B5",
    svgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
  },
  {
    href: "https://youtube.com",
    ariaLabel: "YouTube",
    tooltip: "YouTube",
    color: "#FF0000",
    svgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
  },
  {
    href: "https://instagram.com",
    ariaLabel: "Instagram",
    tooltip: "Instagram",
    color: "#E4405F",
    svgUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
  },
];

const SocialTooltipDemo = () => {
  return (
    <>
      <Head title="Social Media Component Demo" />
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Social Media Component</h1>
            <p className="text-muted-foreground mb-8">
              Hover over the icons to see the tooltips and color animations
            </p>
          </div>
          <SocialTooltip items={socialLinks} />
          <div className="mt-8 text-sm text-muted-foreground">
            <p>Features:</p>
            <ul className="mt-2 space-y-1">
              <li>• Hover animations with color fill</li>
              <li>• Tooltips with custom colors</li>
              <li>• Responsive design</li>
              <li>• Accessible with proper ARIA labels</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialTooltipDemo;
