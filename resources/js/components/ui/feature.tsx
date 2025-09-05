import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeatureProps {
  badgeText?: string;
  title?: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
  imageSrc?: string;
  imageAlt?: string;
}

function Feature({
  badgeText = "Platform",
  title = "Something new!",
  description = "Managing a small business today is already tough.",
  features = [
    {
      title: "Easy to use",
      description: "We've made it easy to use and understand."
    },
    {
      title: "Fast and reliable",
      description: "We've made it fast and reliable."
    },
    {
      title: "Beautiful and modern",
      description: "We've made it beautiful and modern."
    }
  ],
  imageSrc,
  imageAlt = "Feature showcase"
}: FeatureProps) {
  return (
    <div className="w-full pt-8 lg:pt-16 pb-20 lg:pb-40">
      <div className="container mx-auto max-w-[1400px] px-2 md:px-4">
        <div className="grid border rounded-lg container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">{badgeText}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  {title}
                </h2>
                <p
                  className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left"
                  dangerouslySetInnerHTML={{ __html: description || '' }}
                />
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{feature.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square">
            {imageSrc && (
              <img
                src={imageSrc}
                alt={imageAlt}
                // className="w-full h-full object-cover rounded-md"
                className="w-full h-full object-cover object-bottom rounded-md"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
