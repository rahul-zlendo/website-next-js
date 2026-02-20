'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Box, Sparkles, Calculator, Ruler, Layout, Cpu, Video, Library, LayoutTemplate, BookOpen, Share2, Briefcase, User, ArrowRight, PenTool, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../common/Logo';
import { SIGNUP_URL, LOGIN_URL } from '@/lib/constants/urls';
import { designLibrary, REACT_APP_BLOB_KEY, REACT_APP_BLOB_URL } from '@/lib/config/env';
import { useCountry } from '@/lib/context/CountryContext';
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import { logout } from '@/lib/store/slices/authSlice';
import Cookies from 'js-cookie';
import { BLOB_BASE_URL, BLOB_SAS_TOKEN } from '@/lib/utils/blobUtils';

interface HeaderProps {
    transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
    const { getPath } = useCountry();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);

    const handleLogout = () => {
        // Clear cookies for the shared domain
        const cookieOptions = { domain: '.zlendorealty.com', path: '/' };
        Cookies.remove('userData', cookieOptions);
        Cookies.remove('accessToken', cookieOptions);
        Cookies.remove('isAuthenticated', cookieOptions);

        // Clear cookies for the current domain just in case
        Cookies.remove('userData');
        Cookies.remove('accessToken');
        Cookies.remove('isAuthenticated');

        // Clear Local Storage and Session Storage
        localStorage.clear();
        sessionStorage.clear();

        // Update Redux state
        dispatch(logout());

        // Redirect to home and force a reload to ensure clean state
        window.location.href = getPath('/');
    };

    // Handle scroll for sticky effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine mode based on path - check for enterprise in path (handles /in/enterprise, /us/enterprise etc)
    const isBusinessMode = pathname?.includes('/business');

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const productLinks = [
        { label: 'AI Floor Planner', desc: 'Design & Visualize in 3D', icon: PenTool, path: getPath('/products/floor-planner') },
        { label: '2D to 3D Converter', desc: 'Instant floor plan conversion', icon: Box, path: getPath('/products/2d-to-3d') },
        { label: 'Smart Room Styler', desc: 'AI-driven interior styling', icon: Sparkles, path: getPath('/products/room-styler') },
        { label: 'Interiors & Exteriors', desc: 'Region-aware design intelligence', icon: Layout, path: getPath('/products/interiors-exteriors') },
        { label: 'Smart Cost Estimator', desc: 'Precise project budgeting', icon: Calculator, path: getPath('/products/cost-estimator') },
        { label: 'Vastu Optimizer', desc: 'Ancient wisdom, modern tech', icon: Ruler, path: getPath('/products/vastu') },
        { label: 'Realistic Renders', desc: 'Photorealistic lighting visualization', icon: Cpu, path: getPath('/products/realistic-renders') },
        { label: 'Virtual Walkthrough', desc: '8K Ultra-realistic experiences', icon: Video, path: getPath('/products/virtual-walkthrough') },
    ];

    const resourceLinks = [
        { label: 'Design Library', desc: 'Inspiration gallery', icon: Library, path: designLibrary, openInNewTab: true },
        { label: 'Pre-built Templates', desc: 'Built-in layouts for homes, rooms, and interiors.', icon: LayoutTemplate, path: getPath('/viewalltemplates') },
        { label: 'Tutorials', desc: 'Learn the platform', icon: BookOpen, path: 'https://www.youtube.com/playlist?list=PLetnELr5c_JVwUtuFKM9wGjGKrKPrGmsa', openInNewTab: true },
        { label: 'Help Center', desc: 'Find answers & support', icon: CheckCircle, path: '/help-center', openInNewTab: false },
        { label: 'Blog', desc: 'Insights & Updates', icon: PenTool, path: '/blog', openInNewTab: false },
        ...(isBusinessMode ? [{ label: 'Grow with Zlendo', desc: 'Affiliate & Partners', icon: Share2, path: getPath('/partners') }] : []),
    ];

    const businessUseCases = [
        { label: 'Commercial Spaces', desc: 'Office & Retail design', icon: Layout, path: getPath('/business/commercial-spaces') },
        { label: 'Real Estate Brokers', desc: 'Accelerate your sales', icon: Briefcase, path: getPath('/business/real-estate-brokers') },
        { label: 'NRI & Remote Planning', desc: 'Manage from anywhere', icon: Briefcase, path: getPath('/business/nri-remote-planning') },
        { label: 'Developer Solutions', desc: 'Scalable engine', icon: Cpu, path: getPath('/business/developer-solutions') },
    ];

    const individualUseCases = [
        { label: 'Home Remodeling', desc: 'Revitalize your current space', icon: Layout, path: getPath('/use-case/home-remodeling') },
        { label: 'Interior Design', desc: 'Aesthetic room planning', icon: Sparkles, path: getPath('/use-case/interior-design') },
        { label: 'Vastu Optimization', desc: 'Harmony & energy flow', icon: Ruler, path: getPath('/use-case/vastu-optimization') },
        { label: 'New Home Building', desc: 'From plot to perfection', icon: User, path: getPath('/use-case/new-home-building') },
    ];

    const businessMenuLinks = [
        { label: 'Business Free Trial', desc: 'Try enterprise features', icon: CheckCircle, path: getPath('/business') + '#demo-form' },
        { label: 'Affiliate & Partner Program', desc: 'Collaborate and grow together', icon: Share2, path: getPath('/partners') },
        { label: 'Zlendo API Suite', desc: 'Grow your Business with Us', icon: Share2, path: getPath('/products/api-suite') },

    ];

    const toggleMode = () => {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
    };

    const getImageUrl = (url: string) => {
        return url.startsWith('http') ? url : `${REACT_APP_BLOB_URL}${url}?${REACT_APP_BLOB_KEY}`;
    };

    return (
        <nav
            ref={dropdownRef}
            className={`sticky top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isMobileMenuOpen ? 'bg-white' : (transparent && !scrolled && activeDropdown === null
                ? 'bg-transparent'
                : 'bg-white/95 backdrop-blur-md border-b border-black/[0.03] shadow-lg shadow-black/[0.02]'
            )}`}
        >
            <div className="container-custom h-20 flex items-center justify-between px-6 lg:px-12">
                <div className="flex items-center gap-10">
                    <Logo className="h-14" onClick={toggleMode} />

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Products Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                                className={`flex items-center gap-1.5 text-[15px] font-semibold transition-all hover:text-zlendo-teal ${activeDropdown === 'products' ? 'text-zlendo-teal' : 'text-[#333333]'}`}
                            >
                                Products <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'products' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full left-0 mt-4 w-[600px] bg-white rounded-[32px] shadow-2xl border border-black/[0.03] p-8 grid grid-cols-2 gap-6 overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-zlendo-teal/[0.03] to-transparent pointer-events-none" />
                                        {productLinks.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.path}
                                                prefetch={true}
                                                onClick={toggleMode}
                                                className="flex gap-4 p-4 rounded-2xl hover:bg-zlendo-teal/[0.03] transition-all group/item"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal group-hover/item:scale-110 transition-transform">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="text-[16px] font-bold text-zlendo-grey-dark">{item.label}</h4>
                                                    <p className="text-xs text-zlendo-grey-medium font-semibold opacity-60 line-clamp-1">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Use Cases Dropdown (Dynamic) */}
                        <div className="relative group">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'use-cases' ? null : 'use-cases')}
                                className={`flex items-center gap-1.5 text-[15px] font-semibold transition-all hover:text-zlendo-teal ${activeDropdown === 'use-cases' ? 'text-zlendo-teal' : 'text-[#333333]'}`}
                            >
                                Use Cases <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'use-cases' ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {activeDropdown === 'use-cases' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full left-0 mt-4 w-[340px] bg-white rounded-[32px] shadow-2xl border border-black/[0.03] p-6 flex flex-col gap-2"
                                    >
                                        {(isBusinessMode ? businessUseCases : individualUseCases).map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.path}
                                                prefetch={true}
                                                onClick={toggleMode}
                                                className="flex gap-4 p-4 rounded-2xl hover:bg-zlendo-teal/5 transition-all group/item"
                                            >
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isBusinessMode ? 'bg-zlendo-orange/10 text-zlendo-orange' : 'bg-zlendo-teal/10 text-zlendo-teal'}`}>
                                                    <item.icon className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <h4 className="text-[16px] font-bold text-zlendo-grey-dark">{item.label}</h4>
                                                    <p className="text-[10px] text-zlendo-grey-medium font-semibold opacity-60">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Resources Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                                className={`flex items-center gap-1.5 text-[15px] font-semibold transition-all hover:text-zlendo-teal ${activeDropdown === 'resources' ? 'text-zlendo-teal' : 'text-[#333333]'}`}
                            >
                                Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {activeDropdown === 'resources' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full left-0 mt-4 w-[340px] bg-white rounded-[32px] shadow-2xl border border-black/[0.03] p-6 flex flex-col gap-2"
                                    >
                                        {resourceLinks.map((item) => {
                                            const isExternal = item.path.startsWith('http');
                                            const shouldOpenInNewTab = item.openInNewTab !== undefined ? item.openInNewTab : isExternal;
                                            const content = (
                                                <>
                                                    <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                                        <item.icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[16px] font-bold text-zlendo-grey-dark">{item.label}</h4>
                                                        <p className="text-[10px] text-zlendo-grey-medium font-semibold opacity-60">{item.desc}</p>
                                                    </div>
                                                </>
                                            );
                                            const className = "flex gap-4 p-4 rounded-2xl hover:bg-zlendo-teal/5 transition-all group/item";

                                            if (isExternal) {
                                                return (
                                                    <a
                                                        key={item.label}
                                                        href={item.path}
                                                        target={shouldOpenInNewTab ? "_blank" : undefined}
                                                        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                                                        onClick={toggleMode}
                                                        className={className}
                                                    >
                                                        {content}
                                                    </a>
                                                );
                                            }

                                            return (
                                                <Link
                                                    key={item.label}
                                                    href={item.path}
                                                    prefetch={true}
                                                    onClick={toggleMode}
                                                    className={className}
                                                >
                                                    {content}
                                                </Link>
                                            );
                                        })}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Plans Link (New) - Only for Individuals */}
                        {!isBusinessMode && (
                            <Link
                                href={getPath('/plans')}
                                prefetch={true}
                                className={`text-[15px] font-semibold transition-all hover:text-zlendo-teal ${pathname === getPath('/plans') ? 'text-zlendo-teal' : 'text-[#333333]'}`}
                                onClick={toggleMode}
                            >
                                Plans
                            </Link>
                        )}

                        {!isBusinessMode && (
                            <div className="relative group">
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === 'business' ? null : 'business')}
                                    className={`flex items-center gap-1.5 text-[15px] font-semibold transition-all hover:text-zlendo-teal ${activeDropdown === 'business' ? 'text-zlendo-teal' : 'text-[#333333]'}`}
                                >
                                    Grow with Zlendo <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'business' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeDropdown === 'business' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-0 mt-4 w-[340px] bg-white rounded-[32px] shadow-2xl border border-black/[0.03] p-6 flex flex-col gap-2"
                                        >
                                            {businessMenuLinks.map((item) => (
                                                <Link
                                                    key={item.label}
                                                    href={item.path}
                                                    prefetch={true}
                                                    onClick={toggleMode}
                                                    className="flex gap-4 p-4 rounded-2xl hover:bg-zlendo-teal/5 transition-all group/item"
                                                >
                                                    <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                                        <item.icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[16px] font-bold text-zlendo-grey-dark">{item.label}</h4>
                                                        <p className="text-[10px] text-zlendo-grey-medium font-semibold opacity-60">{item.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}

                    </div>
                </div>

                <div className="flex items-center gap-6">
                    {/* Business/Individual Toggle */}
                    {isBusinessMode ? (
                        <Link href={getPath('/')}
                            prefetch={true}
                            onClick={toggleMode}
                            className="hidden md:flex items-center gap-2 group text-xs font-black uppercase tracking-widest text-zlendo-teal bg-zlendo-teal/5 px-6 py-3 rounded-full hover:bg-zlendo-teal hover:text-white transition-all duration-300"
                        >
                            <User className="w-3.5 h-3.5" /> For Individuals
                        </Link>
                    ) : (
                        <Link href={getPath('/business')}
                            prefetch={true}
                            onClick={toggleMode}
                            className="hidden md:flex items-center gap-2 group text-xs font-black uppercase tracking-widest text-zlendo-grey-dark hover:text-zlendo-teal transition-all"
                        >
                            <Briefcase className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" /> Business <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                    )}

                    <div className="h-8 w-px bg-black/[0.05] hidden md:block" />

                    {/* Login and Start for free buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {isAuthenticated && user ? (
                            <div className="relative group/user">
                                <button
                                    className="flex items-center gap-3 px-4 py-2 rounded-full border border-black/[0.05] hover:bg-black/[0.02] transition-all"
                                    onClick={() => setActiveDropdown(activeDropdown === 'user-profile' ? null : 'user-profile')}
                                >
                                    <div className="w-8 h-8 rounded-full bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal overflow-hidden">
                                        {user.profileUrl ? (
                                            <img
                                                src={getImageUrl(user.profileUrl)}
                                                alt={user.userName}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.currentTarget;
                                                    const currentUrl = target.src;

                                                    if (currentUrl.startsWith('blob:') && user.profileUrl) {
                                                        const directUrl = user.profileUrl.startsWith('http')
                                                            ? user.profileUrl
                                                            : `${BLOB_BASE_URL}${user.profileUrl}${user.profileUrl.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;

                                                        if (target.src !== directUrl) {
                                                            console.log(`[Header] Falling back to direct URL for desktop profile image`);
                                                            target.src = directUrl;
                                                            return;
                                                        }
                                                    }
                                                }}
                                            />
                                        ) : (
                                            <User className="w-4 h-4" />
                                        )}
                                    </div>
                                    <span className="text-[15px] font-semibold text-zlendo-grey-dark">{user.userName}</span>
                                    <ChevronDown className="w-4 h-4 text-zlendo-grey-medium opacity-40" />
                                </button>

                                <AnimatePresence>
                                    {activeDropdown === 'user-profile' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full right-0 mt-4 w-[240px] bg-white rounded-3xl shadow-2xl border border-black/[0.03] p-4 flex flex-col gap-1"
                                        >
                                            <div className="px-4 py-3 border-b border-black/[0.03] mb-2">
                                                <p className="text-[14px] font-bold text-zlendo-grey-dark truncate">{user.userName}</p>
                                                <p className="text-[11px] text-zlendo-grey-medium opacity-60 truncate">{user.emailId}</p>
                                            </div>
                                            <a
                                                href={LOGIN_URL}
                                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zlendo-teal/5 text-[14px] font-semibold text-zlendo-grey-dark transition-all"
                                            >
                                                <Layout className="w-4 h-4 text-zlendo-teal" /> Dashboard
                                            </a>
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-[14px] font-semibold text-red-500 transition-all text-left"
                                            >
                                                <X className="w-4 h-4" /> Logout
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <>
                                <a
                                    href={LOGIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[16px] font-semibold text-[#333333] hover:text-zlendo-teal transition-all px-4"
                                >
                                    Login
                                </a>
                                <a
                                    href={SIGNUP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 rounded-full font-bold text-white bg-[#22a3a1] shadow-lg shadow-[#22a3a1]/20 hover:scale-105 transition-all active:scale-95"
                                >
                                    Start For Free
                                </a>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden w-12 h-12 rounded-2xl bg-black/[0.03] flex items-center justify-center text-zlendo-grey-dark"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-black/5 bg-white shadow-2xl overflow-hidden"
                    >
                        <div className="p-6 space-y-6 h-full overflow-y-auto">
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zlendo-grey-medium/40">Menu</h4>

                                {/* Products Mobile Dropdown */}
                                <div>
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                                        className="flex items-center justify-between w-full text-lg font-bold font-nunito text-zlendo-grey-dark mb-3"
                                    >
                                        Products
                                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeDropdown === 'products' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden space-y-4 pl-4 border-l-2 border-zlendo-teal/10"
                                            >
                                                {productLinks.map(link => (
                                                    <Link
                                                        key={link.label}
                                                        href={link.path}
                                                        prefetch={true}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block text-base font-medium text-zlendo-grey-medium hover:text-zlendo-teal"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Use Cases Mobile Dropdown */}
                                <div>
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === 'use-cases' ? null : 'use-cases')}
                                        className="flex items-center justify-between w-full text-lg font-bold font-nunito text-zlendo-grey-dark mb-3"
                                    >
                                        Use Cases
                                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'use-cases' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeDropdown === 'use-cases' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden space-y-4 pl-4 border-l-2 border-zlendo-teal/10"
                                            >
                                                {(isBusinessMode ? businessUseCases : individualUseCases).map(link => (
                                                    <Link
                                                        key={link.label}
                                                        href={link.path}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block text-base font-medium text-zlendo-grey-medium hover:text-zlendo-teal"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Resources Mobile Dropdown */}
                                <div>
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                                        className="flex items-center justify-between w-full text-lg font-bold font-nunito text-zlendo-grey-dark mb-3"
                                    >
                                        Resources
                                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeDropdown === 'resources' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden space-y-4 pl-4 border-l-2 border-zlendo-teal/10"
                                            >
                                                {resourceLinks.map(link => {
                                                    const isExternal = link.path.startsWith('http');
                                                    const shouldOpenInNewTab = link.openInNewTab !== undefined ? link.openInNewTab : isExternal;
                                                    if (isExternal) {
                                                        return (
                                                            <a
                                                                key={link.label}
                                                                href={link.path}
                                                                target={shouldOpenInNewTab ? "_blank" : undefined}
                                                                rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="block text-base font-medium text-zlendo-grey-medium hover:text-zlendo-teal"
                                                            >
                                                                {link.label}
                                                            </a>
                                                        );
                                                    }
                                                    return (
                                                        <Link
                                                            key={link.label}
                                                            href={link.path}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block text-base font-medium text-zlendo-grey-medium hover:text-zlendo-teal"
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Mobile Plans & Business (Only Individuals) */}
                                {!isBusinessMode && (
                                    <>
                                        <Link href={getPath('/plans')}
                                            className="block text-lg font-bold font-nunito text-zlendo-grey-dark mb-3"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Plans
                                        </Link>

                                        <div>
                                            <button
                                                onClick={() => setActiveDropdown(activeDropdown === 'business' ? null : 'business')}
                                                className="flex items-center justify-between w-full text-lg font-bold font-nunito text-zlendo-grey-dark mb-3"
                                            >
                                                Grow with Zlendo
                                                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'business' ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === 'business' && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden space-y-4 pl-4 border-l-2 border-zlendo-teal/10"
                                                    >
                                                        {businessMenuLinks.map(link => (
                                                            <Link
                                                                key={link.label}
                                                                href={link.path}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="block text-base font-medium text-zlendo-grey-medium hover:text-zlendo-teal"
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </>
                                )}

                                <div className="h-px bg-black/5 my-6" />

                                <Link href={getPath('/')} className="block text-base font-bold text-zlendo-grey-dark" onClick={() => setIsMobileMenuOpen(false)}>For Individuals</Link>
                                <Link href={getPath('/business')} className="block text-base font-bold text-zlendo-grey-dark" onClick={() => setIsMobileMenuOpen(false)}>For Business</Link>
                            </div>

                            <div className="pt-6 pb-12 space-y-4">
                                {isAuthenticated && user ? (
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/[0.02]">
                                            <div className="w-12 h-12 rounded-full bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal overflow-hidden">
                                                {user.profileUrl ? (
                                                    <img
                                                        src={getImageUrl(user.profileUrl)}
                                                        alt={user.userName}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            const target = e.currentTarget;
                                                            const currentUrl = target.src;

                                                            if (currentUrl.startsWith('blob:') && user.profileUrl) {
                                                                const directUrl = user.profileUrl.startsWith('http')
                                                                    ? user.profileUrl
                                                                    : `${BLOB_BASE_URL}${user.profileUrl}${user.profileUrl.includes('?') ? '&' : '?'}${BLOB_SAS_TOKEN}`;

                                                                if (target.src !== directUrl) {
                                                                    console.log(`[Header] Falling back to direct URL for mobile profile image`);
                                                                    target.src = directUrl;
                                                                    return;
                                                                }
                                                            }
                                                        }}
                                                    />
                                                ) : (
                                                    <User className="w-6 h-6" />
                                                )}
                                            </div>
                                            <div>
                                                <p className="text-base font-bold text-zlendo-grey-dark">{user.userName}</p>
                                                <p className="text-xs text-zlendo-grey-medium">{user.emailId}</p>
                                            </div>
                                        </div>
                                        <a
                                            href={LOGIN_URL}
                                            className="block text-center bg-zlendo-teal text-white w-full text-base py-3 rounded-xl shadow-xl shadow-zlendo-teal/20"
                                        >
                                            Go to Dashboard
                                        </a>
                                        <button
                                            onClick={handleLogout}
                                            className="block text-center bg-white border border-red-100 text-red-500 w-full text-base py-3 rounded-xl"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <a
                                            href={LOGIN_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-center bg-white border border-black/10 text-zlendo-grey-dark w-full text-base py-3 rounded-xl"
                                        >
                                            Login
                                        </a>
                                        <a
                                            href={SIGNUP_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-center bg-zlendo-teal text-white w-full text-base py-3 rounded-xl shadow-xl shadow-zlendo-teal/20"
                                        >
                                            Sign Up
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;

