'use client'

import { Reveal } from '@/components/Reveal'

export function ManufacturingSection() {
  return (
    <section id="manufacturing" className="section-gap bg-paper page-margin border-t border-line">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
        <div>
          <p className="type-label-botanical mb-6">03 / Standard Operations</p>
          <h2 className="type-editorial-headline text-ink">Manufacturing Excellence</h2>
        </div>
        <Reveal>
          <div className="space-y-8">
            <p className="type-editorial-title text-ink leading-relaxed">
              We focus on consistency, safety, and compliance across every step of our production workflow.
            </p>
            <p className="text-moss text-base leading-relaxed">
              Our manufacturing protocols are designed to ensure that each batch meets safety and quality regulations. Through controlled environments and systematically audited workflows, we ensure our Ayurvedic and proprietary medicines maintain active ingredient consistency and strict hygienic standards.
            </p>
            <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-line">
              <div>
                <h3 className="font-bold text-ink mb-2">Controlled Processes</h3>
                <p className="text-moss text-sm leading-relaxed">
                  Systematic step-by-step procedures to avoid contamination and ensure clean ingredient handling.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-ink mb-2">Formulation Safety</h3>
                <p className="text-moss text-sm leading-relaxed">
                  Testing profiles established to satisfy safety guidelines and public regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
