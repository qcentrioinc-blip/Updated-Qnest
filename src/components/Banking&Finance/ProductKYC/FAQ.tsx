// import React, { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { H2, H3, P } from "../../../styles/Typography";
// import { ContactUs } from "../../../styles/Button";
// import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";
// import ContactModal from "../../AIOptimization/Navbar/ContactModal";

// interface FaqItem {
//   question: string;
//   answer: string;
// }

// const FaqSection: React.FC = () => {
//   const { pathname } = useLocation();

//   const showShape = pathname === "/industries/banking-and-finance";

//   const faqIntroByIndustry: Record<
//     string,
//     { heading: string; description: string; cta: string }
//   > = {
//     "/industries/ehr-and-pms": {
//       heading: "Your Queries Answered",
//       description:
//         "Find quick answers to common questions about how Unified Clinicapp works for your practice, its features, and implementation.",
//       cta: "See More"
//     },

//     "/industries/cloud-finops-ai": {
//       heading: "Frequently Asked Questions",
//       description:
//         "Find clear answers about how CloudDIET works, its security model, savings process, and AI-driven approach to cloud financial optimization.",
//       cta: "Learn More"
//     },

//     "/industries/high-tech": {
//       heading: "Frequently Asked Questions",
//       description:
//         "Learn how our platform supports innovation, scalability, and growth for high-tech organizations.",
//       cta: "Learn More"
//     },

//     "/industries/banking-and-finance/products/CIP": {
//       heading: "Frequently asked questions",
//       description:
//         "Answers to common questions about our Diligent CIP and CDD platform, implementation, compliance, and ongoing lifecycle management.",
//       cta: "Check FAQs"
//     },
//     "/industries/banking-and-finance/products/conciliare": {
//       heading: "Your Queries Answered",
//       description:
//         "Find answers to common questions about Conciliare's reconciliation platform, features, implementation, and how it transforms financial operations.",
//       cta: "Learn More"
//     },

//     "/industries/banking-and-finance/products/bankfair": {
//       heading: "Common Questions About Bankfair ",
//       description:
//         "Find answers to common questions about Bankfair's capabilities, implementation, and how it supports financial institutions across retail banking and loan management. ",
//       cta: "View All "
//     },
//     "/industries/banking-and-finance/products/almanac": {
//       heading: "ALMANAC Frequently Asked Questions",
//       description:
//         "Find answers to common questions about ALMANAC's asset liability management capabilities, regulatory reporting, and how it supports financial institutions globally.",
//       cta: "View All"
//     },
//     "/industries/banking-and-finance/products/sams": {
//       heading: "SAMS Top Queries Answered",
//       description:
//         "Find answers to common questions about SAMS capabilities, NPL identification, customer data unification, provisioning calculations, and regulatory reporting for banks.",
//       cta: "View All"
//     },
//     "/industries/banking-and-finance/products/pago": {
//       heading: "Everything You Need to Know ",
//       description:
//         "Find answers to common questions about PAGO's payment processing capabilities, integration, security features, and how it serves banks and credit unions. ",
//       cta: "View All"
//     },
//     "/industries/banking-and-finance/products/sherlock": {
//       heading: "SHERLOCK AML Queries",
//       description:
//         "Find answers to common questions about SHERLOCK's transaction monitoring, watch list screening, case management, and how it ensures regulatory compliance for banks.",
//       cta: "View All"
//     },
//      "/industries/banking-and-finance/products/internet-banking-system": {
//       heading: "Common Questions About IBS  ",
//       description:
//         "Find answers to common questions about IBS capabilities, security features, account management, fund transfers, and integration with core banking systems for financial institutions. ",
//       cta: "View All"
//     },
//     "/industries/banking-and-finance/products/remitree": {
//       heading: "Quick Answers About Remitree",
//       description:
//         "Find answers to common questions about REMITREE's message handling, Swift compliance, AML integration, dashboards, and how it streamlines cross-border remittance processing.",
//       cta: "View All"
//     },
    
// "/industries/banking-and-finance/products/loan-origination-system": {
//       heading: "Common Questions About LOS ",
//       description:
//         "Find answers to common questions about LOS capabilities, digital applications, pre-approved offers, e-verification, OCR features, approval workflows, and group lending support.",
//       cta: "View All"
//     },
//   };


//   const faqContentByIndustry: Record<string, FaqItem[]> = {
//     "/industries/high-tech": [
//       {
//         question: "How does our platform support high-tech innovation?",
//         answer:
//           "Our solution accelerates product development cycles, enhances R&D collaboration, and enables data-driven innovation across high-tech organizations.",
//       },
//       {
//         question: "Is the platform scalable for rapid growth?",
//         answer:
//           "Yes. It is built on cloud-native architecture designed to scale with evolving high-tech business demands.",
//       },
//     ],

//     "/industries/cloud-finops-ai": [
//       {
//         question: "What exactly does CloudDIET do?",
//         answer:
//           "CloudDIET uses AI to profile, analyze, and optimize cloud resource configuration, utilization, and commercial terms to reduce waste and guarantee savings. ",
//       },
//       {
//         question: "Does CloudDIET access my company's data?",
//         answer:
//           "No. CloudDIET only accesses billing metadata, usage metrics, and resource configuration, never your files, databases, or application data. .",
//       },
//       {
//         question: " How is CloudDIET different from Azure Cost Management or AWS Cost Explorer?",
//         answer:
//           "CloudDIET provides engineering-led insights and AI-powered profiling that identifies misconfigurations and optimization opportunities beyond basic cost reporting. ",
//       },
//       {
//         question: " What cloud platforms does CloudDIET support?",
//         answer:
//           "CloudDIET supports Azure, AWS, and Google Cloud, with optimizations tailored to each platform's services and pricing models. ",
//       },
//       {
//         question: " What’s the typical timeline to see results?",
//         answer:
//           "Customers often achieve rapid ROI within the first month, with significant savings targeted within six weeks. ",
//       },
//       {
//         question: "Can CloudDIET help with Reserved Instances and Savings Plans?",
//         answer:
//           "Yes. We analyze your usage and provide data-driven recommendations for optimal Reserved Instance and Savings Plan purchases",
//       },
//       {
//         question: "What kind of customer is CloudDIET best suited for?",
//         answer:
//           "Enterprises with mature cloud environments, dedicated cloud/FinOps teams, and significant spend on Azure, AWS, or Google Cloud. ",
//       },
//     ],

//     "/industries/banking-and-finance/products/conciliare": [
//       {
//         question: "What types of reconciliation does Conciliare support?",
//         answer:
//           "Conciliare supports bank account reconciliation, NOSTRO message reconciliation, SWIFT message matching, payment channel reconciliation, and inter-company transactions. It handles any two-source file matching across various formats and use cases.  ",
//       },
//       {
//         question: " Can Conciliare handle high-volume transaction processing?",
//         answer:
//           "Yes, Conciliare handles peak volumes of up to 30 million transactions. The enterprise version features source table partitioning, metadata partitioning, data compression, and full parallelism based on available CPUs for optimal performance. ",
//       },
//       {
//         question: " What file formats and data sources are supported?",
//         answer:
//           "Conciliare supports Excel, PDFs, CSV files, and proprietary reports. It includes generic built-in parsers for SWIFT, BAI2, MT940, and SAP formats. Custom parsers can be attached through the front end for specialized requirements.  ",
//       },
//       {
//         question: " How does data enrichment improve reconciliation accuracy? ",
//         answer:
//           "Data enrichment extracts critical identifiers from free text fields and derives new values for matching. It supports transaction attribute enrichment and consolidated transaction linking, enabling one-to-many and many-to-many reconciliation scenarios. ",
//       },
//       {
//         question: "  What manual override functions are available for exceptions?",
//         answer:
//           "Customers often achieve rapid ROI within the first month, with significant savings targeted within six weeks.Users can force match selected open items, undo matches, review provisional matches, approve partial matches, review exceptions, and categorize open items for investigation. All actions are logged in audit trails. ",
//       },
//       {
//         question: "How does case management work for unmatched items?",
//         answer:
//           "The central case repository assigns unmatched items to investigators with built-in roles and workflow. Users update status, perform root cause analysis, and track resolution progress. Cases can be escalated to the concerned authorities automatically. ",
//       },
//       {
//         question: "What security and compliance features are included?",
//         answer:
//           "Conciliare includes maker-checker controls, audit logging of all user actions, password security with minimum length restrictions, account lockout after failed attempts, and domain server integration for user authentication.  ",
//       },
//     ],


//     "/industries/ehr-and-pms": [
//       {
//         question: "What is Unified Clinicapp??",
//         answer:
//           "Unified Clinicapp is an all-in-one software that combines Electronic Health Records (EHR) and Practice Management for scheduling, billing, and patient engagement in a single platform. ",
//       },
//       {
//         question: "How does it improve clinical workflow?",
//         answer:
//           "It offers smart templates, integrated patient history, and e-prescribing to reduce charting time and help doctors make faster, more informed decisions during patient visits. ",
//       },
//       {
//         question: " Can patients schedule their own appointments?",
//         answer:
//           "Yes. Patients can book, reschedule, or cancel appointments 24/7 through the patient portal or mobile app, which syncs directly with your practice calendar. ",
//       },
//       {
//         question: "Is the platform HIPAA compliant?",
//         answer:
//           "Absolutely. It includes role-based access, audit trails, and secure data handling to meet all HIPAA requirements for patient privacy and security. ",
//       },
//       {
//         question: "Do you offer a patient portal?",
//         answer:
//           "Yes. Patients get a secure portal to view health records, lab results, pay bills, complete forms, and message your practice. ",
//       },
//       {
//         question: "How long does implementation take?",
//         answer:
//           "Implementation time varies by practice size, but our team provides dedicated support for data migration, training, and go-live to ensure a smooth transition. ",
//       },
//       {
//         question: "Can we use it on mobile devices?",
//         answer:
//           "Yes. The platform is fully accessible on iOS and Android for both providers and patients, with a streamlined mobile-friendly interface.  ",
//       },
//     ],

//     "/industries/banking-and-finance/products/CIP": [
//       {
//         question: "What is the difference between CDD and EDD?",
//         answer:
//           "CDD is standard due diligence for most customers to verify identity and assess risk. EDD is deeper investigation for high-risk customers like PEPs requiring additional documentation and approvals.  ",
//       },
//       {
//         question: "How does Diligent help with regulatory compliance?",
//         answer:
//           "The platform configures policies to meet local regulations, automates name screening against watchlists, maintains version-controlled audit trails, and ensures consistent execution across all customer segments.  ",
//       },
//       {
//         question: " What customer segments does Diligent support?",
//         answer:
//           "Diligent supports both individual and corporate customers including private limited companies, partnerships, trusts, and complex ownership structures with beneficial ownership identification.    ",
//       },
//       {
//         question: "What integrations are available with Diligent?",
//         answer:
//           "Diligent integrates via APIs with data sources, name screening engines, core banking systems, CRMs, data warehouses, and frontend applications for seamless data flow.    ",
//       },

//       {
//         question: " How does the platform handle beneficial ownership identification?",
//         answer:
//           "The system automatically unwraps complex ownership structures based on configured thresholds, identifies connected parties and UBOs, and screens them against sanctions and watchlists.    ",
//       },
//       {
//         question: "How long does implementation typically take??",
//         answer:
//           "Implementation typically takes three to five months, depending on customer segments, regulatory requirements, and integration complexity with existing systems.  ",
//       },
//     ],

//     "/industries/banking-and-finance/products/bankfair": [
//       {
//         question: "What types of financial institutions can use Bankfair?",
//         answer:
//           "Bankfair serves retail banks, commercial banks, credit unions, and financial cooperatives. The platform scales for small institutions with single branches and large banks with hundreds of locations. ",
//       },
//       {
//         question: "Does Bankfair support multi-currency transactions? ",
//         answer:
//           "Yes, Bankfair provides robust multi-currency capabilities. Branches can handle transactions in different currencies seamlessly with proper exchange rate management and reporting.   ",
//       },
//       {
//         question: " Can we configure our own loan products without coding? ",
//         answer:
//           "Yes, Bankfair's parameterization lets you create and modify loan products through configuration. Set interest rates, repayment schedules, charges, and approval workflows without developer involvement.  ",
//       },
//       {
//         question: "How does Bankfair ensure regulatory compliance? ",
//         answer:
//           "Bankfair automates regulatory checks during onboarding and transactions. The system maintains comprehensive audit trails, generates required reports, and adapts to changing compliance requirements. ",
//       },

//       {
//         question: "What security features does Bankfair include? ",
//         answer:
//           "Bankfair offers role-based access control, detailed user privileges, and transaction-level permissions. Activity logs track all user actions and data encryption protects sensitive customer information.  ",
//       },
//       {
//         question: "Can Bankfair integrate with our existing systems? ",
//         answer:
//           "Yes, Bankfair provides APIs and integration capabilities for connecting with core systems, payment gateways, AML solutions, and third-party applications for seamless data flow.  ",
//       },
//       {

//         question: "How long does Bankfair implementation typically take? ",
//         answer:
//           "Implementation timelines vary based on institution size and requirements. Bankfair's parameterized approach typically enables faster deployment compared to custom-coded core banking systems.  ",
//       },
      
//     ],

//     "/industries/banking-and-finance/products/almanac": [
//       {
//         question: "What types of financial institutions can use ALMANAC? ",
//         answer:
//           "ALMANAC serves commercial banks, retail banks, credit unions, and financial cooperatives. The platform scales for small institutions and large multinational banks with complex multi-currency operations.  ",
//       },
//       {
//         question: "Does ALMANAC support multi-currency compliance? ",
//         answer:
//           "Yes, ALMANAC is fully compliant with multiple currencies. The platform handles transactions, reporting, and analysis across different currencies for global banking operations.  ",
//       },
//       {
//         question: " What regulatory reports does ALMANAC generate? ",
//         answer:
//           "ALMANAC generates liquidity reports, interest rate sensitivity statements, structural liquidity statements, and Basel-compliant reports required by central banks and regulatory authorities.    ",
//       },
//       {
//         question: "Can ALMANAC perform stress testing? ",
//         answer:
//           "Yes, ALMANAC simulates the impact of large withdrawals, credit defaults, and interest rate changes. It assesses the liquidity coverage ratio and available funding ratio under stress conditions.  ",
//       },

//       {
//         question: "How does ALMANAC help with strategic planning? ",
//         answer:
//           "The platform provides scenario simulation, long-term forecasting, and predictive analytics for capital distribution and funding strategies. Management gains insights for informed decision-making. ",
//       },
//       {
//         question: "What government securities tools are included?",
//         answer:
//           "ALMANAC includes a bonds register, duration analysis, value at risk calculations, and portfolio simulations. It manages fixed income portfolios with market data integration.  ",
//       },
//       {
//         question:"How does ALMANAC integrate with existing systems? ",
//         answer:"ALMANAC integrates data from core banking, treasury, and market rate systems through APIs. It consolidates information for comprehensive analysis and reporting. "
//       }
//     ],

//     "/industries/banking-and-finance/products/sams": [
//       {
//         question: "What types of NPLs does SAMS identify?",
//         answer: "SAMS identifies NPLs for agriculture and non-agriculture cases using IRAC guidelines. Differentiated logic applies for financial parameters and non-financial parameters automatically."
//       },
//       {
//         question: "How does SAMS unify customer data across products?",
//         answer: "SAMS assigns Uniform Customer Code using SSN, National ID, or Customer Code. Data from multiple systems is consolidated for a complete view of all credit facilities."
//       },
//       {
//         question: "What are the DPD thresholds used for NPL identification?",
//         answer: "For agriculture customers, DPD threshold is 365 days. For non-agriculture, financial parameters use 90 days and non-financial parameters use 180 days."
//       },
//       {
//         question: "How does SAMS calculate provisions for NPLs?",
//         answer: "Provisions are computed based on asset classification provisioning master and uploaded security details. Secured principal is lesser of security value or principal outstanding."
//       },
//       {
//         question: "Can SAMS handle multiple loan products simultaneously?",
//         answer: "Yes, SAMS integrates data across all loan products including term loans, working capital, overdrafts, bills, and agriculture credit facilities in one platform."
//       },
//       {
//         question: "What reports does SAMS generate for compliance?",
//         answer: "SAMS generates comprehensive MIS reports on NPLs, defaulters, account classifications, provisioning calculations, and exception reports for regulatory authorities."
//       },
//       {
//         question: "Does SAMS support auto-upload of data files?",
//         answer: "Yes, SAMS provides auto-upload facility from source databases or SFTP pull from network devices. Upload status displays processed, uploaded, and rejected records."
//       },
//     ],
//     "/industries/banking-and-finance/products/pago": [
//       {
//         question: "What payment methods does PAGO support?  ",
//         answer:
//           "PAGO supports e-cash, e-wallets, e-cheques, ACH batch processing, and RTGS real-time settlements. The platform handles both high-value and low-value transactions through SWIFT messaging and direct gateway integration.  ",
//       },
//       {
//         question: "How does PAGO ensure transaction security? ",
//         answer:
//           "PAGO employs advanced encryption protocols, real-time transaction monitoring, and AML screening. The platform cross-references beneficiary data against watch lists and generates alerts for suspicious activities. ",
//       },
//       {
//         question: " Can credit unions use PAGO for payments? ",
//         answer:
//           "Yes, PAGO's dual-ring structure allows credit unions to participate through intermediary leagues. Transactions are aggregated and presented as single participant entries to central payment networks.   ",
//       },
//       {
//         question: "How does PAGO integrate with existing systems?  ",
//         answer:
//           "PAGO integrates seamlessly with core banking systems, SWIFT Alliance Gateway, and AML platforms through APIs. The Hub and Cube architecture ensures smooth data flow without disrupting current operations.  ",
//       },

//       {
//         question: "What is atomicity in payment processing?  ",
//         answer:
//           "Atomicity means payments are either completed fully or fail immediately with no partial states. This eliminates reconciliation ambiguities and ensures data consistency across all connected systems. ",
//       },
//       {
//         question: "Does PAGO support real-time gross settlement? ",
//         answer:
//           "Yes, PAGO includes RTGS modules using SWIFT messaging formats for real-time settlement. Banks can connect directly to central bank payment gateways for high-value interbank transfers.  ",
//       },
//       {
//         question:"What reporting capabilities does PAGO offer? ",
//         answer:"PAGO provides real-time dashboards, detailed audit trails, and configurable reports. Users can track transaction statuses, monitor volumes, and generate custom reports for regulatory compliance.  "
//       }
//     ],
//     "/industries/banking-and-finance/products/sherlock": [
//       {
//         question: "What types of transactions does SHERLOCK monitor?  ",
//         answer:
//           "SHERLOCK monitors retail deposits and withdrawals, trade finance transactions, cross-border remittances, and SWIFT financial messages for money laundering indicators.  ",
//       },
//       {
//         question: "How does SHERLOCK screen against watch lists?  ",
//         answer:
//           "Web crawlers update banned entity lists automatically from UN, OFAC, and Federal Reserve sources. Custom watch lists can be created and managed by institutions.  ",
//       },
//       {
//         question: "Can SHERLOCK integrate with our core banking system? ",
//         answer:
//           "Yes, SHERLOCK integrates seamlessly with core banking systems to extract transaction data and customer information for real-time monitoring and analysis.   ",
//       },
//       {
//         question: "What is the case management workflow in SHERLOCK?  ",
//         answer:
//           "Every violation is treated as a case with five-pillar workflow: profile, detect, investigate, manage, and report for complete regulatory compliance.  ",
//       },

//       {
//         question: "Does SHERLOCK support FATCA compliance?  ",
//         answer:
//           "Yes, SHERLOCK includes retail and trade finance transaction monitoring capabilities specifically designed to ensure compliance with FATCA regulatory requirements.  ",
//       },
//       {
//         question: "How are suspicious activity alerts generated? ",
//         answer:
//           "Configurable rules detect anomalies in transaction patterns. Alerts are generated automatically for transactions deviating from set rules or customer behavior.  ",
//       },
//       {
//         question:"What reporting capabilities does SHERLOCK offer? ",
//         answer:"SHERLOCK generates comprehensive audit trails, regulatory reports, and detailed case investigation records for transparency and compliance with AML regulations.  "
//       }
//     ],
//      "/industries/banking-and-finance/products/internet-banking-system": [
//       {
//         question: "What account types can customers access through IBS?  ",
//         answer:
//           "Customers can access savings accounts, current accounts, fixed deposits, installment accounts, and borrowing accounts. All accounts are displayed in a unified dashboard with real-time balances.  ",
//       },
//       {
//         question: "How secure is the Internet Banking Solution?  ",
//         answer:
//           "IBS provides secure login with IDs and passwords, two-factor authentication, data encryption, transaction limits, and activity logs. All data transmission is encrypted for customer protection.  ",
//       },
//       {
//         question: "Can customers transfer funds to other banks? ",
//         answer:
//           "Yes, IBS supports domestic and international fund transfers. Users can choose from standard, express, or scheduled transfers with integration to payment gateways for secure processing. ",
//       },
//       {
//         question: "Does IBS integrate with core banking systems?  ",
//         answer:
//           "Yes, IBS integrates seamlessly with various core banking systems for real-time transaction updates, account synchronization, and secure data exchange across all banking platforms.  ",
//       },

//       {
//         question: "What bill payment features are available?  ",
//         answer:
//           "Customers can pay utility bills directly from their accounts, fetch bill details easily, view payment history, and download receipts. Recurring payments can be scheduled for convenience.   ",
//       },
//       {
//         question: "Can customers download account statements? ",
//         answer:
//           "Yes, users can download account statements for various periods. Statements can be filtered by date range, transaction type, and amount for easy reconciliation and record keeping.  ",
//       },
//       {
//         question:"What device types does IBS support? ",
//         answer:" IBS is fully responsive and works on desktops, tablets, and smartphones. Customers can access their accounts from any device with internet connectivity for true anywhere banking.  "
//       }
//     ],

//     "/industries/banking-and-finance/products/loan-origination-system":[
//       {
//         question: "What types of loans can be processed through LOS?  ",
//         answer:
//           "LOS processes personal loans, auto loans, home loans, group loans, and corporate credit facilities. The system supports retail and commercial lending with configurable product rules.  ",
//       },
//       {
//         question: "How does LOS handle pre-approved loan offers?  ",
//         answer:
//           "Back-office users upload pre-approved offers for selected customers. Customers submit quickly with minimal data entry, and offers can be auto-approved based on configured screening rules.  ",
//       },
//       {
//         question: "What verification features does LOS include? ",
//         answer:
//           "LOS provides e-verification for CIP, utility bills, employment, assets, and banking details. OCR capabilities read government IDs and detect mismatches in name, birth date, and address.  ",
//       },
//       {
//         question: "Can LOS integrate with core banking systems?   ",
//         answer:
//           "Yes, LOS inherits product rules configured in core systems. Additional rules can be set for enhanced checks and controls. Real-time data synchronization ensures accurate loan processing.  ",
//       },
//       {
//         question: "How are loan approval decisions made in LOS?   ",
//         answer:
//           "Approval matrix is configured based on products, score parameters, and loan amounts. Applications progress through multiple approval levels, with final authority approval required.  ",
//       },
//       {
//         question: "Does LOS support group lending models?   ",
//         answer:
//           "Yes, LOS includes complete group lending features, including member management, meeting recordings, bulk collection, fund transfers, multilingual support, and center evaluation capabilities.   ",
//       },
//       {
//         question: "What documents can be verified through OCR?   ",
//         answer:
//           "OCR reads standard document images, including SSN cards, driving licenses, and government-issued IDs. AI enhances accuracy by learning from multiple document images over time.  ",
//       },

//     ],
    
//     "/industries/banking-and-finance/products/remitree": [
//       {
//         question: "What Swift message types does REMITREE support?",
//         answer:
//           "REMITREE supports various Swift MT messages, including MT103 for customer transfers, MT202 for financial institution transfers, MT700 for letters of credit, and MT760 for guarantees.",
//       },
//       {
//         question: "How does REMITREE ensure regulatory compliance?",
//         answer:
//           "REMITREE integrates with AML systems to screen transactions against banned entities and countries. Automated compliance checks occur before message transmission to prevent fraud.",
//       },
//       {
//         question: "Can REMITREE handle both inward and outward remittances?",
//         answer:
//           "Yes, REMITREE manages bi-directional message flow comprehensively. It processes outward remittances from creation to transmission and inward remittances from receipt to crediting.",
//       },
//       {
//         question: "How does REMITREE integrate with core banking systems?",
//         answer:
//           "REMITREE connects with core banking systems through APIs for real-time data synchronization. It automatically populates Swift message templates with customer and transaction details.",
//       },
//       {
//         question: "What reporting capabilities does REMITREE offer?",
//         answer:
//           "REMITREE provides a comprehensive dashboard for monitoring all messages with real-time status tracking. Detailed audit logs and custom reports are available for compliance and reconciliation.",
//       },
//       {
//         question: "How does REMITREE reduce operational costs?",
//         answer:
//           "REMITREE automates compliance checks and message validation, minimizing Swift licensing needs. Straight-through processing reduces manual intervention and associated labor costs significantly.",
//       },
//       {
//         question: "What happens when a transaction fails validation?",
//         answer:
//           "REMITREE flags exceptions during remittance processing with detailed error information. The system provides tools for review and resolution before allowing retransmission.",
//       },
//     ],
//   };





//   const introContent =
//     faqIntroByIndustry[pathname] ||
//     faqIntroByIndustry["/industries/banking-and-finance"] ||
//     {
//       heading: "Frequently Asked Questions",
//       description: "Find clear answers about our platforms, implementation, and operations.",
//       cta: "Check FAQs"
//     };

//   const faqData =
//     faqContentByIndustry[pathname] ||
//     faqContentByIndustry["/industries/banking-and-finance"] ||
//     [
//       {
//         question: "How does the platform ensure security and compliance?",
//         answer: "Our solution includes robust access controls, audit logging, and automated compliance checks to meet all regulatory requirements."
//       },
//       {
//         question: "Is the platform scalable?",
//         answer: "Yes, our platforms are built on robust architecture designed to scale seamlessly with your growing business demands."
//       }
//     ];

//   const isEHR = pathname.startsWith("/industries/ehr-and-pms");
//   const isAI = pathname.startsWith("/industries/cloud-finops-ai");
//   const isBnF = pathname.startsWith("/industries/banking-and-finance");
//   const headingFontClass = isEHR ? "font-quadran  EHR" : "font-quadran  ";
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleContactClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (isEHR) setDrawerOpen(true);
//     if (isAI) setModalOpen(true);
//   };

//   const handleToggle = (index: number) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <>
//    <section
//   className={`relative w-full py-6 md:px-6 xl:px-6 bg-white overflow-hidden ${
//     isEHR ? "dark:bg-[#141414]" : "dark:bg-black"
//   }`}
// >
//         <div className="max-w-7xl mx-auto  px-6 md:px-10 xl:px-6 flex flex-col lg:flex-row gap-12 relative z-10">

//           <div className="lg:w-1/2 relative z-20">
//             <div className="mb-4 text-sm text-gray-700  dark:text-white flex items-center">
//              <span
//   className={`w-8 h-1 rounded-full mr-2 ${
//     isEHR ? "bg-white" : "bg-gray-400 dark:bg-[#009565]"
//   }`}
// />

// <H3
//   className={`${headingFontClass} text-[20px] md:text-[24px] lg:text-[32px] ${

//     isEHR ? "text-white" : "dark:text-[#00AA72]"
//     isEHR ? "text-white" : "dark:text-[#009565]"
//   FAQ
//             </div>

//             <h2
//               className={`mb-4 ${headingFontClass}   dark:text-white text-[24px] md:text-[32px] lg:text-[48px] ${isEHR ? "text-[#00AA72]" : "text-black"
//             <H2
//               className={`mb-4 ${headingFontClass}   dark:text-white text-[24px] md:text-[32px] lg:text-[48px] ${isEHR ? "text-[#009565]" : "text-black"
//                 }`}
//             >
//               {introContent.heading}
//             </H2>


//             <P className="mb-6 dark:text-white max-w-lg">
//               {introContent.description}
//             </P>

//             {isBnF ? (
//               <Link to="#contact-us" >
//                 <ContactUs className="dark:border-white ">{introContent.cta}</ContactUs>
//               </Link>
//             ) : (
//               <ContactUs className="dark:bg-transparent " onClick={handleContactClick}>{introContent.cta}</ContactUs>
//             )}
//           </div>

//           <div className="lg:w-1/2 relative z-20">
//             {faqData.map((item, index) => {
//               const isOpen = index === openIndex;
//               return (
//                 <div key={index} className="border-b border-gray-200">
//                   <button
//                     className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
//                     onClick={() => handleToggle(index)}
//                   >
//                     <span className="text-black font-bold font-quadran dark:text-white">{item.question}</span>
//                     <span className={`text-2xl text-gray-500 white font-light font-quadran  transition-all ${isOpen ? "rotate-180 text-blue-600" : "dark:text-white"}`}>
//                       {isOpen ? "−" : "+"}
//                     </span>
//                   </button>
//                   <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} text-gray-600 : dark:text-white`}>
//                     <div className="pb-4 pr-4 font-light font-quadran">{item.answer}</div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {showShape && (
//           <div className="absolute bottom-[-250px] left-[150px] -translate-x-1/2 w-[900px] h-[20px] rotate-[-170deg] pointer-events-none opacity-100 z-0">
//             <img src="/ProductDetails4/faq_img1.png" alt="FAQ Decorative Shape" className="w-full h-auto object-contain" />
//           </div>
//         )}
//       </section>

//       {isEHR && drawerOpen && <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />}
//       {isAI && modalOpen && <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />}
//     </>
//   );
// };


// export default FaqSection;
