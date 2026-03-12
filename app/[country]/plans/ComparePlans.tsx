'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ComparePlansProps {
    compareData: any[]; // The structured Array of main features with subFeatures and plans
    plansList: any[]; // The filtered list of plans to display (e.g., Free, Pro, Pro Plus)
}

const ComparePlans: React.FC<ComparePlansProps> = ({ compareData, plansList }) => {
    // Keep track of which main features are expanded
    // Expanding all by default
    const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>(
        compareData.reduce((acc, feature) => ({ ...acc, [feature.featureId]: true }), {})
    );

    const toggleSection = (id: number) => {
        setExpandedSections(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const renderValue = (restrictionTypeKey: string, restrictionValue: number) => {
        if (restrictionTypeKey?.toLowerCase() === 'unlimited') {
            return (
                <span className="inline-block px-3 py-1 bg-[#e6fcf5] text-zlendo-teal text-[11px] font-bold rounded-full border border-[#d3f9ed]">
                    Unlimited
                </span>
            );
        }
        
        if (restrictionValue === 0) {
            return (
                <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-gray-500">-</span>
                    {/* <span className="text-xs font-bold text-gray-400">0/Year</span> */}
                </div>
            );
        }

        // According to image, we display limits like "10/Month 120/Year"
        return (
            <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-gray-700">{restrictionValue}/Month</span>
                {/* <span className="text-[11px] font-bold text-gray-500">{restrictionValue * 12}/Year</span> */}
            </div>
        );
    };

    return (
        <div className="max-w-6xl mx-auto mt-20 mb-20 bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-zlendo-grey-dark mb-4">Compare features</h2>
                <p className="text-gray-500 font-bold max-w-2xl mx-auto">
                    Detailed breakdown of what's included in each plan to help you choose the best fit for your workflow.
                </p>
            </div>

            <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                    {/* Header Row */}
                    <div className="flex border-b-2 border-gray-100 pb-4 mb-2 sticky top-0 bg-white z-10">
                        <div className="w-1/4 pt-4 uppercase text-xs font-black text-gray-400 tracking-wider flex items-end">
                            Feature List
                        </div>
                        {plansList.map(plan => (
                            <div key={plan.planId} className="w-1/4 text-center">
                                <h3 className="text-lg font-black text-zlendo-grey-dark">{plan.planName}</h3>
                                {plan.planName.toLowerCase() !== 'free' ? (
                                    <div className="mt-1 flex flex-col items-center justify-center">
                                        <span className="text-sm font-bold text-zlendo-teal">₹{plan.price} /Month</span>
                                        {/* <span className="text-xs font-bold text-zlendo-teal">₹{plan.yearlyPrice} /Yearly</span> */}
                                    </div>
                                ) : (
                                    <div className="mt-1 h-10 flex items-center justify-center">
                                        {/* Spacer to align free with others */}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Features Body */}
                    <div className="flex flex-col gap-2 mt-4">
                        {compareData.map((mainFeature, idx) => {
                            const isExpanded = expandedSections[mainFeature.featureId];
                            return (
                                <div key={mainFeature.featureId} className="border border-gray-100 rounded-xl overflow-hidden bg-white">
                                    {/* Main Feature Header */}
                                    <button 
                                        onClick={() => toggleSection(mainFeature.featureId)}
                                        className="w-full flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-zlendo-teal"></div>
                                            <span className="font-black text-zlendo-grey-dark text-sm">{mainFeature.featureName}</span>
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-[#e6fcf5] text-zlendo-teal flex items-center justify-center">
                                            {isExpanded ? <ChevronUp size={14} strokeWidth={3} /> : <ChevronDown size={14} strokeWidth={3} />}
                                        </div>
                                    </button>

                                    {/* Sub Features */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 py-2 flex flex-col divide-y divide-gray-50">
                                                    {mainFeature.subFeatures?.map((sub: any) => (
                                                        <div key={sub.featureId} className="flex py-3 items-center">
                                                            <div className="w-1/4 text-sm font-bold text-gray-700 pr-4">
                                                                {sub.featureName}
                                                            </div>
                                                            {plansList.map(plan => {
                                                                // Find the plan mapping inside the subfeature
                                                                const planFeature = sub.plans?.find((p: any) => p.planId === plan.planId);
                                                                return (
                                                                    <div key={plan.planId} className="w-1/4 flex justify-center text-center">
                                                                        {planFeature ? renderValue(planFeature.restrictionTypeKey, planFeature.restrictionValue) : renderValue('Limited', 0)}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparePlans;
