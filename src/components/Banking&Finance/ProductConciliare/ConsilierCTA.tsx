import { Link } from "react-router-dom";
// import { ContactUs } from "../../../styles/Button";

const ConsilierCTA = () => {
    const features = [
        { id: 1, label: "Consolidation\nand Enrichment", icon: "/BNFConsilier/puzzle.svg" },
        { id: 2, label: "Data Sources\nConfiguration", icon: "/BNFConsilier/ai.svg" },
        { id: 3, label: "File\nConfiguration", icon: "/BNFConsilier/server.svg" },
        { id: 4, label: "Reconciliation\nAutomation", icon: "/BNFConsilier/automation.svg" },
    ];

    return (
        <section className="w-full bg-white dark:bg-black py-6 md:py-8 lg:py-12 overflow-hidden">
            <div className="max-w-8xl mx-auto px-4 md:px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-[40px] xl:gap-[70px] items-stretch lg:items-start">

                    {/* ─────────── LEFT COLUMN ─────────── */}
                    <div className="flex flex-col gap-5 md:gap-7 w-full lg:w-[55%] xl:w-auto xl:flex-shrink-0">

                        {/* ── Title ── */}
                        <h2
                            className="w-full lg:w-full xl:w-[721px] dark:text-white  text-[#141414] m-0"
                            style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(32px, 5vw, 64px)",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                            }}
                        >
                            Advantages That Set Conciliare Apart 
                        </h2>

                        {/* ── Left Paragraph ── */}
                        <p
                            className="w-full md:max-w-full lg:w-[95%] dark:text-white  xl:w-[516px] text-[#141414] m-0"
                            style={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: "clamp(14px, 1.5vw, 16px)",
                                lineHeight: "130%",
                                letterSpacing: "0%",
                            }}
                        >
                            Conciliare eliminates manual reconciliation across banking, retail, and commerce with intelligent automation. Our platform handles disparate data sources, varied formats, and hidden references without custom coding. Financial institutions achieve higher accuracy while reducing operational overhead significantly.
                        </p>

                        {/* ── Blue Outer Card ── */}
                        <div
                            className="w-full lg:w-full xl:w-[650px] box-border rounded-[10px] bg-[#00AA72] flex items-center justify-center px-4 py-5 md:px-6 md:py-6 xl:px-[37px] xl:py-8"
                        >
                            {/* ── White Inner Card ── */}
                            <div
                                className="w-full lg:w-full xl:w-[575px] box-border rounded-[20px] bg-white px-4 py-5 md:pl-6 md:pr-8 md:py-[30px] lg:p-[20px] xl:pt-[30px] xl:pr-[72px] xl:pb-[30px] xl:pl-[34px]"
                            >
                                {/* ── Features Grid ── */}
                                <div
                                    className="w-full lg:w-full xl:w-[469px] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 lg:gap-6 items-center xl:h-[142px]"
                                >
                                    {features.map((feature) => (
                                        <div
                                            key={feature.id}
                                            className="flex items-center gap-2.5 sm:gap-3.5"
                                        >
                                            {/* Blue Circle with Icon */}
                                            <div
                                                className="w-10 h-10 min-w-10 sm:w-[51px] sm:h-[51px] sm:min-w-[51px] rounded-full border border-gray-400 shadow-gray-400 bg-white flex items-center justify-center p-2 sm:p-2.5"
                                            >
                                                <img
                                                    src={feature.icon}
                                                    alt={feature.label.replace('\n', ' ')}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            {/* Feature Label */}
                                            <span
                                                className="sm:w-[129px] text-black whitespace-pre-line"
                                                style={{
                                                    fontFamily: "'Quicksand', sans-serif",
                                                    fontWeight: 700,
                                                    fontSize: "clamp(14px, 1.5vw, 16px)",
                                                    lineHeight: "100%",
                                                    letterSpacing: "0%",
                                                }}
                                            >
                                                {feature.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─────────── RIGHT COLUMN ─────────── */}
                    <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-[42%] xl:w-auto xl:flex-shrink-0">

                        {/* ── Dummy Image ── */}
                        <img
                            src="/BNFConsilier/Advantages.webp"
                            alt="Architecture visual"
                            className="w-full lg:w-full xl:w-[500px] h-auto lg:h-auto xl:h-[350px] rounded-xl xl:rounded-[20px] object-cover block lg:aspect-[500/350] xl:aspect-[500/350]"
                        />

                        {/* ── Right Paragraph ── */}
                        <p
                            className="w-full lg:w-full xl:w-[500px] dark:text-white  text-[#141414] m-0"
                            style={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: "clamp(14px, 1.5vw, 16px)",
                                lineHeight: "130%",
                                letterSpacing: "0%",
                            }}
                        >
                            The system scales effortlessly from standard to enterprise versions with advanced parallelism and aggressive scheduling. Generic parsers support SWIFT, BAI2, MT940, and SAP formats. Data enrichment extracts critical identifiers from free text, enabling complex one-to-many matching scenarios.
                        </p>

                        {/* ── Contact Us Button ── */}
                        <Link
                            to="#contact-us"
                            onClick={(e) => {
                                const el = document.getElementById("contact-us");
                                if (el) {
                                    e.preventDefault();
                                    el.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            {/* <ContactUs>CONTACT US</ContactUs> */}
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsilierCTA;