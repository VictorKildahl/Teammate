const ramps = {
  blue: {
    100: '#DBEDF9',
    300: '#CDE6F6',
    400: '#4BA4DF',
    500: '#1E86C3',
    600: '#4682C2',
    700: '#2A3D55',
  },
  brand: {
    400: '#58CDF4',
    500: '#143C8A',
    600: '#053775',
  },
  gradient: {
    300: '#E9ECEF',
    500: '#034795',
  },
  gray: {
    100: '#F8F8F8',
    200: '#ECECEC',
    300: '#DEE2E6',
    400: '#CCCCCC',
    450: '#ACACAC',
    500: '#7C7D7F',
    600: '#666666',
    700: '#454545',
    800: '#333333',
    900: '#212529',
  },
  green: {
    200: '#CDF0D2',
    300: '#B9EAC0',
    400: '#46C292',
    500: '#04B51D',
    600: '#4E8929',
  },
  red: {
    200: '#F9E1E1',
    300: '#F7D5D5',
    400: '#E36A6A',
    500: '#D20328',
    600: '#CF0013',
  },
  yellow: {
    200: '#FFF7CC',
    300: '#FFF4B8',
    400: '#FFD800',
    500: '#FFB500',
    600: '#C1A962',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        jysk: {
          // Exports semantic color names for use in the UI.
          // All colors-values is defined in ./color-ramps.js, autogenerated from the offical colors,
          // via Figma: https://www.figma.com/file/OBAXRhbIPh9ZguFGCR2eZh/jysk-components?node-id=59%3A2
          //
          // usage: bg-jysk-silver
          DEFAULT: ramps.brand['500'],
          brand: ramps.brand,
          red: ramps.red,
          green: ramps.green,
          blue: ramps.blue,
          yellow: ramps.yellow,
          section: ramps.blue['700'],
          border: ramps.gray['300'],
          success: ramps.green['500'],
          danger: ramps.red['400'],
          warning: ramps.yellow['400'],
          info: ramps.blue['400'],
          rating: ramps.yellow['500'],
          // are these used?
          outofstock: ramps.red['600'],
          save: ramps.red['500'],
          silver: ramps.gray['500'],
          // sticker variants
          basic: ramps.blue['500'],
          plus: ramps.gray['500'],
          gold: ramps.yellow['600'],
          onlyOnline: ramps.brand['400'],
          onlyInStore: ramps.gray['600'],
          campaign: ramps.red['500'],
          coupon: ramps.red['500'],
          specialSale: ramps.red['500'],
          new: ramps.gray['800'],
          discount: ramps.red['500'],
          whileStockLasts: ramps.red['500'],
          // sticker variants (POS only?)
          pending: ramps.yellow['400'], // unknown color
          ready: ramps.green['500'],
          overdue: ramps.red['400'],
          completed: ramps.gray['300'],
          cancelled: ramps.blue['300'], // unknown color
          gradients: {
            'blue-dark': ramps.gradient['500'],
            'blue-light': ramps.brand['500'],
            'grey-light': ramps.gray['200'],
            'grey-dark': ramps.gradient['300'],
          },
        },
        primary: {
          100: 'hsl(221, 76%, 95%)',
          200: 'hsl(219, 74%, 85%)',
          300: 'hsl(220, 75%, 75%)',
          400: 'hsl(220, 74%, 65%)',
          500: 'hsl(220, 75%, 55%)',
          600: 'hsl(220, 75%, 45%)',
          700: 'hsl(220, 74%, 35%)',
          800: 'hsl(220, 75%, 25%)',
          900: 'hsl(220, 74%, 15%)',
        },
        gray: ramps.gray,
      },
      animation: {
        spinner: 'fade-out 1.2s linear infinite;',
      },
      keyframes: {
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
