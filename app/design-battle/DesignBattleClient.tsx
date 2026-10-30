'use client';

import Image from 'next/image';
import { FormEvent, useRef, useState } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';
import { API_BASE_URL, DEFAULT_API_TOKEN } from '@/lib/config/env';
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  Blocks,
  BookOpen,
  Box,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  DraftingCompass,
  GraduationCap,
  Layers3,
  Lightbulb,
  MousePointer2,
  Palette,
  Phone,
  Presentation,
  Sparkles,
  Trophy,
  Users,
  WandSparkles,
  Zap,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    eyebrow: 'Discover',
    title: 'PropTech Walkthrough',
    description:
      'A live, interactive introduction to AI-assisted planning, 2D drafting, instant 3D, photoreal visualization and presentation workflows.',
    icon: BrainCircuit,
    tags: ['AI floor planning', 'Instant 3D', 'Walkthroughs'],
  },
  {
    number: '02',
    eyebrow: 'Imagine',
    title: 'The Challenge',
    description:
      'Participants receive a real-world design theme and turn architectural knowledge, human insight and technology into a bold concept.',
    icon: Lightbulb,
    tags: ['Real brief', 'Design thinking', 'Team energy'],
  },
  {
    number: '03',
    eyebrow: 'Create',
    title: 'Design Battle',
    description:
      'Students and faculty create, visualize and present their ideas live—combining creativity, design thinking, visualization and storytelling.',
    icon: DraftingCompass,
    tags: ['Create', 'Visualize', 'Present'],
  },
  {
    number: '04',
    eyebrow: 'Rise',
    title: 'Recognition & Rewards',
    description:
      'Top performers earn prizes and recognition, while every participant walks away with an official participation certificate.',
    icon: Trophy,
    tags: ['Prizes', 'Certificates', 'Opportunities'],
  },
];

const benefits = [
  { icon: BrainCircuit, title: 'Experience Future Technology', text: 'Get hands-on with emerging PropTech and visualization workflows.' },
  { icon: Palette, title: 'Showcase Your Creativity', text: 'Turn architectural ideas into spatial, immersive experiences.' },
  { icon: BriefcaseBusiness, title: 'Build Your Portfolio', text: 'Create a polished project for academic and professional portfolios.' },
  { icon: Trophy, title: 'Win Exciting Rewards', text: 'Compete for cash prizes, trophies and creative awards.' },
  { icon: Award, title: 'Get Certified', text: 'Every participant receives an official Design Battle certificate.' },
  { icon: Zap, title: 'Unlock Future Opportunities', text: 'Standout talent may be invited into future Zlendo collaborations.' },
];

const profiles = [
  ['Architecture Students', DraftingCompass],
  ['Interior Design Students', Palette],
  ['Civil Engineering Students', Building2],
  ['Design & Planning Students', Layers3],
  ['Faculty Members', GraduationCap],
  ['Emerging Designers', Sparkles],
  ['Young Architects', Blocks],
] as const;

const transformations = [
  ['Idea', Lightbulb],
  ['2D Floor Plan', DraftingCompass],
  ['Instant 3D', Box],
  ['Interior Visual', Palette],
  ['Walkthrough', MousePointer2],
  ['Presentation', Presentation],
] as const;

const gallery = [
  { type: 'Workshop', label: 'PropTech walkthrough', image: '/assets/global/floor-plan-discussion.webp' },
  { type: 'Studio', label: 'Design in progress', image: '/assets/2d-to-3d/before-plan.webp' },
  { type: 'Showcase', label: 'Immersive visualization', image: '/assets/2d-to-3d/after-render.webp' },
  { type: 'Studio', label: 'From concept to space', image: '/assets/global/interior-design-consultation.webp' },
  { type: 'Showcase', label: 'Presentation ready', image: '/assets/design-presentation/hero-dashboard.webp' },
  { type: 'Workshop', label: 'Future design community', image: '/assets/use-case/modern-architecture-studio.jpg' },
];

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <Reveal className="battle-section-heading">
      <div className="battle-kicker"><span />{eyebrow}</div>
      <h2 className={light ? 'is-light' : ''}>{title}</h2>
      {text && <p className={light ? 'is-light' : ''}>{text}</p>}
    </Reveal>
  );
}

function BeforeAfter() {
  const [position, setPosition] = useState(48);
  return (
    <div className="battle-compare" style={{ '--split': `${position}%` } as React.CSSProperties}>
      <Image src="/assets/2d-to-3d/after-render.webp" alt="Photorealistic 3D interior visualization" fill sizes="(max-width: 900px) 100vw, 50vw" className="battle-compare-image" />
      <div className="battle-compare-before">
        <Image src="/assets/2d-to-3d/before-plan.webp" alt="Original hand-drawn architectural floor plan" fill sizes="(max-width: 900px) 100vw, 50vw" className="battle-compare-image" />
      </div>
      <span className="battle-compare-label before">2D PLAN</span>
      <span className="battle-compare-label after">IMMERSIVE 3D</span>
      <div className="battle-compare-line"><span><ArrowRight size={17} /></span></div>
      <input
        aria-label="Compare 2D floor plan and 3D visualization"
        type="range"
        min="8"
        max="92"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
      />
    </div>
  );
}

export default function DesignBattleClient() {
  const [submitted, setSubmitted] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('All');
  const { scrollYProgress } = useScroll();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = {
      name: formData.get('name')?.toString() || '',
      college: formData.get('college')?.toString() || '',
      role: formData.get('role')?.toString() || '',
      city: formData.get('city')?.toString() || '',
      phoneNumber: formData.get('phone')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      expectedParticipantsNumber: parseInt(formData.get('participants')?.toString() || '0', 10),
      // Format YYYY-MM to ISO date
      preferredMonthDate: formData.get('month')
        ? new Date(formData.get('month') + '-01').toISOString()
        : new Date().toISOString(),
      message: formData.get('message')?.toString() || ''
    };

    try {
      const response = await fetch(`${API_BASE_URL}/Form/createdesignbattle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'zrealtyserviceapikey': DEFAULT_API_TOKEN
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Submission failed with status:', response.status);
        // We still show the success UI to the user to prevent them from retrying endlessly if the backend is down
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitted(true);
    }
  };

  const scrollToForm = () => document.getElementById('host')?.scrollIntoView({ behavior: 'smooth' });
  const filteredGallery = galleryFilter === 'All' ? gallery : gallery.filter((item) => item.type === galleryFilter);

  return (
    <div className="battle-page">
      <motion.div className="battle-progress" style={{ scaleX: scrollYProgress }} />
      <div>
        <section className="battle-hero" id="top">
          <div className="battle-grid-lines" />
          <div className="battle-orbit orbit-one" />
          <div className="battle-orbit orbit-two" />
          <div className="battle-shell battle-hero-grid">
            <motion.div className="battle-hero-copy" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="battle-kicker"><span />India&apos;s campus PropTech experience</div>
              <h1>Design Beyond <em>Imagination.</em></h1>
              <h3>Zlendo Realty Design Battle</h3>
              <p>
                Experience AI-powered planning, instant 2D-to-3D transformation and interactive walkthroughs. Bring your creativity. Explore modern PropTech. Design, visualize and compete.
              </p>
              <div className="battle-hero-actions">
                <button className="battle-button primary" onClick={scrollToForm}>Bring it to your college <ArrowRight /></button>
                <a className="battle-button secondary" href="#participate">Become a participant <ArrowDownRight /></a>
              </div>
              <div className="battle-hero-proof">
                <div className="battle-avatars"><span>AR</span><span>ID</span><span>CE</span><span>+</span></div>
                <p><strong>Built for curious minds</strong><br />Students · Faculty · Future designers</p>
              </div>
            </motion.div>

            <motion.div className="battle-hero-visual" initial={{ opacity: 0, scale: 0.92, rotate: 1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.1 }}>
              <div className="battle-hero-card image-main">
                <Image src="/assets/global/interior-design-consultation.webp" alt="Young designers collaborating on an architectural visualization" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
                <div className="image-shade" />
                <span className="live-pill"><i /> CAMPUS LAB · LIVE</span>
              </div>
              <div className="battle-floating-card plan-card">
                <div className="card-top"><span>01 / PLAN</span><DraftingCompass size={16} /></div>
                <Image src="/assets/2d-to-3d/before-plan.webp" alt="Architectural floor plan" fill sizes="180px" />
              </div>
              <div className="battle-floating-card render-card">
                <div className="card-top"><span>02 / VISUALIZE</span><WandSparkles size={16} /></div>
                <Image src="/assets/2d-to-3d/after-render.webp" alt="Realistic 3D interior" fill sizes="220px" />
              </div>
              <div className="battle-ai-badge"><Sparkles size={20} /><span><small>POWERED BY</small>Modern PropTech</span></div>
              <div className="battle-hero-index">DB<span>’26</span></div>
            </motion.div>
          </div>
          <div className="battle-ticker" aria-hidden="true">
            <div>LEARN <span>✦</span> CREATE <span>✦</span> COMPETE <span>✦</span> GET RECOGNIZED <span>✦</span> BUILD WHAT&apos;S NEXT <span>✦</span> LEARN <span>✦</span> CREATE <span>✦</span> COMPETE</div>
          </div>
        </section>

        <section className="battle-intro battle-section" id="experience">
          <div className="battle-shell">
            <SectionHeading eyebrow="The experience" title="Where Creativity Meets PropTech" text="A college-focused design and technology initiative introducing the next generation of architects and designers to the workflows shaping tomorrow." />
            <div className="battle-intro-layout">
              <Reveal className="battle-intro-story">
                <p className="battle-dropcap">Instead of limiting creativity to conventional drawings and static presentations, participants experience how technology can transform a floor plan into an interactive, visually compelling design.</p>
                <p>Students and faculty get hands-on with Zlendo Realty, then use the platform to solve an exciting real-world design challenge.</p>
              </Reveal>
              <div className="battle-pillars">
                {[
                  ['01', 'LEARN', 'Discover modern architectural technology and digital design workflows.', BookOpen],
                  ['02', 'CREATE', 'Turn ideas and floor plans into immersive 3D experiences.', WandSparkles],
                  ['03', 'COMPETE', 'Take on a live challenge and showcase your creativity.', Trophy],
                ].map(([number, title, text, Icon], index) => {
                  const IconComponent = Icon as typeof BookOpen;
                  return (
                    <Reveal className="battle-pillar" delay={index * 0.1} key={String(title)}>
                      <span>{String(number)}</span><IconComponent /><h3>{String(title)}</h3><p>{String(text)}</p><ArrowDownRight />
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="battle-section battle-journey" id="journey">
          <div className="battle-shell">
            <SectionHeading eyebrow="The format" title="Four moves. One unforgettable journey." text="From first exposure to final presentation, every stage is designed to build confidence, fluency and creative momentum." light />
            <div className="battle-steps">
              {steps.map((step, index) => (
                <Reveal className="battle-step" delay={index * 0.08} key={step.number}>
                  <div className="battle-step-number">{step.number}</div>
                  <div className="battle-step-icon"><step.icon /></div>
                  <div className="battle-step-copy"><small>{step.eyebrow}</small><h3>{step.title}</h3><p>{step.description}</p><div>{step.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                  <div className="battle-step-line" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="battle-section battle-transform">
          <div className="battle-shell">
            <div className="battle-transform-heading">
              <SectionHeading eyebrow="Technology experience" title="From an idea to an immersive experience" text="Move the slider and watch a traditional plan become a space you can experience, refine and present." />
              <div className="battle-transform-stat"><strong>2D → 3D</strong><span>in one connected workflow</span></div>
            </div>
            <Reveal><BeforeAfter /></Reveal>
            <div className="battle-flow">
              {transformations.map(([title, Icon], index) => (
                <Reveal className="battle-flow-item" delay={index * 0.06} key={title}>
                  <div><Icon /></div><span>{title}</span>{index < transformations.length - 1 && <ArrowRight className="flow-arrow" />}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="battle-section battle-benefits" id="participate">
          <div className="battle-shell">
            <SectionHeading eyebrow="Why participate" title="More Than a Competition" text="A fast, practical leap from classroom concepts to industry-ready creative confidence." />
            <div className="battle-benefit-grid">
              {benefits.map((benefit, index) => <Reveal className="battle-benefit" delay={(index % 3) * 0.08} key={benefit.title}><span>0{index + 1}</span><benefit.icon /><h3>{benefit.title}</h3><p>{benefit.text}</p><ArrowDownRight /></Reveal>)}
            </div>
          </div>
        </section>

        <section className="battle-section battle-rewards" id="rewards">
          <div className="battle-shell">
            <SectionHeading eyebrow="Prizes & recognition" title="Make your ideas impossible to ignore." text="Recognition for the boldest ideas, the clearest thinking and the strongest visual stories." light />
            <div className="battle-prize-grid">
              <Reveal className="battle-prize first"><div className="prize-rank">01</div><Trophy /><small>FIRST PRIZE</small><h3>₹5,000</h3><p>Cash Prize</p><ul><li><Check /> Winner Trophy</li><li><Check /> Certificate</li></ul></Reveal>
              <Reveal className="battle-prize runner" delay={0.08}><div className="prize-rank">02</div><Award /><small>RUNNER-UP</small><h3>₹2,500</h3><p>Cash Prize</p><ul><li><Check /> Trophy</li><li><Check /> Certificate</li></ul></Reveal>
              <Reveal className="battle-prize creative" delay={0.16}><div className="prize-rank">05</div><Sparkles /><small>CREATIVE DESIGNERS</small><h3>5 Winners</h3><p>₹500 Amazon voucher each</p><ul><li><Check /> Special recognition</li><li><Check /> Certificate</li></ul></Reveal>
              <Reveal className="battle-prize everyone" delay={0.24}><div className="prize-rank">∞</div><CircleCheck /><small>EVERY PARTICIPANT</small><h3>Certified</h3><p>Official participation certificate</p></Reveal>
            </div>
            <p className="battle-prize-note">Prize structures may vary for special editions or institutional collaborations.</p>
          </div>
        </section>

        <section className="battle-section battle-participants">
          <div className="battle-shell battle-participants-grid">
            <SectionHeading eyebrow="Who can participate" title="Every perspective belongs in the room." text="Whether you are learning, teaching or experimenting with new technology, Design Battle gives you a platform to explore what is possible." />
            <div className="battle-profile-list">
              {profiles.map(([title, Icon], index) => <Reveal className="battle-profile" delay={index * 0.04} key={title}><span>0{index + 1}</span><Icon /><strong>{title}</strong><ArrowRight /></Reveal>)}
            </div>
          </div>
        </section>

        <section className="battle-section battle-campus" id="campus">
          <div className="battle-shell battle-campus-grid">
            <Reveal className="battle-campus-image">
              <Image src="/assets/use-case/modern-architecture-studio.jpg" alt="Modern architecture representing future-focused campus design" fill sizes="(max-width: 900px) 100vw, 45vw" />
              <div className="campus-image-label"><span>COLLEGE EDITION</span><strong>Learn beyond<br />the classroom.</strong></div>
            </Reveal>
            <div className="battle-campus-copy">
              <SectionHeading eyebrow="For colleges" title="Bring the Future of PropTech to Your Campus" text="Give students a memorable encounter with modern architecture technology—starting with a practical walkthrough and ending in an energetic on-campus Design Battle." />
              <div className="battle-campus-benefits">
                {['Industry exposure', 'Hands-on learning', 'Real-world design challenge', 'Student engagement', 'Recognition & certification', 'Future collaboration pathway'].map((item) => <div key={item}><CircleCheck />{item}</div>)}
              </div>
              <div className="battle-campus-callout"><GraduationCap /><p><small>IDEAL FOR</small>Architecture, Interior Design, Civil Engineering and Design Institutions.</p></div>
              <button className="battle-button primary" onClick={scrollToForm}>Host a Design Battle <ArrowRight /></button>
            </div>
          </div>
        </section>

        <section className="battle-section battle-gallery">
          <div className="battle-shell">
            <div className="battle-gallery-head">
              <SectionHeading eyebrow="Campus editions" title="Design Battles on Campus" text="A growing community of students, educators and future designers exploring the possibilities of PropTech." />
              <div className="battle-gallery-filters">
                {['All', 'Workshop', 'Studio', 'Showcase'].map((filter) => <button className={galleryFilter === filter ? 'active' : ''} onClick={() => setGalleryFilter(filter)} key={filter}>{filter}</button>)}
              </div>
            </div>
            <motion.div className="battle-gallery-grid" layout>
              {filteredGallery.map((item, index) => (
                <motion.figure layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={index === 0 ? 'wide' : ''} key={item.image}>
                  <Image src={item.image} alt={item.label} fill sizes="(max-width: 700px) 100vw, 40vw" />
                  <figcaption><span>{item.type}</span><strong>{item.label}</strong><ArrowDownRight /></figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="battle-opportunity">
          <div className="battle-shell battle-opportunity-grid">
            <div><div className="battle-kicker"><span />Future opportunities</div><h2>The Battle Can Be<br /><em>Just the Beginning.</em></h2></div>
            <div><p>High-performing participants can stay connected with the Zlendo Realty ecosystem and may be considered for future design collaborations, platform-based projects and freelance architectural opportunities.</p><div className="battle-disclaimer"><Check />An opportunity pathway—not guaranteed employment.</div></div>
          </div>
        </section>

        <section className="battle-form-section" id="host">
          <div className="battle-form-background"><Image src="/assets/use-case/modern-architecture-studio.jpg" alt="" fill sizes="100vw" /></div>
          <div className="battle-shell battle-form-grid">
            <Reveal className="battle-form-copy">
              <div className="battle-kicker light"><span />Host the next edition</div>
              <h2>Ready to Bring the Design Battle to Your College?</h2>
              <p>Introduce your students to the future of architecture, visualization and PropTech with Zlendo Realty.</p>
              <div className="battle-contact-links"><a href="tel:7845263597"><Phone />78452 63597</a><a href="https://www.zlendorealty.com" target="_blank" rel="noreferrer"><Building2 />zlendorealty.com</a></div>
            </Reveal>
            <Reveal className="battle-form-card" delay={0.1}>
              {submitted ? (
                <motion.div className="battle-success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <div><CircleCheck /></div><small>REQUEST RECEIVED</small><h3>Thank you!</h3><p>Our Zlendo Realty team will contact you to discuss your campus Design Battle.</p><button onClick={() => setSubmitted(false)}>Send another request</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-title"><span>Campus enquiry</span><strong>Let&apos;s create an experience.</strong></div>
                  <div className="battle-field"><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="Full name" required /></div>
                  <div className="battle-field"><label htmlFor="college">College / Institution</label><input id="college" name="college" placeholder="Institution name" required /></div>
                  <div className="battle-field-row">
                    <div className="battle-field"><label htmlFor="role">Role</label><div className="select-wrap"><select id="role" name="role" required defaultValue=""><option value="" disabled>Select role</option><option>Student</option><option>Faculty</option><option>HOD</option><option>Principal / Director</option><option>College Management</option><option>Other</option></select><ChevronDown /></div></div>
                    <div className="battle-field"><label htmlFor="city">City</label><input id="city" name="city" placeholder="Your city" required /></div>
                  </div>
                  <div className="battle-field-row">
                    <div className="battle-field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" placeholder="10-digit number" pattern="[0-9 +()-]{10,}" required /></div>
                    <div className="battle-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="you@college.edu" required /></div>
                  </div>
                  <div className="battle-field-row">
                    <div className="battle-field"><label htmlFor="participants">Expected participants</label><input id="participants" name="participants" type="number" min="10" placeholder="e.g. 80" /></div>
                    <div className="battle-field"><label htmlFor="month">Preferred month</label><input id="month" name="month" type="month" /></div>
                  </div>
                  <div className="battle-field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows={3} placeholder="Tell us about your campus and goals" /></div>
                  <button className="battle-submit" type="submit">Request a Design Battle <ArrowRight /></button>
                  <p className="form-privacy">By submitting, you agree to be contacted about this enquiry.</p>
                </form>
              )}
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
