import { hasGlobalComponent } from "E:/R-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_fead41757ccfcf6cebf893a009e2c714/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "E:/R-blog/node_modules/.pnpm/@vueuse+core@13.9.0_vue@3.5.22/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "E:/R-blog/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_8f350b695728245fca500d9b52d751f2/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
