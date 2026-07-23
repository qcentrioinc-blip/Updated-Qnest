
import { H3, P } from "../../../styles/Typography";

interface MegaMenuProps {
  isScrolled: boolean;
  showTopBar: boolean;
  handleKeepOpen: () => void;
  handleCloseMenus: () => void;
}

const MegaMenu = ({ isScrolled, showTopBar, handleKeepOpen, handleCloseMenus }: MegaMenuProps) => {
  const industry = "cloud-finops-ai";
  const base = `/industries/${industry}`;

  const megaMenuItems = [
    {
      title: "AI Features",
      desc: "Intelligent agents that automate complex workflows.",
      img: "/AIOptimization/Resource1.png",
      path: `${base}/features`,
    },
    // {
    //   title: "Process Automation",
    //   desc: "End-to-end automation for repetitive business tasks.",
    //   img: "/AIOptimization/Resource2.png",
    //   path: `${base}/process-automation`,
    // },
  ];

  return (
    <div
      onMouseEnter={() => { handleKeepOpen(); }}
      onMouseLeave={handleCloseMenus}
      className={`fixed left-1/2 ${isScrolled ? (showTopBar ? "top-[141px]" : "top-[85px]") : "top-32"} translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl bg-gray-50 px-24 py-10 shadow-xl rounded-lg z-[9998]`}
    >
      <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
      <P className="text-gray-700 text-lg mt-2 mb-4">Intelligent automation solutions to transform your business operations.</P>
      <hr className="border-gray-300 h-1 mb-8" />
      <div className="grid grid-cols-2 gap-y-4 gap-x-1">
        {megaMenuItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <a href={item.path} className="flex items-start gap-4">
              <img src={item.img} alt={item.title} className="w-12 h-12 rounded-xl object-cover" loading="eager" />
              <div>
                <H3 className=" text-gray-900">{item.title}</H3>
                <P className="text-gray-600 ">{item.desc}</P>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
