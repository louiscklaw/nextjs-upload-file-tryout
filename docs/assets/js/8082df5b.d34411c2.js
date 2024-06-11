"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[33362],{34879:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var s=l(74848),r=l(28453),i=l(69678);const n={title:"Flutter Install",description:"This workflow step installs the specified Flutter SDK to run the Flutter CLI for subsequent analysis, build, and test operations.",tags:["flutter","build","test","workflow","step"]},o="Flutter Install",c={id:"workflows/flutter-specific-workflow-steps/flutter-install",title:"Flutter Install",description:"This workflow step installs the specified Flutter SDK to run the Flutter CLI for subsequent analysis, build, and test operations.",source:"@site/docs/workflows/flutter-specific-workflow-steps/flutter-install.md",sourceDirName:"workflows/flutter-specific-workflow-steps",slug:"/workflows/flutter-specific-workflow-steps/flutter-install",permalink:"/nextjs-upload-file-tryout/workflows/flutter-specific-workflow-steps/flutter-install",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/flutter-specific-workflow-steps/flutter-install.md",tags:[{label:"flutter",permalink:"/nextjs-upload-file-tryout/tags/flutter"},{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"test",permalink:"/nextjs-upload-file-tryout/tags/test"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/tags/step"}],version:"current",frontMatter:{title:"Flutter Install",description:"This workflow step installs the specified Flutter SDK to run the Flutter CLI for subsequent analysis, build, and test operations.",tags:["flutter","build","test","workflow","step"]},sidebar:"mySidebar",previous:{title:"\u200bFlutter Build for Web",permalink:"/nextjs-upload-file-tryout/workflows/flutter-specific-workflow-steps/flutter-build-for-web"},next:{title:"Flutter Test",permalink:"/nextjs-upload-file-tryout/workflows/flutter-specific-workflow-steps/flutter-test"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function u(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...t.components},{ExternalUrlRef:l}=e;return l||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"flutter-install",children:"Flutter Install"}),"\n",(0,s.jsxs)(e.p,{children:["This workflow step installs the specified ",(0,s.jsx)(e.a,{href:"https://docs.flutter.dev/get-started/install",children:(0,s.jsx)(e.strong,{children:"Flutter SDK"})})," to run the ",(0,s.jsx)(e.a,{href:"https://docs.flutter.dev/reference/flutter-cli",children:(0,s.jsx)(e.strong,{children:"Flutter CLI"})})," for subsequent analysis, build, and test operations. The Flutter version can be specified in ",(0,s.jsx)(e.a,{href:"https://docs.appcircle.io/build/building-flutter-applications/#build-configuration-for-flutter-applications",children:"Configuration"}),"."]}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["All Flutter versions and detailed information can be found in the ",(0,s.jsx)(e.a,{href:"https://github.com/flutter/flutter",children:"Flutter repository"}),"."]})}),"\n",(0,s.jsx)(e.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(e.admonition,{type:"caution",children:[(0,s.jsxs)(e.p,{children:["These steps depend on Flutter installation and can only be used after the ",(0,s.jsx)(e.strong,{children:"Flutter Install"})," step:"]}),(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://docs.appcircle.io/workflows/flutter-specific-workflow-steps#flutter-build-for-ios",children:(0,s.jsx)(e.strong,{children:"Flutter Build for iOS"})})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://docs.appcircle.io/workflows/flutter-specific-workflow-steps#flutter-build-for-android",children:(0,s.jsx)(e.strong,{children:"Flutter Build for Android"})})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://docs.appcircle.io/workflows/flutter-specific-workflow-steps#flutter-analyze",children:(0,s.jsx)(e.strong,{children:"Flutter Analyze"})})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://docs.appcircle.io/workflows/flutter-specific-workflow-steps#flutter-test",children:(0,s.jsx)(e.strong,{children:"Flutter Test"})})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://docs.appcircle.io/workflows/flutter-specific-workflow-steps#flutter-build-for-web",children:(0,s.jsx)(e.strong,{children:"Flutter Build for Web"})})}),"\n"]})]}),"\n",(0,s.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/BE2851-installOrder.png"}),"\n",(0,s.jsx)(e.admonition,{type:"danger",children:(0,s.jsxs)(e.p,{children:["The steps specified in the table are steps dependent on the ",(0,s.jsx)(e.strong,{children:"Flutter Install"})," step. ",(0,s.jsx)(e.strong,{children:"If Flutter Install is not used before these steps"}),", these steps will give a ",(0,s.jsx)(e.strong,{children:"Flutter SDK not found error"}),"."]})}),"\n",(0,s.jsx)(e.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(e.p,{children:"You can find all the parameters required for this step in the table below, with their descriptions in detail."}),"\n",(0,s.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/BE2851-installInput.png"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Variable Name"}),(0,s.jsx)(e.th,{children:"Description"}),(0,s.jsx)(e.th,{children:"Status"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"$AC_SELECTED_FLUTTER_VERSION"})}),(0,s.jsxs)(e.td,{children:["Specifies the Flutter version to install. Defaults to: ",(0,s.jsx)(e.code,{children:"stable"}),". The version you set in the ",(0,s.jsx)(e.a,{href:"https://docs.appcircle.io/build/building-flutter-applications/#build-configuration-for-flutter-applications",children:"Configuration"})," section will override this setting."]}),(0,s.jsx)(e.td,{children:"Optional"})]})})]}),"\n",(0,s.jsx)(e.admonition,{type:"caution",children:(0,s.jsxs)(e.p,{children:["If no specific version is specified, this step will automatically install the latest ",(0,s.jsx)(e.a,{href:"https://docs.flutter.dev/release/archive?tab=macos",children:(0,s.jsx)(e.strong,{children:"stable"})})," version released by Flutter."]})}),"\n",(0,s.jsx)(e.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Variable Name"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PATH"})}),(0,s.jsx)(e.td,{children:"PATH variable that adds the Flutter tool to your workflow."})]})})]}),"\n",(0,s.jsx)(e.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/appcircleio/appcircle-flutter-install-component",children:(0,s.jsx)(l,{url:"https://github.com/appcircleio/appcircle-flutter-install-component",title:"GitHub - appcircleio/appcircle-flutter-install-component: Appcircle Flutter Install",description:"Appcircle Flutter Install. Contribute to appcircleio/appcircle-flutter-install-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/bded5ff7de242299666587990853d997a86942be247b697c1cc962883133d336/appcircleio/appcircle-flutter-install-component"})})})]})}function p(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},69678:(t,e,l)=>{l.d(e,{A:()=>r});l(96540);var s=l(74848);function r(t){let{url:e}=t;return(0,s.jsx)("img",{className:"screenshot",src:e})}},28453:(t,e,l)=>{l.d(e,{R:()=>n,x:()=>o});var s=l(96540);const r={},i=s.createContext(r);function n(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:n(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);