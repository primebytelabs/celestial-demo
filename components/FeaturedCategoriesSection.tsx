'use client'

import { Reveal } from '@/components/Reveal'
import { productCategories } from '@/lib/content'
import { LeafIcon } from '@/components/LeafIcon'
import Link from 'next/link'

export function FeaturedCategoriesSection() {
  return (
    <section id="categories" className="section-gap bg-paper page-margin border-t border-line">
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="type-label-botanical mb-6">05 / Product Classifications</p>
          <h2 className="type-editorial-headline text-ink">Featured Categories</h2>
        </div>
        <Link
          href="/products"
          className="type-label-botanical hover:text-ink transition-colors self-start md:self-auto underline underline-offset-4"
        >
          View all categories ↗
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {productCategories.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 0.05}>
            <div className="border border-line bg-mist/50 p-8 md:p-10 flex flex-col justify-between min-h-[260px] group hover:border-leaf/30 transition-all duration-300">
              <div>
                <div className="flex justify-between items-start">
                  <span className="type-label-botanical !text-moss">Category {String(i + 1).padStart(2, '0')}</span>
                  <LeafIcon className="h-5 w-5 text-moss group-hover:text-leaf transition-colors" />
                </div>
                <h3 className="type-editorial-title text-ink font-bold mt-4 mb-3">
                  {cat.label}
                </h3>
                <p className="text-moss text-sm leading-relaxed max-w-sm">
                  {cat.description}
                </p>
              </div>
              <div className="mt-8 flex justify-between items-center pt-6 border-t border-line">
                <span className="type-label-botanical !text-moss">Catalogue Coming Soon</span>
                <span className="text-moss group-hover:text-leaf transition-colors">→</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
