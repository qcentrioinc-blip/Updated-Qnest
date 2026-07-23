import { Link } from "react-router-dom";
import { H3, P } from "../../../styles/Typography";
import { useEffect } from "react";

interface MegaMenuProps {
  isScrolled: boolean;
  showTopBar: boolean;
  handleKeepOpen: () => void;
  handleCloseMenus: () => void;
  preloadImages: () => void;
}

const MegaMenu = ({
  isScrolled,
  showTopBar,
  handleKeepOpen,
  handleCloseMenus,
  preloadImages,
}: MegaMenuProps) => {
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
      title: "Sherlock",
      desc: "Anti-money Laundering Detection",
      img: "/ProductSherlock/3.webp",
      path: `${base}/products/sherlock`,
    },
    {
      title: "Sams",
      desc: "Stressed asset management system",
      img: "/BNFCos/2nd.webp",
      path: `${base}/products/sams`,
    },
    
  ];

  /* Close dropdown if user scrolls */
  useEffect(() => {
    const closeMenu = () => {
      handleCloseMenus();
      document.body.style.overflow = "auto";
    };

    window.addEventListener("scroll", closeMenu);

    return () => window.removeEventListener("scroll", closeMenu);
  }, []);

  return (
    <div
      onMouseEnter={() => {
        handleKeepOpen();
        document.body.style.overflow = "hidden";
      }}
      onMouseLeave={() => {
        handleCloseMenus();
        document.body.style.overflow = "auto";
      }}
      className={`fixed left-1/2 ${
        isScrolled ? (showTopBar ? "top-[120px]" : "top-[85px]") : "top-[136px]"
      }
      translate-y-1 -translate-x-1/2
      bg-white dark:bg-gray-800 px-12 py-10 shadow-xl z-[9998]
      transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${
        isScrolled
          ? "w-[96%] max-w-none rounded-xl"
          : "w-[88%] max-w-8xl rounded-xl"
      }`}
    >
      <H3 className="dark:text-white">Banking and Finance Solutions</H3>

      <P className="text-gray-700 text-lg mt-2 mb-4">
        FFIEC-aligned compliance, payments, and core banking platforms for US financial institutions
      </P>

      <hr className="border-gray-300 h-1 mb-8" />

      <div className="grid grid-cols-3 gap-y-8 gap-x-10">
        {megaMenuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-start gap-4 hover:opacity-70 transition-opacity"
            onMouseEnter={preloadImages}
          >
            <img
              src={item.img}
              className="w-12 h-12 rounded-xl object-cover"
              loading="eager"
              alt={item.title}
            />

            <div>
              <h3 className="text-lg  dark:text-white font-quadran   text-gray-800">
                {item.title}
              </h3>

              <P className="text-gray-600 text-sm leading-snug">
                {item.desc}
              </P>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;