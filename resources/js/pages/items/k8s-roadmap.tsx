import { Link } from "@inertiajs/react"
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'K8s Roadmap',
        href: route('k8s-roadmap'),
    },
];

export default function RoadmapPage() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="K8s Roadmap" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
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
      </div>
    </AppLayout>
  )
}

