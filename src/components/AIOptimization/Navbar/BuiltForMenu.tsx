import { Link } from "react-router-dom";
import { H3, H4, P } from "../../../styles/Typography";
import { prefetchBuiltForAIImages } from "../../Global/BuiltFor/TitleSecAI";

interface BuiltForMenuProps {
  isScrolled: boolean;
  showTopBar: boolean;
  handleKeepOpen: () => void;
  handleCloseMenus: () => void;
  onLinkClick?: () => void;
}

const BuiltForMenu = ({ isScrolled, showTopBar, handleKeepOpen, handleCloseMenus, onLinkClick }: BuiltForMenuProps) => {
  const industry = "cloud-finops-ai";
  const base = `/industries/${industry}`;

  const builtForItemsAI = [
    {
      title: "Enterprise IT Teams",
      desc: "IT and Cloud Infrastructure Teams",
      path: `${base}/built-for/enterprises`,
    },
    {
      title: "SaaS Application Providers",
      desc: "SaaS and Application Providers",
      path: `${base}/built-for/saas-application-providers`,
    },
    {
      title: "Regulated Large Enterprises",
      desc: " Multi-Region Enterprises with Regulated or Mission-Critical Systems",
      path: `${base}/built-for/regulated-large-enterprise`,
    },
  ];

  return (
    <div
      onMouseEnter={() => {
        handleKeepOpen();
        prefetchBuiltForAIImages();
      }}
      onMouseLeave={handleCloseMenus}
      className={`fixed left-1/2 ${isScrolled ? (showTopBar ? "top-[130px]" : "top-[60px]") : "top-32"}
translate-y-1 -translate-x-1/2
bg-gray-50 dark:bg-gray-800 px-24 py-8 shadow-xl z-[9998]
transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
${isScrolled
          ? "w-[96%] max-w-none rounded-xl"
          : "w-[90%] max-w-7xl rounded-xl"
        }`}
    >
      <H3 className="dark:text-white">Engineered for Every Industry Need </H3>
      <P className="text-gray-700 text-lg mt-2 mb-2">Find the tailored CloudDIET solution built for your organization's scale, complexity, and compliance requirements</P>
      <hr className="border-gray-300 h-1 " />
      <div className="grid grid-cols-3 gap-y-4 gap-x-1">
        {builtForItemsAI.map((item, index) => (
          <Link key={index} to={item.path} onClick={onLinkClick} className="block cursor-pointer pointer-events-auto hover:bg-gray-100 dark:hover:bg-gray-400 pt-2 rounded-lg transition-colors">
            <H4 className="mb-2">{item.title}</H4>
            <P className="text-gray-600">{item.desc}</P>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BuiltForMenu;
