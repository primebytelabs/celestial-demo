import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper:   'var(--paper)',
        ink:     'var(--ink)',
        accent:  'var(--accent)',
        secondary: 'var(--secondary)',
        border:  'var(--border)',
        mist:    'var(--mist)',
        // legacy compat
        moss:    'var(--secondary)',
        clay:    'var(--secondary)',
        leaf:    'var(--accent)',
        black:   'var(--ink)',
        white:   'var(--paper)',
        'grey-1':'var(--mist)',
        'grey-2':'var(--border)',
        'grey-3':'var(--secondary)',
        'grey-4':'var(--secondary)',
        signal:  'var(--secondary)',
        line:    'var(--border)',
      },
      fontFamily: {
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif:   ['var(--font-serif)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      spacing: {
        'xs': 'var(--s-xs)',
        'sm': 'var(--s-sm)',
        'md': 'var(--s-md)',
        'lg': 'var(--s-lg)',
        'xl': 'var(--s-xl)',
        '2xl': 'var(--s-2xl)',
        '3xl': 'var(--s-3xl)',
        '4xl': 'var(--s-4xl)',
      },
    },
  },
  plugins: [],
}
export default config
