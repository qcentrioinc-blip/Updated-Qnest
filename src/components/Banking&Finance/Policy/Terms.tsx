'use client';
 
import { H1, H4, P } from "../../../styles/Typography";
import BNFNav from "../Navbar/BNFnav";
import ContactUS from "../ProductRemitree/ContactUS";
import NewOneFooter from "../ProductRemitree/NewOneFooter";
 
const sections = [
  { id: 'collect', title: 'What Information Do We Collect?' },
  { id: 'process', title: 'How Do We Process Your Information?' },
  { id: 'legal', title: 'What Legal Bases Do We Rely On?' },
  { id: 'share', title: 'When and With Whom Do We Share Information?' },
  { id: 'cookies', title: 'Do We Use Cookies and Tracking Technologies?' },
  { id: 'financial', title: 'How Do We Handle Financial Data?' },
  { id: 'international', title: 'Is Your Information Transferred Internationally?' },
  { id: 'retain', title: 'How Long Do We Keep Your Information?' },
  { id: 'secure', title: 'How Do We Keep Your Information Safe?' },
  { id: 'minors', title: 'Do We Collect Information From Minors?' },
  { id: 'rights', title: 'What Are Your Privacy Rights?' },
  { id: 'regulatory', title: 'Regulatory Compliance & Disclosures' },
  { id: 'dnt', title: 'Controls for Do-Not-Track Features' },
  { id: 'contact', title: 'How Can You Contact Us?' },
];
 
export default function Terms() {
  return (
    <>
    <BNFNav/>
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0B2A4A] via-[#0E3561] to-[#0B2A4A]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.04)_50%,transparent_60%)]" />
 
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 text-center text-white">
          <H1 className="mb-6 mt-24 text-white text-5xl md:text-6xl font-semibold tracking-tight">
        Terms and Conditions
          </H1>
          <P className="mx-auto max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
            At Qnest Banking Solutions, your privacy and the security of your financial information are our highest priorities. This policy explains how we collect, use, and protect your personal and financial data in compliance with applicable banking regulations.
          </P>
          <div className="mt-10 flex flex-wrap font-quicksand items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-500 px-8 text-base font-semibold text-white transition hover:bg-blue-600"
            >
              Contact Us
            </a>
            <a
              href="/industries/banking-and-finance"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>
 
      {/* Content */}
      <section className="w-full bg-white dark:bg-gray-900 text-gray-800">
        <div className="max-w-8xl  px-4 xl:px-10 xl:mx-10 py-6 xl:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
 
            {/* MAIN CONTENT */}
            <article className="prose space-y-8 prose-gray max-w-none">
              <H1 className="dark:text-white">Terms and Conditions</H1>
              <P className="text-sm text-gray-500">Last updated: February 1, 2026</P>
 
              <P className="mb-2">
                Qnest Banking Solutions ("we," "us," or "our") is committed to protecting the privacy and security of your personal and financial information. This Terms and Conditions describes how we collect, use, disclose, and safeguard information obtained through our banking platforms, mobile applications, websites, and related financial services (collectively, the "Services"). By using our Services, you agree to the terms of this Terms and Conditions. If you do not agree, please discontinue use of our Services immediately.
              </P>
 
              <P className="mb-2">
                This policy applies to all customers, including individuals, businesses, credit unions, banks, and financial institutions that access or use our platforms. We operate in compliance with applicable financial privacy laws, including but not limited to the Gramm-Leach-Bliley Act (GLBA), the General Data Protection Regulation (GDPR) where applicable, and other regional data protection regulations.
              </P>
 
              {/* 1 */}
              <section id="collect">
                <H4 className="my-4 dark:text-white">1. What Information Do We Collect?</H4>
                <P className="mb-2">
                  We collect several categories of information to provide and improve our banking and financial services:
                </P>
                <P className="mb-2"><strong>Personal Identification Information:</strong> Full legal name, date of birth, government-issued identification numbers (such as national ID, passport, or tax identification number), residential address, email address, and phone number.</P>
                <P className="mb-2"><strong>Financial Information:</strong> Bank account numbers, routing numbers, credit and debit card details, transaction history, loan details, credit scores, income and employment information, asset and liability disclosures, and investment portfolios.</P>
                <P className="mb-2"><strong>KYC / AML Data:</strong> As required by anti-money laundering (AML) regulations and Know Your Customer (KYC) obligations, we collect identity verification documents, source-of-funds declarations, beneficial ownership information, and politically exposed person (PEP) status.</P>
                <P className="mb-2"><strong>Device and Technical Information:</strong> IP address, browser type, operating system, device identifiers, session tokens, and login timestamps collected when you access our digital platforms.</P>
                <P className="mb-2"><strong>Behavioral and Usage Data:</strong> Pages visited, features used, transaction patterns, login frequency, and interaction logs within our applications.</P>
                <P className="mb-2"><strong>Communications:</strong> Records of communications you have with our customer support teams, compliance officers, or through in-app messaging, including call recordings where required by regulation.</P>
              </section>
 
              {/* 2 */}
              <section id="process">
                <H4 className="my-4 dark:text-white">2. How Do We Process Your Information?</H4>
                <P className="mb-2">We process your information for the following purposes:</P>
                <P className="mb-2"><strong>Service Delivery:</strong> To open and manage accounts, process payments and transfers, originate and service loans, facilitate reconciliation, and provide all core banking functionalities.</P>
                <P className="mb-2"><strong>Compliance and Regulatory Obligations:</strong> To fulfill obligations under financial regulations including GLBA, AML/KYC rules, FATCA, CRS, and other applicable laws. This includes transaction monitoring, suspicious activity reporting (SAR), and regulatory audit trails.</P>
                <P className="mb-2"><strong>Risk Management:</strong> To assess creditworthiness, detect and prevent fraud, evaluate counterparty risk, and monitor for unusual account activity or potential financial crime.</P>
                <P className="mb-2"><strong>Customer Support:</strong> To respond to queries, resolve disputes, and assist with account management.</P>
                <P className="mb-2"><strong>Service Improvement:</strong> To analyze usage trends, improve platform features, conduct internal research, and develop new financial products tailored to your needs.</P>
                <P className="mb-2"><strong>Marketing (with consent):</strong> Where you have provided explicit consent, we may send communications about new products, offers, and financial insights. You may opt out at any time.</P>
              </section>
 
              {/* 3 */}
              <section id="legal">
                <H4 className="my-4 dark:text-white">3. What Legal Bases Do We Rely On?</H4>
                <P className="mb-2">Depending on your jurisdiction, we process personal data under the following legal bases:</P>
                <P className="mb-2"><strong>Contractual Necessity:</strong> Processing is required to fulfill our obligations under the agreement you have with us, including account opening, payment processing, and loan servicing.</P>
                <P className="mb-2"><strong>Legal Obligation:</strong> We are required by law to process certain data for regulatory compliance, including mandatory reporting to financial regulators, tax authorities, and law enforcement agencies.</P>
                <P className="mb-2"><strong>Legitimate Interests:</strong> We process data to protect against fraud, ensure platform security, improve our services, and manage operational risk — provided these interests are not overridden by your rights.</P>
                <P className="mb-2"><strong>Consent:</strong> For marketing communications, optional data collection, and certain profiling activities, we rely on your explicit consent, which you may withdraw at any time without affecting prior processing.</P>
                <P className="mb-2"><strong>Vital Interests / Public Task:</strong> In limited circumstances, we may process data to protect vital interests or fulfill tasks carried out in the public interest as required by applicable law.</P>
              </section>
 
              {/* 4 */}
              <section id="share">
                <H4 className="my-4 dark:text-white">4. When and With Whom Do We Share Information?</H4>
                <P className="mb-2">We do not sell your personal or financial information to third parties. We may share your information in the following circumstances:</P>
                <P className="mb-2"><strong>Regulated Financial Networks:</strong> With payment networks (e.g., SWIFT, ACH, card networks), correspondent banks, and clearing houses as necessary to process transactions.</P>
                <P className="mb-2"><strong>Regulatory and Government Authorities:</strong> With financial regulators, central banks, tax authorities, law enforcement, and courts where required by applicable law, court order, or regulatory mandate.</P>
                <P className="mb-2"><strong>Third-Party Service Providers:</strong> With vetted technology partners, cloud infrastructure providers, identity verification services, and audit firms who process data strictly on our behalf under binding data processing agreements.</P>
                <P className="mb-2"><strong>Credit Bureaus and Rating Agencies:</strong> With credit reference agencies for creditworthiness assessments and to report repayment history as required or permitted by law.</P>
                <P className="mb-2"><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to equivalent privacy protections.</P>
                <P className="mb-2"><strong>With Your Consent:</strong> We may share information with third parties where you have given explicit consent, such as open banking integrations or third-party financial applications.</P>
              </section>
 
              {/* 5 */}
              <section id="cookies">
                <H4 className="my-4 dark:text-white">5. Do We Use Cookies and Tracking Technologies?</H4>
                <P className="mb-2">
                  Yes. We use cookies, web beacons, session tokens, and similar technologies across our web and mobile platforms. These are used for:
                </P>
                <P className="mb-2"><strong>Essential Cookies:</strong> Required for secure login sessions, fraud detection, and core platform functionality. These cannot be disabled.</P>
                <P className="mb-2"><strong>Performance Cookies:</strong> Help us understand how users interact with our platform so we can improve user experience and system performance.</P>
                <P className="mb-2"><strong>Functional Cookies:</strong> Remember your preferences, such as language settings and dashboard configurations.</P>
                <P className="mb-2"><strong>Analytics Cookies:</strong> Collect aggregated data on usage patterns. You may opt out of non-essential analytics cookies through our Cookie Preferences Centre.</P>
                <P className="mb-2">You can manage cookie preferences at any time through your browser settings or our in-platform Cookie Preferences Centre. Note that disabling essential cookies may impair the security and functionality of your account.</P>
              </section>
 
              {/* 6 */}
              <section id="financial">
                <H4 className="my-4 dark:text-white">6. How Do We Handle Financial Data?</H4>
                <P className="mb-2">
                  Financial data is treated with the highest level of sensitivity and is subject to additional safeguards beyond standard personal data:
                </P>
                <P className="mb-2"><strong>Encryption:</strong> All financial data is encrypted in transit using TLS 1.2 or higher and at rest using AES-256 encryption.</P>
                <P className="mb-2"><strong>Tokenization:</strong> Card and account numbers are tokenized to minimize exposure in our systems.</P>
                <P className="mb-2"><strong>Access Controls:</strong> Financial data is accessible only to authorized personnel on a strict need-to-know basis, enforced through role-based access controls (RBAC) and multi-factor authentication (MFA).</P>
                <P className="mb-2"><strong>Transaction Monitoring:</strong> All transactions are subject to real-time monitoring for fraud, unusual activity, and AML compliance. Flagged transactions may be reviewed by our compliance team and reported to authorities as required.</P>
                <P className="mb-2"><strong>Audit Trails:</strong> Complete, tamper-evident audit logs of all financial transactions and data access events are maintained for regulatory compliance and dispute resolution.</P>
              </section>
 
              {/* 7 */}
              <section id="international">
                <H4 className="my-4 dark:text-white">7. Is Your Information Transferred Internationally?</H4>
                <P className="mb-2">
                  As a financial services provider operating across multiple jurisdictions, your information may be transferred to, and processed in, countries other than your country of residence. This includes transfers required to process international payments, comply with cross-border regulatory obligations (such as FATCA and CRS), and operate our cloud infrastructure.
                </P>
                <P className="mb-2">
                  Where data is transferred outside your jurisdiction, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by relevant authorities, adequacy decisions, or binding corporate rules. For transfers from the European Economic Area (EEA), we comply fully with GDPR Chapter V requirements.
                </P>
              </section>
 
              {/* 8 */}
              <section id="retain">
                <H4 className="my-4 dark:text-white">8. How Long Do We Keep Your Information?</H4>
                <P className="mb-2">
                  We retain personal and financial information for as long as necessary to fulfill the purposes for which it was collected, and to comply with applicable legal, regulatory, and contractual obligations. Specific retention periods include:
                </P>
                <P className="mb-2"><strong>Account and Transaction Records:</strong> Retained for a minimum of 7 years after account closure, as required by most financial regulatory frameworks.</P>
                <P className="mb-2"><strong>KYC / AML Records:</strong> Retained for a minimum of 5–10 years depending on jurisdiction, as required by anti-money laundering regulations.</P>
                <P className="mb-2"><strong>Communication Records:</strong> Call recordings and written communications retained for up to 7 years for regulatory compliance and dispute resolution.</P>
                <P className="mb-2"><strong>Marketing Data:</strong> Retained until you withdraw consent or request deletion, subject to any overriding legal retention requirements.</P>
                <P className="mb-2">Upon expiration of applicable retention periods, data is securely deleted or anonymized in accordance with our data lifecycle management policy.</P>
              </section>
 
              {/* 9 */}
              <section id="secure">
                <H4 className="my-4 dark:text-white">9. How Do We Keep Your Information Safe?</H4>
                <P className="mb-2">
                  We implement comprehensive technical and organizational security measures aligned with industry standards including ISO 27001, SOC 2 Type II, and PCI-DSS where applicable:
                </P>
                <P className="mb-2"><strong>Infrastructure Security:</strong> Our platforms are hosted in SOC 2-certified data centres with physical access controls, redundant systems, and 24/7 monitoring.</P>
                <P className="mb-2"><strong>Application Security:</strong> Regular penetration testing, vulnerability assessments, and secure software development lifecycle (SDLC) practices are employed.</P>
                <P className="mb-2"><strong>Identity and Access:</strong> Multi-factor authentication, privileged access management (PAM), and zero-trust network architecture protect all access to production systems.</P>
                <P className="mb-2"><strong>Incident Response:</strong> We maintain a documented incident response plan. In the event of a data breach affecting your rights, we will notify you and relevant regulators within the timeframes required by applicable law.</P>
                <P className="mb-2">Despite our robust measures, no system is entirely immune to risk. We encourage you to use strong, unique passwords and to contact us immediately if you suspect unauthorized access to your account.</P>
              </section>
 
              {/* 10 */}
              <section id="minors">
                <H4 className="my-4 dark:text-white">10. Do We Collect Information From Minors?</H4>
                <P className="mb-2">
                  Our Services are intended for individuals who are 18 years of age or older, or the minimum age of majority in their jurisdiction. We do not knowingly collect, process, or store personal data from minors without verified parental or guardian consent.
                </P>
                <P className="mb-2">
                  Certain products (such as youth savings accounts) may be offered with explicit parental consent and appropriate safeguards. If you believe we have inadvertently collected data from a minor without appropriate consent, please contact us immediately at privacy@Qnest.com and we will take prompt corrective action.
                </P>
              </section>
 
              {/* 11 */}
              <section id="rights">
                <H4 className="my-4 dark:text-white">11. What Are Your Privacy Rights?</H4>
                <P className="mb-2">Depending on your jurisdiction, you may have the following rights regarding your personal data:</P>
                <P className="mb-2"><strong>Right of Access:</strong> Request a copy of the personal and financial data we hold about you.</P>
                <P className="mb-2"><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</P>
                <P className="mb-2"><strong>Right to Erasure:</strong> Request deletion of your data, subject to overriding legal or regulatory retention obligations.</P>
                <P className="mb-2"><strong>Right to Restriction:</strong> Request that we limit processing of your data in certain circumstances.</P>
                <P className="mb-2"><strong>Right to Data Portability:</strong> Request your data in a structured, machine-readable format for transfer to another provider where technically feasible.</P>
                <P className="mb-2"><strong>Right to Object:</strong> Object to processing based on legitimate interests, including direct marketing.</P>
                <P className="mb-2"><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, withdraw it at any time without affecting prior lawful processing.</P>
                <P className="mb-2">To exercise any of these rights, submit a written request to our Data Protection Officer at dpo@Qnest.com. We will respond within 30 days (or sooner as required by law). We may need to verify your identity before processing your request.</P>
              </section>
 
              {/* 12 */}
              <section id="regulatory">
                <H4 className="my-4 dark:text-white">12. Regulatory Compliance & Disclosures</H4>
                <P className="mb-2">
                  As a financial services provider, we are subject to oversight by applicable regulatory bodies. We comply with all applicable financial privacy and data protection laws, including:
                </P>
                <P className="mb-2"><strong>Gramm-Leach-Bliley Act (GLBA):</strong> We provide annual privacy notices to eligible customers and offer opt-out rights for certain data sharing practices as required under GLBA.</P>
                <P className="mb-2"><strong>GDPR / UK GDPR:</strong> For customers in the European Economic Area and United Kingdom, we comply fully with GDPR requirements, including lawful basis documentation, data subject rights, and Data Protection Impact Assessments (DPIAs) for high-risk processing activities.</P>
                <P className="mb-2"><strong>AML / KYC Regulations:</strong> We are obligated by law to verify customer identities, monitor transactions, and report suspicious activity to relevant financial intelligence units. These obligations take precedence over individual privacy preferences.</P>
                <P className="mb-2"><strong>PCI-DSS:</strong> For all card payment processing, we adhere to Payment Card Industry Data Security Standards.</P>
                <P className="mb-2">Regulatory disclosures and examination information may be shared with supervisory authorities as required by law without prior notice to you.</P>
              </section>
 
              {/* 13 */}
              <section id="dnt">
                <H4 className="my-4 dark:text-white">13. Controls for Do-Not-Track Features</H4>
                <P className="mb-2">
                  Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you prefer not to be tracked. Due to the lack of a uniform standard for interpreting DNT signals, our platforms do not currently alter their data practices in response to DNT browser signals.
                </P>
                <P className="mb-2">
                  You may, however, manage your tracking and cookie preferences through our Cookie Preferences Centre available on our website, or by adjusting your browser settings. For mobile applications, you may opt out of certain data collection through your device's privacy settings.
                </P>
              </section>
 
              {/* 14 */}
              <section id="contact">
                <H4 className="my-4 dark:text-white">14. How Can You Contact Us?</H4>
                <P className="mb-2">
                  If you have questions, concerns, or requests relating to this Terms and Conditions or our data practices, please contact our Data Protection Officer:
                </P>
                <P className="mb-2"><strong>Data Protection Officer</strong><br />Qnest Banking Solutions<br />Email: qcentrioinc@gmail.com<br /></P>
                <P className="mb-2">
                  If you are located in the EEA or UK and are unsatisfied with our response, you have the right to lodge a complaint with your local supervisory authority (e.g., the ICO in the UK, or your national Data Protection Authority within the EU).
                </P>
                <P className="mb-2">
                  We reserve the right to update this Terms and Conditions from time to time to reflect changes in our practices, technology, or applicable law. Material changes will be communicated to you via email or prominent notice on our platform at least 30 days before taking effect. Continued use of our Services after such notice constitutes acceptance of the updated policy.
                </P>
              </section>
            </article>
 
            {/* TABLE OF CONTENTS */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-xl border border-gray-200 p-6">
                <H4 className="mb-4 text-sm dark:text-white font-semibold text-gray-900">
                  TABLE OF CONTENTS
                </H4>
                <ul className="space-y-3 text-sm">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-blue-600   hover:text-blue-800 transition-colors"
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
      <div className="hidden lg:block relative">
        {/* Footer sits at bottom, ContactUS scrolls over it */}
        <div id="contact-us">
          <ContactUS />
        </div>
        <NewOneFooter />
      </div>
     
      {/* MOBILE */}
      <div className="lg:hidden">
        <ContactUS />
        <NewOneFooter />
      </div>
    </>
  );
}