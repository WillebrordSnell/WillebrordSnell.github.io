import comp from "E:/R-blog/src/.vuepress/.temp/pages/train/DDP/DDP.html.vue"
const data = JSON.parse("{\"path\":\"/train/DDP/DDP.html\",\"title\":\"Pytorch分布式训练\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2023-07-19T00:00:00.000Z\",\"category\":[\"炼丹\"],\"tag\":[\"DDP\",\"分布式\"],\"description\":\"Pytorch分布式训练 本文主要介绍DistributedDataParallel以及DataParallel并行的区别和DDP的原理、方法。 单机多卡并行 常用切分方案有：数据并行、模型并行、通道并行(数据+模型并行) 数据并行：将batch分成n块，每个GPU拿到完整参数计算一块数据的梯度，该方法通常性能更好 模型并行：将模型分成n块，每个GPU...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Pytorch分布式训练\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-07-19T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.R\\\",\\\"url\\\":\\\"https://github.com/WillebrordSnell\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/train/DDP/DDP.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\" \"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Pytorch分布式训练\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Pytorch分布式训练 本文主要介绍DistributedDataParallel以及DataParallel并行的区别和DDP的原理、方法。 单机多卡并行 常用切分方案有：数据并行、模型并行、通道并行(数据+模型并行) 数据并行：将batch分成n块，每个GPU拿到完整参数计算一块数据的梯度，该方法通常性能更好 模型并行：将模型分成n块，每个GPU...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"分布式\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"DDP\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-07-19T00:00:00.000Z\"}]]},\"readingTime\":{\"minutes\":3.41,\"words\":1022},\"filePathRelative\":\"train/DDP/_DDP.md\",\"excerpt\":\"\\n<p>本文主要介绍DistributedDataParallel以及DataParallel并行的区别和DDP的原理、方法。</p>\\n<h2>单机多卡并行</h2>\\n<p>常用切分方案有：数据并行、模型并行、通道并行(数据+模型并行)</p>\\n<p>数据并行：将batch分成n块，每个GPU拿到完整参数计算一块数据的梯度，该方法通常性能更好</p>\\n<p>模型并行：将模型分成n块，每个GPU拿到一块模型计算其前向和方向结果，该方法通常适用于单GPU放不下大模型的情况，这就会导致整个计算过程是串行的，加大了性能优化难度</p>\\n<h3>DDP 与 DP 的区别</h3>\\n<figure><figcaption>数据并行过程</figcaption></figure>\",\"autoDesc\":true}")
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
