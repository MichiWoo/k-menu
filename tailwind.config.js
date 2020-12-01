module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    colors: {
      light: {
        default: '#fdfafa',
        primary: '#FF8626',
        secondary: '#2693ff',
        accent: '#1b67b3',
        danger: '#ffd826',
        text: '#252e42',
        transparent: 'transparent'
      },
      dark: {
        default: '#252e42',
        primary: '#09e1fd',
        secondary: '#06a6b1',
        accent: '#c2fbff',
        danger: '#84f7ff',
        text: '#ebf1f4',
        transparent: 'transparent'
      }
    }
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive',
      'group-hover',
      'even',
      'odd',
      'focus'
    ],
    borderColor: [
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active',
      'dark-focus-within',
      'hover',
      'responsive',
      'group-hover',
      'focus'
    ],
    textColor: ['focus', 'dark', 'dark-hover', 'dark-focus', 'dark-active', 'hover', 'responsive', 'group-hover'],
    gradientColorStops: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive', 'group-hover'],
    divideColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive', 'group-hover'],
    ringColor: ['focus', 'dark', 'dark-hover', 'dark-focus', 'dark-active', 'hover', 'responsive', 'group-hover'],
    ringWidth: ['focus', 'dark', 'dark-hover', 'dark-focus', 'dark-active', 'hover', 'responsive', 'group-hover']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ]
}
