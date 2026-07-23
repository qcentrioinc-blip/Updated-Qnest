import { H2, H4, P } from "../../../styles/Typography";

const checkItems = [
    "Role-based access control with granular user permissions and privileges",
    "Comprehensive audit trails tracking all user actions and system events",
    "Transaction-level security controls for sensitive banking operations",
    "Data protection aligned with OWASP Top 10 security standards",
];

const SingleCard = () => {
    return (
        <section className="w-full bg-white dark:bg-black py-16 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-10 md:mb-12">
                    <H2 className="text-3xl md:text-[44px] font-bold leading-tight">
                        <span className="text-[#00AA72]">Enterprise-Grade Security and</span>
                        <br className="hidden md:block" />{""}
                        <span className="text-gray-900 dark:text-white">Regulatory Compliance Standards</span>
                    </H2>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

                    {/* LEFT: White Card */}
                    <div className="lg:col-span-5 w-full bg-white dark:bg-slate-950 rounded-[24px] p-4 md:p-6    lg:p-6 shadow-[2px_2px_5px_rgba(0,0,0,0.9)] flex flex-col justify-center   ">
                        {/* Card Sub-Heading */}
                        <H4 className="text-[20px] lg:text-[22px] font-bold text-gray-900  dark:text-white leading-snug mb-4">
                            OWASP Compliant <span className="text-[#00AA72]">Security Framework</span>
                            <br className="hidden xl:block" />
                            for Banking <span className="text-[#00AA72]">Operations</span>
                        </H4>

                        {/* Description */}
                        <P className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed mb-6">
                            BankFair adheres to OWASP Top 10 security standards to protect sensitive banking data. The platform ensures secure access, transaction integrity, and comprehensive audit capabilities across all modules.
                        </P>

                        {/* Checklist */}
                        <ul className="flex flex-col space-y-4">
                            {checkItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start text-[14px] lg:text-[15px] text-gray-700 leading-relaxed"
                                >
                                    <svg
                                        className="w-[18px] h-[18px] flex-shrink-0 text-gray-800 mr-3 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <P>{item}</P>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT: Security Image */}
                    <div className="lg:col-span-7 h-[300px] lg:h-auto min-h-[460px] rounded-[24px] overflow-hidden shadow-sm">
                        <img
                            src="/Security.png"
                            alt="Cybersecurity Shield"
                            className="w-full h-full object-cover block"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SingleCard;