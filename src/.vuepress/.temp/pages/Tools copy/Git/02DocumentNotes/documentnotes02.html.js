import comp from "E:/R-blog/src/.vuepress/.temp/pages/Tools copy/Git/02DocumentNotes/documentnotes02.html.vue"
const data = JSON.parse("{\"path\":\"/Tools%20copy/Git/02DocumentNotes/documentnotes02.html\",\"title\":\"2. Git分支-分支原理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":2,\"date\":\"2023-05-15T00:00:00.000Z\",\"category\":[\"Git\"],\"description\":\"2. Git分支-分支原理 Git 处理分支的方式可谓是难以置信的轻量，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷。 与许多其它版本控制系统不同，Git 鼓励在工作流程中频繁地使用分支与合并，哪怕一天之内进行许多次。 首次提交 在进行提交操作时，Git 会保存一个提交对象（commit object）。 假设现在有一个...\"},\"readingTime\":{\"minutes\":6.35,\"words\":1904},\"filePathRelative\":\"Tools copy/Git/02DocumentNotes/documentnotes02.md\",\"excerpt\":\"\\n<p>Git 处理分支的方式可谓是难以置信的轻量，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷。 与许多其它版本控制系统不同，Git 鼓励在工作流程中频繁地使用分支与合并，哪怕一天之内进行许多次。</p>\\n<h2>首次提交</h2>\\n<p>在进行提交操作时，Git 会保存一个提交对象（commit object）。</p>\\n<p>假设现在有一个工作目录，里面包含了三个将要被暂存和提交的文件。 暂存操作会为每一个文件计算校验和（使用 SHA-1 哈希算法），然后会把当前版本的文件快照保存到 Git 仓库中 （Git 使用 <em>blob</em> 对象来保存它们），最终将校验和加入到暂存区域等待提交：</p>\",\"autoDesc\":true}")
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
