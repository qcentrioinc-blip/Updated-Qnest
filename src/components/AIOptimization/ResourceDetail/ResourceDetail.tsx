'use client';
import React from 'react';
 

const Instagram = ({ className = "", strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const Linkedin = ({ className = "", strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const XIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-full h-full"} {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const ResourceDetail = () => {
    return (
        <>
        
            <section className="w-full  bg-white">
                
                {/* Top section with background pattern */}
                <div className="relative">
                    {/* ✅ Background grid pattern - fills this whole block */}
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            backgroundImage: `url('/AIOptimization/AIResourceBack.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top center',
                            backgroundRepeat: 'no-repeat',
                            opacity: 0.80, // Very light - almost invisible
                        }}
                    />
                    <div className="relative mx-4 sm:mx-6 lg:mx-10 lg:max-w-8xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 xl:pt-24 pb-14 sm:pb-18 lg:pb-24">
                        {/* Content wrapper */}
                        <div className="relative z-10 top-0 xl:top-40">
                            {/* Heading */}
                            <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
                                <h2
                                    style={{
                                        fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                                        fontWeight: 700,
                                        fontStyle: 'normal',
                                        fontSize: 'clamp(28px, 6vw, 72px)', // Adjusted mobile size
                                        lineHeight: '110%', // Increased slightly for mobile readability
                                        letterSpacing: '0',
                                        color: 'var(--Primary-AI-Optimization, #020059)',
                                    }}
                                    className="
                    font-semibold
                    text-[28px] sm:text-[40px] lg:text-[56px]
                    lg:whitespace-nowrap
                  "
                                >
                                    We are Available on the
                                    <br />
                                    Google Cloud Resources
                                </h2>
                            </div>

                            {/* Image card */}
                            <div className="lg:max-w-8xl">
                                <div
                                    className="overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                                    style={{
                                        borderRadius: '20px',
                                    }}
                                >
                                    <div className="w-full bg-[#0056ff]">
                                        <img
                                            src="/AIOptimization/ResourceDetail.png"
                                            alt="Abstract yellow flower on blue water"
                                            className="w-full h-[220px] sm:h-[320px] lg:h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text content section */}
                <div className="mx-4 sm:mx-6 lg:mx-10 relative top-0 xl:top-30 px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-24 mb-12">
                    <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 relative">
                        {/* Left Column - ALL TEXT CONTENT */}
                        <div className="flex-1 xl:max-w-4xl space-y-8">
                            {/* Intro paragraph */}
                            <div className="space-y-6">
                                <p
                                    className="text-sm sm:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        lineHeight: '160%',
                                        color: '#000000',
                                    }}
                                >
                                    We are pleased to offer a HIPAA-compliant Business Associate agreement (BAA) to enable customers across the healthcare industry to work with us to develop secure custom models that meet their specific business needs. Company
                                </p>

                                <div className="space-y-4">
                                    <span
                                        className="text-base font-medium text-gray-900 block"
                                        style={{
                                            fontFamily: "'Quicksand', system-ui, sans-serif",
                                        }}
                                    >
                                        Share:
                                    </span>

                                    <p
                                        className="text-sm sm:text-base lg:text-lg"
                                        style={{
                                            fontFamily: "'Quicksand', system-ui, sans-serif",
                                            fontWeight: 400,
                                            lineHeight: '160%',
                                            color: '#000000',
                                        }}
                                    >
                                        For healthcare providers, insurers, and technology partners, compliance is not just a legal requirement, it's a cornerstone of trust and reliability. That's why we at Cohere are pleased to offer a HIPAA-compliant Business Associate agreement (BAA) to enable customers across the healthcare industry to work with us to develop secure custom models that meet their specific business needs.
                                    </p>
                                </div>
                            </div>

                            {/* What is HIPAA */}
                            <div className="space-y-4">
                                <h3
                                    className="font-semibold text-xl sm:text-2xl lg:text-[32px]"
                                    style={{
                                        fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                                        fontWeight: 600,
                                        fontStyle: 'normal',
                                        lineHeight: '120%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    What is HIPAA?
                                </h3>

                                <p
                                    className="text-sm sm:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        lineHeight: '140%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    The Health Insurance Portability and Accountability Act (HIPAA) sets federal standards in the United States for protecting personal health information (PHI). It applies to covered entities like insurance companies, doctors, and clinics who directly collect and handle PHI to provide healthcare services to individual patients or clients. It also applies to "Business Associates," like technology providers, that need to use or disclose PHI in order to perform services on behalf of HIPAA-regulated entities.
                                </p>
                            </div>

                            {/* Steps Section */}
                            <div className="space-y-4">
                                <p
                                    className="text-sm sm:text-base lg:text-lg font-medium"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        lineHeight: '140%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Steps to setting up a BAA with Cohere for custom model development
                                </p>
                                <ol className="space-y-3 list-decimal list-inside">
                                    <li
                                        className="text-sm sm:text-base lg:text-lg"
                                        style={{
                                            fontFamily: "'Quicksand', system-ui, sans-serif",
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            lineHeight: '140%',
                                            letterSpacing: '0',
                                            color: '#000000',
                                        }}
                                    >
                                        Contact your dedicated Account Executive or{' '}
                                        <a href="mailto:support@cohere.com" className="text-blue-600 hover:underline">
                                            support@cohere.com
                                        </a>{' '}
                                        to discuss your use case.
                                    </li>
                                    <li
                                        className="text-sm sm:text-base lg:text-lg"
                                        style={{
                                            fontFamily: "'Quicksand', system-ui, sans-serif",
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            lineHeight: '140%',
                                            letterSpacing: '0',
                                            color: '#000000',
                                        }}
                                    >
                                        After a review of the use case, HIPAA-related compliance checks, and an agreement on commercial matters, Cohere will provide a BAA that covers the custom model development process and the transmission of HIPAA-regulated data to Cohere for the purpose of developing a custom model on your behalf.
                                    </li>
                                    <li
                                        className="text-sm sm:text-base lg:text-lg"
                                        style={{
                                            fontFamily: "'Quicksand', system-ui, sans-serif",
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            lineHeight: '140%',
                                            letterSpacing: '0',
                                            color: '#000000',
                                        }}
                                    >
                                        Once the custom model is developed, it is deployed in your own private deployment environment.
                                    </li>
                                </ol>
                            </div>

                            {/* Benefits Section */}
                            <div className="space-y-4">
                                <h3
                                    className="text-lg sm:text-xl lg:text-2xl"
                                    style={{
                                        fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                                        fontWeight: 700,
                                        fontStyle: 'bold',
                                        lineHeight: '120%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Benefits of LLM customization with Cohere
                                </h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li
                                        className="text-sm sm:text-base lg:text-lg"
                                        style={{
                                            fontFamily: "'Quicksand', system-ui, sans-serif",
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            lineHeight: '140%',
                                            letterSpacing: '0',
                                            color: '#000000',
                                        }}
                                    >
                                        Robust security measures: Our infrastructure is designed with multiple layers of security, including encryption, access controls, and regular audits
                                    </li>
                                    <li
                                        className="text-sm sm:text-base lg:text-lg"
                                        style={{
                                            fontFamily: "'Quicksand', system-ui, sans-serif",
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            lineHeight: '140%',
                                            letterSpacing: '0',
                                            color: '#000000',
                                        }}
                                    >
                                        Data protection: We implement strict protocols to ensure that PHI is handled, stored, and transmitted securely
                                    </li>
                                    <li
                                        className="text-sm sm:text-base lg:text-lg"
                                        style={{
                                            fontFamily: "'Quicksand', system-ui, sans-serif",
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            lineHeight: '140%',
                                            letterSpacing: '0',
                                            color: '#000000',
                                        }}
                                    >
                                        Compliance monitoring: Continuous monitoring and updates ensure ongoing adherence to HIPAA regulations
                                    </li>
                                </ul>
                                <p
                                    className="text-sm sm:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        lineHeight: '140%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Learn more about Cohere's customization offerings.
                                </p>
                            </div>

                            {/* Other Offerings Section */}
                            <div className="space-y-4">
                                <h3
                                    className="text-lg sm:text-xl lg:text-2xl"
                                    style={{
                                        fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                                        fontWeight: 700,
                                        fontStyle: 'bold',
                                        lineHeight: '120%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Other Cohere offerings for HIPAA-regulated
                                </h3>
                                <ul className="space-y-3">
                                    <li
                                        className="text-sm sm:text-base lg:text-lg"
                                        style={{
                                            fontFamily: "'Quicksand', system-ui, sans-serif",
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            lineHeight: '140%',
                                            letterSpacing: '0',
                                            color: '#000000',
                                        }}
                                    >
                                        Private deployments: All private deployments without customization, including private deployments of North and Cohere models, are suitable for HIPAA-regulated entities. No BAA is required with Cohere as Cohere does not use or receive PHI (or any other customer data) for this type of deployment.
                                    </li>
                                    <li
                                        className="text-sm sm:text-base lg:text-lg"
                                        style={{
                                            fontFamily: "'Quicksand', system-ui, sans-serif",
                                            fontWeight: 400,
                                            fontStyle: 'normal',
                                            lineHeight: '140%',
                                            letterSpacing: '0',
                                            color: '#000000',
                                        }}
                                    >
                                        Managed cloud LLM/AI platforms: Cohere's models hosted or accessed through cloud AI platforms (e.g., Amazon Bedrock, Amazon SageMaker, Microsoft Azure, and OCI Generative AI Service) are suitable for HIPAA-regulated entities. Customers must request to enter into a BAA with the cloud service provider and would be subject to the provider's own internal review and checks. For more information, we recommend reaching out directly to the third party provider. Please also note that a BAA is not required with Cohere as Cohere does not use or receive PHI (or any other customer data) for this type of deployment.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - SOCIAL ICONS - ABSOLUTE RIGHT */}
                        <div className="hidden xl:block xl:absolute xl:right-0 xl:top-0">
                            <div className="sticky top-24">
                                <div
                                    className="flex items-start justify-start gap-8 px-20 py-15 rounded-2xl"
                                    style={{ backgroundColor: '#E5E7EB' }}
                                >
                                    <button className="p-3 hover:bg-white/50 rounded-lg transition-colors text-black">
                                        <XIcon className="w-6 h-6" strokeWidth={1.5} />
                                    </button>
                                    <button className="p-3 hover:bg-white/50 rounded-lg transition-colors text-black">
                                        <Instagram className="w-6 h-6" strokeWidth={1.5} />
                                    </button>
                                    <button className="p-3 hover:bg-white/50 rounded-lg transition-colors text-black">
                                        <Linkedin className="w-6 h-6" strokeWidth={1.5} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Social Icons */}
                    <div className="xl:hidden flex justify-center mt-12 sm:mt-16">
                        <div
                            className="flex items-center justify-center gap-8 sm:gap-12 px-8 py-6 sm:px-12 sm:py-8 rounded-2xl w-full max-w-[350px] sm:max-w-[450px]"
                            style={{ backgroundColor: '#E5E7EB' }}
                        >
                            <button className="p-3 sm:p-4 hover:bg-white/50 rounded-lg transition-colors text-black">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                                    <XIcon strokeWidth={1.5} />
                                </div>
                            </button>
                            <button className="p-3 sm:p-4 hover:bg-white/50 rounded-lg transition-colors text-black">
                                <Instagram className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                            </button>
                            <button className="p-3 sm:p-4 hover:bg-white/50 rounded-lg transition-colors text-black">
                                <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default ResourceDetail;
