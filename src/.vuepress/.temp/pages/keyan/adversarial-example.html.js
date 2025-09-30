import comp from "E:/R-blog/src/.vuepress/.temp/pages/keyan/adversarial-example.html.vue"
const data = JSON.parse("{\"path\":\"/keyan/adversarial-example.html\",\"title\":\"对抗攻击经典论文\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"对抗攻击经典论文 Explaining and harnessing adversarial examples(FGSM) [ ICLR 2015 ] MOTIVATION: 机器学习模型容易受到对抗性扰动的根本原因在于网络的线性部分(可能还源于模型平均不足或者监督学习问题正则化不足) 。 作者认为，在高维空间中，即使是微小的线性扰动，也会在最终输出上...\"},\"readingTime\":{\"minutes\":14.43,\"words\":4328},\"filePathRelative\":\"keyan/adversarial-example.md\",\"excerpt\":\"\\n<hr>\\n<h2><a class=\\\"header-anchor\\\" href=\\\"#explaining-and-harnessing-adversarial-examples-fgsm-iclr-2015\\\"><span></span></a><a href=\\\"https://arxiv.org/abs/1412.6572\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Explaining and harnessing adversarial examples(FGSM) [ <em>ICLR 2015</em> ]</a></h2>\\n<p><strong>MOTIVATION:</strong><br>\\n机器学习模型容易受到对抗性扰动的根本原因在于网络的线性部分(可能还源于模型平均不足或者监督学习问题正则化不足) 。<br>\\n作者认为，在高维空间中，即使是微小的线性扰动，也会在最终输出上累积成一个巨大的变化。</p>\",\"autoDesc\":true}")
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
