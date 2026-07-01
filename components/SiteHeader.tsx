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

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    
    // Check initial theme state
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')

    return () => window.removeEventListener('scroll', fn)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 page-margin transition-all duration-500 flex items-center justify-between"
        style={{
          height: scrolled ? '80px' : '132px',
          background: scrolled ? 'var(--paper)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-line)' : '1px solid transparent',
        }}
      >
        <Link href="/" className="flex items-center">
          <TransparentLogo
            height={scrolled ? 50 : 72}
            className="transition-all duration-300 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="type-label-botanical !text-moss hover:!text-ink transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-moss hover:text-ink transition-colors focus:outline-none"
            aria-label="Toggle light/dark theme"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            )}
          </button>

          <Link
            href="/distributors"
            className="type-label-botanical hover:underline underline-offset-4"
          >
            Partner ↗
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="text-moss hover:text-ink transition-colors focus:outline-none"
            aria-label="Toggle light/dark theme"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            )}
          </button>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="type-label-botanical !text-moss"
            aria-label="Toggle menu"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-paper flex flex-col justify-center page-margin">
          <nav className="flex flex-col gap-8">
            {LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="type-editorial-headline text-ink hover:text-clay transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/distributors"
              className="type-editorial-headline text-clay mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Partner ↗
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
