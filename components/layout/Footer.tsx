'use client';

import { Instagram, Linkedin, Facebook, Youtube, Pin, X, ArrowRight, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Logo from '../common/Logo';
import { motion } from 'framer-motion';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { designLibrary } from '@/lib/config/env';
import { useCountry } from '@/lib/context/CountryContext';
import CountrySwitcher from '../common/CountrySwitcher';

const Footer = () => {
    const { getPath } = useCountry();
    const productLinks = [
        { label: 'AI Floor Planner', path: getPath('/products/floor-planner') },
        { label: '2D to 3D Converter', path: getPath('/products/2d-to-3d') },
        { label: 'Smart Room Styler', path: getPath('/products/room-styler') },
        { label: 'Interiors & Exteriors', path: getPath('/products/interiors-exteriors') },
        { label: 'Smart Cost Estimator', path: getPath('/products/cost-estimator') },
        { label: 'Vastu Optimizer', path: getPath('/products/vastu') },
        { label: 'Realistic Renders', path: getPath('/products/realistic-renders') },
        // { label: 'Zlendo API Suite', path: getPath('/products/api-suite') },
        { label: 'Virtual Walkthrough', path: getPath('/products/virtual-walkthrough') },
    ];

    const useCaseLinks = [
        { label: 'Home Remodeling', path: getPath('/use-case/home-remodeling') },
        { label: 'Interior Design', path: getPath('/use-case/interior-design') },
        { label: 'Vastu Optimization', path: getPath('/use-case/vastu-optimization') },
        { label: 'New Home Building', path: getPath('/use-case/new-home-building') },
        { label: 'Commercial Spaces', path: getPath('/business/commercial-spaces') },
        { label: 'Real Estate Brokers', path: getPath('/business/real-estate-brokers') },
        { label: 'NRI & Remote Planning', path: getPath('/business/nri-remote-planning') },
        { label: 'Developer Solutions', path: getPath('/business/developer-solutions') },
        { label: 'Zlendo API Suite', path: getPath('/products/api-suite') }
    ];

    const resourceLinks = [
        { label: 'Design Library', path: designLibrary, openInNewTab: true },
        { label: 'Pre-built Templates', path: getPath('/viewalltemplates') },
        { label: 'Blog', path: '/blog', openInNewTab: false },
        { label: 'Tutorials', path: 'https://www.youtube.com/playlist?list=PLetnELr5c_JVwUtuFKM9wGjGKrKPrGmsa', openInNewTab: true },
        { label: 'Help Center', path: getPath('/help-center') },
        { label: 'Grow with Zlendo', path: getPath('/partners') },
        { label: 'Contact Us', path: getPath('/contact') },
    ];

    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/showcase/zlendo-realty/?viewAsMember=true', bg: 'hover:bg-[#0A66C2]' },
        { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61585610645980', bg: 'hover:bg-[#1877F2]' },
        { icon: Instagram, href: 'https://www.instagram.com/zlendorealty/', bg: 'hover:bg-[#E4405F]' },
        { icon: X, href: 'https://x.com/ZlendoRealty', bg: 'hover:bg-black' },
        { icon: Pin, href: 'https://in.pinterest.com/ZlendoRealty/', bg: 'hover:bg-[#E60023]' },
        { icon: Youtube, href: 'https://www.youtube.com/@ZlendoRealty', bg: 'hover:bg-[#FF0000]' },
    ];

    return (
        <footer className="bg-[#f9fafb] pt-4 md:pt-24 pb-12 border-t border-black/[0.03] relative overflow-hidden font-nunito">
            {/* CTA Section */}
            <div className="container-custom px-6 lg:px-12 mb-8 md:mb-20 text-[15px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[40px] p-4 md:p-12 shadow-xl shadow-black/[0.02] border border-black/[0.03] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-zlendo-teal/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-[28px] md:text-[34px] font-black text-zlendo-grey-dark mb-4">Create your account today</h3>
                        <p className="text-[18px] text-zlendo-grey-medium font-bold opacity-60">Experience the future of AI home design for free.</p>
                    </div>
                    <a
                        href={SIGNUP_URL}
                        className="relative z-10 px-10 py-5 bg-zlendo-teal text-white rounded-full font-black text-xl shadow-2xl shadow-zlendo-teal/30 hover:scale-105 transition-all flex items-center gap-3 active:scale-95"
                    >
                        Get Started <ArrowRight className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>

            <div className="container-custom px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-20"
                >
                    {/* Brand Section */}
                    <div className="lg:w-1/4 space-y-6">
                        <Logo className="h-14" />
                        <p className="text-[15px] text-zlendo-grey-medium font-medium leading-relaxed opacity-80">
                            The world's first Design-to-Sales engine. Experience your space in 360° ultra-realistic 8K, AR/MR.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-black/[0.08] transition-all duration-300 ${social.bg} hover:text-white hover:-translate-y-1 hover:shadow-lg`}
                                >
                                    <social.icon className="w-5 h-5" strokeWidth={2.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Menus in Single Line */}
                    <div className="lg:w-[14%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">Products</h4>
                        <ul className="space-y-3.5 text-[15px]">
                            {productLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.path} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-[14%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">Use Cases</h4>
                        <ul className="space-y-3.5 text-[15px]">
                            {useCaseLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.path} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-[14%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">Resources</h4>
                        <ul className="space-y-3.5 text-[15px]">
                            {resourceLinks.map((link, i) => {
                                const isExternal = link.path.startsWith('http');
                                const shouldOpenInNewTab = link.openInNewTab !== undefined ? link.openInNewTab : isExternal;
                                return (
                                    <li key={i}>
                                        {isExternal ? (
                                            <a
                                                href={link.path}
                                                target={shouldOpenInNewTab ? "_blank" : undefined}
                                                rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                                                className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link href={link.path} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="lg:w-[14%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">Legal</h4>
                        <ul className="space-y-3.5 text-[15px]">
                            <li>
                                <Link href={getPath('/privacy-policy')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={getPath('/terms-of-service')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href={getPath('/cookie-policy')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={getPath('/refund-policy')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">
                                    Refund Policy
                                </Link>
                            </li>
                            {/* <li>
                                <Link href={getPath('/dpa')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">
                                    DPA
                                </Link>
                            </li> */}
                            <li>
                                <Link href={getPath('/sla')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">
                                    SLA
                                </Link>
                            </li>
                            {/* <li>
                                <Link href={getPath('/community-guidelines')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">
                                    Community Guidelines
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    <div className="lg:w-[20%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">Contact Us</h4>
                        <ul className="space-y-4 text-[15px]">
                            <li>
                                <a href="mailto:contact@zlendorealty.com" className="flex items-center gap-2.5 group whitespace-nowrap">
                                    <div className="w-7 h-7 rounded-lg bg-zlendo-teal/5 flex items-center justify-center text-zlendo-teal shrink-0 group-hover:bg-zlendo-teal group-hover:text-white transition-all">
                                        <Mail className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-[14px] text-[#666666] font-medium group-hover:text-zlendo-teal transition-colors">
                                        contact@zlendorealty.com
                                    </span>
                                </a>
                            </li>
                            <li className="pt-4 mt-2 border-t border-black/[0.03]">
                                <div className="flex items-start gap-2.5">
                                    <div className="w-7 h-7 rounded-lg bg-zlendo-teal/5 flex items-center justify-center text-zlendo-teal shrink-0">
                                        <MapPin className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-zlendo-grey-medium opacity-40 mb-1">Headquarters</div>
                                        <p className="text-[13px] text-[#666666] font-medium leading-relaxed">
                                            36/1, Ganapathy Street,<br />
                                            Alagappan Nagar, Madurai – 625003<br />
                                            Tamil Nadu, India
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="pt-2">
                                <div className="flex items-start gap-2.5">
                                    <div className="w-7 h-7 rounded-lg bg-zlendo-teal/5 flex items-center justify-center text-zlendo-teal shrink-0">
                                        <MapPin className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-zlendo-grey-medium opacity-40 mb-1">Other Cities</div>
                                        <p className="text-[13px] text-[#666666] font-medium leading-snug">
                                            Pune • Bengaluru • Delhi • Hyderabad
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-black/[0.05] flex flex-col md:flex-row items-center justify-between gap-8 text-[#666666] text-[13px] font-medium">
                    <p>Copyright © 2026 Zlendo Technologies Pvt. Ltd. | All Rights Reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link href={getPath('/cookie-policy')} className="hover:text-zlendo-teal transition-colors">Cookie Policy</Link>
                        <Link href={getPath('/terms-of-service')} className="hover:text-zlendo-teal transition-colors">Terms & Conditions</Link>
                        <Link href={getPath('/privacy-policy')} className="hover:text-zlendo-teal transition-colors">Privacy Policy</Link>
                        <div className="h-4 w-px bg-black/[0.05] hidden md:block" />
                        <CountrySwitcher />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


