"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[68423],{58233:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=l(74848),r=l(28453),i=l(69678);const o={title:"\u200bFlutter Build for Web",description:"Learn to build web apps with the Flutter Build for Web component. Ensure Flutter Install and Git Clone steps are completed first.",tags:["flutter","build","test","workflow","step"]},n="\u200bFlutter Build for Web",a={id:"workflows/flutter-specific-workflow-steps/flutter-build-for-web",title:"\u200bFlutter Build for Web",description:"Learn to build web apps with the Flutter Build for Web component. Ensure Flutter Install and Git Clone steps are completed first.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/700_workflows/flutter-specific-workflow-steps/flutter-build-for-web.md",sourceDirName:"700_workflows/flutter-specific-workflow-steps",slug:"/workflows/flutter-specific-workflow-steps/flutter-build-for-web",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/flutter-specific-workflow-steps/flutter-build-for-web",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/flutter-specific-workflow-steps/flutter-build-for-web.md",tags:[{label:"flutter",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/flutter"},{label:"build",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/build"},{label:"test",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/test"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/step"}],version:"current",frontMatter:{title:"\u200bFlutter Build for Web",description:"Learn to build web apps with the Flutter Build for Web component. Ensure Flutter Install and Git Clone steps are completed first.",tags:["flutter","build","test","workflow","step"]},sidebar:"tutorialSidebar",previous:{title:"Flutter Build for iOS",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/flutter-specific-workflow-steps/flutter-build-for-ios"},next:{title:"Flutter Install",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/flutter-specific-workflow-steps/flutter-install"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3},{value:"Deploying Applications to AWS Services",id:"deploying-applications-to-aws-services",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{ExternalUrlRef:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"flutter-build-for-web",children:"\u200bFlutter Build for Web"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Flutter Build for Web"})," step builds your web application using the ",(0,s.jsx)(t.a,{href:"https://flutter.dev/docs/deployment/web#building-the-app-for-release",children:"Flutter SDK"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["There are no prerequisites required before using the ",(0,s.jsx)(t.strong,{children:"\u200bFlutter Build for Web"})," step."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/workflows/common-workflow-steps/git-clone",children:(0,s.jsx)(t.strong,{children:"Git Clone"})})}),(0,s.jsxs)(t.td,{children:["This step clones your project from the connected Git provider and creates the ",(0,s.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"})," variable, which defaults to ",(0,s.jsx)(t.code,{children:"$AC_FLUTTER_PROJECT_DIR"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"./flutter-install",children:(0,s.jsx)(t.strong,{children:"Flutter Install"})})}),(0,s.jsxs)(t.td,{children:["This step installs the ",(0,s.jsx)(t.a,{href:"https://flutter-ko.dev/development/tools/sdk/releases",children:"Flutter SDK"}),". If no version is specified, it installs the latest ",(0,s.jsx)(t.strong,{children:"stable"})," version."]})]})]})]}),"\n",(0,s.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/BE2855-flutterWebOrder.png"}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["This step relies heavily on the ",(0,s.jsx)(t.strong,{children:"Flutter Install"})," step. If the Flutter SDK is not installed, the step will report an error stating that the required command was not found."]})}),"\n",(0,s.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(t.p,{children:"You can find all the parameters required for this step in the table below, along with detailed descriptions."}),"\n",(0,s.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/BE2855-flutterWebInput.png"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_FLUTTER_PROJECT_DIR"})}),(0,s.jsxs)(t.td,{children:["This parameter represents the repository path. The default value is ",(0,s.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"}),", which is created after the ",(0,s.jsx)(t.strong,{children:"Git Clone"})," step."]}),(0,s.jsx)(t.td,{children:"Required"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_FLUTTER_WEB_PATH"})}),(0,s.jsxs)(t.td,{children:["This path is generated after the completion of the ",(0,s.jsx)(t.strong,{children:"Flutter Build for Web"})," step and stores the generated web application."]})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"deploying-applications-to-aws-services",children:"Deploying Applications to AWS Services"}),"\n",(0,s.jsx)(t.p,{children:"AWS Amplify offers a fully managed service for deploying and hosting static web applications, and Appcircle supports building Flutter web apps."}),"\n",(0,s.jsx)(t.p,{children:"You can deploy Flutter web apps (or any other web app) that you build with Appcircle to AWS Amplify Console for an end-to-end app lifecycle from a single CI/CD platform for web and mobile."}),"\n",(0,s.jsx)(t.p,{children:"To deploy apps to Amplify, you can use Git, manual uploads, or Amazon S3 buckets as the source."}),"\n",(0,s.jsx)(t.p,{children:"Since Appcircle supports automated Amazon S3 uploads, you can automatically deploy your apps from Appcircle to Amazon S3 and then sync your S3 bucket with Amplify Console with the following steps:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["First, set up a ",(0,s.jsx)(t.a,{href:"../../.././build/platform-build-guides/building-flutter-applications/building-flutter-web-applications",children:"Flutter Web App build"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Then, add an ",(0,s.jsx)(t.a,{href:"/workflows/common-workflow-steps/upload-files-to-amazon-s3",children:"Upload to Amazon S3 step to your workflow"})," and configure it to receive the web app artifact as the input of the step."]}),"\n",(0,s.jsxs)(t.li,{children:["To set up Amplify Console and S3 sync, first go to Amplify and ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/amplify/latest/userguide/manual-deploys.html",children:"set up a manual deployment"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Then, follow the steps ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/blogs/mobile/deploy-files-s3-dropbox-amplify-console/",children:"in this AWS blog post"})," to automate deployments from an S3 bucket to Amplify."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can build your Flutter web apps with Appcircle and deploy them to the Amplify Console with end-to-end automation."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-flutter-web-build-component",children:(0,s.jsx)(l,{url:"https://github.com/appcircleio/appcircle-flutter-web-build-component",title:"github.com",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},69678:(e,t,l)=>{l.d(t,{A:()=>r});l(96540);var s=l(74848);function r(e){let{url:t,description:l=""}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:""!=l?24:8},children:[(0,s.jsx)("img",{className:"screenshot",src:t,style:{borderRadius:5,marginBottom:""!=l?8:24}}),""!=l?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{paddingTop:0,marginTop:0,fontWeight:"500",fontStyle:"italic",color:"rgba(0,0,0,0.5)"},children:l})}):(0,s.jsx)(s.Fragment,{})]})})}},28453:(e,t,l)=>{l.d(t,{R:()=>o,x:()=>n});var s=l(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);