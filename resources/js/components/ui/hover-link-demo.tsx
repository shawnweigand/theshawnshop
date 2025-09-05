import { HoverLinkPreview } from "@/components/ui/hover-link-preview"

interface LinkConfig {
  href: string;
  previewImage: string;
  imageAlt: string;
  linkText: string;
}

interface SentenceWithLinks {
  sentence: string;
  links: LinkConfig[];
}

interface HoverLinkDemoProps {
  title?: string;
  description?: string;
  sentences: SentenceWithLinks[];
  instructionText?: string;
}

const HoverLinkDemo: React.FC<HoverLinkDemoProps> = ({
  title = "Interactive Link Previews",
  description = "Hover over the links below to see the preview feature in action",
  sentences,
  instructionText = "(Try hovering over the links above)"
}) => {
  const renderSentenceWithLinks = (sentenceWithLinks: SentenceWithLinks, index: number) => {
    const { sentence, links } = sentenceWithLinks;

    // Create a map of link text to link config for easy lookup
    const linkMap = new Map<string, LinkConfig>();
    links.forEach(link => {
      linkMap.set(link.linkText, link);
    });

    // Split the sentence by link texts and create the JSX
    let parts: (string | JSX.Element)[] = [sentence];

    links.forEach((link, linkIndex) => {
      const newParts: (string | JSX.Element)[] = [];

      parts.forEach(part => {
        if (typeof part === 'string') {
          const linkText = link.linkText;
          const linkIndex = part.indexOf(linkText);

          if (linkIndex !== -1) {
            // Split the string around the link text
            const before = part.substring(0, linkIndex);
            const after = part.substring(linkIndex + linkText.length);

            if (before) newParts.push(before);
            newParts.push(
              <HoverLinkPreview
                key={`${index}-${linkIndex}`}
                href={link.href}
                previewImage={link.previewImage}
                imageAlt={link.imageAlt}
              >
                {link.linkText}
              </HoverLinkPreview>
            );
            if (after) newParts.push(after);
          } else {
            newParts.push(part);
          }
        } else {
          newParts.push(part);
        }
      });

      parts = newParts;
    });

    return (
      <div key={index} className="p-10 font-medium text-2xl">
        {parts}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-12 items-center text-center py-16 px-4">
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4 items-center">
        {sentences.map((sentenceWithLinks, index) =>
          renderSentenceWithLinks(sentenceWithLinks, index)
        )}

        <p className="text-muted-foreground text-lg">{instructionText}</p>
      </div>
    </div>
  );
};

export { HoverLinkDemo }
