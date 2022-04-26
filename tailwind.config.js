module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        allison: ['Allison Regular'],
        nunito: ['Nunito']
      },
      boxShadow: {
        md: '0 4px 4px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        brown: {
          100: '#dedbdb',
          200: '#cec9c8',
          300: '#bdb7b6',
          400: '#ada6a4',
          500: '#9d9492',
          600: '#8c8280',
          700: '#7c706d',
          800: '#6b5e5b',
          900: '#5B4C49'
        },
        orange: {
          100: '#fbf2ea',
          200: '#f3d7c0',
          300: '#efc9ab',
          400: '#ecbc97',
          500: '#e8ae82',
          600: '#e4a16d',
          700: '#e09358',
          800: '#dc8643',
          900: '#d8782e'
        },
        mocha: {
          100: '#fbf8f5',
          200: '#f8f5f0',
          300: '#f6f1eb',
          400: '#f4eee6',
          500: '#f2ebe1',
          600: '#f0e7dc',
          700: '#ede4d7',
          800: '#ebe0d2',
          900: '#e9ddcd'
        },
        navy: {
          100: '#dadfe1',
          200: '#c7cfd3',
          300: '#b4bfc4',
          400: '#a2afb5',
          500: '#8f9ea6',
          600: '#7c8e97',
          700: '#697e89',
          800: '#576e7a',
          900: '#445e6b'
        },
        sky: {
          100: '#f2f5f7',
          200: '#ebf0f3',
          300: '#e4ebef',
          400: '#dee6eb',
          500: '#d7e1e7',
          600: '#d0dce3',
          700: '#c9d7df',
          800: '#c3d2db',
          900: '#bccdd7'
        },
        yellow: {
          100: '#fdfbcc',
          200: '#fcfab3',
          300: '#fbf899',
          400: '#faf680',
          500: '#f9f466',
          600: '#f8f24d',
          700: '#f7f133',
          800: '#f6ef1a',
          900: '#f5ed00'
        },
        'dark-ash': '#2D2D2D'
      }
    }
  },
  plugins: []
};
