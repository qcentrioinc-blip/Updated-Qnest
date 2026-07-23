'use client';

 
import { H1, H4, P, } from '../../styles/Typography';
import AINavbar from './Navbar/AINavbar';

const sections = [
  { id: 'collect', title: 'The Information We Collect' },
  { id: 'process', title: 'How We Use Your Information' },
  { id: 'legal', title: 'The “Read-Only” Assurance' },
  { id: 'share', title: 'Data Security & Retention' },
  // { id: 'cookies', title: 'Do We Use Cookies?' },
  { id: 'international', title: 'Sharing of Information' },
  { id: 'retain', title: 'Your Rights (CCPA/GDPR)' },
  { id: 'secure', title: 'How Do We Keep Your Information Safe?' },
  { id: 'minors', title: 'Children’s Privacy' },
  { id: 'rights', title: 'What Are Your Privacy Rights?' },
  { id: 'dnt', title: 'Changes to this Policy' },
  { id: 'terms', title: 'Terms and Conditions' },

{ id: 'terms-acceptance', title: '1. Acceptance of Terms' },
{ id: 'terms-description', title: '2. Description of Service' },
{ id: 'terms-access', title: '3. Access Requirements' },
{ id: 'terms-savings', title: '4. Savings & Financial Performance' },
{ id: 'terms-ip', title: '5. Intellectual Property' },
{ id: 'terms-fees', title: '6. Fees and Payment' },
{ id: 'terms-confidentiality', title: '7. Confidentiality' },
{ id: 'terms-termination', title: '8. Term and Termination' },
{ id: 'terms-disclaimer', title: '9. Disclaimer of Warranties' },
{ id: 'terms-liability', title: '10. Limitation of Liability' },
{ id: 'terms-governing', title: '11. Governing Law' },
{ id: 'terms-contact', title: '12. Contact' },
{ id: 'cookie-policy',  title: 'Cookie Policy for Qnest Global' },
{ id: 'cookie-what',    title: '1. What are Cookies?' },
{ id: 'cookie-how',     title: '2. How We Use Cookies' },
{ id: 'cookie-control', title: '3. Your Control' },
{ id: 'cookie-dnt',     title: '4. Do-Not-Track Signals' },
{ id: 'cookie-contact', title: '5. Contact' },
];

export default function PrivacyPolicyAI() {
  return (
    <>
    <AINavbar/>
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0B2A4A] via-[#0E3561] to-[#0B2A4A]">
  
  {/* Geometric overlay */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_60%)]" />
  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.04)_50%,transparent_60%)]" />

  <div className="relative z-10 mx-auto max-w-7xl  px-4 xl:px-6 py-28 text-center text-white">
    <H1 className="my-10 text-white text-5xl md:text-6xl font-semibold tracking-tight">
      Privacy Policy
    </H1>

    <P className="mx-auto max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
     Qnest Global provides the CloudDIET platform, an AI-driven cloud financial optimization service. We are committed to protecting your data. This Privacy Policy describes how we handle information when you use our Platform and website. 
    </P>

    {/* CTA Buttons */}
    <div className="mt-10 flex flex-wrap font-quicksand items-center justify-center gap-4">
      <a
        href="/industries/cloud-finops-ai"
        className="inline-flex  h-12 items-center justify-center rounded-lg bg-blue-500 px-8 text-base font-semibold text-white transition hover:bg-blue-600"
      >
       Cloud Finops AI
      </a>

      <a
        href="https://clouddiet.ai/book-demo"
        className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
      >
        Book a demo
      </a>
    </div>
  </div>
</section>
    <section className="w-full bg-white    py-10 text-gray-800">
      <div className=" max-w-8xl xl:px-10 px-4 xl:mx-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          
          {/* MAIN CONTENT */}
          <article className="prose space-y-6 prose-gray max-w-none">
            <H1 className=''>Privacy Policy</H1>
            <P className="text-sm text-gray-500">
              Last updated: October 12, 2023
            </P>

            <P>
            Qnest Global provides the CloudDIET platform, an AI-driven cloud financial optimization service. We are committed to protecting your data. This Privacy Policy describes how we handle information when you use our Platform and website. 
            </P>

            <section className="scroll-mt-24"  id="collect ">
              <H4 className=' my-4'>The Information We Collect</H4>
              <P>
              Unlike traditional cloud management tools, Qnest Global operates on a strict “No Data Access” principle. We never access, read, or store the actual content of your databases, files, applications, or customer records. 
              </P>
              <P>To optimize your cloud infrastructure, we analyze only Metadata. This includes: </P>
              <P>Billing Metadata: Invoice line items, reserved instance details, savings plan data, and usage meters. </P>
              <P>Configuration Metadata: Resource names, SKU identifiers, regions, tags, scaling settings, and provisioning states. </P>
              <P>Usage Metrics: CPU utilization, network throughput, and I/O operations (excluding the actual data being processed). </P>
              <P>User-Provided Information: We may collect personal information (such as name, email address, and billing address) when you create an account, request a demo, or contact support. </P>
            </section>

            <section className="scroll-mt-24"  id="process ">
              <H4 className=' my-4'> How We Use Your Information</H4>
              <P>
              How We Use Your Information 
              </P>
              <ul className="list-disc list-inside    py-4">
                <li className='text-[18px] font-quicksand '>Profi le your cloud resources to identify misconfigurations and waste. </li>
                <li className='text-[18px] font-quicksand '>Generate accurate savings recommendations (e.g., identifying idle resources or improper SKUs). </li>
                <li className='text-[18px] font-quicksand '>Provide dashboards and reporting on cost trends. </li>
                <li className='text-[18px] font-quicksand '>Improve our AI algorithms (anonymously and in aggregate). </li>
              </ul>
            </section>

            <section className="scroll-mt-24"  id="legal"> 
              <H4 className=' my-4'>The “Read-Only” Assurance</H4>
              <P>
                We utilize Azure RBAC (Role-Based Access Control) with the principle of least privilege. Our access is strictly scoped to the management plane (Reader, Billing Reader). We have zero capability to write, modify, or delete your cloud resources or data. 
              </P>
            </section>

            <section className="scroll-mt-24"  id="share"> 
              <H4 className=' my-4'>Data Security & Retention</H4>
              <P> <span className='font-bold '>Encryption:</span> All metadata is encrypted at rest (AES-256) and in transit (TLS 1.2+). </P>
              
              <P> <span className='font-bold '>Isolation:</span>  Your data is logically isolated from other customers.  </P>
              <P> <span className='font-bold '>Retention:</span>   We retain analytics data only as long as necessary to fulfill our service agreement. You may request data purging at any time. </P>
              <P>
               No 100% Security: While we implement industry-standard security measures, no method of transmission over the internet is 100% secure. 
              </P>
            </section>

            <section className="scroll-mt-24"  id="cookies ">
              <H4 className=' my-4'>Sharing of Information</H4>
              <P>
               We do not sell your personal information. We may share data: </P>

<P>With Service Providers: Trusted third parties who assist in hosting or analytics (e.g., Google Analytics for website usage). </P>

<P>Legal Compliance: If required by law, court order, or to defend our legal rights. 
              </P>
            </section>

            <section className="scroll-mt-24"  id="interna tional">
              <H4 className=' my-4'>Your Rights (CCPA/GDPR)</H4>
              <P>
               Depending on your jurisdiction (e.g., California, EU, UK), you may have the right to: 
              </P>
              <ul className="list-disc list-inside  py-4">
                <li className='text-[18px] font-quicksand '>Access the personal information we hold. . </li>
                <li className='text-[18px] font-quicksand '>Request correction or deletion of your data.  </li>
                <li className='text-[18px] font-quicksand '>Opt out of any processing (though this may limit our ability to optimize your cloud).  </li>
              </ul>
              <P>To exercise these rights, contact us at privacy@qnestglobal.com. </P>
            </section>

            <section className="scroll-mt-24"  id="retain" >
              <H4 className=' my-4'> International Transfers</H4>
              <P>
              Your metadata may be processed on servers located in the United States or other regions where we operate. We ensure appropriate safeguards are in place for cross-border data transfers. 
              </P>
            </section>

            <section className="scroll-mt-24"  id="secure" >
              <H4 className=' my-4'>How Do We Keep Your Information Safe?</H4>
              <P>
                We implement organizational and technical security measures to
                protect your personal data. However, no method is 100% secure.
              </P>
            </section>

            <section className="scroll-mt-24"  id="minors" >
              <H4 className=' my-4'>Children’s Privacy</H4>
              <P>
               Our services are for business use only and are not intended for individuals under 18. 
              </P>
            </section>

            <section className="scroll-mt-24"  id="rights" >
              <H4 className=' my-4'>What Are Your Privacy Rights?</H4>
              <P>
                Depending on your location, you may have rights to access,
                correct, or delete your personal information.
              </P>
            </section>

            <section className="scroll-mt-24"  id="dnt">
               <H4 className=' my-4'>Changes to this Policy</H4>
              <P>
               We may update this policy periodically. The “Last Updated” date will reflect changes. 
              </P>
            </section>
              <section  id="cookie- policy" className="  scroll-mt-24  ">
              <H1 className=" mt-16 mb-2 text-3xl font-semibold">Cookie Policy for Qnest Global</H1>
              <P className="text-sm text-gray-500">Effective Date: [Insert Date]</P>
              <P>
                This Cookie Policy explains how Qnest Global uses cookies and similar tracking
                technologies on our website and within the CloudDIET platform.
              </P>

              {/* 1 */}
              <section className="scroll-mt-24"  id="cookie- what">
                <H4 className=" my-4">1. What are Cookies?</H4>
                <P>
                  Cookies are small text files stored on your device that help websites function
                  efficiently and provide analytics.
                </P>
              </section>

              {/* 2 */}
              <section className="scroll-mt-24"  id="cookie- how">
                <H4 className=" my-4">2. How We Use Cookies</H4>
                <P>
                  We use cookies to enhance security, analyze site traffic, and remember user
                  preferences for our dashboard.
                </P>

                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-100   ">
                        <th className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-left font-semibold text-gray-800 ">
                          Category
                        </th>
                        <th className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-left font-semibold text-gray-800 ">
                          Purpose
                        </th>
                        <th className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-left font-semibold text-gray-800 ">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="even:bg-gray-50  ">
                        <td className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-gray-700 font-medium align-top">
                          Strictly Necessary
                        </td>
                        <td className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-gray-600  -400 align-top">
                          Essential for logging into the secure CloudDIET portal and navigating the
                          site (e.g., session IDs).
                        </td>
                        <td className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-gray-600  -400 align-top whitespace-nowrap">
                          Session / Persistent
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50  ">
                        <td className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-gray-700 font-medium align-top">
                          Performance / Analytics
                        </td>
                        <td className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-gray-600  -400 align-top">
                          We use Google Analytics to count visits and see which parts of our
                          marketing site are most popular. This helps us improve our content.
                        </td>
                        <td className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-gray-600  -400 align-top">
                          Persistent
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50  ">
                        <td className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-gray-700 font-medium align-top">
                          Functionality
                        </td>
                        <td className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-gray-600  -400 align-top">
                          Remembers your login details and interface preferences so you don't have
                          to re-enter them.
                        </td>
                        <td className="border border-gray-300 font-quicksand text-[18px]   px-4 py-3 text-gray-600  -400 align-top">
                          Persistent
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 3 */}
              <section className="scroll-mt-24"  id="cookie- control">
                <H4 className=" my-4">3. Your Control</H4>
                <P>
                  Most web browsers allow you to control cookies through their settings. However,
                  disabling Strictly Necessary cookies may prevent you from logging into the
                  CloudDIET optimization platform.
                </P>
              </section>

              {/* 4 */}
              <section className="scroll-mt-24"  id="cookie- dnt">
                <H4 className=" my-4">4. Do-Not-Track Signals</H4>
                <P>
                  Our website does not currently respond to "Do-Not-Track" signals because no
                  uniform standard has been adopted.
                </P>
              </section>

              {/* 5 */}
              <section className="scroll-mt-24"  id="cookie- contact">
                <H4 className=" my-4">5. Contact</H4>
                <P>
                  For cookie-related inquiries, please email{' '}
                  <a href="mailto:support@qnestglobal.com" className="text-blue-600 hover:underline">
                    support@qnestglobal.com
                  </a>
                </P>
              </section>
            </section>
              <section   id="terms"   className="   scroll-mt-24  ">
              <H1 className=" mt-16 mb-2 text-3xl font-semibold">Terms and Conditions</H1>
              <P className="text-sm text-gray-500">Last Updated: [15-04-2026]</P>

              {/* 1 */}
              <section className="scroll-mt-24"  id="terms-a cceptance">
                <H4 className=" my-4">1. Acceptance of Terms</H4>
                <P>
                  These Terms and Conditions (<strong>"Agreement"</strong>) govern your access to and use of the Qnest
                  Global CloudDIET platform (<strong>"Service"</strong>). By signing a Service Order or accessing the
                  Platform, you (<strong>"Customer"</strong>) agree to be bound by this Agreement.
                </P>
              </section>

              {/* 2 */}
              <section className="scroll-mt-24"  id="terms-d escription">
                <H4 className=" my-4">2. Description of Service</H4>
                <P>
                  CloudDIET is an AI-driven Cloud FinOps engine. The Service profiles Customer's cloud environment
                  (AWS, Azure, GCP) by analyzing configuration metadata and billing data only. Qnest Global does not
                  access Customer workloads, files, or databases.
                </P>
              </section>

              {/* 3 */}
              <section className="scroll-mt-24"  id="terms-a ccess">
                <H4 className=" my-4">3. Access Requirements (Read-Only)</H4>
                <P>Customer must provide Qnest Global with a Read-Only Service Principal and User Account.</P>
                <P>
                  Customer warrants that the credentials provided adhere to the principle of least privilege (e.g.,
                  Azure RBAC: Reader, Billing Reader).
                </P>
                <P>
                  Qnest Global shall have no liability for any data breach or corruption resulting from the Customer
                  providing credentials with excessive write/delete permissions beyond the requested scope.
                </P>
              </section>

              {/* 4 */}
              <section className="scroll-mt-24"  id="terms-s avings">
                <H4 className=" my-4">4. Savings & Financial Performance</H4>
                <ul className="list-disc list-inside  py-4">
                  <li className="text-[18px] font-quicksand">
                    <strong>Pay-for-Performance Model:</strong> Unless otherwise agreed in a Service Order, Qnest
                    Global charges a percentage of the verified "Realized Savings."
                  </li>
                  <li className="text-[18px] font-quicksand">
                    <strong>Estimation:</strong> Initial savings estimates (e.g., "Potential Savings of 30%") are
                    projections based on profiling data and are not guarantees of actual refunds or credits.
                  </li>
                  <li className="text-[18px] font-quicksand">
                    <strong>Implementation:</strong> Customer retains final approval over all optimization
                    recommendations. Qnest Global is not liable for service interruption if the customer implements
                    changes outside of recommended maintenance windows.
                  </li>
                </ul>
              </section>

              {/* 5 */}
              <section className="scroll-mt-24"  id="terms-i p">
                <H4 className=" my-4">5. Intellectual Property</H4>
                <P>
                  <strong>Our IP:</strong> The CloudDIET platform, profiling engines, algorithms, and recommendation
                  logic are the exclusive property of Qnest Global.
                </P>
                <P>
                  <strong>Your Data:</strong> Customer retains all ownership of their metadata and configuration data.
                  Qnest Global has a license to use this data solely to perform the Service.
                </P>
              </section>

              {/* 6 */}
              <section className="scroll-mt-24"  id="terms-f ees">
                <H4 className=" my-4">6. Fees and Payment</H4>
                <ul className="list-disc list-inside  py-4">
                  <li className="text-[18px] font-quicksand">
                    <strong>Setup & Baseline Fees:</strong> Fees for the initial 6-week profiling period are due as
                    outlined in the Order Form.
                  </li>
                  <li className="text-[18px] font-quicksand">
                    <strong>Success Fees:</strong> Savings-based fees are invoiced monthly/quarterly based on the
                    difference between the baseline spend and the actual optimized spend.
                  </li>
                  <li className="text-[18px] font-quicksand">
                    <strong>Taxes:</strong> Fees do not include applicable taxes, which are the responsibility of the
                    customer.
                  </li>
                </ul>
              </section>

              {/* 7 */}
              <section className="scroll-mt-24"  id="terms-c onfidentiality">
                <H4 className=" my-4">7. Confidentiality</H4>
                <P>
                  Each party agrees to hold the other's Confidential Information (including pricing, savings data, and
                  internal architecture) in confidence and to use it solely for the purposes of this Agreement.
                </P>
              </section>

              {/* 8 */}
              <section className="scroll-mt-24"  id="terms-t ermination">
                <H4 className=" my-4">8. Term and Termination</H4>
                <ul className="list-disc list-inside  py-4">
                  <li className="text-[18px] font-quicksand">
                    <strong>Term:</strong> This Agreement begins on the Effective Date and continues for the Initial
                    Term specified in the Order Form (e.g., 12 months).
                  </li>
                  <li className="text-[18px] font-quicksand">
                    <strong>Termination for Cause:</strong> Either party may terminate for material breach if the
                    breach remains uncured for 30 days following written notice.
                  </li>
                  <li className="text-[18px] font-quicksand">
                    <strong>Effect of Termination:</strong> Upon termination, Qnest Global will delete all customer
                    metadata within 90 days unless retention is required by law.
                  </li>
                </ul>
              </section>

              {/* 9 */}
              <section className="scroll-mt-24"  id="terms-d isclaimer">
                <H4 className=" my-4">9. Disclaimer of Warranties</H4>
                <P>
                  The service is provided <strong>"as is"</strong> and <strong>"as available."</strong> While we
                  strive for accuracy, Qnest Global does not warrant that the optimization recommendations will be
                  error-free or that all waste will be identified. Cloud providers (AWS, Azure, GCP) may change
                  pricing or SKUs, and we are not responsible for such external changes.
                </P>
              </section>

              {/* 10 */}
              <section className="scroll-mt-24"  id="terms-l iability">
                <H4 className=" my-4">10. Limitation of Liability</H4>
                <P>
                  To the maximum extent permitted by law, Qnest Global shall not be liable for any indirect,
                  incidental, special, or consequential damages, including lost profits or data loss. Our total
                  liability for any claim arising out of this agreement shall not exceed the fees paid by the customer
                  to Qnest Global in the <strong>three (3) months</strong> preceding the claim.
                </P>
              </section>

              {/* 11 */}
              <section className="scroll-mt-24"  id="terms-g overning">
                <H4 className=" my-4">11. Governing Law</H4>
                <P>
                  This Agreement shall be governed by the laws of{' '}
                  <strong>[Your State/Country, e.g., Delaware]</strong>, without regard to conflict of laws
                  principles.
                </P>
              </section>

              {/* 12 */}
              <section className="scroll-mt-24"  id="terms-c ontact">
                <H4 className=" my-4">12. Contact</H4>
                <P>
                  For legal notices, please contact us at{' '}
                  <a href="mailto:legal@qnestglobal.com" className="text-blue-600 hover:underline">
                    legal@qnestglobal.com
                  </a>
                </P>
              </section>
            </section>
          </article>

          {/* TABLE OF CONTENTS */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-gray-200 p-6">
              <H4 className="mb-4   text-sm font-semibold text-gray-900">
                TABLE OF CONTENTS
              </H4>
              <ul className="space-y-3 text-sm">
                {sections.map(section => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-blue-600 hover:text-blue-800 font-quicksand text-[18px] transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>
      </div>
       
    
    </section>
 

 
    </>
  );
}
