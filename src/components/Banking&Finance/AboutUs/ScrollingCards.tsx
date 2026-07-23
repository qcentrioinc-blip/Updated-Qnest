// import { ContactUs } from "../../../styles/Button";
import { H2, H4, P } from "../../../styles/Typography";

const ScrollingCards = () => {
    return (
        <>
            <div
                className="relative min-h-screen"
                style={{
                    // backgroundImage: "url('/Products/CapabilityBackground.png')",
                    backgroundPosition: "bottom",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="max-w-8xl lg:mx-10 mx-4 py-20 px-4">
                    {/* Desktop: Side by Side | Mobile: Stacked */}
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(400px,516px)_1fr] gap-10 lg:gap-16">
                        
                        {/* Left Column - Sticky on Desktop Only */}
                        <div className="lg:sticky lg:top-20 lg:h-fit">
                            <div className="space-y-6 lg:space-y-8 w-full max-w-[516px]">
                                
                                {/* Title - Responsive Font Size */}
                                <div className="flex items-center gap-3">
                                            <div className="h-[6px] w-10 rounded-full bg-[#141414] opacity-20"></div>
                                            <H4 className="text-black">Quis autem</H4>
                                          </div>
                                <H2
                                    className=" leading-[120%]"
                                    
                                >
                                    
                                        Consecte adipiscing
                                    
                                    
                                </H2>

                                {/* Description - Responsive Font */}
                                <P
                                    className="leading-[140%]"
                                    
                                >
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </P>

                                {/* List Items - Responsive Icons & Text */}
                                {/* <ContactUs>CONTACT US</ContactUs> */}
                            </div>
                        </div>

                        {/* Right Column - Scrollable Cards */}
                        <div className="flex flex-col items-end gap-6 w-full">
                            
                            {/* Card Component (Repeated 4 times) */}
                            {[
                                { number: '01', title: 'Banks' },
                                { number: '02', title: 'Banks' },
                                { number: '03', title: 'Banks' },
                                { number: '04', title: 'Banks' }
                            ].map((card) => (
                                <div
                                    key={card.number}
                                    className="w-full rounded-2xl p-2 sm:p-4 lg:p-4"
                                    style={{
                                        maxWidth: '971px',
                                        minHeight: '290px',
                                        backgroundColor: '#F5F5F5',
                                        border: '1px solid #E0E0E0'
                                    }}
                                >
                                    {/* Desktop Layout: Number + Content Side by Side */}
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                        
                                        {/* Card Number - Responsive Size */}
                                        <div
                                            className="font-bold flex-shrink-0"
                                            style={{
                                                fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                                fontSize: 'clamp(32px, 8vw, 58px)', // Scales 48px to 70px
                                                lineHeight: '1.1',
                                                color: '#141414',
                                            }}
                                        >
                                            {card.number}
                                        </div>

                                        {/* Card Content */}
                                        <div className="flex-1">
                                            <h3
                                                className="font-semibold mb-4 lg:mb-8"
                                                style={{
                                                    fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                                    fontSize: 'clamp(24px, 4vw, 32px)', // Scales 24px to 32px
                                                    lineHeight: '1.2',
                                                    color: '#141414',
                                                    marginTop: 'clamp(8px, 2vw, 20px)'
                                                }}
                                            >
                                                {card.title}
                                            </h3>

                                            {/* Description - NO LEFT MARGIN on Mobile */}
                                            <p
                                                className="leading-[150%]"
                                                style={{
                                                    fontFamily: "'Quicksand', sans-serif",
                                                    fontWeight: 400,
                                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                                    color: '#141414',
                                                    // Only add left margin on large screens
                                                    marginLeft: window.innerWidth >= 1024 ? '160px' : '0'
                                                }}
                                            >
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat
                                                <br /><br />
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ScrollingCards;
