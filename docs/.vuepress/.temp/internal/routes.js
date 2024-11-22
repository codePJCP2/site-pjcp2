export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/portfolio.html.js"), meta: {"t":"Portfolio Home","i":"home"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Project home","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"Disabling layout and features","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"Encryption Article","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"Layout","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown Enhance","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"Page Config","i":"file","O":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"Features demo","i":"laptop-code"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"Guide","i":"lightbulb"} }],
  ["/zh/portfolio.html", { loader: () => import(/* webpackChunkName: "zh_portfolio.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/portfolio.html.js"), meta: {"t":"档案主页","i":"home"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"t":"项目主页","i":"home"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "guide_foo_ray.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "guide_foo_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"t":"Foo feature","i":"lightbulb"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "guide_bar_baz.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "guide_bar_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"t":"Bar feature","i":"lightbulb"} }],
  ["/zh/demo/disable.html", { loader: () => import(/* webpackChunkName: "zh_demo_disable.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/demo/disable.html.js"), meta: {"t":"布局与功能禁用","i":"gears","O":4} }],
  ["/zh/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "zh_demo_encrypt.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/demo/encrypt.html.js"), meta: {"t":"密码加密的文章","i":"lock"} }],
  ["/zh/demo/layout.html", { loader: () => import(/* webpackChunkName: "zh_demo_layout.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/demo/layout.html.js"), meta: {"t":"布局","i":"object-group","O":2} }],
  ["/zh/demo/markdown.html", { loader: () => import(/* webpackChunkName: "zh_demo_markdown.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/demo/markdown.html.js"), meta: {"t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/zh/demo/page.html", { loader: () => import(/* webpackChunkName: "zh_demo_page.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/demo/page.html.js"), meta: {"t":"页面配置","i":"file","O":3} }],
  ["/zh/demo/", { loader: () => import(/* webpackChunkName: "zh_demo_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/demo/index.html.js"), meta: {"t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/zh/guide/", { loader: () => import(/* webpackChunkName: "zh_guide_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/guide/index.html.js"), meta: {"t":"指南","i":"lightbulb"} }],
  ["/zh/note/first-note.html", { loader: () => import(/* webpackChunkName: "zh_note_first-note.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/first-note.html.js"), meta: {"t":"第一篇 Markdown 文章","i":"pen-to-square"} }],
  ["/zh/note/", { loader: () => import(/* webpackChunkName: "zh_note_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/index.html.js"), meta: {"t":"笔记","i":"book"} }],
  ["/zh/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "zh_guide_bar_baz.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/zh/guide/bar/", { loader: () => import(/* webpackChunkName: "zh_guide_bar_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/guide/bar/index.html.js"), meta: {"t":"Bar 功能","i":"lightbulb"} }],
  ["/zh/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "zh_guide_foo_ray.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/zh/guide/foo/", { loader: () => import(/* webpackChunkName: "zh_guide_foo_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/guide/foo/index.html.js"), meta: {"t":"Foo 功能","i":"lightbulb"} }],
  ["/zh/note/os/", { loader: () => import(/* webpackChunkName: "zh_note_os_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/index.html.js"), meta: {"t":"计算机操作系统","i":"laptop"} }],
  ["/zh/note/os/Concurrency/extra-debugging.html", { loader: () => import(/* webpackChunkName: "zh_note_os_Concurrency_extra-debugging.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/Concurrency/extra-debugging.html.js"), meta: {"t":"调试理论与实践","i":"bug","O":8} }],
  ["/zh/note/os/Concurrency/intro-multi-processor-programming.html", { loader: () => import(/* webpackChunkName: "zh_note_os_Concurrency_intro-multi-processor-programming.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/Concurrency/intro-multi-processor-programming.html.js"), meta: {"t":"多处理器编程： 从入门到放弃","i":"scroll","O":5} }],
  ["/zh/note/os/Concurrency/mutex(1).html", { loader: () => import(/* webpackChunkName: "zh_note_os_Concurrency_mutex(1).html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/Concurrency/mutex(1).html.js"), meta: {"t":"并发控制： 互斥(1)","i":"ban","O":6} }],
  ["/zh/note/os/Concurrency/mutex(2).html", { loader: () => import(/* webpackChunkName: "zh_note_os_Concurrency_mutex(2).html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/Concurrency/mutex(2).html.js"), meta: {"t":"并发控制： 互斥(2)","i":"ban","O":7} }],
  ["/zh/note/os/Concurrency/", { loader: () => import(/* webpackChunkName: "zh_note_os_Concurrency_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/Concurrency/index.html.js"), meta: {"t":"2 - 并发控制","i":"lock"} }],
  ["/zh/note/os/Concurrency/sync(1).html", { loader: () => import(/* webpackChunkName: "zh_note_os_Concurrency_sync(1).html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/Concurrency/sync(1).html.js"), meta: {"t":"并发控制： 同步(1)","i":"arrows-rotate","O":9} }],
  ["/zh/note/os/Concurrency/sync(2).html", { loader: () => import(/* webpackChunkName: "zh_note_os_Concurrency_sync(2).html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/Concurrency/sync(2).html.js"), meta: {"t":"并发控制： 同步(2)","i":"arrows-rotate","O":10} }],
  ["/zh/note/os/Intro/Intro(2)-OS-from-an-Application's-Perspective.html", { loader: () => import(/* webpackChunkName: "zh_note_os_Intro_Intro(2)-OS-from-an-Application's-Perspective.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/Intro/Intro(2)-OS-from-an-Application's-Perspective.html.js"), meta: {"t":"绪论(2)： 应用视角的操作系统","i":"wrench","O":2} }],
  ["/zh/note/os/Intro/Intro(3)-OS-from-Hardware's-Perspective.html", { loader: () => import(/* webpackChunkName: "zh_note_os_Intro_Intro(3)-OS-from-Hardware's-Perspective.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/Intro/Intro(3)-OS-from-Hardware's-Perspective.html.js"), meta: {"t":"绪论(3)： 硬件视角的操作系统","i":"microchip","O":3} }],
  ["/zh/note/os/Intro/Intro(4)-OS-from-Mathematical-Perspective.html", { loader: () => import(/* webpackChunkName: "zh_note_os_Intro_Intro(4)-OS-from-Mathematical-Perspective.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/Intro/Intro(4)-OS-from-Mathematical-Perspective.html.js"), meta: {"t":"绪论(4)： 数学视角的操作系统","i":"infinity","O":4} }],
  ["/zh/note/os/Intro/", { loader: () => import(/* webpackChunkName: "zh_note_os_Intro_index.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/zh/note/os/Intro/index.html.js"), meta: {"t":"1 - 绪论","i":"book-open"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Workspace/GitHubProj/personal-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
