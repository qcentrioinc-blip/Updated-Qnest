import { H3, P } from "../../../styles/Typography";

interface ResourcesMenuProps {
  isScrolled: boolean;
  showTopBar: boolean;
  handleKeepOpen: () => void;
  handleCloseMenus: () => void;
}

const ResourcesMenu = ({ isScrolled, showTopBar, handleKeepOpen, handleCloseMenus }: ResourcesMenuProps) => {
  const industry = "cloud-finops-ai";
  const base = `/industries/${industry}`;

  const resourceItemsAI = [
    {
      title: "Case Studies",
      desc: "Real-world AI Optimization success stories and ROI metrics.",
      path: `${base}/resources`,
    },
    {
      title: "Newsletters",
      desc: "Latest trends in AI, automation, and machine learning.",
      path: `${base}/newsletter`,
    },
    {
      title: "Whitepapers",
      desc: "Real-world AI Optimization success stories and ROI metrics.",
      path: `${base}/whitepaper`,
    },
    {
      title: "Glossary",
      desc: "Real-world AI Optimization success stories and ROI metrics.",
      path: `${base}/glossary`,
    },
  ];

  return (
    <div
      onMouseEnter={() => { handleKeepOpen(); }}
      onMouseLeave={handleCloseMenus}
      className={`fixed left-1/2 ${isScrolled ? (showTopBar ? "top-[141px]" : "top-[85px]") : "top-32"} translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl bg-gray-50 px-24 py-10 shadow-xl rounded-lg z-[9998]`}
    >
      <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
      <P className="text-gray-700 text-lg mt-2 mb-4">Knowledge hub for AI optimization implementation and best practices.</P>
      <hr className="border-gray-300 h-1 mb-8" />
      <div className="grid grid-cols-2 gap-y-4 gap-x-1">
        {resourceItemsAI.map((res, index) => (
          <a key={index} href={res.path} className="block">
            <H3 className=" text-gray-900 mb-1">{res.title}</H3>
            <P className="text-gray-600 text-sm leading-snug">{res.desc}</P>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourcesMenu;
