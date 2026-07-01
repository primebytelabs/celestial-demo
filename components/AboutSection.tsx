'use client'

import { Reveal } from '@/components/Reveal'
import { company } from '@/lib/content'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="section-gap bg-paper page-margin border-t border-line">
      <div className="grid gap-16 lg:grid-cols-2 items-center">
        {/* Left Column: Editorial Copy */}
        <Reveal>
          <div className="space-y-8">
            <p className="type-label-botanical">01 / Profile</p>
            <h2 className="type-editorial-headline text-ink">About Us</h2>
            
            <p className="type-editorial-title text-ink leading-relaxed">
              For over two decades, {company.legalName} has focused on consistent formulation quality.
            </p>
            
            <p className="text-moss text-lg leading-relaxed">
              Operating from Hyderabad, we manufacture Ayurvedic preparations and proprietary medicines. Our operations are governed by systematic quality control checks, ensuring that our products satisfy the needs of doctors, retailers, and wellness consumers. We look towards a future of improved health access driven by science and manufacturing integrity.
            </p>
            
            <div className="pt-8 border-t border-line">
              <p className="font-serif italic text-lg text-leaf">
                &quot;Caring for every generation since 1997 through time-tested science.&quot;
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Tall Editorial Image Panel */}
        <Reveal delay={0.1}>
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-mist border border-line group rounded-sm shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <Image
              src="/images/family-images.png"
              alt="Trusted Ayurvedic care for generations"
              fill
              className="object-cover object-center w-full h-full filter saturate-[0.92] contrast-[1.01] transition-transform duration-700 group-hover:scale-103"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority={false}
            />
            {/* Minimal Apothecary Tag */}
            <div className="absolute top-6 left-6 bg-paper/95 border border-line px-4 py-2 select-none pointer-events-none">
              <p className="type-label-botanical !text-leaf text-[10px] tracking-wider">Generational Care</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
