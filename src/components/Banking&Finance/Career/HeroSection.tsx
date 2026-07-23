import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { Variants } from "framer-motion"
import {   ChevronRight,ChevronLeft } from "lucide-react" // Changed import for CONTACT US button style
 

const H1 = ({ children }: { children: React.ReactNode }) => (
<h1 className="text-4xl md:text-5xl font-quadran   lg:text-6xl font-bold">{children}</h1>
)

// Define the content labels for the image cards
 

const HeroSection = () => {
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-50px" })

// Removed currentSlide and isMobile state as they are no longer needed for this unified layout
// const [currentSlide, setCurrentSlide] = useState(0)
// const [isMobile, setIsMobile] = useState(false)

const images = [
"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
]


// The useEffect/state for checking mobile screen size is removed, using Tailwind responsiveness instead.

// Text animation variants
const textVariants: Variants = {
hidden: { opacity: 0, x: -50 },
visible: {
opacity: 1,
x: 0,
transition: {
duration: 0.8,
ease: "easeOut"
}
}
}

// Image animation variants for desktop/tablet with staggered delays
const imageVariants: Variants = {
hidden: { opacity: 0, x: 100 },
visible: (custom: number) => ({
opacity: 1,
x: 0,
transition: {
duration: 0.7,
delay: custom * 0.3, // 0s, 0.3s, 0.6s delays
ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for non-uniform motion
}
})
}
    
  // The carousel navigation functions (nextSlide, prevSlide) are removed.
  
return (
<div
ref={ref}
className="pt-52 md:pb-2 max-w-8xl pb-10 w-full bg-[var(--primary-color)] overflow-hidden"
>
{/* Text Content Area */}
<motion.div
variants={textVariants}
initial="hidden"
animate={isInView ? "visible" : "hidden"}
className="text-white mx-6 md:mx-10 lg:mx-20 lg:mb-16 mb-8"
>
<H1>
Sed ut perspiciatis <br/> unde omnis iste natus 
</H1>
        
        
        
</motion.div>

      {/* Unified Image Slider/Gallery Section (Works for all screen sizes) */}
      <div className="relative">
        
        {/* Mobile/Tablet Controls (Chevron and Text labels are ONLY visible here) */}
        <div className="md:hidden  flex justify-between items-start text-white mx-6 mb-4">
            {/* These chevrons are kept for visual representation but are NOT functional arrows for a carousel,
                they just mimic the design from the image. */}
            <div className="flex gap-2 text-white/50">
                <button aria-label="Previous" className="rounded-full border border-white/50 p-1"><ChevronLeft className="w-4 h-4" /></button>
                <button aria-label="Next" className="rounded-full border border-white/50 p-1"><ChevronRight className="w-4 h-4" /></button>
            </div>
            {/* The individual titles are displayed below the images in the scrollable view */}
        </div>

        {/* Image Container: 
            - On small screens (default): flex nowrap, overflow-x-auto, fixed item width
            - On medium screens (md:flex-row): standard row, w-1/3 for equal distribution (Desktop/Tablet layout)
        */}
        <div 
            className="
                flex space-x-4 overflow-x-auto 
                md:space-x-3 md:overflow-x-hidden 
                px-6 md:px-10 lg:px-0 
                pb-4 scrollbar-hide
            "
            // Use ref for desktop animation, no need for it in the mobile scroll view
        >
            {images.map((img, i) => (
                // This div handles the mobile card width and the text label
                <motion.div
                    key={i}
                    // Mobile width: w-[75vw] to ensure 3 cards are scrollable. flex-shrink-0 is key.
                    // Desktop width: md:w-1/3 for equal distribution.
                    className="flex-shrink-0 w-[75vw] md:w-1/3" 
                >
                    <motion.img
                        // Only apply Framer Motion for desktop (md and up) by checking screen size in the component where it's used if necessary, 
                        // but here we just ensure the staggered effect only runs once on load.
                        custom={i}
                        variants={imageVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        src={img}
                        alt={`Hero image ${i + 1}`}
                        // Height for both mobile and desktop cards
                        className="w-full h-[180px] md:h-[250px] lg:h-[300px] object-cover shadow-md rounded-lg"
                    />
                   
                </motion.div>
            ))}
        </div>
        
        {/* Style to hide the scrollbar in the horizontal view */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>

      </div>
</div>
)
}

export default HeroSection