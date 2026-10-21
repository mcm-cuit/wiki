import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MCM-CUIT Wiki",
  description: "成都信息工程大学 学生数学建模协会 Wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '主页', link: 'https://mcm-cuit.wiki/'},
      {text: '文件管理', link: 'https://file.mcm-cuit.wiki/'},
      {text: '优秀论文', link: 'https://mcm-cuit.wiki/lunwen-jiangping.html'},
    ],

    sidebar: [
      {
        text: '开始',
        link: '/开始/',
        items: [
          {text: '数学建模', link: '/开始/数学建模'},
          {text: '学生数学建模协会', link: '/todo'},
        ]
      },
      {
        text: 'Examples',
        items: [
          {text: 'Markdown Examples', link: '/markdown-examples'},
          {text: 'Runtime API Examples', link: '/api-examples'}
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/mcm-cuit/wiki/'}
    ]
  }
})
