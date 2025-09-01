import { Head } from '@inertiajs/react';

export default function Terms() {
  return (
    <>
      <Head title="Terms of Service" />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using The Shawn Shop website and services, you accept and agree to be bound by
                the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software)
                on The Shawn Shop's website for personal, non-commercial transitory viewing only.
              </p>
              <p className="mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="mb-4">
                The materials on The Shawn Shop's website are provided on an 'as is' basis. The Shawn Shop makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
              <p className="mb-4">
                In no event shall The Shawn Shop or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on The Shawn Shop's website, even if The Shawn Shop or
                a The Shawn Shop authorized representative has been notified orally or in writing of the possibility
                of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Accuracy of Materials</h2>
              <p className="mb-4">
                The materials appearing on The Shawn Shop's website could include technical, typographical, or
                photographic errors. The Shawn Shop does not warrant that any of the materials on its website
                are accurate, complete, or current. The Shawn Shop may make changes to the materials contained
                on its website at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Links</h2>
              <p className="mb-4">
                The Shawn Shop has not reviewed all of the sites linked to its website and is not responsible
                for the contents of any such linked site. The inclusion of any link does not imply endorsement
                by The Shawn Shop of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
              <p className="mb-4">
                The Shawn Shop may revise these terms of service for its website at any time without notice.
                By using this website you are agreeing to be bound by the then current version of these Terms
                of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground">
                Email: legal@theshawnshop.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
