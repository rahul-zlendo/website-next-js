import Link from 'next/link';

type Region = 'global' | 'in';

export function getSmartWizardFaqs(region: Region = 'global') {
  const india = region === 'in';
  return [
    {
      q: 'Are the generated floor plans accurate to my plot size?',
      a: 'The Smart Wizard calculates a usable footprint summary based on your plot dimensions and setbacks. The five layout concepts shown are schematic diagrams illustrating overall room adjacencies and spatial flow. They are not measured CAD drawings or drawn to your custom plot dimensions.'
    },
    {
      q: 'Can I edit the plan after it is selected?',
      a: 'The concepts on this page are schematic previews for early direction comparison. Selecting a concept does not automatically transfer or import an editable CAD drawing into your studio. To build an editable 2D and 3D floor plan with exact millimeter dimensions, you can start a detailed project in Zlendo Realty\'s AI Floor Planner.'
    },
    {
      q: 'Does the Smart Wizard consider Vastu or local building codes?',
      a: india
        ? 'Selecting "Vastu-first" boosts concepts whose spatial layouts conceptually align with traditional directional zones (such as East/North-East orientations). However, the wizard does not check structural feasibility, local municipal setbacks, or statutory development control regulations. Always verify your plan with a licensed architect or civil engineer.'
        : 'Selecting "Vastu-first" prioritizes concepts with traditional daylight and orientation zones. However, the wizard does not check structural feasibility, international building codes, or local zoning bylaws. Always consult a qualified architectural designer or structural engineer.'
    },
    {
      q: 'How are the concept scores calculated?',
      a: 'The scores represent relative preference fit within the five predefined concepts, calculated from your selected plot aspect ratio, number of floors, and prioritized lifestyle criteria (e.g. open space, privacy, rental flexibility). They reflect preference alignment, not architectural compliance or engineering feasibility.'
    },
    {
      q: 'Is the Smart Wizard free to use?',
      a: 'Yes, comparing all five layout concepts, exploring trade-offs, and calculating footprint summaries is 100% free with no account or credit card required. Creating detailed 2D/3D floor plans and exporting CAD files can be done separately with a Zlendo Realty 14-day free trial.'
    },
    {
      q: 'What information carries over when I create a project in the app?',
      a: 'Your chosen concept name, selected room count, and dimensional summary parameters are saved to your session so you can reference your preferences when creating a project in the Zlendo Realty app. You can then draft and customize exact walls in the editor.'
    }
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

      {/* Worked Concept Example Section */}
      <section className="border-t border-slate-200 bg-white px-4 py-20 lg:py-28">
        <div className="container-custom mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">Worked Concept Example</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            {india ? 'Sample Indian Plot Brief & Relative Ranking' : 'Sample Brief & Relative Ranking'}
          </h2>
          <p className="mt-5 text-lg font-medium leading-relaxed text-slate-600">
            {india
              ? 'See how the Smart Wizard evaluates an Indian urban plot (in feet and metric) to rank schematic layout concepts against spatial preferences and circulation.'
              : 'See how the Smart Wizard analyzes a typical family brief to rank schematic directions based on site geometry and lifestyle preferences.'}
          </p>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-zlendo-teal">
                  {india ? 'Sample Indian Urban Brief' : 'Sample Input Brief'}
                </span>
                <h3 className="mt-1 text-xl font-black text-slate-900">
                  {india ? '30 × 50 ft Plot (1,500 sq.ft / 139.3 m²) · 2 Floors · 3 BHK + Pooja' : '40 × 60 ft Plot (2,400 sq.ft) · 2 Floors · 3 BHK'}
                </h3>
              </div>
              <span className="rounded-full bg-teal-100 px-3.5 py-1 text-xs font-bold text-teal-800">
                Schematic · Not for Construction
              </span>
            </div>

            <div className="mt-6 grid gap-4 text-sm font-medium sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 border border-slate-100">
                <span className="text-xs font-black uppercase text-slate-400">Site Parameters</span>
                {india ? (
                  <>
                    <p className="mt-1 font-bold text-slate-800">Width: 30 ft (9.1m), Length: 50 ft (15.2m)</p>
                    <p className="text-slate-500">Setbacks: Front 5', Rear 3', Sides 3'</p>
                    <p className="text-slate-500">Usable Footprint: ~1,056 sq.ft (98.1 m²)</p>
                  </>
                ) : (
                  <>
                    <p className="mt-1 font-bold text-slate-800">Width: 40 ft, Length: 60 ft</p>
                    <p className="text-slate-500">Setbacks: Front 6', Rear 4', Sides 3'</p>
                    <p className="text-slate-500">Usable Footprint: ~1,700 sq.ft</p>
                  </>
                )}
              </div>
              <div className="rounded-2xl bg-white p-4 border border-slate-100">
                <span className="text-xs font-black uppercase text-slate-400">Room Program</span>
                {india ? (
                  <>
                    <p className="mt-1 font-bold text-slate-800">3 Beds, 3 Baths, Living, Kitchen</p>
                    <p className="text-slate-500">Extras: Dedicated Pooja Room, Utility</p>
                    <p className="text-slate-500">Orientation: East-facing entrance</p>
                  </>
                ) : (
                  <>
                    <p className="mt-1 font-bold text-slate-800">3 Beds, 3 Baths, Living, Dining</p>
                    <p className="text-slate-500">Extras: Study, Utility, Kids room</p>
                    <p className="text-slate-500">Orientation: North-facing</p>
                  </>
                )}
              </div>
              <div className="rounded-2xl bg-white p-4 border border-slate-100">
                <span className="text-xs font-black uppercase text-slate-400">Selected Priority</span>
                {india ? (
                  <>
                    <p className="mt-1 font-bold text-slate-800">Vastu-first Layout</p>
                    <p className="text-slate-500">Relative Fit Score: 95 / 100</p>
                    <p className="text-slate-500">Top Ranked: Courtyard Heart</p>
                  </>
                ) : (
                  <>
                    <p className="mt-1 font-bold text-slate-800">Open &amp; Airy Spaces</p>
                    <p className="text-slate-500">Relative Fit Score: 94 / 100</p>
                    <p className="text-slate-500">Top Ranked: Garden Edge</p>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-amber-50 p-4 border border-amber-200/80 text-xs text-amber-900 font-medium leading-relaxed">
              <strong>Important Notice:</strong> Relative fit scores reflect mathematical preference alignment with your input priorities, not structural feasibility, soil bearing capacity, or local zoning compliance. Concept diagrams illustrate schematic spatial adjacencies and do not constitute measured construction drawings. {india && 'Municipal building sanction (e.g. BBMP, CMDA, MCGM bylaws), structural column grids, and site setback approvals require official sign-off by a registered civil engineer or architect.'}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
