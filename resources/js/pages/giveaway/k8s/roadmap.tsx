import { Link } from "@inertiajs/react"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* K8s Roadmap Images */}
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
                    <img
            src="/images/k8s-roadmap/roadmap1.png"
            alt="K8s Roadmap Step 1"
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
          />
          <img
            src="/images/k8s-roadmap/roadmap2.png"
            alt="K8s Roadmap Step 2"
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
          />
          <img
            src="/images/k8s-roadmap/roadmap3.png"
            alt="K8s Roadmap Step 3"
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
          />
          <img
            src="/images/k8s-roadmap/roadmap4.png"
            alt="K8s Roadmap Step 4"
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
          />
          <img
            src="/images/k8s-roadmap/roadmap5.png"
            alt="K8s Roadmap Step 5"
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
          />
          <img
            src="/images/k8s-roadmap/roadmap6.png"
            alt="K8s Roadmap Step 6"
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

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
