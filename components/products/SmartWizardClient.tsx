'use client';

import { FormEvent, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Compass,
  Lightbulb,
  Maximize2,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

type Unit = 'ft' | 'm';
type Priority = 'balanced' | 'open-space' | 'privacy' | 'rental' | 'vastu';

interface WizardBrief {
  unit: Unit;
  width: number;
  length: number;
  builtUpArea: number;
  floors: number;
  facing: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  livingRooms: number;
  setbackFront: number;
  setbackRear: number;
  setbackLeft: number;
  setbackRight: number;
  kidsRoom: boolean;
  guestRoom: boolean;
  study: boolean;
  pooja: boolean;
  utility: boolean;
  garden: boolean;
  priority: Priority;
  notes: string;
}

interface Suggestion {
  name: string;
  score: number;
  eyebrow: string;
  description: string;
  strengths: string[];
  tradeoff: string;
  color: string;
  rooms: string[];
  layout: number;
}

const initialBrief: WizardBrief = {
  unit: 'ft',
  width: 40,
  length: 60,
  builtUpArea: 1800,
  floors: 2,
  facing: 'North',
  bedrooms: 3,
  bathrooms: 3,
  parking: 1,
  livingRooms: 1,
  setbackFront: 6,
  setbackRear: 4,
  setbackLeft: 3,
  setbackRight: 3,
  kidsRoom: true,
  guestRoom: false,
  study: true,
  pooja: true,
  utility: true,
  garden: false,
  priority: 'balanced',
  notes: '',
};

const priorities: Array<{ value: Priority; title: string; description: string }> = [
  { value: 'balanced', title: 'Balanced living', description: 'A practical mix of light, privacy and circulation' },
  { value: 'open-space', title: 'Open & airy', description: 'Larger shared spaces, daylight and outdoor connection' },
  { value: 'privacy', title: 'More privacy', description: 'Stronger separation between family, guest and service zones' },
  { value: 'rental', title: 'Rental potential', description: 'Independent access and flexible future subdivision' },
  { value: 'vastu', title: 'Vastu-first', description: 'Direction-aware room placement as an early planning guide' },
];

const conceptTemplates = [
  {
    name: 'Courtyard Heart',
    eyebrow: 'Best overall match',
    description: 'A daylight-first home organised around a compact internal court, with shared spaces at the centre and bedrooms along quieter edges.',
    strengths: ['Excellent daylight and cross-ventilation', 'Strong family connection', 'Clear public and private zones'],
    tradeoff: 'The courtyard uses some of the enclosed floor area.',
    color: '#29B0A1',
    layout: 0,
  },
  {
    name: 'Garden Edge',
    eyebrow: 'Best for open space',
    description: 'The house shifts to one side of the plot to create a continuous garden edge beside the living and dining areas.',
    strengths: ['Long indoor-outdoor frontage', 'Simple structural grid', 'Easy future landscape upgrade'],
    tradeoff: 'Rooms on the built edge receive light from fewer sides.',
    color: '#4F9B68',
    layout: 1,
  },
  {
    name: 'Private Wings',
    eyebrow: 'Best for privacy',
    description: 'Family and guest rooms sit in separate wings, joined by a bright shared living spine and a central stair.',
    strengths: ['Quiet bedroom zones', 'Guest-friendly circulation', 'Works well across two floors'],
    tradeoff: 'The connecting passage adds circulation area.',
    color: '#7C6EE6',
    layout: 2,
  },
  {
    name: 'Compact Core',
    eyebrow: 'Best space efficiency',
    description: 'Wet areas, stair and storage share one service core, freeing the perimeter for larger rooms and windows.',
    strengths: ['Efficient plumbing stack', 'Lower circulation loss', 'Cost-conscious construction logic'],
    tradeoff: 'Central service spaces rely more on mechanical ventilation.',
    color: '#E78A43',
    layout: 3,
  },
  {
    name: 'Flexible Duplex',
    eyebrow: 'Best for future change',
    description: 'A flexible stair and entry arrangement allows the floors to work together now or operate more independently later.',
    strengths: ['Future rental option', 'Independent upper-floor access', 'Flexible family growth'],
    tradeoff: 'A second entry slightly reduces the ground-floor living frontage.',
    color: '#4776C8',
    layout: 4,
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function buildSuggestions(brief: WizardBrief): Suggestion[] {
  const specialRooms = [
    brief.kidsRoom ? 'Kids' : '',
    brief.guestRoom ? 'Guest' : '',
    brief.study ? 'Study' : '',
    brief.pooja ? 'Pooja' : '',
  ].filter(Boolean);
  const baseRooms = ['Living', 'Kitchen', 'Dining', ...Array.from({ length: Math.min(brief.bedrooms, 3) }, (_, index) => `Bed ${index + 1}`)];
  const rooms = [...baseRooms, ...specialRooms].slice(0, 8);

  const priorityBoost: Record<Priority, number[]> = {
    balanced: [4, 2, 3, 1, 0],
    'open-space': [3, 6, 1, 0, -1],
    privacy: [2, 0, 7, 2, 1],
    rental: [0, -1, 2, 1, 8],
    vastu: [5, 1, 2, 3, 0],
  };

  const plotRatio = brief.width / Math.max(brief.length, 1);
  return conceptTemplates
    .map((template, index) => {
      const ratioFit = index === 1 && plotRatio < 0.75 ? 3 : index === 0 && plotRatio >= 0.65 ? 2 : 0;
      const floorFit = index === 4 && brief.floors > 1 ? 4 : index === 3 && brief.floors === 1 ? 3 : 0;
      const featureFit = index === 0 && brief.pooja ? 2 : index === 1 && brief.garden ? 4 : 0;
      const score = clamp(88 - index * 2 + priorityBoost[brief.priority][index] + ratioFit + floorFit + featureFit, 78, 97);
      return { ...template, score, rooms };
    })
    .sort((a, b) => b.score - a.score);
}

function NumberField({
  label,
  value,
  onChange,
  suffix,
  min = 0,
  max,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
  min?: number;
  max?: number;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-extrabold text-slate-700">{label}</span>
      <span className="relative block">
        <input
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 pr-14 font-bold text-slate-900 outline-none transition focus:border-zlendo-teal focus:ring-4 focus:ring-zlendo-teal/10"
        />
        {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black uppercase text-slate-400">{suffix}</span>}
      </span>
    </label>
  );
}

function Stepper({ step }: { step: number }) {
  const labels = ['Site', 'Spaces', 'Ideas'];
  return (
    <div className="flex items-center gap-2" aria-label={`Step ${step} of 3`}>
      {labels.map((label, index) => {
        const number = index + 1;
        const active = number <= step;
        return (
          <div key={label} className="flex flex-1 items-center gap-2">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black transition ${active ? 'bg-zlendo-teal text-white' : 'bg-slate-100 text-slate-400'}`}>
              {number < step ? <Check className="h-4 w-4" /> : number}
            </span>
            <span className={`hidden text-xs font-black uppercase tracking-wider sm:block ${active ? 'text-slate-800' : 'text-slate-400'}`}>{label}</span>
            {index < labels.length - 1 && <span className={`h-px flex-1 ${number < step ? 'bg-zlendo-teal' : 'bg-slate-200'}`} />}
          </div>
        );
      })}
    </div>
  );
}

function PlanPreview({ suggestion }: { suggestion: Suggestion }) {
  const patterns = [
    ['col-span-2', '', '', 'col-span-2', '', ''],
    ['col-span-2 row-span-2', '', '', '', 'col-span-2', ''],
    ['', 'col-span-2', '', 'row-span-2', '', 'col-span-2'],
    ['', '', 'col-span-2', 'col-span-2', '', ''],
    ['col-span-2', '', 'row-span-2', '', '', 'col-span-2'],
  ];
  const pattern = patterns[suggestion.layout] ?? patterns[0];

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-[#f8f7f2] p-5">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">Setback</div>
      <div className="grid h-full grid-cols-3 grid-rows-3 gap-1.5 rounded-lg border-2 border-slate-700 bg-white p-1.5 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        {suggestion.rooms.slice(0, 6).map((room, index) => (
          <div
            key={`${room}-${index}`}
            className={`${pattern[index]} flex min-h-0 items-center justify-center rounded-sm border border-slate-300 px-1 text-center text-[9px] font-black uppercase tracking-wide text-slate-600`}
            style={{ backgroundColor: `${suggestion.color}${index % 2 ? '13' : '20'}` }}
          >
            {room}
          </div>
        ))}
      </div>
      <div className="absolute bottom-1.5 right-3 flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-slate-400">
        <Compass className="h-3 w-3" /> N
      </div>
    </div>
  );
}

export default function SmartWizardClient() {
  const [step, setStep] = useState(1);
  const [brief, setBrief] = useState<WizardBrief>(initialBrief);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const unitLabel = brief.unit === 'ft' ? 'ft' : 'm';
  const areaLabel = brief.unit === 'ft' ? 'sq ft' : 'm²';
  const plotArea = Math.max(0, brief.width * brief.length);
  const usableWidth = Math.max(0, brief.width - brief.setbackLeft - brief.setbackRight);
  const usableLength = Math.max(0, brief.length - brief.setbackFront - brief.setbackRear);
  const usableFootprint = usableWidth * usableLength;
  const floorCoverage = usableFootprint > 0 ? Math.round((brief.builtUpArea / Math.max(brief.floors, 1) / usableFootprint) * 100) : 0;
  const suggestions = useMemo(() => buildSuggestions(brief), [brief]);
  const updateBrief = <K extends keyof WizardBrief>(key: K, value: WizardBrief[K]) => setBrief((current) => ({ ...current, [key]: value }));

  const handleGenerate = (event: FormEvent) => {
    event.preventDefault();
    setHasGenerated(true);
    setStep(3);
    setSelected(null);
    window.setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  };

  const continueWithConcept = (suggestion: Suggestion) => {
    setSelected(suggestion.name);
    sessionStorage.setItem('zlendo-smart-wizard-brief', JSON.stringify({ brief, suggestion }));
    const separator = SIGNUP_URL.includes('?') ? '&' : '?';
    window.location.href = `${SIGNUP_URL}${separator}source=smart-wizard&concept=${encodeURIComponent(suggestion.name)}`;
  };

  return (
    <div className="overflow-hidden bg-[#f7f8f6] font-nunito text-slate-900">
      <section className="relative border-b border-slate-200 bg-[#0d1917] px-4 pb-24 pt-16 text-white lg:pb-32 lg:pt-24">
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_18%_15%,rgba(41,176,161,.35),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(255,96,58,.18),transparent_30%)]" />
        <div className="container-custom relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-teal-200 backdrop-blur">
              <WandSparkles className="h-4 w-4" /> New · Smart Wizard
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              Your requirements in. <span className="text-teal-300">Five smart plans out.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-slate-300 lg:text-xl">
              Tell us about your plot, setbacks, rooms and priorities. Smart Wizard turns the brief into five ranked home-planning directions you can compare and continue in Zlendo.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold text-slate-300">
              {['Plot-aware', 'Five alternatives', 'Editable in 2D & 3D'].map((item) => (
                <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-teal-300" /> {item}</span>
              ))}
            </div>
          </div>

          <div id="wizard" className="rounded-[32px] border border-white/10 bg-white p-5 text-slate-900 shadow-[0_30px_80px_rgba(0,0,0,.32)] sm:p-8">
            <Stepper step={step} />
            <form onSubmit={handleGenerate} className="mt-8">
              {step === 1 && (
                <div>
                  <div className="mb-7">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-zlendo-teal">Step 1</p>
                    <h2 className="mt-2 text-2xl font-black sm:text-3xl">Define your buildable site</h2>
                    <p className="mt-2 font-medium text-slate-500">Start with dimensions and mandatory open space around the building.</p>
                  </div>
                  <div className="mb-6 flex w-fit rounded-xl bg-slate-100 p-1" role="group" aria-label="Measurement unit">
                    {(['ft', 'm'] as Unit[]).map((unit) => (
                      <button key={unit} type="button" onClick={() => updateBrief('unit', unit)} className={`rounded-lg px-5 py-2 text-sm font-black transition ${brief.unit === unit ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>
                        {unit === 'ft' ? 'Feet' : 'Metres'}
                      </button>
                    ))}
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <NumberField label="Plot width" value={brief.width} onChange={(value) => updateBrief('width', value)} suffix={unitLabel} min={10} />
                    <NumberField label="Plot length" value={brief.length} onChange={(value) => updateBrief('length', value)} suffix={unitLabel} min={10} />
                    <NumberField label="Target built-up area" value={brief.builtUpArea} onChange={(value) => updateBrief('builtUpArea', value)} suffix={areaLabel} min={100} />
                    <NumberField label="Number of floors" value={brief.floors} onChange={(value) => updateBrief('floors', value)} min={1} max={5} />
                  </div>
                  <div className="mt-6">
                    <span className="mb-3 block text-sm font-extrabold text-slate-700">Setbacks</span>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <NumberField label="Front" value={brief.setbackFront} onChange={(value) => updateBrief('setbackFront', value)} suffix={unitLabel} />
                      <NumberField label="Rear" value={brief.setbackRear} onChange={(value) => updateBrief('setbackRear', value)} suffix={unitLabel} />
                      <NumberField label="Left" value={brief.setbackLeft} onChange={(value) => updateBrief('setbackLeft', value)} suffix={unitLabel} />
                      <NumberField label="Right" value={brief.setbackRight} onChange={(value) => updateBrief('setbackRight', value)} suffix={unitLabel} />
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 rounded-2xl border border-teal-100 bg-teal-50 p-4 sm:grid-cols-3">
                    <div><p className="text-xs font-black uppercase text-teal-700">Plot</p><p className="mt-1 font-black">{plotArea.toLocaleString()} {areaLabel}</p></div>
                    <div><p className="text-xs font-black uppercase text-teal-700">Usable footprint</p><p className="mt-1 font-black">{Math.round(usableFootprint).toLocaleString()} {areaLabel}</p></div>
                    <div><p className="text-xs font-black uppercase text-teal-700">Floor coverage</p><p className={`mt-1 font-black ${floorCoverage > 100 ? 'text-red-600' : ''}`}>{floorCoverage}%</p></div>
                  </div>
                  {usableFootprint <= 0 && <p className="mt-3 text-sm font-bold text-red-600">Setbacks must leave a positive buildable width and length.</p>}
                  {floorCoverage > 100 && <p className="mt-3 text-sm font-bold text-red-600">The target area exceeds the current usable footprint per floor. Add a floor or reduce the area.</p>}
                  <button type="button" disabled={usableFootprint <= 0 || floorCoverage > 100 || brief.width <= 0 || brief.length <= 0} onClick={() => setStep(2)} className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-zlendo-teal px-6 py-4 font-black text-white transition hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-40">
                    Add rooms & priorities <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <div className="mb-7">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-zlendo-teal">Step 2</p>
                    <h2 className="mt-2 text-2xl font-black sm:text-3xl">Describe how you want to live</h2>
                    <p className="mt-2 font-medium text-slate-500">Add essential rooms, orientation and the outcome that matters most.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <NumberField label="Bedrooms" value={brief.bedrooms} onChange={(value) => updateBrief('bedrooms', value)} min={1} max={10} />
                    <NumberField label="Bathrooms" value={brief.bathrooms} onChange={(value) => updateBrief('bathrooms', value)} min={1} max={10} />
                    <NumberField label="Living rooms" value={brief.livingRooms} onChange={(value) => updateBrief('livingRooms', value)} min={1} max={4} />
                    <NumberField label="Parking spaces" value={brief.parking} onChange={(value) => updateBrief('parking', value)} min={0} max={6} />
                  </div>
                  <label className="mt-5 block">
                    <span className="mb-2 block text-sm font-extrabold text-slate-700">Plot facing</span>
                    <select value={brief.facing} onChange={(event) => updateBrief('facing', event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 font-bold outline-none transition focus:border-zlendo-teal focus:ring-4 focus:ring-zlendo-teal/10">
                      {['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'].map((direction) => <option key={direction}>{direction}</option>)}
                    </select>
                  </label>
                  <fieldset className="mt-6">
                    <legend className="mb-3 text-sm font-extrabold text-slate-700">Extra spaces</legend>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {([
                        ['kidsRoom', 'Kids room'],
                        ['guestRoom', 'Guest room'],
                        ['study', 'Study / office'],
                        ['pooja', 'Pooja room'],
                        ['utility', 'Utility / laundry'],
                        ['garden', 'Garden / court'],
                      ] as const).map(([key, label]) => {
                        const checked = Boolean(brief[key]);
                        return (
                          <button key={key} type="button" aria-pressed={checked} onClick={() => updateBrief(key, !checked)} className={`flex items-center gap-3 rounded-2xl border p-3 text-left text-sm font-extrabold transition ${checked ? 'border-zlendo-teal bg-teal-50 text-teal-800' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'}`}>
                            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${checked ? 'border-zlendo-teal bg-zlendo-teal text-white' : 'border-slate-300'}`}>{checked && <Check className="h-3.5 w-3.5" />}</span>
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                  <fieldset className="mt-6">
                    <legend className="mb-3 text-sm font-extrabold text-slate-700">Top priority</legend>
                    <div className="space-y-2">
                      {priorities.map((priority) => (
                        <button key={priority.value} type="button" onClick={() => updateBrief('priority', priority.value)} className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${brief.priority === priority.value ? 'border-zlendo-teal bg-teal-50' : 'border-slate-200 hover:border-slate-300'}`}>
                          <span><span className="block text-sm font-black text-slate-800">{priority.title}</span><span className="mt-0.5 block text-xs font-semibold text-slate-500">{priority.description}</span></span>
                          <span className={`h-4 w-4 rounded-full border-4 ${brief.priority === priority.value ? 'border-zlendo-teal bg-white' : 'border-slate-300'}`} />
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <label className="mt-6 block">
                    <span className="mb-2 block text-sm font-extrabold text-slate-700">Anything else? <span className="font-semibold text-slate-400">Optional</span></span>
                    <textarea value={brief.notes} onChange={(event) => updateBrief('notes', event.target.value)} rows={3} placeholder="Example: elderly parents on the ground floor, kitchen connected to utility, space for a future lift…" className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 font-semibold outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-zlendo-teal focus:ring-4 focus:ring-zlendo-teal/10" />
                  </label>
                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-4 font-black text-slate-700 transition hover:bg-slate-50"><ArrowLeft className="h-5 w-5" /> Back</button>
                    <button type="submit" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-zlendo-teal px-6 py-4 font-black text-white transition hover:bg-teal-600"><Sparkles className="h-5 w-5" /> Generate 5 suggestions</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="py-3 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-zlendo-teal"><Check className="h-8 w-8" /></span>
                  <h2 className="mt-5 text-2xl font-black">Your five concepts are ready</h2>
                  <p className="mx-auto mt-2 max-w-md font-medium text-slate-500">Compare the options below. You can refine the brief or continue with the strongest direction.</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-slate-50 p-4 text-left">
                    <div><p className="text-[10px] font-black uppercase text-slate-400">Plot</p><p className="mt-1 text-sm font-black">{brief.width} × {brief.length} {unitLabel}</p></div>
                    <div><p className="text-[10px] font-black uppercase text-slate-400">Home</p><p className="mt-1 text-sm font-black">{brief.bedrooms} bed · {brief.floors} floor</p></div>
                    <div><p className="text-[10px] font-black uppercase text-slate-400">Facing</p><p className="mt-1 text-sm font-black">{brief.facing}</p></div>
                  </div>
                  <button type="button" onClick={() => { setStep(2); setHasGenerated(false); }} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-zlendo-teal hover:text-teal-700"><RotateCcw className="h-4 w-4" /> Refine my brief</button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {hasGenerated && (
        <section ref={resultsRef} className="scroll-mt-24 px-4 py-20 lg:py-28">
          <div className="container-custom mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">Smart Wizard results</p>
                <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Five directions, ranked for your brief</h2>
              </div>
              <p className="max-w-md text-sm font-semibold leading-relaxed text-slate-500">Scores compare fit within this set of concepts. Final dimensions and local approvals should be verified before construction.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {suggestions.map((suggestion, index) => (
                <article key={suggestion.name} className={`group rounded-[28px] border bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,.1)] sm:p-6 ${index === 0 ? 'border-zlendo-teal lg:col-span-2' : 'border-slate-200'}`}>
                  <div className={index === 0 ? 'grid gap-7 lg:grid-cols-[1fr_1.25fr] lg:items-center' : ''}>
                    <PlanPreview suggestion={suggestion} />
                    <div className="pt-6 lg:pt-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: suggestion.color }}>{index + 1}. {suggestion.eyebrow}</p>
                          <h3 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">{suggestion.name}</h3>
                        </div>
                        <div className="shrink-0 rounded-2xl bg-slate-950 px-3 py-2 text-center text-white"><span className="block text-xl font-black">{suggestion.score}</span><span className="block text-[9px] font-black uppercase tracking-wider text-slate-400">Fit score</span></div>
                      </div>
                      <p className="mt-4 font-medium leading-relaxed text-slate-600">{suggestion.description}</p>
                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {suggestion.strengths.map((strength) => <li key={strength} className="flex items-start gap-2 text-sm font-bold text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: suggestion.color }} /> {strength}</li>)}
                      </ul>
                      <p className="mt-5 rounded-xl bg-amber-50 px-3 py-2.5 text-xs font-bold leading-relaxed text-amber-900"><span className="font-black">Tradeoff:</span> {suggestion.tradeoff}</p>
                      <button type="button" onClick={() => continueWithConcept(suggestion)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 font-black text-white transition hover:bg-zlendo-teal">
                        {selected === suggestion.name ? 'Opening Zlendo…' : 'Continue with this concept'} <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-slate-200 bg-white px-4 py-20 lg:py-28">
        <div className="container-custom mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">From brief to buildable direction</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">A better place to start than a blank canvas</h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-slate-600">Smart Wizard keeps the speed of generative AI while grounding every idea in the constraints that shape a real home.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { icon: Maximize2, title: 'Understand the site', description: 'Plot dimensions, facing, built-up area and four-side setbacks define the usable envelope.' },
              { icon: Lightbulb, title: 'Compare real choices', description: 'Five concepts reveal different ways to balance daylight, privacy, efficiency and future flexibility.' },
              { icon: Building2, title: 'Keep designing', description: 'Choose one direction and continue with editable rooms, walls, furniture and 3D visualization.' },
            ].map((item, index) => (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-zlendo-teal shadow-sm"><item.icon className="h-6 w-6" /></div>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-slate-400">0{index + 1}</p>
                <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 font-medium leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d1917] px-4 py-20 text-white">
        <div className="container-custom mx-auto max-w-5xl text-center">
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-teal-200"><ShieldCheck className="h-4 w-4" /> Designed for confident early decisions</div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Start with your plot. End with a home you can explore.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-slate-300">Generate five planning directions now, then take your favourite into Zlendo Realty’s full 2D and 3D design workspace.</p>
          <Link href="#wizard" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-zlendo-teal px-7 py-4 font-black text-white transition hover:bg-teal-500">Try Smart Wizard <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </div>
  );
}
