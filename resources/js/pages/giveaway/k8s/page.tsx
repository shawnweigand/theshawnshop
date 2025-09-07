import EmailCard from "@/components/ui/email-card"
import { Cta4 } from "@/components/ui/cta-4"
import { Feature } from "@/components/ui/feature"
import { Feature1 } from "@/components/ui/feature-1"
import { CTA } from "@/components/ui/call-to-action"
import { HoverLinkDemo } from "@/components/ui/hover-link-demo"
import { MoveRight, PhoneCall, Copy, Check } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "@inertiajs/react"
import { route } from "ziggy-js"

export default function GiveawayPage() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = async (text: string, stepId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [stepId]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [stepId]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

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
      {/* Video Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              8 simple steps to k8s
            </h1>
            <p className="text-lg text-muted-foreground">
              Follow this hands-on guide to get started with your first Kubernetes cluster in just 13 minutes!
            </p>
            <p className="text-lg text-muted-foreground">
              (You can adjust speed in the video settings)
            </p>
          </div>

          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/X049Lo4QAuE"
              width="100%"
              height="100%"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px'
              }}
              allow="autoplay"
              title="Kubernetes Guide Video"
            />
          </div>
        </div>
      </section>

      {/* Code Snippets Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Code Snippets
            </h2>
            <p className="text-lg text-muted-foreground">
              Copy and paste these commands to follow along as you watch the video
            </p>
          </div>

          <div className="space-y-8">


            {/* Step 3 */}
            <div className="bg-background rounded-lg p-4 sm:p-6 border overflow-hidden">
              <h3 className="text-xl font-semibold text-foreground mb-4">Step 3: Start it up</h3>
              <div className="bg-muted p-4 mb-3 rounded-md relative group">
                <code className="text-sm text-foreground">
                  brew install minikube
                </code>
                <button
                  onClick={() => copyToClipboard('brew install minikube', 'step3a')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step3a ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <div className="bg-muted p-4 mb-3 rounded-md relative group">
                <code className="text-sm text-foreground">
                  brew install kubectl
                </code>
                <button
                  onClick={() => copyToClipboard('brew install kubectl', 'step3b')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step3b ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <div className="bg-muted p-4 rounded-md relative group">
                <code className="text-sm text-foreground">
                  minikube start
                </code>
                <button
                  onClick={() => copyToClipboard('minikube start', 'step3c')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step3c ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-background rounded-lg p-4 sm:p-6 border overflow-hidden">
              <h3 className="text-xl font-semibold text-foreground mb-4">Step 4: Namespace</h3>
              <div className="bg-muted p-4 mb-3 rounded-md relative group">
                <code className="text-sm text-foreground">
                  kubectl create namespace shawnshop
                </code>
                <button
                  onClick={() => copyToClipboard('kubectl create namespace shawnshop', 'step4a')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step4a ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <div className="bg-muted p-4 mb-3 rounded-md relative group">
                <code className="text-sm text-foreground">
                  kubectl get namespace
                </code>
                <button
                  onClick={() => copyToClipboard('kubectl get namespace', 'step4b')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step4b ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <div className="bg-muted p-4 rounded-md relative group">
                <code className="text-sm text-foreground">
                  minikube dashboard
                </code>
                <button
                  onClick={() => copyToClipboard('minikube dashboard', 'step4c')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step4c ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-background rounded-lg p-4 sm:p-6 border overflow-hidden">
              <h3 className="text-xl font-semibold text-foreground mb-4">Step 5: Deployment</h3>
              <div className="bg-muted p-4 mb-3 rounded-md relative group">
                <code className="text-sm text-foreground whitespace-pre overflow-x-auto block">
{`kubectl create deployment shawnshop \\
  --image=mcr.microsoft.com/azuredocs/aks-hello-world:v1 \\
  --namespace=shawnshop`}
                </code>
                <button
                  onClick={() => copyToClipboard('kubectl create deployment shawnshop \\\n  --image=mcr.microsoft.com/azuredocs/aks-hello-world:v1 \\\n  --namespace=shawnshop', 'step5')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step5 ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <div className="bg-muted p-4 mb-3 rounded-md relative group">
                <code className="text-sm text-foreground whitespace-pre overflow-x-auto block">
{`kubectl set env deployment/shawnshop TITLE='Welcome to The Shawn Shop!' \\
  --namespace=shawnshop`}
                </code>
                <button
                  onClick={() => copyToClipboard("kubectl set env deployment/shawnshop TITLE='Welcome to The Shawn Shop!' \\\n  --namespace=shawnshop", 'step5')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step5 ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <div className="bg-muted p-4 rounded-md relative group">
                <code className="text-sm text-foreground whitespace-pre overflow-x-auto block">
{`kubectl get deployment shawnshop \\
  --namespace=shawnshop \\
  -o jsonpath='{.spec.template.spec.containers[0].env[*]}'`}
                </code>
                <button
                  onClick={() => copyToClipboard("kubectl get deployment shawnshop \\\n  --namespace=shawnshop \\\n  -o jsonpath='{.spec.template.spec.containers[0].env[*]}'", 'step5')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step5 ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-background rounded-lg p-4 sm:p-6 border overflow-hidden">
              <h3 className="text-xl font-semibold text-foreground mb-4">Step 6: Service</h3>
              <div className="bg-muted p-4 rounded-md relative group">
                <code className="text-sm text-foreground whitespace-pre overflow-x-auto block">
{`kubectl expose deployment shawnshop \\
  --namespace=shawnshop \\
  --type=NodePort \\
  --port=80`}
                </code>
                <button
                  onClick={() => copyToClipboard('kubectl expose deployment shawnshop \\\n  --namespace=shawnshop \\\n  --type=NodePort \\\n  --port=80', 'step6')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step6 ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-background rounded-lg p-4 sm:p-6 border overflow-hidden">
              <h3 className="text-xl font-semibold text-foreground mb-4">Step 7: Check it out!</h3>
              <div className="bg-muted p-4 mb-3 rounded-md relative group">
                <code className="text-sm text-foreground">
                  kubectl proxy
                </code>
                <button
                  onClick={() => copyToClipboard('kubectl proxy', 'step7a')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step7a ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <div className="bg-muted p-4 rounded-md relative group">
                <code className="text-sm text-foreground break-all">
                  http://127.0.0.1:8001/api/v1/namespaces/shawnshop/services/shawnshop:80/proxy/
                </code>
                <button
                  onClick={() => copyToClipboard('http://127.0.0.1:8001/api/v1/namespaces/shawnshop/services/shawnshop:80/proxy/', 'step7b')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copiedStates.step7b ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HoverLinkPreview Demo */}
      <section className="px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <HoverLinkDemo
            title=""
            description=""
            sentences={[
              {
                sentence: "Check out my 30-day roadmap to becoming a Kubernetes expert!",
                links: [
                  {
                    href: route('giveaway.k8s.roadmap'),
                    previewImage: "/images/k8s-roadmap/roadmap1.png",
                    imageAlt: "30-day Kubernetes roadmap - Day 1-5",
                    linkText: "30-day roadmap"
                  }
                ]
              }
            ]}
            instructionText="(Hover over the link above to see the preview)"
          />
        </div>
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
