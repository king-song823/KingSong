import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "Vue3 + TypeScript",
        "link": "technology/vue3.html"
    },
    'next': {
        "text": "你不知道的 JS kk",
        "link": "technology/你不知道的JS.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "technology/ts.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "technology/ts.html",
    'title': "TypeScript 积累",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>TypeScript 积累</h1>\n<h3 id="%E5%9F%BA%E7%A1%80">基础<a class="anchor" href="#%E5%9F%BA%E7%A1%80">§</a></h3>\n<h4 id="%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%B1%BB%E7%B1%BB%E5%9E%8B-%E6%8E%A5%E5%8F%A3">对象的类类型-接口<a class="anchor" href="#%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%B1%BB%E7%B1%BB%E5%9E%8B-%E6%8E%A5%E5%8F%A3">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit">任意属性<span class="token punctuation">:</span> <span class="token punctuation">[</span>propName<span class="token punctuation">:</span> string<span class="token punctuation">]</span><span class="token punctuation">:</span> any<span class="token comment">;</span>\n对象重的所有属性都将是它类型的子集\n</code></pre>\n<h4 id="%E6%95%B0%E7%BB%84">数组<a class="anchor" href="#%E6%95%B0%E7%BB%84">§</a></h4>\n<ul>\n<li>数组的表示方法\n<ul>\n<li>let arr: number[] = []</li>\n<li>泛型 let arr: Array<string> = []</li>\n<li>接口 interface Arrar { [index: number]: number }</li>\n</ul>\n</li>\n</ul>\n<h3 id="%E5%87%BD%E6%95%B0">函数<a class="anchor" href="#%E5%87%BD%E6%95%B0">§</a></h3>\n<ul>\n<li>用接口表示函数</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">interface SearchFunc {\n    <span class="token punctuation">(</span>source<span class="token punctuation">:</span> string<span class="token punctuation">,</span> subString<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> boolean<span class="token comment">;</span>\n}\n\nlet mySearch<span class="token punctuation">:</span> SearchFunc<span class="token comment">;</span>\nmySearch <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>source<span class="token punctuation">:</span> string<span class="token punctuation">,</span> subString<span class="token punctuation">:</span> string<span class="token punctuation">)</span> {\n    return source<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>subString<span class="token punctuation">)</span> !<span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token comment">;</span>\n}\n</code></pre>\n<ul>\n<li>剩余参数</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>items<span class="token punctuation">)</span> {\n    items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token function">function</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> {\n        array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token comment">;</span>\n    }<span class="token punctuation">)</span><span class="token comment">;</span>\n}\n\nlet a<span class="token punctuation">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment">;</span>\n<span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "TypeScript \u79EF\u7D2F"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="%E5%9F%BA%E7%A1%80">基础<a class="anchor" href="#%E5%9F%BA%E7%A1%80">§</a></h3>\n<h4 id="%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%B1%BB%E7%B1%BB%E5%9E%8B-%E6%8E%A5%E5%8F%A3">对象的类类型-接口<a class="anchor" href="#%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%B1%BB%E7%B1%BB%E5%9E%8B-%E6%8E%A5%E5%8F%A3">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit">任意属性<span class="token punctuation">:</span> <span class="token punctuation">[</span>propName<span class="token punctuation">:</span> string<span class="token punctuation">]</span><span class="token punctuation">:</span> any<span class="token comment">;</span>\n对象重的所有属性都将是它类型的子集\n</code></pre>\n<h4 id="%E6%95%B0%E7%BB%84">数组<a class="anchor" href="#%E6%95%B0%E7%BB%84">§</a></h4>\n<ul>\n<li>数组的表示方法\n<ul>\n<li>let arr: number[] = []</li>\n<li>泛型 let arr: Array<string> = []</li>\n<li>接口 interface Arrar { [index: number]: number }</li>\n</ul>\n</li>\n</ul>\n<h3 id="%E5%87%BD%E6%95%B0">函数<a class="anchor" href="#%E5%87%BD%E6%95%B0">§</a></h3>\n<ul>\n<li>用接口表示函数</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">interface SearchFunc {\n    <span class="token punctuation">(</span>source<span class="token punctuation">:</span> string<span class="token punctuation">,</span> subString<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> boolean<span class="token comment">;</span>\n}\n\nlet mySearch<span class="token punctuation">:</span> SearchFunc<span class="token comment">;</span>\nmySearch <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>source<span class="token punctuation">:</span> string<span class="token punctuation">,</span> subString<span class="token punctuation">:</span> string<span class="token punctuation">)</span> {\n    return source<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>subString<span class="token punctuation">)</span> !<span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token comment">;</span>\n}\n</code></pre>\n<ul>\n<li>剩余参数</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>items<span class="token punctuation">)</span> {\n    items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token function">function</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> {\n        array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token comment">;</span>\n    }<span class="token punctuation">)</span><span class="token comment">;</span>\n}\n\nlet a<span class="token punctuation">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment">;</span>\n<span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%9F%BA%E7%A1%80" }, "\u57FA\u7840"),
                React.createElement("ol", null)),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%87%BD%E6%95%B0" }, "\u51FD\u6570")))),
    'author': "ink-song",
    'contributors': [
        "ink-song"
    ],
    'date': "2024-02-05T09:41:51.000Z",
    'updated': null,
    'excerpt': "基础 对象的类类型-接口 任意属性: [propName: string]: any; 对象重的所有属性都将是它类型的子集 数组 - 数组的表示方法 - let arr: number[] = [] - 泛型 let arr: Array = [] - 接口 interface Arrar { [index: number]: n...",
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
