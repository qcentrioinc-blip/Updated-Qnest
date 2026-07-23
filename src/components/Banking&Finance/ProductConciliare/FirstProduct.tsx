const ArrowUpRight = ({ size = 24, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);
import { motion, useInView as useFramerInView } from 'framer-motion';
import { useRef, } from 'react';
import { Link } from 'react-router-dom';
import { H1, P } from '../../../styles/Typography';

const FirstProduct = () => {

  const ref = useRef(null);
  const isInView = useFramerInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  });

  return (
    <div className="w-full xl:min-h-screen bg-[#307BD6] relative overflow-hidden">
      {/* Background Image - Draxora1 */}
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/Products/Draxora1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      /> */}
      {/* Top Right Blur Circle */}
<div className="absolute top-[-200px] right-[-200px] w-[300px] h-[300px] xl:w-[700px] xl:h-[700px] rounded-full bg-[#FBE580] blur-[300px] pointer-events-none z-0"></div>

{/* Bottom Left Blur Circle */}
<div className="absolute bottom-[-200px] left-[-200px] w-[300px] h-[300px] xl:w-[700px] xl:h-[700px] rounded-full bg-[#FBE580] blur-[300px] pointer-events-none z-0"></div>

      <div className="relative xl:pt-44 z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative flex flex-col items-center justify-center xl:min-h-screen">

          {/* Trusted by 15K+ Section */}
          {/* <div className="mb-12 flex items-center gap-4 trusted-section">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
            </div>
            <P className='text-white'>
              Trusted by 15K+
            </P>
          </div> */}

          {/* Content Container */}
          <div
            className="content-container"
            style={{
              width: '1100px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center',
              marginBottom: '100px'
            }}
          >
            {/* Main Heading */}
            <H1 className='text-white text-center'>
              
               Precision Reconciliation for Complex Financial Data 
            </H1>

            {/* Subtitle */}
            <P className='text-white text-center max-w-5xl  mb-4'>

Streamline financial reconciliation with automated data matching, straight-through processing, and comprehensive case management for unmatched and discrepant transactions. Reduce manual effort, eliminate errors, and accelerate month-end closing. Gain complete visibility into your reconciliation status with real-time dashboards and audit trails.            </P>

            {/* CTA Button */}
            <Link to="#contact-us">
              <button
                className="cta-button hover:brightness-110"
                style={{
                  width: '296.5px',
                  height: '48px',
                  gap: '8px',
                  borderRadius: '12px',
                  paddingTop: '12px',
                  paddingRight: '24px',
                  paddingBottom: '12px',
                  paddingLeft: '24px',
                  background: '#FED600',
                  color: '#000000',
                  fontFamily: "'quicksand', sans-serif",
                  fontWeight: 700,
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Check out Conciliare
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </button>
            </Link>
          </div>

          {/* Dashboard Preview with CircleLight Behind */}
          <div
            ref={ref}
            className="w-full max-w-6xl mx-auto relative dashboard-container"
            style={{ perspective: '1200px' }}
          >
            {/* CircleLight Background Image */}
            {/* <img
              src="/Products/CircleLight.png"
              alt="Circle Light"
              className="absolute circle-light"
              style={{
                width: '700px',
                height: '700px',
                bottom: '-250px',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 0,
                opacity: 0.8
              }}
            /> */}

            {/* Dashboard Image with Animation */}
            <motion.div
              className="relative z-10"
              initial={{
                rotateX: 12.77,
                y: -21.28,
                scale: 1.0532
              }}
              animate={isInView ? {
                rotateX: 0,
                y: 0,
                scale: 1
              } : {
                rotateX: 12.77,
                y: -21.28,
                scale: 1.0532
              }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1200
              }}
            >
              <img
                src="/HeroImg.webp"
                alt="Banking Dashboard Interface"
                className="w-full h-auto"
                // style={{
                //   display: 'block',
                //   width: '100%',
                //   height: 'auto',
                //   borderRadius: '16px',
                //   border: '1px solid rgba(255,255,255,0.1)'
                // }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style >{`
        @media (max-width: 1023px) {
          /* Trusted Section */
          .trusted-section {
            margin-bottom: 2rem !important;
          }

          .trusted-section > div > div {
            width: 2rem !important;
            height: 2rem !important;
          }

          .trusted-section span {
            font-size: 14px !important;
          }

          /* Content Container */
          .content-container {
            width: 100% !important;
            max-width: 90% !important;
            padding: 0 20px !important;
            margin-bottom: 60px !important;
          }

          /* Main Heading */
          .main-heading {
            width: 100% !important;
            height: auto !important;
            font-size: 36px !important;
            line-height: 110% !important;
          }

          /* Subtitle */
          .subtitle-text {
            width: 100% !important;
            height: auto !important;
            font-size: 16px !important;
            line-height: 140% !important;
            overflow: visible !important;
          }

          /* CTA Button */
          .cta-button {
            width: 100% !important;
            max-width: 280px !important;
            font-size: 12px !important;
            padding: 12px 20px !important;
          }

          /* CircleLight */
          .circle-light {
            width: 350px !important;
            height: 350px !important;
            bottom: -120px !important;
          }

          /* Dashboard Container */
          .dashboard-container {
            padding: 0 20px !important;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          /* Tablet Adjustments */
          .main-heading {
            font-size: 48px !important;
          }

          .subtitle-text {
            font-size: 18px !important;
          }

          .circle-light {
            width: 500px !important;
            height: 500px !important;
            bottom: -180px !important;
          }
        }

        @media (max-width: 639px) {
          /* Mobile - Extra small screens */
          .main-heading {
            font-size: 32px !important;
          }

          .subtitle-text {
            font-size: 14px !important;
          }

          .circle-light {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FirstProduct;




