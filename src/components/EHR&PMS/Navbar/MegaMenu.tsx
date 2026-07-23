import { Link } from "react-router-dom";
import { H3, P } from "../../../styles/Typography";

interface MegaMenuProps {
    isScrolled: boolean;
    showTopBar: boolean;
    handleKeepOpen: () => void;
    handleCloseMenus: () => void;
    prefetchPhysicianImages: () => void;
    prefetchAdminImages: () => void;
    prefetchInsuranceCoordinatorImages: () => void;
    prefetchReceptionistImages: () => void;
    prefetchNurseImages: () => void;
}

const MegaMenu = ({ isScrolled, showTopBar, handleKeepOpen, handleCloseMenus, prefetchPhysicianImages, prefetchAdminImages, prefetchInsuranceCoordinatorImages, prefetchReceptionistImages, prefetchNurseImages }: MegaMenuProps) => {
    const industry = "ehr-and-pms";
    const base = `/industries/${industry}`;

    const megaMenuItems = [
        {
            title: "Physician",
            desc: "Tools for faster, smarter clinical decisions. ",
            path: `${base}/physician`,
        },
        {
            title: "Admin",
            desc: "Complete control over operations and revenue. ",
            path: `${base}/admin`,
        },
        {
            title: "Insurance Coordinator",
            desc: "Accelerate claims and maximize reimbursements. ",
            path: `${base}/insurance-coordinator`,
        },
        {
            title: "Receptionist",
            desc: "Streamline front desk and patient flow. ",
            path: `${base}/receptionist`,
        },
        {
            title: "Nurse",
            desc: "Efficient documentation and care coordination",
            path: `${base}/nurse`,
        },
    ];

    return (
        <div
            onMouseEnter={() => { handleKeepOpen(); }}
            onMouseLeave={handleCloseMenus}
            className={`fixed left-1/2 ${isScrolled ? (showTopBar ? "top-[112px]" : "top-[78px]") : "top-[128px]"}
translate-y-1 -translate-x-1/2
bg-white dark:bg-[#00AA72]   px-24 py-10 shadow-xl z-[9998]
transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
${isScrolled
                    ? "w-[96%] max-w-none rounded-xl"
                    : "w-[90%] max-w-7xl rounded-xl"
                }`}
        >
            <H3>Unified EHR & Practice Management</H3>
            <P className="text-gray-700 text-lg mt-2 mb-4">One platform for clinical and administrative excellence.</P>
            <hr className="border-gray-300 h-1 mb-8" />
            <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                {megaMenuItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <Link
                            to={item.path}
                            onMouseEnter={() => {
                                if (item.title === "Physician") {
                                    prefetchPhysicianImages();
                                }
                                if (item.title === "Admin") {
                                    prefetchAdminImages();
                                }
                                if (item.title === "Insurance Coordinator") {
                                    prefetchInsuranceCoordinatorImages();
                                }
                                if (item.title === "Receptionist") {
                                    prefetchReceptionistImages();
                                }
                                if (item.title === "Nurse") {
                                    prefetchNurseImages();
                                }
                            }}
                            className="flex flex-col items-start gap-1 hover:opacity-70 transition-opacity"
                        >
                            <h3 className="text-lg font-quicksand font-bold text-gray-900">{item.title}</h3>
                            <P className="text-gray-600 text-sm leading-snug">{item.desc}</P>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;
