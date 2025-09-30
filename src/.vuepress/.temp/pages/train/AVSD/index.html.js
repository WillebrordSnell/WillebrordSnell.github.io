import comp from "E:/R-blog/src/.vuepress/.temp/pages/train/AVSD/index.html.vue"
const data = JSON.parse("{\"path\":\"/train/AVSD/\",\"title\":\"AVSD\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"AVSD\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"AVSD\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/train/AVSD/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\" \"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"AVSD\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
