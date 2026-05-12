import { Metadata } from 'next';
import JsonLd from '@/components/common/JsonLd';

interface Props {
  params: Promise<{ country: string; productId: string }>;
  children: React.ReactNode;
}

const productData = {
  'vr-studio': {
    title: '8K VR Studio',
  },
  'api-suite': {
    title: 'Zlendo Realty API Suite',
  }
};

const faqs = [
  { q: "Is this tool free to use?", a: "Yes! You can start for free and design your first project without any credit card. Premium textures and high-res renders are available in paid plans." },
  { q: "Do I need to install any software?", a: "No, Zlendo Realty runs entirely in your browser. It works smoothly on Chrome, Firefox, and Safari on both Windows and Mac." },
  { q: "Can I import my own CAD files?", a: "Absolutely. We support DXF, DWG, JPG, PNG, and PDF formats for seamless import." },
  { q: "How accurately are the costs estimated?", a: "Our cost engine is updated weekly with local market rates for materials and labor, ensuring 95%+ accuracy for your zip code." }
];

export default async function ProductLayout({ params, children }: Props) {
  const { productId } = await params;
  const product = productData[productId as keyof typeof productData];

  if (!product) return <>{children}</>;

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "name": `${product.title} - Frequently Asked Questions`,
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <JsonLd schema={faqSchema} />
      {children}
    </>
  );
}
