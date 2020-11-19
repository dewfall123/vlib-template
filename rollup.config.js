import typescript from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import vuePlugin from 'rollup-plugin-vue';
// TODO rollup-plugin-vue doesn't support inject css,
// so have to use this plugin
import css from 'rollup-plugin-css-only';

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
    css({ output: 'dist/index.css' }),
    typescript(),
    nodeResolve(),
    commonjs(),
    alias({
      resolve: ['.jsx', '.js'],
      entries: {},
    }),
  ],
};
