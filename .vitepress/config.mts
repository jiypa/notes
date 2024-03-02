import { defineConfig, type DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "寄依的笔记本",
  description: "无笔记不学习，无复习不学习",
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.png',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '技术',
        items: [
          { text: '前端', link: '/technology/fe/' },
          { text: '后端', link: '/technology/be/' },
        ]
      },
    ],

    sidebar: {
      '/technology/fe/': sidebarFrontEnd(),
      '/technology/be/': sidebarBackEnd(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jiypa' },
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2023-2024 寄依',
    },

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      level: 'deep',
      label: '页面导航',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
});

function sidebarFrontEnd(): DefaultTheme.SidebarItem[] {
  const baseUrlOfBooks = '/technology/fe/books';
  const baseUrlOfArticles = '/technology/fe/articles';
  const chapters = [
    '01. 什么是 JS',
    '02. HTML 中的 JS',
    '03. 语言基础',
    '04. 变量、作用域与内存',
    '05. 基本引用类型',
    '06. 集合引用类型',
    '07. 迭代器与生成器',
    '08. 对象、类与面向对象编程',
    '09. 代理与反射',
    '10. 函数',
    '11. 期约与异步函数',
    '12. BOM',
    '13. 客户端检测',
    '14. DOM',
    '15. DOM 扩展',
    '16. DOM2 和 DOM3',
    '17. 事件',
    '18. 动画与 Canvas 图形',
    '19. 表单脚本',
    '20. JS API',
    '21. 错误处理与调试',
    '22. 处理 XML',
    '23. JSON',
    '24. 网络请求与远程资源',
    '25. 客户端存储',
    '26. 模块',
    '27. 工作者线程',
    '28. 最佳实践',
  ];

  return [
    {
      text: '前端',
      items: [
        {
          text: '书籍',
          collapsed: true,
          items: [
            {
              text: 'JS高级程序设计',
              collapsed: true,
              items: chapters.map((chapter, index) => {
                return { text: chapter, link: `${baseUrlOfBooks}/JS高级程序设计/chapter-${index < 9 ? `0${index + 1}` : index + 1}` };
              }),
            },
          ],
        },
        {
          text: '视频',
          collapsed: true,
          items: [],
        },
        {
          text: '文章',
          collapsed: true,
          items: [
            {
              text: '大前端面试宝典',
              link: `${baseUrlOfArticles}/大前端面试宝典`,
            },
          ],
        },
      ]
    }
  ];
}

function sidebarBackEnd(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '后端',
      items: [
        {
          text: '书籍',
          collapsed: true,
          items: [],
        },
        {
          text: '视频',
          collapsed: true,
          items: [],
        },
        {
          text: '文章',
          collapsed: true,
          items: [],
        },
      ],
    }
  ];
}
