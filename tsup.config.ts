import { defineConfig } from 'tsup'


export default defineConfig({
  clean: true,
  minify: true,
  sourcemap: true,
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  entry: ['index.ts']
})