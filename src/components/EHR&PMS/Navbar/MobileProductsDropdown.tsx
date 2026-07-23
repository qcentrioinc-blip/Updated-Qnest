import { Link } from "react-router-dom";

interface MobileProductsDropdownProps {
    mobileDropdown: null | "products" | "resources" | "builtfor";
    setMobileDropdown: (value: null | "products" | "resources" | "builtfor") => void;
    setMenuOpen: (value: boolean) => void;
}

const MobileProductsDropdown = ({ mobileDropdown, setMobileDropdown, setMenuOpen }: MobileProductsDropdownProps) => {
    const industry = "ehr-and-pms";
    const base = `/industries/${industry}`;

    const megaMenuItems = [
        {
            title: "Physician",
            desc: "Tools for faster, smarter clinical decisions.",
            path: `${base}/physician`,
        },
        {
            title: "Admin",
            desc: "Complete control over operations and revenue.",
            path: `${base}/admin`,
        },
        {
            title: "Insurance Coordinator",
            desc: "Accelerate claims and maximize reimbursements.",
            path: `${base}/insurance-coordinator`,
        },
        {
            title: "Receptionist",
            desc: "Streamline front desk and patient flow.",
            path: `${base}/receptionist`,
        },
        {
            title: "Nurse",
            desc: "Efficient documentation and care coordination",
            path: `${base}/nurse`,
        },
    ];

    return (
        <div className="border-b border-gray-200 pb-3">
            <button onClick={() => {
                setMobileDropdown(mobileDropdown === "products" ? null : "products");
            }} className="w-full text-left flex justify-between items-center dark:text-white text-gray-800 text-lg font-semibold cursor-pointer">
                Solutions
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "products" ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
            {mobileDropdown === "products" && (
                <div className="mt-3 pl-3 space-y-4">
                    {megaMenuItems.map((item, index) => (
                        <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="flex gap-3 items-start py-2">
                            <div>
                                <h3 className="text-base  dark:text-white font-semibold">{item.title}</h3>
                                <p className="text-gray-600 dark:text-white text-sm">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileProductsDropdown;
