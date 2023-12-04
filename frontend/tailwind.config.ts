import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#40a4c4",
          "secondary": "#302d6f",
          "accent": "#8b8b8b",
          "neutral": "#2a262c",
          "base-100": "#ffffff",
          "base-200": "#e1dfdb",
          // "info": "#18b5ff",
          // "success": "#00b366",
          // "warning": "#ef6700",
          // "error": "#f0265c",
        },
        dark: {
          "primary": "#40a4c4",
          "secondary": "#302d6f",
          "accent": "#8b8b8b",
          "neutral": "#2a262c",
          "base-100": "#e1dfdb",
          // "info": "#18b5ff",
          // "success": "#00b366",
          // "warning": "#ef6700",
          // "error": "#f0265c",
        },
      },
    ],
  },
}
export default config
