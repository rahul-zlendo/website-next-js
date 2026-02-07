import type { Metadata } from 'next';
import CostEstimatorClient from './CostEstimatorClient';

export const metadata: Metadata = {
  title: 'Smart Construction Cost Estimator | Try Free',
  description: 'Estimate residential construction costs accurately with AI-driven insights. Plan budgets confidently and avoid overruns. Start free with Zlendo Realty.',
  keywords: [
    'free builder\'s cost estimate tool',
    'construction documentation services',
    'structural design services',
    'civil engineering design services',
    'residential building plans',
    'budget certainty',
    'construction cost calculator',
    'home building estimate',
  ],
  openGraph: {
    title: 'Accurate Home Construction Cost Estimation',
    description: 'Get real-time cost insights for materials and planning. Ideal for affordable home plan design. Book a free demo.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Cost Estimator for Homes',
    description: 'Plan smarter, spend better. Explore free sample estimates.',
  },
};

export default function CostEstimatorPage() {
  return <CostEstimatorClient />;
}
