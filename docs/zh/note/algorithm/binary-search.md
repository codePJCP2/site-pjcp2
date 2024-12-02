---
order: 2
icon: magnifying-glass
categories:
  - 算法
tags:
  - 数组
  - 二分查找
  - 红蓝染色法
---

# 二分查找 —— 红蓝染色法

## 原理

> 待查找区间：在这里特指未染色的部分！

以左闭右闭区间为例，对于 **非递减** 数组来说(其余有序数组同理)，根据一次二分我们可以确定 $[left, M]$ 区间内的大小情况：

- 若 $nums[M] \gt target$ , 则说明待查找的内容 (如果存在的话) 应该存在于 $[left, M]$ 这一区间内，此时应该往 $M$ 左侧查找
  - 此时把 $M$ 及其右侧染上 **蓝色** , 表示该区间内的元素满足 $\gt target$ 
  - 更新 $right = M - 1$
  - 因此 $right + 1$ 一定为蓝色
- 若 $nums[M] \leq target$ , 则说明待查找内容位于 $[M, right]$ 这一区间内，因此需要往 $M$ 右侧查找。
  - 此时把 $M$ 及其左侧染上 **红色** , 表示该区间内的元素满足 $\leq target$
  - 更新 $left = M + 1$
  - 因此 $left - 1$ 一定为红色
- 我们 **不查找已染色的区域**！
- 当待查找区间不合法的时候，结束查找
- $L = R + 1$ 就是待查找元素位置

注意，一次二分只能够染一次色！因为你只能通过当前 $nums[M]$ 的情况确定一侧区间与 $target$ 的大小关系。

## 左闭右开区间分析

如果换成查找左闭右开区间，那么根据上面的原理，我们也可以进行分析：

1. 初始化区间为 $[left, right)$ , 其中 $left = 0, right = nums.length$

2. 进行二分：$mid = left + (right - left) / 2$
3. 判断 $nums[mid]$ 与 $target$ 的大小关系：
   1. $nums[mid] \lt target$
      1. 说明 $mid$ 及其左侧的元素都 $\lt target$
      2. 我们把 $mid$ 及其左侧染成 **红色**
      3. 未染色的区间端点为 $mid + 1$, 更新 $left = mid + 1$
   2. $nums[mid] \ge target$
      1. 说明 $mid$ 及其右侧的元素都 $\gt target$
      2. 把 $mid$ 及其右侧染成 **蓝色**
      3. 未染色的区间端点为 $mid - 1$, 但由于是 **左闭右开** 区间，因此我们更新 $right = mid$ 以正好包裹未染色区间
4. 当待查找区间不合法的时候 !!$left = right$!! ，结束查找
5. $L = R$ 就是待查找元素位置

::: info 思考

如果数组中存在多个 $= target$ 的元素，那么上面介绍的方法会得到哪一个元素的下标？!!最左侧!!

这种性质与什么有关？

:::

## 时空复杂度分析

### 时间复杂度

$O(log N)$ , 因为我们每次二分查找都去掉了当前待查找区间中的一半元素。

### 空间复杂度

$O(1)$ , 仅使用到了若干变量

## 拓展

对于非递减数组，正常使用上述方法 (且能找得到的情况下) 的话，得到的会是 **最左侧** 元素的下标，即 $\geq target$ 的第一个下标。

如果我们要找 $\gt target$ , $\lt target$ , $\leq target$ 的元素下标的话，也可以通过这个方法来解决。

- $idx(\lt target) \Leftrightarrow idx(\geq target) - 1$
- $idx(\gt target) \Leftrightarrow idx(\geq (target + 1))$ (仅限整数数组可用)
- $idx(\leq target) \Leftrightarrow idx(\gt target) - 1$

