/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "iEWayinfo",
  "titleDelimiter": "-",
  "url": "http://iewayinfo.cc",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "kuizuo",
  "projectName": "blog",
  "tagline": "记录所学知识，领略编程之美",
  "themeConfig": {
    "image": "img/logo.png",
    "metadata": [
      {
        "name": "keywords",
        "content": "愧怍"
      },
      {
        "name": "keywords",
        "content": "blog, doc, 用户手册, 公司介绍, 公司网站, 应用介绍"
      },
      {
        "name": "keywords",
        "content": "编程爱好者, Web开发者, 写过爬虫, 学过逆向，现在主攻ts全栈"
      }
    ],
    "docs": {
      "sidebar": {
        "hideable": true,
        "autoCollapseCategories": false
      },
      "versionPersistence": "localStorage"
    },
    "navbar": {
      "title": "iEwayinfo",
      "logo": {
        "alt": "iEway",
        "src": "img/logo.webp",
        "srcDark": "img/logo.webp"
      },
      "hideOnScroll": true,
      "items": [
        {
          "label": "学习",
          "position": "right",
          "items": [
            {
              "label": "标签",
              "to": "tags"
            },
            {
              "label": "归档",
              "to": "archive"
            },
            {
              "label": "笔记",
              "to": "docs/skill/"
            },
            {
              "label": "工具推荐",
              "to": "docs/tools/"
            },
            {
              "label": "前端示例",
              "to": "https://example.kuizuo.cn"
            }
          ]
        },
        {
          "label": "工具",
          "position": "right",
          "items": [
            {
              "label": "API服务",
              "to": "https://api.kuizuo.cn"
            },
            {
              "label": "JS代码还原",
              "to": "https://js-de-obfuscator.kuizuo.cn"
            },
            {
              "label": "CyberChef加密",
              "to": "https://cipher.kuizuo.cn"
            },
            {
              "label": "Transform",
              "to": "https://transform.kuizuo.cn"
            },
            {
              "label": "网盘",
              "to": "https://pan.kuizuo.cn"
            }
          ]
        },
        {
          "label": "导航",
          "position": "right",
          "to": "resource"
        },
        {
          "label": "项目",
          "position": "right",
          "to": "project"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "学习",
          "items": [
            {
              "label": "标签",
              "to": "tags"
            },
            {
              "label": "归档",
              "to": "archive"
            },
            {
              "label": "技术笔记",
              "to": "docs/skill"
            },
            {
              "label": "实战项目",
              "to": "project"
            }
          ]
        },
        {
          "title": "社交媒体",
          "items": [
            {
              "label": "关于我",
              "to": "/about"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/kuizuo"
            },
            {
              "label": "掘金",
              "href": "https://juejin.cn/user/1565318510545901"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/M8cVcjDxkz"
            }
          ]
        },
        {
          "title": "更多",
          "items": [
            {
              "label": "友链",
              "position": "right",
              "to": "friends"
            },
            {
              "label": "导航",
              "position": "right",
              "to": "resource"
            },
            {
              "html": "<a href=\"https://docusaurus.io/zh-CN/\" target=\"_blank\"><img style=\"height:50px;margin-top:0.5rem\" src=\"/img/buildwith.png\" /><a/>"
            }
          ]
        }
      ],
      "copyright": "<p><a href=\"http://beian.miit.gov.cn/\" > 粤ICP备XXXXXXXXX号-X</a></p><p>Copyright © 2020 - PRESENT 愧怍 Built with Docusaurus.</p>"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#000000",
          "backgroundColor": "#ffffff"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(0, 128, 0)"
            }
          },
          {
            "types": [
              "builtin"
            ],
            "style": {
              "color": "rgb(0, 112, 193)"
            }
          },
          {
            "types": [
              "number",
              "variable",
              "inserted"
            ],
            "style": {
              "color": "rgb(9, 134, 88)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(0, 0, 0)"
            }
          },
          {
            "types": [
              "constant",
              "char"
            ],
            "style": {
              "color": "rgb(129, 31, 63)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(128, 0, 0)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 0, 0)"
            }
          },
          {
            "types": [
              "deleted",
              "string"
            ],
            "style": {
              "color": "rgb(163, 21, 21)"
            }
          },
          {
            "types": [
              "changed",
              "punctuation"
            ],
            "style": {
              "color": "rgb(4, 81, 165)"
            }
          },
          {
            "types": [
              "function",
              "keyword"
            ],
            "style": {
              "color": "rgb(0, 0, 255)"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(38, 127, 153)"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#9CDCFE",
          "backgroundColor": "#1E1E1E"
        },
        "styles": [
          {
            "types": [
              "prolog"
            ],
            "style": {
              "color": "rgb(0, 0, 128)"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(106, 153, 85)"
            }
          },
          {
            "types": [
              "builtin",
              "changed",
              "keyword",
              "interpolation-punctuation"
            ],
            "style": {
              "color": "rgb(86, 156, 214)"
            }
          },
          {
            "types": [
              "number",
              "inserted"
            ],
            "style": {
              "color": "rgb(181, 206, 168)"
            }
          },
          {
            "types": [
              "constant"
            ],
            "style": {
              "color": "rgb(100, 102, 149)"
            }
          },
          {
            "types": [
              "attr-name",
              "variable"
            ],
            "style": {
              "color": "rgb(156, 220, 254)"
            }
          },
          {
            "types": [
              "deleted",
              "string",
              "attr-value",
              "template-punctuation"
            ],
            "style": {
              "color": "rgb(206, 145, 120)"
            }
          },
          {
            "types": [
              "selector"
            ],
            "style": {
              "color": "rgb(215, 186, 125)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "rgb(86, 156, 214)"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "rgb(212, 212, 212)"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "#808080"
            }
          },
          {
            "types": [
              "function"
            ],
            "style": {
              "color": "rgb(220, 220, 170)"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "char"
            ],
            "style": {
              "color": "rgb(209, 105, 105)"
            }
          }
        ]
      },
      "additionalLanguages": [
        "java",
        "php",
        "rust",
        "toml"
      ],
      "defaultLanguage": "javascript",
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        },
        {
          "className": "code-block-error-line",
          "line": "This will error"
        }
      ]
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 4
    },
    "algolia": {
      "appId": "GV6YN1ODMO",
      "apiKey": "50303937b0e4630bec4a20a14e3b7872",
      "indexName": "kuizuo",
      "contextualSearch": true,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "zoom": {
      "selector": ".markdown :not(em) > img",
      "background": {
        "light": "rgb(255, 255, 255)",
        "dark": "rgb(50, 50, 50)"
      },
      "config": {}
    },
    "matomo": {
      "matomoUrl": "https://matomo.kuizuo.cn/",
      "siteId": "1",
      "phpLoader": "matomo.php",
      "jsLoader": "matomo.js"
    },
    "giscus": {
      "repo": "kuizuo/blog",
      "repoId": "MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=",
      "category": "General",
      "categoryId": "DIC_kwDOF7NJDM4CPK95",
      "theme": "light",
      "darkTheme": "dark"
    },
    "liveCodeBlock": {
      "playgroundPosition": "top"
    },
    "socials": {
      "github": "https://github.com/kuizuo",
      "twitter": "https://twitter.com/kuizuo",
      "juejin": "https://juejin.cn/user/1565318510545901",
      "csdn": "https://blog.csdn.net/kuizuo12",
      "qq": "https://wpa.qq.com/msgrd?v=3&amp;uin=911993023&amp;site=qq",
      "zhihu": "https://www.zhihu.com/people/kuizuo",
      "cloudmusic": "https://music.163.com/#/user/home?id=1333010742"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    }
  },
  "headTags": [
    {
      "tagName": "meta",
      "attributes": {
        "name": "description",
        "content": "愧怍的个人博客"
      }
    }
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "sidebarPath": "sidebars.js"
        },
        "blog": false,
        "theme": {
          "customCss": [
            "/Users/borzin/EWGit/iEwayDocs/src/css/custom.scss"
          ]
        },
        "sitemap": {
          "changefreq": "daily",
          "priority": 0.5
        },
        "gtag": {
          "trackingID": "G-S4SD5NXWXF",
          "anonymizeIP": true
        }
      }
    ]
  ],
  "plugins": [
    "docusaurus-plugin-matomo",
    "docusaurus-plugin-image-zoom",
    "docusaurus-plugin-sass",
    "/Users/borzin/EWGit/iEwayDocs/src/plugin/plugin-baidu-tongji",
    "/Users/borzin/EWGit/iEwayDocs/src/plugin/plugin-baidu-push",
    [
      "/Users/borzin/EWGit/iEwayDocs/src/plugin/plugin-content-blog",
      {
        "path": "blog",
        "routeBasePath": "/",
        "editLocalizedFiles": false,
        "blogDescription": "愧怍的个人博客",
        "blogSidebarCount": 10,
        "blogSidebarTitle": "最近更新",
        "postsPerPage": 10,
        "showReadingTime": true,
        "feedOptions": {
          "type": "all",
          "title": "愧怍",
          "copyright": "Copyright © 2023 愧怍 Built with Docusaurus.<p><a href=\"http://beian.miit.gov.cn/\" class=\"footer_lin\"> 粤ICP备XXXXXXXXX号-X</a></p>"
        }
      }
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        "disableInDev": false
      }
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        "debug": true,
        "offlineModeActivationStrategies": [
          "appInstalled",
          "standalone",
          "queryString"
        ],
        "pwaHead": [
          {
            "tagName": "link",
            "rel": "icon",
            "href": "/img/logo.png"
          },
          {
            "tagName": "link",
            "rel": "manifest",
            "href": "/manifest.json"
          },
          {
            "tagName": "meta",
            "name": "theme-color",
            "content": "rgb(51 139 255)"
          }
        ]
      }
    ]
  ],
  "stylesheets": [],
  "i18n": {
    "defaultLocale": "zh-CN",
    "locales": [
      "en",
      "zh-CN"
    ],
    "localeConfigs": {
      "en": {
        "htmlLang": "en-GB",
        "direction": "ltr"
      }
    },
    "path": "i18n"
  },
  "baseUrlIssueBanner": true,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "scripts": [],
  "clientModules": [],
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
