import { Link } from "react-router-dom";

interface MobileBuiltForDropdownProps {
    mobileDropdown: null | "products" | "resources" | "builtfor";
    setMobileDropdown: (value: null | "products" | "resources" | "builtfor") => void;
    setMenuOpen: (value: boolean) => void;
}

const MobileBuiltForDropdown = ({ mobileDropdown, setMobileDropdown, setMenuOpen }: MobileBuiltForDropdownProps) => {
    const industry = "ehr-and-pms";
    const base = `/industries/${industry}`;

    const BuiltForItems = [
        {
            title: "Long Term Care",
            desc: "Streamline resident care, compliance, and billing for nursing facilities and senior living.",
            path: `${base}/built-for/long-term-care`,
        },
        {
            title: "Home Healthcare",
            desc: "Empower field clinicians with mobile tools for documentation, scheduling, and visit-based billing.",
            path: `${base}/built-for/home-healthcare`,
        },
        {
            title: "Clinics and Hospitals",
            desc: "Unify inpatient and outpatient workflows with scalable tools for any practice size.",
            path: `${base}/built-for/clinics-and-hospitals`,
        },
    ];

    return (
        <div className="border-b border-gray-200 pb-3">
            <button onClick={() => {
                setMobileDropdown(mobileDropdown === "builtfor" ? null : "builtfor");
            }} className="w-full text-left flex justify-between items-center dark:text-white text-gray-800 text-lg font-semibold cursor-pointer">
                Built For
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "builtfor" ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
            {mobileDropdown === "builtfor" && (
                <div className="mt-3 pl-3 space-y-4">
                    {BuiltForItems.map((item, index) => (
                        <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="block py-1">
                            <h3 className="text-base dark:text-white font-semibold">{item.title}</h3>
                            <p className="text-gray-600 dark:text-white text-sm">{item.desc}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileBuiltForDropdown;
