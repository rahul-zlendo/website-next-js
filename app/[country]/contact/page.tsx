'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { createBusinessContact, resetContactForm } from '@/lib/store/slices/contactSlice';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageSquare,
    User,
    Building2,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';

const ContactPage = () => {
    const dispatch = useAppDispatch();
    const { isSubmitting, isSubmitted } = useAppSelector((state) => state.contact);

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        userType: 'individual',
        message: ''
    });

    useEffect(() => {
        // Reset form when component mounts
        dispatch(resetContactForm());
    }, [dispatch]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            fullName: formState.name,
            emailAddress: formState.email,
            phoneNumber: formState.phone,
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

    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/10 min-h-screen">
            {/* 1. HERO SECTION */}
            <section className="relative pt-24 pb-12 overflow-hidden bg-[#f9fafb]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-zlendo-teal/5 blur-[120px] rounded-full -z-0" />

                <div className="container-custom px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/10 text-zlendo-teal mb-6 border border-zlendo-teal/20"
                        >
                            <span className="text-[11px] font-black uppercase tracking-[0.3em]">Support • Sales • Partnership</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black text-zlendo-grey-dark mb-6 tracking-tight leading-[1.1]">
                            Let's build something <span className="text-zlendo-teal">extraordinary.</span>
                        </h1>
                        <p className="text-xl text-zlendo-grey-medium font-bold opacity-60 leading-relaxed">
                            Whether you're building your first home or scaling a real estate empire, we have the tools you need.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. CONTACT CONTENT */}
            <section className="py-24 container-custom px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 space-y-16">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-zlendo-grey-dark">Get in touch directly</h2>
                            <p className="text-lg text-zlendo-grey-medium font-bold opacity-60">
                                Prefer a direct conversation? Reach out to our dedicated teams across India.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-4">
                                <a href="mailto:contact@zlendorealty.com" className="group flex items-center gap-5 p-6 rounded-3xl bg-[#f9fafb] border border-black/[0.03] hover:bg-white hover:shadow-xl hover:shadow-zlendo-teal/5 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal group-hover:bg-zlendo-teal group-hover:text-white transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-40 mb-1">Email us</div>
                                        <div className="text-lg font-black text-zlendo-grey-dark">contact@zlendorealty.com</div>
                                    </div>
                                </a>

                                <a href="tel:0452-3583474" className="group flex items-center gap-5 p-6 rounded-3xl bg-[#f9fafb] border border-black/[0.03] hover:bg-white hover:shadow-xl hover:shadow-zlendo-teal/5 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-2xl bg-[#f2f7f6] flex items-center justify-center text-zlendo-grey-dark group-hover:bg-zlendo-teal group-hover:text-white transition-all">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-40 mb-1">Call us</div>
                                        <div className="text-lg font-black text-zlendo-grey-dark">0452-3583474</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-8 border-t border-black/[0.05] pt-12">
                            <div className="flex gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-[12px] font-black uppercase tracking-widest text-zlendo-teal mb-3">Headquarters</h4>
                                        <p className="text-xl font-bold text-zlendo-grey-dark leading-relaxed">
                                            36/1, Ganapathy Street,<br />
                                            Alagappan Nagar, Madurai – 625003<br />
                                            Tamil Nadu, India
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-[12px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-40 mb-3">Regional Presence</h4>
                                        <p className="text-lg font-bold text-zlendo-grey-medium opacity-80 italic">
                                            Pune • Bengaluru • Delhi • Hyderabad
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7 relative">
                        <div className="absolute inset-0 bg-zlendo-teal/5 blur-[100px] rounded-full -z-10" />

                        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-black/[0.03] border border-black/[0.03] relative overflow-hidden">
                            <AnimatePresence>
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center text-center p-8"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal mb-6">
                                            <CheckCircle2 className="w-12 h-12" />
                                        </div>
                                        <h3 className="text-3xl font-black text-zlendo-grey-dark mb-4">Message Sent!</h3>
                                        <p className="text-xl text-zlendo-grey-medium font-bold opacity-60 mb-8 max-w-sm">
                                            Thanks for reaching out. A Zlendo Realty expert will get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => {
                                                dispatch(resetContactForm());
                                                setFormState({
                                                    name: '',
                                                    email: '',
                                                    phone: '',
                                                    userType: 'individual',
                                                    message: ''
                                                });
                                            }}
                                            className="px-8 py-4 bg-[#f9fafb] text-zlendo-grey-dark rounded-2xl font-black hover:bg-zlendo-teal hover:text-white transition-all"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-zlendo-grey-dark">Send us a message</h3>
                                    <div className="flex p-1 bg-[#f9fafb] rounded-2xl w-fit">
                                        <button
                                            type="button"
                                            onClick={() => setFormState({ ...formState, userType: 'individual' })}
                                            className={`px-6 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${formState.userType === 'individual' ? 'bg-white shadow-lg text-zlendo-teal' : 'text-zlendo-grey-medium opacity-50'}`}
                                        >
                                            <User className="w-4 h-4" /> Individual
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormState({ ...formState, userType: 'business' })}
                                            className={`px-6 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${formState.userType === 'business' ? 'bg-white shadow-lg text-zlendo-teal' : 'text-zlendo-grey-medium opacity-50'}`}
                                        >
                                            <Building2 className="w-4 h-4" /> Business
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-40 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-[#f9fafb] border border-black/[0.03] focus:border-zlendo-teal focus:bg-white outline-none transition-all font-bold text-zlendo-grey-dark"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-40 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-[#f9fafb] border border-black/[0.03] focus:border-zlendo-teal focus:bg-white outline-none transition-all font-bold text-zlendo-grey-dark"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-40 ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        value={formState.phone}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                            setFormState({ ...formState, phone: value });
                                        }}
                                        className="w-full px-6 py-4 rounded-2xl bg-[#f9fafb] border border-black/[0.03] focus:border-zlendo-teal focus:bg-white outline-none transition-all font-bold text-zlendo-grey-dark"
                                        placeholder="10-digit mobile number"
                                        title="Please enter a valid 10-digit mobile number"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-zlendo-grey-medium opacity-40 ml-1">Your Message</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-6 py-5 rounded-[32px] bg-[#f9fafb] border border-black/[0.03] focus:border-zlendo-teal focus:bg-white outline-none transition-all font-bold text-zlendo-grey-dark resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-6 bg-zlendo-teal text-white rounded-[32px] font-black text-xl shadow-2xl shadow-zlendo-teal/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    {!isSubmitting && <Send className="w-6 h-6" />}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FAQ / QUICK HELP - Optional but adds value */}
            <section className="py-24 bg-[#f9fafb]">
                <div className="container-custom px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-zlendo-grey-dark mb-4">Quick Help Center</h2>
                        <p className="text-lg text-zlendo-grey-medium font-bold opacity-60">Common starting points for your Zlendo Realty journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Demo Request", desc: "Want to see Zlendo Realty in action? Book a personalized walkthrough.", icon: Building2 },
                            { title: "Support Docs", desc: "Browse our comprehensive guides and technical documentation.", icon: MessageSquare },
                            { title: "Partnership", desc: "Learn about our affiliate and builder referral programs.", icon: ArrowRight }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[40px] bg-white border border-black/[0.03] hover:shadow-2xl hover:shadow-black/5 transition-all">
                                <div className="w-16 h-16 rounded-[24px] bg-zlendo-teal/5 flex items-center justify-center text-zlendo-teal mb-8">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-zlendo-grey-dark mb-4">{item.title}</h3>
                                <p className="text-lg text-zlendo-grey-medium font-bold opacity-60 mb-6">{item.desc}</p>
                                <button className="text-zlendo-teal font-black flex items-center gap-2 group">
                                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
