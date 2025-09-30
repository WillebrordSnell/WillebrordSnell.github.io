<template><div><h1 id="视频对话方向大论文性质的记录" tabindex="-1"><a class="header-anchor" href="#视频对话方向大论文性质的记录"><span>视频对话方向大论文性质的记录</span></a></h1>
<p>视频对话领域在近几年顶刊上的paper寥寥无几并且在大模型的冲击下许多工作的本质就是换皮，真正有实质意义的工作寥若星辰，本无打算特地做综述性质的报告，但由于开题和毕业论文需要，故留记录</p>
<h2 id="information-theoretic-text-hallucination-reduction-for-video-grounded-dialogue" tabindex="-1"><a class="header-anchor" href="#information-theoretic-text-hallucination-reduction-for-video-grounded-dialogue"><span>Information-Theoretic Text Hallucination Reduction for Video-grounded Dialogue</span></a></h2>
<blockquote>
<p>论文地址：<a href="https://arxiv.org/abs/2212.05765" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2212.05765</a></p>
</blockquote>
<p>本文提出AVSD中存在：不理解问题的情况下不加区分地抄袭输入文本，其原因是由于数据集中的答案句子通常包含输入文本中的单词，因此VGD(Video-grounded Dialogue)系统过度依赖于复制输入文本中的单词，希望这些单词与地面实况文本重叠，从而学习到虚假的相关性。</p>
<h2 id="video-dialog-as-conversation-about-objects-living-in-space-time" tabindex="-1"><a class="header-anchor" href="#video-dialog-as-conversation-about-objects-living-in-space-time"><span>Video Dialog as Conversation about Objects Living in Space-Time</span></a></h2>
<blockquote>
<p>论文地址：<a href="https://arxiv.org/abs/2207.03656" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2207.03656</a></p>
</blockquote>
<p>本文认为：对话的自然流程是多次转折，每次转折都建立在之前的问答基础之上。这就要求在语言上深刻理解和跟踪已经说过的话，并以视频中的视觉概念为基础，然后在新建立的语境中分析新问题。其难点主要体现在 场景的时间动态性</p>
<h2 id="structured-co-reference-graph-attention-for-video-grounded-dialogue" tabindex="-1"><a class="header-anchor" href="#structured-co-reference-graph-attention-for-video-grounded-dialogue"><span>Structured Co-reference Graph Attention for Video-grounded Dialogue</span></a></h2>
<blockquote>
<p>论文地址：<a href="https://arxiv.org/abs/2103.13361" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2103.13361</a></p>
</blockquote>
<p>本文认为视频对话难点在于：(1) 如何推断多种模态之间的共同参照(包含文本中的指代消解问题)；(2) 如何推理具有复杂时空动态的视频的丰富底层语义结构。</p>
<h2 id="bist-bi-directional-spatio-temporal-reasoning-for-video-grounded-dialogues" tabindex="-1"><a class="header-anchor" href="#bist-bi-directional-spatio-temporal-reasoning-for-video-grounded-dialogues"><span>BiST: Bi-directional Spatio-Temporal Reasoning for Video-Grounded Dialogues</span></a></h2>
<blockquote>
<p>论文地址：<a href="https://arxiv.org/abs/2010.10095" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2010.10095</a></p>
</blockquote>
<p>本文认为AVSD：(i) 包含空间和时间变化的视频的复杂性，以及 (ii) 在多个对话回合中查询视频中不同片段和/或不同对象的用户话语的复杂性。并且此前的方法都认为空间中所有的object都是一样重要，但其实并不是所有object对于当前问题有同样的贡献度</p>
<h2 id="describing-unseen-videos-via-multi-modal-cooperative-dialog-agents" tabindex="-1"><a class="header-anchor" href="#describing-unseen-videos-via-multi-modal-cooperative-dialog-agents"><span>Describing Unseen Videos via Multi-Modal Cooperative Dialog Agents</span></a></h2>
<blockquote>
<p>论文地址：<a href="https://arxiv.org/abs/2008.07935" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2008.07935</a></p>
</blockquote>
<p>参考意义不大</p>
<h2 id="dynamic-graph-representation-learning-for-video-dialog-via-multi-modal-shuffled-transformers" tabindex="-1"><a class="header-anchor" href="#dynamic-graph-representation-learning-for-video-dialog-via-multi-modal-shuffled-transformers"><span>Dynamic Graph Representation Learning for Video Dialog via Multi-Modal Shuffled Transformers</span></a></h2>
<blockquote>
<p>论文地址：<a href="https://arxiv.org/abs/2007.03848" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2007.03848</a></p>
</blockquote>
<p>本文是早期(2020)的paper，因此在那个连多模态融合都没有做好的年代其主要难点自然就是如何融合多模态信息了</p>
<h2 id="video-grounded-dialogues-with-pretrained-generation-language-models" tabindex="-1"><a class="header-anchor" href="#video-grounded-dialogues-with-pretrained-generation-language-models"><span>Video-Grounded Dialogues with Pretrained Generation Language Models</span></a></h2>
<blockquote>
<p>论文地址：<a href="https://arxiv.org/abs/2006.15319" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2006.15319</a></p>
</blockquote>
<p>本文只是把GTP2放在AVSD数据集上做了fine tune，严重怀疑最后的预测其实根本就没用到输入的视频信息</p>
<h2 id="multi-speaker-video-dialog-with-frame-level-temporal-localization" tabindex="-1"><a class="header-anchor" href="#multi-speaker-video-dialog-with-frame-level-temporal-localization"><span>Multi-Speaker Video Dialog with Frame-Level Temporal Localization</span></a></h2>
<blockquote>
<p>论文地址：<a href="https://ojs.aaai.org/index.php/AAAI/article/view/6901" target="_blank" rel="noopener noreferrer">https://ojs.aaai.org/index.php/AAAI/article/view/6901</a></p>
</blockquote>
<p>本文提到在实际应用中，准确定位对应的视频子段始终是很困难的。其意思应该和我思路差不多，通过增加一个视频定位模块做模型的可解释性部分，并且也许能带来性能的提升。(艹 又被做了)</p>
<h2 id="multimodal-transformer-networks-for-end-to-end-video-grounded-dialogue-systems" tabindex="-1"><a class="header-anchor" href="#multimodal-transformer-networks-for-end-to-end-video-grounded-dialogue-systems"><span>Multimodal Transformer Networks for End-to-End Video-Grounded Dialogue Systems</span></a></h2>
<blockquote>
<p>论文地址：<a href="https://arxiv.org/abs/1907.01166" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/1907.01166</a></p>
</blockquote>
<p>本文也是AVSD领域的早期(2019)工作，其中提出的问题比较基础：(1) 由于跨多个视频帧的背景噪声、人类语音、动作流等信息多种多样，视频的特征空间比基于文本或基于图像的特征更大、更复杂； (2) 会话代理必须能够感知和理解来自不同模式的信息（来自对话历史和人类查询的文本、来自视频的视觉和音频特征），并在语义上形成对人类有意义的响应。</p>
<h2 id="video-dialog-via-progressive-inference-and-cross-transformer" tabindex="-1"><a class="header-anchor" href="#video-dialog-via-progressive-inference-and-cross-transformer"><span>Video Dialog via Progressive Inference and Cross-Transformer</span></a></h2>
<blockquote>
<p>论文地址：<a href="https://aclanthology.org/D19-1217/" target="_blank" rel="noopener noreferrer">https://aclanthology.org/D19-1217/</a></p>
</blockquote>
<p>transform战士，用transform结构代替RNN在AVSD的位置</p>
</div></template>


