import { resolve } from 'path';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  optimizeDeps: {
    include: [],
    exclude: [],
  },
  plugins: [],
  build: {
    minify: true,
    lib: {
      entry: resolve('./src/index.ts'),
      name: 'vlibTemplate',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
      },
    },
  },
};
