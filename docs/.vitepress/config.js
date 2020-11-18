const path = require('path');

const base = process.env.NODE_ENV === 'production' ? '/projectName' : '';

module.exports = {
  title: '<%= projectName %>',
  description: '<%= description %>',
  outDir: '../dist/',
  alias: {
    projectName: '/@src/',
  },
  base,
  themeConfig: {
    logo: '',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '<%= projectName %>',
        description: '<%= description %>',
        label: '中文',
        selectText: '语言',
        nav: [
          { text: '指南', link: '/' },
          { text: '组件', link: '/components/loading/' },
        ],
        sidebar: [
          { text: '介绍', link: '/' },
          {
            text: 'Vue组件',
            link: '/components/',
            children: [
              { text: 'Loading', link: '/components/loading/' },
              { text: 'Button', link: '/components/button/' },
            ],
          },
        ],
      },
      '/en/': {
        lang: 'en-US',
        title: '<%= projectName %>',
        description: '<%= description %>',
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/' },
          { text: 'Components', link: '/components/loading/' },
        ],
        sidebar: [
          { text: 'Getting Started', link: '/' },
          {
            text: 'Vue Components',
            link: '/components/',
            children: [
              { text: 'Loading', link: '/components/loading/' },
              { text: 'Button', link: '/components/button/' },
            ],
          },
        ],
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: '{user}<%= projectName %>',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
