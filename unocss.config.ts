import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  presetIcons
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.1,
      cdn: 'https://esm.sh/',
    }),
    presetAttributify(),
    presetTypography(),
  ],
  theme: {
    breakpoints: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'xxl': '1536px',
    },
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],

})
