import litSass from '@ponday/rollup-plugin-lit-sass';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist'
  },
  plugins: [
    litSass(),
    typescript()
  ]
}