import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "technology/front.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "technology/front.html",
    'title': "---",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>---</h1>\n<p>outputPath: test_pages/front_matter_test.html\ntitle: Front matter test\ntoc: null\nprev: null\nnext: null</p>\n<hr>\n<p>This is a front matter test page.</p>\n<h2 id="the-front-matter-content">The front matter content<a class="anchor" href="#the-front-matter-content">§</a></h2>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">outputPath</span><span class="token punctuation">:</span> test_pages/front_matter_test.html\n<span class="token key atrule">title</span><span class="token punctuation">:</span> Front matter test\n<span class="token key atrule">toc</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "---"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>outputPath: test_pages/front_matter_test.html\ntitle: Front matter test\ntoc: null\nprev: null\nnext: null</p>\n<hr>\n<p>This is a front matter test page.</p>\n<h2 id="the-front-matter-content">The front matter content<a class="anchor" href="#the-front-matter-content">§</a></h2>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">outputPath</span><span class="token punctuation">:</span> test_pages/front_matter_test.html\n<span class="token key atrule">title</span><span class="token punctuation">:</span> Front matter test\n<span class="token key atrule">toc</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#the-front-matter-content" }, "The front matter content")))),
    'author': "ink-song",
    'contributors': [
        "ink-song"
    ],
    'date': "2024-02-05T09:41:51.000Z",
    'updated': null,
    'excerpt': "outputPath: test_pages/front_matter_test.html title: Front matter test toc: null prev: null next: null -----------------------------------------------------------------------------------------------------------...",
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
