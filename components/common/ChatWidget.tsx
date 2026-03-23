'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Bot, HelpCircle, ArrowRight } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const ChatWidget = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm your Zlendo AI assistant. How can I help you today? You can ask about our Pricing, 3D Tools, or Vastu services.",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const keywordResponses: Record<string, string> = {
        'pricing': "Explore our flexible plans here: [View Pricing](/in/plans). We offer both monthly and annual subscriptions.",
        'cost': "Explore our flexible plans here: [View Pricing](/in/plans). We offer both monthly and annual subscriptions.",
        'plan': "Explore our flexible plans here: [View Pricing](/in/plans). We offer both monthly and annual subscriptions.",
        '3d': "Zlendo Realty provides 8K ultra-realistic renders and AI walkthroughs. Check out our [Design Library](/in/design-library)!",
        'render': "Zlendo Realty provides 8K ultra-realistic renders and AI walkthroughs. Check out our [Design Library](/in/design-library)!",
        'walkthrough': "Zlendo Realty provides 8K ultra-realistic renders and AI walkthroughs. Check out our [Design Library](/in/design-library)!",
        'vastu': "Our Vastu Optimizer is perfect for positive home alignment. You can learn more [here](/in/products/vastu).",
        'contact': "You can reach us at contact@zlendorealty.com or visit our [Contact Page](/in/contact).",
        'support': "You can reach us at contact@zlendorealty.com or visit our [Contact Page](/in/contact).",
        'hello': "Hello! How can the Zlendo team assist you today?",
        'hi': "Hello! How can the Zlendo team assist you today?",
        'hey': "Hello! How can the Zlendo team assist you today?",
        'partner': "We love collaborators! Check our [Partners Program](/in/partners) to grow with us.",
        'affiliate': "We love collaborators! Check our [Partners Program](/in/partners) to grow with us.",
        'thanks': "You're very welcome! Feel free to ask more questions.",
        'thank': "You're very welcome! Feel free to ask more questions.",
        'bye': "Goodbye! Have a great day!"
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue.trim(),
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        // Simple Bot Logic
        setTimeout(() => {
            const lowerInput = userMsg.text.toLowerCase();
            let responseText = "I'm not sure about that. Try asking about 'Pricing' or '3D Tools'. Alternatively, you can reach us at contact@zlendorealty.com or visit our [Contact Page](/in/contact).";

            // Keyword matching
            for (const [keyword, response] of Object.entries(keywordResponses)) {
                if (lowerInput.includes(keyword)) {
                    responseText = response;
                    break;
                }
            }

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
        }, 800);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50, x: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50, x: 20 }}
                    className="fixed bottom-24 right-4 md:right-8 w-[calc(100vw-32px)] md:w-[380px] max-h-[calc(100vh-120px)] h-[550px] bg-white rounded-[32px] shadow-2xl z-[7000] border border-black/5 flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-zlendo-teal p-6 text-white flex items-center justify-between relative overflow-hidden">
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-black text-lg">Zlendo Realty Assistant</h4>
                                <div className="flex items-center gap-1.5 min-w-0">
                                    <span className="w-2 h-2 bg-emerald-300 rounded-full" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Always Active</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-all relative z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Backdrop pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                    </div>

                    {/* Messages Area */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50 scroll-smooth"
                    >
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[80%] p-4 rounded-2xl flex flex-col gap-1 ${msg.sender === 'user'
                                    ? 'bg-zlendo-teal text-white rounded-tr-none'
                                    : 'bg-white text-zlendo-grey-dark shadow-sm border border-black/5 rounded-tl-none'
                                    }`}>
                                    <p className="text-sm font-medium leading-relaxed">
                                        {msg.text.split(/(\[.*?\]\(.*?\))/).map((part, i) => {
                                            const match = part.match(/\[(.*?)\]\((.*?)\)/);
                                            if (match) {
                                                return (
                                                    <a 
                                                        key={i} 
                                                        href={match[2]} 
                                                        className={`font-black underline decoration-2 underline-offset-2 transition-all hover:opacity-80 ${
                                                            msg.sender === 'user' ? 'text-white decoration-white/40' : 'text-zlendo-teal decoration-zlendo-teal/30'
                                                        }`}
                                                    >
                                                        {match[1]}
                                                    </a>
                                                );
                                            }
                                            return part;
                                        })}
                                    </p>
                                    <span className={`text-[9px] font-bold opacity-40 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Replies */}
                    <div className="px-6 py-1.5 flex gap-2 overflow-x-auto no-scrollbar border-t border-black/[0.03]">
                        {['Pricing', '3D Tools', 'Vastu', 'Support'].map(q => (
                            <button
                                key={q}
                                onClick={() => {
                                    setInputValue(q);
                                    setTimeout(handleSend, 0);
                                }}
                                className="px-4 py-1 bg-white border border-black/5 rounded-full text-xs font-bold text-zlendo-grey-medium whitespace-nowrap hover:border-zlendo-teal hover:text-zlendo-teal transition-all shadow-sm"
                            >
                                {q}
                            </button>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="px-6 py-4 bg-white border-t border-black/5">
                        <div className="relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Typing something..."
                                className="w-full bg-slate-50 border border-black/5 rounded-2xl py-3 pl-6 pr-14 outline-none focus:border-zlendo-teal focus:bg-white transition-all font-medium text-zlendo-grey-dark text-sm"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-zlendo-teal text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:hover:scale-100 shadow-lg shadow-zlendo-teal/20"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="mt-2 text-[8px] text-center font-bold text-zlendo-grey-medium opacity-30 uppercase tracking-[0.2em]">
                            Zlendo AI usually Responds in Seconds
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ChatWidget;
