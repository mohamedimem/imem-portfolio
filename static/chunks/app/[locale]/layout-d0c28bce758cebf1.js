(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{4061:function(e,t,i){Promise.resolve().then(i.t.bind(i,9681,23)),Promise.resolve().then(i.bind(i,4320)),Promise.resolve().then(i.bind(i,7349)),Promise.resolve().then(i.bind(i,7252)),Promise.resolve().then(i.bind(i,2404)),Promise.resolve().then(i.bind(i,2612)),Promise.resolve().then(i.t.bind(i,6892,23))},4320:function(e,t,i){"use strict";i.d(t,{default:function(){return d}});var n=i(7437),a=i(9499),r=i(7501),o=i(7138),s=function(){for(var e,t,i=0,n="",a=arguments.length;i<a;i++)(e=arguments[i])&&(t=function e(t){var i,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t)){var r=t.length;for(i=0;i<r;i++)t[i]&&(n=e(t[i]))&&(a&&(a+=" "),a+=n)}else for(n in t)t[n]&&(a&&(a+=" "),a+=n)}return a}(e))&&(n&&(n+=" "),n+=t);return n},l=i(7252),c=i(8087),d=function(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:i}=(0,l.q)(),d=(0,c.useLocale)();return(0,n.jsxs)("header",{className:"z-[999] relative",children:[(0,n.jsx)(a.E.div,{className:"fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,n.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,n.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5  ",children:r.Ok.map((l,c)=>(0,n.jsx)(a.E.li,{className:"h-3/4 flex items-center justify-center relative break-keep",initial:{opacity:0,y:-100},animate:{opacity:1,y:0},children:(0,n.jsxs)(o.default,{href:l.hash,className:s("flex w-full items-center justify-center px-3 py-3 no-wrap hover:text-gray-950 dark:hover:text-gray-300 transition",{"text-gray-950":e===l.name,"dark:hover:text-gray-600":e==l.name}),onClick:()=>{t(l.name),i(Date.now())},children:["zh"===d?r.Fx[l.name]:l.name,l.name===e&&(0,n.jsx)(a.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},l.hash))})})]})}},7349:function(e,t,i){"use strict";i.d(t,{default:function(){return o}});var n=i(7437),a=i(2404);i(2265);var r=i(3781);function o(){let{theme:e,toggleTheme:t}=(0,a.F)();return(0,n.jsxs)("button",{className:"w-[2.5rem] h-[2.5rem] bg-opacity-80  flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all",onClick:t,children:[(0,n.jsx)("span",{className:"sr-only",children:"change dark mode"}),"light"===e?(0,n.jsx)(r.eSY,{}):(0,n.jsx)(r.s1t,{})]})}},7252:function(e,t,i){"use strict";i.d(t,{ActionSectionContextProvider:function(){return o},q:function(){return s}});var n=i(7437),a=i(2265);let r=(0,a.createContext)(null);function o(e){let{children:t}=e,[i,o]=(0,a.useState)("Home"),[s,l]=(0,a.useState)(0);return(0,n.jsx)(r.Provider,{value:{activeSection:i,setActiveSection:o,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,a.useContext)(r);if(!e)throw Error("useActiveSectionContext must be used within a ActionSectionContextProvider");return e}},2404:function(e,t,i){"use strict";i.d(t,{F:function(){return s}});var n=i(7437),a=i(2265),r=i(7412);let o=(0,a.createContext)(null);function s(){let e=(0,a.useContext)(o);if(!e)throw Error("useTheme must be used within a ThemeContextProvider");return e}t.default=e=>{let{children:t}=e,[i,s]=(0,a.useState)("light"),[l]=(0,r.Z)("/light-on.mp3",{volume:.5}),[c]=(0,r.Z)("/light-off.mp3",{volume:.5});return(0,a.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(s(e),"dark"===e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(s("dark"),document.documentElement.classList.add("dark"))},[i]),(0,n.jsx)(o.Provider,{value:{theme:i,toggleTheme:()=>{"light"===i?(s("dark"),c(),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(s("light"),l(),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}},7501:function(e,t,i){"use strict";i.d(t,{$c:function(){return l},pN:function(){return c},Fx:function(){return s},Ok:function(){return o},nD:function(){return d},ZU:function(){return u}});var n=i(2265),a=i(1942),r=i(7261);let o=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Projects",hash:"#projects"},{name:"Skills",hash:"#skills"},{name:"Experiences",hash:"#experience"}],s={Home:"首页",About:"关于我",Projects:"我的项目",Skills:"我的技能",Experiences:"我的经历"},l=[{title:"MSc in Computing and IT",location:"University of St Andrews, UK",description:"Achieved a Master's degree in Computing and IT, acquiring in-depth knowledge in areas such as Human Computer Interaction, Computer Communication Systems, and Information Security. Developed strong capabilities in computational thinking, user-centred design, and data visualisation, preparing for effective application in technology-driven environments",icon:n.createElement(r.qWM),date:"2023 Sep - 2024 May"},{title:"Frontend Intern",location:n.createElement("span",{},n.createElement("a",{href:"https://www.nio.com/",style:{textDecoration:"underline"},target:"_blank"},"NIO Inc.")," Wuhan, China"),description:"Developed NIO's third-generation station list and detail pages using Vue3, TypeScript, and Baidu Maps API. Implemented role-based access control for the Task Wizard page, enhancing system security. Collaborated effectively within a Jira-managed environment, utilizing Jenkins for deployment processes.",icon:n.createElement(a.qOV),date:"2022 Aug - 2022 Dec"},{title:"Frontend Assistant",location:"Wuhan University | Wuhan, China",description:"Developed and maintained Finknow, a Financial Knowledge Graph Query and Analysis Platform using umi (React framework) and Ant Design Pro. Utilized graphin, a React toolkit for graph analysis based on G6, to develop an Equity Network Penetration Graph, enhancing data visualization capabilities.",icon:n.createElement(a.huN),date:"2022 May - 2022 July"},{title:"BA in Digital Publishing",location:"Wuhan University, China",description:"Graduated with a Bachelor of Arts in Digital Publishing, securing a GPA of 3.81/4.0. Gained foundational knowledge in digital media and publishing technologies.",icon:n.createElement(r.qWM),date:"2019 Sep - 2023 Jun"}],c=[{title:"计算机与信息技术硕士",location:"英国圣安德鲁斯大学",description:"在人机交互、计算机通信系统和信息安全等领域深入学习。培养了计算思维、以用户为中心的设计和数据可视化方面的强大能力，预计以一等学位毕业（GPA17/20）。",icon:n.createElement(r.qWM),date:"2023年9月 - 2024年12月"},{title:"前端实习生",location:"蔚来汽车（中国武汉）",description:"参与团队多个平台的迭代开发，独立完成内部告警平台的值班表页面开发。协助开发蔚来第三代场站列表与详情页，集成百度地图 API 实现定位与选点功能。优化任务魔棒页面，新增管理员角色，重构权限管理逻辑，用头像列表展示管理员，并整合飞书 API 实现消息发送。自定义 Element-UI 级联选择组件，解决全选德国 2000+ 城市时浏览器卡死问题，通过懒加载优化显著提升性能。遵循 Agile/Scrum 开发流程，进行两周一迭代，通过 Jira 跟进项目需求，设计技术方案，并与测试、后端、产品及 设计团队密切对接。",icon:n.createElement(a.qOV),date:"2022年8月 - 2022年12月"},{title:"前端开发",location:"武汉大学大数据研究院",description:"使用umi（React框架）和Ant Design Pro开发和维护Finknow，一个金融知识图谱查询和分析平台。利用基于G6的React图分析工具包graphin开发了股权网络穿透图，增强了数据可视化功能。",icon:n.createElement(a.huN),date:"2022年5月 - 2022年8月"},{title:"数字出版学士",location:"武汉大学",description:"以3.81/4.0的GPA毕业，获得数字出版学士学位，掌握了数字媒体和出版技术的基础知识。",icon:n.createElement(r.qWM),date:"2019年9月 - 2023年6月"}],d=[{title:"Ethical Digital Nation Collaborative Platform",title_zh:"数字道德国家协作平台",description:"A collaborative platform enhancing cooperation among Scottish higher education institutions in digital ethics.",desc_zh:"旨在促进苏格兰高校在数字道德领域合作的协作平台。该平台集成用户访谈、工作坊、OAuth登录、最新数字博客RSS feed显示、完备的事件管理系统（包含高级评分与评论功能）以及注重可访问性的响应式设计。",tags:["React","Next.js 14","TypeScript","TailwindCSS","Convex","Clerk"],imageUrl:{src:"/_next/static/media/knowledge-sharing-platform.a232c111.png",height:1652,width:2986,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAATElEQVR42h3GUQrAMAgE0dz/pqU00UTd1f5UCsNjxtmcz9HlKo4T5QYROsYW3pfIdF3halSFbpIjIs3QAgUkmWCyajCrL6s6Zvvm7wfjMVwnT7y/+wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},projectUrl:"https://github.com/Codefreyy/Ethical-Digital-Nation",demoUrl:"https://yujie-ethical-digital-nation.netlify.app/"},{title:"Typing Speed",title_zh:"打字测验",description:"A comprehensive typing speed test application that tracks your overall typing performance. It provides detailed statistics, including total words typed, errors made, and accuracy rate, allowing users to monitor their progress and improve their typing efficiency.",desc_zh:"一个打字速度测试应用。敲击即开始打字，计时结束后将显示总敲击单词数、正确率、错误率等。该应用UI简洁现代，支持Dark Mode切换。",tags:["React","TypeScript","Tailwind","Framer Motion"],imageUrl:{src:"/_next/static/media/typing-speed.2c0f53cd.png",height:1158,width:1432,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAe0lEQVR42g3DQQrCMBRF0ft+GgxCByIITpw4rCtw/+7DoSBIqaipafL1wNFxODf5+MVAlRaQWEO3TRw29noTI6w8zmqTrrV15UOo6lO4PX2ZS5iFe4bu0bjkWnJN0ZRtKi0YCUzy+L9w2jHsSdCbgqkDOcTAfXQJMxoAP6xIMJBl1qShAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},projectUrl:"https://github.com/Codefreyy/typing-speed-game",demoUrl:"https://joy-typing-speed.netlify.app/"},{title:"Breddit",title_zh:"社交新闻论坛",description:"A modern full-stack Reddit clone with infinite scrolling, secure NextAuth Google authentication, and a custom feed for authenticated users. It uses Upstash Redis for caching and React-Query for efficient, responsive data fetching with optimistic updates.\n            ",desc_zh:"一个现代且简洁的Reddit克隆项目，使用Next.js、TypeScript和Tailwind CSS构建。项目功能包括无限滚动动态加载帖子、NextAuth与Google认证、为认证用户提供自定义Feed、高级缓存、乐观更新、React-Query数据获取、美观的帖子编辑器、图片上传和链接预览、以及完整的评论功能。",tags:["Next.js","TypeScript","Upstash","React-Query","TailwindCSS"],imageUrl:{src:"/_next/static/media/breaddit.c875d20f.png",height:1518,width:2206,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAeklEQVR42hWNMRbCMAxD7dhtygkYev9DAVMZSDZeXoeWJrFwbG3Sl7iUAnCMEYTA4wFY7xqXW2tVVYIEArlKO67QlZnnafYggQCIhPo9ckp81fo7z95tWaJTr8fzvq7ql1N23my0OF3NfHUY2/Y2dB8VESLSSffPboY/Ad9FgVVvcxIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},projectUrl:"https://github.com/Codefreyy/Breddit",demoUrl:"https://joy-breddit.vercel.app/"},{title:"Global Wealth Spectrum Visualisation",title_zh:"世界财富可视化光谱",description:"This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",desc_zh:"交互式可视化图表探讨了税收政策如何影响财富、不同行业对不同性别的财富的影响以及这些影响在各大洲之间的差异。深入了解我们的数据，揭示全球财富的复杂层次。",tags:["d3.js","HTML","CSS","Vanilla JavaScript"],imageUrl:{src:"/_next/static/media/d3.695d3622.png",height:1654,width:3022,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWUlEQVR42hWIuw6AIAwA+f+vc3BxNBFjYlDkUSqlrfVyw+VcTsUMMeRSoCEA4Esi4vx+TMvso6fedBCzrNtZAd313KkmVR29I1SL1tB0wsKDEZGI7Ar/qOoH2ptcTfxXI4UAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},projectUrl:"https://github.com/Codefreyy/d3-evolution-visualisation",demoUrl:"https://global-wealth-spectrum.netlify.app/"}],u=["HTML","CSS","JavaScript","TypeScript","React","Next","Vue2","Vue3","Node","Express","Git","Github","Tailwind","Chakra UI","Boostrap","Prisma","MongoDB","Framer Motion","d3","UI/UX"]},2612:function(e,t,i){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}i.d(t,{default:function(){return o}});var a=i(2265),r=i(4480);function o(e){let{locale:t,...i}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return a.createElement(r.IntlProvider,n({locale:t},i))}},9681:function(){},6892:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}}},function(e){e.O(0,[878,779,699,212,490,971,23,744],function(){return e(e.s=4061)}),_N_E=e.O()}]);