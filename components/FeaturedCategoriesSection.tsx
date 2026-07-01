'use client'

import { Reveal } from '@/components/Reveal'
import { productCategories } from '@/lib/content'
import { LeafIcon } from '@/components/LeafIcon'
import Link from 'next/link'

export function FeaturedCategoriesSection() {
  return (
    <section id="categories" className="section-gap bg-paper page-margin">
      {/* Header with CTA */}
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end mb-20">
        <div>
          <span className="label-kicker">05 / Product Classifications</span>
          <h2 className="type-display-xl mt-6">Featured Categories</h2>
        </div>
        <Link
          href="/products"
          className="label-kicker label-kicker-accent hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          View all ↗
        </Link>
      </div>

      {/* Category cards grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {productCategories.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 0.08}>
            <div className="card-ruled group flex flex-col justify-between h-full hover:border-accent transition-colors">
              <div className="space-y-6">
                <span className="section-number">{String(i + 1).padStart(2, '0')}</span>

                <div>
                  <h3 className="type-display-md mb-3">
                    {cat.label}
                  </h3>
                  <p className="body-text text-secondary leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">Coming Soon</span>
                <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
