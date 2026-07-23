import { Link } from "react-router-dom";
import { prefetchBuiltForAIImages } from "../../Global/BuiltFor/TitleSecAI";
import { H3, P } from "../../../styles/Typography";

interface MobileBuiltForDropdownProps {
  mobileDropdown: null | "features" | "resources" | "builtfor";
  setMobileDropdown: (value: null | "features" | "resources" | "builtfor") => void;
  setMenuOpen: (value: boolean) => void;
}

const MobileBuiltForDropdown = ({ mobileDropdown, setMobileDropdown, setMenuOpen }: MobileBuiltForDropdownProps) => {
  const industry = "cloud-finops-ai";
  const base = `/industries/${industry}`;

  const builtForItemsAI = [
    {
      title: "Enterprises",
      desc: "IT and Cloud Infrastructure Teams",
      path: `${base}/built-for/enterprises`,
    },
    {
      title: "Digital Natives",
      desc: "SaaS and Application Providers",
      path: `${base}/built-for/regulated-large-enterprise`,
    },
    {
      title: "Large, Multi-Region Enterprises",
      desc: " Multi-Region Enterprises with Regulated or Mission-Critical Systems",
      path: `${base}/built-for/saas-application-providers`,
    },
  ];

  return (
    <div className="border-b border-gray-200 pb-3 font-quadran font-regular">
      <button onClick={() => {
        if (mobileDropdown !== "builtfor") prefetchBuiltForAIImages();
        setMobileDropdown(mobileDropdown === "builtfor" ? null : "builtfor");
      }} className="w-full text-left flex justify-between items-center text-gray-800 cursor-pointer">
        Built For
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "builtfor" ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {mobileDropdown === "builtfor" && (
        <div className="mt-3 pl-3 space-y-4">
          {builtForItemsAI.map((item, index) => (
            <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="block py-1">
              <H3 className="">{item.title}</H3>
              <P className="text-gray-600 ">{item.desc}</P>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileBuiltForDropdown;
