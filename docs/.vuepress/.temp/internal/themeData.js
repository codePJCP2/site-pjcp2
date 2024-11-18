export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$CtwfLSp2QM3OZnvX6SVbQuIE8urt3GwHVgRKmReyT5MaLwYAc7qU6\"],\"/zh/demo/encrypt.html\":[\"$2a$10$tblzXzmS/rNKP3TRgz9DmOQfKQwpzrcdLOmGBcwcsGHtyCIdAMHN6\"]}},\"author\":{\"name\":\"codePJCP2\",\"url\":\"https://docs.pjcp2-personal.cn/zh/\"},\"logo\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"repo\":\"codePJCP2/site-pjcp2\",\"docsDir\":\"docs\",\"locales\":{\"/zh/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[\"/zh/\",\"/zh/portfolio\",\"/zh/demo/\",{\"text\":\"笔记\",\"icon\":\"lightbulb\",\"prefix\":\"/zh/note/\",\"children\":[{\"text\":\"试水笔记\",\"icon\":\"lightbulb\",\"prefix\":\"\",\"children\":[\"first-note\"]},{\"text\":\"计算机操作系统\",\"icon\":\"book\",\"prefix\":\"os/\",\"children\":[\"Intro/\",\"Concurrency/\"]}]},{\"text\":\"V2 文档\",\"icon\":\"book\",\"link\":\"https://theme-hope.vuejs.press/zh/\"}],\"sidebar\":{\"/zh/\":[\"\",\"portfolio\",{\"text\":\"案例\",\"icon\":\"laptop-code\",\"prefix\":\"demo/\",\"link\":\"demo/\",\"children\":\"structure\"},{\"text\":\"笔记\",\"icon\":\"book\",\"prefix\":\"note/\",\"children\":\"structure\"},{\"text\":\"幻灯片\",\"icon\":\"person-chalkboard\",\"link\":\"https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html\"}]},\"footer\":\"<a href='https://github.com/codePJCP2'>codePJCP2 </a> 的个人网站, 用 ❤️ 维护 | MIT 协议 | 使用 <a href=\\\"https://theme-hope.vuejs.press/zh/\\\" target=\\\"_blank\\\">VuePress Theme Hope</a> 主题\",\"displayFooter\":true},\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page on GitHub\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\"},\"navbar\":[\"/\",\"/portfolio\",\"/demo/\",{\"text\":\"Guide\",\"icon\":\"lightbulb\",\"prefix\":\"/guide/\",\"children\":[{\"text\":\"Bar\",\"icon\":\"lightbulb\",\"prefix\":\"bar/\",\"children\":[\"baz\",{\"text\":\"...\",\"icon\":\"ellipsis\",\"link\":\"#\"}]},{\"text\":\"Foo\",\"icon\":\"lightbulb\",\"prefix\":\"foo/\",\"children\":[\"ray\",{\"text\":\"...\",\"icon\":\"ellipsis\",\"link\":\"#\"}]}]},{\"text\":\"V2 Docs\",\"icon\":\"book\",\"link\":\"https://theme-hope.vuejs.press/\"}],\"sidebar\":{\"/\":[\"\",\"portfolio\",{\"text\":\"Demo\",\"icon\":\"laptop-code\",\"prefix\":\"demo/\",\"link\":\"demo/\",\"children\":\"structure\"},{\"text\":\"Docs\",\"icon\":\"book\",\"prefix\":\"guide/\",\"children\":\"structure\"},{\"text\":\"Slides\",\"icon\":\"person-chalkboard\",\"link\":\"https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html\"}]},\"footer\":\"Made with ❤️ by <a href='https://github.com/codePJCP2'>codePJCP2 </a> | MIT License | Using <a href=\\\"https://theme-hope.vuejs.press/\\\" target=\\\"_blank\\\">VuePress Theme Hope</a> theme\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
