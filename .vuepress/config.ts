// import { defineUserConfig } from 'vuepress'
import { defineHopeConfig } from "vuepress-theme-hope";
import { pwa } from "vuepress-plugin-pwa2";
// import type { DefaultThemeOptions } from 'vuepress'
import themeConfig from "./themeConfig";

// export default defineUserConfig<DefaultThemeOptions>({  
export default defineHopeConfig({
  base: '/',
  dest: ".vuepress/dist",
  lang: 'en-US',
  // title: 'Wagmi Fan',
  description: 'Wagmi.Fan:Simplify ink/sign-ing of Syber Era, including multi-signature, unified-login, agreement-inking and signature-verification on Multi Chain with privacy protection based on Zero-Knowledge-Proof technology.', 
  head: [ 
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/icons/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', color: '#ff8c00', href: '/images/icons/safari-pinned-tab.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }], 
    ['meta', { name: 'msapplication-TileImage', content: '/images/icons/mstile-144x144.png' }], 
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-config', content: '/images/icons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css' }] ,
    ['script', { crossorigin: 'stylesheet', src: 'https://kit.fontawesome.com/ca37c296c5.js' }] 
  ],   
  locales: { 
    '/': {
      lang: 'en-US',
      // title: 'Wagmi Fan Wiki',
      // description: 'Wagmi.Fan:Simplify ink/sign-ing of Syber Era, including multi-signature, unified-login, agreement-inking and signature-verification on Multi Chain with privacy protection based on Zero-Knowledge-Proof technology.',
    },
    '/zh/': {
      lang: 'zh-CN',
      // title: 'Wagmi Fan Wiki',
      description: '赛博签署(Wagmi.Fan):简化赛博(Syber)时代的数字签署(ink/sign)，包括多重签名、统一登录、协议签署、签名验证，支持多链和基于零知识证明技术的隐私保护。',
    },
  },
  // theme: '@vuepress/theme-default', 
  themeConfig,
  plugins: [
    pwa({
      skipWaiting: false,
      serviceWorker: true,
      showInstall: true,
      manifest: {
        name: "WagmiFan", 
        short_name: "WagmiFan",       
        orientation: "any",
        icons: [ 
          {
            src: "/images/icons/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png"
          }, 
          {
            src: "/images/icons/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png"
          }, 
          {
            src: "/favicon.ico",
            sizes: "48x48" 
          },  
          {
            src: "/images/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          }, 
          {
            src: "/images/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ] 
      },  
      maxSize: 20480,
      maxPicSize: 10240,
      themeColor: "#ffffff",
      cachePic: true,
      cacheHTML: true,
      update: 'force', // hint/force
      // apple:{
      //   icon: "/images/icons/apple-touch-icon.png",  
      // },
      locales: {
        "/": { 
        },

        /**
         * Chinese locale config
         */
        "/zh/": {
          // 安装按钮文字
          install: '安装',
          // iOS 安装文字
          iOSInstall: '安装',
          // 取消按钮文字
          cancel: '取消安装',
          // 关闭按钮文字
          close: '关闭',
          // 上一张图片文字
          prevImage: '上一张',
          // 下一张图片文字
          nextImage: '下一张',
          // 安装解释
          explain: '解释',
          // 描述标签文字
          desc: '简介',
          // 特性标签文字
          feature: '特点',
          // 更新内容提示文字
          hint: '提示',
          // 更新内容可用文字
          update: '发现新内容可用',  
        },
      },
    }),
  ],
});