import "E:/Workspace/GitHubProj/personal-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-theme-hope/node_modules/@vuepress/plugin-shiki/lib/client/styles/shiki.css"
import "E:/Workspace/GitHubProj/personal-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "E:/Workspace/GitHubProj/personal-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "E:/Workspace/GitHubProj/personal-docs/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "E:/Workspace/GitHubProj/personal-docs/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
