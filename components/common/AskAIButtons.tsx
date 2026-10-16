const ASK_AI_PROMPT = `I'm planning a home or commercial space and want to explore AI-powered design solutions. Help me understand how Zlendo Realty can create 2D floor plans, 3D visualizations, photorealistic renders, walkthroughs, BOQs, cost estimates, and complete architectural services. Summarize the available products, subscription plans, professional services, and recommend the best solution for my project.`;

const encodedPrompt = encodeURIComponent(ASK_AI_PROMPT);

const ChatGPTIcon = () => (
    <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="ask-ai-mask0-chatgpt" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: 'luminance' }}>
            <path d="M23.987.03H.02v23.967h23.967V.03Z" fill="#fff" />
        </mask>
        <g mask="url(#ask-ai-mask0-chatgpt)">
            <mask id="ask-ai-mask1-chatgpt" maskUnits="userSpaceOnUse" x="0" y="1" width="24" height="23" style={{ maskType: 'luminance' }}>
                <path d="M23.109 1H.899v22.011h22.21V1Z" fill="#fff" />
            </mask>
            <g mask="url(#ask-ai-mask1-chatgpt)">
                <path d="M9.418 9.012V6.921c0-.176.066-.308.22-.396l4.204-2.421c.572-.33 1.255-.485 1.96-.485 2.64 0 4.313 2.048 4.313 4.227 0 .154 0 .33-.022.506l-4.358-2.554a.737.737 0 0 0-.792 0L9.418 9.012Zm9.817 8.144V12.16a.736.736 0 0 0-.396-.683l-5.525-3.213 1.805-1.035a.4.4 0 0 1 .44 0l4.204 2.421c1.21.705 2.025 2.201 2.025 3.654 0 1.673-.99 3.214-2.553 3.852ZM8.119 12.754l-1.805-1.056c-.154-.088-.22-.22-.22-.397V6.46c0-2.355 1.805-4.138 4.248-4.138a4.12 4.12 0 0 1 2.51.858L8.516 5.69a.736.736 0 0 0-.397.682v6.383ZM12.004 15l-2.586-1.453v-3.081l2.586-1.453 2.586 1.453v3.082L12.004 15Zm1.662 6.692a4.12 4.12 0 0 1-2.51-.859l4.337-2.51a.736.736 0 0 0 .396-.681v-6.384l1.827 1.057c.154.088.22.22.22.396v4.842c0 2.355-1.827 4.139-4.27 4.139Zm-5.217-4.909-4.204-2.421c-1.21-.705-2.025-2.201-2.025-3.654a4.148 4.148 0 0 1 2.575-3.852v5.019c0 .308.132.528.396.682l5.503 3.192-1.805 1.034a.4.4 0 0 1-.44 0Zm-.242 3.61c-2.487 0-4.314-1.87-4.314-4.182 0-.176.022-.352.044-.528l4.336 2.509a.737.737 0 0 0 .793 0l5.524-3.192v2.091c0 .177-.066.309-.22.397l-4.204 2.42c-.572.331-1.255.485-1.959.485Zm5.459 2.62a5.504 5.504 0 0 0 5.393-4.403c2.465-.638 4.05-2.95 4.05-5.305 0-1.54-.66-3.037-1.849-4.116.11-.462.176-.924.176-1.386 0-3.148-2.553-5.503-5.503-5.503-.594 0-1.166.088-1.739.286A5.517 5.517 0 0 0 10.342 1 5.503 5.503 0 0 0 4.95 5.402C2.484 6.041.9 8.352.9 10.707c0 1.54.66 3.037 1.85 4.116-.11.462-.177.925-.177 1.387 0 3.147 2.554 5.503 5.503 5.503.594 0 1.167-.088 1.739-.287a5.516 5.516 0 0 0 3.852 1.585Z" fill="currentColor" />
            </g>
        </g>
    </svg>
);

const PerplexityIcon = () => (
    <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="m5.206.889 6.176 5.83V.902h1.202v5.843L18.787.89v6.647h2.546v9.588h-2.539v5.92l-6.21-5.592v5.655h-1.202v-5.563l-6.169 5.567v-5.987H2.667V7.536h2.54V.89Zm5.27 7.864H3.868v7.155h1.343V13.65l5.263-4.898Zm-4.06 5.438v6.205l4.966-4.482V9.568l-4.967 4.623Zm6.202 1.664V9.562l4.968 4.623v2.94h.006v3.208l-4.974-4.478Zm6.176.053h1.337V8.753h-6.557l5.22 4.847v2.308Zm-1.21-8.372V3.688l-4.076 3.848h4.076Zm-7.1 0H6.409V3.688l4.077 3.848Z" fill="currentColor" />
    </svg>
);

const ClaudeIcon = () => (
    <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#ask-ai-clip0-claude)">
            <path d="m11.376 24-.6-.456-.336-.744.336-1.488.384-1.92.312-1.536.288-1.896.168-.624-.024-.048-.12.024-1.44 1.968-2.184 2.952-1.728 1.824-.408.168-.72-.36.072-.672.408-.576 2.376-3.048 1.44-1.896.936-1.08-.024-.144h-.048l-6.336 4.128L3 18.72l-.504-.456.072-.744.24-.24 1.896-1.32 4.728-2.64.072-.24-.072-.12h-.24l-.792-.048-2.688-.072-2.328-.096-2.28-.12-.576-.12-.528-.72.048-.36.48-.312.696.048 1.512.12 2.28.144 1.656.096 2.448.264h.384l.048-.168-.12-.096-.096-.096L6.96 9.84 4.416 8.16l-1.344-.984-.72-.504-.36-.456-.144-1.008.648-.72.888.072.216.048.888.696 1.896 1.464L8.88 8.616l.36.288.168-.096v-.072l-.168-.264-1.344-2.448-1.44-2.496-.648-1.032-.168-.624a2.53 2.53 0 0 1-.096-.72L6.288.144 6.696 0l1.008.144.408.36.624 1.416.984 2.232 1.56 3.024.456.912.24.816.096.264h.168v-.144l.12-1.728.24-2.088.24-2.688.072-.768.384-.912.744-.48.576.264.48.696-.072.432L14.76 3.6l-.576 2.904-.36 1.968h.216l.24-.264.984-1.296 1.656-2.064.72-.816.864-.912.552-.432h1.032l.744 1.128-.336 1.176-1.056 1.344-.888 1.128-1.272 1.704-.768 1.368.072.096h.168l2.856-.624 1.56-.264 1.824-.312.84.384.096.384-.336.816-1.968.48-2.304.456-3.432.816-.048.024.048.072 1.536.144.672.048h1.632l3.024.216.792.528.456.624-.072.504-1.224.6-1.632-.384-3.84-.912-1.296-.312h-.192v.096l1.104 1.08 1.992 1.8 2.52 2.328.12.576-.312.48-.336-.048-2.208-1.68-.864-.744-1.92-1.608h-.12v.168l.432.648 2.352 3.528.12 1.08-.168.336-.624.216-.648-.12-1.392-1.92-1.416-2.184-1.152-1.944-.12.096-.696 7.248-.312.36-.72.288Z" fill="#D97757" />
        </g>
        <defs>
            <clipPath id="ask-ai-clip0-claude">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);

const GeminiIcon = () => (
    <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.616 10.835a14.148 14.148 0 0 1-4.45-3.001 14.111 14.111 0 0 1-3.678-6.452.503.503 0 0 0-.975 0c-.629 2.44-1.9 4.668-3.679 6.452a14.155 14.155 0 0 1-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 0 0 0 .975c.684.172 1.35.397 2.002.677a14.148 14.148 0 0 1 4.45 3.001 14.112 14.112 0 0 1 3.68 6.453.502.502 0 0 0 .974 0c.172-.685.397-1.351.677-2.003a14.146 14.146 0 0 1 3.001-4.45 14.113 14.113 0 0 1 6.453-3.678.503.503 0 0 0 0-.975 13.24 13.24 0 0 1-2.003-.678Z" fill="#3186FF" />
        <path d="M20.616 10.835a14.148 14.148 0 0 1-4.45-3.001 14.111 14.111 0 0 1-3.678-6.452.503.503 0 0 0-.975 0c-.629 2.44-1.9 4.668-3.679 6.452a14.155 14.155 0 0 1-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 0 0 0 .975c.684.172 1.35.397 2.002.677a14.148 14.148 0 0 1 4.45 3.001 14.112 14.112 0 0 1 3.68 6.453.502.502 0 0 0 .974 0c.172-.685.397-1.351.677-2.003a14.146 14.146 0 0 1 3.001-4.45 14.113 14.113 0 0 1 6.453-3.678.503.503 0 0 0 0-.975 13.24 13.24 0 0 1-2.003-.678Z" fill="url(#ask-ai-paint0-gemini)" />
        <path d="M20.616 10.835a14.148 14.148 0 0 1-4.45-3.001 14.111 14.111 0 0 1-3.678-6.452.503.503 0 0 0-.975 0c-.629 2.44-1.9 4.668-3.679 6.452a14.155 14.155 0 0 1-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 0 0 0 .975c.684.172 1.35.397 2.002.677a14.148 14.148 0 0 1 4.45 3.001 14.112 14.112 0 0 1 3.68 6.453.502.502 0 0 0 .974 0c.172-.685.397-1.351.677-2.003a14.146 14.146 0 0 1 3.001-4.45 14.113 14.113 0 0 1 6.453-3.678.503.503 0 0 0 0-.975 13.24 13.24 0 0 1-2.003-.678Z" fill="url(#ask-ai-paint1-gemini)" />
        <path d="M20.616 10.835a14.148 14.148 0 0 1-4.45-3.001 14.111 14.111 0 0 1-3.678-6.452.503.503 0 0 0-.975 0c-.629 2.44-1.9 4.668-3.679 6.452a14.155 14.155 0 0 1-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 0 0 0 .975c.684.172 1.35.397 2.002.677a14.148 14.148 0 0 1 4.45 3.001 14.112 14.112 0 0 1 3.68 6.453.502.502 0 0 0 .974 0c.172-.685.397-1.351.677-2.003a14.146 14.146 0 0 1 3.001-4.45 14.113 14.113 0 0 1 6.453-3.678.503.503 0 0 0 0-.975 13.24 13.24 0 0 1-2.003-.678Z" fill="url(#ask-ai-paint2-gemini)" />
        <defs>
            <linearGradient id="ask-ai-paint0-gemini" x1="7" y1="15.5" x2="11" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#08B962" />
                <stop offset="1" stopColor="#08B962" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ask-ai-paint1-gemini" x1="8" y1="5.5" x2="11.5" y2="11" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F94543" />
                <stop offset="1" stopColor="#F94543" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ask-ai-paint2-gemini" x1="3.5" y1="13.5" x2="17.5" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FABC12" />
                <stop offset="0.46" stopColor="#FABC12" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

const aiProviders = [
    { name: 'ChatGPT', href: `https://chatgpt.com/?prompt=${encodedPrompt}`, Icon: ChatGPTIcon },
    { name: 'Perplexity', href: `https://www.perplexity.ai/search/new?q=${encodedPrompt}`, Icon: PerplexityIcon },
    { name: 'Claude', href: `https://claude.ai/new?q=${encodedPrompt}`, Icon: ClaudeIcon },
    { name: 'Gemini', href: `https://www.google.com/search?udm=50&aep=11&q=${encodedPrompt}`, Icon: GeminiIcon },
];

const AskAIButtons = () => {
    return (
        <div className="space-y-3.5">
            <p className="text-[16px] font-bold text-zlendo-grey-dark">Ask AI about Zlendo Realty.</p>
            <div className="flex items-center gap-5">
                {aiProviders.map(({ name, href, Icon }) => (
                    <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label={`Ask ${name} about Zlendo Realty`}
                        title={`Ask ${name} about Zlendo Realty`}
                        className="text-zlendo-grey-dark opacity-85 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <Icon />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default AskAIButtons;
