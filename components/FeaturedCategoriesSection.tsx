'use client'

import { Reveal } from '@/components/Reveal'
import { productCategories } from '@/lib/content'
import Link from 'next/link'

export function FeaturedCategoriesSection() {
  return (
    <section id="categories" className="section-gap bg-paper page-margin">
      {/* Split two-line headline */}
      <div className="mb-16 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="label-kicker mb-6">Our Portfolio</span>
          <h2 className="type-display-xl">
            Our Business
            <br />
            <span className="text-accent">Verticals</span>
          </h2>
        </div>
        <Link href="/products" className="btn-secondary self-start">
          View all products →
        </Link>
      </div>

      {/* Verticals grid — clickable cards, hover animation */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {productCategories.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 0.08}>
            <Link href="/products" className="vertical-card group block">
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="type-display-md mb-3">{cat.label}</h3>
                <p className="body-text text-secondary mb-6 max-w-md leading-relaxed">
                  {cat.description}
                </p>
                <span className="label-kicker-accent inline-flex items-center gap-2 text-sm font-semibold">
                  Explore vertical
                  <span className="arrow">↗</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
