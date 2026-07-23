import { useEffect, useRef, useState } from 'react';

const Milestone = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const milestones = [
    {
         
       title: 'We speak with your teams to learn goals, issues, and industry needs in detail.'
    },
    {
         
       title: 'We turn your requirements into a practical, clear plan with agreed priorities and scope. '
    },
    {
       
       title: 'We design simple workflows that match daily work and are easy to follow. '
    },
    {
         
       title: 'We develop, integrate, and test every component against performance, security, and compliance standards. '
    },

    // {
         
    //    title: 'We help you go live, fix issues quickly, and keep improving with feedback.  '
    // }
];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of section is visible
                rootMargin: '0px 0px -100px 0px' // Start animation slightly before section enters
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="w-full flex items-start justify-center py-8 md:py-12 lg:py-16"
            style={{
                background: 'linear-gradient(180deg, #F5EDFF 0%, #ADC0F8 100%)',
                minHeight: '1252px'
            }}
        >
            <div className="w-full max-w-8xl mx-4 md:mx-8 lg:mx-10 px-2 md:px-4 lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

                    {/* Left Section - Header (STICKY) */}
                    <div
                        className={`flex flex-col justify-start transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            } lg:sticky`}
                        style={{
                            top: '80px',
                            alignSelf: 'flex-start',
                            height: 'fit-content',
                            transitionDelay: '0s'
                        }}
                    >
                        <h1
                            className="leading-tight mb-6 md:mb-8"
                            style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 600,
                                fontSize: 'clamp(36px, 5vw, 64px)',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                color: '#8338EC',
                                transition: 'all 0.6s ease-in-out'
                            }}
                        >
                             Qnest Approach <br />
                            Built Around<br />
                             Your Business
                        </h1>
                        <p
                            className={`max-w-md transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontSize: 'clamp(16px, 1.5vw, 18px)',
                                lineHeight: '130%',
                                letterSpacing: '0%',
                                color: '#000000',
                                transitionDelay: '0.2s'
                            }}
                        >
                            All the products we deliver are the brilliant result of a unique mix: Their founders' ideas and inspiration with our team's expertise and creativity.
                        </p>
                    </div>

                    {/* Right Section - Timeline */}
                    <div className="relative flex flex-col justify-start">

                        {/* First Circle - NO TEXT */}
                        <div
                            className={`relative flex items-start mb-[150px] md:mb-[180px] lg:mb-[220px] transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{
                                transitionDelay: '0.3s'
                            }}
                        >
                            <div className="relative flex-shrink-0">
                                {/* Circle */}
                                <div
                                    className="rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110"
                                    style={{
                                        width: 'clamp(38px, 4vw, 46px)',
                                        height: 'clamp(38px, 4vw, 46px)',
                                        border: '3px solid #1F2937',
                                        backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                        position: 'relative',
                                        zIndex: 10
                                    }}
                                >
                                    <div
                                        className="rounded-full"
                                        style={{
                                            width: 'clamp(7px, 1vw, 9px)',
                                            height: 'clamp(7px, 1vw, 9px)',
                                            backgroundColor: '#1F2937'
                                        }}
                                    ></div>
                                </div>

                                {/* Vertical Line */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: 'clamp(50px, 6vw, 65px)',
                                        transform: 'translateX(-50%)',
                                        width: '2px',
                                        height: 'clamp(130px, 15vw, 185px)',
                                        backgroundColor: '#1F2937',
                                        transition: 'all 0.5s ease-in-out'
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Remaining 4 Circles - WITH TEXT */}
                        {milestones.map((item, index) => (
                            <div
                                 
                                className={`relative flex items-start transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{
                                    marginBottom: index < 3 ? 'clamp(150px, 18vw, 220px)' : '0',
                                    transitionDelay: `${0.4 + index * 0.15}s`
                                }}
                            >

                                {/* Circle Node with Line */}
                                <div className="relative flex-shrink-0">
                                    {/* Circle */}
                                    <div
                                        className="rounded-full bg-white flex items-center justify-center transition-all duration-500 hover:scale-110"
                                        style={{
                                            width: 'clamp(38px, 4vw, 46px)',
                                            height: 'clamp(38px, 4vw, 46px)',
                                            border: '3px solid #1F2937',
                                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                            position: 'relative',
                                            zIndex: 10
                                        }}
                                    >
                                        <div
                                            className="rounded-full"
                                            style={{
                                                width: 'clamp(7px, 1vw, 9px)',
                                                height: 'clamp(7px, 1vw, 9px)',
                                                backgroundColor: '#1F2937'
                                            }}
                                        ></div>
                                    </div>

                                    {/* Vertical Line - only show if not last item */}
                                    {index < 3 && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                left: '50%',
                                                top: 'clamp(50px, 6vw, 65px)',
                                                transform: 'translateX(-50%)',
                                                width: '2px',
                                                height: 'clamp(140px, 16vw, 200px)',
                                                backgroundColor: '#1F2937',
                                                transition: 'all 0.5s ease-in-out'
                                            }}
                                        ></div>
                                    )}
                                </div>

                                {/* Text Content */}
                                <div
                                    className="ml-6 md:ml-8 lg:ml-10 flex-1 pt-1 transition-all duration-500 hover:translate-x-2"
                                >
                                    <h3
    style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 600,
        fontSize: 'clamp(20px, 2.5vw, 32px)',
        lineHeight: '110%',
        letterSpacing: '0%',
        color: '#000000',
        transition: 'color 0.3s ease-in-out'
    }}
>
    {item.title}
</h3>
 

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Milestone;
