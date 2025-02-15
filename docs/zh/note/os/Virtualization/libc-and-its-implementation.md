---
title: C 标准库及其实现
order: 17
icon: C
categories:
  - 操作系统
tags:
  - 系统调用
  - UNIX
  - Shell
---

> **背景回顾**：我们已经在系统调用的基础上实现了 Shell；你应该有一种 “能实现整个应用世界” 的感觉。为了让这个世界更丰富多彩，为开发者提供便利就是至关重要的。UNIX 世界的蓬勃发展离不开 C 语言和它的标准库，长久以来都为 Systems Programming 树立了一套标杆。

**本讲内容**：系统调用之上的世界：C 标准库和实现。

<!-- more --->

## `libc` 简介

### 关于 *pipe* 的补充

如果读端关闭，会收到 *SIGPIPE* 信号

- 如果读端提前关闭，就会产生 *Broken Pipe* 现象
  - 例如 `ls | head -n 1`
  - `ls` 的数据很多，但是 `head` 只接收一条数据就关闭读入端了

###  C 语言的优点

计算机是层层包装后的产物：(自里向外排序)

- hardware
- OS kernel (Virtualize)
- Shell、`libc` (`syscall`)
- Applications
- Human Users

我们可以说，*syscall* 是地基，C 语言 (libc) 是框架 —— 它只是系统调用的一层 **浅封装**。

因此，C 语言编程的优点是显而易见的：

- 容易移植
- 稳定性好
  - 是 ISO IEC 标准的一部分
  - 不用担心升级以后原先可以用的包没了的情况
    - 点名批评 js, python!
- ...

### 如何实现一个 `libc` ?

> 我们可以实现任何东西 —— 计算机世界里面没有魔法。
>
> 那么我们在理解 `syscall` 的基础上，能不能实现 `libc` 呢？

- 先学习借鉴一下已有的 `libc` 实现吧
  - 课上推荐了 [musl](https://musl.libc.org/)

我们可以链接 musl 的 `libc` 实现来调试一个 C 程序。在调试的过程中，兴许你可以了解

- 一个程序及其参数如何被 OS 加载上来
- `libc` 如何一步一步地启动 `main` 函数
- 在程序响应退出之前，如何执行已注册的钩子函数与其余必要的函数
- ...

