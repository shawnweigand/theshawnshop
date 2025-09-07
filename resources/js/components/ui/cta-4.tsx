import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const defaultItems = [
  "Easy Integration",
  "24/7 Support",
  "Customizable Design",
  "Scalable Performance",
  "Hundreds of Blocks",
];

export const Cta4 = ({
  title = "Call to Action",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.",
  buttonText = "Get Started",
  buttonUrl = "https://shadcnblocks.com",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <section className="pb-32">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="max-w-6xl">
            <div className="flex flex-col items-start justify-between gap-12 rounded-lg bg-muted px-8 py-16 md:flex-row lg:px-24 lg:py-20">
              <div className="md:w-1/2">
                <h4 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h4>
                <p className="text-lg text-muted-foreground mb-8">{description}</p>
                <Button className="mt-6 text-lg px-8 py-4 h-auto" asChild>
                  <a href={buttonUrl}>
                    {buttonText} <ArrowRight className="size-5" />
                  </a>
                </Button>
              </div>
              <div className="md:w-1/3">
                <ul className="flex flex-col space-y-4 text-base font-medium">
                  {items.map((item, idx) => (
                    <li className="flex items-center" key={idx}>
                      <Check className="mr-4 size-5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
