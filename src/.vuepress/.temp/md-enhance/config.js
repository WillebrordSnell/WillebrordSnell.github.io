import CodeDemo from "E:/R-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@_c709aff4198da530c08684edbf295b51/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "E:/R-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@_c709aff4198da530c08684edbf295b51/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
