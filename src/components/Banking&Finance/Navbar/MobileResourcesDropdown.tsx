import { Link } from "react-router-dom";

interface MobileResourcesDropdownProps {
    mobileDropdown: null | "products" | "resources" | "builtfor";
    setMobileDropdown: (value: null | "products" | "resources" | "builtfor") => void;
    setMenuOpen: (value: boolean) => void;
}

const MobileResourcesDropdown = ({ mobileDropdown, setMobileDropdown, setMenuOpen }: MobileResourcesDropdownProps) => {
    const industry = "banking-and-finance";
    const base = `/industries/${industry}`;

    const resourceItems = [
        // {
        //     title: "Newsletter",
        //     desc: "Stay updated with curated insights and announcements.",
        //     path: `${base}/news`
        // },
        // {
        //     title: "Case Studies",
        //     desc: "Upcoming webinars, conferences, and live sessions.",
        //     path: `${base}/events`
        // },
        // {
        //     title: "Whitepapers",
        //     desc: "Deep technical insights and strategic research.",
        //     path: `${base}/whitepapers`
        // },
        {
            title: "Blogs",
            desc: "Expert commentary, tips, and industry knowledge.",
            path: `${base}/blogs`
        },
        {
            title: "Glossary",
            desc: "Expert commentary, tips, and industry knowledge.",
            path: `${base}/glossary`
        },
    ];

    return (
        <div className="border-b border-gray-200 pb-3">
            <button onClick={() => {
                setMobileDropdown(mobileDropdown === "resources" ? null : "resources");
            }} className="w-full text-left flex dark:text-white justify-between items-center text-gray-800 text-lg font-semibold cursor-pointer">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "resources" ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
            {mobileDropdown === "resources" && (
                <div className="mt-3 pl-3 space-y-4">
                    {resourceItems.map((item, index) => (
                        <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="block py-2">
                            <h3 className="text-base dark:text-white font-semibold">{item.title}</h3>
                            <p className="text-gray-600 dark:text-white text-sm">{item.desc}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileResourcesDropdown;
