---
date: 2023-10-09
category:
  - 炼丹
tag:
  - DDP
  - 分布式
---
# AVSD配置或实验记录
## 实验配置须知
实验环境： GeForce RTX 3090  × 2
服务器 env：avsd 

batch size： 32 64(单卡会爆显存)：也就是说baseline上，一张3090最多把B设置成32

模板：https://www.sciencedirect.com/journal/computer-vision-and-image-understanding/publish/guide-for-authors#20040

## 实验思路
1. 可解释性
>语意分割，视频层面Mask做"扰动"
 通过视频定位模型做可解释性

2. 特征对齐
> 模态对齐：各模态和其对应的其他模态应具有相同的语意，但应考虑不用负样本而是聚类的方式

3. 对话方面：通过Rva对历史进行回溯
> 通过指代消解这一角度入手 ?
