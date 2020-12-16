const base = process.env.NODE_ENV === 'production' ? '/vlibTemplate' : '';

module.exports = {
  title: 'vlibTemplate',
  description: '_description',
  outDir: '../dist/',
  alias: {
    // 把demo 文件引用指向正确地址
    vlibTemplate: '/@src/',
  },
  base,
  themeConfig: {
    logo: '',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'vlibTemplate',
        description: '_description',
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
            children: [
              { text: 'Loading', link: '/components/loading/' },
              { text: 'Button', link: '/components/button/' },
            ],
          },
        ],
      },
      '/en/': {
        lang: 'en-US',
        title: 'vlibTemplate',
        description: '_description',
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/' },
          { text: 'Components', link: '/components/loading/' },
        ],
        sidebar: [
          { text: 'Getting Started', link: '/en/' },
          {
            text: 'Components',
            children: [
              { text: 'Loading', link: '/en/components/loading/' },
              { text: 'Button', link: '/en/components/button/' },
            ],
          },
        ],
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: '{user}/vlibTemplate',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
