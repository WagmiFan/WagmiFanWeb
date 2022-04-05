import { defineThemeConfig } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://wagmi.fan",

  author: {
    name: "Wagmi Fan",
    url: "https://wagmi.fan",
  },

  iconPrefix: "fa-solid fa-",

  logo: "/logo.svg",
  // logo: '/logo.png',
  // themeColor: {
  //   blue: "#2196f3",
  //   red: "#f26d6d",
  //   green: "#3eaf7c",
  //   orange: "#fb9b5f",
  // },
  themeColor: false,
  darkmode: 'auto-switch',
  fullscreen: false,
  footer: '<a href="https://twitter.com/wagmi_fan"><i class="fa-brands fa-twitter fa-2xl"></i></a>',
  copyright: '<a href="https://github.com/WagmiFan/WagmiFanWeb/blob/main/LICENSE">GPL-3.0</a> Licensed | Copyright © 2022-present Wagmi.Fan',

  repo: "https://github.com/WagmiFan",
  docsRepo: "https://github.com/WagmiFan/WagmiFanWeb",
  // repoDisplay: false,
  docsDir: "/",

  pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    sidebarDisplay: 'none',
    avatar: "/ico.svg",
  },

  locales: {
    "/": {
      // navbar
      navbar: navbar.en, 
      // sidebar
      sidebar: sidebar.en,


      displayFooter: true,

      blog: { 
        name: "Info",
        intro: "/info/",
      },
      selectLanguageName: 'English',
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh, 

      displayFooter: true,

      blog: {
        name: "资讯",
        intro: "/zh/info/",
      },
      selectLanguageText: '选择语言',
      // selectLanguageAriaLabel: '选择语言',
      // selectLanguageName: '简体中文',
    },
  }, 

  plugins: {
    search: {
      locales: {
        '/': {
          placeholder: 'Search',
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    },
    blog: {
      autoExcerpt: true,
    },

    // you can also use giscus : https://giscus.app/
    comment: {
      type: "giscus",
      repo: "WagmiFan/WagmiFanWeb",
      repoId: "R_kgDOHH3KXA",
      category: "General",
      categoryId: "DIC_kwDOHH3KXM4CObHl",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});  