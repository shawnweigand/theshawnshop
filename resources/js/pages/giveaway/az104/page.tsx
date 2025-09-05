import { Link } from "@inertiajs/react"
import { route } from "ziggy-js"

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            AZ-104 Study Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these steps to prepare for your Microsoft Certified: Azure Administrator Associate (AZ-104) certification exam.
            Each step includes curated resources to help you master the required skills.
          </p>
        </div>

        {/* Video Section */}
        <section className="pb-16 px-4">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/Ut9iBx6-rZY?si=4Mtr1AhrqLVLpI0a"
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
                title="AZ-104 Study Guide Video"
              />
            </div>
        </section>

        {/* Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Step 1: Learn
                </h3>
                <p className="text-muted-foreground mb-4">
                  Before you start, make sure you have a good understanding of the exam topics. Watch on 2x speed, 15 min per day, and take notes on the areas you need to improve on.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Resources:</p>
                  <ul className="space-y-1">
                    <li>
                      <a href="https://www.youtube.com/watch?v=0Knf9nub4-k" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        AZ-104 Administrator Associate Study Cram v2 by John Savill
                      </a>
                    </li>
                    <li>
                      <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/?practice-assessment-type=certification#certification-prepare-for-the-exam" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Microsoft Azure Administrator Training Course by Microsoft
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Step 2: Practice
                </h3>
                <p className="text-muted-foreground mb-4">
                  Practice answering past or example exam questions. Mark down each one that you get wrong, and review after. 5-10 questions per day, take 2 minute per question.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Resources:</p>
                  <ul className="space-y-1">
                    <li>
                      <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/practice/assessment?assessment-type=practice&assessmentId=21&practice-assessment-type=certification" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Practice Assessment for Exam AZ-104: Microsoft Azure Administrator by Microsoft
                      </a>
                    </li>
                    <li>
                      <a href="https://www.examtopics.com/exams/microsoft/az-104/view/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Microsoft AZ-104 Actual Exam Questions by ExamTopics
                      </a>
                    </li>
                    <li>
                      <a href="https://tutorialsdojo.com/az-104-microsoft-azure-administrator-sample-exam-questions/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        AZ-104 Microsoft Azure Administrator Sample Exam Questions by Tutorials Dojo
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=pE1IU4o1RZQ&t=993s" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Azure Administrator Associate AZ-104 40 Real Exam Questions by DeanCyber
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=WDKuJg93Zsg&t=1394s" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      EP1 - Weekend Exam Cram : AZ-104 | 2025 – Fast-Track Your Prep with Practice Questions & Expert Tips by Tech with Jaspal
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Step 3: Mock Exam
                </h3>
                <p className="text-muted-foreground mb-4">
                  Put your knowledge to the test with a mock exam. Complete in a single sitting. Use a 2 hour timer to simulate the exam. Check for passing after completion (around 70% correct).
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Resources:</p>
                  <ul className="space-y-1">
                    <li>
                      <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/practice/assessment?assessment-type=practice&assessmentId=21&practice-assessment-type=certification" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Practice Assessment for Exam AZ-104: Microsoft Azure Administrator by Microsoft
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Step 4: Hands on!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Getting hands on with the Azure platform is key to success. Create a free Azure account and start practicing. Check out my FREE startup guide for Kubernetes to start building a 6-figure cloud skillet in just 13 minutes.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Resources:</p>
                  <ul className="space-y-1">
                    <li>
                      <a href="https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Azure
                      </a>
                    </li>
                    <li>
                      <a href={route('giveaway.k8s.opt-in')} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        🎁 FREE Kubernetes Startup Guide: 8 simple steps to k8s
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
