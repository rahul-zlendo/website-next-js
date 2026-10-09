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
      q: 'Is Smart Wizard free to try?',
      a: 'You can compare five ranked layout concepts on this page without payment or signup. The button on a concept takes you to Zlendo Realty signup. Check the app’s current plan and trial terms before using its design tools.',
    },
    {
      q: 'What information can I enter in Smart Wizard?',
      a: `Plot width and length (in feet or metres), built-up area, number of floors, plot facing, front/rear/side setbacks, and the rooms you need – bedrooms, bathrooms, living rooms and parking. You can also add a kids room, guest room, study, ${india ? 'pooja room, ' : ''}utility area or garden.`,
    },
    {
      q: 'How many floor plan concepts can I compare?',
      a: 'Smart Wizard shows the same five predefined concepts – Courtyard Heart, Garden Edge, Private Wings, Compact Core and Flexible Duplex. Plot shape, floors, priority, pooja-room and garden preferences affect their ranking. Room labels are illustrative; scores do not validate a complete room schedule.',
    },
    {
      q: 'Can I generate a Vastu-friendly floor plan?',
      a: 'The Vastu-first preference changes the ranking of the five predefined concepts. The schematic previews do not change room placement based on compass direction and are not a Vastu compliance check. Verify a detailed plan with a qualified professional.',
    },
    {
      q: 'Can I edit the generated floor plan?',
      a: 'You can change your brief and compare the concepts again. The previews on this page are schematic and cannot be edited as measured floor plans. “Explore Zlendo Realty” opens signup; it does not transfer an editable drawing. Use the app’s design tools to create a detailed project separately.',
    },
    {
      q: 'Are the generated plans ready for construction?',
      a: `No. The concepts are early planning directions. Final dimensions, structure and ${india ? 'local approvals (for example CMDA, BBMP or your municipal authority)' : 'local building-code approvals'} should always be verified by a qualified architect or engineer before construction.`,
    },
    {
      q: 'Who is Smart Wizard for?',
      a: 'Homeowners planning a new house, architects who want quick early options for clients, builders and developers testing layouts for a plot, and civil engineers who need a fast starting point before detailed drawings.',
    },
  ];
}

const steps = [
  { title: 'Enter your plot', text: 'Add plot width and length, built-up area, number of floors, facing and setbacks. The page calculates a usable footprint summary; concept previews are schematic and are not drawn to those dimensions.' },
  { title: 'List your rooms', text: 'Choose bedrooms, bathrooms, living rooms and parking, then add extras such as a kids room, guest room, study, pooja room, utility area or garden.' },
  { title: 'Pick a priority', text: 'Tell the generator what matters most: balanced living, open and airy spaces, more privacy, rental potential or a Vastu-first layout.' },
  { title: 'Compare five ranked concepts', text: 'Review five predefined concepts with a preference score and planning trade-offs. Explore the Zlendo Realty app separately to create a detailed 2D and 3D project.' },
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
              On this page, Zlendo Realty’s Smart Wizard compares five predefined concepts using selected plot and room preferences.
              It uses a simple ranking system; it does not generate new measured drawings with an AI model. Previews are schematic,
              and scores describe preferences rather than architectural feasibility.
            </p>
            <p>
              It is built for the very first – and most important – stage of home design: deciding which overall layout makes sense for the site.
              Use the concepts as inspiration when creating a separate detailed project in Zlendo Realty’s{' '}
              <Link href={`${base}/products/floor-planner`} className="font-bold text-zlendo-teal underline-offset-4 hover:underline">AI floor plan design software</Link>, convert it with the{' '}
              <Link href={`${base}/products/2d-to-3d`} className="font-bold text-zlendo-teal underline-offset-4 hover:underline">2D to 3D floor plan converter</Link>, and style the rooms with{' '}
              <Link href={`${base}/products/room-styler`} className="font-bold text-zlendo-teal underline-offset-4 hover:underline">AI interior design</Link>.
            </p>
            {india && (
              <p>
                For Indian plots, you can enter dimensions in feet or metres, record setbacks and room preferences, and select Vastu-first.
                The footprint summary accounts for setbacks. The concept previews do not validate dimensions, local rules or Vastu compliance.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-20 lg:py-28">
        <div className="container-custom mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">How it works</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">How Smart Wizard compares floor plan concepts</h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-slate-600">Enter a brief and compare schematic concepts without drawing.</p>
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
              <li><strong className="text-slate-900">Homeowners</strong> – compare early layout ideas before you meet an architect.</li>
              <li><strong className="text-slate-900">Architects</strong> – produce several early options for a client meeting in minutes, then develop the chosen one.</li>
              <li><strong className="text-slate-900">Builders &amp; developers</strong> – discuss layout preferences before checking site capacity in a detailed plan.</li>
              <li><strong className="text-slate-900">Civil engineers</strong> – use early concepts to start a discussion before detailed structural and services planning.</li>
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
                  <tr><td className="p-3 font-bold text-slate-900">Starting point</td><td className="p-3">5 predefined concepts</td><td className="p-3">Your own drawing</td></tr>
                  <tr><td className="p-3 font-bold text-slate-900">Preview</td><td className="p-3">Schematic room blocks</td><td className="p-3">A layout you draw</td></tr>
                  <tr><td className="p-3 font-bold text-slate-900">Plot & setbacks</td><td className="p-3">Footprint summary</td><td className="p-3">Define in the drawing</td></tr>
                  <tr><td className="p-3 font-bold text-slate-900">Drawing skills</td><td className="p-3">Not required to compare concepts</td><td className="p-3">Depends on the tool</td></tr>
                  <tr><td className="p-3 font-bold text-slate-900">Next step</td><td className="p-3">Create a detailed project separately</td><td className="p-3">Develop your drawing</td></tr>
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
