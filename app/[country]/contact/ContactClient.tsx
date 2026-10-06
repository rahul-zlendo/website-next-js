'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { createBusinessContact, resetContactForm } from '@/lib/store/slices/contactSlice';
import { getAllLocations } from '@/lib/store/slices/enterpriseSlice';
import {
    Mail, Phone, MapPin, Send, MessageSquare,
    User, Building2, CheckCircle2, ArrowRight,
    Clock, Shield, Star, Zap, ChevronDown
} from 'lucide-react';
import { useCountry } from '@/lib/context/CountryContext';

const IconMap: Record<string, any> = {
    Mail, Phone, MapPin, Send, MessageSquare, User, Building2, CheckCircle2, ArrowRight
};

interface ContactClientProps {
    cms: any;
    resolvedHelpItems: any[];
}

const TRUST_BADGES = [
    { icon: Clock, text: 'Reply within 4 hours' },
    { icon: Shield, text: 'Your data is safe' },
    { icon: Star, text: '4.9★ support rating' },
    { icon: Zap, text: 'No spam, ever' },
];

const ContactClient = ({ cms, resolvedHelpItems }: ContactClientProps) => {
    const dispatch = useAppDispatch();
    const { isSubmitting, isSubmitted } = useAppSelector((state) => state.contact);
    const { locations: countries, isLoadingLocations } = useAppSelector((state) => state.enterprise);
    const { country } = useCountry();
    const isIndiaSite = country === 'in';

    const sortedCountries = useMemo(() => {
        if (!countries) return [];
        return [...countries].sort((a, b) =>
            (a.location_Name || '').localeCompare(b.location_Name || '')
        );
    }, [countries]);

    const [formState, setFormState] = useState({
        name: '', email: '', phone: '', country: 0, userType: 'individual', message: ''
    });
    const [emailError, setEmailError] = useState(false);
    const [focused, setFocused] = useState<string | null>(null);

    useEffect(() => {
        dispatch(resetContactForm());
        dispatch(getAllLocations());
    }, [dispatch]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formState.email)) {
            alert("Please enter a valid email address.");
            return;
        }
        const payload = {
            fullName: formState.name,
            emailAddress: formState.email,
            phoneNumber: formState.phone,
            countryId: formState.country,
            message: `User Type: ${formState.userType} - ${formState.message}`,
            isActive: true,
            createdBy: "ContactPage",
            createdOn: new Date().toISOString(),
            updatedBy: "ContactPage",
            updatedOn: new Date().toISOString(),
            moduleName: "Business Contact Us",
            activity: "Create"
        };
        try {
            await dispatch(createBusinessContact(payload)).unwrap();
        } catch (error: unknown) {
            console.error("Error submitting form:", error);
            alert(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        }
    };

    const inputBase = "w-full px-5 py-5 text-base font-semibold text-zlendo-grey-dark bg-white border-2 rounded-2xl outline-none transition-all duration-200 placeholder:text-gray-300";
    const inputIdle = "border-gray-100 hover:border-gray-200";
    const inputFocused = "border-zlendo-teal ring-4 ring-zlendo-teal/8 bg-white shadow-sm";

    return (
        <div className="bg-[#f8f9fc] font-nunito selection:bg-zlendo-teal/10 min-h-screen">

            {/* ── HERO ── */}
            <section className="relative pt-28 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0faf8] to-white" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zlendo-teal/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-custom px-6 lg:px-12 relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/10 text-zlendo-teal mb-7 border border-zlendo-teal/20"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-zlendo-teal animate-pulse" />
                        <span className="text-[11px] font-black uppercase tracking-[0.25em]">
                            {cms?.heroSubtitle || "We respond within 4 hours · No spam · Real humans"}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-[72px] font-black text-zlendo-grey-dark tracking-[-0.03em] leading-[1.05] mb-6"
                    >
                        {cms?.heroTitlePart1 || "Let's talk about"}<br />
                        <span className="bg-gradient-to-r from-zlendo-teal to-emerald-500 bg-clip-text text-transparent">
                            {cms?.heroTitlePart2 || "your project."}
                        </span>
                        {isIndiaSite && <span className="sr-only"> in India</span>}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-zlendo-grey-medium font-medium leading-relaxed max-w-2xl mx-auto"
                    >
                        {cms?.heroDescription || "Whether you need product guidance, a live demo, or enterprise pricing — our experts are ready to help."}
                    </motion.p>

                    {/* Trust badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-3 mt-10"
                    >
                        {TRUST_BADGES.map((b, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm text-sm font-semibold text-zlendo-grey-medium">
                                <b.icon className="w-3.5 h-3.5 text-zlendo-teal" />
                                {b.text}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── MAIN CONTENT ── */}
            <section className="pb-32 px-6 lg:px-12">
                <div className="container-custom max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* ── LEFT: Info ── */}
                        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
                            <div>
                                <h2 className="text-2xl font-black text-zlendo-grey-dark mb-3">
                                    {cms?.directContactTitle || "Reach us directly"}
                                    {isIndiaSite && <span className="sr-only"> (India)</span>}
                                </h2>
                                <p className="text-base text-zlendo-grey-medium font-medium leading-relaxed opacity-70">
                                    {cms?.directContactSubtitle || "Prefer speaking to someone? Our team is available Mon–Fri, 9am–6pm IST."}
                                </p>
                            </div>

                            {/* Contact cards */}
                            <div className="space-y-3">
                                <span dangerouslySetInnerHTML={{ __html: '<!--email_off-->' }} />
                                <a href={`mailto:${cms?.email || 'support@zlendorealty.com'}`}
                                    className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-zlendo-teal/30 hover:shadow-lg hover:shadow-zlendo-teal/5 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal group-hover:bg-zlendo-teal group-hover:text-white transition-all shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Email us</div>
                                        <div className="text-sm font-black text-zlendo-grey-dark">{cms?.email || 'support@zlendorealty.com'}</div>
                                    </div>
                                </a>
                                <span dangerouslySetInnerHTML={{ __html: '<!--/email_off-->' }} />

                                {isIndiaSite && (
                                    <a href={`tel:${cms?.phone || '+91 8047135989'}`}
                                        className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-zlendo-teal/30 hover:shadow-lg hover:shadow-zlendo-teal/5 transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-zlendo-teal group-hover:text-white transition-all shrink-0">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Call us</div>
                                            <div className="text-sm font-black text-zlendo-grey-dark">{cms?.phone || '+91 8047135989'}</div>
                                        </div>
                                    </a>
                                )}
                            </div>

                            {/* Address */}
                            <div className="p-5 rounded-2xl bg-white border border-gray-100">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal shrink-0 mt-0.5">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-zlendo-teal mb-2">
                                            {cms?.hqTitle || "Headquarters"}
                                        </h4>
                                        <p className="text-sm font-bold text-zlendo-grey-dark leading-relaxed whitespace-pre-line">
                                            {cms?.hqAddress || "36/1, Ganapathy Street,\nAlagappan Nagar, Madurai – 625003\nTamil Nadu, India"}
                                        </p>
                                        <p className="text-xs font-bold text-gray-400 mt-2 italic">
                                            {cms?.regionalPresenceList || "Pune • Bengaluru • Delhi • Hyderabad"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Avg response time */}
                            <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-zlendo-teal/10 to-emerald-500/10 rounded-2xl border border-zlendo-teal/15">
                                <Clock className="w-5 h-5 text-zlendo-teal shrink-0" />
                                <p className="text-sm font-bold text-zlendo-grey-dark">
                                    Average response time: <span className="text-zlendo-teal">under 4 hours</span> on business days.
                                </p>
                            </div>
                        </div>

                        {/* ── RIGHT: Form ── */}
                        <div id="contact-form" className="lg:col-span-8 scroll-mt-24">
                            <div className="relative">
                                {/* Ambient glow */}
                                <div className="absolute -inset-4 bg-zlendo-teal/5 rounded-[48px] blur-2xl pointer-events-none" />

                                <div className="relative bg-white rounded-[40px] p-8 md:p-12 shadow-[0_40px_120px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden">

                                    {/* Success overlay */}
                                    <AnimatePresence>
                                        {isSubmitted && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center text-center p-10 rounded-[40px]"
                                            >
                                                <div className="w-24 h-24 rounded-full bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6">
                                                    <CheckCircle2 className="w-12 h-12" />
                                                </div>
                                                <h3 className="text-4xl font-black text-zlendo-grey-dark mb-3">
                                                    {cms?.formSuccessTitle || "Message received!"}
                                                </h3>
                                                <p className="text-lg text-zlendo-grey-medium font-medium opacity-70 mb-8 max-w-sm">
                                                    {cms?.formSuccessMessage || "A Zlendo Realty expert will reach out to you within 4 business hours."}
                                                </p>
                                                <button
                                                    onClick={() => {
                                                        dispatch(resetContactForm());
                                                        setFormState({ name: '', email: '', phone: '', country: 0, userType: 'individual', message: '' });
                                                    }}
                                                    className="px-8 py-4 bg-zlendo-teal text-white rounded-2xl font-black hover:bg-emerald-500 transition-all"
                                                >
                                                    {cms?.formSuccessButtonLabel || "Send another message"}
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <form onSubmit={handleSubmit} autoComplete="off" className="space-y-7">

                                        {/* Form header */}
                                        <div className="pb-2">
                                            <h3 className="text-3xl font-black text-zlendo-grey-dark tracking-tight mb-2">
                                                {cms?.formTitle || "Tell us about yourself"}
                                            </h3>
                                            <p className="text-base text-zlendo-grey-medium font-medium opacity-60">
                                                Fill in the details below and the right person will reach out — no middleman.
                                            </p>
                                        </div>

                                        {/* I am a... toggle */}
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400 mb-3">I am a...</p>
                                            <div className="flex gap-3">
                                                {[
                                                    { id: 'individual', label: 'Individual', icon: User },
                                                    { id: 'business', label: 'Business', icon: Building2 },
                                                ].map(({ id, label, icon: Icon }) => (
                                                    <button
                                                        key={id}
                                                        type="button"
                                                        onClick={() => setFormState({ ...formState, userType: id })}
                                                        className={`flex-1 flex items-center justify-center gap-2.5 py-4 rounded-2xl border-2 text-sm font-black transition-all duration-200 ${formState.userType === id
                                                            ? 'border-zlendo-teal bg-zlendo-teal/5 text-zlendo-teal shadow-sm'
                                                            : 'border-gray-100 bg-white text-gray-400 hover:border-gray-200 hover:text-gray-600'}`}
                                                    >
                                                        <Icon className="w-4 h-4" />
                                                        {label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Name + Email */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.22em]">
                                                    Full Name <span className="text-zlendo-teal">*</span>
                                                </label>
                                                <input
                                                    type="text" required value={formState.name} autoComplete="off"
                                                    onFocus={() => setFocused('name')}
                                                    onBlur={() => setFocused(null)}
                                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                    className={`${inputBase} ${focused === 'name' ? inputFocused : inputIdle}`}
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.22em]">
                                                    Work Email <span className="text-zlendo-teal">*</span>
                                                </label>
                                                <input
                                                    type="email" required value={formState.email} autoComplete="off"
                                                    onFocus={() => setFocused('email')}
                                                    onBlur={() => setFocused(null)}
                                                    onChange={(e) => {
                                                        const value = e.target.value.toLowerCase();
                                                        setFormState({ ...formState, email: value });
                                                        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                                                        setEmailError(!re.test(value) && value.length > 0);
                                                    }}
                                                    className={`${inputBase} ${emailError ? 'border-red-400 ring-4 ring-red-400/10' : focused === 'email' ? inputFocused : inputIdle}`}
                                                    placeholder="name@company.com"
                                                />
                                                {emailError && (
                                                    <p className="text-xs text-red-500 font-semibold ml-1">Please enter a valid work email.</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Phone + Country */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.22em]">
                                                    Phone Number <span className="text-zlendo-teal">*</span>
                                                </label>
                                                <input
                                                    type="tel" required value={formState.phone}
                                                    onFocus={() => setFocused('phone')}
                                                    onBlur={() => setFocused(null)}
                                                    onChange={(e) => {
                                                        const value = e.target.value.replace(/[^\d+\-() ]/g, '');
                                                        setFormState({ ...formState, phone: value });
                                                    }}
                                                    className={`${inputBase} ${focused === 'phone' ? inputFocused : inputIdle}`}
                                                    placeholder="Phone Number "
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.22em]">
                                                    Country <span className="text-zlendo-teal">*</span>
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        required value={formState.country}
                                                        onFocus={() => setFocused('country')}
                                                        onBlur={() => setFocused(null)}
                                                        onChange={(e) => setFormState({ ...formState, country: parseInt(e.target.value) })}
                                                        className={`${inputBase} pr-12 appearance-none cursor-pointer ${focused === 'country' ? inputFocused : inputIdle} ${formState.country === 0 ? 'text-gray-300' : ''}`}
                                                    >
                                                        <option value={0} disabled>Select your country</option>
                                                        {isLoadingLocations ? (
                                                            <option disabled>Loading countries...</option>
                                                        ) : sortedCountries.length > 0 ? (
                                                            sortedCountries.map((c: any, idx: number) => (
                                                                <option key={idx} value={c.location_Id}>{c.location_Name}</option>
                                                            ))
                                                        ) : (
                                                            <option disabled>No countries found</option>
                                                        )}
                                                    </select>
                                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                        <ChevronDown className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-2">
                                            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.22em]">
                                                Your Message <span className="text-zlendo-teal">*</span>
                                            </label>
                                            <textarea
                                                rows={6} required value={formState.message}
                                                onFocus={() => setFocused('message')}
                                                onBlur={() => setFocused(null)}
                                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                                className={`${inputBase} rounded-[24px] resize-none ${focused === 'message' ? inputFocused : inputIdle}`}
                                                placeholder="Tell us about your project, your team size, and what you're hoping to achieve with Zlendo Realty..."
                                            />
                                            <p className="text-xs text-gray-400 font-medium ml-1">
                                                The more detail you share, the better we can prepare for your conversation.
                                            </p>
                                        </div>

                                        {/* Submit */}
                                        <div className="pt-2 space-y-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting || emailError}
                                                className="w-full group/btn relative overflow-hidden flex items-center justify-center gap-3 py-6 bg-gradient-to-r from-zlendo-teal to-emerald-500 text-white rounded-[24px] font-black text-xl shadow-[0_20px_60px_rgba(41,176,161,0.35)] hover:shadow-[0_25px_70px_rgba(41,176,161,0.5)] hover:scale-[1.015] active:scale-[0.985] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                            >
                                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                                <span className="relative flex items-center gap-3">
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            Sending your message...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Send My Message
                                                            <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                                        </>
                                                    )}
                                                </span>
                                            </button>

                                            {/* Micro-trust line */}
                                            <p className="text-center text-xs text-gray-400 font-medium">
                                                🔒 Your information is encrypted and never shared with third parties.
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── QUICK HELP ── */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container-custom px-6 lg:px-12">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-black text-zlendo-grey-dark mb-3">
                            {cms?.helpCenterTitle || "Quick Help Center"}
                        {isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                        <p className="text-lg text-zlendo-grey-medium font-medium opacity-60">
                            {cms?.helpCenterSubtitle || "Common starting points for your Zlendo Realty journey."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {resolvedHelpItems.map((item, i) => {
                            const Icon = IconMap[item.icon] || ArrowRight;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-8 rounded-[32px] bg-[#f8f9fc] border border-transparent hover:border-zlendo-teal/20 hover:bg-white hover:shadow-2xl hover:shadow-zlendo-teal/5 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6 group-hover:bg-zlendo-teal group-hover:text-white transition-all">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-black text-zlendo-grey-dark mb-3">{item.title}</h3>
                                    <p className="text-base text-zlendo-grey-medium font-medium opacity-60 mb-5 leading-relaxed">{item.description}</p>
                                    <a href={item.url} rel="noopener noreferrer"
                                        className="text-zlendo-teal font-black flex items-center gap-2 group/link text-sm">
                                        Explore <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactClient;
