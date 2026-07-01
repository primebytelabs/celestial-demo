'use client'

import { Reveal } from '@/components/Reveal'
import Image from 'next/image'

export function ResearchSection() {
  return (
    <section id="research" className="section-gap bg-paper page-margin">
      <div className="grid-asymmetric-right">
        {/* Lab image (left, narrower) */}
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/lab-rd.jpg"
              alt="Celestial Biolabs research and quality-control laboratory"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </Reveal>

        {/* Copy (right, wider) */}
        <Reveal delay={0.1}>
          <div className="space-y-8">
            <div>
              <span className="label-kicker">Continuous Evaluation</span>
              <h2 className="type-display-lg mt-6">
                Research &amp;
                <br />
                <span className="text-accent">Innovation</span>
              </h2>
            </div>

            <p className="type-display-md text-secondary">
              We are committed to research practices that support quality improvement, standardization, and batch-to-batch consistency.
            </p>

            <p className="body-text leading-relaxed">
              Our continuous improvement mindset focuses on evaluating and refining standard Ayurvedic formulations using modern pharmaceutical quality guidelines. Rather than relying on static formulations, we continuously review manufacturing datasets to improve processing safety and standardization.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
