'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    Box,
    CirclePlay,
    ImageIcon,
    LayoutTemplate,
    Star,
    X,
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import styles from './InteractiveGlobalHero.module.css';

const previews = [
    {
        label: '2D Plan',
        icon: LayoutTemplate,
        image: '/assets/floor-planner/2d-sketch.webp',
        alt: 'Dimensioned floor plan showing the room layout',
        fit: 'contain',
    },
    {
        label: '3D Design',
        icon: Box,
        image: '/assets/floor-planner/3d-sketch.webp',
        alt: 'Furnished home viewed from above in 3D',
        fit: 'contain',
    },
    {
        label: 'Render',
        icon: ImageIcon,
        image: '/assets/realistic-renders/hero-renders.webp',
        alt: 'Sunlit contemporary living room with an open kitchen, oak finishes and a cream sofa',
        fit: 'cover',
    },
] as const;

const steps = [
    {
        title: 'Plan your space',
        description: 'Draw or import your floor plan.',
        image: previews[0].image,
        alt: previews[0].alt,
        href: '/products/floor-planner',
    },
    {
        title: 'Make it yours',
        description: 'Explore layouts, furniture and finishes.',
        image: previews[1].image,
        alt: previews[1].alt,
        href: '/products/room-styler',
    },
    {
        title: 'Explore in 3D',
        description: 'See your ideas in renders and walkthroughs.',
        image: previews[2].image,
        alt: previews[2].alt,
        href: '/products/virtual-walkthrough',
    },
];

// Ratings checked against the linked review profiles on 11 September 2026.
const reviews = [
    {
        name: 'Capterra',
        score: '5.0',
        href: 'https://www.capterra.com/p/10036307/Zlendo-Realty/',
    },
    {
        name: 'Product Hunt',
        score: '4.8',
        href: 'https://www.producthunt.com/products/zlendo-realty/reviews',
    },
];

export default function InteractiveGlobalHero() {
    const [activePreview, setActivePreview] = useState(2);
    const [videoOpen, setVideoOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const preview = previews[activePreview];

    function openDemo() {
        setVideoOpen(true);
        dialogRef.current?.showModal();
    }

    return (
        <>
            <section className={styles.hero} aria-labelledby="home-hero-title">
                <div className={styles.heroInner}>
                    <div className={styles.copy}>
                        <p className={styles.eyebrow}>
                            AI HOME DESIGN SOFTWARE
                        </p>
                        <h1 id="home-hero-title">
                            Your floor plan.
                            <br />
                            <span>Your home in 3D.</span>
                        </h1>
                        <p className={styles.description}>
                            Create your layout, style your interiors, and share
                            realistic renders and walkthroughs — all in one
                            place.
                        </p>
                        <div className={styles.actions}>
                            <a href={SIGNUP_URL} className={styles.primary}>
                                Start designing free{' '}
                                <ArrowRight size={18} aria-hidden="true" />
                            </a>
                            <button
                                type="button"
                                onClick={openDemo}
                                className={styles.secondary}
                            >
                                <CirclePlay size={20} aria-hidden="true" />{' '}
                                Watch demo
                            </button>
                        </div>
                        <p className={styles.support}>
                            From first idea to a space you can explore.
                        </p>
                        <div
                            className={styles.reviews}
                            aria-label="Customer reviews"
                        >
                            {reviews.map((review, index) => (
                                <a
                                    key={review.name}
                                    href={review.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.review}
                                    aria-label={`${review.name}: rated ${review.score} out of 5. Read reviews (opens in a new tab)`}
                                >
                                    <div className={styles.reviewBrand}>
                                        {index === 0 ? (
                                            <Image
                                                src="/assets/capterra-logo.webp"
                                                alt="Capterra"
                                                width={108}
                                                height={25}
                                                className={styles.capterra}
                                            />
                                        ) : (
                                            <>
                                                <span
                                                    className={
                                                        styles.productHunt
                                                    }
                                                    aria-hidden="true"
                                                >
                                                    P
                                                </span>
                                                <span>Product Hunt</span>
                                            </>
                                        )}
                                    </div>
                                    <div className={styles.reviewRating}>
                                        <Star
                                            size={15}
                                            fill="currentColor"
                                            aria-hidden="true"
                                        />
                                        <strong>
                                            {review.score}
                                            <span>/5</span>
                                        </strong>
                                        <span className={styles.readReviews}>
                                            Read reviews{' '}
                                            <ArrowRight
                                                size={12}
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={styles.showcase}>
                        <div
                            className={styles.toolbar}
                            role="group"
                            aria-label="Explore design previews"
                        >
                            {previews.map((item, index) => (
                                <button
                                    key={item.label}
                                    type="button"
                                    aria-pressed={activePreview === index}
                                    aria-controls="home-design-preview"
                                    onClick={() => setActivePreview(index)}
                                >
                                    <item.icon size={17} aria-hidden="true" />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                            <button type="button" onClick={openDemo}>
                                <CirclePlay size={17} aria-hidden="true" />
                                <span>Walkthrough</span>
                            </button>
                        </div>
                        <div
                            className={styles.scene}
                            id="home-design-preview"
                            aria-live="polite"
                        >
                            <Image
                                key={preview.image}
                                src={preview.image}
                                alt={preview.alt}
                                fill
                                priority={activePreview === 2}
                                sizes="(max-width: 900px) 100vw, 58vw"
                                className={
                                    preview.fit === 'cover'
                                        ? styles.cover
                                        : styles.contain
                                }
                            />
                            <span className={styles.sceneLabel}>
                                {preview.label === 'Render'
                                    ? 'Bring your ideas to life'
                                    : preview.label}
                            </span>
                            {activePreview === 2 && (
                                <button
                                    type="button"
                                    className={styles.planCard}
                                    onClick={() => setActivePreview(0)}
                                    aria-label="View a sample floor plan"
                                >
                                    <span>
                                        Start with a floor plan{' '}
                                        <ArrowRight
                                            size={14}
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <Image
                                        src={previews[0].image}
                                        alt=""
                                        width={180}
                                        height={130}
                                    />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={styles.perspectives}
                aria-labelledby="perspectives-heading"
            >
                <div className={styles.sectionHeading}>
                    <h2 id="perspectives-heading">
                        One plan. Every perspective.
                    </h2>
                    <p>From a simple plan to a space you can call home.</p>
                </div>
                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <Link
                            key={step.title}
                            href={step.href}
                            className={styles.step}
                        >
                            <div className={styles.stepHeading}>
                                <span className={styles.number}>
                                    0{index + 1}
                                </span>
                                <div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                                <ArrowRight size={18} aria-hidden="true" />
                            </div>
                            <div className={styles.stepImage}>
                                <Image
                                    src={step.image}
                                    alt={step.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                    className={
                                        index < 2
                                            ? styles.contain
                                            : styles.cover
                                    }
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <dialog
                ref={dialogRef}
                className={styles.dialog}
                aria-labelledby="home-demo-title"
                onClose={() => setVideoOpen(false)}
                onClick={(event) => {
                    if (event.target === event.currentTarget)
                        dialogRef.current?.close();
                }}
            >
                <div className={styles.dialogContent}>
                    <div className={styles.dialogHeading}>
                        <h2 id="home-demo-title">Explore Zlendo Realty</h2>
                        <button
                            type="button"
                            onClick={() => dialogRef.current?.close()}
                            aria-label="Close demo"
                            autoFocus
                        >
                            <X size={24} />
                        </button>
                    </div>
                    {videoOpen && (
                        <iframe
                            src="https://www.youtube.com/embed/fvAFH25rWlY?autoplay=1&rel=0"
                            title="Zlendo Realty product walkthrough"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    )}
                    <p>
                        See how your design comes to life.{' '}
                        <a href={SIGNUP_URL}>
                            Start designing free{' '}
                            <ArrowRight size={15} aria-hidden="true" />
                        </a>
                    </p>
                </div>
            </dialog>
        </>
    );
}
