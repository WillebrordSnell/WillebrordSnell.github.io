<template><div><h1 id="avsd配置或实验记录" tabindex="-1"><a class="header-anchor" href="#avsd配置或实验记录"><span>AVSD配置或实验记录</span></a></h1>
<h2 id="实验配置须知" tabindex="-1"><a class="header-anchor" href="#实验配置须知"><span>实验配置须知</span></a></h2>
<p>实验环境： GeForce RTX 3090  × 2<br>
服务器 env：avsd</p>
<p>batch size： 32 64(单卡会爆显存)：也就是说baseline上，一张3090最多把B设置成32</p>
<p>模板：<a href="https://www.sciencedirect.com/journal/computer-vision-and-image-understanding/publish/guide-for-authors#20040" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/journal/computer-vision-and-image-understanding/publish/guide-for-authors#20040</a></p>
<h2 id="实验思路" tabindex="-1"><a class="header-anchor" href="#实验思路"><span>实验思路</span></a></h2>
<ol>
<li>可解释性</li>
</ol>
<blockquote>
<p>语意分割，视频层面Mask做&quot;扰动&quot;<br>
通过视频定位模型做可解释性</p>
</blockquote>
<ol start="2">
<li>特征对齐</li>
</ol>
<blockquote>
<p>模态对齐：各模态和其对应的其他模态应具有相同的语意，但应考虑不用负样本而是聚类的方式</p>
</blockquote>
<ol start="3">
<li>对话方面：通过Rva对历史进行回溯</li>
</ol>
<blockquote>
<p>通过指代消解这一角度入手 ?<br>
指代消解可以通过识别文本的名词+视频的object，再通过clip一一对应并且需要实现“跟踪”功能</p>
</blockquote>
<ol start="4">
<li>
<p>小样本学习、实例分割、语义分割、名词定位，再通过Clip对比分类</p>
</li>
<li>
<p>denoising autoencoder：在一张图片里面加入很多噪音，然后通过去噪加强模型对图片的理解（能够直接mask掉对话的一些词，通过补全这些词来加强模型对视频的依赖和理解</p>
</li>
</ol>
<blockquote>
<p>通过分阶段训练，第一阶段训练通过视频去预测mask掉的QA对(可能需要mask掉很大部分的比例)，第二阶段再去做后续的对话</p>
</blockquote>
<h2 id="写作" tabindex="-1"><a class="header-anchor" href="#写作"><span>写作</span></a></h2>
<ol>
<li>导言：问问题——回答问题——引出自己的想法，如此形式能够提供更多的技术细节并且能够很好的阐述自己做的什么、怎么做的以及为什么要这样做(动机很重要)</li>
<li>相关工作：把自己的工作和与之相关的工作的不同明确的写出来，不让读者去猜</li>
</ol>
</div></template>


