"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[94518],{23548:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=i(74848),s=i(28453),n=i(69678);const o={title:"Firebase Deployment",description:"Firebase deployment is quick, and secure app launches. Get started with our concise guide to deploying on Firebase efficiently.",tags:["firebase","mobile","web","distribution"]},l="Firebase Deployment",c={id:"workflows/flutter-specific-workflow-steps/firebase-deployment",title:"Firebase Deployment",description:"Firebase deployment is quick, and secure app launches. Get started with our concise guide to deploying on Firebase efficiently.",source:"@site/docs/workflows/flutter-specific-workflow-steps/firebase-deployment.md",sourceDirName:"workflows/flutter-specific-workflow-steps",slug:"/workflows/flutter-specific-workflow-steps/firebase-deployment",permalink:"/workflows/flutter-specific-workflow-steps/firebase-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/flutter-specific-workflow-steps/firebase-deployment.md",tags:[{label:"firebase",permalink:"/tags/firebase"},{label:"mobile",permalink:"/tags/mobile"},{label:"web",permalink:"/tags/web"},{label:"distribution",permalink:"/tags/distribution"}],version:"current",frontMatter:{title:"Firebase Deployment",description:"Firebase deployment is quick, and secure app launches. Get started with our concise guide to deploying on Firebase efficiently.",tags:["firebase","mobile","web","distribution"]},sidebar:"mySidebar",previous:{title:"Flutter Specific Workflow Steps",permalink:"/workflows/flutter-specific-workflow-steps/"},next:{title:"Flutter Analyze",permalink:"/workflows/flutter-specific-workflow-steps/flutter-analyze"}},d={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"firebase-deployment",children:"Firebase Deployment"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://firebase.google.com/docs/hosting",children:"Firebase Deployment"})," is production-grade web content hosting for developers. With a single command, you can quickly deploy web apps and serve both static and dynamic content to a global CDN (content delivery network)."]}),"\n",(0,r.jsx)(t.p,{children:"Deploy web applications effortlessly using Appcircle's Firebase Deployment component."}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Before running the ",(0,r.jsx)(t.strong,{children:"Firebase Deployment"})," step, certain prerequisites must be completed. These prerequisites are detailed in the table below:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/workflows/flutter-specific-workflow-steps/flutter-build-for-web",children:(0,r.jsx)(t.strong,{children:"Flutter Build for Web"})})}),(0,r.jsxs)(t.td,{children:["The Flutter Build for Web step builds your web application using the ",(0,r.jsx)(t.a,{href:"https://docs.flutter.dev/deployment/web#building-the-app-for-release",children:"Flutter SDK"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/workflows/flutter-specific-workflow-steps/flutter-install",children:(0,r.jsx)(t.strong,{children:"Flutter Install"})})}),(0,r.jsxs)(t.td,{children:["This step installs the ",(0,r.jsx)(t.a,{href:"https://docs.flutter.dev/deployment/web#building-the-app-for-release",children:"Flutter SDK"}),". If no version is specified, it installs the latest stable version."]})]})]})]}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3150-deployOrder.png"}),"\n",(0,r.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,r.jsx)(t.p,{children:"You can find all the parameters required for this step in the table below, with their descriptions in detail."}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3150-deployInput.png"}),"\n",(0,r.jsxs)(t.admonition,{type:"danger",children:[(0,r.jsx)(t.p,{children:"Avoid hard-coding sensitive information like tokens and API keys directly into the step parameters."}),(0,r.jsxs)(t.p,{children:["We recommend using ",(0,r.jsx)(t.a,{href:"/environment-variables/managing-variables",children:(0,r.jsx)(t.strong,{children:"Environment Variables"})})," groups for such sensitive variables."]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Status"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_FIREBASE_VERSION"})}),(0,r.jsx)(t.td,{children:"Firebase version to be used. Enter v11.11.0 for a specific version."}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_FIREBASE_PROJECT_PATH"})}),(0,r.jsxs)(t.td,{children:["The directory containing your ",(0,r.jsx)(t.code,{children:"firebase.json"})," file."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_FIREBASE_TOKEN"})}),(0,r.jsxs)(t.td,{children:["A refresh token is generated when you authenticate using the ",(0,r.jsx)(t.code,{children:"firebase login:ci"})," command. Choose either a ",(0,r.jsx)(t.strong,{children:"Either select Firebase token or Google Service account"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$GOOGLE_APPLICATION_CREDENTIALS"})}),(0,r.jsxs)(t.td,{children:["Specify the path to your Google Service Account JSON file. Upload this file to your environment group under the name ",(0,r.jsx)(t.code,{children:"GOOGLE_APPLICATION_CREDENTIALS"}),". Choose either a ",(0,r.jsx)(t.strong,{children:"Firebase token"}),"  or a ",(0,r.jsx)(t.strong,{children:"Google Service account"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_FIREBASE_EXTRA_PARAMETERS"})}),(0,r.jsx)(t.td,{children:"Extra command line parameters. Enter --debug for debug mode."}),(0,r.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-firebase-deploy-component",children:(0,r.jsx)(i,{url:"https://github.com/appcircleio/appcircle-firebase-deploy-component",title:"GitHub - appcircleio/appcircle-firebase-deploy-component",description:"Contribute to appcircleio/appcircle-firebase-deploy-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/23ae2b341a79a20d2d8bb82d201d0be286f2af1adf8a4461ec564393dccc810f/appcircleio/appcircle-firebase-deploy-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},69678:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var r=i(74848);function s(e){let{url:t}=e;return(0,r.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var r=i(96540);const s={},n=r.createContext(s);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);