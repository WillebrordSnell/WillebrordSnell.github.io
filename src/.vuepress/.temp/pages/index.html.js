import comp from "E:/R-blog/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"主页\",\"layout\":\"Blog\",\"heroText\":\"日拱一卒 功不唐捐\",\"heroFullScreen\":true,\"bgImage\":\"/assets/images/bgImage.jpg\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"主页\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\" \"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.66,\"words\":198},\"filePathRelative\":\"README.md\",\"excerpt\":\"<!-- \\n要使用主页布局，应该在页面前端设置 `layout: BlogHome` 和 `home: true`。\\n\\n相关配置文档请见 [博客主页](https://theme-hope.vuejs.press/zh/guide/blog/home/)。\\n -->\\n<!-- \\nprojects:\\n  - icon: project\\n    name: 项目名称\\n    desc: 项目详细描述\\n    link: https://你的项目链接\\n\\n  - icon: link\\n    name: 链接名称\\n    desc: 链接详细描述\\n    link: https://链接地址\\n\\n  - icon: book\\n    name: 书籍名称\\n    desc: 书籍详细描述\\n    link: https://你的书籍链接\\n\\n  - icon: article\\n    name: 文章名称\\n    desc: 文章详细描述\\n    link: https://你的文章链接\\n\\n  - icon: friend\\n    name: 伙伴名称\\n    desc: 伙伴详细介绍\\n    link: https://你的伙伴链接\\n\\n  - icon: /logo.svg\\n    name: 自定义项目\\n    desc: 自定义详细介绍\\n    link: https://你的自定义链接\\n -->\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
