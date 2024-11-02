import { hasGlobalComponent } from "E:/Workspace/GitHubProj/personal-docs/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "E:/Workspace/GitHubProj/personal-docs/node_modules/@vueuse/core/index.mjs";
import FontIcon from "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
};
