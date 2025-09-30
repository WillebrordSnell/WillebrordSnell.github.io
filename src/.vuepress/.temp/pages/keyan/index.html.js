import comp from "E:/R-blog/src/.vuepress/.temp/pages/keyan/index.html.vue"
const data = JSON.parse("{\"path\":\"/keyan/\",\"title\":\"这是一个码头\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"这是一个码头\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"码头\"],\"description\":\"整点论文\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"这是一个码头\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.R\\\",\\\"url\\\":\\\"https://github.com/WillebrordSnell\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/keyan/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\" \"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"这是一个码头\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"整点论文\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.13,\"words\":40},\"filePathRelative\":\"keyan/README.md\",\"excerpt\":\"<h2>整点论文</h2>\\n<ul>\\n<li>\\n<p><a href=\\\"/keyan/videoUnderstanding/_videoUnderstanding.html\\\" target=\\\"_blank\\\">视频理解</a></p>\\n</li>\\n<li>\\n<p><a href=\\\"/keyan/videoRepresentation/_videoRepresentation.html\\\" target=\\\"_blank\\\">视频理解2</a></p>\\n</li>\\n<li>\\n<p><a href=\\\"/keyan/videoDialog/_videoDialog.html\\\" target=\\\"_blank\\\">视频对话</a></p>\\n</li>\\n<li>\\n<p><a href=\\\"/keyan/contrastiveLearning/_contrastiveLearning.html\\\" target=\\\"_blank\\\">对比学习</a></p>\\n</li>\\n</ul>\",\"autoDesc\":true}")
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
