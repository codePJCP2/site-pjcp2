import CodeDemo from "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "E:/Workspace/GitHubProj/personal-docs/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
