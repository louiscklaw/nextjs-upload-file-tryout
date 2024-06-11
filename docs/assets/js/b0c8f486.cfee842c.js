"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[49020],{8746:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var n=d(74848),s=d(28453),i=d(70344);const t={title:"iOS Build Stacks",description:"Learn about the iOS build stacks in Appcircle",tags:["ios","build","build stacks","iOS build stacks"],sidebar_position:1},l="iOS Build Stacks",c={id:"infrastructure/ios-build-infrastructure",title:"iOS Build Stacks",description:"Learn about the iOS build stacks in Appcircle",source:"@site/docs/infrastructure/ios-build-infrastructure.md",sourceDirName:"infrastructure",slug:"/infrastructure/ios-build-infrastructure",permalink:"/nextjs-upload-file-tryout/infrastructure/ios-build-infrastructure",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/infrastructure/ios-build-infrastructure.md",tags:[{label:"ios",permalink:"/nextjs-upload-file-tryout/tags/ios"},{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"build stacks",permalink:"/nextjs-upload-file-tryout/tags/build-stacks"},{label:"iOS build stacks",permalink:"/nextjs-upload-file-tryout/tags/i-os-build-stacks"}],version:"current",sidebarPosition:1,frontMatter:{title:"iOS Build Stacks",description:"Learn about the iOS build stacks in Appcircle",tags:["ios","build","build stacks","iOS build stacks"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Build Infrastructure",permalink:"/nextjs-upload-file-tryout/infrastructure/"},next:{title:"Android Build Stacks",permalink:"/nextjs-upload-file-tryout/infrastructure/android-build-infrastructure"}},h={},o=[{value:"Available Xcode Versions",id:"available-xcode-versions",level:2},{value:"iOS Build Agent Stacks",id:"ios-build-agent-stacks",level:2},{value:"Using your own computer for build",id:"using-your-own-computer-for-build",level:3}];function x(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"ios-build-stacks",children:"iOS Build Stacks"}),"\n",(0,n.jsx)(r.p,{children:"Depending on which Xcode version you select, Appcircle creates a brand new virtual machine running."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:['If your selected pool from config is "Default Intel Pool", virtual machine will be macOS Monterey ',(0,n.jsx)(r.code,{children:"12.5.1"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:'If your selected pool from config is "Default M1 Pool", there are two options for virtual machine.'}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["If you select Xcode 14.3 or later, virtual machine will be macOS Sonoma ",(0,n.jsx)(r.code,{children:"14.1"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["If you select Xcode 14.2 or earlier, virtual machine will be macOS Monterey ",(0,n.jsx)(r.code,{children:"12.6"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsx)(r.p,{children:'If you select Xcode 14.3 or later and "Default Intel Pool", your build will not start. Because Xcode 14.3 or later requires a Mac running macOS Ventura 13.0 or later.'})}),"\n",(0,n.jsx)(r.p,{children:"MacOS images run on fresh virtual machines for stability and performance. They are created just for your build and become ready within seconds."}),"\n",(0,n.jsx)(r.p,{children:'During the build process, you can install any dependencies and run commands using "custom script" steps in the build workflow. This gives you complete control over your build and the virtual machine.'}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"Please note that virtual machines are wiped off after a build is executed (no matter success or fail) and anything you installed in the virtual machine will be gone."})}),"\n",(0,n.jsx)(r.h2,{id:"available-xcode-versions",children:"Available Xcode Versions"}),"\n",(0,n.jsx)(r.p,{children:"Our macOS build agents have Xcode versions 15.4.x, 15.3.x, 15.2.x, 15.1.x, 15.0.x, 14.3.x, 14.2.x, 14.1.x, 14.0.x, 13.4.x, 13.3.x, 13.2.x, 13.1.x, 13.0.x, 12.5.x available."}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsxs)(r.p,{children:["Xcode ",(0,n.jsx)(r.code,{children:"14.3.x"})," or higher Xcode versions require a Mac running macOS Ventura 13.0 or later."]})}),"\n",(0,n.jsxs)(r.p,{children:['The "Default M1 Pool" macOS ',(0,n.jsx)(r.strong,{children:"Sonoma"})," (",(0,n.jsx)(r.code,{children:"14.1"}),") stack has the Xcode versions below:"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Version"}),(0,n.jsx)(r.th,{children:"Build"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"15.4"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"15F31d"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"15.3"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"15E204a"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"15.2"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"15C500b"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"15.1"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"15C65"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"15.0.1"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"15A507"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"14.3.1"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"14E300c"})})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:['The "Default M1 Pool" macOS ',(0,n.jsx)(r.strong,{children:"Monterey"})," (",(0,n.jsx)(r.code,{children:"12.5.1"}),") stack has the Xcode versions below:"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Version"}),(0,n.jsx)(r.th,{children:"Build"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"14.2"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"14C18"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"14.1"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"14B47b"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"14.0.1"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"14A400"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"13.4"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"13F17a"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"13.3"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"13E113"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"13.2.1"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"13C100"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"13.1"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"13A1030d"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"13.0"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"13A233"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"12.5.1"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"12E507"})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"ios-build-agent-stacks",children:"iOS Build Agent Stacks"}),"\n",(0,n.jsx)(r.p,{children:'There are many pre-installed packages on virtual machines. You can get a full list of pre-installed packages by running Bash commands in "custom script" steps.'}),"\n",(0,n.jsx)(r.p,{children:"Here are some of the most important packages installed in our iOS build agents used for iOS builds:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:['For "Default M1 Pool" Xcode ',(0,n.jsx)(r.code,{children:"14.3.x"})," or later macOS Sonoma ",(0,n.jsx)(r.code,{children:"14.1"})]}),"\n",(0,n.jsxs)(r.li,{children:['For "Default M1 Pool" Xcode ',(0,n.jsx)(r.code,{children:"14.2.x"})," or earlier macOS Monterey ",(0,n.jsx)(r.code,{children:"12.6"})]}),"\n",(0,n.jsxs)(r.li,{children:['For "Default Intel Pool" macOS Monterey ',(0,n.jsx)(r.code,{children:"12.5.1"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\ud83d\udcdd"," Supports Xcode versions up to ",(0,n.jsx)(r.code,{children:"14.2.x"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Package"}),(0,n.jsx)(r.th,{children:"M1 Pool Monterey"}),(0,n.jsx)(r.th,{children:"M1 Pool Sonoma"}),(0,n.jsx)(r.th,{children:"Intel Pool"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Bash"}),(0,n.jsx)(r.td,{children:"3.2.57"}),(0,n.jsx)(r.td,{children:"3.2.57"}),(0,n.jsx)(r.td,{children:"3.2.57"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Bundle"}),(0,n.jsx)(r.td,{children:"2.1.4"}),(0,n.jsx)(r.td,{children:"2.4.19"}),(0,n.jsx)(r.td,{children:"2.3.9"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Carthage"}),(0,n.jsx)(r.td,{children:"0.38.0"}),(0,n.jsx)(r.td,{children:"0.39.1"}),(0,n.jsx)(r.td,{children:"0.38.0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Curl"}),(0,n.jsx)(r.td,{children:"7.79.1"}),(0,n.jsx)(r.td,{children:"8.1.2"}),(0,n.jsx)(r.td,{children:"7.79.1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Homebrew"}),(0,n.jsx)(r.td,{children:"3.6.11"}),(0,n.jsx)(r.td,{children:"4.2.8"}),(0,n.jsx)(r.td,{children:"3.4.2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Java (OpenJDK)"}),(0,n.jsx)(r.td,{children:"11.0.21"}),(0,n.jsx)(r.td,{children:"11.0.21"}),(0,n.jsx)(r.td,{children:"11.0.2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Gem"}),(0,n.jsx)(r.td,{children:"3.1.6"}),(0,n.jsx)(r.td,{children:"3.4.19"}),(0,n.jsx)(r.td,{children:"3.1.6"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Fastlane"}),(0,n.jsx)(r.td,{children:"2.211.0"}),(0,n.jsx)(r.td,{children:"2.219.0"}),(0,n.jsx)(r.td,{children:"2.204.3"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Git"}),(0,n.jsx)(r.td,{children:"2.38.1"}),(0,n.jsx)(r.td,{children:"2.43.2"}),(0,n.jsx)(r.td,{children:"2.35.1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Git LFS"}),(0,n.jsx)(r.td,{children:"3.2.0"}),(0,n.jsx)(r.td,{children:"3.4.1"}),(0,n.jsx)(r.td,{children:"3.1.2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Gzip (Apple)"}),(0,n.jsx)(r.td,{children:"353.100.22"}),(0,n.jsx)(r.td,{children:"428"}),(0,n.jsx)(r.td,{children:"353.100.22"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"LibreSSL (OpenSSL)"}),(0,n.jsx)(r.td,{children:"2.8.3"}),(0,n.jsx)(r.td,{children:"3.3.6"}),(0,n.jsx)(r.td,{children:"2.8.3"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ImageMagick"}),(0,n.jsx)(r.td,{children:"7.1.0"}),(0,n.jsx)(r.td,{children:"7.1.1-28"}),(0,n.jsx)(r.td,{children:"7.1.0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Maven"}),(0,n.jsx)(r.td,{children:"3.8.6"}),(0,n.jsx)(r.td,{children:"3.9.6"}),(0,n.jsx)(r.td,{children:"3.8.4"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"N"}),(0,n.jsx)(r.td,{children:"9.0.1"}),(0,n.jsx)(r.td,{children:"9.2.0"}),(0,n.jsx)(r.td,{children:"8.0.2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Node"}),(0,n.jsx)(r.td,{children:"18.19.1"}),(0,n.jsx)(r.td,{children:"18.19.1"}),(0,n.jsx)(r.td,{children:"16.14.0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Npm"}),(0,n.jsx)(r.td,{children:"10.2.4"}),(0,n.jsx)(r.td,{children:"10.2.4"}),(0,n.jsx)(r.td,{children:"8.3.1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Perl"}),(0,n.jsx)(r.td,{children:"5.30.3"}),(0,n.jsx)(r.td,{children:"5.30.3"}),(0,n.jsx)(r.td,{children:"5.30.3"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Pod"}),(0,n.jsx)(r.td,{children:"1.11.3"}),(0,n.jsx)(r.td,{children:"1.15.2"}),(0,n.jsx)(r.td,{children:"1.11.2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Pip"}),(0,n.jsx)(r.td,{children:"22.2.2"}),(0,n.jsx)(r.td,{children:"23.3.1"}),(0,n.jsx)(r.td,{children:"21.3.1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Python"}),(0,n.jsx)(r.td,{children:"3.10.8"}),(0,n.jsx)(r.td,{children:"3.11.7"}),(0,n.jsx)(r.td,{children:"3.9.10"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Rake"}),(0,n.jsx)(r.td,{children:"13.0.1"}),(0,n.jsx)(r.td,{children:"13.0.6"}),(0,n.jsx)(r.td,{children:"13.0.1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Ruby"}),(0,n.jsx)(r.td,{children:"2.7.5"}),(0,n.jsx)(r.td,{children:"3.2.3"}),(0,n.jsx)(r.td,{children:"2.7.5"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Rbenv"}),(0,n.jsx)(r.td,{children:"1.2.0"}),(0,n.jsx)(r.td,{children:"1.2.0"}),(0,n.jsx)(r.td,{children:"1.2.0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Sdkman"}),(0,n.jsx)(r.td,{children:"5.16.0"}),(0,n.jsx)(r.td,{children:"5.18.2"}),(0,n.jsx)(r.td,{children:"5.14.0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Slather"}),(0,n.jsx)(r.td,{children:"2.7.2"}),(0,n.jsx)(r.td,{children:"2.8.0"}),(0,n.jsx)(r.td,{children:"2.7.2"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Unzip"}),(0,n.jsx)(r.td,{children:"6.00"}),(0,n.jsx)(r.td,{children:"6.00"}),(0,n.jsx)(r.td,{children:"6.00"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Xcodeproj"}),(0,n.jsx)(r.td,{children:"1.22.0"}),(0,n.jsx)(r.td,{children:"1.24.0"}),(0,n.jsx)(r.td,{children:"1.21.0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Yarn"}),(0,n.jsx)(r.td,{children:"1.22.19"}),(0,n.jsx)(r.td,{children:"1.22.19"}),(0,n.jsx)(r.td,{children:"1.22.17"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Zip"}),(0,n.jsx)(r.td,{children:"3.0"}),(0,n.jsx)(r.td,{children:"3.0"}),(0,n.jsx)(r.td,{children:"3.0"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"using-your-own-computer-for-build",children:"Using your own computer for build"}),"\n",(0,n.jsx)(r.p,{children:"Appcircle supports using a third-party computer to perform builds. You can create your own build environment by installing the operating system and other tools and dependencies you need to tell Appcircle to use that environment to perform builds."}),"\n",(0,n.jsx)(i.A,{url:"/self-hosted-appcircle/self-hosted-runner",children:(0,n.jsx)(r.p,{children:"Appcircle Self-hosted Runner"})})]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},70344:(e,r,d)=>{d.d(r,{A:()=>h});var n,s,i=d(96540);function t(){return t=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var d=arguments[r];for(var n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n])}return e},t.apply(this,arguments)}const l=e=>{let{title:r,titleId:d,...l}=e;return i.createElement("svg",t({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":d},l),r?i.createElement("title",{id:d},r):null,n||(n=i.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),s||(s=i.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var c=d(74848);function h(e){let{children:r,url:d}=e;return(0,c.jsxs)("a",{href:d,className:"content-ref-card",children:[(0,c.jsx)(l,{title:"File Icon",className:"file-icon"}),r]})}},28453:(e,r,d)=>{d.d(r,{R:()=>t,x:()=>l});var n=d(96540);const s={},i=n.createContext(s);function t(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);