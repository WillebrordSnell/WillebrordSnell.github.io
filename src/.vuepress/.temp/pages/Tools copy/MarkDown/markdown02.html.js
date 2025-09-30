import comp from "E:/R-blog/src/.vuepress/.temp/pages/Tools copy/MarkDown/markdown02.html.vue"
const data = JSON.parse("{\"path\":\"/Tools%20copy/MarkDown/markdown02.html\",\"title\":\"Vuepress组件库\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":2,\"date\":\"2023-07-22T00:00:00.000Z\",\"category\":[\"Markdown\"],\"description\":\"SiteInfo component, can be used as friend link or project display.\"},\"readingTime\":{\"minutes\":0.42,\"words\":125},\"filePathRelative\":\"Tools copy/MarkDown/markdown02.md\",\"excerpt\":\"\\n<p>SiteInfo component, can be used as friend link or project display.</p>\\n\",\"autoDesc\":true}")
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
