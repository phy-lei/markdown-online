import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),

    presetTypography({
      cssExtend: {
        'ul,ol': {
          'padding-left': '2.25em',
          'position': 'relative',
        },
        'screens': {
          '2xl': '1360px',
        },
      },
    }),
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
