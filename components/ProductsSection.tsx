'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { proprietaryProducts } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger)

/**
 * Products displayed as a stacked list — each product is a full-width row.
 * On hover, the row expands subtly and the product name shifts.
 * 
 * This is NOT a card grid. It's a typographic list — like a menu at a
 * high-end restaurant. The product name IS the design.
 */
export function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = sectionRef.current?.querySelectorAll('.product-row')
      if (!rows) return

      gsap.fromTo(rows,
        { opacity: 0, yPercent: 20 },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-gap bg-black page-margin">
      <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="type-mono-sm text-signal mb-6">Product Portfolio</p>
          <h2 className="type-large text-white">
            Proprietary<br />formulations.
          </h2>
        </div>
        <Link
          href="/products"
          className="type-mono-sm text-grey-3 hover:text-white transition-colors self-start md:self-auto"
        >
          View all 68+ formulations ↗
        </Link>
      </div>

      <div>
        {proprietaryProducts.map((product, i) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="product-row group block border-t border-white/[0.06] last:border-b opacity-0"
          >
            <div className="flex items-center justify-between py-6 md:py-8 transition-all duration-300 group-hover:py-10 md:group-hover:py-12">
              <div className="flex items-baseline gap-6">
                <span className="type-mono-sm text-grey-3 w-8 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-4">
                  {product.name}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="type-mono-sm text-grey-3 hidden md:block">Proprietary</span>
                <span className="text-grey-3 transition-all duration-300 group-hover:text-signal group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
