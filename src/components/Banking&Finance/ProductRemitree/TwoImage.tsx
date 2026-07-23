import { H2, P } from "../../../styles/Typography";

// ── Check Icon ────────────────────────────────────────────────
const CheckIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-[2px] flex-shrink-0"
    >
        <path
            d="M4 10.5L8.5 15L16 6"
            stroke="#00AA72"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// ── Shared Content ────────────────────────────────────────────
const content = {
    title1: <> Inward Remittance Key<br />Features and Capabilities</>,
    description1:
        " The platform automates inward remittance processing with straight-through processing, exceptions handling, and seamless integration with core banking and treasury systems.",
    features1: [
        "Automated straight-through processing for inward remittances",
        "Exceptions handling for unmatched messages and settlements",
        "Integration with CBS and treasury systems",
    ],

    title2: <>Outward Remittance Key<br />Features and Capabilities</>,
    description2:
        "The platform enables secure outward remittance processing with message creation, banned entity screening, authorization workflows, and seamless SWIFT integration for global payments.",
    features2: [
        "Create and enrich messages with edit and submit functionality",
        "Screen banned entities using Sherlock integration for compliance",
        "Generate MT message files and push to SWIFT with response handling",
    ],
};

// ── Reusable Text Block ───────────────────────────────────────
const TextBlock = ({ title, description, features }: { title: React.ReactNode, description: string, features: string[] }) => (
    <div className="flex flex-col gap-4 md:gap-5 xl:gap-6">

        {/* Heading */}
        <H2 className="
            leading-none tracking-normal text-[#00AA72]
            
        ">
            {title}
        </H2>

        {/* Description */}
        <P className="
            leading-[1.6] tracking-normal text-[#141414]
            
        ">
            {description}
        </P>

        {/* Checklist */}
        <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 mt-1">
            {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="
                        font-['Quicksand']  dark:text-white font-normal
                        leading-[1.5] tracking-normal text-[#141414]
                        text-[13px]
                        sm:text-[14px]
                        lg:text-[15px]
                        xl:text-[16px]
                    ">
                        {feat}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

// ── Main Component ────────────────────────────────────────────
const TwoImage = () => {
    return (
        <div className="w-full bg-white  dark:bg-black overflow-hidden">

            {/* ── SECTION 1 — Image LEFT | Text RIGHT ── */}
            <div className="
                w-full max-w-[1440px] mx-auto
                px-5
                sm:px-8
                md:px-10
                lg:px-14
                xl:px-20
                pt-8   pb-8
                sm:pt-10 sm:pb-10
                md:pt-10 md:pb-12
                lg:pt-12 lg:pb-14
                xl:pt-14 xl:pb-0
            ">
                <div className="
                    flex flex-col md:flex-row
                    items-center
                    gap-8
                    md:gap-8
                    lg:gap-10
                    xl:gap-12
                ">
                    {/* Image Placeholder 1 */}
                    <div className="
                        w-full flex-shrink-0 relative overflow-hidden
                        md:w-[48%] lg:w-[48%] xl:w-[50%]
                        aspect-[687/503]
                        rounded-xl
                        md:rounded-2xl
                        xl:rounded-[20px]
                    ">
                        <img
                            src="/Remitree/Inremitance.webp"
                            alt="Inward Remittance Process"
                            className="w-full h-full object-fit"
                        />
                    </div>

                    {/* Text — right */}
                    <div className="w-full md:w-[52%] lg:w-[52%] xl:w-[50%]">
                        <TextBlock
                            title={content.title1}
                            description={content.description1}
                            features={content.features1}
                        />
                    </div>
                </div>
            </div>

            {/* ── SECTION 2 — Text LEFT | Image RIGHT ── */}
            <div className="
                w-full max-w-[1440px] mx-auto
                px-5
                sm:px-8
                md:px-10
                lg:px-14
                xl:px-20
                pt-8   pb-10
                sm:pt-10 sm:pb-12
                md:pt-10 md:pb-12
                lg:pt-12 lg:pb-14
                xl:pt-14 xl:pb-16
            ">
                <div className="
                    flex flex-col-reverse md:flex-row
                    items-center
                    gap-8
                    md:gap-8
                    lg:gap-10
                    xl:gap-12
                ">
                    {/* Text — left */}
                    <div className="w-full md:w-[52%] lg:w-[52%] xl:w-[50%]">
                        <TextBlock
                            title={content.title2}
                            description={content.description2}
                            features={content.features2}
                        />
                    </div>

                    {/* Image Placeholder 2 */}
                    <div className="
                        w-full flex-shrink-0 relative overflow-hidden
                        md:w-[48%] lg:w-[48%] xl:w-[50%]
                        aspect-[687/503]
                        rounded-xl
                        md:rounded-2xl
                        xl:rounded-[20px]
                    ">
                        <img
                            src="/Remitree/Outremitance.webp"
                            alt="Outward Remittance Process"
                            className="w-full h-full object-fit"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TwoImage;
