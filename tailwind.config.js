module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    colors: {
      light: {
        default: '#ebf1f4',
        primary: '#FF8626',
        secondary: '#2693ff',
        accent: '#1b67b3',
        danger: '#ffd826',
        text: '#252e42'
      },
      dark: {
        default: '#252e42',
        primary: '#3adbb9',
        secondary: '#29998b',
        accent: '#d0fff9',
        danger: '#a1fff3',
        text: '#ebf1f4'
      }
    }
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive',
      'group-hover',
      'even',
      'odd'
    ],
    borderColor: [
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active',
      'dark-focus-within',
      'hover',
      'responsive',
      'group-hover'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive', 'group-hover'],
    gradientColorStops: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive', 'group-hover'],
    divideColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive', 'group-hover']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ]
}
