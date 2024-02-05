// import { React } from 'https://deno.land/x/pagic/mod.ts';

export default {
  srcDir: ".",
  exclude: [],
  root: "/",
  theme: "docs",
  plugins: [
    "clean",
    "init",
    "md",
    "tsx",
    "sidebar",
    "prev_next",
    "ga",
    "script",
    "layout",
    "out",
  ],
  title: "Shaper's Docs",
  description: "Shaper's Docs",
  nav: [
    {
      text: "It's me",
      link: "/shapers/introduction/index.html",
    },
    {
      text: "About",
      link: "/shapers//about/index.html",
      align: "right",
    },
  ],
  github: "https://github.com/king-song823/kingSong",
  sidebar: {
    "/": [
      "introduction/README.md",
      {
        link: "technology/README.md",
        children: [
          "technology/vue3.md",
          "technology/ts.md",
          "technology/你不知道的JS.md",
          "technology/vcli.md",
        ],
      },
      {
        text: "Life",
        children: [
          "life/guitar.md",
        ],
      },
      {
        text: "Interview",
        children: [
          "interview/btyedance.md",
        ],
      },
      {
        text: "Study",
        children: [
          "study/HowWeLearn.md",
        ],
      },
    ],
  },
  tools: {
    editOnGitHub: true,
    backToTop: true,
  },

  port: 8000,
};
