"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { P, H2, H4 } from "../../../styles/Typography";
import { Link } from "react-router-dom";

const categories = [
  "All Posts",
  "AML",
  "Banking",
  "Bankfair",
  "Pago",
  "Sams",
  "KYC",
  "LOS",
  "Remittance",
  "IBS",
];

const posts = [
  {
    id: 1,
    slug: "what-is-aml-compliance",
    title: "What Is AML Compliance and Why Banks Cant Afford to Ignore",
    description: "Banks have to deal with very specific, high-stakes responsibilities when it comes to financial crime...",
    date: "13 Feb 2026",
    category: "AML",
    image: "/Blog/AMLBlog.webp",
  },
  {
    id: 2,
    slug: "what-the-difference-and-why-both-matter-for-your-bank",
    title: "KYC vs. CDD: What's the Difference and Why Both Matter",
    description: "When it comes to banking compliance, there are two terms that are important, used every day, and still mixed...",
    date: "10 Feb 2026",
    category: "KYC",
    image: "/Blog/KYCBlog.webp",
  },
  {
    id: 3,
    slug: "what-is-core-banking-and-when-should",
    title: "What Is Core Banking and When Should a Financial ...",
    description: "If your financial institution is still working on old, outdated systems and functions, there is a high chance...",
    date: "8 Feb 2026",
    category: "Banking",
    image: "/Blog/CoreBanking.webp",
  },
  {
    id: 4,
    slug: "how-to-reduce-payment-processing",
    title: "How to Reduce Process Payment Costs for Your Financial Institution",
    description: "Most of the financial institutions face challenges from high transaction fees charged by traditional card networks...",
    date: "5 Feb 2026",
    category: "Pago",
    image: "/Blog/PaymenetProcess.webp",
  },
  {
    id: 5,
    slug: "a-beginner's-Guide-to-interest-rater-risk",
    title: "A Beginner's Guide To Interest Rate Risk Management",
    description: "If there is one top concern for community bankers in 2026, it is interest rate risk. Even small shifts in rates...",
    date: "3 Feb 2026",
    category: "AML",
    image: "/Blog/RiskManagemenrt.webp",
  },
  {
    id: 6,
    slug: "ways-to-improve-real-time-payment",
    title: "Ways to Improve Real-Time Payment Monitoring and ... ",
    description: "Dealing with fraud and financial crime is one of the biggest challenges banks face today. The global payment fraud losses ...",
    date: "6 March 2026",
    category: "Pago",
    image: "/Blog/RealTime.webp",
  },
  {
    id: 7,
    slug: "how-to-automate-regulatory-reporting-for-liquidity",
    title: "How To Automate Regulatory Reporting For Liquidity And Asset Management",
    description: "When it comes to managing money and risk, banks face constant pressure to follow strict rules like Basel III and ...",
    date: "8 March 2026",
    category: "AML",
    image: "/Blog/regulatoryreporting.webp",
  },
  {
    id: 8,
    slug: "common-challenges-in-manual-np-tracking",
    title: "Common Challenges In Manual NPL Tracking & How Automation Can Solve Them ",
    description: "These non-performing assets can directly impact profitability and regulatory standing. Yet, many banks still rely  ...",
    date: "8 March 2026",
    category: "Sams",
    image: "/Blog/npatracking.webp",
  },
  {
    id: 9,
    slug: "five-ways-to-use-loan-origination-data-to-manage-customer-dropout",
    title: "Five Ways To Use Loan Origination Data To Manage Customer Dropout",
    description: "In today's times, a significant percentage of loan applicants start the process but never finish it, leading to lost revenue...",
    date: "24 March 2026",
    category: "LOS",
    image: "/Blog/LOSBLOG.webp",
  },
  {
    id: 10,
    slug: "outward-vs-inward-remittances",
    title: "Outward vs. Inward Remittances: How Banks Can Automate Both Sides Of The Transaction",
    description: "For banks to efficiently manage cross-border remittance automation, they must handle two distinct transaction sides...",
    date: "24 March 2026",
    category: "Remittance",
    image: "/Blog/RemitreeBlog.webp",
  },
  {
    id: 11,
    slug: "guide-to-secure-fund-transfers",
    title: "A Customer's Guide to Secure Fund Transfers: Domestic, International...",
    description: "When it comes to fund transfers online, customers want speed and safety. Internet banking has made moving money easier...",
    date: "27 March 2026",
    category: "IBS",
    image: "/Blog/CoreBankingBlog.webp",
  },
  {
    id: 12,
    slug: "automating-income-recognition-and-asset-classification",
    title: "Automating Income Recognition and Asset Classification (IRAC) Compliance...",
    description: "Since compliance is a highly important aspect for banks, every bank must follow the Income Recognition ...",
    date: "10 April 2026",
    category: "Bankfair",
    image: "/Blog/CoreBankingBlog.webp",
  },
];

export default function BlogGridSection() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("Sort By");
  const sortRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const POSTS_PER_PAGE = 9;

  const categoryFiltered = useMemo(() => {
    if (activeCategory === "All Posts") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const searchedFiltered = useMemo(() => {
    return categoryFiltered.filter((post) => {
      const text = (post.title + post.description).toLowerCase();
      return text.includes(searchTerm.toLowerCase());
    });
  }, [categoryFiltered, searchTerm]);

  const sortedPosts = useMemo(() => {
    const arr = [...searchedFiltered];
    if (sortType === "Latest") arr.sort((a, b) => b.id - a.id);
    else if (sortType === "A - Z") arr.sort((a, b) => a.title.localeCompare(b.title));
    return arr;
  }, [searchedFiltered, sortType]);

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return sortedPosts.slice(start, start + POSTS_PER_PAGE);
  }, [currentPage, sortedPosts]);

  return (
    <section className="w-full pt-24 xl:pt-36 pb-10 dark:bg-black bg-white">

      <div className="sticky  top-0 xl:top-[64px] z-40 px-6 md:px-16 dark:bg-gray-900 bg-white pt-4 pb-2 shadow-sm">

        {/* HEADING + SEARCH */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-6">
          <H2 className="text-[#00AA72] font-bold">Banking & Finance Insights</H2>

          <div className="relative w-full md:w-[300px] xl:w-[500px] flex-none">
            <input
              type="text"
              placeholder="Search posts"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border dark:text-white border-gray-300 rounded-md shadow-sm py-3 px-6 pr-10 outline-none focus:border-[#00AA72]"
            />
            <span className="absolute right-4 top-3 text-[#141414]">🔍</span>
          </div>
        </div>

        {/* CATEGORIES + SORT */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <div className="flex overflow-x-auto flex-nowrap gap-3 pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full border flex-none transition-colors duration-200 ${activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:border-gray-500"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative ml-auto flex-none" ref={sortRef}>
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="px-4 py-2 rounded-full border border-gray-400 bg-white flex items-center gap-2"
            >
              {sortType}
              <span>▼</span>
            </button>

            {sortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl border z-20">
                {["A - Z", "Latest"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSortType(opt);
                      setSortOpen(false);
                      setCurrentPage(1);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${sortType === opt ? "font-semibold" : ""
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* GRID */}
      {paginatedPosts.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-6 px-6 md:px-16">
          {paginatedPosts.map((post) => (
            <Link
              key={post.id}
              to={`/industries/banking-and-finance/blogs/${post.slug}`}
              className="block group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-neutral-200 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                <div className="overflow-hidden h-[220px] sm:h-[240px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/400x240/cccccc/333333?text=Blog";
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-xs font-semibold  font-quicksand  dark:text-white  text-bold text-[12px] text-[#00AA72] uppercase tracking-wide">
                    {post.category}
                  </span>
                  <H4 className="font-semibold text-gray-900  dark:text-[#00AA72] leading-snug">{post.title}</H4>
                  <P className="text-[#141414] text-sm leading-snug">{post.description}</P>
                  <div className="pt-2 text-gray-400 text-sm">
                    📅 {post.date}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400 text-lg">
          No posts found.
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-10">
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-md border ${currentPage === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </section>

  );
}