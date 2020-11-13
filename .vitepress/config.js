const path = require('path');

module.exports = {
  title: '<%= projectName %>',
  description: '<%= description %>',
  themeConfig: {
    logo: '',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'en-US',
    locales: {
      '/': {
        lang: 'en-US',
        title: '<%= projectName %>',
        description: '<%= description %>',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: [
          {
            text: '123',
            link: '/',
          },
        ],
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: '{user}{project}',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
  alias: {
    // 要使用到docs外的文件，增加这样的alias
    '/math/': path.resolve(__dirname, '../../src/'),
  },
  viteOptions: {},
};
