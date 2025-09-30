<template><div><h1 id="markdown方言-vuepress" tabindex="-1"><a class="header-anchor" href="#markdown方言-vuepress"><span>Markdown方言（Vuepress）</span></a></h1>
<h2 id="_1-提示信息" tabindex="-1"><a class="header-anchor" href="#_1-提示信息"><span>1 提示信息</span></a></h2>
<div class="hint-container info">
<p class="hint-container-title">info</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">note</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">tip</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">warning</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">danger</p>
</div>
<details class="hint-container details"><summary>details</summary>
</details>
<Tabs :data='[{"id":"apple"},{"id":"banana"},{"id":"orange"}]'>
<template #title0="{ value, isActive }">apple</template>
<template #title1="{ value, isActive }">banana</template>
<template #title2="{ value, isActive }">orange</template>
<template #tab0="{ value, isActive }">
<p>Apple <a href="https://theme-hope.vuejs.press/zh/guide/markdown/tabs.html#%E6%A1%88%E4%BE%8B" target="_blank" rel="noopener noreferrer">选项卡</a></p>
</template>
<template #tab1="{ value, isActive }">
<p>Banana</p>
</template>
<template #tab2="{ value, isActive }">
<p>Orange</p>
</template>
</Tabs>
<h2 id="_2-emoji表情" tabindex="-1"><a class="header-anchor" href="#_2-emoji表情"><span>2 <a href="https://www.webfx.com/tools/emoji-cheat-sheet/" target="_blank" rel="noopener noreferrer">Emoji表情</a></span></a></h2>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">经典: :wink: :cry: :laughing: :yum:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">简写: 8-) :) :* :( :-) :-( ;)s</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果</strong>：</p>
<p>😉 😢 😆 😋<br>
😎 😃 😗 😦 😃 😦 😉</p>
<h2 id="_3-字体颜色" tabindex="-1"><a class="header-anchor" href="#_3-字体颜色"><span>3 字体颜色</span></a></h2>
<h3 id="_3-1-配置重要" tabindex="-1"><a class="header-anchor" href="#_3-1-配置重要"><span>3.1 配置<span class="vp-badge danger">重要</span></span></a></h3>
<p><span class="vp-badge info">class=&quot;vp-badge info&quot;</span><br>
<span class="vp-badge danger">class=&quot;vp-badge danger&quot;</span><br>
<span class="vp-badge note">class=&quot;vp-badge note&quot;</span><br>
<span class="vp-badge tip">class=&quot;vp-badge tip&quot;</span><br>
<span class="vp-badge warning">class=&quot;vp-badge warning&quot;</span></p>
<div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;span class="vp-badge info">支持页面配置&#x3C;/span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-2-更改字体、大小、颜色" tabindex="-1"><a class="header-anchor" href="#_3-2-更改字体、大小、颜色"><span>3.2 更改字体、大小、颜色</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"黑体"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>我是黑体字&#x3C;/</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"微软雅黑"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>我是微软雅黑&#x3C;/</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"STCAIYUN"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>我是华文彩云&#x3C;/</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>我是红色&#x3C;/</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">#008000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>我是绿色&#x3C;/</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>我是蓝色&#x3C;/</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>我是尺寸&#x3C;/</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"黑体"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">green</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>我是黑体，绿色，尺寸为5&#x3C;/</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF">font</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果</p>
<figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230719202045.png" alt=" " tabindex="0" loading="lazy"><figcaption> </figcaption></figure>
<h3 id="_3-3-为文字添加背景色" tabindex="-1"><a class="header-anchor" href="#_3-3-为文字添加背景色"><span>3.3 为文字添加背景色</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">table</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">td</span><span style="--shiki-light:#000000;--shiki-dark:#D19A66"> bgcolor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">cyan</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>背景颜色cyan&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">td</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">tr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">table</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>效果</p>
<figure><img src="https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230719202130.png" alt=" " tabindex="0" loading="lazy"><figcaption> </figcaption></figure>
<h2 id="_4-卡片" tabindex="-1"><a class="header-anchor" href="#_4-卡片"><span>4. 卡片</span></a></h2>
<div class="language-card line-numbers-mode" data-highlighter="shiki" data-ext="card" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-card"><span class="line"><span>title: Mr.Hope</span></span>
<span class="line"><span>desc: Where there is light, there is hope</span></span>
<span class="line"><span>logo: https://mister-hope.com/logo.svg</span></span>
<span class="line"><span>link: https://mister-hope.com</span></span>
<span class="line"><span>color: rgba(253, 230, 138, 0.15)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-card line-numbers-mode" data-highlighter="shiki" data-ext="card" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-card"><span class="line"><span>{</span></span>
<span class="line"><span>  "title": "Mr.Hope",</span></span>
<span class="line"><span>  "desc": "Where there is light, there is hope",</span></span>
<span class="line"><span>  "logo": "https://mister-hope.com/logo.svg",</span></span>
<span class="line"><span>  "link": "https://mister-hope.com",</span></span>
<span class="line"><span>  "color": "rgba(253, 230, 138, 0.15)"</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


