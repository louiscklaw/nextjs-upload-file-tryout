"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[88606],{66233:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var n=r(74848),i=r(28453),s=r(70344);const t={title:"iOS Build Stacks",description:"Learn about the iOS build stacks in Appcircle",tags:["ios","build","build stacks","iOS build stacks"],sidebar_position:1},l="iOS Build Stacks",c={id:"infrastructure/ios-build-infrastructure",title:"iOS Build Stacks",description:"Learn about the iOS build stacks in Appcircle",source:"@site/docs/080_infrastructure/ios-build-infrastructure.md",sourceDirName:"080_infrastructure",slug:"/infrastructure/ios-build-infrastructure",permalink:"/nextjs-upload-file-tryout/infrastructure/ios-build-infrastructure",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/080_infrastructure/ios-build-infrastructure.md",tags:[{label:"ios",permalink:"/nextjs-upload-file-tryout/tags/ios"},{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"build stacks",permalink:"/nextjs-upload-file-tryout/tags/build-stacks"},{label:"iOS build stacks",permalink:"/nextjs-upload-file-tryout/tags/i-os-build-stacks"}],version:"current",sidebarPosition:1,frontMatter:{title:"iOS Build Stacks",description:"Learn about the iOS build stacks in Appcircle",tags:["ios","build","build stacks","iOS build stacks"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Build Infrastructure \u7de8\u8b6f\u74b0\u5883",permalink:"/nextjs-upload-file-tryout/infrastructure/"},next:{title:"Android Build Stacks",permalink:"/nextjs-upload-file-tryout/infrastructure/android-build-infrastructure"}},h={},o=[{value:"Available Xcode Versions",id:"available-xcode-versions",level:2},{value:"iOS Build Agent Stacks",id:"ios-build-agent-stacks",level:2},{value:"Using your own computer for build",id:"using-your-own-computer-for-build",level:3}];function x(e){const d={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"ios-build-stacks",children:"iOS Build Stacks"}),"\n",(0,n.jsx)(d.p,{children:"Depending on which Xcode version you select, Appcircle creates a brand new virtual machine running."}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsxs)(d.p,{children:['If your selected pool from config is "Default Intel Pool", virtual machine will be macOS Monterey ',(0,n.jsx)(d.code,{children:"12.5.1"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:'If your selected pool from config is "Default M1 Pool", there are two options for virtual machine.'}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["If you select Xcode 14.3 or later, virtual machine will be macOS Sonoma ",(0,n.jsx)(d.code,{children:"14.1"}),"."]}),"\n",(0,n.jsxs)(d.li,{children:["If you select Xcode 14.2 or earlier, virtual machine will be macOS Monterey ",(0,n.jsx)(d.code,{children:"12.6"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(d.admonition,{type:"caution",children:(0,n.jsx)(d.p,{children:'If you select Xcode 14.3 or later and "Default Intel Pool", your build will not start. Because Xcode 14.3 or later requires a Mac running macOS Ventura 13.0 or later.'})}),"\n",(0,n.jsx)(d.p,{children:"MacOS images run on fresh virtual machines for stability and performance. They are created just for your build and become ready within seconds."}),"\n",(0,n.jsx)(d.p,{children:'During the build process, you can install any dependencies and run commands using "custom script" steps in the build workflow. This gives you complete control over your build and the virtual machine.'}),"\n",(0,n.jsx)(d.admonition,{type:"info",children:(0,n.jsx)(d.p,{children:"Please note that virtual machines are wiped off after a build is executed (no matter success or fail) and anything you installed in the virtual machine will be gone."})}),"\n",(0,n.jsx)(d.h2,{id:"available-xcode-versions",children:"Available Xcode Versions"}),"\n",(0,n.jsx)(d.p,{children:"Our macOS build agents have Xcode versions 15.4.x, 15.3.x, 15.2.x, 15.1.x, 15.0.x, 14.3.x, 14.2.x, 14.1.x, 14.0.x, 13.4.x, 13.3.x, 13.2.x, 13.1.x, 13.0.x, 12.5.x available."}),"\n",(0,n.jsx)(d.admonition,{type:"caution",children:(0,n.jsxs)(d.p,{children:["Xcode ",(0,n.jsx)(d.code,{children:"14.3.x"})," or higher Xcode versions require a Mac running macOS Ventura 13.0 or later."]})}),"\n",(0,n.jsxs)(d.p,{children:['The "Default M1 Pool" macOS ',(0,n.jsx)(d.strong,{children:"Sonoma"})," (",(0,n.jsx)(d.code,{children:"14.1"}),") stack has the Xcode versions below:"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Version"}),(0,n.jsx)(d.th,{children:"Build"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"15.4"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"15F31d"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"15.3"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"15E204a"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"15.2"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"15C500b"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"15.1"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"15C65"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"15.0.1"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"15A507"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"14.3.1"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"14E300c"})})]})]})]}),"\n",(0,n.jsxs)(d.p,{children:['The "Default M1 Pool" macOS ',(0,n.jsx)(d.strong,{children:"Monterey"})," (",(0,n.jsx)(d.code,{children:"12.5.1"}),") stack has the Xcode versions below:"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Version"}),(0,n.jsx)(d.th,{children:"Build"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"14.2"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"14C18"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"14.1"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"14B47b"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"14.0.1"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"14A400"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"13.4"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"13F17a"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"13.3"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"13E113"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"13.2.1"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"13C100"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"13.1"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"13A1030d"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"13.0"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"13A233"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"12.5.1"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"12E507"})})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"ios-build-agent-stacks",children:"iOS Build Agent Stacks"}),"\n",(0,n.jsx)(d.p,{children:'There are many pre-installed packages on virtual machines. You can get a full list of pre-installed packages by running Bash commands in "custom script" steps.'}),"\n",(0,n.jsx)(d.p,{children:"Here are some of the most important packages installed in our iOS build agents used for iOS builds:"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:['For "Default M1 Pool" Xcode ',(0,n.jsx)(d.code,{children:"14.3.x"})," or later macOS Sonoma ",(0,n.jsx)(d.code,{children:"14.1"})]}),"\n",(0,n.jsxs)(d.li,{children:['For "Default M1 Pool" Xcode ',(0,n.jsx)(d.code,{children:"14.2.x"})," or earlier macOS Monterey ",(0,n.jsx)(d.code,{children:"12.6"})]}),"\n",(0,n.jsxs)(d.li,{children:['For "Default Intel Pool" macOS Monterey ',(0,n.jsx)(d.code,{children:"12.5.1"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["\ud83d\udcdd"," Supports Xcode versions up to ",(0,n.jsx)(d.code,{children:"14.2.x"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Package"}),(0,n.jsx)(d.th,{children:"M1 Pool Monterey"}),(0,n.jsx)(d.th,{children:"M1 Pool Sonoma"}),(0,n.jsx)(d.th,{children:"Intel Pool"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Bash"}),(0,n.jsx)(d.td,{children:"3.2.57"}),(0,n.jsx)(d.td,{children:"3.2.57"}),(0,n.jsx)(d.td,{children:"3.2.57"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Bundle"}),(0,n.jsx)(d.td,{children:"2.1.4"}),(0,n.jsx)(d.td,{children:"2.4.19"}),(0,n.jsx)(d.td,{children:"2.3.9"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Carthage"}),(0,n.jsx)(d.td,{children:"0.38.0"}),(0,n.jsx)(d.td,{children:"0.39.1"}),(0,n.jsx)(d.td,{children:"0.38.0"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Curl"}),(0,n.jsx)(d.td,{children:"7.79.1"}),(0,n.jsx)(d.td,{children:"8.1.2"}),(0,n.jsx)(d.td,{children:"7.79.1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Homebrew"}),(0,n.jsx)(d.td,{children:"3.6.11"}),(0,n.jsx)(d.td,{children:"4.2.8"}),(0,n.jsx)(d.td,{children:"3.4.2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Java (OpenJDK)"}),(0,n.jsx)(d.td,{children:"11.0.21"}),(0,n.jsx)(d.td,{children:"11.0.21"}),(0,n.jsx)(d.td,{children:"11.0.2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Gem"}),(0,n.jsx)(d.td,{children:"3.1.6"}),(0,n.jsx)(d.td,{children:"3.4.19"}),(0,n.jsx)(d.td,{children:"3.1.6"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Fastlane"}),(0,n.jsx)(d.td,{children:"2.211.0"}),(0,n.jsx)(d.td,{children:"2.219.0"}),(0,n.jsx)(d.td,{children:"2.204.3"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Git"}),(0,n.jsx)(d.td,{children:"2.38.1"}),(0,n.jsx)(d.td,{children:"2.43.2"}),(0,n.jsx)(d.td,{children:"2.35.1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Git LFS"}),(0,n.jsx)(d.td,{children:"3.2.0"}),(0,n.jsx)(d.td,{children:"3.4.1"}),(0,n.jsx)(d.td,{children:"3.1.2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Gzip (Apple)"}),(0,n.jsx)(d.td,{children:"353.100.22"}),(0,n.jsx)(d.td,{children:"428"}),(0,n.jsx)(d.td,{children:"353.100.22"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"LibreSSL (OpenSSL)"}),(0,n.jsx)(d.td,{children:"2.8.3"}),(0,n.jsx)(d.td,{children:"3.3.6"}),(0,n.jsx)(d.td,{children:"2.8.3"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ImageMagick"}),(0,n.jsx)(d.td,{children:"7.1.0"}),(0,n.jsx)(d.td,{children:"7.1.1-28"}),(0,n.jsx)(d.td,{children:"7.1.0"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Maven"}),(0,n.jsx)(d.td,{children:"3.8.6"}),(0,n.jsx)(d.td,{children:"3.9.6"}),(0,n.jsx)(d.td,{children:"3.8.4"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"N"}),(0,n.jsx)(d.td,{children:"9.0.1"}),(0,n.jsx)(d.td,{children:"9.2.0"}),(0,n.jsx)(d.td,{children:"8.0.2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Node"}),(0,n.jsx)(d.td,{children:"18.19.1"}),(0,n.jsx)(d.td,{children:"18.19.1"}),(0,n.jsx)(d.td,{children:"16.14.0"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Npm"}),(0,n.jsx)(d.td,{children:"10.2.4"}),(0,n.jsx)(d.td,{children:"10.2.4"}),(0,n.jsx)(d.td,{children:"8.3.1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Perl"}),(0,n.jsx)(d.td,{children:"5.30.3"}),(0,n.jsx)(d.td,{children:"5.30.3"}),(0,n.jsx)(d.td,{children:"5.30.3"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Pod"}),(0,n.jsx)(d.td,{children:"1.11.3"}),(0,n.jsx)(d.td,{children:"1.15.2"}),(0,n.jsx)(d.td,{children:"1.11.2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Pip"}),(0,n.jsx)(d.td,{children:"22.2.2"}),(0,n.jsx)(d.td,{children:"23.3.1"}),(0,n.jsx)(d.td,{children:"21.3.1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Python"}),(0,n.jsx)(d.td,{children:"3.10.8"}),(0,n.jsx)(d.td,{children:"3.11.7"}),(0,n.jsx)(d.td,{children:"3.9.10"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Rake"}),(0,n.jsx)(d.td,{children:"13.0.1"}),(0,n.jsx)(d.td,{children:"13.0.6"}),(0,n.jsx)(d.td,{children:"13.0.1"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Ruby"}),(0,n.jsx)(d.td,{children:"2.7.5"}),(0,n.jsx)(d.td,{children:"3.2.3"}),(0,n.jsx)(d.td,{children:"2.7.5"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Rbenv"}),(0,n.jsx)(d.td,{children:"1.2.0"}),(0,n.jsx)(d.td,{children:"1.2.0"}),(0,n.jsx)(d.td,{children:"1.2.0"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Sdkman"}),(0,n.jsx)(d.td,{children:"5.16.0"}),(0,n.jsx)(d.td,{children:"5.18.2"}),(0,n.jsx)(d.td,{children:"5.14.0"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Slather"}),(0,n.jsx)(d.td,{children:"2.7.2"}),(0,n.jsx)(d.td,{children:"2.8.0"}),(0,n.jsx)(d.td,{children:"2.7.2"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Unzip"}),(0,n.jsx)(d.td,{children:"6.00"}),(0,n.jsx)(d.td,{children:"6.00"}),(0,n.jsx)(d.td,{children:"6.00"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Xcodeproj"}),(0,n.jsx)(d.td,{children:"1.22.0"}),(0,n.jsx)(d.td,{children:"1.24.0"}),(0,n.jsx)(d.td,{children:"1.21.0"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Yarn"}),(0,n.jsx)(d.td,{children:"1.22.19"}),(0,n.jsx)(d.td,{children:"1.22.19"}),(0,n.jsx)(d.td,{children:"1.22.17"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Zip"}),(0,n.jsx)(d.td,{children:"3.0"}),(0,n.jsx)(d.td,{children:"3.0"}),(0,n.jsx)(d.td,{children:"3.0"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"using-your-own-computer-for-build",children:"Using your own computer for build"}),"\n",(0,n.jsx)(d.p,{children:"Appcircle supports using a third-party computer to perform builds. You can create your own build environment by installing the operating system and other tools and dependencies you need to tell Appcircle to use that environment to perform builds."}),"\n",(0,n.jsx)(s.A,{url:"/self-hosted-appcircle/self-hosted-runner",children:(0,n.jsx)(d.p,{children:"Appcircle Self-hosted Runner"})})]})}function a(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},70344:(e,d,r)=>{r.d(d,{A:()=>h});var n,i,s=r(96540);function t(){return t=Object.assign?Object.assign.bind():function(e){for(var d=1;d<arguments.length;d++){var r=arguments[d];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(null,arguments)}const l=e=>{let{title:d,titleId:r,...l}=e;return s.createElement("svg",t({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":r},l),d?s.createElement("title",{id:r},d):null,n||(n=s.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),i||(i=s.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var c=r(74848);function h(e){let{children:d,url:r}=e;return(0,c.jsxs)("a",{href:r,className:"content-ref-card",children:[(0,c.jsx)(l,{title:"File Icon",className:"file-icon"}),d]})}},28453:(e,d,r)=>{r.d(d,{R:()=>t,x:()=>l});var n=r(96540);const i={},s=n.createContext(i);function t(e){const d=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(s.Provider,{value:d},e.children)}}}]);