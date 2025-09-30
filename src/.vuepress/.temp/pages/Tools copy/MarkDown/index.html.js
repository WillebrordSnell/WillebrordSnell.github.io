import comp from "E:/R-blog/src/.vuepress/.temp/pages/Tools copy/MarkDown/index.html.vue"
const data = JSON.parse("{\"path\":\"/Tools%20copy/MarkDown/\",\"title\":\"Markdown速查表\",\"lang\":\"zh-CN\",\"frontmatter\":{\"sticky\":true,\"star\":true,\"index\":true,\"order\":\"number\",\"date\":\"2023-03-02T00:00:00.000Z\",\"category\":[\"Markdown\"],\"description\":\"本文搬运于我的好bro：https://simeis147.github.io Markdown速查表\"},\"readingTime\":{\"minutes\":1.28,\"words\":385},\"filePathRelative\":\"Tools copy/MarkDown/README.md\",\"excerpt\":\"<p><strong>本文搬运于我的好bro：<a href=\\\"https://simeis147.github.io\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://simeis147.github.io</a></strong></p>\\n<h1>Markdown速查表</h1>\\n\",\"autoDesc\":true}")
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
