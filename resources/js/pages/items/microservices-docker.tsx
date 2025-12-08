import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Microservices with Docker',
        href: route('microservices-docker'),
    },
];

export default function MicroservicesDockerPage() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Microservices with Docker" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Microservices with Docker
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn the basics of containers and microservices while building this simple to-do list application.
            </p>
          </div>

          <div className="mb-8 text-center">
            <a
              href="https://medium.com/@theshawnshop/dockerize-your-modern-mern-app-with-microservices-80ae23051913"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg mb-6"
            >
               Code and Article on Medium
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div className="mb-8">
            <div className="bg-card border rounded-lg p-6 shadow-lg">
              <img
                src="/images/microservices-docker/diagram.png"
                alt="Dockerized MERN Application Architecture Diagram"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

