"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[69402],{35344:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=s(74848),n=s(28453),i=s(69678);const o={title:"App Center CodePush",description:"Effortlessly update apps with App Center Code Push. Learn quick, reliable code deployment without app store delays.",tags:["react native","mobile","workflow","step","code push","app center"]},a="App Center CodePush",p={id:"workflows/react-native-specific-workflow-steps/app-center-code-push",title:"App Center CodePush",description:"Effortlessly update apps with App Center Code Push. Learn quick, reliable code deployment without app store delays.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/700_workflows/react-native-specific-workflow-steps/app-center-code-push.md",sourceDirName:"700_workflows/react-native-specific-workflow-steps",slug:"/workflows/react-native-specific-workflow-steps/app-center-code-push",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/react-native-specific-workflow-steps/app-center-code-push",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/react-native-specific-workflow-steps/app-center-code-push.md",tags:[{label:"react native",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/react-native"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/mobile"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/step"},{label:"code push",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/code-push"},{label:"app center",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/app-center"}],version:"current",frontMatter:{title:"App Center CodePush",description:"Effortlessly update apps with App Center Code Push. Learn quick, reliable code deployment without app store delays.",tags:["react native","mobile","workflow","step","code push","app center"]},sidebar:"tutorialSidebar",previous:{title:"React Native Specific Workflow Steps",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/react-native-specific-workflow-steps/"},next:{title:"Install Node",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/react-native-specific-workflow-steps/node-install"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{ExternalUrlRef:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"app-center-codepush",children:"App Center CodePush"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/appcenter/distribution/codepush/",children:(0,r.jsx)(t.strong,{children:"App Center CodePush"})})," is an App Center cloud service that enables React Native developers to deploy mobile app updates directly to their users\u2019 devices. It works by acting as a central repository where developers can publish certain updates (for example, JS, HTML, CSS, and image changes), and apps can query for updates (using the provided client SDKs)."]}),"\n",(0,r.jsxs)(t.p,{children:["You can seamlessly integrate ",(0,r.jsx)(t.strong,{children:"App Center CodePush"})," into your workflow with Appcircle, facilitating easy setup and utilization within your existing development processes."]}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Before running the ",(0,r.jsx)(t.strong,{children:"App Center CodePush"})," step, you must complete certain prerequisites, as detailed in the table below:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/workflows/common-workflow-steps/git-clone",children:"Git Clone"})}),(0,r.jsxs)(t.td,{children:["The repository needs to be cloned to begin the CodePush process. After this step, the variable ",(0,r.jsx)(t.code,{children:"AC_REPOSITORY_DIR"})," will be set."]})]})})]}),"\n",(0,r.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/BE3174-codepushOrder.png"}),"\n",(0,r.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,r.jsx)(t.p,{children:"Below is a list of input variables that can be used with this component with a description of each."}),"\n",(0,r.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/BE3174-codepushInput.png"}),"\n",(0,r.jsxs)(t.admonition,{type:"danger",children:[(0,r.jsx)(t.p,{children:"Avoid hard-coding sensitive information, like tokens and API keys, directly into the step parameters."}),(0,r.jsxs)(t.p,{children:["We recommend using ",(0,r.jsx)(t.a,{href:"/environment-variables/managing-variables",children:(0,r.jsx)(t.strong,{children:"Environment Variables"})})," groups for such sensitive variables."]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Status"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_TOKEN"})}),(0,r.jsx)(t.td,{children:"App Center API Token."}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_PRIVATE_KEY"})}),(0,r.jsxs)(t.td,{children:["App Center Private Key to sign updates. Upload your private key (.pem) to environment variables as a file and set its name as ",(0,r.jsx)(t.code,{children:"AC_APPCENTER_PRIVATE_KEY"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_PROJECT_PATH"})}),(0,r.jsx)(t.td,{children:"Relative path of the React Native project. Leave it empty to use the parent repository path."}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_OWNER"})}),(0,r.jsxs)(t.td,{children:["Owner of the app. The app's owner can be identified in its URL, such as ",(0,r.jsx)(t.code,{children:"https://appcenter.ms/users/JohnDoe/apps/myapp"})," for a user-owned app (where ",(0,r.jsx)(t.strong,{children:"JohnDoe"})," is the owner) and ",(0,r.jsx)(t.code,{children:"https://appcenter.ms/orgs/Appcircle/apps/myapp"})," for an org-owned app (owner is ",(0,r.jsx)(t.strong,{children:"Appcircle"}),")."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_APPNAME"})}),(0,r.jsxs)(t.td,{children:["The name of the app. The app's name can be identified in its URL, such as ",(0,r.jsx)(t.code,{children:"https://appcenter.ms/users/JohnDoe/apps/myapp"})," for a user-owned app (where ",(0,r.jsx)(t.strong,{children:"myapp"})," is the app name) and ",(0,r.jsx)(t.code,{children:"https://appcenter.ms/orgs/Appcircle/apps/myapp"})," for an org-owned app (owner is ",(0,r.jsx)(t.strong,{children:"myapp"}),")."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_DESCRIPTION"})}),(0,r.jsx)(t.td,{children:"This parameter provides an optional change log for the deployment."}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_DEPLOYMENT"})}),(0,r.jsxs)(t.td,{children:["This parameter specifies which deployment you want to release the update to. It defaults to ",(0,r.jsx)(t.code,{children:"Staging"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_ROLLOUT"})}),(0,r.jsx)(t.td,{children:"This parameter specifies the percentage of users (as an integer between 1 and 100) that should be eligible to receive this update."}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_VERSION"})}),(0,r.jsx)(t.td,{children:"The latest version will be used if no version is set."}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_EXTRA"})}),(0,r.jsxs)(t.td,{children:["Extra command line arguments for appcenter. For example, add ",(0,r.jsx)(t.code,{children:"--debug"})," for verbose logs."]}),(0,r.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"App Center CodePush"})," step does not produce any output variables. The results are shown in the build log."]}),"\n",(0,r.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/appcircleio/appcenter-codepush-component",children:(0,r.jsx)(s,{url:"https://github.com/appcircleio/appcenter-codepush-component",title:"GitHub - appcircleio/appcenter-codepush-component",description:"Contribute to appcircleio/appcenter-codepush-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/459eae93bd6e5ff0959555f0da58a439df77b1b57be020615dad5671fc4d3ac3/appcircleio/appcenter-codepush-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},69678:(e,t,s)=>{s.d(t,{A:()=>n});s(96540);var r=s(74848);function n(e){let{url:t}=e;return(0,r.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var r=s(96540);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);