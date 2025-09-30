import { CodeTabs } from "E:/R-blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_a830816e0f695c96bb6104e9de8fb26e/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/R-blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_a830816e0f695c96bb6104e9de8fb26e/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/R-blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_a830816e0f695c96bb6104e9de8fb26e/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
