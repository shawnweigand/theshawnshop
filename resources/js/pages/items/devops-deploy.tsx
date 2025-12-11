import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'DevOps Deploy',
        href: route('devops-deploy'),
    },
];

export default function DevOpsDeployPage() {
  const { auth } = usePage<SharedData>().props;
  const [isJoining, setIsJoining] = useState(false);
  const [joinError, setJoinError] = useState<string | null>(null);

  const handleJoinWaitlist = async () => {
    setIsJoining(true);
    setJoinError(null);

    try {
      const response = await fetch(route('devops-deploy.join-waitlist'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
        },
        credentials: 'same-origin',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      // Open Calendly in a new tab
      window.open('https://calendly.com/weigandshawn/30min', '_blank');
    } catch (error) {
      setJoinError(error instanceof Error ? error.message : 'Failed to join waitlist. Please try again.');
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="DevOps Deploy" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              DevOps Deploy
            </h1>
            <p className="text-lg text-muted-foreground">
              Break into the world of DevOps with this comprehensive, 4-week program.
            </p>
            <div className="mt-6">
              <Button
                onClick={handleJoinWaitlist}
                disabled={isJoining}
                size="lg"
                className="text-lg px-8 py-6 cursor-pointer"
              >
                {isJoining ? 'Joining Waitlist...' : 'Book a Call to Join'}
              </Button>
              {joinError && (
                <p className="mt-2 text-sm text-destructive">{joinError}</p>
              )}
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-card border rounded-lg p-6 shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Devops-toolchain.svg/640px-Devops-toolchain.svg.png"
                alt="DevOps Toolchain"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">About This Program</h2>
              <p className="text-muted-foreground mb-4">
                This comprehensive 4-week program is designed to take you from beginner to job-ready in DevOps.
                You'll learn the essential skills needed to deploy, manage, and scale modern applications in production environments.
              </p>
              {/* <p className="text-muted-foreground">
                Whether you're looking to transition into DevOps or level up your current skills, this program provides
                hands-on experience, mentorship, and career support to help you succeed.
              </p> */}
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">4-Week Curriculum</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Week 1: Containerization</h3>
                    <p className="text-muted-foreground text-sm">
                      Master Docker fundamentals, container best practices, and multi-container applications.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Week 2: Kubernetes</h3>
                    <p className="text-muted-foreground text-sm">
                      Learn container orchestration, deployments, services, and managing Kubernetes clusters.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Week 3: Infrastructure as Code</h3>
                    <p className="text-muted-foreground text-sm">
                      Automate infrastructure provisioning with Terraform and manage cloud resources programmatically.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Week 4: CI/CD</h3>
                    <p className="text-muted-foreground text-sm">
                      Build automated pipelines, implement testing strategies, and deploy with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Hands-on projects</li>
                  <li>1:1 mentorship</li>
                  <li>Interview prep</li>
                  <li>Free resources and guides</li>
                  <li>Expert and recruiter guest speakers</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Exclusive group access</li>
                  <li>Resume reviews</li>
                  <li>Certification guides</li>
                  <li>Q&A sessions</li>
                  <li>Live demos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

