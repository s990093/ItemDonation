// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // 根据项目的实际文件路径配置
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // lighter blue
        secondary: '#1E40AF', // darker blue
        background: '#1E3A8A', // main background blue
      },
      maxWidth: {
        'lg': '55rem',
      },
      maxheight: {
        'lg': '50rem',
      },
      animation: {
        'fade-in-out': 'fade-in-out 3s forwards', // Define fade-in-out animation
      },
      keyframes: {
        'fade-in-out': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '20%': { opacity: '1', transform: 'scale(1)' },
          '80%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
