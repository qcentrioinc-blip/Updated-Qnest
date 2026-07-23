import React, { useState, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import GoToTopButton from '../GoToTopButton';

const ChatbotInterface = React.lazy(() => import('./ChatbotInterface'));

const ChatbotButton: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleFloatingButtonClick = () => {
        setShowModal(true);
    };

    return createPortal(
        <>
            <AnimatePresence>
                {!showModal && (
                    <>
                        <GoToTopButton />

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleFloatingButtonClick}
                            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-3 sm:px-5 sm:py-3.5 text-white rounded-full shadow-xl flex items-center gap-2 sm:gap-3 z-[10000] cursor-pointer hover:shadow-2xl transition-all"
                            style={{
                                background: 'linear-gradient(to right, #062fc2 0%, #0670d3 100%)'
                            }}
                            aria-label="Open chat"
                        >
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" stroke="#0670d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {/* Robot Head Box */}
                                    <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" />

                                    {/* Robot Smile */}
                                    <path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1" />

                                    {/* Left Antenna */}
                                    <path d="M9 7l-1 -4" />

                                    {/* Right Antenna */}
                                    <path d="M15 7l1 -4" />

                                    {/* Left Eye */}
                                    <path d="M9 12v-1" />

                                    {/* Right Eye */}
                                    <path d="M15 12v-1" />
                                </svg>
                            </div>
                        </motion.button>
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showModal && (
                    <Suspense fallback={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="fixed right-0 top-[70px] bottom-0 w-full sm:max-w-md bg-white z-[10000] shadow-2xl flex flex-col items-center justify-center"
                        >
                            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        </motion.div>
                    }>
                        <ChatbotInterface onClose={() => setShowModal(false)} />
                    </Suspense>
                )}
            </AnimatePresence>
        </>,
        document.body

    );
};

export default ChatbotButton;
