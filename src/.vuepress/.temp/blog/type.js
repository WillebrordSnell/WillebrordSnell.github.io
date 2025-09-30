export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[50,44,13,0,16,17,51,18,19,47,49,52,53,20,14,15,21,54,45,48,29,30,31,55,32,33,34,35,36,37,38,39,40,41,42,56,46,43,8,7,6,27,28,9,10,11,12,23,25,24,26,57,1,2,5,3,4,22]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[9,50,44,13,25,0]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[16,17,51,18,19,47,49,52,53,20,14,15,21,54,50,45,48,29,30,31,55,32,33,34,35,36,37,38,39,40,41,42,56,46,43,44,13,8,7,6,27,28,9,10,11,12,23,25,24,26,0]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

