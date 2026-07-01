'use client'

import { motion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

/**
 * Fade-and-rise on scroll. Uses `whileInView` (not a manual useInView effect)
 * so elements already in the viewport on load animate reliably instead of
 * staying hidden until a resize/scroll forces the observer to recalc.
 */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
