import { Head } from '@inertiajs/react';

export default function Cookies() {
  return (
    <>
      <Head title="Cookie Policy" />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your device when you visit our website.
                They help us provide you with a better experience by remembering your preferences and
                analyzing how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Essential Cookies</h3>
                <p className="mb-2">
                  These cookies are necessary for the website to function and cannot be switched off.
                  They are usually only set in response to actions made by you such as setting your
                  privacy preferences, logging in, or filling in forms.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Authentication cookies</li>
                  <li>Security cookies</li>
                  <li>Session management cookies</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Analytics Cookies</h3>
                <p className="mb-2">
                  These cookies allow us to count visits and traffic sources so we can measure and
                  improve the performance of our site. They help us know which pages are the most
                  and least popular.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Google Analytics cookies</li>
                  <li>Performance monitoring cookies</li>
                  <li>User behavior tracking cookies</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Functional Cookies</h3>
                <p className="mb-2">
                  These cookies enable the website to provide enhanced functionality and personalization.
                  They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Language preference cookies</li>
                  <li>Theme preference cookies</li>
                  <li>Form data cookies</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Marketing Cookies</h3>
                <p className="mb-2">
                  These cookies may be set through our site by our advertising partners. They may be
                  used by those companies to build a profile of your interests and show you relevant
                  advertisements on other sites.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Advertising cookies</li>
                  <li>Social media cookies</li>
                  <li>Retargeting cookies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="mb-4">
                Some cookies are placed by third-party services that appear on our pages. We use
                these services to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Analyze website traffic (Google Analytics)</li>
                <li>Provide social media features</li>
                <li>Process payments securely</li>
                <li>Deliver relevant content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
              <p className="mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete them</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li><strong>Third-Party Opt-Out:</strong> Visit third-party websites to opt out of their cookies</li>
              </ul>
              <p className="mb-4">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookie Duration</h2>
              <p className="mb-4">
                Cookies have different lifespans:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
                <li><strong>Third-Party Cookies:</strong> Duration set by the third-party service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices
                or for other operational, legal, or regulatory reasons. We will notify you of any
                material changes by posting the new policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="text-muted-foreground">
                Email: privacy@theshawnshop.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
