'use client'

import { useEffect, useState } from 'react'

interface TransparentLogoProps {
  className?: string
  height?: number
}

/**
 * Renders the brand logo with its white background stripped to transparency
 * (via canvas), so it sits cleanly on the cream/dark theme surfaces. In dark
 * mode the green artwork is lifted toward bone-white for legibility.
 */
export function TransparentLogo({ className = '', height = 48 }: TransparentLogoProps) {
  const [dataUrl, setDataUrl] = useState<string>('')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const read = () =>
      (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light'
    setTheme(read())
    const obs = new MutationObserver(() => setTheme(read()))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = '/images/logo.png'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.drawImage(img, 0, 0)

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imgData.data
      const dark = theme === 'dark'

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const brightness = (r + g + b) / 3

        // Strip white/near-white background → transparent (soft edge)
        if (brightness > 238) {
          data[i + 3] = 0
        } else if (brightness > 205) {
          const f = (brightness - 205) / (238 - 205)
          data[i + 3] = Math.round(data[i + 3] * (1 - f))
        } else if (dark) {
          // Lift the dark-green artwork toward bone-white for dark surfaces
          data[i] = Math.round(r + (242 - r) * 0.5)
          data[i + 1] = Math.round(g + (243 - g) * 0.5)
          data[i + 2] = Math.round(b + (236 - b) * 0.5)
        }
      }

      ctx.putImageData(imgData, 0, 0)
      setDataUrl(canvas.toDataURL('image/png'))
    }
  }, [theme])

  if (!dataUrl) {
    return <div style={{ height }} className={className} aria-hidden="true" />
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
