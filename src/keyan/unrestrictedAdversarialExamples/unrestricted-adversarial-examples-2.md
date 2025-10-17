---

date: 2025-10-09
category:
  - 码头
tag:
  - 无限制对抗攻击样本

---

# 无限制对抗攻击（二）

A Complete List of All (arXiv) Adversarial Example Papers（Nicholas Carlini）:https://nicholas.carlini.com/writing/2019/all-adversarial-example-papers.html

---
## [Highly Transferable Diffusion-based Unrestricted Adversarial Attack on Pre-trained Vision-Language Models(简写) [*MM 2024*]](https://dl.acm.org/doi/abs/10.1145/3664647.3681538)

**MOTIVATION：** 以往针对VLMs的对抗攻击方法多数仅简单地将图像和文本模态分别扰动，或在联合优化时仅把另一模态的信息作为附加监督信号。忽略了图像与文本之间深层的语义对齐关系，导致跨模态信息未被充分利用，从而限制了攻击样本在不同模型间的迁移性；并且直接在图像的像素层面添加扰动；扩散模型内部多层交叉注意力模块能实现丰富的图文特征融合，对VLMs的多模态扩散攻击仍然鲜有探索。

作者认为在当前VLM能够同时处理图像和文本两种模态，并且二者之间存在内在的语义对齐与互补关系。若分别独立地扰动图像和文本，而不考虑它们之间的相互作用，可能会导致两种扰动相互抵消，从而使攻击失效。现有的多模态迁移攻击方法通常采用协同（collaborative）而非独立（independent）的方式来联合扰动图文对。**因此攻击目标应放在嵌入空间（embedding space）而非下游任务标签上。**


<font size=4>本文核心方法：</font>
MDA 主要包含两个阶段：

![The framework of MDA](./assets/img/MDA_fig1.png)

**文本模态攻击（Text Modality Attack） —— 生成对抗文本**

在实际实现中，本文采用 [BERT-Attack](https://arxiv.org/abs/2004.09984) 作为文本攻击算法。文本攻击的目标是生成一个与原文本在语义上尽可能不同的对抗文本 $x'_{\text{txt}}$。由于文本空间是离散的，不像图像像素可以直接通过梯度更新，因此无法直接基于下游任务的梯度修改token。相反，本文选择那些在特征空间中能造成最大变化的token进行替换，从而实现攻击。

对于对齐型模型（aligned model）（如 CLIP），其可以单独处理文本输入，攻击目标可表示为：

$$
\max_{x'_{\text{txt}}} \mathrm{KL}\big(E_t(x'_{\text{txt}}),\, E_t(x_{\text{txt}})\big)
$$
其中：
- $E_t(\cdot)$ 表示文本编码器（text encoder）的嵌入表示
- $\text{KL}(\cdot,\cdot)$ 为 Kullback–Leibler 散度，用于衡量干净文本与对抗文本特征的差异

对于融合型模型（fused models）（如 ALBEF与 TCL），由于其需要同时输入图像与文本，因此文本攻击目标为：

$$
\max_{x'_{\text{txt}}} \mathrm{KL}\big(
E_m(E_t(x'_{\text{txt}}), E_i(x_{\text{img}})),
E_m(E_t(x_{\text{txt}}), E_i(x_{\text{img}}))
\big)
$$

其中：
- $E_i(\cdot)$ 表示图像编码器（image encoder），
- $E_m(\cdot,\cdot)$ 表示多模态编码模块（multimodal encoder）。


**图像模态攻击（Image Modality Attack） —— 在扩散过程中根据对抗文本优化潜变量以生成对抗图像**

在图像模态上，本文采用在大量图文对上预训练的 Stable Diffusion 模型进行攻击。由于对抗攻击可被视作一种特殊的图像编辑任务，本文首先将干净图像映射到潜空间。具体地，使用 Stable Diffusion 的变分自编码器（VAE）编码器 $V_E(\cdot)$，对图像进行潜空间编码：

$$
z_T=V_E(x_{img})
$$

随后，通过 [DDIM反演（DDIM Inversion）](https://arxiv.org/abs/2010.02502) 将其逐步映射为带噪潜变量 $z_T$：

$$
z_T = \text{In}(z_{T-1}) = \text{In} \circ \cdots \circ \text{In}(z_0)
$$

其中每一步反演过程定义为：

$$
\text{In}(z_t) = \sqrt{\frac{\alpha_{t+1}}{\alpha_t}} \, z_t 
+ \left( \sqrt{\frac{1}{\alpha_{t+1}} - 1} - \sqrt{\frac{1}{\alpha_t} - 1} \right) 
\, \epsilon_\theta(z_t, t, \varnothing)
$$

其中：

$\alpha_t$ 为噪声缩放因子，

$\epsilon_\theta(\cdot)$ 表示噪声预测网络输出，

$\varnothing$ 表示空文本（null text prompt），

$t$ 为当前时间步，$T$ 为总时间步数。

得到反演潜变量 $z_T$ 后，我们通过去噪（denoising）过程生成对抗图像：

$$
z'_T =z_T, \quad z_0' = \text{De}(z_1') = \text{De} \circ \cdots \circ \text{De}(z'_T), 
\quad x'_{\text{img}} = V_D(z_0')
$$

其中 $V_D(\cdot)$ 是 VAE 解码器，$\text{De}(\cdot)$ 的定义如下：

$$
\text{De}(z_t') = \sqrt{\frac{\alpha_{t-1}}{\alpha_t}} \, z_t' 
+ \sqrt{z'_{t-1}} \left( \sqrt{\frac{1}{\alpha_{t-1}} - 1} - \sqrt{\frac{1}{\alpha_t} - 1} \right)
\, \epsilon_\theta(z_t', t, x'_{\text{txt}}, \varnothing)
$$

此时，对抗文本 $x'_{\text{txt}}$ 被作为提示词（prompt），参与每一步去噪，指导图像的生成方向。

为了控制模型在去噪过程中对条件信息（即文本提示）的依赖程度，本文采用 [CFG 技术](https://arxiv.org/abs/2207.12598)。其核心思想是通过引导系数 $\omega$ 平衡有条件与无条件生成：

$$
\epsilon_\theta(z_t', t, C,\varnothing) = \omega \cdot \epsilon_\theta(z_t', t, C) 
+ (1 - \omega) \cdot \epsilon_\theta(z_t', t, \varnothing)
$$

其中：
- $C$ 表示条件输入（此处为对抗文本）。
- $\omega$ 越大，模型越依赖文本提示信息，从而增强跨模态交互。

生成对抗图像后，通过下游任务的损失函数 $J(\cdot,\cdot)$ 计算梯度来更新潜变量 $z_T$，优化目标为：

$$
L_{\text{attack}} = -J(x'_{\text{img}}, x'_{\text{txt}})
$$

由于扩散模型具有生成性特征，若扰动过大将破坏图像的原始语义结构，使生成的图像与原图差异明显，失去攻击意义。

因此，为保持结构一致性，本文引入[自注意力约束（self-attention constraint）](https://ieeexplore.ieee.org/abstract/document/10716799/)，通过比较干净与对抗潜变量的自注意力图（self-attention maps）差异，定义结构保持损失：

$$
L_{\text{structure}} = \| sa_{\text{clean}} - sa_{\text{adv}} \|_2^2
$$

其中 $sa_{\text{clean}}$ 和 $sa_{\text{adv}}$ 分别表示干净潜变量与对抗潜变量的自注意力图。

最终的总体优化目标为：

$$
\min_{z'_T} L_{\text{total}} = \mu L_{\text{attack}} + L_{\text{structure}}
$$

其中 
- $\mu$ 为权重系数，用于平衡攻击损失与结构保持损失的相对重要性。
- $z'_T$ 会通过多次迭代更新，直到生成最终对抗样本。


注意：根据研究，扩散模型在早期时间步倾向于学习粗粒度语义（coarse semantics），而在后期时间步关注细粒度细节（fine details）。因此，更多的反演步数虽然能增强攻击强度，但会降低生成质量。本文遵循[经验](https://ieeexplore.ieee.org/abstract/document/10716799/)，在去噪过程的后半段（backward DDIM inversion steps）进行有限步数优化，以保留高层语义特征。

![算法流程](./assets/img/MDA_fig2.png)

作者在图文检索（image-text retrieval）、视觉蕴含（visual entailment）、视觉指代（visual grounding） 等任务上进行了实验。

::: details 图文检索、视觉蕴含、视觉指代

图文检索（image-text retrieval）：在图文检索任务中，模型输入为图像，目标是检索出与其最相关的文本；而在文图检索任务中，输入为文本，输出为与之最匹配的图像。使用 [Flickr30K](https://direct.mit.edu/tacl/article-abstract/doi/10.1162/tacl_a_00166/43313)数据集：http://nlp.cs.illinois.edu/Denotation.html.

视觉蕴含（visual entailment）：视觉蕴含任务的目标是判断文本假设（hypothesis）是否能够从图像前提（premise）中推理得到。使用 [SNLI-VE](https://arxiv.org/abs/1901.06706)数据集：https://github.com/necla-ml/SNLI-VE

视觉指代（visual grounding）：视觉指代任务旨在识别并定位图像中与文本描述对应的对象或区域。使用 [RefCOCO](https://arxiv.org/abs/1608.00272)数据集：https://github.com/lichengunc/refer

:::


>论文笔记：
>本文结合BERT-Attack、Stable Diffusion两种框架以及多种trick（DDIM反演、CFG技术、自注意力约束（self-attention constraint））

---

## [Improving Visual Quality of Unrestricted Adversarial Examples with Wavelet-VAE(简写) [*ICML 2021*]](https://arxiv.org/abs/2108.11032)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---

## [Multi-adversarial Faster-RCNN with Paradigm Teacher for Unrestricted Object Detection(简写) [*IJCV 2023*]](https://link.springer.com/article/10.1007/s11263-022-01728-z)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---

## [AdvDiffuser: Natural Adversarial Example Synthesis with Diffusion Models(AdvDiffuser) [*ICCV 2023*]](https://openaccess.thecvf.com/content/ICCV2023/html/Chen_AdvDiffuser_Natural_Adversarial_Example_Synthesis_with_Diffusion_Models_ICCV_2023_paper.html)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---

## [Pasadena: Perceptually Aware and Stealthy Adversarial Denoise Attack(简写) [*IEEE TMM 2022*]](https://ieeexplore.ieee.org/abstract/document/9531416)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---

## [AccEar: Accelerometer Acoustic Eavesdropping with Unconstrained Vocabulary(AccEar) [*IEEE SSP 2022*]](https://ieeexplore.ieee.org/abstract/document/9833716)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---
## [RAE-VWP: A Reversible Adversarial Example-Based Privacy and Copyright Protection Method of Medical Images for Internet of Medical Things(简写) [*IEEE IoT 2024*]](https://ieeexplore.ieee.org/abstract/document/10460291)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---

## [Towards Transferable Adversarial Perturbations with Minimum Norm(简写) [*ICML 2021*]](https://openreview.net/forum?id=SktdCGNd3xI)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---
## [Attention-SA: Exploiting Model-Approximated Data Semantics for Adversarial Attack(Attention-SA) [*IEEE TIFS 2024*]](https://ieeexplore.ieee.org/abstract/document/10549527)

**MOTIVATION：**

![图片](./assets/img/fig1.png)



---
## [AdvST: Generating Unrestricted Adversarial Images Via Style Transfer(Advst) [*IEEE TMM 2024*]](https://ieeexplore.ieee.org/abstract/document/10292904)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---
## [Provable Unrestricted Adversarial Training Without Compromise with Generalizability(简写) [*IEEE TPAMI 2024*]](https://arxiv.org/abs/2301.09069)

**MOTIVATION：**

![图片](./assets/img/fig1.png)


---

## [Enhancing Diffusion-based Unrestricted Adversarial Attacks via Adversary Preferences Alignment(简写) [*CVPR 2025*]](https://arxiv.org/abs/2506.01511)

**MOTIVATION：** 最近有研究尝试通过修改图像的 **语义属性（如形状、颜色、纹理）** 来生成更加自然的攻击样本，但：
- 形状攻击（Shape-based）导致结构变化但难以保持一致性；
- 纹理或颜色攻击（Texture/Color-based）虽自然但可迁移性差；
- Diffusion-based 攻击（如 ACA, DiffPGD）虽利用生成模型，但其潜空间扰动高度敏感，稍有噪声即会引起语义漂移，难以稳定生成高一致性的对抗样本。

而现有扩散模型的偏好对齐主要关注人类偏好（Human Preference Alignment），如审美或文字匹配，而忽略了“攻击者偏好（Adversary Preferences）”这一安全相关场景。
这些人类偏好方法（RLHF、DPO、Direct Reward）无法直接用于对抗样本生成，因为：
- 缺乏攻击偏好数据集，无法像人类偏好那样通过成对样本进行学习；
- 偏好冲突严重：视觉一致性与攻击有效性本质上互相制约，联合优化时易出现“Reward Hacking”（如牺牲图像质量换取攻击成功率）。

本文认为，无约束对抗样本的生成过程，本质上是“攻击者偏好（Adversary Preferences）”的对齐问题，其中包含两个相互矛盾的核心目标：

- 视觉一致性（Visual Consistency）：生成的对抗样本应尽可能保持与原图语义一致，使其看起来“自然”、“可信”。
- 攻击有效性（Attack Effectiveness）：样本必须能高效地欺骗目标分类器（尤其是黑盒模型），并在不同架构之间具有良好的迁移性。

<font size=4>本文核心方法：</font>
本文提出了一个两阶段的攻击者偏好对齐框架：




---

## [SemDiff: Generating Natural Unrestricted Adversarial Examples via Semantic Attributes Optimization in Diffusion Models(SemDiff) [*会议/期刊名 2025*]](https://arxiv.org/abs/2504.11923)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---

## [VENOM: Text-driven Unrestricted Adversarial Example Generation with Diffusion Models(简写) [*会议/期刊名 2025*]](https://arxiv.org/abs/2501.07922)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---

## [SCA: Improve Semantic Consistent in Unrestricted Adversarial Attacks via DDPM Inversion(SCA) [*会议/期刊名 2024*]](https://arxiv.org/abs/2410.02240)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---

## [ReToMe-VA: Recursive Token Merging for Video Diffusion-based Unrestricted Adversarial Attack(ReToMe-VA) [*MM 2024*]](https://arxiv.org/abs/2408.05479)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---

## [论文题目(简写) [*会议/期刊名 年份*]](下载链接)

**MOTIVATION：**

![图片](./assets/img/fig1.png)

---