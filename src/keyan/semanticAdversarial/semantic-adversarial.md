---
date: 2025-10-13
category:
  - 码头
tag:
  - 语义对抗攻击样本
---
# 语义对抗攻击样本

[SAP-DIFF: Semantic Adversarial Patch Generation for Black-Box Face Recognition Models via Diffusion Models(*ICMR 2025*)](https://arxiv.org/abs/2502.19710)


[Instruct2Attack: Language-Guided Semantic Adversarial Attacks](https://arxiv.org/abs/2311.15551)


[Semantic Adversarial Attacks via Diffusion Models](https://arxiv.org/abs/2309.07398)

[Semantic Adversarial Attacks on Face Recognition through Significant Attributes](https://arxiv.org/abs/2301.12046)

[Demiguise Attack: Crafting Invisible Semantic Adversarial Perturbations with Perceptual Similarity(*IJCAI 2021*)](https://arxiv.org/abs/2107.01396)

[Breaking certified defenses: Semantic adversarial examples with spoofed robustness certificates(2020)](https://arxiv.org/abs/2003.08937)


[Evaluating Robustness to Context-Sensitive Feature Perturbations of Different Granularities(2020)](https://arxiv.org/abs/2001.11055)

## [Generating Semantic Adversarial Examples via Feature Manipulation in Latent Space(*TNNLS 2023*)](https://arxiv.org/abs/2001.02297)
**MOTIVATION：** 本文探究如何在潜空间中实现可控、可解释且人类可感知自然的语义级对抗扰动，以构造具有语义一致性且对分类器有效的对抗样本？



从攻击粒度的角度出发，作者可以将对抗攻击分为三类：非结构化（像素级）攻击、半结构化（层级）攻击、结构化（属性级）攻击

:::details 非结构化（像素级）攻击、半结构化（层级）攻击、结构化（属性级）攻击
**非结构化（像素级）攻击（non-structural / pixel-level）：**

现有的大多数对抗攻击都属于像素级非结构化扰动，即在输入图像的像素空间中添加微小的人工噪声。这类扰动虽然可以欺骗分类器，但：
- 生成的对抗图像与原图存在可检测差异；
- 缺乏可解释性，人类无法理解扰动的语义意义。

因此，许多防御方法（如基于范数约束的对抗训练、图像重建或预处理滤波等）可以通过消除这类像素级扰动来缓解攻击效果。

**半结构化（层级）攻击（semi-structural / layer-level）**

为了提高对抗样本的可解释性，一些研究尝试在中间层或特征层施加结构化扰动（如旋转、裁剪、RGB颜色变化等），利用人类感知中的“形状偏置（shape bias）”属性来生成对抗样本。

然而，此类方法的局限在于：

- 变换粒度由网络层特征固定决定，缺乏灵活性；
- 对不同样本效果不一致；
- 无法对所有输入实现有效的误导。

因此，这类扰动被归类为半结构化或层级层次的扰动（semi-structural level perturbation）。

**结构化（属性级）攻击（structural / attribute-level）**

有研究尝试在生成模型（如VAE或GAN）的潜空间中进行结构化扰动（structural perturbation）【6】，以期获得更高层次的语义控制能力。然而，这些方法仍存在显著问题：

- 难以捕捉潜变量扰动与语义属性之间的对应关系；
- 随机扰动往往造成输入空间中明显的变化；
- 缺乏语义层面的可解释性与可控性。

:::
作者认为要实现真正细粒度的语义级扰动（fine-grained semantic perturbation），关键在于潜空间变换的可解释性与可控性（controllability）。

<font size=4>本文核心方法：</font>

作者通过操纵单个或多个潜变量，设计出相应的对抗扰动，并提出了两种无监督语义操控方法：

**基于向量的解耦表示（vector-based disentangled representation）**

对于简单的图像类型（如手写数字），使用低维潜向量即可捕获主要语义特征。本文提出了一种**单层 CF-VAE（Onefold CF-VAE）** 结构，以获得解耦且主题无关的潜变量表示。

为了获得与类别标签无关的潜变量表示，引入一个额外的分类器 𝐶 来估计潜向量 𝑧 的类别信息。然后，通过 **对抗学习（Adversarial Learning）** 让编码器学习“欺骗”该分类器，从而实现主题无关的表示提取。

该分类器 $q_\xi(c|z)$ 的损失函数为交叉熵形式：

$$
L_C = -\mathbb{E}_{q_\phi(c|z)} \sum_c I(c = y) \log q_\xi(c|z)
$$

其中：
- I(c=y)为指示函数
- q_\xi(c|z)是分类器softmax输出概率

为使编码器提取的特征与类别无关，编码器同时被训练以最大化分类器的不确定性，即“欺骗”分类器：

$$
L_E = \mathbb{E}_{q_\phi(c|z)} \sum_c \frac{1}{C} \log q_\xi(c|z)
$$

该项被称为主题无关性损失（Irrelevance Term）。

为增强潜变量之间的独立性，本文引入**总相关性（Total Correlation, TC）**正则项：

$$
TC(z) = KL(q(z) \| \tilde{q}(z)) = \mathbb{E}_{q(z)} \left[ \log \frac{q(z)}{\tilde{q}(z)} \right]
$$

其中：
- $q(z)$ 为潜变量的联合分布
- $\tilde{q}(z)$ 表示潜变量各维的独立分布乘积。

由于 TC 难以直接计算，本文通过训练一个判别器 $D_{TC}$,来估计样本是否来自$q(z)$ 或其打乱版本 $\tilde{q}(z)$ ，最终TC项被近似为：

$$
L_T = TC(z) \approx \mathbb{E}_{q(z)} \left[ \log \frac{D(z)}{1 - D(z)} \right]
$$

CF-VAE 的完整训练目标综合了四个部分：

$$
\frac{1}{N} \sum_{i=1}^{N} 
\left[
    \mathbb{E}_{q_\phi(z|x^{(i)})} [\log p_\theta(x^{(i)}|z)] 
    - D_{KL}(q_\phi(z|x^{(i)}) \| p(z))
\right]
- \gamma L_T - L_E
$$

重建损失$L_R$,KL 正则项$L_K$,TC 解耦项$L_T$,主题无关项$L_E$

- 编码器参数 $\phi$: 依据 $-\nabla_\phi(-L_R + L_K + \gamma L_T + L_E)$ 更新；
- 分类器参数 $\varsigma$: 依据 $-\nabla_\varsigma(L_C)$ 更新；
- 解码器参数 $\theta$: 依据 $-\nabla_\theta(L_R)$ 更新；
- TC 判别器参数 $\nu$: 依据 $-\nabla_\nu(L_T)$ 更新。






**基于 GAN 的增强模块**
在 CF-VAE 中，重建质量与解耦性存在权衡关系。为提高重建图像的自然度与细节质量，本文引入GAN-Based Booster:使用预训练 GAN 判别器的中间特征层作为“感知特征距离（feature-wise similarity）”，替代像素级的重建误差，从而使重建更加符合人类视觉语义






