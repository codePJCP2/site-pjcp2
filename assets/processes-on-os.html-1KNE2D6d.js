import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,f as s,e as l,o as n}from"./app-CNMOz0DB.js";const t="/assets/image-20241127154109569-DiMB5vJ3.png",h="/assets/image-20241127160658175-DldGbuJh.png",p="/assets/image-20241127202701181-CVMw6VTO.png",k="/assets/image-20241127202829117-sH8j4Ja8.png",d="/assets/QQ%E5%9B%BE%E7%89%8720241127202910-CX5eyiaX.jpg",r="/assets/image-20241127203057637-CSJLzAOU.png",o="/assets/image-20241127204125597-C4u70i_2.png",c="/assets/image-20241128102944349-D-xeMAO3.png",g="/assets/image-20241128111011145-BLivSZMM.png",A="/assets/image-20241128112742438-BAqmEKfk.png",y={};function B(u,i){return n(),e("div",null,[i[0]||(i[0]=s("<blockquote><p><strong>背景回顾</strong>：有关状态机、并发和中断的讨论给我们真正理解操作系统奠定了基础，现在我们正式进入操作系统和应用程序的 “边界” 了。让我们把视角回到单线程应用程序，即 “执行计算指令和系统调用指令的状态机”，开始对操作系统和进程的讨论。</p></blockquote><p><strong>本讲内容</strong>：操作系统上的进程</p><ul><li>操作系统上的第一个进程</li><li>UNIX/Linux 进程管理 API: <em>fork</em> , <code>execve</code> , <em>exit</em></li></ul>",3)),l(" more -"),i[1]||(i[1]=s('<h2 id="加载第一个进程" tabindex="-1"><a class="header-anchor" href="#加载第一个进程"><span>加载第一个进程</span></a></h2><h3 id="操作系统的启动流程" tabindex="-1"><a class="header-anchor" href="#操作系统的启动流程"><span>操作系统的启动流程</span></a></h3><blockquote><p>起点：CPU Reset，得到 <strong>硬件的初始状态</strong></p></blockquote><h4 id="firmware-阶段" tabindex="-1"><a class="header-anchor" href="#firmware-阶段"><span><em>Firmware</em> 阶段</span></a></h4><ul><li>CPU Reset 后，<em>Firmware</em> 代码开始执行</li><li>加载操作系统，得到 <strong>操作系统的初始状态</strong></li></ul><h4 id="操作系统初始化阶段" tabindex="-1"><a class="header-anchor" href="#操作系统初始化阶段"><span>操作系统初始化阶段</span></a></h4><ul><li>操作系统扫描系统中的硬件、初始化数据结构……</li><li>加载第一个进程 (状态机)，得到 <strong>该状态机的初始状态</strong></li></ul><blockquote><p>既然操作系统在初始化阶段会加载第一个进程，那么我们可不可以控制这个行为，让操作系统在初始化阶段加载 <strong>我们指定的已经编译好的程序</strong> 并将这个状态机加载为进程？</p><p><em>ATFAI</em></p></blockquote><h4 id="操作系统执行阶段" tabindex="-1"><a class="header-anchor" href="#操作系统执行阶段"><span>操作系统执行阶段</span></a></h4><ul><li>状态机在 CPU 上执行 (<strong>控制权被移交给第一个进程</strong>)</li><li>允许执行 <code>syscall</code> 进入操作系统代码</li></ul><p>整个 <em>Linux</em> 的 “世界” <strong>都是从这个进程开始</strong>，并通过一系列实现进程管理的操作系统 API 创建的。</p><figure><img src="'+t+'" alt="进程树" tabindex="0" loading="lazy"><figcaption>Linux 世界的起点</figcaption></figure><h2 id="创建新进程" tabindex="-1"><a class="header-anchor" href="#创建新进程"><span>创建新进程</span></a></h2><p>在 <em>Linux</em> 系统完成初始化之后，我们已经有了第一个状态机。</p><p>想要创建计算机世界的话，也许需要一个能够 “创建状态机” 的 API。</p><p><em>UNIX</em> 给出的答案是：<code>fork()</code> 。它是 UNIX 世界中 <strong>唯一</strong> 能够创建状态机的方法。</p><div class="language-c" data-highlighter="shiki" data-ext="c" data-title="fork() 声明" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">pid_t</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><h3 id="fork" tabindex="-1"><a class="header-anchor" href="#fork"><span><code>fork</code></span></a></h3><p><code>fork()</code> 对当前程序的状态 (也就是当前状态机) 做一个完整的复制，包括但不限于 <strong>寄存器现场</strong> 、 <strong>内存</strong> 等。</p><p>但是返回值略微有些差异 (<code>%rax</code> 寄存器中的值会有差异)，可以借此来区分状态机的父子关系：</p><ul><li>对于父进程来说，得到的返回值为子进程 ID</li><li>对于子进程来说，得到的返回值为 0</li></ul><p>我们可以从状态机的视角来理解 <code>fork()</code> 的行为：</p><ul><li><p>将父状态机的状态 <strong>完整拷贝</strong> 一份，形成子状态机 (子进程)</p></li><li><p>同时为这一对状态机之间构建父子关系</p><ul><li>有了父子关系，我们就有了 <code>pstree</code></li></ul></li><li><p>如果复制失败则返回 <code>-1</code></p></li></ul><h3 id="fork-bomb" tabindex="-1"><a class="header-anchor" href="#fork-bomb"><span><em><code>Fork</code> Bomb</em></span></a></h3><p>顾名思义，这是一场由 <code>fork</code> 引发的 &quot;事故&quot;。</p><p>它的想法很简单：</p><ul><li>新建状态机需要资源 <ul><li>那么一直创建就会让系统 💥</li></ul></li></ul><figure><img src="'+h+`" alt="fork bomb" tabindex="0" loading="lazy"><figcaption>fork bomb</figcaption></figure><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="小型 fork bomb" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&amp;};</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   # 刚才的一行版本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {         </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 格式化一下</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {      </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># bash: 允许冒号作为 identifier</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">f</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以把它理解成递归：</p><ul><li>首次执行 <code>f</code> 的时候，<code>f</code> 尝试着创建一个管道，管道两头均为 <code>f</code></li><li>后续...聪明的你应该已经想到了</li></ul><h3 id="理解-fork-——-练习" tabindex="-1"><a class="header-anchor" href="#理解-fork-——-练习"><span>理解 <code>fork</code> —— 练习</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>采用状态机的视角能够更好地帮助你分析程序的行为。</p></div><h4 id="练习-1" tabindex="-1"><a class="header-anchor" href="#练习-1"><span>练习 1</span></a></h4><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="exercise 1" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line highlighted"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">pid_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">pid_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> y </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> %d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这类程序，我们最需要关注的一些重要问题：</p><ul><li>到底创建了几个状态机？</li><li><code>pid</code> 分别是多少？ <ul><li>“状态机视角” 帮助我们严格理解</li></ul></li></ul><h4 id="练习-2" tabindex="-1"><a class="header-anchor" href="#练习-2"><span>练习 2</span></a></h4><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="exercise 2" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Exer 2.1</span></span>
<span class="line highlighted"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Exer 2.2</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 &quot;状态机视角&quot; 可以帮助我们严格理解程序的实际行为 <ul><li>计算机系统里 <strong>没有魔法</strong></li><li>(无情执行指令的) <strong>机器永远是对的</strong></li></ul></li></ul><div class="hint-container warning"><p class="hint-container-title">警告</p><div style="text-align:center;"><p>请先自行尝试理解程序行为后再进一步编写程序验证!</p></div></div><p>我们把 <code>for</code> 循环拆出来看看：</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="拆解 for 循环" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // int i = 0;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;...&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // int i = 1;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;...&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么这两段程序都在依序做这几条指令：</p><ol><li><code>fork()</code></li><li><code>print</code></li><li><code>fork()</code></li><li><code>print</code></li></ol><p>那我们也可以依序分析状态机在各个步骤的状态 (以 2.1 为例)：</p><ol><li><code>PC = 1</code> : <code>fork()</code> 创建了一个新的状态机，因此当前持有：状态机 (<code>PC = 1</code>) * 2</li><li><code>PC = 2</code> : <code>printf</code> , 因此输出两行 <code>Hello</code></li><li><code>PC = 3</code> : <code>fork()</code> , 当前持有： 状态机 (<code>PC = 3</code>) * 4</li><li><code>PC = 4</code> : <code>printf</code> , 再输出四行 <code>Hello</code></li></ol><p>我们可以跑个程序验证一下：</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="测试程序" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;unistd.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="示例程序执行结果" tabindex="0" loading="lazy"><figcaption>示例程序执行结果</figcaption></figure><p>看样子程序执行结果很符合我们的预期。</p><p>那再看看 2.2 ?</p><figure><img src="'+k+'" alt="似乎有点不对劲?" tabindex="0" loading="lazy"><figcaption>似乎有点不对劲?</figcaption></figure><figure><img src="'+d+'" alt="???" tabindex="0" loading="lazy"><figcaption>怎么会有8个Hello???</figcaption></figure><p>并且，似乎还有更匪夷所思之事...</p><figure><img src="'+r+`" alt="这对吗?" tabindex="0" loading="lazy"><figcaption>这对吗??</figcaption></figure><div style="text-align:center;"><p>别急，<strong>机器永远是对的</strong>。那到底什么地方出问题了呢？</p></div><ul><li>似乎只能从程序入手了 <ul><li><code>fork()</code> 包没问题的 —— 它只负责完整复制当前状态</li><li>那 ... 难道是 <code>printf</code> 的问题？</li></ul></li></ul><p>来看一个例子吧：</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="内容能否被正常打印?" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello!</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello!&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 非法操作</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的执行结果是这样的：</p><figure><img src="`+o+`" alt="执行结果" tabindex="0" loading="lazy"><figcaption>执行结果</figcaption></figure><p>为什么只有 <strong>一个</strong> Hello 被正常打印出来了呢？</p><p>是因为 <code>printf</code> 缓冲区刷新策略的问题。详见 <a href="https://www.man7.org/linux/man-pages/man3/setbuf.3.html" target="_blank" rel="noopener noreferrer">setbuf(3) - Linux manual page</a></p><p>三类缓冲模式大致如下：</p><ul><li><code>unbuffered</code> : 无缓冲模式。即刻打印待输出的字符。</li><li><code>line-buffered</code> : 行缓冲模式。遇到换行符 <code>\\n</code> 后打印。(终端默认模式)</li><li><code>fully-buffered</code> : 无限缓冲区模式。(待求证) 程序返回后打印。(重定向、管道等场景默认模式)</li></ul><p>所以，对待 2.2 代码的时候，我们需要把待执行的指令序列修改一下：</p><ol><li><code>fork()</code></li><li><code>buffer += A</code></li><li><code>fork()</code></li><li><code>buffer += A</code></li><li><code>flush(buffer)</code></li></ol><p>试着再来分析一下吧，记住，程序就是状态机！而 <code>fork()</code> 会将状态 <strong>完全</strong> 拷贝！</p><blockquote><p>启示：因为计算机总是在执行指令，因此你总是能找到 &quot;破坏&quot; 你对这个程序行为正常预期的那一条指令，然后...重构模型，<s>或者干掉它</s>。</p></blockquote><h2 id="运行可执行文件" tabindex="-1"><a class="header-anchor" href="#运行可执行文件"><span>运行可执行文件</span></a></h2><blockquote><p>虽然说 <code>fork()</code> 能够创造出计算机世界，但是这种实现好像和我们见到的不是那么一样 —— 我们可以通过双击或命令行等方式来启动一个应用程序 —— 而这个应用程序 <strong>在行为上</strong> 几乎不大可能是第一个进程的副本 。所以我们可能会想 : 操作系统里面应该不只有 <code>fork()</code> 才对。那么该如何运行可执行程序呢？</p></blockquote><h3 id="借助-execve-运行可执行文件" tabindex="-1"><a class="header-anchor" href="#借助-execve-运行可执行文件"><span>借助 <code>execve</code> 运行可执行文件</span></a></h3><blockquote><p>为了运行可执行文件，UNIX 给出的答案是 <code>execve</code> 。</p></blockquote><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="execve 声明" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> execve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> char</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">filename</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">           char</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> argv</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">[]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> char</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> envp</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">[]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>从状态机的视角来看，<code>execve</code> 的作用就是 <strong>重置状态机</strong> —— 将当前进程重置为指定的可执行文件对应的初始状态 (夺舍说是)，即原进程中的状态被完全替换为这个可执行程序对应的初始状态。</p><div class="hint-container tip"><p class="hint-container-title">插曲</p><blockquote><p>那么，什么是可执行文件呢？</p></blockquote><p>还是从状态机的视角出发，可执行文件就是 <strong>一个状态机初始化状态的描述</strong>。</p></div><p><code>execve</code> 这一系统调用的行为可以描述如下：</p><ul><li>执行名为 <code>filename</code> 的程序</li><li>允许对新状态机设置参数 <code>argv</code> (v) 和环境变量 <code>envp</code> (e) <ul><li>刚好对应了 <code>main()</code> 的参数！</li></ul></li><li><code>execve</code> 是 <strong>唯一</strong> 能够 “执行程序” 的系统调用 <ul><li>因此也是一切进程 <code>strace</code> 的第一个系统调用</li></ul></li></ul><figure><img src="`+c+`" alt="一切新进程的起点" tabindex="0" loading="lazy"><figcaption>一切新进程的起点</figcaption></figure><h3 id="创建一个新的以指定可执行程序为初始状态的状态机" tabindex="-1"><a class="header-anchor" href="#创建一个新的以指定可执行程序为初始状态的状态机"><span>创建一个新的以指定可执行程序为初始状态的状态机</span></a></h3><p>也许聪明的你已经想到了 —— <code>fork()</code> + <code>execve()</code> 就能够办到这件事！</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="sys_spwan()" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    perror</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;fork&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">goto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> fail;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Child</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    execve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(...);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    perror</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;execve&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">goto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> fail;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // Parent</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h3><p>环境变量代表了应用程序执行的环境信息。</p><ul><li>我们可以在终端中使用 <code>env</code> 命令进行查看 <ul><li><code>PATH</code>: 可执行文件搜索路径</li><li><code>PWD</code>: 当前路径</li><li><code>HOME</code>: home 目录</li><li><code>DISPLAY</code>: 图形输出</li><li><code>PS1</code>: shell 的提示符</li></ul></li><li><code>export</code> : 告诉 shell 在创建子进程时设置环境变量 <ul><li>小技巧：<code>export ARCH=x86_64-qemu</code> 或 <code>export ARCH=native</code></li></ul></li></ul><h2 id="退出程序" tabindex="-1"><a class="header-anchor" href="#退出程序"><span>退出程序</span></a></h2><blockquote><p><code>fork()</code> 与 <code>execve()</code> 的组合已经能够完成创建计算机世界的两个主要部分 —— 复制 与 替换。而 复制 + 替换 = 自由执行任意可执行程序。</p><p>然后你会发现 ： 我们的叉叉到哪里去了？或者说，我们该如何销毁一个状态机？</p></blockquote><p>UNIX 给出的答案是 : <code>_exit()</code></p><h3 id="exit-——-销毁状态机" tabindex="-1"><a class="header-anchor" href="#exit-——-销毁状态机"><span><code>_exit()</code> —— 销毁状态机</span></a></h3><div class="language-c" data-highlighter="shiki" data-ext="c" data-title="exit 的声明" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> _exit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> status</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><p>它的行为可以描述如下：</p><ul><li>立即销毁当前状态机，并且允许有一个返回值 <code>status</code></li><li>子进程被销毁时会通知父进程</li></ul><p><code>_exit()</code> 的行为似乎非常简单易懂。并且它也可以处理父子进程相关的一些问题。</p><p>但是对于 <strong>多线程程序</strong> 来说呢？</p><p>这种单一的行为似乎就不太能满足我们的需求了。因此结束程序执行不止这一种方法。</p><h3 id="终止程序执行的三种方法" tabindex="-1"><a class="header-anchor" href="#终止程序执行的三种方法"><span>终止程序执行的三种方法</span></a></h3><blockquote><p><code>int atexit(void (*__func)(void))</code></p><p>Register a function to be called when normal <code>exit</code> is called.</p></blockquote><ul><li><code>exit(0)</code><ul><li>会调用 <code>atexit</code></li></ul></li><li><code>_exit(0)</code><ul><li>执行 <code>exit_group</code> 系统调用终止整个进程 (<strong>所有线程</strong>) <ul><li>细心的同学已经在 <code>strace</code> 中发现了</li></ul></li><li>会调用 <code>atexit</code> 吗？</li></ul></li><li><code>syscall(SYS_exit, 0)</code><ul><li>执行 “exit” 系统调用终止 <strong>当前线程</strong></li><li>会调用 <code>atexit</code> 吗？</li></ul></li></ul><figure><img src="`+g+'" alt="exit,_exit" tabindex="0" loading="lazy"><figcaption>exit,_exit</figcaption></figure><figure><img src="'+A+'" alt="syscall" tabindex="0" loading="lazy"><figcaption>syscall</figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>因为 <strong>“程序 = 状态机”</strong>，操作系统上进程 (运行的程序) 管理的 API 很自然地就是状态机的管理。</p><p>在 UNIX/Linux 世界中，以下三个系统调用创建了整个 “进程世界”，不论是我们常用的 IDE 和浏览器，还是编译时在后台调用的 gcc。其中:</p><ul><li><p><code>fork</code> 对当前状态机状态进行 <strong>完整复制</strong></p></li><li><p><code>execve</code> 将当前状态机状态 <strong>重置</strong> 为某个可执行文件描述的状态机</p></li><li><p><code>exit</code> 可以 <strong>销毁</strong> 当前状态机。(它有很多种写法，具体的作用也不大相同，稍微留心一下就好)</p></li></ul><p>在对这些概念有了绝对正确且绝对严谨的理解后，操作系统也就显得不那么神秘了。</p>',106))])}const m=a(y,[["render",B],["__file","processes-on-os.html.vue"]]),b=JSON.parse('{"path":"/zh/note/os/Virtualization/processes-on-os.html","title":"操作系统上的进程","lang":"zh-CN","frontmatter":{"title":"操作系统上的进程","order":14,"icon":"diagram-project","categories":["操作系统"],"tags":["进程","进程管理 API"],"description":"背景回顾：有关状态机、并发和中断的讨论给我们真正理解操作系统奠定了基础，现在我们正式进入操作系统和应用程序的 “边界” 了。让我们把视角回到单线程应用程序，即 “执行计算指令和系统调用指令的状态机”，开始对操作系统和进程的讨论。 本讲内容：操作系统上的进程 操作系统上的第一个进程 UNIX/Linux 进程管理 API: fork , execve ,...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/note/os/Virtualization/processes-on-os.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"操作系统上的进程"}],["meta",{"property":"og:description","content":"背景回顾：有关状态机、并发和中断的讨论给我们真正理解操作系统奠定了基础，现在我们正式进入操作系统和应用程序的 “边界” 了。让我们把视角回到单线程应用程序，即 “执行计算指令和系统调用指令的状态机”，开始对操作系统和进程的讨论。 本讲内容：操作系统上的进程 操作系统上的第一个进程 UNIX/Linux 进程管理 API: fork , execve ,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-28T03:51:44.000Z"}],["meta",{"property":"article:tag","content":"进程"}],["meta",{"property":"article:tag","content":"进程管理 API"}],["meta",{"property":"article:modified_time","content":"2024-11-28T03:51:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作系统上的进程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-28T03:51:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"codePJCP2\\",\\"url\\":\\"https://docs.pjcp2-personal.cn/zh/\\"}]}"]]},"headers":[{"level":2,"title":"加载第一个进程","slug":"加载第一个进程","link":"#加载第一个进程","children":[{"level":3,"title":"操作系统的启动流程","slug":"操作系统的启动流程","link":"#操作系统的启动流程","children":[]}]},{"level":2,"title":"创建新进程","slug":"创建新进程","link":"#创建新进程","children":[{"level":3,"title":"fork","slug":"fork","link":"#fork","children":[]},{"level":3,"title":"Fork Bomb","slug":"fork-bomb","link":"#fork-bomb","children":[]},{"level":3,"title":"理解 fork —— 练习","slug":"理解-fork-——-练习","link":"#理解-fork-——-练习","children":[]}]},{"level":2,"title":"运行可执行文件","slug":"运行可执行文件","link":"#运行可执行文件","children":[{"level":3,"title":"借助 execve 运行可执行文件","slug":"借助-execve-运行可执行文件","link":"#借助-execve-运行可执行文件","children":[]},{"level":3,"title":"创建一个新的以指定可执行程序为初始状态的状态机","slug":"创建一个新的以指定可执行程序为初始状态的状态机","link":"#创建一个新的以指定可执行程序为初始状态的状态机","children":[]},{"level":3,"title":"环境变量","slug":"环境变量","link":"#环境变量","children":[]}]},{"level":2,"title":"退出程序","slug":"退出程序","link":"#退出程序","children":[{"level":3,"title":"_exit() —— 销毁状态机","slug":"exit-——-销毁状态机","link":"#exit-——-销毁状态机","children":[]},{"level":3,"title":"终止程序执行的三种方法","slug":"终止程序执行的三种方法","link":"#终止程序执行的三种方法","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1732765904000,"updatedTime":1732765904000,"contributors":[{"name":"codePJCP2","email":"159783914+codePJCP2@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":9.19,"words":2757},"filePathRelative":"zh/note/os/Virtualization/processes-on-os.md","localizedDate":"2024年11月28日","autoDesc":true}');export{m as comp,b as data};
