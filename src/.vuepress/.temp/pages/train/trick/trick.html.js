import comp from "E:/R-blog/src/.vuepress/.temp/pages/train/trick/trick.html.vue"
const data = JSON.parse("{\"path\":\"/train/trick/trick.html\",\"title\":\"炼丹术\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2023-10-09T00:00:00.000Z\",\"category\":[\"炉\"],\"tag\":[\"炼丹技巧\"],\"description\":\"炼丹术 本文旨在记录一些炼丹技巧减少炼丹时间 使用预训练网络，如果整个网络都做微调的话，dropout设置0.5~0.9都是ok的，因为即使数据集太小，由于是整个网络参数都会改变的情况下也不大会发生过拟合的情况；但如果是锁住骨干网络，只做最后一层的微调的话就不用担心过拟合的问题，0.5左右的dropout反而会更好，但如果0.9的话就太多信息丢失了 t...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"炼丹术\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-10-09T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.R\\\",\\\"url\\\":\\\"https://github.com/WillebrordSnell\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/train/trick/trick.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\" \"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"炼丹术\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"炼丹术 本文旨在记录一些炼丹技巧减少炼丹时间 使用预训练网络，如果整个网络都做微调的话，dropout设置0.5~0.9都是ok的，因为即使数据集太小，由于是整个网络参数都会改变的情况下也不大会发生过拟合的情况；但如果是锁住骨干网络，只做最后一层的微调的话就不用担心过拟合的问题，0.5左右的dropout反而会更好，但如果0.9的话就太多信息丢失了 t...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"炼丹技巧\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-10-09T00:00:00.000Z\"}]]},\"readingTime\":{\"minutes\":0.7,\"words\":211},\"filePathRelative\":\"train/trick/_trick.md\",\"excerpt\":\"\\n<p><strong>本文旨在记录一些炼丹技巧减少炼丹时间</strong></p>\\n<ol>\\n<li>\\n<p>使用预训练网络，如果整个网络都做微调的话，dropout设置0.5~0.9都是ok的，因为即使数据集太小，由于是整个网络参数都会改变的情况下也不大会发生过拟合的情况；但如果是锁住骨干网络，只做最后一层的微调的话就不用担心过拟合的问题，0.5左右的dropout反而会更好，但如果0.9的话就太多信息丢失了</p>\\n</li>\\n<li>\\n<p>torch.manual seed(3407) is all you need</p>\\n</li>\\n<li>\\n<p>通过Huggingface下载模型如果不能连接则通过国内镜像下载 HF_ENDPOINT=<a href=\\\"https://hf-mirror.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://hf-mirror.com</a> python your_script.py ，或者代码添加环境变量 export HF_ENDPOINT=<a href=\\\"http://hf-mirror.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">hf-mirror.com</a> ，参照 <a href=\\\"https://hf-mirror.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://hf-mirror.com</a></p>\\n</li>\\n</ol>\",\"autoDesc\":true}")
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
