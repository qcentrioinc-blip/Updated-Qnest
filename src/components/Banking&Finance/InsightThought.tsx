import { motion } from 'framer-motion';
import { H2, H4, P } from '../../styles/Typography';
 
const InsightThought = () => {
    // Data for cards
    const insights = [
        {
            img: "https://framerusercontent.com/images/Jm14NVS1DWCTSNRjQLkBTLtEKok.jpg?scale-down-to=1024",
            category: "Lorem ipsum",
            title: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque",
            author: "Author",
            date: "AUGUST 19, 2025"
        },
        {
            img: "https://framerusercontent.com/images/MDtFSJaF3MhabVjn223xx2IMk.jpg?scale-down-to=1024",
            category: "Lorem ipsum",
            title: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque",
            author: "Author",
            date: "AUGUST 19, 2025"
        },
        {
            img: "https://framerusercontent.com/images/v1ltoVHr1qjuj63noI3YsrEqSNg.jpg?scale-down-to=1024",
            category: "Lorem ipsum",
            title: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque",
            author: "Author",
            date: "AUGUST 19, 2025"
        }
    ];
 
    return (
        <div className="bg-white py-8 sm:py-12 lg:py-10" id='blogs'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-6">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6 sm:mb-8 lg:mb-12">
                    <H2 className="text-[#00AA72] text-xl sm:text-2xl lg:text-3xl flex-shrink-0">
                      Banking & Finance Insights
                    </H2>
                    <a href="/industries/banking-and-finance/blogs" className="flex-shrink-0">
                        <button
          className={`
            group hidden lg:flex
            items-center justify-center
            w-auto h-[44px] sm:h-[48px]
            px-[20px] sm:px-[24px] py-[10px] sm:py-[12px]
            rounded-[8px]
            font-quicksand font-bold text-[14px] sm:text-[16px]
            bg-[#141414] text-white
            transition-all duration-300 ease-in-out
            border border-transparent
            hover:bg-white hover:text-[#141414]
            hover:border-[#010101]
            hover:border-b-[4px]
            hover:-translate-y-[2px]
            shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
           
          `}
        > View All
          <span className="flex items-center gap-[8px]">
           
            <span className="relative flex items-center justify-center w-[20px] sm:w-[23px] h-[20px] sm:h-[23px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                <path d="M7 7h10v10" />
                <path d="M7 17L17 7" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </span>
        </button>
                    </a>
                </div>
 
                {/* Cards Grid */}
                {/* Horizontal Scrolling Row */}
                <div className="flex overflow-x-auto gap-4 sm:gap-5 lg:gap-6 pb-8 no-scrollbar -mx-4 px-6 sm:mx-0 sm:px-0">
                    {insights.map((card, i) => (
                        <motion.div
                            key={i}
                            className="bg-white rounded-lg overflow-hidden shadow-md border-8 sm:border-12 lg:border-16 border-white cursor-pointer flex-shrink-0 p-4 w-[75vw] sm:w-[50vw] lg:w-[calc(33.333%-1rem)]"
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="aspect-[4/3] relative overflow-hidden group">
                                <img
                                    src={card.img}
                                    alt="Modern architectural interior"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="overflow-hidden">
                                        <motion.div
                                            className="text-white text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap px-1"
                                            animate={{ x: [80, -80] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            READ DETAILS • READ DETAILS
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="py-4 lg:p-6">
                                <P className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{card.category}</P>
                                <H4 className="text-sm sm:text-md font-medium text-gray-900 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                                    {card.title}
                                </H4>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs sm:text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span className='font-quicksand'>{card.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="font-quicksand whitespace-nowrap">{card.date}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};
 
export default InsightThought;