import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: "'Archivo Black', sans-serif",
      styles: ['300', '400', '700'],
    },
  ],
  bodyFontFamily: ['Archivo Black', 'sans-serif'],
  headerFontFamily: ['Archivo Black', 'sans-serif'],
})

export default typography
