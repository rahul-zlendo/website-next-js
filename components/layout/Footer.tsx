import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Youtube, Pin, X, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../common/Logo';
import { designLibrary } from '@/lib/config/env';
import FooterClient from './FooterClient';
import CountrySwitcher from '../common/CountrySwitcher';



const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/showcase/zlendo-realty/?viewAsMember=true', bg: 'hover:bg-[#0A66C2]' },
    { icon: Facebook, href: 'https://www.facebook.com/people/Zlendo-Realty/61585610645980/', bg: 'hover:bg-[#1877F2]' },
    { icon: Instagram, href: 'https://www.instagram.com/zlendorealty/', bg: 'hover:bg-[#E4405F]' },
    { icon: X, href: 'https://x.com/ZlendoRealty', bg: 'hover:bg-black' },
    { icon: Pin, href: 'https://in.pinterest.com/ZlendoRealty/', bg: 'hover:bg-[#E60023]' },
    { icon: Youtube, href: 'https://www.youtube.com/@ZlendoRealty', bg: 'hover:bg-[#FF0000]' },
];

const resolveSocialLinks = (cmsSocial: any) => {
    if (!cmsSocial) return socialLinks;

    const resolved: typeof socialLinks = [];
    if (cmsSocial.linkedin) resolved.push({ icon: Linkedin, href: cmsSocial.linkedin, bg: 'hover:bg-[#0A66C2]' });
    if (cmsSocial.facebook) resolved.push({ icon: Facebook, href: cmsSocial.facebook, bg: 'hover:bg-[#1877F2]' });
    if (cmsSocial.instagram) resolved.push({ icon: Instagram, href: cmsSocial.instagram, bg: 'hover:bg-[#E4405F]' });
    if (cmsSocial.twitter) resolved.push({ icon: X, href: cmsSocial.twitter, bg: 'hover:bg-black' });
    if (cmsSocial.pinterest) resolved.push({ icon: Pin, href: cmsSocial.pinterest, bg: 'hover:bg-[#E60023]' });
    if (cmsSocial.youtube) resolved.push({ icon: Youtube, href: cmsSocial.youtube, bg: 'hover:bg-[#FF0000]' });

    return resolved.length > 0 ? resolved : socialLinks;
};

const Footer = ({
    hideCTA = false,
    settings,
    isGlobal = false
}: {
    hideCTA?: boolean;
    settings?: any;
    isGlobal?: boolean;
}) => {
    // Dynamic logic based on Global/India
    const getPath = (path: string): string => {
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        if (cleanPath === '/') return isGlobal ? '/' : '/in';
        return isGlobal ? cleanPath : `/in${cleanPath}`;
    };

    const isIndiaSite = !isGlobal;

    const productLinks = [
        { label: 'AI Floor Planner', path: getPath('/products/floor-planner') },
        { label: '2D to 3D Converter', path: getPath('/products/2d-to-3d') },
        { label: 'Smart Room Styler', path: getPath('/products/room-styler') },
        { label: 'Interiors & Exteriors', path: getPath('/products/interiors-exteriors') },
        ...(isIndiaSite ? [
            { label: 'Smart Cost Estimator', path: getPath('/products/cost-estimator') },
            { label: 'Vastu Optimizer', path: getPath('/products/vastu') }
        ] : []),
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
        { label: 'Blog', path: 'https://blog.zlendorealty.com', external: true, newTab: false },
        { label: 'Tutorials', path: getPath('/tutorials') },
        { label: 'Help Center', path: "https://helpcenter.zlendorealty.com/", external: true, newTab: false },
        { label: 'News', path: "https://news.zlendorealty.com/", external: true, newTab: false },
        ...(isIndiaSite ? [{ label: 'Partnership', path: getPath('/partners') }] : []),
        { label: 'Contact Us', path: getPath('/contact') },
        { label: 'About Us', path: getPath('/about-us') },
    ];

    const businessMenuLinks = [
        { label: 'Business Free Trial', path: getPath('/business') + '#demo-form' },
        { label: 'Affiliate & Partner Program', path: getPath('/partners') },
        { label: 'Zlendo Realty API Suite', path: getPath('/products/api-suite') },
    ];

    // Dynamic social links from Sanity or fallback
    const cmsSocial = settings?.socialLinks;
    const resolvedSocialLinks = resolveSocialLinks(cmsSocial);

    return (
        <FooterClient hideCTA={hideCTA}>
            <div className="container-custom px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-5">
                    {/* Brand Section */}
                    <div className="lg:w-1/4 space-y-6">
                        <Logo className="h-14" />
                        <p className="text-[15px] text-zlendo-grey-medium font-medium leading-relaxed opacity-80">
                            {settings?.footerDescription ?? "The world's first Design-to-Sales engine. Experience your space in 360° ultra-realistic 8K, AR/MR."}
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {resolvedSocialLinks.map((social, i) => (
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

                        {/* VAPT Certification — no background, just divider + content */}
                        <div className="pt-1 border-t border-black/10">
                            <div className="flex flex-col items-center gap-0 text-center">
                                <img
                                    src="/assets/global/einshield-badge.svg"
                                    alt="EINShield VAPT Secured"
                                    width={150}
                                    height={150}
                                    className="object-contain"
                                />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.1em] text-emerald-600 mb-0.5">
                                        VAPT Secured
                                    </p>
                                    {/* <p className="text-[13px] font-bold text-zlendo-grey-dark leading-snug">
                                        Secure Your Account
                                    </p> */}
                                    {/* <p className="text-[11px] font-medium text-gray-400">
                                        Enterprise-Grade Protection
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Products */}
                    <div className="lg:w-[14%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">
                            {isIndiaSite ? 'Products' : 'Solutions'}
                        </h4>
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

                    {/* Service */}
                    <div className="lg:w-[14%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">Services</h4>
                        <ul className="space-y-3.5 text-[15px]">
                            <li><Link href={getPath('/services/floor-plan-design')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Floor Plan Design</Link></li>
                            <li><Link href={getPath('/services/2d-to-3d')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">2D to 3D Services</Link></li>
                            <li><Link href={getPath('/services/interior-design')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Interior Design Services</Link></li>
                            <li><Link href={getPath('/services/virtual-walkthrough')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Virtual Walkthrough</Link></li>
                            {isIndiaSite && <li><Link href={getPath('/services/vastu-consultation')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Vastu Consultation Services</Link></li>}

                        </ul>
                    </div>

                    {/* Use Cases / Enterprise */}
                    <div className="lg:w-[14%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">
                            {isIndiaSite ? 'Use Cases' : 'Enterprise'}
                        </h4>
                        <ul className="space-y-3.5 text-[15px]">
                            {(isIndiaSite ? useCaseLinks : businessMenuLinks).map((link, i) => (
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
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">Legal & Policies</h4>
                        <ul className="space-y-3.5 text-[15px]">
                            {/* <li><Link href={getPath('/privacy-policy')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Privacy Policy</Link></li>
                            <li><Link href={getPath('/terms-of-service')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Terms of Service</Link></li>
                            <li><Link href={getPath('/cookie-policy')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Cookie Policy</Link></li> */}
                            <li><Link href={getPath('/general-terms')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">General Terms</Link></li>
                            <li><Link href={getPath('/community-guidelines')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Community Guidelines</Link></li>
                            <li><Link href={getPath('/nda-vendors')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">NDA For Vendors</Link></li>
                            <li><Link href={getPath('/refund-policy')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Refund & Cancellation Policy</Link></li>
                            <li><Link href={getPath('/sla')} className="text-[#666666] hover:text-zlendo-teal transition-colors whitespace-nowrap">Service Level Agreement</Link></li>
                        </ul>

                        {/* <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-5 mt-7">Contact Our Team</h4>
                        <ul className="space-y-4 text-[15px]">
                            <li>
                                <span dangerouslySetInnerHTML={{ __html: '<!--email_off-->' }} />
                                <a href={`mailto:${settings?.footerEmail ?? "support@zlendorealty.com"}`} className="flex items-center gap-2.5 group whitespace-nowrap">
                                    <div className="w-7 h-7 rounded-lg bg-zlendo-teal/5 flex items-center justify-center text-zlendo-teal shrink-0 group-hover:bg-zlendo-teal group-hover:text-white transition-all">
                                        <Mail className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-[15px] text-[#666666] font-medium group-hover:text-zlendo-teal transition-colors">
                                        support@zlendorealty.com
                                    </span>
                                </a>
                                <span dangerouslySetInnerHTML={{ __html: '<!--/email_off-->' }} />
                            </li>
                            {isIndiaSite && (
                                <li>
                                    <a href="tel:+918047135989" className="flex items-center gap-2.5 group whitespace-nowrap">
                                        <div className="w-7 h-7 rounded-lg bg-zlendo-teal/5 flex items-center justify-center text-zlendo-teal shrink-0 group-hover:bg-zlendo-teal group-hover:text-white transition-all">
                                            <Phone className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-[15px] text-[#666666] font-bold group-hover:text-zlendo-teal transition-colors">
                                            +91 8047135989
                                        </span>
                                    </a>
                                </li>
                            )}
                        </ul> */}
                    </div>

                    {/* Contact */}
                    {/* <div className="lg:w-[20%]">
                        <h4 className="text-[18px] font-semibold text-zlendo-grey-dark mb-7">Contact Us</h4>
                        <ul className="space-y-4 text-[15px]">
                            <li>
                                <span dangerouslySetInnerHTML={{ __html: '<!--email_off-->' }} />
                                <a href={`mailto:${settings?.footerEmail ?? "support@zlendorealty.com"}`} className="flex items-center gap-2.5 group whitespace-nowrap">
                                    <div className="w-7 h-7 rounded-lg bg-zlendo-teal/5 flex items-center justify-center text-zlendo-teal shrink-0 group-hover:bg-zlendo-teal group-hover:text-white transition-all">
                                        <Mail className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-[15px] text-[#666666] font-medium group-hover:text-zlendo-teal transition-colors">
                                        support@zlendorealty.com
                                    </span>
                                </a>
                                <span dangerouslySetInnerHTML={{ __html: '<!--/email_off-->' }} />
                            </li>
                            {isIndiaSite && (
                                <li>
                                    <a href="tel:+918047135989" className="flex items-center gap-2.5 group whitespace-nowrap">
                                        <div className="w-7 h-7 rounded-lg bg-zlendo-teal/5 flex items-center justify-center text-zlendo-teal shrink-0 group-hover:bg-zlendo-teal group-hover:text-white transition-all">
                                            <Phone className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-[15px] text-[#666666] font-bold group-hover:text-zlendo-teal transition-colors">
                                            +91 8047135989
                                        </span>
                                    </a>
                                </li>
                            )}
                            <li className="pt-4 mt-2 border-t border-black/[0.03]">
                                <div className="flex items-start gap-2.5">
                                    <div className="w-7 h-7 rounded-lg bg-zlendo-teal/5 flex items-center justify-center text-zlendo-teal shrink-0">
                                        <MapPin className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-zlendo-grey-medium opacity-40 mb-1">Headquarters</div>
                                        <p className="text-[13px] text-[#666666] font-medium leading-relaxed whitespace-pre-line">
                                            {settings?.footerAddress ?? '36/1, Ganapathy Street,\nAlagappan Nagar, Madurai – 625003\nTamil Nadu, India'}
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
                                            {settings?.footerCities ?? 'Pune • Bengaluru • Delhi • Hyderabad'}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-black/[0.05] flex flex-col md:flex-row items-center justify-between gap-8 text-[#666666] text-[13px] font-medium">
                    <p>{settings?.copyrightText ?? 'Copyright © 2026 Zlendo Technologies Pvt. Ltd. | All Rights Reserved.'}</p>
                    <div className="flex items-center gap-8">
                        <Link href={getPath('/cookie-policy')} className="hover:text-zlendo-teal transition-colors">Cookie Policy</Link>
                        <Link href={getPath('/terms-of-service')} className="hover:text-zlendo-teal transition-colors">Terms of Service</Link>
                        <Link href={getPath('/privacy-policy')} className="hover:text-zlendo-teal transition-colors">Privacy Policy</Link>

                        {/* <CountrySwitcher /> */}
                        <div className="h-4 w-px pl-4 hidden md:block" />
                    </div>
                </div>
            </div>
        </FooterClient>
    );
};

export default Footer;
