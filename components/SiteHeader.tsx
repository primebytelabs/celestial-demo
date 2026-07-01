'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { TransparentLogo } from '@/components/TransparentLogo'

const LINKS = [
  { label: 'Science', href: '/#research' },
  { label: 'Products', href: '/products' },
  { label: 'Manufacturing', href: '/#manufacturing' },
  { label: 'Distributors', href: '/distributors' },
]

function ThemeToggle({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light'
    setTheme(current)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch (_) {}
    setTheme(next)
  }

  const s = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'

  return (
    <button
      onClick={toggle}
      className="grid place-items-center rounded-full p-2 transition-colors"
      style={{ color: 'var(--secondary)' }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={s}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={s}>
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 page-margin flex items-center justify-between transition-all duration-300"
        style={{
          height: scrolled ? '68px' : '92px',
          background: scrolled
            ? 'color-mix(in srgb, var(--paper) 72%, transparent)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(14px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(1.4)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        }}
      >
        <Link href="/" aria-label="Celestial Biolabs — home" className="flex items-center">
          <TransparentLogo height={scrolled ? 34 : 44} className="transition-all duration-300" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--secondary)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link href="/distributors" className="btn-primary !py-2.5 !px-5 text-sm">
            Partner with us
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle size="sm" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md px-3 py-2 text-sm font-medium"
            style={{ color: 'var(--ink)' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-center page-margin"
          style={{ background: 'var(--paper)' }}
        >
          <nav className="flex flex-col gap-7">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="type-display-lg"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/distributors"
              className="btn-primary mt-4 self-start"
              onClick={() => setMenuOpen(false)}
            >
              Partner with us
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
