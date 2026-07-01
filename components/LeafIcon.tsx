'use client'

interface LeafIconProps {
  className?: string
}

export function LeafIcon({ className = 'h-6 w-6 text-leaf' }: LeafIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Organic hand-drawn leaf style path */}
      <path d="M2 22C2 22 6 18 12 18C18 18 22 22 22 22" />
      <path d="M12 2C12 2 4 8 4 14C4 18.5 7.5 22 12 22C16.5 22 20 18.5 20 14C20 8 12 2 12 2Z" />
      <path d="M12 2V22" />
      <path d="M12 8C12 8 8 10 7 13" />
      <path d="M12 11C12 11 16 13 17 16" />
      <path d="M12 14C12 14 9 16 8 18" />
    </svg>
  )
}
