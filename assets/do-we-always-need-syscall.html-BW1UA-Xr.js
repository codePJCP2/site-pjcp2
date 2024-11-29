import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,f as a,o as l}from"./app-sTD1ZwdD.js";const t={};function n(o,s){return l(),i("div",null,s[0]||(s[0]=[a(`<h1 id="系统调用-——-是否必然需要-syscall" tabindex="-1"><a class="header-anchor" href="#系统调用-——-是否必然需要-syscall"><span>系统调用 —— 是否必然需要 <code>syscall</code> ?</span></a></h1><blockquote><p>这篇文章是经过 AI 优化的，想要看原先的分析的话可以看下面折叠块里的内容。</p></blockquote><details class="hint-container details"><summary>原先的简要分析</summary><p>程序对应的状态机在调用 <code>syscall</code> 的时候，大多数时候都是想要获取外界的数据，例如获取键盘输入、获取当前时间等。</p><p>实际上，状态机调用 <code>syscall</code> 的过程实际上是在 <strong>与操作系统通信</strong>，告诉操作系统我需要你帮我执行什么东西。传统的方法 (也是我们之前一直说的方法) 自然是将控制权移交给操作系统，这种过程中会涉及到切换到内核空间的上下文切换等复杂操作，对于 <code>gettimeofday</code> 这类需要即时数据的函数来说可能实现难度与效率可能都不是非常乐观。</p><p>但是我们在上面浏览地址空间全貌的时候发现了一种更加高效的方式 —— 内核与用户态进程<strong>共享内存</strong> —— 然后进程只需要读这块内存就完事了。读内存可比内核环境上下文切换快多了，对吧？</p><p>这种方式也许也可以用到系统调用上面：</p><ul><li><p>每个进程中存在一块 <strong>内核与进程的共享内存</strong></p></li><li><p>需要进行系统调用时，只需要往这块内存中放入对应的数据即可，例如系统调用号之类的内容</p><div class="language-asm line-numbers-mode" data-highlighter="shiki" data-ext="asm" data-title="使用汇编代码实现系统调用的例子" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    ; exit 系统调用</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">    mov</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rax</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#C678DD;">60</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                 ; 系统调用号 (sys_exit)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">    xor</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rdi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">rdi</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                ; 返回值 0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">    syscall</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">                     ; 调用系统调用</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>从某个地方再读取系统调用的返回值即可</p></li></ul><p>这样就完成了一次 <strong>不陷入内核</strong> 的系统调用。</p></details><p>在讨论系统调用时，我们通常将其看作用户空间程序与内核空间之间的桥梁，许多时候，进程通过系统调用来请求操作系统执行特定任务，比如获取当前时间、读取输入等。传统的做法是通过 <code>syscall</code> 来触发一个内核服务，这通常会涉及到 <strong>上下文切换</strong>，即从用户空间切换到内核空间再返回。这种过程相对来说开销较大，尤其是在需要频繁获取即时数据（如时间戳、外部设备输入等）时。</p><h2 id="上下文切换的开销" tabindex="-1"><a class="header-anchor" href="#上下文切换的开销"><span>上下文切换的开销</span></a></h2><p>每次执行系统调用时，操作系统必须将当前进程的上下文从用户模式切换到内核模式，然后执行内核代码，再返回用户模式。这一过程虽然必要，但无可避免地会增加开销。在高频次调用的场景下，比如 <code>gettimeofday()</code>，这种开销可能会影响系统的性能，尤其是在一些要求高性能的场合。</p><h2 id="共享内存的诱人之处" tabindex="-1"><a class="header-anchor" href="#共享内存的诱人之处"><span>共享内存的诱人之处</span></a></h2><p>在我们 [上次](./address-space-of-process.md#进程的地址空间 —— 全貌) 讨论内存地址空间时，提到了一种高效的通信方式 —— <strong>内核与用户空间的共享内存</strong>。通过这种机制，用户进程可以直接读写特定的内存区域，而不必通过传统的 <code>syscall</code> 进行上下文切换。相比之下，读内存的操作显然比进行一次用户态到内核态的切换要高效得多。因此，<strong>共享内存</strong>成为了一个相对诱人的选择，尤其在对性能要求较高的场景下。</p><p>具体来说，如果每个进程与内核之间能够共享一块内存区域，那么当进程需要与内核交互时，它只需更新这块共享内存区域，而不必通过 <code>syscall</code> 进行上下文切换。这样，进程可以通过读取共享内存来获取内核的响应，从而绕过了传统的上下文切换过程。</p><h2 id="如何实现" tabindex="-1"><a class="header-anchor" href="#如何实现"><span>如何实现？</span></a></h2><p>在这种机制下，进程与内核之间的通信流程可能类似于以下步骤：</p><ol><li>进程将需要的系统调用号及参数写入共享内存区。</li><li>内核定期检查或通过某种机制（如中断、轮询）读取共享内存，处理请求并将结果写回共享内存。</li><li>进程再从共享内存中读取处理结果。</li></ol><p>这样一来，进程与内核的通信就不再需要 <code>syscall</code> 触发的上下文切换，而是通过共享内存直接交换信息。</p><h2 id="为什么共享内存更高效" tabindex="-1"><a class="header-anchor" href="#为什么共享内存更高效"><span>为什么共享内存更高效？</span></a></h2><ul><li><strong>减少上下文切换</strong>：传统的系统调用需要频繁进行上下文切换，进程从用户模式切换到内核模式，再切换回用户模式，所有这些切换都带来了额外的性能开销。而通过共享内存，进程直接操作内存区，减少了这种不必要的切换。</li><li><strong>低延迟通信</strong>：共享内存允许用户空间进程和内核之间进行近乎即时的交互，不同于通过系统调用的方式需要等待内核处理和返回结果。这使得在某些实时性要求高的场合，能够更高效地获取数据。</li><li><strong>资源消耗低</strong>：内存访问远比系统调用的上下文切换和内核处理要轻量得多。通过共享内存，用户进程可以通过简单的内存读写操作与内核交换信息，避免了多次系统调用的资源消耗。</li></ul><h2 id="技术挑战与限制" tabindex="-1"><a class="header-anchor" href="#技术挑战与限制"><span>技术挑战与限制</span></a></h2><p>虽然共享内存在理论上具有较大优势，但在实际应用中也面临一些挑战和技术限制：</p><ul><li><strong>安全性问题</strong>：内核和用户空间之间的共享内存必须严格控制访问权限。任何不当的访问都可能导致系统崩溃或被恶意攻击。因此，操作系统需要在实现共享内存时采取适当的权限控制和内存保护措施。</li><li><strong>复杂性与同步问题</strong>：虽然通过共享内存可以避免上下文切换的开销，但也引入了新的同步问题。内核和用户进程如何协调共享内存的访问，避免竞争条件和数据不一致，仍然是一个技术难题。</li><li><strong>适用场景限制</strong>：并非所有系统调用都适合通过共享内存来优化。某些系统调用可能涉及较复杂的资源管理和调度逻辑，这些操作仍然需要通过 <code>syscall</code> 来完成，无法简单通过共享内存来替代。</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>通过共享内存来实现用户空间与内核空间的高效通信，确实为减少上下文切换提供了一个有吸引力的方案。通过这种机制，用户进程可以通过直接访问共享内存来与内核交互，而不需要每次都执行 <code>syscall</code>。这种方法能够显著减少开销，特别是在需要频繁获取系统数据（如时间、硬件输入等）的场景下。然而，尽管其在理论上具有更高的性能潜力，实际应用中仍然面临一些安全性、同步性等方面的挑战。因此，虽然共享内存提供了优化路径，但它并不能完全替代传统的系统调用机制，仍需要根据具体的使用场景来决定是否适用。</p>`,20)]))}const d=e(t,[["render",n],["__file","do-we-always-need-syscall.html.vue"]]),p=JSON.parse('{"path":"/zh/note/os/Virtualization/do-we-always-need-syscall.html","title":"系统调用 —— 是否必然需要 syscall ?","lang":"zh-CN","frontmatter":{"index":false,"icon":"memory","categories":["操作系统"],"tags":["系统调用"],"description":"系统调用 —— 是否必然需要 syscall ? 这篇文章是经过 AI 优化的，想要看原先的分析的话可以看下面折叠块里的内容。 原先的简要分析 程序对应的状态机在调用 syscall 的时候，大多数时候都是想要获取外界的数据，例如获取键盘输入、获取当前时间等。 实际上，状态机调用 syscall 的过程实际上是在 与操作系统通信，告诉操作系统我需要你帮...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/note/os/Virtualization/do-we-always-need-syscall.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"系统调用 —— 是否必然需要 syscall ?"}],["meta",{"property":"og:description","content":"系统调用 —— 是否必然需要 syscall ? 这篇文章是经过 AI 优化的，想要看原先的分析的话可以看下面折叠块里的内容。 原先的简要分析 程序对应的状态机在调用 syscall 的时候，大多数时候都是想要获取外界的数据，例如获取键盘输入、获取当前时间等。 实际上，状态机调用 syscall 的过程实际上是在 与操作系统通信，告诉操作系统我需要你帮..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-29T10:24:26.000Z"}],["meta",{"property":"article:tag","content":"系统调用"}],["meta",{"property":"article:modified_time","content":"2024-11-29T10:24:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统调用 —— 是否必然需要 syscall ?\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-29T10:24:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"codePJCP2\\",\\"url\\":\\"https://docs.pjcp2-personal.cn/zh/\\"}]}"]]},"headers":[{"level":2,"title":"上下文切换的开销","slug":"上下文切换的开销","link":"#上下文切换的开销","children":[]},{"level":2,"title":"共享内存的诱人之处","slug":"共享内存的诱人之处","link":"#共享内存的诱人之处","children":[]},{"level":2,"title":"如何实现？","slug":"如何实现","link":"#如何实现","children":[]},{"level":2,"title":"为什么共享内存更高效？","slug":"为什么共享内存更高效","link":"#为什么共享内存更高效","children":[]},{"level":2,"title":"技术挑战与限制","slug":"技术挑战与限制","link":"#技术挑战与限制","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1732875866000,"updatedTime":1732875866000,"contributors":[{"name":"codePJCP2","email":"159783914+codePJCP2@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.39,"words":1916},"filePathRelative":"zh/note/os/Virtualization/do-we-always-need-syscall.md","localizedDate":"2024年11月29日","autoDesc":true}');export{d as comp,p as data};
