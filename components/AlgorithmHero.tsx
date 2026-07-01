'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function AlgorithmHero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  // Opacity of the terminal data fades out
  const terminalOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  // The "physical product" card fades in
  const productOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
  const productY = useTransform(scrollYProgress, [0.4, 0.8], [100, 0]);

  return (
    <section ref={container} className="relative h-[250vh] bg-bone">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-line">
        
        {/* Terminal / CELSUITE Data */}
        <motion.div 
          style={{ opacity: terminalOpacity }}
          className="absolute inset-0 p-6 md:p-12 font-mono text-xs md:text-sm text-ochre bg-ink leading-relaxed"
        >
          <div className="max-w-4xl mx-auto h-full flex flex-col justify-center">
            <p className="mb-8 opacity-50 text-ink-soft">&gt; INITIATING CELSUITE: DE NOVO DRUG DESIGN PROTOCOL</p>
            <p>&gt; Target Identification: Verified [Protein target identified]</p>
            <p>&gt; Fragment-based Lead Optimization... RUNNING</p>
            <p>&gt; Generating molecular conformations... [14/14 complete]</p>
            <p>&gt; Binding affinity calculated: -9.4 kcal/mol</p>
            <div className="mt-8 text-ink-soft space-y-1">
              <p>0x7f8a9b : PROCESSING LIGAND FRAGMENT 1... [OK]</p>
              <p>0x7f8a9c : PROCESSING LIGAND FRAGMENT 2... [OK]</p>
              <p>0x7f8a9d : PROCESSING LIGAND FRAGMENT 3... [OK]</p>
              <p>0x7f8a9e : PROCESSING LIGAND FRAGMENT 4... [OK]</p>
              <p>0x7f8a9f : ALGORITHM RESOLVED. READY FOR FORMULATION.</p>
            </div>
            
            <h1 className="mt-16 font-sans text-5xl md:text-7xl font-bold tracking-tighter text-bone uppercase max-w-2xl">
              We design molecules with our own software.
            </h1>
          </div>
        </motion.div>

        {/* The Physical Reality (BIOVITA / GMP) */}
        <motion.div 
          style={{ opacity: productOpacity, y: productY }}
          className="absolute inset-0 flex items-center justify-center p-6 bg-bone"
        >
          <div className="max-w-2xl w-full border border-line bg-smoke p-10 md:p-16">
            <div className="border-b border-line pb-4 mb-8 flex justify-between items-end">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">Proprietary Formulation</span>
              <span className="font-mono text-xs text-ink font-bold border border-line px-2 py-1">GMP-CERTIFIED</span>
            </div>
            <h2 className="font-sans text-6xl md:text-8xl font-bold tracking-tighter text-ink uppercase">
              Then we make them real.
            </h2>
            <p className="mt-8 font-mono text-sm leading-relaxed text-ink-soft">
              From computational model to commercial reality. Manufactured under strict GMP standards at Venkat Reddy Nagar, Hyderabad, and distributed across 150+ outlets.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
