module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/*.{js,jsx,ts,tsx,vue}',
      './pages/**/*.{js,jsx,ts,tsx,vue}',
      './components/*.{js,jsx,ts,tsx,vue}',
      './components/**/*.{js,jsx,ts,tsx,vue}',
    ],
  },
}
