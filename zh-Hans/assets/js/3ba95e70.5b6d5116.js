"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[25785],{5956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var l=r(74848),s=r(28453),n=r(69678);const i={title:"Flutter Analyze",description:"This component runs the `flutter analyze` command in your Flutter project.",tags:["flutter","build","test","workflow","step"]},o="Flutter Analyze",a={id:"workflows/flutter-specific-workflow-steps/flutter-analyze",title:"Flutter Analyze",description:"This component runs the `flutter analyze` command in your Flutter project.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/700_workflows/flutter-specific-workflow-steps/flutter-analyze.md",sourceDirName:"700_workflows/flutter-specific-workflow-steps",slug:"/workflows/flutter-specific-workflow-steps/flutter-analyze",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/flutter-specific-workflow-steps/flutter-analyze",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/flutter-specific-workflow-steps/flutter-analyze.md",tags:[{label:"flutter",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/flutter"},{label:"build",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/build"},{label:"test",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/test"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/step"}],version:"current",frontMatter:{title:"Flutter Analyze",description:"This component runs the `flutter analyze` command in your Flutter project.",tags:["flutter","build","test","workflow","step"]},sidebar:"tutorialSidebar",previous:{title:"Firebase Deployment",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/flutter-specific-workflow-steps/firebase-deployment"},next:{title:"Flutter Build for Android",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/flutter-specific-workflow-steps/flutter-build-for-android"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ExternalUrlRef:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"flutter-analyze",children:"Flutter Analyze"}),"\n",(0,l.jsxs)(t.p,{children:["This component runs the ",(0,l.jsx)(t.code,{children:"flutter analyze"})," command in your Flutter project. Please note that it requires the ",(0,l.jsx)(t.a,{href:"https://docs.flutter.dev/get-started/install",children:(0,l.jsx)(t.strong,{children:"Flutter SDK"})}),"."]}),"\n",(0,l.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:(0,l.jsx)(t.strong,{children:"Git Clone"})})}),(0,l.jsxs)(t.td,{children:["This step will clone your project through the connected Git provider and create the ",(0,l.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"})," variable."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/flutter-specific-workflow-steps#flutter-install",children:(0,l.jsx)(t.strong,{children:"Flutter Install"})})}),(0,l.jsxs)(t.td,{children:["This step will install the ",(0,l.jsx)(t.a,{href:"https://flutter-ko.dev/development/tools/sdk/releases",children:"Flutter SDK"})," release. If the version is not specified, it will install the latest ",(0,l.jsx)(t.strong,{children:"stable"})," version."]})]})]})]}),"\n",(0,l.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE2852-flutterAnalayzeOrder.png"}),"\n",(0,l.jsx)(t.admonition,{type:"danger",children:(0,l.jsx)(t.p,{children:"This step is particularly dependent on the Flutter Install step. If the Flutter SDK is not installed, the step will give an error that the required command was not found."})}),"\n",(0,l.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,l.jsx)(t.p,{children:"You can find all the parameters required for this step in the table below, with their descriptions in detail."}),"\n",(0,l.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE2852-flutterAnalyzeInput.png"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Variable Name"}),(0,l.jsx)(t.th,{children:"Description"}),(0,l.jsx)(t.th,{children:"Status"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"$AC_FLUTTER_PROJECT_DIR"})}),(0,l.jsx)(t.td,{children:"This parameter is used as the repository path. This path is created immediately after the Git Clone step. If the Git Clone step is not used, this path cannot be found."}),(0,l.jsx)(t.td,{children:"Required"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"$AC_FLUTTER_ANALYZE_EXTRA_ARGS"})}),(0,l.jsx)(t.td,{children:"You can use this parameter if you want to add an extra parameter to the build command line."}),(0,l.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-flutter-analyze-component",children:(0,l.jsx)(r,{url:"https://github.com/appcircleio/appcircle-flutter-analyze-component",title:"GitHub - appcircleio/appcircle-flutter-analyze-component",description:"Contribute to appcircleio/appcircle-flutter-analyze-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/56e11c2b0a68b68eb5770d8af46e14c478d1134aab2f7891064bb39fda09eded/appcircleio/appcircle-flutter-analyze-component"})})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},69678:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var l=r(74848);function s(e){let{url:t}=e;return(0,l.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var l=r(96540);const s={},n=l.createContext(s);function i(e){const t=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(n.Provider,{value:t},e.children)}}}]);