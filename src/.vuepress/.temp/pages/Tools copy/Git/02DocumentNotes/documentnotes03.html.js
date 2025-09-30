import comp from "E:/R-blog/src/.vuepress/.temp/pages/Tools copy/Git/02DocumentNotes/documentnotes03.html.vue"
const data = JSON.parse("{\"path\":\"/Tools%20copy/Git/02DocumentNotes/documentnotes03.html\",\"title\":\"3. Git分支的新建与合并-分支操作\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"date\":\"2023-05-15T00:00:00.000Z\",\"category\":[\"Git\"],\"description\":\"3. Git分支的新建与合并-分支操作 文档：Git 分支 - 分支的新建与合并 创建分支并切换 此时有一个需求需要在新的分支iss53上工作： 它是下面两条命令的简写： 切换分支 突然有一个紧急问题要解决，需要在原来的master分支进行修复： 在切换到master之前，需要iss53分支保持好一个干净的状态（修改都已提交）。 注意：切换分支Git ...\"},\"readingTime\":{\"minutes\":3.05,\"words\":915},\"filePathRelative\":\"Tools copy/Git/02DocumentNotes/documentnotes03.md\",\"excerpt\":\"\\n<p>文档：<a href=\\\"https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Git 分支 - 分支的新建与合并</a></p>\\n<h2>创建分支并切换</h2>\\n<p>此时有一个需求需要在新的分支<code>iss53</code>上工作：</p>\\n<div class=\\\"language-sh line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"sh\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code class=\\\"language-sh\\\"><span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">git</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> checkout</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#D19A66\\\"> -b</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> iss53</span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">  # b表示branch</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
