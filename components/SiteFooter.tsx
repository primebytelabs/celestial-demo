import { company, investorLink } from '@/lib/content'
import Link from 'next/link'
import { TransparentLogo } from '@/components/TransparentLogo'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-mist/30 page-margin">
      {/* Ghost watermark */}
      <p
        className="absolute -bottom-[0.2em] left-0 right-0 text-center font-serif tracking-tight text-ink/[0.02] select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(6rem, 18vw, 16rem)' }}
        aria-hidden="true"
      >
        CELESTIAL
      </p>

      <div className="relative z-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr] mb-20">
          <div>
            <div className="mb-6 flex items-center">
              <TransparentLogo height={58} />
            </div>
            <p className="text-moss text-sm leading-relaxed max-w-xs">
              Ayurvedic and pharmaceutical formulations manufacturing. Registered office in Hyderabad, India. Est. 1997.
            </p>
          </div>

          <div>
            <p className="type-label-botanical mb-5">Quick Links</p>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/#about' },
                { label: 'Expertise', href: '/#expertise' },
                { label: 'Manufacturing', href: '/#manufacturing' },
                { label: 'Products', href: '/products' },
                { label: 'Distributors', href: '/distributors' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-moss hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="type-label-botanical mb-5">Regulatory</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={investorLink.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-moss hover:text-ink transition-colors"
                >
                  {investorLink.label} ↗
                </a>
              </li>
              <li className="text-sm text-moss">CIN: {company.cin}</li>
              <li className="text-sm text-moss">ISIN: {company.isin}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="type-label-botanical !text-moss">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p className="type-label-botanical !text-moss">
            BSE Listed Scrip: {company.bseScrip}
          </p>
        </div>
      </div>
    </footer>
  )
}
