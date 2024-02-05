import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "interview/interview.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "interview/interview.html",
    'title': "Js",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Js</h1>\n<h3 id="1callapplybind-%E7%9A%84%E5%8C%BA%E5%88%AB">1.call，apply，bind 的区别<a class="anchor" href="#1callapplybind-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h3>\n<h4 id="1call-%E5%92%8C-apply">1.call 和 apply<a class="anchor" href="#1call-%E5%92%8C-apply">§</a></h4>\n<ul>\n<li>都是函数原型链上的方法（ES6 中）</li>\n<li>都可以作为函数上下文的对象</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">let obj <span class="token operator">=</span> {\n  name<span class="token punctuation">:</span> <span class="token string">\'张三\'</span>\n}\nlet fn <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>doing<span class="token punctuation">)</span> {\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>name <span class="token operator">+</span> doing<span class="token punctuation">)</span>\n}\nfn<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">\'在犯罪\'</span><span class="token punctuation">)</span>\n\n打印结果： 张三在犯罪\n\n<span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>接受两个参数，第一个将当前参数的上下文作为调用者的上下文对象，后续的参数作为函数的普通参数\n在上述fn的函数中，使用obj的this作为fn的上下文对象，所以this<span class="token punctuation">.</span>name是张三\n一般来说，还可通过使用call来进行解构\nfn<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>arr<span class="token punctuation">)</span>来解构\n</code></pre>\n<p>apply 用法和 call 一致，只是第二个参数接受的是一个数组</p>\n<pre class="language-autoit"><code class="language-autoit">fn<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'在吃饭\'</span><span class="token punctuation">,</span> <span class="token string">\'在吃面\'</span>， <span class="token string">\'在大家\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n<h4 id="2bind">2.bind<a class="anchor" href="#2bind">§</a></h4>\n<ul>\n<li>bind 当使用 bind 时，会返回一个改变 this 指向的函数，而原函数的 this 并没有改变</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">let obj <span class="token operator">=</span> {\nname<span class="token punctuation">:</span> <span class="token string">\'张三\'</span>\n}\nlet fn <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>doing<span class="token punctuation">)</span> {\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>name <span class="token operator">+</span> doing<span class="token punctuation">)</span>\n}\nlet bill <span class="token operator">=</span> fn<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">\'在犯罪\'</span><span class="token punctuation">)</span>\n<span class="token function">bill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n<h3 id="%E5%AE%9E%E7%8E%B05add6minus2">实现(5).add(6).minus(2)<a class="anchor" href="#%E5%AE%9E%E7%8E%B05add6minus2">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">~ <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n\n  function <span class="token function">check</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> {\n    return <span class="token function">Number</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">=</span> <span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> number\n  }\n  function <span class="token function">add</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> {\n    return this <span class="token operator">+</span> <span class="token function">check</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>\n  }\n\n  function <span class="token function">minus</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> {\n    return this <span class="token operator">-</span> <span class="token function">check</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>\n  }\n  Number<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>add <span class="token operator">=</span> add\n  Number<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>minus <span class="token operator">=</span> minus\n\n}\n\n</code></pre>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "Js"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="1callapplybind-%E7%9A%84%E5%8C%BA%E5%88%AB">1.call，apply，bind 的区别<a class="anchor" href="#1callapplybind-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h3>\n<h4 id="1call-%E5%92%8C-apply">1.call 和 apply<a class="anchor" href="#1call-%E5%92%8C-apply">§</a></h4>\n<ul>\n<li>都是函数原型链上的方法（ES6 中）</li>\n<li>都可以作为函数上下文的对象</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">let obj <span class="token operator">=</span> {\n  name<span class="token punctuation">:</span> <span class="token string">\'张三\'</span>\n}\nlet fn <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>doing<span class="token punctuation">)</span> {\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>name <span class="token operator">+</span> doing<span class="token punctuation">)</span>\n}\nfn<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">\'在犯罪\'</span><span class="token punctuation">)</span>\n\n打印结果： 张三在犯罪\n\n<span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>接受两个参数，第一个将当前参数的上下文作为调用者的上下文对象，后续的参数作为函数的普通参数\n在上述fn的函数中，使用obj的this作为fn的上下文对象，所以this<span class="token punctuation">.</span>name是张三\n一般来说，还可通过使用call来进行解构\nfn<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>arr<span class="token punctuation">)</span>来解构\n</code></pre>\n<p>apply 用法和 call 一致，只是第二个参数接受的是一个数组</p>\n<pre class="language-autoit"><code class="language-autoit">fn<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'在吃饭\'</span><span class="token punctuation">,</span> <span class="token string">\'在吃面\'</span>， <span class="token string">\'在大家\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n<h4 id="2bind">2.bind<a class="anchor" href="#2bind">§</a></h4>\n<ul>\n<li>bind 当使用 bind 时，会返回一个改变 this 指向的函数，而原函数的 this 并没有改变</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">let obj <span class="token operator">=</span> {\nname<span class="token punctuation">:</span> <span class="token string">\'张三\'</span>\n}\nlet fn <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>doing<span class="token punctuation">)</span> {\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>name <span class="token operator">+</span> doing<span class="token punctuation">)</span>\n}\nlet bill <span class="token operator">=</span> fn<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">\'在犯罪\'</span><span class="token punctuation">)</span>\n<span class="token function">bill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n<h3 id="%E5%AE%9E%E7%8E%B05add6minus2">实现(5).add(6).minus(2)<a class="anchor" href="#%E5%AE%9E%E7%8E%B05add6minus2">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">~ <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n\n  function <span class="token function">check</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> {\n    return <span class="token function">Number</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">=</span> <span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> number\n  }\n  function <span class="token function">add</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> {\n    return this <span class="token operator">+</span> <span class="token function">check</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>\n  }\n\n  function <span class="token function">minus</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> {\n    return this <span class="token operator">-</span> <span class="token function">check</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>\n  }\n  Number<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>add <span class="token operator">=</span> add\n  Number<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>minus <span class="token operator">=</span> minus\n\n}\n\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#1callapplybind-%E7%9A%84%E5%8C%BA%E5%88%AB" }, "1.call\uFF0Capply\uFF0Cbind \u7684\u533A\u522B"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%AE%9E%E7%8E%B05add6minus2" }, "\u5B9E\u73B0(5).add(6).minus(2)")))),
    'author': "ink-song",
    'contributors': [
        "ink-song"
    ],
    'date': "2024-02-05T09:41:51.000Z",
    'updated': null,
    'excerpt': "1.call，apply，bind 的区别 1.call 和 apply - 都是函数原型链上的方法（ES6 中） - 都可以作为函数上下文的对象 let obj = { name: '张三' } let fn = function(doing) { console.log(this.name + doing) } fn.call(obj, '在...",
    'cover': undefined,
    'sidebar': [
        {
            "text": "Introduction",
            "link": "introduction/index.html",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "technology/index.html",
            "children": [
                {
                    "text": "Vue3 + TypeScript",
                    "link": "technology/vue3.html",
                    "pagePath": "technology/vue3.md"
                },
                {
                    "text": "TypeScript 积累",
                    "link": "technology/ts.html",
                    "pagePath": "technology/ts.md"
                },
                {
                    "text": "你不知道的 JS kk",
                    "link": "technology/你不知道的JS.html",
                    "pagePath": "technology/你不知道的JS.md"
                },
                {
                    "text": "Vue3 + TypeScript Cli 模板",
                    "link": "technology/vcli.html",
                    "pagePath": "technology/vcli.md"
                }
            ],
            "pagePath": "technology/README.md",
            "text": "Technology"
        },
        {
            "text": "Life",
            "children": [
                {
                    "text": "Guitar",
                    "link": "life/guitar.html",
                    "pagePath": "life/guitar.md"
                }
            ]
        },
        {
            "text": "Interview",
            "children": [
                {
                    "text": "Btyedance",
                    "link": "interview/btyedance.html",
                    "pagePath": "interview/btyedance.md"
                }
            ]
        },
        {
            "text": "Study",
            "children": [
                {
                    "text": "How We Learn",
                    "link": "study/HowWeLearn.html",
                    "pagePath": "study/HowWeLearn.md"
                }
            ]
        }
    ]
};
