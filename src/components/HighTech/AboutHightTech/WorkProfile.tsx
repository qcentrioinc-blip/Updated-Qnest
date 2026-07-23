import { useContext, useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { createPortal } from 'react-dom';
import { ScrollContext } from '../../../context/ScrollContext';
 
const WorkProfile = () => {
    const [, setScrollY] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
 
    const workProfileRef = useRef<HTMLDivElement>(null);
    const scrollableContainerRef = useContext(ScrollContext);
 
    const imageOpacity = [useMotionValue(1), useMotionValue(0), useMotionValue(0)];
    const overlayOpacity = [useMotionValue(0), useMotionValue(0), useMotionValue(0)];
    const masterOpacity = useMotionValue(0);
 
    const sections = [
        {
            id: 1,
            number: "1",
            title: "ROCK SOLID TECHNOLOGY",
            description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
            image: "/AboutUs/High2.png",
            bgColor: "bg-[#F99526]",
            textColor: "text-black"
        },
        {
            id: 2,
            number: "2",
            title: "ROCK SOLID TECHNOLOGY",
            description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
            image: "/AboutUs/High1.png",
            bgColor: "bg-[#230053]",
            textColor: "text-white"
        },
        {
            id: 3,
            number: "3",
            title: "ROCK SOLID TECHNOLOGY",
            description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
            image: "/AboutUs/High3.png",
            bgColor: "bg-[#5C5C5C]",
            textColor: "text-[#F99526]"
        }
    ];
 
    useEffect(() => {
        setIsMounted(true);
    }, []);
 
    useEffect(() => {
        if (!scrollableContainerRef) return;
 
        const calculateHeight = () => {
            const containerH = window.innerHeight;
            setContainerHeight(containerH);
        };
 
        setTimeout(calculateHeight, 300);
        window.addEventListener('resize', calculateHeight);
 
        return () => window.removeEventListener('resize', calculateHeight);
    }, [scrollableContainerRef]);
 
    useEffect(() => {
        if (!scrollableContainerRef || containerHeight === 0) return;
 
        const handleScroll = () => {
            try {
                const scroll = scrollableContainerRef?.scroll ?? 0;
                const workProfileElement = workProfileRef.current;
 
                if (!workProfileElement) return;
 
                setScrollY(scroll);
 
                const workProfileTop = workProfileElement.offsetTop;
                const sectionHeight = containerHeight;
                const workProfileBottom = workProfileTop + (sectionHeight * 2);
 
                const section1VisibleStart = workProfileTop - containerHeight * 0.5;
 
                if (scroll >= workProfileBottom) {
                    masterOpacity.set(0);
                    setIsInView(false);
 
                    imageOpacity[0].set(0);
                    imageOpacity[1].set(0);
                    imageOpacity[2].set(0);
                    overlayOpacity[0].set(0);
                    overlayOpacity[1].set(0);
                    overlayOpacity[2].set(0);
                    return;
                }
 
                if (scroll < section1VisibleStart) {
                    masterOpacity.set(0);
                    setIsInView(false);
                    imageOpacity[0].set(0);
                    imageOpacity[1].set(0);
                    imageOpacity[2].set(0);
                    return;
                }
 
                setIsInView(true);
                masterOpacity.set(1);
 
                const scrollWithinWorkProfile = scroll - workProfileTop;
                const currentSectionIndex = Math.floor(scrollWithinWorkProfile / sectionHeight);
                const sectionProgress = (scrollWithinWorkProfile % sectionHeight) / sectionHeight;
 
                if (currentSectionIndex === 0) {
                    imageOpacity[0].set(1);
                    imageOpacity[1].set(0);
                    imageOpacity[2].set(0);
                    overlayOpacity[0].set(sectionProgress * 0.4);
 
                    if (sectionProgress >= 0.75) {
                        const fadeProgress = (sectionProgress - 0.75) / 0.15;
                        imageOpacity[0].set(1 - fadeProgress);
                        imageOpacity[1].set(fadeProgress);
                    } else {
                        overlayOpacity[1].set(0);
                    }
                    overlayOpacity[2].set(0);
                }
                else if (currentSectionIndex === 1) {
                    imageOpacity[0].set(0);
                    imageOpacity[1].set(1);
                    imageOpacity[2].set(0);
                    overlayOpacity[1].set(sectionProgress * 0.4);
 
                    if (sectionProgress >= 0.75) {
                        const fadeProgress = (sectionProgress - 0.75) / 0.15;
                        imageOpacity[1].set(1 - fadeProgress);
                        imageOpacity[2].set(fadeProgress);
                    } else {
                        overlayOpacity[2].set(0);
                    }
                    overlayOpacity[0].set(0);
                }
                else if (currentSectionIndex === 2) {
                    imageOpacity[0].set(0);
                    imageOpacity[1].set(0);
                    imageOpacity[2].set(1);
                    overlayOpacity[2].set(sectionProgress * 0.4);
                    overlayOpacity[0].set(0);
                    overlayOpacity[1].set(0);
                }
 
            } catch (error) {
                console.error('Scroll handler error:', error);
            }
        };
 
        const container = scrollableContainerRef;
        container.on('scroll', handleScroll);
        handleScroll();
 
        return () => container.off('scroll', handleScroll);
    }, [scrollableContainerRef, containerHeight, imageOpacity, overlayOpacity, masterOpacity]);
 
    // Floating Image Component using Portal
    const FloatingImage = () => (
        <motion.div
            className="fixed left-3/5 top-3/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
                opacity: masterOpacity,
                zIndex: 9999,
                willChange: 'opacity, transform'
            }}
        >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-52 lg:h-52">
                {sections.map((imgSection, imgIndex) => (
                    <motion.img
                        key={imgSection.id}
                        src={imgSection.image}
                        alt={imgSection.title}
                        className="absolute inset-0 w-full h-full rounded-xl object-cover shadow-2xl"
                        style={{
                            opacity: imageOpacity[imgIndex],
                        }}
                        loading="lazy"
                    />
                ))}
            </div>
        </motion.div>
    );
 
    return (
        <>
            <div ref={workProfileRef} className="beliefs-component relative">
                <div className="beliefs-section">
                    <div className="beliefs-wrap relative bg-white w-full">
                        <div className="beliefs-outer relative">
                            {sections.map((section, index) => (
                                <div
                                    key={section.id}
                                    soft-pin=""
                                    className="belief-item_wrap h-screen relative"
                                    style={{
                                        position: 'sticky',
                                        top: 0,
                                        zIndex: index + 1,
                                    }}
                                >
                                    <motion.div
                                        className={`belief-item_layout h-full ${section.bgColor} flex items-center justify-between px-6 sm:px-12 lg:px-24 relative`}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        {/* LEFT SIDE - NUMBER */}
                                        <motion.div
                                            className="flex-shrink-0 relative z-10"
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                        >
                                            <h1 className={`text-[10rem] sm:text-[12rem] xl:text-[14rem] font-bold ${section.textColor} opacity-90 leading-none`}>
                                                {section.number}
                                            </h1>
                                        </motion.div>
 
                                        {/* RIGHT SIDE - TITLE & DESCRIPTION */}
                                        <div className="flex flex-col items-start justify-center text-left space-y-6 max-w-2xl relative z-10">
                                            <motion.h2
                                                className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${section.textColor} tracking-wide`}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.5 }}
                                                transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                                            >
                                                {section.title}
                                            </motion.h2>
 
                                            <motion.p
                                                className={`text-sm sm:text-base ${section.textColor} leading-relaxed`}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.5 }}
                                                transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                            >
                                                {section.description}
                                            </motion.p>
                                        </div>
                                    </motion.div>
 
                                    <motion.div
                                        softpin-overlay=""
                                        className="belief-overlay absolute inset-0 bg-black pointer-events-none"
                                        style={{
                                            opacity: overlayOpacity[index],
                                            zIndex: 1
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
 
            {/* Portal the floating image to body - OUTSIDE all containers */}
            {isMounted && isInView && createPortal(<FloatingImage />, document.body)}
        </>
    );
};
 
export default WorkProfile;
 