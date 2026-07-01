'use client'

import { Reveal } from '@/components/Reveal'

export function LatestNewsSection() {
  return (
    <section id="news" className="section-gap bg-paper page-margin border-t border-line">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
        <div>
          <p className="type-label-botanical mb-6">08 / Announcements</p>
          <h2 className="type-editorial-headline text-ink">Latest News</h2>
        </div>
        <Reveal>
          <div className="border border-line bg-mist/50 p-10 md:p-14">
            <h3 className="type-editorial-title text-ink font-bold mb-4">CMS Integration Pending</h3>
            <p className="text-moss text-lg leading-relaxed mb-6">
              Latest company announcements will appear here.
            </p>
            <p className="text-moss text-base leading-relaxed">
              Industry insights, regulatory filings, and product portfolio updates will be published through the content management system once integrated.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
