import comp from "E:/R-blog/src/.vuepress/.temp/pages/keyan/videoDialog/index.html.vue"
const data = JSON.parse("{\"path\":\"/keyan/videoDialog/\",\"title\":\"Video Dialog\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Video Dialog\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Video Dialog\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/keyan/videoDialog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\" \"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Video Dialog\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
