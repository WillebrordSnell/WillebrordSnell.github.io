import comp from "E:/R-blog/src/.vuepress/.temp/pages/train/AVSD/AVSD.html.vue"
const data = JSON.parse("{\"path\":\"/train/AVSD/AVSD.html\",\"title\":\"AVSD配置或实验记录\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2023-10-09T00:00:00.000Z\",\"category\":[\"炼丹\"],\"tag\":[\"DDP\",\"分布式\"],\"description\":\"AVSD配置或实验记录 实验配置须知 实验环境： GeForce RTX 3090 × 2 服务器 env：avsd batch size： 32 64(单卡会爆显存)：也就是说baseline上，一张3090最多把B设置成32 模板：https://www.sciencedirect.com/journal/computer-vision-and-i...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"AVSD配置或实验记录\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-10-09T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.R\\\",\\\"url\\\":\\\"https://github.com/WillebrordSnell\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/train/AVSD/AVSD.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\" \"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"AVSD配置或实验记录\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"AVSD配置或实验记录 实验配置须知 实验环境： GeForce RTX 3090 × 2 服务器 env：avsd batch size： 32 64(单卡会爆显存)：也就是说baseline上，一张3090最多把B设置成32 模板：https://www.sciencedirect.com/journal/computer-vision-and-i...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"分布式\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"DDP\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-10-09T00:00:00.000Z\"}]]},\"readingTime\":{\"minutes\":1.54,\"words\":463},\"filePathRelative\":\"train/AVSD/_AVSD.md\",\"excerpt\":\"\\n<h2>实验配置须知</h2>\\n<p>实验环境： GeForce RTX 3090  × 2<br>\\n服务器 env：avsd</p>\\n<p>batch size： 32 64(单卡会爆显存)：也就是说baseline上，一张3090最多把B设置成32</p>\\n<p>模板：<a href=\\\"https://www.sciencedirect.com/journal/computer-vision-and-image-understanding/publish/guide-for-authors#20040\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://www.sciencedirect.com/journal/computer-vision-and-image-understanding/publish/guide-for-authors#20040</a></p>\",\"autoDesc\":true}")
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
