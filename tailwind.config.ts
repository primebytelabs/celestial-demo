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
        moss:    'var(--moss)',
        clay:    'var(--clay)',
        leaf:    'var(--leaf)',
        mist:    'var(--mist)',
        // compat mapping
        black:   'var(--ink)',
        white:   'var(--paper)',
        'grey-1':'var(--mist)',
        'grey-2':'#E5E0D8',
        'grey-3':'var(--moss)',
        'grey-4':'#768C7C',
        signal:  'var(--clay)',
        line:    'var(--border-line)',
      },
      fontFamily: {
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
