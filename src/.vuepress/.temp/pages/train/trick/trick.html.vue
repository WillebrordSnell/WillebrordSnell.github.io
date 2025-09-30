<template><div><h1 id="炼丹术" tabindex="-1"><a class="header-anchor" href="#炼丹术"><span>炼丹术</span></a></h1>
<p><strong>本文旨在记录一些炼丹技巧减少炼丹时间</strong></p>
<ol>
<li>
<p>使用预训练网络，如果整个网络都做微调的话，dropout设置0.5~0.9都是ok的，因为即使数据集太小，由于是整个网络参数都会改变的情况下也不大会发生过拟合的情况；但如果是锁住骨干网络，只做最后一层的微调的话就不用担心过拟合的问题，0.5左右的dropout反而会更好，但如果0.9的话就太多信息丢失了</p>
</li>
<li>
<p>torch.manual seed(3407) is all you need</p>
</li>
<li>
<p>通过Huggingface下载模型如果不能连接则通过国内镜像下载 HF_ENDPOINT=<a href="https://hf-mirror.com" target="_blank" rel="noopener noreferrer">https://hf-mirror.com</a> python your_script.py ，或者代码添加环境变量 export HF_ENDPOINT=<a href="http://hf-mirror.com" target="_blank" rel="noopener noreferrer">hf-mirror.com</a> ，参照 <a href="https://hf-mirror.com" target="_blank" rel="noopener noreferrer">https://hf-mirror.com</a></p>
</li>
</ol>
</div></template>


