import React, { useMemo } from 'react';
import { H2, H4, P } from '../../../styles/Typography';
import { Link, useLocation } from 'react-router-dom';

interface ArticleData {
  id: number;
  slug: string;
  date: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
}

const NEW_MOCK_ARTICLES: ArticleData[] = [
  {
    id: 4,
    slug: "how-to-automate-regulatory-reporting-for-liquidity",
    title: "lorem ipsum",
    subtitle: "How To Automate Regulatory Reporting For Liquidity And ...",
    description: "When it comes to managing money and risk, banks face constant pressure to follow strict rules like Basel III and ...",
    date: "8 March 2026",
    category: "AML",
    imageSrc: "/Blog/regulatoryreporting.webp",
  },
  {
    id: 5,
    slug: "what-is-core-banking-and-when-should",
    date: '8 Feb 2026',
    imageSrc: '/Blog/CoreBankingBlog.webp',
    title: 'Sed ut perspiciatis Unde',
    subtitle: 'What Is Core Banking and When Should a Financial Institution..',
    description: 'If your financial institution is still working on old, outdated systems and functions, there is a high chance that you are falling... ',
    category: 'Banking',
  },
  {
    id: 6,
    slug: "what-is-aml-compliance",
    date: '13 Feb 2026',
    imageSrc: '/Blog/AMLBlog.webp',
    title: 'Sed ut perspiciatis Unde',
    subtitle: 'What Is AML Compliance and Why Banks Cant Afford to Ignore',
    description: 'Banks have to deal with very specific, high-stakes responsibilities when it comes to financial crime...',
    category: 'AML',
  },
  {
    id: 7,
    slug: "what-the-difference-and-why-both-matter-for-your-bank",
    date: '10 Feb 2026',
    imageSrc: '/Blog/KYCBlog.webp',
    title: 'Sed ut perspiciatis Unde',
    subtitle: "KYC vs. CDD: What's the Difference and Why Both Matter",
    description: 'When it comes to banking compliance, there are two terms that are important, used every day, and still mixed...',
    category: 'KYC',
  },
  {
    id: 8,
    slug: "how-to-reduce-payment-processing",
    date: '5 Feb 2026',
    imageSrc: '/Blog/CoreBankingBlog.webp',
    title: 'Sed ut perspiciatis Unde',
    subtitle: 'How to Reduce Process Payment Costs for Your Financial Institution',
    description: 'Most of the financial institutions face challenges from high transaction fees charged by traditional card networks...',
    category: 'Pago',
  },
  {
    id: 9,
    slug: "a-beginner's-Guide-to-interest-rater-risk",
    date: '3 Feb 2026',
    imageSrc: '/Blog/RiskManagemenrt.webp',
    title: 'Sed ut perspiciatis Unde',
    subtitle: "A Beginner's Guide To Interest Rate Risk Management",
    description: 'If there is one top concern for community bankers in 2026, it is interest rate risk. Even small shifts in rates...',
    category: 'AML',
  },
  {
    id: 10,
    slug: "ways-to-improve-real-time-payment",
    title: 'Sed ut perspiciatis Unde',
    subtitle: "Ways to Improve Real-Time Payment Monitoring ..",
    description: "Dealing with fraud and financial crime is one of the biggest challenges banks face today. The global payment fraud losses ...",
    date: "6 March 2026",
    category: "Pago",
    imageSrc: "/Blog/RealTime.webp",
  },
  {
    id: 11,
    slug: "common-challenges-in-manual-np-tracking",
    title: 'Sed ut perspiciatis Unde',
    subtitle: "Common Challenges In Manual NPL Tracking & How Automation Can Solve Them ",
    description: "These non-performing assets can directly impact profitability and regulatory standing. Yet, many banks still rely  ...",
    date: "8 March 2026",
    category: "Sams",
    imageSrc: "/Blog/npatracking.webp",
  },
  {
    id: 12,
    slug: "five-ways-to-use-loan-origination-data-to-manage-customer-dropout",
    date: '24 March 2026',
    imageSrc: '/Blog/LOSBLOG.webp',
    title: 'Sed ut perspiciatis Unde',
    subtitle: 'Five Ways To Use Loan Origination Data To Manage Customer Dropout',
    description: 'In today\'s times, a significant percentage of loan applicants start the process but never finish it, leading to lost revenue...',
    category: 'LOS',
  },
  {
    id: 13,
    slug: "outward-vs-inward-remittances",
    date: '24 March 2026',
    imageSrc: '/Blog/RemitreeBlog.webp',
    title: 'Sed ut perspiciatis Unde',
    subtitle: 'Outward vs. Inward Remittances: How Banks Can Automate Both Sides Of The Transaction',
    description: 'For banks to efficiently manage cross-border remittance automation, they must handle two distinct transaction sides...',
    category: 'Remittance',
  },
  {
    id: 14,
    slug: "guide-to-secure-fund-transfers",
    date: '27 March 2026',
    imageSrc: '/Blog/CoreBankingBlog.webp',
    title: 'Sed ut perspiciatis Unde',
    subtitle: "A Customer's Guide to Secure Fund Transfers: Domestic, International, and Between Accounts",
    description: 'When it comes to fund transfers online, customers want speed and safety. Internet banking has made moving money easier...',
    category: 'IBS',
  },
   {
    id: 15,
    slug: "automating-income-recognition-and-asset-classification",
    date: '10 April 2026',
    imageSrc: '/Blog/bankfairblog.webp',
    title: 'Sed ut perspiciatis Unde',
    subtitle: "Automating Income Recognition and Asset Classification (IRAC) Compliance...",
    description: 'When it comes to fund transfers online, customers want speed and safety. Internet banking has made moving money easier...',
    category: 'Bankfair',
  },
];

// Map product slug in URL → blog category
const PRODUCT_TO_CATEGORY: Record<string, string> = {
  almanac: 'AML',
  pago: 'Pago',
  sams: 'Sams',
  kyc: "KYC",
  los: "LOS",
  "loan-origination-system": "LOS",
  remittance: "Remittance",
  "remittance-workflow": "Remittance",
  remitree: "Remittance",
  "internet-banking-system": "IBS",
  bankfair: "Bankfair"
};

const ArticleCard: React.FC<ArticleData> = ({ date, imageSrc, title, subtitle, description }) => {
  const ASPECT_RATIO_STYLE = { aspectRatio: '405.5 / 317.9535827636719' };
  const FALLBACK_WIDTH = 405;
  const FALLBACK_HEIGHT = 318;

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden rounded-lg" style={ASPECT_RATIO_STYLE}>
        <img
          src={imageSrc}
          alt={title}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/${FALLBACK_WIDTH}x${FALLBACK_HEIGHT}/cccccc/333333?text=Image`;
          }}
          className="w-full h-full object-contain"
          style={{ borderRadius: '8px' }}
        />
      </div>
      <P className="text-gray-600 my-2 text-sm dark:text-white">{date}</P>
      <H4 className="mb-4 dark:text-[#00AA72]">{subtitle}</H4>
      <P className="text-gray-700 dark:text-white mb-4">{description}</P>
    </div>
  );
};

const ImageCard: React.FC = () => {
  const { pathname } = useLocation();

  const displayedArticles = useMemo(() => {
    // Extract product slug from URL e.g. "almanac" from ".../products/almanac"
    const match = pathname.match(/\/products\/([^/]+)/);
    const productSlug = match ? match[1].toLowerCase() : null;
    const category = productSlug ? PRODUCT_TO_CATEGORY[productSlug] : null;

    if (category) {
      // Show only blogs matching this product's category (up to 3)
      return NEW_MOCK_ARTICLES.filter(a => a.category === category).slice(0, 3);
    }

    // No matching category → show 3 random articles
    return [...NEW_MOCK_ARTICLES].sort(() => Math.random() - 0.5).slice(0, 3);
  }, [pathname]);

  return (
    <section className="pt-10 dark:bg-black">
      <div className="max-w-7xl mx-auto xl:max-w-8xl pb-10 xl:mx-auto px-6 xl:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6 sm:mb-8 lg:mb-12">
          <H2 className="text-[#00AA72] text-xl sm:text-2xl lg:text-3xl flex-shrink-0">
            Banking & Finance Insights
          </H2>
          <Link to="/industries/banking-and-finance/blogs">
            <button className="group flex items-center justify-center w-auto h-[44px] sm:h-[48px] px-[20px] sm:px-[24px] py-[10px] sm:py-[12px] rounded-[8px] font-quicksand font-bold text-[14px] sm:text-[16px] bg-[#141414] text-white transition-all duration-300 ease-in-out border border-transparent hover:bg-white hover:text-[#141414] hover:border-[#010101] hover:border-b-[4px] hover:-translate-y-[2px] cursor-pointer dark:border-white shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]">
              View All
              <span className="flex items-center gap-[8px]">
                <span className="relative flex items-center justify-center w-[20px] sm:w-[23px] h-[20px] sm:h-[23px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                    <path d="M7 7h10v10" /><path d="M7 17L17 7" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </span>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedArticles.map(article => (
            <Link key={article.id} to={`/industries/banking-and-finance/blogs/${article.slug}`} className="block">
              <ArticleCard {...article} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCard;