'use client'

import { useEffect, useState } from 'react'

interface TransparentLogoProps {
  className?: string
  height?: number
}

export function TransparentLogo({ className = '', height = 64 }: TransparentLogoProps) {
  const [dataUrl, setDataUrl] = useState<string>('')
  const [isDark, setIsDark] = useState<boolean>(false)

  // Listen to html class mutations to check if dark mode is active
  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    checkDark()

    const observer = new MutationObserver(() => {
      checkDark()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  // Load the logo SVG
  useEffect(() => {
    setDataUrl('/images/new-logo.svg')
  }, [])

  if (!dataUrl) {
    return <div style={{ height }} className={className} />
  }

  return (
    <img
      src={dataUrl}
      alt="Celestial Biolabs Limited"
      className={className}
      style={{ height, width: 'auto' }}
    />
  )
}
