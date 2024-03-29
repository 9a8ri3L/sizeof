import { defineConfig } from 'tsup'


export default defineConfig({
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  entry: ['index.ts'],
  cjsInterop: true,
  splitting: true,
})