const base = process.env.NODE_ENV === 'production' ? '/vlibTemplate' : '';
const { resolve } = require('path');

module.exports = {
  title: 'vlibTemplate',
  description: '_description',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'vlibTemplate'
    [`vlibTemplate`]: resolve('./src'),
  },
  base,
  themeConfig: {
    // logo: '../logo.svg',
    repo: '_user/vlibTemplate',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
