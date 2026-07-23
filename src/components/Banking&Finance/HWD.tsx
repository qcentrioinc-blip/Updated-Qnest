const Check = ({ className = "", size = 24, style }: { className?: string; size?: number; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}><path d="M20 6 9 17l-5-5" /></svg>
);
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { H2, H3, P } from '../../styles/Typography';


const HWD = () => {
  const location = useLocation();
  const path = location.pathname;

  // Horizontal scroll refs & hooks (same pattern as Process.tsx)
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const isEHR = path.startsWith("/industries/ehr-and-pms");
  // const isBanking = path.startsWith("/industries/banking-and-finance");
  const isHighTech = path.startsWith("/industries/high-tech");
  const isLOS = path.startsWith("/industries/banking-and-finance/products/loan-origination-system")
  const isAI = location.pathname === "/industries/cloud-finops-ai";
  const isConciliare = path.startsWith("/industries/banking-and-finance/products/conciliare");
  const isCIP = path.startsWith("/industries/banking-and-finance/products/CIP");
  const isAlmanac = path.startsWith("/industries/banking-and-finance/products/almanac")
  const isBankfair = path.startsWith("/industries/banking-and-finance/products/bankfair");
  const isSAMS = path.startsWith("/industries/banking-and-finance/products/sams");
  const isRemitree = path.startsWith("/industries/banking-and-finance/products/remitree");
  const isPAGO = path.startsWith("/industries/banking-and-finance/products/pago");
  const isSherlock = path.startsWith("/industries/banking-and-finance/products/sherlock");
  const isIBS = path.startsWith("/industries/banking-and-finance/products/internet-banking-system");


  // const COLORS = {
    

  //   hightech: {
  //     topBg: "#141414",
  //     bottomBg: "#E7D6FF",
  //     headingColor: "#5B3FD1",
  //     textcolor: "#CCCCCC",
  //     CheckColor: "#A80040"
  //   },
   
  // };
  const HEADING_CONTENT = {
    ai: {
      eyebrow: "Your Success",
      title: "Real-World Use Cases",
      description:
        "See how organizations use CloudDIET and AI-driven FinOps to reduce cloud spend, improve governance, and retain savings long term."
    },

    bankfair: {
      eyebrow: " ",
      title: " Real-World Banking Applications ",
      description:
        ""
    },

    conciliare: {
      eyebrow: " ",
      title: " Common Reconciliation Use Cases",
      description:
        ""
    },
    CIP: {
      eyebrow: " ",
      title: "Real-world use cases",
      description:
        ""
    },

    PAGO: {
      eyebrow: " ",
      title: "Where PAGO Delivers Value ",
      description:
        ""
    },

    Sherlock: {
      eyebrow: " ",
      title: "How SHERLOCK Detects Risk ",
      description:
        ""
    },
    IBS: {
      eyebrow: " ",
      title: "Practical Banking Applications",
      description:
        ""
    },

    Almanac: {
      eyebrow: " ",
      title: "Where ALMANAC Delivers Value",
      description:
        ""
    },
    SAMS: {
      eyebrow: " ",
      title: "Real-World NPL Scenarios",
      description:
        ""
    },

    LOS: {
      eyebrow: "Use Cases",
      title: "Real-World Lending Scenarios with LOS",
      description:
        ""
    },
    Remitree: {
      eyebrow: " ",
      title: "Real-World Remittance Scenarios with REMITREE",

      description:
        ""
    },

    banking: {
      eyebrow: " ",
      title: " Common Reconciliation Use Cases",
      description:
        "Discover how banks and financial institutions modernize operations, reduce risk, and optimize costs through cloud and data transformation."
    },
    ehr: {
      eyebrow: " ",
      title: "Practice Use Cases",
      description:
        " See how Unified Clinicapp adapts to different clinical and operational needs to support your specific practice goals."
    },
    hightech: {
      eyebrow: " ",
      title: "Real-World Use Cases",
      description:
        "Explore how high-tech companies scale faster, control cloud spend, and optimize complex multi-cloud environments."
    }
  };

  const CARD_CONTENT = {
    ai: [
      {
        title: "Major Azure Cost Reduction",
        image: "/AIOptimization/Saving.svg",
        description:
          "A mature cloud team saved millions annually through advanced optimization and reserved instance strategies.",
        points: [
          "Identified $1.6M in savings via optimized Azure Reserved Instance purchases.",
          "Found an additional $3.8M through unique CloudDIET profiling and engineering insights.",
          "Recommended moving Azure Functions from Dedicated plan to Elastic Premium for scalability. ",
          "Disabled Defender for Storage on backup accounts, eliminating unnecessary high transaction costs. ",
          "Implemented 3-year Synapse RIs, achieving an 81% blended discount on runtime costs. ",
        ],
      },

      {
        title: " Retain Savings Long-Term",
        image: "/AIOptimization/PriceTag.svg",
        description:
          " CloudDIET helped a tech firm maintain 8x ROI with continuous optimization and secure profiling.",
        points: [

          "Used read-only access to analyze billing metadata and resource configurations only. ",
          "Targeted 60-70% savings in under six weeks using effort-based categorization. ",
          "Leveraged AI to identify unused messaging buses and unlinked integration accounts. ",
          "Optimized licensing and commercial terms across IaaS and PaaS service deployments.",
          "Ensured full customer control and zero access to sensitive data or workloads. ",
        ],
      },
      {
        title: "Multi-Cloud Waste Elimination",
        image: "/AIOptimization/Cloud.svg",
        description:
          "An enterprise reduced cloud waste by 30% without compromising project outcomes or performance.",
        points: [
          "Profiled hundreds of resource configurations across AWS, Azure, and Google Cloud. ",
          "Identified and corrected over-provisioned App Services and misconfigured scale-out rules.",
          "Optimized Cosmos DB from expensive multi-master to cost-effective read replicas. ",
          "Recommended tier changes for Azure Files from Hot to Transaction Optimized. ",
          "Provided ongoing AI-driven measures to retain 80-90% of savings long-term.",
        ],
      },
    ],

    bankfair: [
      {
        title: "Retail Banking Operations ",
        image: "/ProductBankfair/hwd_i1.svg",
        description:
          "Manage daily retail banking activities for individual customers across multiple branches. ",
        points: [
          "Onboard new customers with streamlined digital data capture and verification ",
          "Create and manage savings accounts, fixed deposits, and transaction accounts  ",
          "Process teller transactions with automated denomination tally and reconciliation ",
          "Handle standing instructions, lien noting, and payroll services efficiently ",
          "Generate account statements and transaction histories on demand  ",
        ],
      },
      {
        title: "Loan Management with NPL ",
        image: "/ProductBankfair/hwd_i2.svg",
        description:
          "Originate, disburse, track loans, and manage non-performing assets from classification to recovery. ",
        points: [
          "Configure multiple loan products with customized interest rates and repayment terms  ",
          "Automate EMI calculations, penalty applications, and repayment scheduling ",
          "Track collateral details and manage lien marking against loan accounts ",
          
          " Classify assets, calculate provisions, and manage NPL tracking workflows  ",
          "Monitor overdue accounts and generate alerts for collections and recovery teams"
        ],
      },
      {
        title: "Multi-Branch Administration ",
        image: "/ProductBankfair/hwd_i3.svg",
        description:
          "Centralize control and reporting across a geographically distributed branch network.  ",
        points: [
          "Set up branch-specific holiday calendars and business hour configurations ",
          "Manage inter-branch fund transfers and reconciliation seamlessly  ",
          "Assign role-based system access for branch managers, tellers, and officers ",
          "Monitor branch performance through centralized dashboards and reports ",
          "Maintain a unified customer view across all branches and product holdings ",
        ],
      },
    ],

    LOS: [
      {
        title: "TILA and ECOA Compliant  ",
        image: "/LOS/HWDLOS.svg",
        description:
          "Banks process personal, auto, and home loans digitally for individual customers with faster turnaround.",
        points: [
          "Submit online applications with auto-filled SSN details.",

          "Upload documents for OCR-based verification .",

          "Track application status through customer dashboard .",

          "Receive sanction letters digitally upon approval.",

          "Access loans across web and mobile platforms ",
        ],
      },
      {
        title: " Pre-Approved Offers",
        image: "/LOS/HWDLOS1.svg",
        description:
          "Financial institutions target existing customers with customized pre-approved loan offers for quick uptake.",
        points: [
          "Upload pre-approved offers for selected customers.",

          "Enable one-click submission for quick acceptance .",

          "Auto-approve offers based on configured rules .",

          "Screen applications faster with minimal data entry .",

          "Improve customer loyalty through personalized offers ."
        ],
      },
      {
        title: "Community Group Lending",
        image: "/LOS/HWDLOS2.svg",
        description:
          "Support joint liability groups and community lending with collaborative loan management features. ",
        points: [
          "Register group members with detailed information.",

          "Conduct group meetings and maintain minutes .",

          "Process bulk collections from all members .",

          "Transfer funds to individual or group accounts .",

          "Generate center-wise evaluation reports for monitoring  ",
        ],
      },
    ],

    Almanac: [
      {
        title: "Liquidity Risk Management ",
        image: "/AML/SecurityRisks.svg",
        description:
          "Monitor and manage short-term and structural liquidity positions across the organization. ",
        points: [
          "Calculate dynamic liquidity statements with predefined values and automated reporting ",

          "Assess structural liquidity by balancing inflows and outflows over long-term horizons ",

          "Perform stress tests simulating large withdrawals and credit default scenarios ",

          "Evaluate the liquidity coverage ratio and the net stable funding ratio accurately ",

          "Generate regulatory liquidity reports aligned with central bank requirements  ",
        ],
      },
      {
        title: " G-Sec Portfolio Management ",
        image: "/AML/MoneyWings.svg",
        description:
          "Manage fixed income portfolios and optimize investment strategies for government securities.",
        points: [
          "Track bond portfolios with a complete register of buy, sell, and transfer operations ",

          "Calculate duration and value at risk for individual securities and portfolios ",

          "Upload market data for accurate pricing and performance analysis ",

          "Simulate portfolio rearrangements under varying interest rate conditions",

          "Generate accounting entries and regulatory reports for securities holdings "
        ],
      },
      {
        title: "Interest Rate Risk Analysis ",
        image: "/AML/BriefCases.svg",
        description:
          "Measure and manage exposure to interest rate fluctuations across assets and liabilities.",
        points: [
          "Classify assets and liabilities by maturity using traditional gap sensitivity analysis. ",

          "Calculate modified duration to evaluate rate change impacts on the balance sheet.",

          "Segment portfolios into interest rate risk buckets for detailed analysis.",

          "Assess the impact of rate changes on net interest income and economic value.",

          "Run simulations for different interest rate scenarios and hedge strategies."
        ],
      },
    ],

    SAMS: [
      {
        title: "Retail Loan NPL Management",
        image: "/BNFCos/Document.svg",
        description:
          "Automate identification and tracking of NPLs across retail loan portfolios for individual customers.",
        points: [
          "Monitor installment overdue for personal, auto, and home loans",
          "Track overdrawn accounts and bills overdue for retail customers",
          "Apply IRAC financial and non-financial parameters automatically",
          "Calculate days past due for agriculture and non-agriculture cases",
          "Generate provisioning reports based on collateral values"
        ],
      },
      {
        title: "Corporate Credit Monitoring",
        image: "/BNFCos/credit-card.svg",
        description:
          "Track stressed assets across working capital, term loans, and corporate credit facilities.",
        points: [
          "Identify expired limits and drawing power not updated accounts",
          "Monitor interest not served days for corporate loan accounts",
          "Classify assets as sub-standard or doubtful based on security",
          "Upload and distribute collateral values for secured portfolios",
          "Generate exception reports for regulatory compliance reviews"
        ],
      },
      {
        title: "Agriculture Loan ",
        image: "/BNFCos/money-bag.svg",
        description:
          "Manage NPL identification and provisioning for agriculture and allied activities loan portfolios.",
        points: [
          "Apply 365 days DPD threshold for agriculture loan customers",
          "Track stock statement submission within 180 days",
          "Monitor pledged equity invocation and trading status",
          "Classify secured and unsecured portions separately",
          "Calculate provisions based on collateral and classification"
        ],
      },
    ],

    Remitree: [
      {
        title: "Outward Remittance ",
        image: "/Remitree/gear.svg",
        description:
          "Process individual customer cross-border payments efficiently with automated SWIFT message creation and compliance screening.",
        points: [
          "Initiate transactions from core banking systems",
          "Create and enrich Swift MT103 messages automatically",
          "Screen beneficiaries against AML watch lists",
          "Validate fields for format and limit compliance",
          "Transmit messages via Swift Alliance Gateway"
        ],
      },
      {
        title: "Inward Remittance ",
        image: "/Remitree/payment.svg",
        description:
          "Handle incoming international payments with automatic matching and crediting to customer accounts without manual intervention.",
        points: [
          "Receive incoming Swift MT messages from banks",
          "Match payments with NOSTRO account details",
          "Identify and auto-settle transactions accurately",
          "Post accounting entries to core banking system",
          "Generate exception reports for unmatched items"
        ],
      },
      {
        title: "Corporate Bulk Payment",
        image: "/Remitree/briefcase.svg",
        description:
          "Manage high-volume remittances for corporate clients with automated batch processing and detailed reporting capabilities.",
        points: [
          "Handle bulk outward remittance files from corporate systems",
          "Apply treasury rates for real-time currency conversion",
          "Screen all transactions against compliance lists",
          "Track message status through comprehensive dashboard",
          "Generate detailed transaction reports for reconciliation"
        ],
      },
    ],

    conciliare: [
      {
        title: "Bank Account Reconciliation – SOX & FFIEC Compliant",
        image: "/icon1.svg",
        description:
          "Automate matching between internal ledgers and bank statements across multiple accounts and currencies. ",
        points: [
          "Match bank statement transactions against general ledger entries ",
          "Reconcile multiple ledgers mapped to single bank accounts ",
          "Identify discrepancies between opening and closing balances ",
          "Handle high-volume transaction matching with parallel processing ",
          "Generate exception reports for unmatched items with ageing analysis ",
        ],
      },
      {
        title: "NOSTRO Message Reconciliation – SWIFT & FFIEC Compliant",
        image: "/icon2.svg",
        description:
          "Reconcile SWIFT messages with core banking system transactions for accurate cross-border settlement. ",
        points: [
          "Match SWIFT MT103, 202, 940, and 950 messages against system references ",
          "Identify messages sent without source system references ",
          "Detect duplicate messages sent with same reference numbers ",
          "Validate critical field values including BIC, Field 20, and Field 21 ",
          "Escalate pending mismatches to concerned authorities automatically ",
        ],
      },
      {
        title: "Payment Channel Reconciliation – NACHA & PCI DSS Compliant",
        image: "/icon3.svg",
        description:
          "Match transactions across payment gateways, POS systems, merchant accounts, and settlement files. ",
        points: [
          "Reconcile POS and gateway transactions against settlement reports .",
          "Match collections and disbursements across multiple channels ",
          "Identify revenue leakage from unidentified discrepancies ",
          "Link consolidated settlement entries to detailed transaction sets .",
          "Reduce customer complaints from delayed or incorrect matching ",
        ],
      },
    ],

    CIP: [
      {
        title: "Digital CIP transformation",
        image: "/icon1.svg",
        description:
          "Implemented across 64 branches with over 620 users processing retail and corporate customers.",
        points: [
          "Full lifecycle coverage from onboarding to trigger events ",
          "Integration with front-end, screening, and core systems ",
          "Approximately 85% straight-through processing achieved ",
          "Significant automation with minimal manual intervention ",
          "Used by analysts, compliance officers, and approvers ",
        ],
      },
      {
        title: " Enterprise due diligence",
        image: "/icon2.svg",
        description:
          "Coverage primarily for non-individual entities with complex ownership structures.",
        points: [
          "Screening and case management integration throughout .",
          "Roles across analyst, MLRO, and compliance approvers ",
          "Automated risk assessment based on configured rules ",
          "Periodic and trigger event reviews system-managed ",
          "Consistent execution across all entity types ",
        ],
      },
      {
        title: "Commodity trading",
        image: "/icon3.svg",
        description:
          "Coverage for private limited companies, firms, and other entity types.",
        points: [
          " Integration with front-end system for data capture .",

          "Connected to leading screening engine providers .",

          "Implemented as Software as a Service model .",

          "Roles across frontline, compliance, and approvers .",

          "Automated data capture reduces manual effort .",
        ],
      },
    ],
    PAGO: [
      {
        title: "Reg E and PCI DSS Compliant",
        image: "/icon1.svg",
        description:
          "Handle diverse retail payment types for individual customers across digital and traditional channels.",
        points: [
          "Process e-cash and e-wallet transactions with immediate confirmation and settlement ",
          "Accept and clear e-cheques electronically with automated verification and reconciliation  ",
          "Support card-not-present transactions for online and mobile banking customers ",
          "Manage recurring bill payments and standing instructions for utility services  ",
          "Generate detailed transaction receipts and statements for customer reference ",
        ],
      },
      {
        title: "Interbank Settlements",
        image: "/icon2.svg",
        description:
          "Facilitate large-value fund transfers between banks through real-time gross settlement systems.",
        points: [
          "Process RTGS transactions using SWIFT messaging formats for interbank transfers ",
          "Handle MT103 and MT202 messages for cross-border and domestic fund movements ",
          "Ensure atomicity with immediate completion or failure of high-value payments ",
          "Maintain audit trails for all interbank transactions with regulatory reporting ",
          "Integrate with central bank payment gateways for direct settlement access ",
        ],
      },
      {
        title: "Credit Union Aggregation",
        image: "/icon3.svg",
        description:
          "Enable credit unions to participate in national payment networks through league aggregation.",
        points: [
          " Aggregate multiple credit union transactions into single network participant batches ",

          "Process ACH transactions with configurable intervals for batch settlement cycles ",

          "Handle low-value high-volume payments efficiently through consolidated processing ",

          "Maintain individual transaction records while presenting consolidated settlement files ",

          "Provide league-level dashboards for monitoring aggregated payment flows ",
        ],
      },
    ],
    Sherlock: [
      {
        title: "Retail Transaction Monitoring ",
        image: "/ProductSherlock/icon21.svg",
        description:
          "Detect suspicious patterns in high-volume retail banking transactions across multiple channels. ",
        points: [
          "Monitor deposits, withdrawals, and transfers in real-time ",
          "Detect structuring through configurable threshold alert rules  ",
          "Flag patterns deviating from customer's historical behavior ",
          "Track cross-border remittances for money laundering indicators ",
          "Generate alerts for regulator-specified limits and violations ",
        ],
      },
      {
        title: " Trade Finance Surveillance",
        image: "/ProductSherlock/icon22.svg",
        description:
          "Screen import and export transactions for trade-based money laundering activities. ",
        points: [
          "Monitor letters of credit and bills for over and under-invoicing patterns  ",
          "Detect commodity description mismatches between shipping documents ",
          "Flag unusual routing or transshipment through high-risk jurisdictions  ",
          "Screen counterparties against denied party and sanctions lists  ",
          "Track repetitive trade patterns inconsistent with business profile  ",
        ],
      },
      {
        title: "Correspondent Banking ",
        image: "/ProductSherlock/icon23.svg",
        description:
          "Monitor cross-border payment flows through nostro and vostro accounts for risks. ",
        points: [
          " Screen SWIFT MT103 and MT202 messages for sanctioned entities  ",

          "Monitor outgoing and incoming wire transfers for suspicious beneficiaries  ",

          "Track transaction volumes and values against established baselines ",

          "Flag nested transactions hiding original originator information ",

          "Generate regulatory reports for cross-border fund movement analysis ",
        ],
      },
    ],
    IBS: [
      {
        title: "Retail Self-Service Banking",
        image: "/ProductIBS/icon10.svg",
        description:
          "Individual customers manage accounts, transfer funds, and pay bills online without branch visits.",
        points: [
          "View savings, current, and fixed deposit account balances  ",
          "Download account statements for selected periods  ",
          "Transfer funds between own accounts instantly  ",
          "Pay utility bills and view payment history  ",
          "Request checkbooks and stop payments online  ",
        ],
      },
      {
        title: "Treasury Management",
        image: "/ProductIBS/icon11.svg",
        description:
          "Business customers handle bulk payments, approvals, and account monitoring through a secure portal. ",
        points: [
          "Initiate bulk fund transfers for salary and vendor payments  ",
          "Set transaction limits and approval workflows for users ",
          "View consolidated balances across multiple business accounts   ",
          "Download transaction reports for reconciliation   ",
          "Schedule recurring payments for regular obligations  ",
        ],
      },
      {
        title: "Multi-Branch Account Access",
        image: "/ProductIBS/icon12.svg",
        description:
          "Customers with accounts across branches manage all relationships through a single login. ",
        points: [
          " Link accounts from different branches to one dashboard   ",

          "View consolidated financial position across all accounts  ",

          "Transfer funds between branch accounts seamlessly ",

          "Access transaction history for each linked account  ",

          "Manage payees and favorite transactions centrally ",
        ],
      },
    ],


    banking: [
      {
        title: "Digital CIP transformation",
        image: "/AIOptimization/Saving.svg",
        description:
          "Implemented across 64 branches with over 620 users processing retail and corporate customers.",
        points: [
          "Full lifecycle coverage from onboarding to trigger events ",
          "Integration with front-end, screening, and core systems .",
          "Approximately 85% straight-through processing achieved ",
          "Significant automation with minimal manual intervention ",
          "Used by analysts, compliance officers, and approvers ",
        ],
      },
      {
        title: "Enterprise due diligence",
        image: "/AIOptimization/pricetag.svg",
        description:
          " Coverage primarily for non-individual entities with complex ownership structures. ",
        points: [
          "Screening and case management integration throughout",
          "Roles across analyst, MLRO, and compliance approvers ",
          "Automated risk assessment based on configured rules ",
          "Periodic and trigger event reviews system-managed ",
          "Consistent execution across all entity types ",
        ],
      },
      {
        title: "Commodity trading compliance",
        image: "/AIOptimization/Cloud.svg",
        description:
          " Coverage for private limited companies, firms, and other entity types.",
        points: [
          "Access across UAE and India locations seamlessly ",
          "End client types include varied corporate structures ",
          "Beneficial ownership identification fully automated ",
          "Policy configuration adapts to local requirements ",
          "System-driven execution ensures consistent outcomes ",
        ],
      },
    ],
    ehr: [
      {
        title: "Unified Primary Care Clinic",
        image: "/EHRIcons/Treatment.svg",
        description:
          "Manage everything from patient visits to billing efficiently with one unified, easy-to-use platform.",
        points: [
          "Streamline digital intake and patient self-check-in.",
          "Document visits quickly with customizable SOAP templates.",
          "Submit claims and track payments from the same system. ",
          "Offer telehealth visits and a patient portal easily. ",
          "View practice performance with unified financial dashboards. ",
        ],
      },
      {
        title: " Multi-Specialty Medical Group",
        image: "/EHRIcons/Team.svg",
        description:
          "Support diverse specialties with tailored workflows while maintaining centralized operations and billing.",
        points: [
          "Use specialty-specific note templates for accurate documentation. ",
          "Coordinate complex scheduling across providers and locations. ",
          "Integrate lab orders and view results seamlessly in charts. ",
          "Manage authorizations and track referrals within patient records. ",
          "Generate consolidated financial reports for the entire group. ",
        ],
      },
      {
        title: "Streamlined Billing Service",
        image: "/EHRIcons/Dollar.svg",
        description:
          "Handle client billing with greater transparency, accuracy, and efficiency using integrated tools.",
        points: [
          "Access clean claims data directly from clinical documentation",
          "Monitor the entire claim lifecycle on a single dashboard. ",
          "Track remittance advice and payment status in real time. .",
          "Supports direct integration with major US clearinghouses   ",
          "Provide clients with clear, customizable financial performance reports. ",
        ],
      },
    ],
  };



  // CARDS
  let cards;
  if (isConciliare) cards = CARD_CONTENT.conciliare;
  else if (isCIP) cards = CARD_CONTENT.CIP;
  else if (isBankfair) cards = CARD_CONTENT.bankfair;
  else if (isAlmanac) cards = CARD_CONTENT.Almanac;
  else if (isSAMS) cards = CARD_CONTENT.SAMS;
  else if (isRemitree) cards = CARD_CONTENT.Remitree;
  // else if(isAlmanac) cards = CARD_CONTENT.Almanac;
  else if (isPAGO) cards = CARD_CONTENT.PAGO;
  else if (isSherlock) cards = CARD_CONTENT.Sherlock;
  else if (isIBS) cards = CARD_CONTENT.IBS;
  else if (isAI) cards = CARD_CONTENT.ai;
  else if (isEHR) cards = CARD_CONTENT.ehr;
  else if (isLOS) cards = CARD_CONTENT.LOS;
  else cards = CARD_CONTENT.banking;

  // HEADING
  let headingContent;
  if (isConciliare) headingContent = HEADING_CONTENT.conciliare;
  else if (isCIP) headingContent = HEADING_CONTENT.CIP;
  else if (isBankfair) headingContent = HEADING_CONTENT.bankfair;
  else if (isAlmanac) headingContent = HEADING_CONTENT.Almanac;
  else if (isSAMS) headingContent = HEADING_CONTENT.SAMS;
  else if (isLOS) headingContent = HEADING_CONTENT.LOS;
  else if (isRemitree) headingContent = HEADING_CONTENT.Remitree;
  //  else if(isAlmanac) headingContent = HEADING_CONTENT.Almanac;
  else if (isPAGO) headingContent = HEADING_CONTENT.PAGO;
  else if (isSherlock) headingContent = HEADING_CONTENT.Sherlock;
  else if (isIBS) headingContent = HEADING_CONTENT.IBS;
  else if (isAI) headingContent = HEADING_CONTENT.ai;
  else if (isEHR) headingContent = HEADING_CONTENT.ehr;
  else if (isHighTech) headingContent = HEADING_CONTENT.hightech;
  else headingContent = HEADING_CONTENT.banking;

  // PALETTE
  
  const headingFontClass = isEHR ? "font-quadran  EHR" : "font-quadran  ";





  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  const CardContent = ({ title, description, points, image }: { title: string; description: string; points: string[]; image: string }) => (
    <section>
      {/* Top Section */}
      <div
        className="py-6 px-4 pb-8 md:p-8"
      >

        <div className="w-14 h-14 rounded-full mb-2 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-2"
          />
        </div>



        <H3
          className={`${headingFontClass} mb-4 text-[16px] xl:whitespace-nowrap md:text-[20px] lg:text-[24px] font-bold`}
        
        >
          {title}
        </H3>

        <P className="balance-text font-quicksand" >
          {description}
        </P>

      </div>

      {/* Bottom Section */}
      <div
        className={`${isSAMS ? "pl-6 pr-10 py-10" : "pl-6 pr-10 py-10"}`}
      >
        <ul className="space-y-4">
          {points.map((item, idx) => (
            <li key={idx} className="flex font-quicksand items-center gap-4">
              <Check size={25}  />
              <P >{item}</P>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  return (
    <>
      {/* ===== MOBILE ===== */}
      <div
  className={`block md:hidden ${
    isEHR
      ? "dark:bg-[#ffffff]"
      : isConciliare ||
        isCIP ||
        isBankfair ||
        isAlmanac ||
        isSAMS ||
        isRemitree ||
        isPAGO ||
        isSherlock ||
        isIBS ||
        isLOS ||isAI
      ? "dark:bg-white"
      : ""
  }`}
>
        {isSAMS ? (
          /* --- SAMS: Simple horizontal swipe (no sticky, no tall container) --- */
          <div className="w-full py-6">
            <div className="px-4 pb-4">
              <H2
                className={`text-[#2A2A2A] ${headingFontClass} text-[24px] leading-none`}
                 
              >
                {headingContent.title}
              </H2>
            </div>
            
            <div className="flex gap-4 pl-4 pr-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="relative rounded-md overflow-hidden shadow-lg flex-shrink-0 w-[85vw] snap-center"
                  
                >
                  <CardContent {...card} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* --- Other products: Original sticky scroll pattern --- */
          <div
            ref={containerRef}
            className="relative h-[200vh]"
          >
            <div className="sticky top-13 xl:top-0 min-h-screen flex flex-col justify-start w-full">
              <div className="px-4 pt-6 pb-4">
                <H2
                  className={`text-black ${headingFontClass} text-[24px] leading-none`}
                >
                  {headingContent.title}
                </H2>
              </div>
              <div className="flex-1 flex items-start overflow-hidden w-full pt-4">
                <motion.div
                  style={{ x }}
                  className="flex gap-6 pl-4"
                >
                  {cards.map((card, i) => (
                    <div
                      key={i}
                     className="relative rounded-md shadow-lg flex-shrink-0 w-[85vw] h-auto"
                      
                    >
                      <CardContent {...card} />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </div>
        
      {/* ===== DESKTOP/TABLET: Original grid layout ===== */}
    <div
  className={`hidden md:block ${
    isEHR ? "dark:bg-[#ffffff]" : "dark:bg-[#ffffff]"
  }`}
>
        <div className="w-full relative shadow-md flex flex-col items-center py-10 md:py-8 px-4 sm:px-6 md:px-10 ">
          <div className="max-w-7xl   mx-auto w-full">

            {/* HEADINGS */}
            <div className="flex flex-col space-y-4 sm:space-y-6 mb-6">
              <H2
                className={`text-[#2A2A2A] ${headingFontClass}
       text-[24px] md:text-[32px] lg:text-[48px] leading-none`}
              >
                {headingContent.title}
              </H2>
              <p className="max-w-3xl text-base md:text-lg font-quicksand xl:text-xl text-[#555555]">
                {/* {headingContent.description} */}
              </p>
            </div>

            {/* CARDS — DESKTOP GRID */}
            <div
              className="flex gap-6 overflow-x-auto snap-x   snap-mandatory lg:overflow-visible lg:grid lg:grid-cols-3 sm:gap-14 lg:gap-8 xl:gap-14 pb-4 scrollbar-hide"
            >
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  className="relative rounded-md  overflow-hidden shadow-lg snap-center flex-shrink-0
                   w-[85%] md:w-[50%] lg:w-auto min-h-[420px] xl:min-h-[600px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                >
                  <CardContent {...card} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default HWD;