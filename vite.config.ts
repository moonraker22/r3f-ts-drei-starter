import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [glsl()],
})

// Glsl plugin options
// https://github.com/UstymUkhman/vite-plugin-glsl

// glsl({
//   include: [
//     // Glob pattern, or array of glob patterns to import
//     '**/*.glsl',
//     '**/*.wgsl',
//     '**/*.vert',
//     '**/*.frag',
//     '**/*.vs',
//     '**/*.fs',
//   ],
//   exclude: undefined, // Glob pattern, or array of glob patterns to ignore
//   warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
//   defaultExtension: 'glsl', // Shader suffix when no extension is specified
//   compress: false, // Compress output shader code
//   watch: true, // Recompile shader on change
//   root: '/', // Directory for root imports
// })
