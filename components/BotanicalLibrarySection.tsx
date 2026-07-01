'use client'

import { useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { sourcedHerbs, Herb } from '@/lib/content'
import { LeafIcon } from '@/components/LeafIcon'
import { AnimatePresence, motion } from 'framer-motion'

export function BotanicalLibrarySection() {
  const [activeHerb, setActiveHerb] = useState<Herb | null>(null)

  return (
    <section id="botanical-library" className="section-gap bg-paper page-margin border-t border-line">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start mb-12">
        <div>
          <p className="type-label-botanical mb-6">06.1 / Botanical Research</p>
          <h2 className="type-editorial-headline text-ink">Apothecary Library</h2>
          <p className="text-moss text-base mt-4 leading-relaxed max-w-sm">
            We evaluate and source authentic raw herbs. Explore the classical Ayurvedic properties and botanical descriptions of our key sourced herbs.
          </p>
        </div>

        {/* Botanical Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {sourcedHerbs.map((herb, idx) => (
            <Reveal key={herb.name} delay={idx * 0.05}>
              <button
                onClick={() => setActiveHerb(herb)}
                className="w-full text-left border border-line bg-mist/30 p-8 flex flex-col justify-between min-h-[220px] group hover:border-leaf/30 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-leaf cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-serif italic text-moss text-sm">{herb.botanicalName}</span>
                    <LeafIcon className="h-5 w-5 text-moss group-hover:text-leaf transition-colors" />
                  </div>
                  <h3 className="type-editorial-title text-ink font-bold mt-4 mb-2 flex items-baseline gap-3">
                    {herb.name}
                    <span className="font-serif text-sm font-light text-moss">({herb.sanskritName})</span>
                  </h3>
                  <p className="text-moss text-xs line-clamp-2 mt-2 leading-relaxed">
                    {herb.description}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-line/50 w-full flex justify-between items-center mt-6">
                  <span className="type-label-botanical text-[9px] !text-moss group-hover:!text-leaf transition-colors">
                    Explore Profile
                  </span>
                  <span className="text-moss group-hover:text-leaf transition-colors group-hover:translate-x-1 duration-300 text-xs">
                    →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Side Drawer Component */}
      <AnimatePresence>
        {activeHerb && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveHerb(null)}
              className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-lg bg-paper border-l border-line shadow-2xl p-8 md:p-12 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start border-b border-line pb-6 mb-8">
                  <div>
                    <span className="type-label-botanical !text-leaf mb-2 block">Botanical Profile</span>
                    <h3 className="type-editorial-headline text-ink font-bold leading-tight">
                      {activeHerb.name}
                    </h3>
                    <p className="font-serif italic text-moss text-base mt-1">
                      {activeHerb.botanicalName}
                    </p>
                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setActiveHerb(null)}
                    className="text-moss hover:text-ink transition-colors p-2 focus:outline-none"
                    aria-label="Close details"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                      <path d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                {/* Sanskrit name banner */}
                <div className="bg-mist/40 border border-line p-6 text-center rounded-sm mb-8 select-none">
                  <span className="text-moss text-xs type-label-botanical">Sanskrit Treatise Name</span>
                  <p className="font-serif text-5xl text-ink font-medium tracking-wide mt-2">
                    {activeHerb.sanskritName}
                  </p>
                </div>

                {/* Properties list */}
                <div className="space-y-6">
                  <div>
                    <h4 className="type-label-botanical !text-moss mb-3">Ayurvedic Properties (Gunas)</h4>
                    <div className="border-y border-line divide-y divide-line">
                      <div className="py-3 grid grid-cols-2 gap-4">
                        <span className="text-moss text-sm">Rasa (Taste)</span>
                        <span className="text-ink text-sm font-medium">{activeHerb.rasa}</span>
                      </div>
                      <div className="py-3 grid grid-cols-2 gap-4">
                        <span className="text-moss text-sm">Virya (Potency)</span>
                        <span className="text-ink text-sm font-medium">{activeHerb.virya}</span>
                      </div>
                      <div className="py-3 grid grid-cols-2 gap-4">
                        <span className="text-moss text-sm">Prabhava (Action)</span>
                        <span className="text-ink text-sm font-medium">{activeHerb.action}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="type-label-botanical !text-moss mb-2">Botanical Narrative</h4>
                    <p className="text-moss text-base leading-relaxed">
                      {activeHerb.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Linked Formulations */}
              <div className="mt-12 pt-6 border-t border-line">
                <span className="type-label-botanical !text-moss mb-3 block">Linked Celestial Formulations</span>
                <div className="flex flex-wrap gap-2">
                  {activeHerb.formulations.map(f => (
                    <span key={f} className="border border-line bg-mist/60 px-4 py-2 text-ink text-xs font-medium rounded-sm">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
