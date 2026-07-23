import { Link } from "react-router-dom";

interface MobileProductsDropdownProps {
    mobileDropdown: null | "products" | "resources" | "builtfor";
    setMobileDropdown: (value: null | "products" | "resources" | "builtfor") => void;
    setMenuOpen: (value: boolean) => void;
}

const MobileProductsDropdown = ({ mobileDropdown, setMobileDropdown, setMenuOpen }: MobileProductsDropdownProps) => {
    const industry = "banking-and-finance";
    const base = `/industries/${industry}`;

    const megaMenuItems = [
        {
      title: "Almanac",
      desc: "Asset liability management",
      img: "/AML/Almanac6.webp",
      path: `${base}/products/almanac`,
    },
    {
      title: "Bankfair",
      desc: "Complete Banking and LMS",
      img: "/ProductBankfair/HERO.webp",
      path: `${base}/products/bankfair`,
    },
    {
      title: "CIP & CDD",
      desc: "Digital Due Diligence",
      img: "/Blog/CoreBankingBlog.webp",
      path: `${base}/products/CIP`,
    },
    
    {
      title: "Conciliare",
      desc: "Advance reconcilation for Finances",
      img: "/Products/img4.webp",
      path: `${base}/products/conciliare`,
    },
    // {
    //   title: "COS",
    //   desc: "Customer Onboarding System",
    //   img: "/BNFHOME/P3.jpg",
    //   path: `${base}/products/customer-onboarding-solutions`,
    // },
    {
      title: "Internet Banking System",
      desc: "Secure online banking access",
      img: "/ProductIBS/4.webp",
      path: `${base}/products/internet-banking-system`,
    },
    
    
    {
      title: "Loan Origination System",
      desc: "Digital loan processing automation",
      img: "/LOS/4.webp",
      path: `${base}/products/loan-origination-system`,
    },
    {
      title: "Pago",
      desc: "Complete payment for banks",
      img: "/Pago/ImageGrid2.webp",
      path: `${base}/products/pago`,
    },
    {
      title: "Remitree",
      desc: "Global remittance middleware",
      img: "/LOS/3.webp",
      path: `${base}/products/remitree`,
    },
    {
      title: "Sams",
      desc: "Stressed asset management system",
      img: "/BNFCos/2nd.webp",
      path: `${base}/products/sams`,
    },
    {
      title: "Sherlock",
      desc: "Anti-money Laundering Detection",
      img: "/ProductSherlock/3.webp",
      path: `${base}/products/sherlock`,
    },
    ];

    return (
        <div className="border-b border-gray-200 scrollbar-hide pb-3">
            <button
                onClick={() => setMobileDropdown(mobileDropdown === "products" ? null : "products")}
                className="w-full dark:text-white  text-left flex justify-between items-center text-gray-800 text-lg font-semibold cursor-pointer py-2"
            >
                Products
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "products" ? "rotate-180" : ""}`}
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {mobileDropdown === "products" && (
                <div
                    className="mt-2 pl-3 pr-2 space-y-1   scrollbar-hide overflow-y-auto overscroll-contain"
                    style={{ maxHeight: "calc(100vh - 350px)" }}
                >
                    {megaMenuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="flex gap-3 items-start py-2 border-b border-gray-100 last:border-0"
                        >
                            <img
                                src={item.img}
                                className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                                loading="eager"
                                alt={item.title}
                            />
                            <div>
                                <h3 className="text-base dark:text-white font-semibold">{item.title}</h3>
                                <p className="text-gray-600 dark:text-white text-sm leading-snug">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileProductsDropdown;