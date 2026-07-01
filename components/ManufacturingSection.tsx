'use client'

import { Reveal } from '@/components/Reveal'

export function ManufacturingSection() {
  return (
    <section id="manufacturing" className="section-gap bg-paper page-margin">
      <div className="space-y-24">
        {/* Header */}
        <div>
          <span className="label-kicker">Standard Operations</span>
          <h2 className="type-display-xl mt-6">
            Manufacturing
            <br />
            <span className="text-accent">Excellence</span>
          </h2>
        </div>

        {/* Content Grid: Asymmetric */}
        <div className="grid gap-20 lg:grid-cols-[1.2fr_1fr] items-center">
          <Reveal>
            <div className="space-y-8">
              <p className="type-display-md text-secondary">
                We focus on consistency, safety, and compliance across every step of our production workflow.
              </p>

              <p className="body-text leading-relaxed">
                Our manufacturing protocols ensure each batch meets safety and quality regulations. Through controlled environments and systematically audited workflows, we maintain active ingredient consistency and strict hygienic standards in all Ayurvedic and proprietary medicines.
              </p>
            </div>
          </Reveal>

          {/* Key practices: right column */}
          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div className="card-ruled">
                <div className="space-y-3">
                  <h3 className="type-display-md">Controlled Processes</h3>
                  <p className="body-text text-secondary">
                    Systematic procedures to avoid contamination and ensure clean ingredient handling at every stage.
                  </p>
                </div>
              </div>

              <div className="card-ruled">
                <div className="space-y-3">
                  <h3 className="type-display-md">Formulation Safety</h3>
                  <p className="body-text text-secondary">
                    Rigorous testing profiles to satisfy safety guidelines and regulatory compliance requirements.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
