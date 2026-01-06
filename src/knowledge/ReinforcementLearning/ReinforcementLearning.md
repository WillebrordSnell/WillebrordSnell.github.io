---

date: 2025-11-24
category:
  - 长见识
tag:
  - 通识
  - 强化学习
---
# 强化学习

## Policy Gradient
![](./assets/img/PolicyGradient_fig1.png)

![](./assets/img/PolicyGradient_fig2.png)

![](./assets/img/PolicyGradient_fig3.png)

![](./assets/img/PolicyGradient_fig4.png)

![](./assets/img/PolicyGradient_fig5.png)

![](./assets/img/PolicyGradient_fig6.png)

![](./assets/img/PolicyGradient_fig7.png)

![](./assets/img/PolicyGradient_fig8.png)

![](./assets/img/PolicyGradient_fig9.png)

![](./assets/img/PolicyGradient_fig10.png)


## PPO（Proximal Policy Optimization）

:::detials On-plolicy v.s. Off-policy
**On-plolicy:** 当前训练的agent与最终和环境互动的agent为同一个称为~
- on-policy在理论上更"干净"，因为更新的目标和采样分布一致，使得训练更稳定，对于随机策略（如高斯）自然契合
- 样本效率低，需要持续和环境互动，旧数据很快"过期"成本高

**Off-plolicy:** 当前训练的agent与最终和环境互动的agent不为同一个称为~
- 样本效率高，能够利用经验回放反复利用旧数据，能够用任意行为策略探索，同时学习更优的目标策略

- 训练不稳地，容易出现"分布偏移"。往往需要矫正机制,例如重要性采样，target network，replay buffer等
:::

![](./assets/img/PPO_fig1.png)

![](./assets/img/PPO_fig2.png)

![](./assets/img/PPO_fig3.png)

![](./assets/img/PPO_fig4.png)

![](./assets/img/PPO_fig5.png)

![](./assets/img/PPO_fig6.png)

![](./assets/img/PPO_fig7.png)

![](./assets/img/PPO_fig8.png)

## Q-learning

<font size=4><b>BASIC IDEA:</b></font>

![](./assets/img/Q_learning_fig1.png)

![](./assets/img/Q_learning_fig2.png)

![](./assets/img/Q_learning_fig3.png)

![](./assets/img/Q_learning_fig4.png)

![](./assets/img/Q_learning_fig5.png)

![](./assets/img/Q_learning_fig6.png)

![](./assets/img/Q_learning_fig7.png)

![](./assets/img/Q_learning_fig8.png)

![](./assets/img/Q_learning_fig9.png)

![](./assets/img/Q_learning_fig10.png)

![](./assets/img/Q_learning_fig11.png)

![](./assets/img/Q_learning_fig12.png)

![](./assets/img/Q_learning_fig13.png)

![](./assets/img/Q_learning_fig14.png)

<font size=4><b> ADVANCED TIPS:</b></font>

![](./assets/img/Q_learning_fig15.png)

![](./assets/img/Q_learning_fig16.png)

![](./assets/img/Q_learning_fig17.png)

![](./assets/img/Q_learning_fig18.png)

![](./assets/img/Q_learning_fig19.png)

![](./assets/img/Q_learning_fig20.png)

![](./assets/img/Q_learning_fig21.png)

![](./assets/img/Q_learning_fig22.png)

![](./assets/img/Q_learning_fig23.png)

![](./assets/img/Q_learning_fig24.png)

![](./assets/img/Q_learning_fig25.png)

![](./assets/img/Q_learning_fig26.png)

![](./assets/img/Q_learning_fig27.png)

![](./assets/img/Q_learning_fig28.png)

<font size=4><b> CONTINUOUS ACTIONS:</b></font>

![](./assets/img/Q_learning_fig29.png)

![](./assets/img/Q_learning_fig30.png)

![](./assets/img/Q_learning_fig31.png)

## Actor-Critic



## Sparse Reward



## Imitation Learning
