'use client';

import { Bot, Compass, Asterisk, Sparkles } from 'lucide-react';

const ASK_AI_PROMPT = `I'm planning a home or commercial space and want to explore AI-powered design solutions. Help me understand how Zlendo Realty can create 2D floor plans, 3D visualizations, photorealistic renders, walkthroughs, BOQs, cost estimates, and complete architectural services. Summarize the available products, subscription plans, professional services, and recommend the best solution for my project.`;

const encodedPrompt = encodeURIComponent(ASK_AI_PROMPT);

const aiProviders = [
    {
        name: 'ChatGPT',
        href: `https://chatgpt.com/?q=${encodedPrompt}`,
        Icon: Bot,
        color: '#10A37F',
    },
    {
        name: 'Perplexity',
        href: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
        Icon: Compass,
        color: '#20808D',
    },
    {
        name: 'Claude',
        href: `https://claude.ai/new?q=${encodedPrompt}`,
        Icon: Asterisk,
        color: '#D97757',
    },
    {
        name: 'Gemini',
        href: `https://gemini.google.com/app?q=${encodedPrompt}`,
        Icon: Sparkles,
        color: '#4285F4',
    },
];

const AskAIButtons = () => {
    return (
        <div className="space-y-3">
            <p className="text-[13px] font-bold text-zlendo-grey-dark opacity-80">Ask AI about Zlendo Realty.</p>
            <div className="flex flex-wrap gap-2.5">
                {aiProviders.map(({ name, href, Icon, color }) => (
                    <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ask ${name} about Zlendo Realty`}
                        title={`Ask ${name} about Zlendo Realty`}
                        className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-zlendo-grey-dark shadow-sm border border-black/[0.08] transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg"
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = color)}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
                    >
                        <Icon className="w-[18px] h-[18px]" strokeWidth={2.25} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default AskAIButtons;
