import { hasGlobalComponent } from "E:/R-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_fead41757ccfcf6cebf893a009e2c714/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "E:/R-blog/node_modules/.pnpm/vuepress-plugin-components@_1be52d38832dbccf7b53513fe1ecfda2/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "E:/R-blog/node_modules/.pnpm/vuepress-plugin-components@_1be52d38832dbccf7b53513fe1ecfda2/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "E:/R-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_fead41757ccfcf6cebf893a009e2c714/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
