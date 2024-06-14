"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[90111],{67774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=r(74848),i=r(28453),l=r(69678);const o={title:"Flutter Build for iOS",description:"Learn to build iOS apps with the Flutter Build for iOS component. Ensure Flutter Install and Git Clone steps are completed first.",tags:["flutter","build","test","workflow","step"]},n="Flutter Build for iOS",d={id:"workflows/flutter-specific-workflow-steps/flutter-build-for-ios",title:"Flutter Build for iOS",description:"Learn to build iOS apps with the Flutter Build for iOS component. Ensure Flutter Install and Git Clone steps are completed first.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/700_workflows/flutter-specific-workflow-steps/flutter-build-for-ios.md",sourceDirName:"700_workflows/flutter-specific-workflow-steps",slug:"/workflows/flutter-specific-workflow-steps/flutter-build-for-ios",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/flutter-specific-workflow-steps/flutter-build-for-ios",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/flutter-specific-workflow-steps/flutter-build-for-ios.md",tags:[{label:"flutter",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/flutter"},{label:"build",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/build"},{label:"test",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/test"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/step"}],version:"current",frontMatter:{title:"Flutter Build for iOS",description:"Learn to build iOS apps with the Flutter Build for iOS component. Ensure Flutter Install and Git Clone steps are completed first.",tags:["flutter","build","test","workflow","step"]},sidebar:"tutorialSidebar",previous:{title:"Flutter Build for Android",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/flutter-specific-workflow-steps/flutter-build-for-android"},next:{title:"\u200bFlutter Build for Web",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/flutter-specific-workflow-steps/flutter-build-for-web"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{ExternalUrlRef:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"flutter-build-for-ios",children:"Flutter Build for iOS"}),"\n",(0,s.jsxs)(t.p,{children:["This step makes your Flutter project suitable for the iOS environment and builds it using the ",(0,s.jsx)(t.a,{href:"https://github.com/flutter/flutter",children:"Flutter SDK"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["Once you have compiled your app for Flutter iOS, the native environment will be built. For this reason, this step should be used before the ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps#xcodebuild-for-devices-archive--export",children:(0,s.jsx)(t.strong,{children:"Xcodebuild for Devices"})})," step."]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:(0,s.jsx)(t.strong,{children:"Git Clone"})})}),(0,s.jsxs)(t.td,{children:["This step will clone your project through the connected Git provider and create the ",(0,s.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"})," variable."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/flutter-specific-workflow-steps#flutter-install",children:(0,s.jsx)(t.strong,{children:"Flutter Install"})})}),(0,s.jsxs)(t.td,{children:["This step will install the Flutter SDK. If a version is not specified, it will install the latest ",(0,s.jsx)(t.strong,{children:"stable"})," version. The ",(0,s.jsx)(t.strong,{children:"Flutter SDK"})," package must be installed on the system. For this reason, make sure that ",(0,s.jsx)(t.strong,{children:"Flutter Build for iOS"})," is used after the ",(0,s.jsx)(t.strong,{children:"Flutter Install"}),"."]})]})]})]}),"\n",(0,s.jsx)(l.A,{url:"https://cdn.appcircle.io/docs/assets/BE2854-flutterOrder1.png"}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Keep in mind"})," that this step is dependent on the Flutter Install step. If Flutter is not installed on the system, it will give a Flutter SDK not found error."]})}),"\n",(0,s.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(t.p,{children:"The parameters required for this step to work are given in the table below with explanations."}),"\n",(0,s.jsx)(l.A,{url:"https://cdn.appcircle.io/docs/assets/BE2854-flutterInput.png"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_FLUTTER_PROJECT_PATH"})}),(0,s.jsx)(t.td,{children:"This parameter is used as the repository path. This path is created immediately after the Git Clone step. If the Git Clone step is not used, this path cannot be found."}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_FLUTTER_BUILD_MODE"})}),(0,s.jsxs)(t.td,{children:["With this variable, you can add the mode you want to build in the build command. For example: ",(0,s.jsx)(t.code,{children:"release"}),"."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_FLUTTER_BUILD_EXTRA_ARGS"})}),(0,s.jsx)(t.td,{children:"You can use this parameter if you want to add an extra parameter to the build command line."}),(0,s.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-ios-flutter-build-component",children:(0,s.jsx)(r,{url:"https://github.com/appcircleio/appcircle-ios-flutter-build-component",title:"github.com",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},69678:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(74848);function i(e){let{url:t,description:r=""}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:""!=r?24:8},children:[(0,s.jsx)("img",{className:"screenshot",src:t,style:{borderRadius:5,marginBottom:""!=r?8:24}}),""!=r?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{paddingTop:0,marginTop:0,fontWeight:"500",fontStyle:"italic",color:"rgba(0,0,0,0.5)"},children:r})}):(0,s.jsx)(s.Fragment,{})]})})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>n});var s=r(96540);const i={},l=s.createContext(i);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);