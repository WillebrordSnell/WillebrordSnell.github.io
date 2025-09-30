import comp from "E:/R-blog/src/.vuepress/.temp/pages/Tools copy/Git/02DocumentNotes/documentnotes04.html.vue"
const data = JSON.parse("{\"path\":\"/Tools%20copy/Git/02DocumentNotes/documentnotes04.html\",\"title\":\"4. Git分支管理-查看分支\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":4,\"date\":\"2023-05-15T00:00:00.000Z\",\"category\":[\"Git\"],\"description\":\"4. Git分支管理-查看分支 查看分支 git branch 命令不只是可以创建与删除分支。 如果不加任何参数运行它，会得到当前所有分支的一个列表。 查看每个分支的最后提交 查看已(未)合并的分支 --merged 与 --no-merged 这两个选项可以查看哪些分支已经合并或未合并到 当前 分支。 上面列表中分支名字前没有 * 号的分支通常可以使...\"},\"readingTime\":{\"minutes\":1.3,\"words\":391},\"filePathRelative\":\"Tools copy/Git/02DocumentNotes/documentnotes04.md\",\"excerpt\":\"\\n<h2>查看分支</h2>\\n<div class=\\\"language-sh line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"sh\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code class=\\\"language-sh\\\"><span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">$</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> git</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> branch</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">  iss53</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">* master  </span><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\"># 带星号*表示当前所在分支</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">  testing</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
