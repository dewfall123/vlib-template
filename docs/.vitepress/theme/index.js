import DefaultTheme from 'vitepress-for-component/dist/client/theme-default';
import Layout from './Layout.vue';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  },
};
