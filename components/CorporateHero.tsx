import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function CorporateHero() {
  return (
    <section className="relative w-full">
      {/* Background Image Placeholder simulating a large lifestyle/science photo */}
      <div className="absolute inset-0 z-0 bg-smoke overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ink/5 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[radial-gradient(ellipse_at_center,rgba(243,102,51,0.1),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-bone to-transparent z-10" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-40 pb-20 md:pt-56 md:pb-32">
        <Reveal>
          <div className="max-w-3xl bg-bone p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-t-4 border-ochre rounded-br-[4rem]">
            <h1 className="font-sans text-5xl md:text-7xl font-bold text-ink leading-[1.1] tracking-tight">
              Ahead together.
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-ink-soft leading-relaxed font-light">
              We are a global biopharma company with a purpose to unite science, technology and talent to get ahead of disease together.
            </p>
            <div className="mt-10">
              <Link 
                href="/innovation" 
                className="inline-block bg-ochre text-bone font-bold text-lg px-8 py-4 transition-colors hover:bg-ochre-strong"
              >
                Discover our science
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
