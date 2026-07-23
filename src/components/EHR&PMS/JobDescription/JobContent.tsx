import React, { useState, useEffect, useRef } from "react";
import { H2, P } from "../../../styles/Typography";
// import { ArrowUpRight } from "lucide-react";

// --- Custom Intersection Observer Hook ---
const useIntersectionObserver = <T extends HTMLElement | null>(
    ref: React.RefObject<T>, 
    options: IntersectionObserverInit = {}
) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [ref, options]);

    return isIntersecting;
};

// --- Job Description Mock Data ---
const jobContent = {
    roleOverview: {
        heading: "Role Overview:",
        text: "We are seeking a highly organized and customer-focused Front Office Executive to join our team. The ideal candidate will serve as the first point of contact for clients, visitors, and employees, ensuring a welcoming and professional environment. This role requires excellent communication, multitasking, and problem-solving skills.",
    },
    responsibilities: {
        heading: "Roles and Responsibilities:",
        list: [
            "Greet and assist visitors, clients, and staff in a friendly and professional manner.",
            "Manage incoming calls, emails, and correspondence efficiently.",
            "Handle check-ins, check-outs, and general inquiries at the front desk.",
            "Maintain the reception area, ensuring it is clean, organized, and presentable.",
            "Manage schedules, appointments, and meeting room bookings.",
            "Support administrative tasks such as data entry, filing, and record maintenance.",
            "Coordinate with different departments to ensure smooth operations.",
            "Monitor and manage office supplies, placing orders when necessary.",
        ],
    },
    keySkills: {
        heading: "Key Skills & Competencies:",
        list: [
            "Proven experience in a front office or similar role.",
            "Exceptional interpersonal and communication skills.",
            "Proficiency in Microsoft Office Suite and other relevant software.",
            "Strong organizational and multitasking abilities.",
            "Ability to maintain a positive attitude under pressure.",
            "High level of professionalism and discretion.",
        ],
    },
    qualifications: {
        heading: "Qualifications & Skillsets:",
        list: [
            "Bachelor's degree in Business Administration or a related field.",
            "Minimum 1 to 4 years of relevant experience.",
            "Experience in the IT Sector or service industry is an advantage.",
            "Familiarity with office management systems and procedures.",
        ],
    },
    whyJoinUs: {
        heading: "Why Join Us?",
        text: "At Qrest, we are at the forefront of digital transformation, helping businesses across the globe achieve operational excellence through our innovative technology solutions. As a Leader, you will play a critical role in shaping our future, building strong partnerships, and driving impactful solutions that make a difference in our customers’ success stories. If you are ready to lead with passion for technology and business transformation, we encourage you to apply. Amodio Private Limited is an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to ancestry, color, gender identity or expression, marital status, national origin, race, religion, sex, sexual orientation, or any other characteristic protected by applicable laws.",
    },
};

// --- Sub-Component for list items ---
interface ListProps {
    items: string[];
}

const BulletList: React.FC<ListProps> = ({ items }) => (
    <ul className="list-none space-y-2 pl-0">
        {items.map((item, index) => (
            <li key={index} className="flex items-start text-gray-700 leading-relaxed">
                {/* Custom bullet point */}
                <span className="text-green-700 mr-3 mt-[-2px] text-xl font-bold">&bull;</span>
                <p className="flex-1 text-base text-gray-700">{item}</p>
            </li>
        ))}
    </ul>
);


// --- 1. Sticky Sidebar (Desktop/Tablet View - Top Right) ---
const StickyJobActions: React.FC = () => (
    // Sticky position with 70px offset from the top
    <div className="sticky top-[70px]  p-4 lg:p-0">

        {/* Submit Application Button */}
        {/* Note: Since the form section is removed, this link now points to the top of the page */}
        <button
  onClick={() => {
    document.getElementById("ApplicationSec")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-green-800 hover:bg-green-700 transition duration-150 ease-in-out uppercase tracking-wider whitespace-nowrap"
>
  Apply Now
  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
</button>


        {/* Share Job & Social Icons */}
        <div className="mt-8">
            <P className="text-lg font-semibold text-gray-900 mb-4 ">Share Job</P>
            <div className="flex space-x-4">

                {/* LinkedIn Logo - Placeholder image for runnability */}
                <a href="#linkedin" className="transition hover:opacity-80">
                    <img
                        src="https://placehold.co/32x32/0A66C2/ffffff?text=In"
                        alt="LinkedIn"
                        className="w-8 h-8 object-contain rounded-md"
                        onError={(e) => { e.currentTarget.src = "https://placehold.co/32x32/0A66C2/ffffff?text=In"; e.currentTarget.onerror = null; }}
                    />
                </a>

                {/* X Logo - Placeholder image for runnability */}
                <a href="#x" className="transition hover:opacity-80">
                    <img
                        src="https://placehold.co/32x32/000000/ffffff?text=X"
                        alt="X"
                        className="w-8 h-8 object-contain rounded-md"
                        onError={(e) => { e.currentTarget.src = "https://placehold.co/32x32/000000/ffffff?text=X"; e.currentTarget.onerror = null; }}
                    />
                </a>

            </div>
        </div>
    </div>
);


// --- 2. Mobile Fixed Actions (Mobile View - Bottom) ---
const MobileFixedActions: React.FC = () => (
    // Fixed at the bottom, hidden on larger screens (lg)
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg z-20 lg:hidden">
        {/* The 'flex' container uses 'justify-between' to push the logo group and the button to opposite edges */}
        <div className="max-w-md mx-auto flex items-center justify-between">

            {/* Social Icons (Left side) */}
            <div className="flex space-x-4">
                <a href="#linkedin" className="transition hover:opacity-80">
                    <img
                        src="https://placehold.co/32x32/0A66C2/ffffff?text=In"
                        alt="LinkedIn"
                        className="w-8 h-8 object-contain rounded-md"
                        onError={(e) => { e.currentTarget.src = "https://placehold.co/32x32/0A66C2/ffffff?text=In"; e.currentTarget.onerror = null; }}
                    />
                </a>
                <a href="#x" className="transition hover:opacity-80">
                    <img
                        src="https://placehold.co/32x32/000000/ffffff?text=X"
                        alt="X"
                        className="w-8 h-8 object-contain rounded-md"
                        onError={(e) => { e.currentTarget.src = "https://placehold.co/32x32/000000/ffffff?text=X"; e.currentTarget.onerror = null; }}
                    />
                </a>
            </div>

            {/* Submit Application Button (Right side) */}
            <a
                href="#job-top"
                // Button sizes to content and is pushed to the right by justify-between
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-xl text-white bg-green-800 hover:bg-green-700 transition whitespace-nowrap shadow-md"
            >
                Apply Now
            </a>
        </div>
         
    </div>
);


// --- Main App Component (Formerly JobContent) ---
const App: React.FC = () => {
    // Ref to observe the job content section
    const jobContentRef = useRef<HTMLDivElement>(null);

    // Use the custom hook to track visibility
    const isJobContentVisible = useIntersectionObserver(jobContentRef, {
        rootMargin: '0px 0px -50px 0px', // Helps ensure the bar disappears before scrolling past the bottom
        threshold: 0.1
    });

    return (
        <div className="font-inter antialiased min-h-screen bg-white">
             {/* Main Job Content Area - Attach the ref to this container */}
            <div ref={jobContentRef} id="job-top" className="w-full h-auto py-10 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-6">

                    {/* Job Title Header (Now at the top) */}
                    <header className="mb-10 lg:mb-12">
                        {/* <H1 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-2">
                            Front Desk Office Executive
                        </H1> */}
                        {/* <P className="text-lg text-gray-500">
                            Full-Time, Remote-Friendly | Pune, India
                        </P> */}
                    </header>

                    {/* Grid Container */}
                    <div className="lg:grid lg:grid-cols-4 lg:gap-10">

                        {/* Main Content (Full width on mobile/tablet, 3/4 on desktop) */}
                        <div className="lg:col-span-3">

                            {/* 1. Role Overview */}
                            <section className="mb-10 lg:mb-12">
                                <H2 className="mb-4 text-gray-900 text-2xl font-semibold">
                                    {jobContent.roleOverview.heading}
                                </H2>
                                <P className="text-base text-gray-700 leading-relaxed">
                                    {jobContent.roleOverview.text}
                                </P>
                            </section>

                            {/* 2. Responsibilities */}
                            <section className="mb-10 lg:mb-12">
                                <H2 className="mb-5 text-gray-900 text-2xl font-semibold">
                                    {jobContent.responsibilities.heading}
                                </H2>
                                <BulletList items={jobContent.responsibilities.list} />
                            </section>

                            {/* 3. Key Skills */}
                            <section className="mb-10 lg:mb-12">
                                <H2 className=" mb-5 text-gray-900 text-2xl font-semibold">
                                    {jobContent.keySkills.heading}
                                </H2>
                                <BulletList items={jobContent.keySkills.list} />
                            </section>

                            {/* 4. Qualifications */}
                            <section className="mb-10 lg:mb-12">
                                <H2 className=" mb-5 text-gray-900 text-2xl font-semibold">
                                    {jobContent.qualifications.heading}
                                </H2>
                                <BulletList items={jobContent.qualifications.list} />
                            </section>

                            {/* 5. Why Join Us */}
                            <section>
                                <H2 className=" mb-4 text-gray-900 text-2xl font-semibold">
                                    {jobContent.whyJoinUs.heading}
                                </H2>
                                <P className="text-base text-gray-700 leading-relaxed">
                                    {jobContent.whyJoinUs.text}
                                </P>

                                {/* Added padding at the very end to ensure content is visible above the fixed mobile bar */}
                                <div className="h-[75px] lg:hidden"></div>
                            </section>

                        </div>

                        {/* Sticky Sidebar (Desktop/Tablet) - Conditionally rendered */}
                        <div className="hidden lg:block lg:col-span-1">
                            {isJobContentVisible && <StickyJobActions />}
                        </div>

                    </div>

                </div>

                {/* Mobile Fixed Action Bar - Conditionally rendered */}
                {isJobContentVisible && <MobileFixedActions />}
            </div>
        </div>
    );
};

export default App;
