import comp from "E:/R-blog/src/.vuepress/.temp/pages/Tools copy/Git/02DocumentNotes/documentnotes08.html.vue"
const data = JSON.parse("{\"path\":\"/Tools%20copy/Git/02DocumentNotes/documentnotes08.html\",\"title\":\"8. Git工具-查看修订版本\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":8,\"date\":\"2023-05-15T00:00:00.000Z\",\"category\":[\"Git\"],\"description\":\"8. Git工具-查看修订版本 Git 能够以多种方式来指定单个提交、一组提交、或者一定范围内的提交。 了解它们并不是必需的，但是了解一下总没坏处。 修订版本指的是：提交 单个修订版本 你可以通过任意一个提交的 40 个字符的完整 SHA-1 散列值来指定它， 不过还有很多更人性化的方式来做同样的事情。本节将会介绍获取单个提交的多种方法。 简短的 SH...\"},\"readingTime\":{\"minutes\":11.57,\"words\":3472},\"filePathRelative\":\"Tools copy/Git/02DocumentNotes/documentnotes08.md\",\"excerpt\":\"\\n<p>Git 能够以多种方式来指定单个提交、一组提交、或者一定范围内的提交。 了解它们并不是必需的，但是了解一下总没坏处。</p>\\n<p>修订版本指的是：<strong>提交</strong></p>\\n<h2>单个修订版本</h2>\\n<p>你可以通过任意一个提交的 40 个字符的完整 SHA-1 散列值来指定它， 不过还有很多更人性化的方式来做同样的事情。本节将会介绍获取单个提交的多种方法。</p>\\n<h2>简短的 SHA-1</h2>\\n<p>Git 十分智能，你只需要提供 SHA-1 的前几个字符就可以获得对应的那次提交， 当然你提供的 SHA-1 字符数量<strong>不得少于 4 个</strong>，并且没有歧义——也就是说， 当前对象数据库中没有其它对象以这段 SHA-1 开头。</p>\",\"autoDesc\":true}")
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
