import { Link } from "react-router-dom";
import { H3, P } from "../../../styles/Typography";
import { useEffect } from "react";

interface ResourcesMenuProps {
  isScrolled: boolean;
  showTopBar: boolean;
  handleKeepOpen: () => void;
  handleCloseMenus: () => void;
}

const ResourcesMenu = ({
  isScrolled,
  showTopBar,
  handleKeepOpen,
  handleCloseMenus,
}: ResourcesMenuProps) => {
  const industry = "banking-and-finance";
  const base = `/industries/${industry}`;

  const resourceItems = [
    {
      title: "Blogs",
      desc: "Expert analysis and industry trends",
      path: `${base}/blogs`,
    },
    {
      title: "Glossary",
      desc: "Key terms and definitions explained",
      path: `${base}/glossary`,
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
      bg-white dark:bg-gray-800 px-24 py-10 shadow-xl z-[9998]
      transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      ${
        isScrolled
          ? "w-[96%] max-w-none rounded-xl"
          : "w-[88%] max-w-8xl rounded-xl"
      }`}
    >
      <H3 className="dark:text-white">Resource Center for Banking and Finance Professionals</H3>

      <P className=" text-lg mt-2 mb-4">
        Insights, guides, and tools for industry success
      </P>

      <hr className="border-gray-300 h-1 mb-8" />

      <div className="grid grid-cols-2 gap-y-4 gap-x-1">
        {resourceItems.map((res, index) => (
          <Link
            key={index}
            to={res.path}
            onClick={() => {
              document.body.style.overflow = "auto";
            }}
            className="block hover:bg-gray-100  hover:dark:bg-transparent  p-2 rounded-lg transition-colors"
          >
            <h3 className="text-lg dark:text-white font-quicksand font-bold text-gray-900 mb-1">
              {res.title}
            </h3>

            <P className="text-gray-600 text-sm leading-snug">{res.desc}</P>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourcesMenu;