/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Themes are driven by [data-theme] on <html>; expose a `dark:` variant too.
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Semantic tokens - resolve to CSS vars that flip per theme.
        bg: 'var(--bg)',
        paper: 'var(--paper)',
        chip: 'var(--chip)',
        panel: 'var(--panel)',
        ink: 'var(--ink)',
        ink2: 'var(--ink2)',
        ink3: 'var(--ink3)',
        acc: 'var(--acc)',
        'acc-soft': 'var(--acc-soft)',
        'btn-bg': 'var(--btn-bg)',
        'btn-fg': 'var(--btn-fg)',
      },
      borderColor: {
        line08: 'var(--line08)',
        line10: 'var(--line10)',
        line14: 'var(--line14)',
        line25: 'var(--line25)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        panel: 'var(--shadow-panel)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.2,0.7,0.2,1) both',
        blink: 'blink 1.2s step-end infinite',
        float: 'floatB 6s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
