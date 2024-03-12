import{_ as s,c as i,o as a,X as n}from"./chunks/framework.4ft2TBN7.js";const u=JSON.parse('{"title":"「react进阶」 react-hooks API 使用及理解","description":"","frontmatter":{},"headers":[],"relativePath":"guide/framework/react/hooks.md","filePath":"guide/framework/react/hooks.md","lastUpdated":1710243407000}'),l={name:"guide/framework/react/hooks.md"},e=n(`<h1 id="「react进阶」-react-hooks-api-使用及理解" tabindex="-1">「react进阶」 react-hooks API 使用及理解 <a class="header-anchor" href="#「react进阶」-react-hooks-api-使用及理解" aria-label="Permalink to &quot;「react进阶」 react-hooks API 使用及理解&quot;">​</a></h1><blockquote><p>Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。</p></blockquote><h2 id="疑问" tabindex="-1">疑问？ <a class="header-anchor" href="#疑问" aria-label="Permalink to &quot;疑问？&quot;">​</a></h2><ul><li>在无状态组件每一次函数上下文执行的时候，react用什么方式记录了hooks的状态?</li><li>多个react-hooks用什么来记录每一个hooks的顺序的 ？ 为什么不能条件语句中，声明hooks? hooks声明为什么在组件的最顶部？</li><li>function函数组件中的useState，和 class类组件 setState有什么区别</li><li>react 是怎么捕获到hooks的执行上下文，是在函数组件内部的？</li><li>useEffect,useMemo 中，为什么useRef不需要依赖注入，就能访问到最新的改变值？</li><li>useMemo是怎么对值做缓存的？如何应用它优化性能？</li><li>为什么两次传入useState的值相同，函数组件不更新?</li></ul><h2 id="function组件和class组件本质的区别" tabindex="-1">Function组件和Class组件本质的区别? <a class="header-anchor" href="#function组件和class组件本质的区别" aria-label="Permalink to &quot;Function组件和Class组件本质的区别?&quot;">​</a></h2><blockquote><p>函数组件和类组件到底有什么区别???</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 函数式组件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> React</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            number:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    handerClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">              this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ number:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.state.number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.state.number)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.handerClick } &gt;num++&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 结果：1 2 3 4 5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 函数式组件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">num</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handerClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                setNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ handerClick } &gt;{ num }&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 结果：0 0 0 0 0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="why" tabindex="-1">WHY? <a class="header-anchor" href="#why" aria-label="Permalink to &quot;WHY?&quot;">​</a></h3><ul><li>结果1：1 2 3 4 5</li><li>结果2: 0 0 0 0 0</li></ul><h3 id="类组件" tabindex="-1">类组件 <a class="header-anchor" href="#类组件" aria-label="Permalink to &quot;类组件&quot;">​</a></h3><blockquote><p>由于执行上setState没有在react正常的函数执行上下文上执行，而是setTimeout中执行的，批量更新条件被破坏。所以可以直接获取到变化后的state。</p></blockquote><h3 id="函数式组件" tabindex="-1">函数式组件 <a class="header-anchor" href="#函数式组件" aria-label="Permalink to &quot;函数式组件&quot;">​</a></h3><blockquote><p>在class状态中，通过一个实例化的class，去维护组件中的各种状态；但是在function组件中，没有一个状态去保存这些信息，每一次函数上下文执行，所有变量，常量都重新声明，执行完毕，再被垃圾机制回收。</p></blockquote><div class="tip custom-block"><p class="custom-block-title">总结</p><p>对于<strong>class组件</strong>，我们只需要实例化一次，实例中保存了组件的state等状态。对于每一次更新只需要调用render方法就可以。但是在<strong>function组件</strong>中，每一次更新都是一次新的函数执行,为了保存一些状态,执行一些副作用钩子,react-hooks应运而生，去帮助记录组件的状态，处理一些额外的副作用</p></div><h2 id="api-hooks" tabindex="-1">API Hooks <a class="header-anchor" href="#api-hooks" aria-label="Permalink to &quot;API Hooks&quot;">​</a></h2><h3 id="_1-usestate" tabindex="-1">1. useState() <a class="header-anchor" href="#_1-usestate" aria-label="Permalink to &quot;1. useState()&quot;">​</a></h3><h3 id="_2-useeffect" tabindex="-1">2. useEffect() <a class="header-anchor" href="#_2-useeffect" aria-label="Permalink to &quot;2. useEffect()&quot;">​</a></h3><h3 id="_3-uselayouteffect" tabindex="-1">3. useLayoutEffect() <a class="header-anchor" href="#_3-uselayouteffect" aria-label="Permalink to &quot;3. useLayoutEffect()&quot;">​</a></h3><h3 id="_4-usememo" tabindex="-1">4. useMemo() <a class="header-anchor" href="#_4-usememo" aria-label="Permalink to &quot;4. useMemo()&quot;">​</a></h3><h3 id="_5-usereducer" tabindex="-1">5. useReducer() <a class="header-anchor" href="#_5-usereducer" aria-label="Permalink to &quot;5. useReducer()&quot;">​</a></h3><h3 id="_6-useref" tabindex="-1">6. useRef() <a class="header-anchor" href="#_6-useref" aria-label="Permalink to &quot;6. useRef()&quot;">​</a></h3><h3 id="_7-usestate" tabindex="-1">7. useState() <a class="header-anchor" href="#_7-usestate" aria-label="Permalink to &quot;7. useState()&quot;">​</a></h3><h3 id="_8-usecallback" tabindex="-1">8. useCallback() <a class="header-anchor" href="#_8-usecallback" aria-label="Permalink to &quot;8. useCallback()&quot;">​</a></h3>`,24),h=[e];function t(k,p,r,E,d,c){return a(),i("div",null,h)}const g=s(l,[["render",t]]);export{u as __pageData,g as default};