'use client'

import { Reveal } from '@/components/Reveal'
import { company } from '@/lib/content'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="section-gap bg-paper page-margin">
      <div className="grid-asymmetric-right">
        {/* Left: Image (narrower) */}
        <Reveal delay={0.1}>
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-mist border border-border group rounded-2xl">
            <Image
              src="/images/family-images.jpg"
              alt="Trusted Ayurvedic care for generations"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
            {/* Editorial badge: top-left corner */}
            <div className="absolute top-0 left-0 bg-accent text-paper px-3 py-2">
              <p className="text-xs font-bold uppercase tracking-wider">Care</p>
            </div>
          </div>
        </Reveal>

        {/* Right: Copy (wider) */}
        <Reveal>
          <div className="space-y-8">
            <span className="label-kicker">Our Story</span>

            <h2 className="type-display-lg">
              Generations of trust
              <br />
              <span className="text-accent">in quality</span>
            </h2>

            <p className="type-display-md text-secondary">
              For over two decades, {company.legalName} has manufactured Ayurvedic preparations with unwavering focus on formulation quality and preparation standards.
            </p>

            <div className="space-y-6">
              <p className="body-text leading-relaxed">
                Operating from Hyderabad, we combine traditional Ayurvedic knowledge with modern analytical testing. Every batch is governed by systematic quality control checks—ensuring our products satisfy doctors, retailers, and wellness consumers alike.
              </p>

              <p className="body-text leading-relaxed">
                We look toward a future of improved health access driven by scientific rigor and manufacturing integrity.
              </p>
            </div>

            {/* Blockquote: editorial touch */}
            <div className="border-l-4 border-accent pl-6 py-2">
              <p className="type-display-md italic text-secondary">
                &ldquo;Caring for every generation through time-tested science.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
