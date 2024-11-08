import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as i,b as e,e as n,f as l,o as r}from"./app-Oa0rtaQ8.js";const p="/assets/1727081146420-202000bc-adc6-412f-a4de-88f3964398ee-460238-JawK2pD_.jpeg",h="/assets/1727078542198-b562a7fe-5512-4d82-9637-eade0478f4b6-908406-ChhtYQZa.jpeg",o="/assets/1727078203870-23624409-a329-4f2a-a882-c95aa513c09d-212676-B8CJOgLu.png",d="/assets/1727078607109-11de43e4-6fbb-4f49-9bea-a1f13ed3566a-041733-B7D4mXzD.png",k="/assets/1727078755663-54108c6f-f789-49d6-924d-6cec6a79fc80-877595-DSEQAxFI.png",c="/assets/1727078845587-e806809b-b18b-4e91-a2d4-c143f9ce7e28-568996-JUeB0UqG.png",g={};function u(m,s){return r(),t("div",null,[s[0]||(s[0]=i("blockquote",null,[i("p",null,[i("strong",null,"背景回顾"),e("：我们已经知道，程序可以用状态机表示，而编译器实现了 “高级语言状态机” 到 “机器指令状态机” 的翻译。但我们的程序乃至操作系统，要想运行在计算机硬件上，还有一些 “我们不知道的约定”。")])],-1)),s[1]||(s[1]=i("p",null,[i("strong",null,"本讲内容"),e("：计算机系统的状态机模型；回答以下问题：")],-1)),s[2]||(s[2]=i("ul",null,[i("li",null,"什么是计算机 (硬件) 系统？"),i("li",null,"计算机硬件和程序员之间是如何约定的？"),i("li",null,"听说操作系统也是程序。那到底是鸡生蛋还是蛋生鸡？")],-1)),n(" more -"),s[3]||(s[3]=l('<h2 id="计算机系统的状态机模型" tabindex="-1"><a class="header-anchor" href="#计算机系统的状态机模型"><span>计算机系统的状态机模型</span></a></h2><p>根据绪论 2 中所抛出的 <code>Everything is state machine.</code> 这一思想，我们尝试着把计算机系统也抽象成一个状态机。</p><ul><li><p>状态</p><ul><li>内存、寄存器的数值</li><li>这就完了？</li></ul></li><li><p>初始状态</p><ul><li>由系统设计者规定 (CPU Reset)</li></ul></li><li><p>状态迁移</p><ul><li>从 PC 取指令执行</li><li>只有这一种简单操作吗？<br> 计算机系统具有物理态，它的状态与外部世界是有关系的，例如 I/O、中断、Reset 等<strong>外部输入的</strong>状态(不考虑<strong>内部</strong>必要的中断等)，这些都是客观存在的，但是计算机系统无法直接访问(与进程无法直接访问进程外的信息类似)。</li></ul></li><li><p>执行指令</p><ul><li>如果有多个处理器？ <ul><li>可以想象成 “每次选一个处理器执行一条指令”</li><li>在并发部分会回到这个问题</li></ul></li></ul></li><li><p>中断响应</p><ul><li><code>if (intr) goto vec;</code></li></ul></li><li><p>输入输出</p><ul><li>与 “计算机系统外” 交换数据</li><li>类似于程序：不使用 <code>syscall</code> 就等于死循环 -&gt; 不获取外部状态就等于死循环</li></ul></li></ul><h2 id="固件-firmware" tabindex="-1"><a class="header-anchor" href="#固件-firmware"><span>固件(Firmware)</span></a></h2><figure><img src="'+p+'" alt="画板" tabindex="0" loading="lazy"><figcaption>画板</figcaption></figure><h2 id="调试固件" tabindex="-1"><a class="header-anchor" href="#调试固件"><span>调试固件</span></a></h2><p>在 IBM PC/PC-DOS 2.0 (1983) 时代，计算机就与程序员有了如下约定：</p><ul><li>Firmware (BIOS) 会加载磁盘的前 512 字节到内存中的 <code>0x7c00</code> 位置 <ul><li>前提：这 512 字节最后是 <code>0x55</code>, <code>0xAA</code></li></ul></li></ul><figure><img src="'+h+`" alt="画板" tabindex="0" loading="lazy"><figcaption>画板</figcaption></figure><p>(看向了手头的 QEMU)：要不试试看吧</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;eb fe 11 22 33 44&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xxd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	  cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /dev/zero</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">head</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 504</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">	  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;55 aa&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xxd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) &gt; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">minimal.img</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># run the provided Makefile</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="The result of loading the &quot;minimal.img&quot; file" tabindex="0" loading="lazy"><figcaption>The result of loading the &quot;minimal.img&quot; file</figcaption></figure><figure><img src="'+d+'" alt="minimal.img 文件中的内容(512B)" tabindex="0" loading="lazy"><figcaption>minimal.img 文件中的内容(512B)</figcaption></figure><p>然后我们尝试着把最后 2 Byte 的内容修改一下：</p><figure><img src="'+k+'" alt="修改后的文件内容(只会读入前512B，所以最后的AA没影响)" tabindex="0" loading="lazy"><figcaption>修改后的文件内容(只会读入前512B，所以最后的AA没影响)</figcaption></figure><figure><img src="'+c+`" alt="执行修改后文件的结果" tabindex="0" loading="lazy"><figcaption>执行修改后文件的结果</figcaption></figure><p><strong>如果 Firmware 也是一段代码？</strong></p><p>计算机系统从 <code>CPU Reset</code> 开始：</p><ul><li><code>CPU Reset</code> 的时候，<code>0x7c00</code> 应该是啥也没有的</li><li>Firmware 的代码扫描了磁盘、加载了它<br> 那么照理来说，我们或许可以看到 Firmware 加载磁盘字节的过程，换句话说，我们应该能够看到 Firmware 中的哪条指令对 <code>0x7c00</code> 位置上的数据进行了修改。<br> 那你自然而然就能想到我们的老朋友 Debugger —— <code>gdb</code>。通过在 <code>0x7c00</code> 这一观察点上设置<a href="https://sourceware.org/gdb/current/onlinedocs/gdb.html/Set-Watchpoints.html" target="_blank" rel="noopener noreferrer">监视点(Watchpoint)</a> 与 Breakpoint，我们就能够调试并且观察到哪条指令对 <code>0x7c00</code> 位置上的内容进行了修改。</li></ul><blockquote><p>监视点：当被设置监视点的位置上的值被修改时，程序会暂停运行。结合 PC 指针即可获取到此前正在执行的指令。</p></blockquote><p>然而，每次调试都需要在 <code>0x7c00</code> 处添加监视点和断点，如果你手滑退出去了，又需要重新设置断点后调试，这也太烦人了。</p><p>所以，我们可以针对不同的调试需求预先定义 <code>gdb</code> 调试的相关设置，详见 <code>debug-firmware</code> 中的 <code>init.gdb</code> 文件内容与 <code>debug-bootloader</code> 中的 <code>debug.py</code> 脚本。</p><p>Extra：About -s and -S in qemu commandsIn the command qemu-system-x86_64 -s -S $&lt; &amp;, the options -s and -S serve the following purposes:-s (Shorthand for setting up GDB server):This option tells QEMU to start a GDB server(That&#39;s why we need to connect to the remote in init.gdb) on port 1234. This allows you to connect a GDB debugger to the QEMU instance for debugging <a href="http://purposes.It" target="_blank" rel="noopener noreferrer">purposes.It</a> is often used for debugging, enabling you to inspect the virtual machine&#39;s execution through a debugger like GDB.-S (Start execution in a stopped state):This option tells QEMU to start the virtual machine but keep the CPU in a paused (stopped) state. The execution won&#39;t start until you explicitly resume it, for example, using GDB commands.This is useful when you want to set breakpoints or examine the state of the system before running any code.Together, these options allow for powerful debugging capabilities where QEMU starts but waits for GDB to connect and control the execution flow of the virtual machine.</p><h2 id="makefile-的正确打开方式" tabindex="-1"><a class="header-anchor" href="#makefile-的正确打开方式"><span>Makefile 的正确打开方式</span></a></h2><blockquote><p>Every Makefile is a state machine -&gt; It just runs instructions.</p></blockquote><p>因此，我们可以像先前观察 C 程序一样去观察状态机本身以及状态机的执行情况。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -nB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># An example</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -nB</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ve</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;^\\(\\#\\|echo\\|mkdir\\|make\\)&#39;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> filter</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;s#</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$AM_HOME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">AM_HOME#g&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> easy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> read</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;s#</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PWD</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">#.#g&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="take-away-messages" tabindex="-1"><a class="header-anchor" href="#take-away-messages"><span>Take-away Messages</span></a></h2><p>计算机系统是严格的数学对象：没有魔法;计算机系统的一切行为都是可观测、可理解的。</p><ul><li>处理器是无情的执行指令的机器。</li><li>处理器会规定好 <code>Reset</code> 后的行为。</li><li><code>Reset</code> 后 Firmware 开始运行，再加载操作系统(bootloader)。</li><li>厂商逐渐形成了达成共识的 Firmware Specification (IBM PC “兼容机”、UEFI、……)。</li></ul>`,30))])}const b=a(g,[["render",u],["__file","Intro(3)-OS-from-Hardware's-Perspective.html.vue"]]),A=JSON.parse(`{"path":"/zh/note/os/Intro/Intro(3)-OS-from-Hardware's-Perspective.html","title":"Lec3 - 绪论(3)： 硬件视角的操作系统","lang":"zh-CN","frontmatter":{"title":"Lec3 - 绪论(3)： 硬件视角的操作系统","icon":"microchip","categories":["操作系统"],"tags":["绪论","硬件","固件"],"description":"背景回顾：我们已经知道，程序可以用状态机表示，而编译器实现了 “高级语言状态机” 到 “机器指令状态机” 的翻译。但我们的程序乃至操作系统，要想运行在计算机硬件上，还有一些 “我们不知道的约定”。 本讲内容：计算机系统的状态机模型；回答以下问题： 什么是计算机 (硬件) 系统？ 计算机硬件和程序员之间是如何约定的？ 听说操作系统也是程序。那到底是鸡生蛋...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/note/os/Intro/Intro(3)-OS-from-Hardware's-Perspective.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"Lec3 - 绪论(3)： 硬件视角的操作系统"}],["meta",{"property":"og:description","content":"背景回顾：我们已经知道，程序可以用状态机表示，而编译器实现了 “高级语言状态机” 到 “机器指令状态机” 的翻译。但我们的程序乃至操作系统，要想运行在计算机硬件上，还有一些 “我们不知道的约定”。 本讲内容：计算机系统的状态机模型；回答以下问题： 什么是计算机 (硬件) 系统？ 计算机硬件和程序员之间是如何约定的？ 听说操作系统也是程序。那到底是鸡生蛋..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T13:25:56.000Z"}],["meta",{"property":"article:tag","content":"绪论"}],["meta",{"property":"article:tag","content":"硬件"}],["meta",{"property":"article:tag","content":"固件"}],["meta",{"property":"article:modified_time","content":"2024-11-06T13:25:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lec3 - 绪论(3)： 硬件视角的操作系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-06T13:25:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"codePJCP2\\",\\"url\\":\\"https://docs.pjcp2-personal.cn/zh/\\"}]}"]]},"headers":[{"level":2,"title":"计算机系统的状态机模型","slug":"计算机系统的状态机模型","link":"#计算机系统的状态机模型","children":[]},{"level":2,"title":"固件(Firmware)","slug":"固件-firmware","link":"#固件-firmware","children":[]},{"level":2,"title":"调试固件","slug":"调试固件","link":"#调试固件","children":[]},{"level":2,"title":"Makefile 的正确打开方式","slug":"makefile-的正确打开方式","link":"#makefile-的正确打开方式","children":[]},{"level":2,"title":"Take-away Messages","slug":"take-away-messages","link":"#take-away-messages","children":[]}],"git":{"createdTime":1730811060000,"updatedTime":1730899556000,"contributors":[{"name":"codePJCP2","email":"159783914+codePJCP2@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":4.45,"words":1334},"filePathRelative":"zh/note/os/Intro/Intro(3)-OS-from-Hardware's-Perspective.md","localizedDate":"2024年11月5日","autoDesc":true}`);export{b as comp,A as data};