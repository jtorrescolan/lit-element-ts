import litSass from '@ponday/rollup-plugin-lit-sass';
import typescript from '@rollup/plugin-typescript';
import styles from "rollup-plugin-styles";
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist'
  },
  plugins: [
    styles({ 
      mode: 'emit', 
      use: ['sass'],
      plugins: [autoprefixer()] 
    }),
    litSass(),
    typescript()
  ]
}
