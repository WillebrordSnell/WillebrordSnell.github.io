import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "E:/R-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_589e340a38168f4f06893a319a98ff21/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "E:/R-blog/node_modules/.pnpm/@vuepress+plugin-catalog@2._642d2a8a4c81139d3cfe98e654e842a3/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "E:/R-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_589e340a38168f4f06893a319a98ff21/node_modules/vuepress-theme-hope/lib/bundle/exports/blog.js";
import "E:/R-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_589e340a38168f4f06893a319a98ff21/node_modules/vuepress-theme-hope/lib/bundle/styles/blog/bundle.scss";

import "E:/R-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_fead41757ccfcf6cebf893a009e2c714/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "E:/R-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_fead41757ccfcf6cebf893a009e2c714/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "E:/R-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_fead41757ccfcf6cebf893a009e2c714/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "E:/R-blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_589e340a38168f4f06893a319a98ff21/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
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
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
