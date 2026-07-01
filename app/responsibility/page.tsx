import { Reveal } from "@/components/Reveal";

export default function ResponsibilityPage() {
  return (
    <>
      <section className="bg-smoke px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h1 className="font-sans text-5xl md:text-7xl font-bold text-ink leading-tight max-w-4xl">
              Operating responsibly.
            </h1>
            <p className="mt-8 text-2xl text-ink-soft leading-relaxed max-w-3xl">
              Our business is built on a commitment to deliver health impact while ensuring environmental sustainability and robust governance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone px-6 py-20 md:py-32 border-t border-line">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
          <Reveal>
             <div className="rounded-[2rem] bg-smoke p-10 md:p-16 border border-line">
                <p className="font-mono text-sm uppercase tracking-widest text-ochre font-bold">Planet</p>
                <h2 className="mt-4 font-sans text-4xl font-bold text-ink">Environmental Impact</h2>
                <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                  We are accelerating our transition to sustainable manufacturing practices, aiming to minimize our carbon footprint across all operational facilities.
                </p>
             </div>
          </Reveal>
          <Reveal delay={0.1}>
             <div className="rounded-[2rem] bg-smoke p-10 md:p-16 border border-line">
                <p className="font-mono text-sm uppercase tracking-widest text-ochre font-bold">People</p>
                <h2 className="mt-4 font-sans text-4xl font-bold text-ink">Community Health</h2>
                <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                  Our core purpose extends beyond the lab. We partner with local healthcare systems to ensure broader, equitable access to our therapeutic formulations.
                </p>
             </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
