import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const X = ({ size = 24, className = "", strokeWidth = 2 }: { size?: number; className?: string; strokeWidth?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);
const Send = ({ size = 24, className = "", strokeWidth = 2 }: { size?: number; className?: string; strokeWidth?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
);
const Trash2 = ({ size = 24, className = "", strokeWidth = 2 }: { size?: number; className?: string; strokeWidth?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
);

const ReactMarkdown = React.lazy(() => import('react-markdown'));

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

interface Message {
    id: string;
    role: 'user' | 'bot';
    content: string;
    timestamp: number;
}

const STORAGE_KEY = 'productx-chat-history';

// const formatTime = (timestamp: number) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
// };

interface ChatbotInterfaceProps {
    onClose: () => void;
}

const ChatbotInterface: React.FC<ChatbotInterfaceProps> = ({ onClose }) => {
    // We need to manage state here to persist history while open
    // Ideally we load from localstorage on mount
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'bot',
            content: "Hello! I'm the **ProductX assistant**. How can I help you today?",
            timestamp: Date.now(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const modalMessagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedMessages = localStorage.getItem(STORAGE_KEY);
        if (savedMessages) {
            try {
                const parsed = JSON.parse(savedMessages);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setMessages(parsed);
                }
            } catch (error) {
                console.error('Failed to load chat history:', error);
            }
        }
    }, []);

    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        }
    }, [messages]);

    useEffect(() => {
        modalMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleClearChat = () => {
        const welcomeMsg: Message = {
            id: 'welcome',
            role: 'bot',
            content: "Hello! I'm the **ProductX assistant**. How can I help you today?",
            timestamp: Date.now(),
        };
        setMessages([welcomeMsg]);
        localStorage.removeItem(STORAGE_KEY);
    };

    const abortControllerRef = useRef<AbortController | null>(null);

    // Cleanup active streams on unmount
    useEffect(() => {
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    const handleSendMessage = async (e?: React.FormEvent | undefined, question?: string) => {
        e?.preventDefault();

        const content = question || inputValue;

        if (!content.trim() || isLoading) return;

        // Cancel previous request if any
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        // Create new controller for this request
        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: content.trim(),
            timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);

        const botMsgId = (Date.now() + 1).toString();
        const initialBotMsg: Message = {
            id: botMsgId,
            role: 'bot',
            content: '',
            timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, initialBotMsg]);

        try {
            const response = await fetch(`${API_BASE_URL}/api/chat/stream`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: userMsg.content }),
                signal: abortController.signal
            });

            if (!response.ok) {
                const errorText = await response.text().catch(() => '');
                throw new Error(`Server error (${response.status}): ${errorText || 'Failed to get response'}`);
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();

            if (!reader) {
                throw new Error('No reader available');
            }

            let accumulatedText = '';
            let buffer = ''; // Buffer for handling partial SSE chunks

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                // Keep the last potentially incomplete line in the buffer
                buffer = lines.pop() || '';

                for (const line of lines) {
                    const trimmed = line.trim();
                    if (trimmed.startsWith('data: ')) {
                        const data = trimmed.slice(6).trim();
                        if (data === '[DONE]') continue;

                        try {
                            const parsed = JSON.parse(data);
                            if (parsed.text) {
                                accumulatedText += parsed.text;
                                setMessages((prev) =>
                                    prev.map((msg) =>
                                        msg.id === botMsgId
                                            ? { ...msg, content: accumulatedText }
                                            : msg
                                    )
                                );
                            }
                        } catch (e) {
                            // Skip invalid JSON
                        }
                    }
                }
            }

            // Process any remaining data in the buffer
            if (buffer.trim()) {
                const trimmed = buffer.trim();
                if (trimmed.startsWith('data: ')) {
                    const data = trimmed.slice(6).trim();
                    if (data !== '[DONE]') {
                        try {
                            const parsed = JSON.parse(data);
                            if (parsed.text) {
                                accumulatedText += parsed.text;
                                setMessages((prev) =>
                                    prev.map((msg) =>
                                        msg.id === botMsgId
                                            ? { ...msg, content: accumulatedText }
                                            : msg
                                    )
                                );
                            }
                        } catch (e) {
                            // Skip invalid JSON
                        }
                    }
                }
            }

            if (!accumulatedText) {
                throw new Error('No response received from server. Please ensure the backend server is running.');
            }
        } catch (error: any) {
            if (error.name === 'AbortError') {
                console.log('Request aborted');
                return;
            }
            console.error('Failed to send message:', error);

            let errorMessage = "Sorry, something went wrong. Please try again.";
            if (error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError')) {
                errorMessage = "Unable to connect to the server. Please check if the backend is running and try again.";
            } else if (error.message) {
                errorMessage = error.message;
            }

            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === botMsgId
                        ? {
                            ...msg,
                            content: errorMessage,
                        }
                        : msg
                )
            );
        } finally {
            if (abortControllerRef.current === abortController) {
                setIsLoading(false);
                abortControllerRef.current = null;
            }
        }
    };

    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 z-[9999]"
                onClick={onClose}
            />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="fixed right-0 top-[70px] bottom-0 w-full sm:max-w-md bg-white z-[10000] shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-white border-b border-zinc-200 px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg font-semibold text-zinc-900">Agentforce</span>
                        <button className="p-1 hover:bg-zinc-100 rounded-full transition-colors">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4m0-4h.01" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                        <button
                            onClick={handleClearChat}
                            className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors"
                            aria-label="Clear chat"
                        >
                            <Trash2 size={18} className="sm:w-5 sm:h-5 text-zinc-700" strokeWidth={2} />
                        </button>
                        <button className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="6" r="1.5" />
                                <circle cx="12" cy="12" r="1.5" />
                                <circle cx="12" cy="18" r="1.5" />
                            </svg>
                        </button>
                        <button className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors hidden sm:block">
                            <svg className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                        </button>
                        <button
                            onClick={onClose}
                            className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors"
                        >
                            <X size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
                        </button>
                    </div>
                </div>

                {/* Title */}
                <div className="bg-white px-4 py-6 sm:px-6 sm:py-8 shrink-0 border-b border-zinc-100">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-1">
                        <span className="text-zinc-900">How can </span>
                        <span className="text-blue-600">Agentforce</span>
                        <span className="text-zinc-900"> help?</span>
                    </h1>
                </div>

                {/* Messages Area - FIXED SCROLLING */}
                <div
                    className="flex-1 overflow-y-auto overflow-x-hidden pl-4 pr-5 py-4 sm:pl-6 sm:pr-8 sm:py-6 bg-zinc-50"
                    data-lenis-prevent
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#d4d4d8 transparent',
                        overscrollBehaviorY: 'contain'
                    }}
                >
                    <div className="text-center mb-4 sm:mb-6">
                        <span className="text-xs sm:text-sm text-zinc-500">Agentforce joined</span>
                    </div>

                    {/* Bot Welcome */}
                    <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
                                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <circle cx="9" cy="10" r="1" fill="white" />
                                <circle cx="15" cy="10" r="1" fill="white" />
                            </svg>
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm border border-zinc-200 max-w-[85%]">
                            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                                Hi, I'm Agentforce, an AI agent that can answer your Salesforce questions and connect you with our Sales Experts. This experience, powered entirely by Agentforce, keeps improving daily! Ask me things like, 'Can I chat with a Sales Expert?' or 'What is CRM?'
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <button
                            onClick={() => handleSendMessage(undefined, 'Connect me with a sales rep')}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3.5 bg-white hover:bg-zinc-50 text-blue-600 text-xs sm:text-[15px] font-semibold rounded-lg sm:rounded-xl transition-all border-2 border-blue-600 text-left"
                        >
                            Connect me with a sales rep
                        </button>
                        <button
                            onClick={() => handleSendMessage(undefined, 'Show me an Agentforce demo')}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3.5 bg-white hover:bg-zinc-50 text-blue-600 text-xs sm:text-[15px] font-semibold rounded-lg sm:rounded-xl transition-all border-2 border-blue-600 text-left"
                        >
                            Show me an Agentforce demo
                        </button>
                        <button
                            onClick={() => handleSendMessage(undefined, 'How can Salesforce help my business')}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3.5 bg-white hover:bg-zinc-50 text-blue-600 text-xs sm:text-[15px] font-semibold rounded-lg sm:rounded-xl transition-all border-2 border-blue-600 text-left"
                        >
                            How can Salesforce help my business
                        </button>
                    </div>

                    {/* User Messages */}
                    {messages.slice(1).map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex mb-3 sm:mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start items-start gap-2 sm:gap-3'}`}
                        >
                            {msg.role === 'bot' && (
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
                                        <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                        <circle cx="9" cy="10" r="1" fill="white" />
                                        <circle cx="15" cy="10" r="1" fill="white" />
                                    </svg>
                                </div>
                            )}
                            <div
                                className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] ${msg.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-tr-sm shadow-md'
                                    : 'bg-white text-zinc-700 rounded-tl-sm shadow-sm border border-zinc-200'
                                    }`}
                            >
                                {msg.role === 'bot' ? (
                                    <React.Suspense fallback={<div className="animate-pulse h-4 bg-gray-200 rounded w-3/4"></div>}>
                                        <ReactMarkdown
                                            components={{
                                                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                            }}
                                        >
                                            {msg.content || '...'}
                                        </ReactMarkdown>
                                    </React.Suspense>
                                ) : (
                                    <p>{msg.content}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-start gap-2 sm:gap-3"
                        >
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
                                    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="9" cy="10" r="1" fill="white" />
                                    <circle cx="15" cy="10" r="1" fill="white" />
                                </svg>
                            </div>
                            <div className="bg-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl rounded-tl-sm shadow-sm border border-zinc-200">
                                <div className="flex gap-1.5">
                                    <motion.span
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                                        className="w-2 h-2 bg-zinc-400 rounded-full"
                                    />
                                    <motion.span
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }}
                                        className="w-2 h-2 bg-zinc-400 rounded-full"
                                    />
                                    <motion.span
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }}
                                        className="w-2 h-2 bg-zinc-400 rounded-full"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                    <div ref={modalMessagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="bg-white border-t border-zinc-200 px-3 py-3 sm:px-5 sm:py-4 shrink-0">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-2 sm:gap-3">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Message Agentforce"
                            disabled={isLoading}
                            className="flex-1 bg-zinc-100 text-zinc-900 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-0 disabled:opacity-50 placeholder:text-zinc-400"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isLoading}
                            className="p-2.5 sm:p-3 text-blue-600 hover:bg-blue-50 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                        >
                            <Send size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
                        </button>
                    </form>
                </div>
            </motion.div>
        </>
    );
};

export default ChatbotInterface;
