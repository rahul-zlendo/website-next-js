'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { createOrUpdateBusinessInfo, getAllListOfValues, getAllLocations, resetEnterpriseForm } from '@/lib/store/slices/enterpriseSlice';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function BusinessDemoForm() {
    const dispatch = useAppDispatch();
    const {
        isSubmitting,
        isSubmitted,
        isLoadingIndustries,
        industries,
        Location_type,
        isLoadingLocations,
        locations
    } = useAppSelector((state) => state.enterprise);

    const [formData, setFormData] = useState({
        company: '',
        name: '',
        role: '',
        phone: '',
        email: '',
        industry: '',
        description: '',
        teamSize: '',
        city: '',
        timeline: '',
        country: 0,
    });

    useEffect(() => {
        dispatch(resetEnterpriseForm());
        dispatch(getAllListOfValues());
        dispatch(getAllLocations());
    }, [dispatch]);

    const countries = useMemo(() => {
        if (!locations || locations.length === 0) return [];
        // Match lov_Key "Country" (lov_Id: 12) from Location_type
        const countryLovId = Location_type.find((item: any) =>
            item.lov_Key?.toLowerCase() === 'country'
        )?.lov_Id || 12;

        return locations
            .filter((loc: any) => loc.location_TypeId === countryLovId && loc.isActive !== false)
            .sort((a: any, b: any) => (a.location_Name || "").localeCompare(b.location_Name || ""));
    }, [locations, Location_type]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            Id: 0,
            FullName: formData.name,
            EmailAddress: formData.email,
            CompanyName: formData.company,
            PhoneNumber: formData.phone || "",
            State: null,
            country: formData.country,
            BusinessStatus: 0,
            BusinessDescription: parseInt(formData.industry) || 0,
            BusinessChallenge: formData.description,
            IsActive: true,
            ScheduleDate: null,
            ScheduleTime: null,
            RescheduleDate: null,
            RescheduleTime: null,
            Remarks: "",
            AssignedTo: 0,
            ModuleName: "Business Info Master",
            Activity: "Create"
        };

        try {
            await dispatch(createOrUpdateBusinessInfo(payload)).unwrap();
        } catch (error: unknown) {
            console.error('Error submitting form:', error);
            alert(error instanceof Error ? error.message : 'Something went wrong');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[24px] sm:rounded-[40px] p-5 sm:p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden text-left"
        >
            {isSubmitted ? (
                <div className="text-center py-20 space-y-6">
                    <div className="w-20 h-20 bg-zlendo-teal/10 rounded-full flex items-center justify-center mx-auto text-zlendo-teal">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-black font-nunito text-zlendo-grey-dark">Demo Requested!</h3>
                    <p className="text-xl text-zlendo-grey-medium font-medium">Thanks for your interest in Zlendo Realty Business. Our team will reach out to you soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4 sm:space-y-6 md:space-y-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-5 md:gap-x-8 md:gap-y-6">
                        <div className="space-y-1.5 sm:space-y-2">
                            <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Full Name</label>
                            <input name="name" type="text" required value={formData.name} onChange={handleChange}
                                className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm"
                                autoComplete="off" placeholder="Your full name" />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                            <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Work Email</label>
                            <input name="email" type="email" required value={formData.email} onChange={handleChange}
                                className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm"
                                placeholder="name@company.com" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-5 md:gap-x-8 md:gap-y-6">
                        <div className="space-y-1.5 sm:space-y-2">
                            <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Country</label>
                            <div className="relative">
                                <select name="country" required value={formData.country}
                                    onChange={(e) => {
                                        const newVal = parseInt(e.target.value);
                                        setFormData(prev => ({ 
                                            ...prev, 
                                            country: newVal
                                        }));
                                    }}
                                    className={`w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 pr-10 sm:pr-12 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm appearance-none cursor-pointer ${formData.country ? 'text-gray-900' : 'text-gray-300'}`}
                                    style={{ WebkitAppearance: 'none', MozAppearance: 'none' as any }}>
                                    <option value={0} disabled hidden>Select country...</option>
                                    {isLoadingLocations ? (
                                        <option disabled>Loading countries...</option>
                                    ) : countries.length > 0 ? (
                                        countries.map((country: any, index: number) => (
                                            <option key={index} value={country.location_Id} className="text-gray-900">
                                                {country.location_Name}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>No countries found</option>
                                    )}
                                </select>
                                <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                    <svg className="w-3 h-2 sm:w-3 sm:h-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                            <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Company</label>
                            <input name="company" type="text" required value={formData.company} onChange={handleChange}
                                className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm"
                                autoComplete="off" placeholder="Your company name" />
                        </div>
                    </div>

                            <div className="grid md:grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-5 md:gap-x-8 md:gap-y-6">
                                <div className="space-y-1.5 sm:space-y-2">
                                    <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Industry</label>
                                    <div className="relative">
                                        <select name="industry" required value={formData.industry}
                                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                            className={`w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 pr-10 sm:pr-12 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm appearance-none cursor-pointer ${formData.industry ? 'text-gray-900' : 'text-gray-300'}`}
                                            style={{ WebkitAppearance: 'none', MozAppearance: 'none' as any }}>
                                            <option value={0} disabled hidden>Select...</option>
                                            {isLoadingIndustries ? (
                                                <option disabled>Loading industries...</option>
                                            ) : industries.length > 0 ? (
                                                industries.map((industry: any, index: number) => (
                                                    <option key={index} value={industry.lov_Value} className="text-gray-900">
                                                        {industry.description || industry.lov_Key}
                                                    </option>
                                                ))
                                            ) : (
                                                <option disabled>No industries found</option>
                                            )}
                                        </select>
                                        <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                            <svg className="w-3 h-2 sm:w-3 sm:h-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5 sm:space-y-2">
                                    <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Phone</label>
                                    <input name="phone" type="tel" required value={formData.phone}
                                        onChange={(e) => { const value = e.target.value.replace(/[^\d+\-() ]/g, ''); setFormData({ ...formData, phone: value }); }}
                                        className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm"
                                        placeholder="Mobile number" title="Please enter a valid mobile number" />
                                </div>
                            </div>

                    <div className="grid md:grid-cols-1 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-5 md:gap-x-8 md:gap-y-6">
                        <div className="space-y-1.5 sm:space-y-2">
                            <label className="text-[10px] sm:text-[11px] font-bold text-gray-700 uppercase tracking-widest ml-1">Business Description / Challenges</label>
                            <textarea name="description" required rows={4} value={formData.description} onChange={handleChange}
                                className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-100 transition-all shadow-sm resize-none"
                                placeholder="Tell us about your project requirements or the challenges you're looking to solve..." />
                        </div>
                    </div>

                    <div className="pt-2 sm:pt-4">
                        <button type="submit" disabled={isSubmitting}
                            className={`w-full bg-[#29b0a1] text-white py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl hover:scale-[1.01] active:scale-[0.98] transition-all shadow-xl shadow-[#29b0a1]/20 flex items-center justify-center gap-2 sm:gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                            {isSubmitting ? 'Submitting...' : 'Book Strategy Call'}
                            {!isSubmitting && <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />}
                        </button>
                        <p className="text-[10px] sm:text-xs text-gray-400 font-bold text-center mt-3 sm:mt-4">No credit card required. Free pilot for qualified teams.</p>
                    </div>
                </form>
            )}
        </motion.div>
    );
}
