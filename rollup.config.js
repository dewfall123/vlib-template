import tsPlugin from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import vuePlugin from 'rollup-plugin-vue';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  external: ['vue', 'vue-demi'],
  plugins: [
    vuePlugin({
      preprocessStyles: true,
      css: true,
    }),
    tsPlugin(),
    nodeResolve(),
    commonjs(),
    alias({
      resolve: ['.jsx', '.js'],
      entries: {},
    }),
  ],
};
