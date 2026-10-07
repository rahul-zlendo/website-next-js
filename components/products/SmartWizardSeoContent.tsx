import Link from 'next/link';

type Region = 'global' | 'in';

export function getSmartWizardFaqs(region: Region = 'global') {
  const india = region === 'in';
  return [
    {
      q: 'What is an AI floor plan generator?',
      a: 'An AI floor plan generator turns a short brief – plot size, setbacks, room count and priorities – into ready-to-compare house layout concepts. Instead of starting from a blank page, you start from several planning directions and refine the one that fits best.',
    },
    {
      q: 'Is the Zlendo Realty AI floor plan generator free?',
      a: 'Yes. You can enter your brief and generate five ranked floor plan concepts on this page for free, without signing up. To continue editing a concept in the full 2D and 3D floor planner, create a free Zlendo Realty account.',
    },
    {
      q: 'What information do I need to generate a floor plan?',
      a: `Plot width and length (in feet or metres), built-up area, number of floors, plot facing, front/rear/side setbacks, and the rooms you need – bedrooms, bathrooms, living rooms and parking. You can also add a kids room, guest room, study, ${india ? 'pooja room, ' : ''}utility area or garden.`,
    },
    {
      q: 'How many floor plans does it create?',
      a: 'Smart Wizard creates five layout concepts – Courtyard Heart, Garden Edge, Private Wings, Compact Core and Flexible Duplex – and ranks them by how well each one fits your plot shape, number of floors, room list and chosen priority.',
    },
    {
      q: 'Can I generate a Vastu-friendly floor plan?',
      a: 'Yes. Choose the Vastu-first priority and the generator ranks concepts using direction-aware room placement as an early planning guide. For full compliance checks, continue in Zlendo Realty’s Vastu tools and confirm with your architect.',
    },
    {
      q: 'Can I edit the generated floor plan?',
      a: 'Yes. Pick any concept and select “Continue with this concept” to open it in Zlendo Realty, where you can adjust rooms, walls, doors, windows and furniture and view the design in 3D.',
    },
    {
      q: 'Are the generated plans ready for construction?',
      a: `No. The concepts are early planning directions. Final dimensions, structure and ${india ? 'local approvals (for example CMDA, BBMP or your municipal authority)' : 'local building-code approvals'} should always be verified by a qualified architect or engineer before construction.`,
    },
    {
      q: 'Who is the AI floor plan generator for?',
      a: 'Homeowners planning a new house, architects who want quick early options for clients, builders and developers testing layouts for a plot, and civil engineers who need a fast starting point before detailed drawings.',
    },
  ];
}

const steps = [
  { title: 'Enter your plot', text: 'Add plot width and length, built-up area, number of floors, plot facing and the setback on all four sides. This defines the buildable envelope the AI floor plan generator works within.' },
  { title: 'List your rooms', text: 'Choose bedrooms, bathrooms, living rooms and parking, then add extras such as a kids room, guest room, study, pooja room, utility area or garden.' },
  { title: 'Pick a priority', text: 'Tell the generator what matters most: balanced living, open and airy spaces, more privacy, rental potential or a Vastu-first layout.' },
  { title: 'Compare five ranked plans', text: 'Review five floor plan concepts side by side, each with a fit score, strengths and an honest trade-off – then continue the best one in 2D and 3D.' },
];

const concepts = [
  { name: 'Courtyard Heart', text: 'Shared spaces around a compact internal court for daylight and cross-ventilation.' },
  { name: 'Garden Edge', text: 'The house shifts to one side to create a long garden frontage – useful on narrower plots.' },
  { name: 'Private Wings', text: 'Family and guest rooms in separate wings joined by a bright living spine.' },
  { name: 'Compact Core', text: 'Stair, storage and wet areas share one core for an efficient, cost-conscious plan.' },
  { name: 'Flexible Duplex', text: 'Floors that work together now and can run independently later, e.g. for rental.' },
];

export default function SmartWizardSeoContent({ region = 'global' }: { region?: Region }) {
  const india = region === 'in';
  const faqs = getSmartWizardFaqs(region);
  const base = india ? '/in' : '';

  return (
    <>
      <section className="bg-[#f7f8f6] px-4 py-20 lg:py-28">
        <div className="container-custom mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">AI floor plan generator</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">What is an AI floor plan generator?</h2>
          <div className="mt-6 space-y-5 text-lg font-medium leading-relaxed text-slate-600">
            <p>
              An AI floor plan generator creates house layout options from a few simple inputs instead of asking you to draw every wall by hand.
              Zlendo Realty’s Smart Wizard reads your plot size, setbacks, built-up area, number of floors and room list, then generates five
              floor plan concepts and ranks them against your brief.
            </p>
            <p>
              It is built for the very first – and most important – stage of home design: deciding which overall layout makes sense for the site.
              Once you have a direction you like, you can continue it in Zlendo Realty’s{' '}
              <Link href={`${base}/products/floor-planner`} className="font-bold text-zlendo-teal underline-offset-4 hover:underline">AI floor plan design software</Link>, convert it with the{' '}
              <Link href={`${base}/products/2d-to-3d`} className="font-bold text-zlendo-teal underline-offset-4 hover:underline">2D to 3D floor plan converter</Link>, and style the rooms with{' '}
              <Link href={`${base}/products/room-styler`} className="font-bold text-zlendo-teal underline-offset-4 hover:underline">AI interior design</Link>.
            </p>
            {india && (
              <p>
                For Indian plots, the generator works in feet or metres, accounts for front, rear and side setbacks, supports pooja and utility rooms,
                and offers a Vastu-first priority – so the options you compare already reflect how homes are planned in India.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-20 lg:py-28">
        <div className="container-custom mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">How it works</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">How the AI floor plan generator works</h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-slate-600">Four steps, about two minutes, no drawing skills needed.</p>
          </div>
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-7">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-zlendo-teal">Step {i + 1}</p>
                <h3 className="mt-2 text-xl font-black">{s.title}</h3>
                <p className="mt-3 font-medium leading-relaxed text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-4 py-20 lg:py-28">
        <div className="container-custom mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">Five layout concepts</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Five floor plan ideas from one brief</h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-slate-600">
              Every brief produces the same five planning directions, re-ranked for your plot. Narrow plots, multi-storey homes,
              single-floor homes and your chosen priority each push different concepts to the top.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {concepts.map((c) => (
              <div key={c.name} className="rounded-[24px] border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-black">{c.name}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-20 lg:py-28">
        <div className="container-custom mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">Who it’s for</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Built for homeowners and professionals</h2>
            <ul className="mt-6 space-y-4 font-medium leading-relaxed text-slate-600">
              <li><strong className="text-slate-900">Homeowners</strong> – see realistic layout options for your plot before you meet an architect.</li>
              <li><strong className="text-slate-900">Architects</strong> – produce several early options for a client meeting in minutes, then develop the chosen one.</li>
              <li><strong className="text-slate-900">Builders &amp; developers</strong> – test how many bedrooms, floors and parking spaces a plot can realistically hold.</li>
              <li><strong className="text-slate-900">Civil engineers</strong> – start structural and services planning from a clear, plot-aware layout.</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">Why use a generator</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">AI floor plan generator vs starting from scratch</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 font-black text-slate-900">
                  <tr><th className="p-3"></th><th className="p-3">Smart Wizard</th><th className="p-3">Blank canvas</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-600">
                  <tr><td className="p-3 font-bold text-slate-900">Time to first options</td><td className="p-3">About 2 minutes</td><td className="p-3">Hours to days</td></tr>
                  <tr><td className="p-3 font-bold text-slate-900">Options to compare</td><td className="p-3">5 ranked concepts</td><td className="p-3">Usually 1</td></tr>
                  <tr><td className="p-3 font-bold text-slate-900">Plot & setbacks</td><td className="p-3">Built into the brief</td><td className="p-3">Checked manually</td></tr>
                  <tr><td className="p-3 font-bold text-slate-900">Skill needed</td><td className="p-3">None</td><td className="p-3">CAD / drafting</td></tr>
                  <tr><td className="p-3 font-bold text-slate-900">Next step</td><td className="p-3">Edit in 2D &amp; 3D</td><td className="p-3">Redraw for 3D</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-4 py-20 lg:py-28">
        <div className="container-custom mx-auto max-w-4xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">FAQ</p>
          <h2 className="mt-4 text-center text-3xl font-black tracking-tight sm:text-5xl">AI floor plan generator FAQs</h2>
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-6 open:shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-black text-slate-900">{f.q}</summary>
                <p className="mt-3 font-medium leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
