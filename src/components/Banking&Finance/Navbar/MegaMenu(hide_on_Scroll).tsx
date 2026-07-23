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
      img: "/BNFHOME/P1.png",
      path: `${base}/products/almanac`,
    },
    {
      title: "Bankfair",
      desc: "Lorem ipsum dolor sit amet",
      img: "/BNFHOME/P1.png",
      path: `${base}/products/bankfair`,
    },
    {
      title: "Conciliare",
      desc: "Lorem ipsum dolor sit amet",
      img: "/BNFHOME/P2.jpg",
      path: `${base}/products/conciliare`,
    },
    {
      title: "Internet Banking System",
      desc: "Secure online banking access",
      img: "/BNFHOME/P3.jpg",
      path: `${base}/products/internet-banking-system`,
    },
    {
      title: "COS",
      desc: "Customer Onboarding System",
      img: "/BNFHOME/P3.jpg",
      path: `${base}/products/customer-onboarding-solutions`,
    },
    {
      title: "CIP & CDD",
      desc: "Lorem ipsum dolor sit amet",
      img: "/BNFHOME/P9.jpg",
      path: `${base}/products/CIP`,
    },
    {
      title: "Loan Origination System",
      desc: "Digital loan processing automation",
      img: "/BNFHOME/P5.jpg",
      path: `${base}/products/loan-origination-system`,
    },
    {
      title: "Pago",
      desc: "Complete payment for banks",
      img: "/BNFHOME/P6.jpg",
      path: `${base}/products/pago`,
    },
    {
      title: "Remitree",
      desc: "Global remittance middleware",
      img: "/BNFHOME/P7.jpg",
      path: `${base}/products/remitree`,
    },
    {
      title: "Sherlock",
      desc: "Lorem ipsum dolor sit amet",
      img: "/BNFHOME/P4.png",
      path: `${base}/products/sherlock`,
    },
    {
      title: "Sams",
      desc: "Stressed asset management system",
      img: "/BNFHOME/P8.jpg",
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
      bg-white px-12 py-10 shadow-xl z-[9998]
      transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${
        isScrolled
          ? "w-[96%] max-w-none rounded-xl"
          : "w-[88%] max-w-8xl rounded-xl"
      }`}
    >
      <H3>Banking and Finance Solutions</H3>

      <P className="text-gray-700 text-lg mt-2 mb-4">
        Automated compliance and reconciliation platforms for financial
        institutions
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
              <h3 className="text-lg font-quadran   text-gray-800">
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