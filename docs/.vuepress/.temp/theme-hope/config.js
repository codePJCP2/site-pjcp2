import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "E:/Workspace/GitHubProj/personal-docs/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "E:/Workspace/GitHubProj/personal-docs/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "E:/Workspace/GitHubProj/personal-docs/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "E:/Workspace/GitHubProj/personal-docs/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
