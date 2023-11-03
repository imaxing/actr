import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

export default [
  { name: pkg.rollUpBuildName, file: pkg.browser, format: 'umd', exports: 'named' },
  { file: pkg.main, format: 'es' }
].map(output => ({
  input: 'src/index.ts',
  output,
  plugins: [typescript(), terser()]
}))
