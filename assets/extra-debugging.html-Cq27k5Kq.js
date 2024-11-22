import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a,b as l,d as r,g as i,e as d,f as s,r as g,o}from"./app-ac6YFfJL.js";const p={},u={id:"直面-fault-error-failure",tabindex:"-1"},f={class:"header-anchor",href:"#直面-fault-error-failure"},Q={class:"hint-container note"},T={class:"MathJax",jax:"SVG",style:{position:"relative"}},h={style:{"vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.346ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3689 1000","aria-hidden":"true"},k={style:{"text-align":"center"}},v={class:"MathJax",jax:"SVG",display:"true",style:{position:"relative"}},y={style:{"vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"89.961ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 39762.7 950","aria-hidden":"true"};function x(b,t){const n=g("Badge");return o(),e("div",null,[t[77]||(t[77]=a("blockquote",null,[a("p",null,[a("strong",null,"背景回顾"),l("：在快节奏的《操作系统》课中，插入一些 (重要得要命但与操作系统不完全相关的) 休闲内容。")])],-1)),a("p",null,[t[3]||(t[3]=a("strong",null,"本讲内容",-1)),t[4]||(t[4]=l("：调试理论：")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[0]||(t[0]=[l("Fault")])),_:1}),t[5]||(t[5]=l(", ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[1]||(t[1]=[l("Error")])),_:1}),t[6]||(t[6]=l(" 和 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[2]||(t[2]=[l("Failure")])),_:1}),t[7]||(t[7]=l("，以及我们应该如何应对程序里层出不穷的 bugs。"))]),d(" more -"),t[78]||(t[78]=s('<h2 id="调试理论" tabindex="-1"><a class="header-anchor" href="#调试理论"><span>调试理论</span></a></h2><p>如果我们已经知道 bug 的存在， <strong>如何找到它</strong> ？</p><h3 id="摆正心态-调试两大公理" tabindex="-1"><a class="header-anchor" href="#摆正心态-调试两大公理"><span>摆正心态 - 调试两大公理</span></a></h3><ul><li>公理 1 : <strong>机器永远是对的</strong><ul><li>因为机器是 <strong>无情执行指令的客观存在</strong></li><li>代码出现 bug 之后： <ul><li>99.99 % 是你编程层面的问题</li><li>亿点点概率是编译器的错误优化 (但你可以知道)</li><li>亿点点点点概率是硬件层面上的错误 (但你也可以知道)</li></ul></li></ul></li><li>公理 2 : <strong>未测代码永远是错的</strong><ul><li>反复测试过的代码都有可能是错的</li><li>我们 &quot;默认&quot; 不可能出现 bug 的地方，往往 bug 就在那里躺着 <ul><li>并发 bug 的触发需要：<strong>编译器 + 编译选项 + 特别的机器 + 特别的运气</strong></li></ul></li></ul></li></ul>',4)),a("h3",u,[a("a",f,[a("span",null,[t[11]||(t[11]=l("直面 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[8]||(t[8]=[l("Fault")])),_:1}),t[12]||(t[12]=l("，")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[9]||(t[9]=[l("Error")])),_:1}),t[13]||(t[13]=l("，")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[10]||(t[10]=[l("Failure")])),_:1})])])]),t[79]||(t[79]=a("p",null,'"软件" 这个词有两方面的含义：',-1)),a("ul",null,[a("li",null,[t[16]||(t[16]=l("人类需求在信息世界上的 ")),t[17]||(t[17]=a("strong",null,"投影",-1)),a("ul",null,[a("li",null,[t[15]||(t[15]=l("需求分析错误 -> ")),r(n,{type:"danger"},{default:i(()=>t[14]||(t[14]=[l("bug")])),_:1})])])]),a("li",null,[t[20]||(t[20]=l("计算过程中的 ")),t[21]||(t[21]=a("strong",null,"精确数学描述",-1)),a("ul",null,[a("li",null,[t[19]||(t[19]=l("实现错误 -> ")),r(n,{type:"danger"},{default:i(()=>t[18]||(t[18]=[l("bug")])),_:1})])])])]),t[80]||(t[80]=a("p",null,"调试软件为什么困难？",-1)),a("ul",null,[a("li",null,[t[24]||(t[24]=l("Bug 的触发经历了漫长的过程 (")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[22]||(t[22]=[l("Fault")])),_:1}),t[25]||(t[25]=l(", ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[23]||(t[23]=[l("Error")])),_:1}),t[26]||(t[26]=l(")"))]),a("li",null,[t[31]||(t[31]=l("可观测的现象未必能直接对应到 root cause 上 ")),a("ul",null,[a("li",null,[t[28]||(t[28]=l("我们只能观测到 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[27]||(t[27]=[l("failure")])),_:1}),t[29]||(t[29]=l(" (可观测的结果错)"))]),t[30]||(t[30]=a("li",null,"我们可以检查状态的正确性 (但非常费时)",-1))])]),t[32]||(t[32]=a("li",null,[l("无法预知 bug 在哪里 (每一行 "),a("strong",null,"“看起来”"),l(" 都挺对的)")],-1))]),t[81]||(t[81]=a("h3",{id:"调试理论-简单推论",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#调试理论-简单推论"},[a("span",null,"调试理论 & 简单推论")])],-1)),a("div",Q,[t[47]||(t[47]=a("p",{class:"hint-container-title"},"调试理论",-1)),a("p",null,[t[39]||(t[39]=l("如果我们能判定任意程序状态的正确性，那么给定一个 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[33]||(t[33]=[l("failure")])),_:1}),t[40]||(t[40]=l("，我们可以通过 ")),t[41]||(t[41]=a("strong",null,"二分查找",-1)),t[42]||(t[42]=l(" (听起来很诱人，我们可以在 ")),a("mjx-container",T,[(o(),e("svg",h,t[34]||(t[34]=[s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mo" transform="translate(763,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"></path></g><g data-mml-node="mi" transform="translate(1152,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path></g><g data-mml-node="mi" transform="translate(1450,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"></path></g><g data-mml-node="mi" transform="translate(1935,0)"><path data-c="1D454" d="M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"></path></g><g data-mml-node="mi" transform="translate(2412,0)"><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"></path></g><g data-mml-node="mo" transform="translate(3300,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"></path></g></g></g>',1)]))),t[35]||(t[35]=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"O"),a("mo",{stretchy:"false"},"("),a("mi",null,"l"),a("mi",null,"o"),a("mi",null,"g"),a("mi",null,"N"),a("mo",{stretchy:"false"},")")])],-1))]),t[43]||(t[43]=l(" 的时间内定位到临界状态) 定位到第一个 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[36]||(t[36]=[l("error")])),_:1}),t[44]||(t[44]=l(" 的状态，此时的代码就是 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[37]||(t[37]=[l("fault")])),_:1}),t[45]||(t[45]=l(" (")),r(n,{type:"danger"},{default:i(()=>t[38]||(t[38]=[l("bug")])),_:1}),t[46]||(t[46]=l(")。"))]),t[48]||(t[48]=a("p",null,"这条理论 (个人认为) 基于如下假设：",-1)),t[49]||(t[49]=a("ul",null,[a("li",null,[l("程序 / 指令执行的顺序性 (程序状态从 Correct 到 Error 只需要 "),a("strong",null,"错误的一步"),l(" !)")]),a("li",null,[l("你真的能够判定 "),a("strong",null,"任意"),l(" 状态的正确性吗 ? ( DP ? 图论 ? 😭)")])],-1))]),t[82]||(t[82]=a("p",null,[a("strong",null,"推论"),l(" :")],-1)),a("ul",null,[a("li",null,[t[53]||(t[53]=l("为什么我们喜欢 “单步调试”？ ")),a("ul",null,[t[52]||(t[52]=a("li",null,"从一个假定正确的状态出发",-1)),a("li",null,[t[51]||(t[51]=l("每个语句的行为有限，容易判定是否是 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[50]||(t[50]=[l("error")])),_:1})])])])]),t[83]||(t[83]=a("p",null,[l("调试理论其实已经指明了一个我们经常在用 (但是可能没有意识到的) 调试方法 —— "),a("strong",null,"分块"),l(" 。")],-1)),t[84]||(t[84]=a("p",null,[l("我们可以借助分块来 "),a("strong",null,"缩小错误可能存在的区间，进一步提出假设并作出验证"),l(" 。")],-1)),t[85]||(t[85]=a("p",null,"根据调试理论，我们还可以得到调试的一般方法：",-1)),a("div",k,[a("p",null,[t[55]||(t[55]=l("初始状态 -> 进行状态迁移 -> 判定迁移后的状态正确性 -> 缩小调试区域 (分块) -> 不断循环，直至定位到 ")),r(n,{type:"danger"},{default:i(()=>t[54]||(t[54]=[l("bug")])),_:1})])]),t[86]||(t[86]=s(`<p>而我们如何判断状态的正确性呢？</p><ul><li>看状态内部的特定变量值 (人人喜欢用的 <em>printf</em> 大法)</li><li>查看执行到该状态时的日志内容</li><li>...</li></ul><p>实质上，<strong>调试 = 观察状态机执行 (trace) 的某个侧面 + 分块</strong></p><h3 id="观察状态机执行的工具-调试工具" tabindex="-1"><a class="header-anchor" href="#观察状态机执行的工具-调试工具"><span>观察状态机执行的工具 (调试工具)</span></a></h3><ul><li><code>printf</code> → 自定义 log 的 trace <ul><li>灵活可控、能快速定位问题大概位置、适用于大型软件</li><li>无法精确定位、大量的 logs 管理起来比较麻烦</li></ul></li><li><code>gdb</code> → 指令/语句级 trace <ul><li>精确、指令级定位、任意查看程序内部状态</li><li>耗费大量时间</li></ul></li></ul><h3 id="self-check-list" tabindex="-1"><a class="header-anchor" href="#self-check-list"><span>Self-check-list</span></a></h3><p>调试理论给了大家在遇到 “任何问题” 时候 <em>self-check</em> 的列表：</p><ol><li>是怎样的程序 (状态机) 在运行？</li><li>我们遇到了怎样的 failure？</li><li>我们能从状态机的运行中从易到难得到什么信息？</li><li>如何二分检查这些信息和 error 之间的关联？</li></ol><h2 id="调试一切状态机" tabindex="-1"><a class="header-anchor" href="#调试一切状态机"><span>调试一切状态机</span></a></h2><p>bug 与 debug 并不只出现在你的代码中 —— <strong>计算机随时随地都在拒绝你</strong> :</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="计算机随时随地都有可能拒绝你" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> found</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fatal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;sys/cdefs.h&#39;:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> No</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> such</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> directory</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#include &lt;sys/cdefs.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/bin/ld:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cannot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> find</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -lgcc:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> No</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> such</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> directory</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make[2]:</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> ***</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> No</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> such</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> directory.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  Stop.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Makefile:31:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> recipe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;run&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> failed</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遇到这些问题，有一个 <strong>几乎</strong> 万能的方法是：<strong>相信自己遇到的问题别人也遇到过</strong> 。</p><p>但假如说这种问题 <strong>别人也没遇到过</strong> 呢？</p><h3 id="使用调试理论调试计算机世界的一切" tabindex="-1"><a class="header-anchor" href="#使用调试理论调试计算机世界的一切"><span>使用调试理论调试计算机世界的一切</span></a></h3><ul><li>合理论证 <strong>计算机世界的一切都可被调试</strong> 这一观点:</li></ul>`,15)),a("mjx-container",v,[(o(),e("svg",y,t[56]||(t[56]=[s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="2235" d="M23 411Q23 437 41 454T84 471Q108 471 125 454T143 411T126 368T83 351Q57 351 40 368T23 411ZM523 411Q523 437 541 454T584 471Q608 471 625 454T643 411T626 368T583 351Q557 351 540 368T523 411ZM274 -22Q274 4 291 21T334 38Q356 38 374 22T392 -22T375 -65T333 -82Q307 -82 291 -65T274 -22Z"></path></g><g data-mml-node="mi" transform="translate(944.8,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">程</text></g><g data-mml-node="mi" transform="translate(1944.8,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">序</text></g><g data-mml-node="mo" transform="translate(3222.6,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mi" transform="translate(4278.3,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">状</text></g><g data-mml-node="mi" transform="translate(5278.3,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">态</text></g><g data-mml-node="mi" transform="translate(6278.3,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">机</text></g><g data-mml-node="mspace" transform="translate(7278.3,0)"></g><g data-mml-node="mi" transform="translate(7278.3,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">又</text></g><g data-mml-node="mo" transform="translate(8556.1,0)"><path data-c="2235" d="M23 411Q23 437 41 454T84 471Q108 471 125 454T143 411T126 368T83 351Q57 351 40 368T23 411ZM523 411Q523 437 541 454T584 471Q608 471 625 454T643 411T626 368T583 351Q557 351 540 368T523 411ZM274 -22Q274 4 291 21T334 38Q356 38 374 22T392 -22T375 -65T333 -82Q307 -82 291 -65T274 -22Z"></path></g><g data-mml-node="mi" transform="translate(9500.9,0)"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mi" transform="translate(10263.9,0)"><path data-c="1D446" d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"></path></g><g data-mml-node="mo" transform="translate(11186.7,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mi" transform="translate(12242.4,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">状</text></g><g data-mml-node="mi" transform="translate(13242.4,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">态</text></g><g data-mml-node="mi" transform="translate(14242.4,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">机</text></g><g data-mml-node="mspace" transform="translate(15242.4,0)"></g><g data-mml-node="mo" transform="translate(15520.2,0)"><path data-c="2234" d="M273 411Q273 437 291 454T334 471Q358 471 375 454T393 411T376 368T333 351Q307 351 290 368T273 411ZM84 38Q110 38 126 21T143 -22Q143 -46 127 -64T83 -82Q57 -82 41 -65T24 -22Q24 4 41 21T84 38ZM524 -22Q524 4 541 21T584 38Q608 38 625 21T643 -22Q643 -45 627 -63T583 -82Q557 -82 541 -65T524 -22Z"></path></g><g data-mml-node="mi" transform="translate(16465,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">程</text></g><g data-mml-node="mi" transform="translate(17465,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">序</text></g><g data-mml-node="mo" transform="translate(18742.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mi" transform="translate(19798.6,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">状</text></g><g data-mml-node="mi" transform="translate(20798.6,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">态</text></g><g data-mml-node="mi" transform="translate(21798.6,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">机</text></g><g data-mml-node="mo" transform="translate(23076.3,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mi" transform="translate(24132.1,0)"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mi" transform="translate(24895.1,0)"><path data-c="1D446" d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"></path></g><g data-mml-node="mspace" transform="translate(25540.1,0)"></g><g data-mml-node="mo" transform="translate(25817.9,0)"><path data-c="2234" d="M273 411Q273 437 291 454T334 471Q358 471 375 454T393 411T376 368T333 351Q307 351 290 368T273 411ZM84 38Q110 38 126 21T143 -22Q143 -46 127 -64T83 -82Q57 -82 41 -65T24 -22Q24 4 41 21T84 38ZM524 -22Q524 4 541 21T584 38Q608 38 625 21T643 -22Q643 -45 627 -63T583 -82Q557 -82 541 -65T524 -22Z"></path></g><g data-mml-node="mi" transform="translate(26762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">计</text></g><g data-mml-node="mi" transform="translate(27762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">算</text></g><g data-mml-node="mi" transform="translate(28762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">机</text></g><g data-mml-node="mi" transform="translate(29762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">世</text></g><g data-mml-node="mi" transform="translate(30762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">界</text></g><g data-mml-node="mi" transform="translate(31762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">的</text></g><g data-mml-node="mi" transform="translate(32762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">一</text></g><g data-mml-node="mi" transform="translate(33762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">切</text></g><g data-mml-node="mi" transform="translate(34762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">都</text></g><g data-mml-node="mi" transform="translate(35762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">可</text></g><g data-mml-node="mi" transform="translate(36762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">被</text></g><g data-mml-node="mi" transform="translate(37762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">调</text></g><g data-mml-node="mi" transform="translate(38762.7,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">试</text></g></g></g>',1)]))),t[57]||(t[57]=a("mjx-assistive-mml",{unselectable:"on",display:"block"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("mo",null,"∵"),a("mi",{mathvariant:"normal"},"程"),a("mi",{mathvariant:"normal"},"序"),a("mo",null,"="),a("mi",{mathvariant:"normal"},"状"),a("mi",{mathvariant:"normal"},"态"),a("mi",{mathvariant:"normal"},"机"),a("mspace",{linebreak:"newline"}),a("mi",{mathvariant:"normal"},"又"),a("mo",null,"∵"),a("mi",null,"O"),a("mi",null,"S"),a("mo",null,"="),a("mi",{mathvariant:"normal"},"状"),a("mi",{mathvariant:"normal"},"态"),a("mi",{mathvariant:"normal"},"机"),a("mspace",{linebreak:"newline"}),a("mo",null,"∴"),a("mi",{mathvariant:"normal"},"程"),a("mi",{mathvariant:"normal"},"序"),a("mo",null,"="),a("mi",{mathvariant:"normal"},"状"),a("mi",{mathvariant:"normal"},"态"),a("mi",{mathvariant:"normal"},"机"),a("mo",null,"="),a("mi",null,"O"),a("mi",null,"S"),a("mspace",{linebreak:"newline"}),a("mo",null,"∴"),a("mi",{mathvariant:"normal"},"计"),a("mi",{mathvariant:"normal"},"算"),a("mi",{mathvariant:"normal"},"机"),a("mi",{mathvariant:"normal"},"世"),a("mi",{mathvariant:"normal"},"界"),a("mi",{mathvariant:"normal"},"的"),a("mi",{mathvariant:"normal"},"一"),a("mi",{mathvariant:"normal"},"切"),a("mi",{mathvariant:"normal"},"都"),a("mi",{mathvariant:"normal"},"可"),a("mi",{mathvariant:"normal"},"被"),a("mi",{mathvariant:"normal"},"调"),a("mi",{mathvariant:"normal"},"试")])],-1))]),t[87]||(t[87]=s('<ul><li>机器 <s>(还是)</s> 永远是对的</li></ul><p>实质上，在 UNIX 这类主要与命令行打交道的系统中，你做的任何事件都是在 <strong>编程</strong> ：</p><ul><li>我们只是用一系列命令来完成将 <strong>需求</strong> 传递给 <strong>机器</strong> 这一事件</li><li>上面提到的问题都可以看成是 程序 / 输入 / 配置有 bug</li></ul><p>因此，调试可以解决计算机世界中的一切 bug !</p><h3 id="使用调试理论进行调试" tabindex="-1"><a class="header-anchor" href="#使用调试理论进行调试"><span>使用调试理论进行调试</span></a></h3><p>大部分 bug 都是经过如下转化，最终呈现在程序结果上的：</p><div style="text-align:center;"><p>Fault (程序/输入/配置错) → Error → Failure (可被人类观测)</p></div><p>大部分的 Error 与 Failure 是比较相近的： 程序捕捉到 Error , 使用 <code>perror</code> 等API 对错误日志进行输出，呈现为我们可以观测到的 Failure。</p>',8)),a("p",null,[t[60]||(t[60]=l("但是，总有那么一些时候，给出的错误日志并不是那么直观 —— 它甚至可能与实际的 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[58]||(t[58]=[l("Error")])),_:1}),t[61]||(t[61]=l(" / ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[59]||(t[59]=[l("Fault")])),_:1}),t[62]||(t[62]=l(" 相差甚远 ："))]),a("ul",null,[t[66]||(t[66]=s("<li><strong>出错原因报告不准确</strong></li><li>程序执行的过程看不到 <ul><li>那我们 <strong>想办法 “看到” 状态机的执行过程</strong> 就好了！(可能存在的 <code>--verbose</code> 选项、<code>perror</code> 、或者使用 <code>strace</code> 等)</li></ul></li>",2)),a("li",null,[t[64]||(t[64]=l("这种时候我们就很难根据观测到的 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[63]||(t[63]=[l("Failure")])),_:1}),t[65]||(t[65]=l(" 来确定 bug 的根源"))]),t[67]||(t[67]=a("li",null,[l("但是根据 "),a("em",null,"Everything is a state machine."),l(" 这一观点，我们总能够顺着错误信息来寻找到 bug 的根源。 "),a("ul",null,[a("li",null,[a("strong",null,"计算机中没有玄学！")])])],-1))]),t[88]||(t[88]=s('<div class="hint-container important"><p class="hint-container-title">一个非常强大的调试器 —— GDB</p><p><a href="https://sourceware.org/gdb/current/onlinedocs/gdb.html/" target="_blank" rel="noopener noreferrer">Debugging with GDB</a></p></div><h2 id="调试理论-推论" tabindex="-1"><a class="header-anchor" href="#调试理论-推论"><span>调试理论 - 推论</span></a></h2><p><em>“Technical Debt”</em> : 每当你写出不好维护的代码，你都在给你未来的调试/需求变更挖坑</p><h3 id="推论-1-扣紧需求和设计以减少出现-fault-的可能性" tabindex="-1"><a class="header-anchor" href="#推论-1-扣紧需求和设计以减少出现-fault-的可能性"><span>推论 (1) - 扣紧<u>需求和设计</u>以减少出现 Fault 的可能性</span></a></h3><div style="text-align:center;"><p><strong>需求 → 设计 → 代码 → Fault</strong> → Error → Failure</p></div><ul><li><strong>写好代码</strong>：不要在写代码的时候忘记需求和设计</li><li>不言自明 (Self-explanatory) <ul><li>能通过字面知道需求 (流程)</li></ul></li><li>不言自证 (Self-evident) <ul><li>能通过字面确认代码和需求一致</li></ul></li></ul><p><strong>一个评判标准</strong> ：</p><ul><li>AI 是否能正确理解/维护你的代码: <a href="http://git.nju.edu.cn/jyy/toybox" target="_blank" rel="noopener noreferrer">toybox</a></li></ul><blockquote><p>Programs are meant to be read by humans and only incidentally for computers to execute. (Donald E. Knuth)</p></blockquote><h3 id="推论-2-通过测试将-fault-尽可能暴露成-error" tabindex="-1"><a class="header-anchor" href="#推论-2-通过测试将-fault-尽可能暴露成-error"><span>推论 (2) - 通过<u>测试</u>将 Fault 尽可能暴露成 Error</span></a></h3><div style="text-align:center;"><p>需求 → 设计 → 代码 → <strong>Fault → Error</strong> → Failure</p></div>',11)),a("ul",null,[a("li",null,[t[75]||(t[75]=a("strong",null,"做好测试",-1)),t[76]||(t[76]=l(" ：未测代码永远是错的 ")),a("ul",null,[t[74]||(t[74]=a("li",null,"残酷的现实：相信自己写不对代码",-1)),a("li",null,[t[69]||(t[69]=l("不进行测试的话，我们甚至看不到 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[68]||(t[68]=[l("Failure")])),_:1})]),a("li",null,[t[72]||(t[72]=l("观测到 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[70]||(t[70]=[l("Failure")])),_:1}),t[73]||(t[73]=l(" 的先决条件 ： 暴露出 ")),r(n,{type:"danger",vertical:"middle"},{default:i(()=>t[71]||(t[71]=[l("Error")])),_:1})])])])]),t[89]||(t[89]=s('<h3 id="推论-3-多写断言来拉近-error-和-failure-的距离" tabindex="-1"><a class="header-anchor" href="#推论-3-多写断言来拉近-error-和-failure-的距离"><span>推论 (3) - 多写<u>断言</u>来拉近 Error 和 Failure 的距离</span></a></h3><div style="text-align:center;"><p>需求 → 设计 → 代码 → Fault → <strong>Error → Failure</strong></p></div><ul><li><strong>多写断言</strong>：把代码中的 <strong>“隐藏性质”</strong> 写出来 <ul><li><strong>Error 暴露的越晚，调试越困难</strong></li><li>追溯导致 assert failure 的变量值 (slice) 通常可以快速定位到 bug</li></ul></li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><div class="hint-container note"><p class="hint-container-title">Take-away Messages from jyy</p><p>如果我们观察到软件发生了 “超出预期的表现”，我们需要理解的是我们的 “预期” 经历了 <strong>需求 → 设计 → 代码 → Fault → Error → Failure</strong> 的漫长过程，其中的每一个过程多多少少都有些失控：我们的预期本身可能有误，或是对软件需要实现的需求有误解。而设计失误、编码错误最终反应到可观测的表现时，有时可能已经太晚了。因此，我们 <strong>“写好代码、做好测试、多写断言”</strong> 是十分重要的。</p></div>',5))])}const M=m(p,[["render",x],["__file","extra-debugging.html.vue"]]),A=JSON.parse('{"path":"/zh/note/os/Concurrency/extra-debugging.html","title":"调试理论与实践","lang":"zh-CN","frontmatter":{"title":"调试理论与实践","order":8,"icon":"bug","categories":["操作系统"],"tags":["调试理论"],"description":"背景回顾：在快节奏的《操作系统》课中，插入一些 (重要得要命但与操作系统不完全相关的) 休闲内容。 本讲内容：调试理论：, 和 ，以及我们应该如何应对程序里层出不穷的 bugs。 调试理论 如果我们已经知道 bug 的存在， 如何找到它 ？ 摆正心态 - 调试两大公理 公理 1 : 机器永远是对的 因为机器是 无情执行指令的客观存在 代码出现 bug ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/note/os/Concurrency/extra-debugging.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"调试理论与实践"}],["meta",{"property":"og:description","content":"背景回顾：在快节奏的《操作系统》课中，插入一些 (重要得要命但与操作系统不完全相关的) 休闲内容。 本讲内容：调试理论：, 和 ，以及我们应该如何应对程序里层出不穷的 bugs。 调试理论 如果我们已经知道 bug 的存在， 如何找到它 ？ 摆正心态 - 调试两大公理 公理 1 : 机器永远是对的 因为机器是 无情执行指令的客观存在 代码出现 bug ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-22T08:20:26.000Z"}],["meta",{"property":"article:tag","content":"调试理论"}],["meta",{"property":"article:modified_time","content":"2024-11-22T08:20:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"调试理论与实践\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-22T08:20:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"codePJCP2\\",\\"url\\":\\"https://docs.pjcp2-personal.cn/zh/\\"}]}"]]},"headers":[{"level":2,"title":"调试理论","slug":"调试理论","link":"#调试理论","children":[{"level":3,"title":"摆正心态 - 调试两大公理","slug":"摆正心态-调试两大公理","link":"#摆正心态-调试两大公理","children":[]},{"level":3,"title":"直面 Fault，Error，Failure","slug":"直面-fault-error-failure","link":"#直面-fault-error-failure","children":[]},{"level":3,"title":"调试理论 & 简单推论","slug":"调试理论-简单推论","link":"#调试理论-简单推论","children":[]},{"level":3,"title":"观察状态机执行的工具 (调试工具)","slug":"观察状态机执行的工具-调试工具","link":"#观察状态机执行的工具-调试工具","children":[]},{"level":3,"title":"Self-check-list","slug":"self-check-list","link":"#self-check-list","children":[]}]},{"level":2,"title":"调试一切状态机","slug":"调试一切状态机","link":"#调试一切状态机","children":[{"level":3,"title":"使用调试理论调试计算机世界的一切","slug":"使用调试理论调试计算机世界的一切","link":"#使用调试理论调试计算机世界的一切","children":[]},{"level":3,"title":"使用调试理论进行调试","slug":"使用调试理论进行调试","link":"#使用调试理论进行调试","children":[]}]},{"level":2,"title":"调试理论 - 推论","slug":"调试理论-推论","link":"#调试理论-推论","children":[{"level":3,"title":"推论 (1) - 扣紧需求和设计以减少出现 Fault 的可能性","slug":"推论-1-扣紧需求和设计以减少出现-fault-的可能性","link":"#推论-1-扣紧需求和设计以减少出现-fault-的可能性","children":[]},{"level":3,"title":"推论 (2) - 通过测试将 Fault 尽可能暴露成 Error","slug":"推论-2-通过测试将-fault-尽可能暴露成-error","link":"#推论-2-通过测试将-fault-尽可能暴露成-error","children":[]},{"level":3,"title":"推论 (3) - 多写断言来拉近 Error 和 Failure 的距离","slug":"推论-3-多写断言来拉近-error-和-failure-的距离","link":"#推论-3-多写断言来拉近-error-和-failure-的距离","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1730899556000,"updatedTime":1732263626000,"contributors":[{"name":"codePJCP2","email":"159783914+codePJCP2@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":6.87,"words":2061},"filePathRelative":"zh/note/os/Concurrency/extra-debugging.md","localizedDate":"2024年11月6日","autoDesc":true}');export{M as comp,A as data};