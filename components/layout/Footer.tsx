import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Youtube, Pin, X, Mail, MapPin } from 'lucide-react';
import Logo from '../common/Logo';
import { designLibrary } from '@/lib/config/env';
import FooterClient from './FooterClient';
import CountrySwitcher from '../common/CountrySwitcher';

const COUNTRY = 'in';
function getPath(path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (cleanPath === '/') return `/${COUNTRY}`;
    return `/${COUNTRY}${cleanPath}`;
}

const productLinks = [
    { label: 'AI Floor Planner', path: getPath('/products/floor-planner') },
    { label: '2D to 3D Converter', path: getPath('/products/2d-to-3d') },
    { label: 'Smart Room Styler', path: getPath('/products/room-styler') },
    { label: 'Interiors & Exteriors', path: getPath('/products/interiors-exteriors') },
    { label: 'Smart Cost Estimator', path: getPath('/products/cost-estimator') },
    { label: 'Vastu Optimizer', path: getPath('/products/vastu') },
    { label: 'Realistic Renders', path: getPath('/products/realistic-renders') },
    { label: 'Virtual Walkthrough', path: getPath('/products/virtual-walkthrough') },
];

const useCaseLinks = [
    { label: 'Home Remodeling', path: getPath('/use-case/home-remodeling') },
    { label: 'Interior Design', path: getPath('/use-case/interior-design') },
    { label: 'Vastu Optimization', path: getPath('/use-case/vastu-optimization') },
    { label: 'New Home Building', path: getPath('/use-case/new-home-building') },
    { label: 'Commercial Spaces', path: getPath('/business/commercial-spaces') },
    { label: 'Builder & Promoter', path: getPath('/business/builder-and-promoter') },
    { label: 'NRI & Remote Planning', path: getPath('/business/nri-remote-planning') },
    { label: 'Developer Solutions', path: getPath('/business/developer-solutions') },
    { label: 'Zlendo Realty API Suite', path: getPath('/products/api-suite') }
];

const resourceLinks = [
    { label: 'Design Library', path: designLibrary, external: true, newTab: true },
    { label: 'Pre-built Templates', path: getPath('/viewalltemplates') },
    { label: 'Blog', path: 'https://zlendorealty.com/blog', external: true, newTab: false },
    { label: 'Tutorials', path: getPath('/tutorials') },
    { label: 'Help Center', path: "https://helpcenter.zlendorealty.com/" , external: true, newTab: false },
    { label: 'Partnership', path: getPath('/partners') },
    { label: 'Contact Us', path: getPath('/contact') },
];

const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/showcase/zlendo-realty/?viewAsMember=true', bg: 'hover:bg-[#0A66C2]' },
    { icon: Facebook, href: 'https://www.facebook.com/people/Zlendo-Realty/61585610645980/', bg: 'hover:bg-[#1877F2]' },
    { icon: Instagram, href: 'https://www.instagram.com/zlendorealty/', bg: 'hover:bg-[#E4405F]' },
    { icon: X, href: 'https://x.com/ZlendoRealty', bg: 'hover:bg-black' },
    { icon: Pin, href: 'https://in.pinterest.com/ZlendoRealty/', bg: 'hover:bg-[#E60023]' },
    { icon: Youtube, href: 'https://www.youtube.com/@ZlendoRealty', bg: 'hover:bg-[#FF0000]' },
];

const Footer = ({ hideCTA = false }: { hideCTA?: boolean }) => {
    return (
        <FooterClient hideCTA={hideCTA}>
            <div className="container-custom px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-20">
                    {/* Brand Section */}
                    <div className="lg:w-1/4 space-y-6">
                        <Logo className="h-14" />
                        <p className="text-[15px] text-zlendo-grey-medium font-medium leading-relaxed opacity-80">
                            The world&apos;s first Design-to-Sales engine. Experience your space in 360° ultra-realistic 8K, AR/MR.
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

                    {/* Products */}
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

                    {/* Use Cases */}
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

                    {/* Resources */}
                    <div className="lg:w-[14%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">Resources</h4>
                        <ul className="space-y-3.5 text-[15px]">
                            {resourceLinks.map((link, i) => (
                                <li key={i}>
                                    {link.external ? (
                                        <a
                                            href={link.path}
                                            target={link.newTab ? "_blank" : undefined}
                                            rel={link.newTab ? "noopener noreferrer" : undefined}
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
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:w-[14%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">Legal</h4>
                        <ul className="space-y-3.5 text-[15px]">
                            <li><Link href={getPath('/privacy-policy')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Privacy Policy</Link></li>
                            <li><Link href={getPath('/terms-of-service')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Terms of Service</Link></li>
                            <li><Link href={getPath('/cookie-policy')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Cookie Policy</Link></li>
                            <li><Link href={getPath('/refund-policy')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Refund Policy</Link></li>
                            <li><Link href={getPath('/sla')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">SLA</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:w-[20%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">Contact Us</h4>
                        <ul className="space-y-4 text-[15px]">
                            <li>
                                <a href="mailto:contact@zlendorealty.com" className="flex items-center gap-2.5 group whitespace-nowrap">
                                    <div className="w-7 h-7 rounded-lg bg-zlendo-teal/5 flex items-center justify-center text-zlendo-teal shrink-0 group-hover:bg-zlendo-teal group-hover:text-white transition-all">
                                        <Mail className="w-3.5 h-3.5" />
                                    </div>
                                    <span dangerouslySetInnerHTML={{ __html: '<!--email_off-->' }} />
                                    <span className="text-[15px] text-[#666666] font-medium group-hover:text-zlendo-teal transition-colors">
                                        contact@zlendorealty.com
                                    </span>
                                    <span dangerouslySetInnerHTML={{ __html: '<!--/email_off-->' }} />
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
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-black/[0.05] flex flex-col md:flex-row items-center justify-between gap-8 text-[#666666] text-[13px] font-medium">
                    <p>Copyright © 2026 Zlendo Technologies Pvt. Ltd. | All Rights Reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link href={getPath('/cookie-policy')} className="hover:text-zlendo-teal transition-colors">Cookie Policy</Link>
                        <Link href={getPath('/terms-of-service')} className="hover:text-zlendo-teal transition-colors">Terms &amp; Conditions</Link>
                        <Link href={getPath('/privacy-policy')} className="hover:text-zlendo-teal transition-colors">Privacy Policy</Link>
                        
                        <CountrySwitcher />
                        <div className="h-4 w-px bg-black/[0.05] hidden md:block" />
                    </div>
                </div>
            </div>
        </FooterClient>
    );
};

export default Footer;
