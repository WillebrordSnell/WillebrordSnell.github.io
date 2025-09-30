import comp from "E:/R-blog/src/.vuepress/.temp/pages/Tools copy/Git/02DocumentNotes/documentnotes01.html.vue"
const data = JSON.parse("{\"path\":\"/Tools%20copy/Git/02DocumentNotes/documentnotes01.html\",\"title\":\"1. Git基础与命令\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2023-05-15T00:00:00.000Z\",\"category\":[\"Git\"],\"description\":\"1. Git基础与命令 官方文档（中文）：https://git-scm.com/book/zh/v2 Git基础 全局配置 检查配置信息 获取帮助 初始化仓库 如果你是从远程仓库clone的项目，则该项目是已经初始化好的git仓库 克隆远程仓库 初次克隆某个仓库的时候，工作目录中的所有文件都属于已跟踪文件，并处于未修改状态，因为 Git 刚刚检出了它...\"},\"readingTime\":{\"minutes\":12.78,\"words\":3834},\"filePathRelative\":\"Tools copy/Git/02DocumentNotes/documentnotes01.md\",\"excerpt\":\"\\n<p>官方文档（中文）：<a href=\\\"https://git-scm.com/book/zh/v2\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://git-scm.com/book/zh/v2</a></p>\\n<h2>Git基础</h2>\\n<h3>全局配置</h3>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"bash\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code class=\\\"language-bash\\\"><span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">git</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> config</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> --global</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> user.name</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'your name'</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">git</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> config</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> --global</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> user.email</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'xxx@xx.com'</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
