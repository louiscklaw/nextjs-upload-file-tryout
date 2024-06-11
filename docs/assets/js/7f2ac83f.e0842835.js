"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5417],{96659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var s=n(74848),r=n(28453),o=n(69678);const i={title:"NPM/Yarn Commands",description:"Learn to use NPM/Yarn commands for managing dependencies in your React Native applications. Enhance your app's functionality.",tags:["react native","mobile","workflow","step"]},a="NPM/Yarn Commands",c={id:"workflows/react-native-specific-workflow-steps/npm-yarn-commands",title:"NPM/Yarn Commands",description:"Learn to use NPM/Yarn commands for managing dependencies in your React Native applications. Enhance your app's functionality.",source:"@site/docs/workflows/react-native-specific-workflow-steps/npm-yarn-commands.md",sourceDirName:"workflows/react-native-specific-workflow-steps",slug:"/workflows/react-native-specific-workflow-steps/npm-yarn-commands",permalink:"/nextjs-upload-file-tryout/workflows/react-native-specific-workflow-steps/npm-yarn-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/react-native-specific-workflow-steps/npm-yarn-commands.md",tags:[{label:"react native",permalink:"/nextjs-upload-file-tryout/tags/react-native"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/tags/mobile"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/tags/step"}],version:"current",frontMatter:{title:"NPM/Yarn Commands",description:"Learn to use NPM/Yarn commands for managing dependencies in your React Native applications. Enhance your app's functionality.",tags:["react native","mobile","workflow","step"]},sidebar:"mySidebar",previous:{title:"Install Node",permalink:"/nextjs-upload-file-tryout/workflows/react-native-specific-workflow-steps/node-install"},next:{title:"Flutter Specific Workflow Steps",permalink:"/nextjs-upload-file-tryout/workflows/flutter-specific-workflow-steps/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"npmyarn-commands",children:"NPM/Yarn Commands"}),"\n",(0,s.jsxs)(t.p,{children:["You may want to use the ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/",children:"NPM"})," or ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/yarn",children:"Yarn"})," package manager to install specific dependencies for your ",(0,s.jsx)(t.a,{href:"https://reactnative.dev/",children:"React Native"})," applications. The package manager commands you enter are executed in this workflow step."]}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["The workflow steps that need to be executed before running the ",(0,s.jsx)(t.strong,{children:"NPM/Yarn Commands"})," workflow step, along with their respective reasons, are listed in the table below."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/react-native-specific-workflow-steps#install-node",children:(0,s.jsx)(t.strong,{children:"Install Node"})})}),(0,s.jsxs)(t.td,{children:["This step will install Node modules for your application. Please note that the ",(0,s.jsx)(t.strong,{children:"NPM/Yarn Commands"})," step should be used after this step."]})]})})]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2797-npmOrder.png"}),"\n",(0,s.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(t.p,{children:"This step contains different variables. It needs these variables to work. The table below gives explanations of these variables."}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2797-nmpDetails.png"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"})}),(0,s.jsxs)(t.td,{children:["Specifies the cloned repository directory. This path will be generated after the ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps#git-clone",children:(0,s.jsx)(t.strong,{children:"Git Clone"})})," step."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_NPM_COMMAND_ARGS"})}),(0,s.jsxs)(t.td,{children:["The NPM command to run. You can add different command parameters directly. The default is: ",(0,s.jsx)(t.code,{children:"npm/yarn install"})]}),(0,s.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-npm-yarn-component",children:(0,s.jsx)(n,{url:"https://github.com/appcircleio/appcircle-npm-yarn-component",title:"GitHub - appcircleio/appcircle-npm-yarn-component",description:"Contribute to appcircleio/appcircle-npm-yarn-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/a88771cf1c2211e190cc782ef8cf80dbc15c96f7218676d6968580b33dbd04e2/appcircleio/appcircle-npm-yarn-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},69678:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(74848);function r(e){let{url:t}=e;return(0,s.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);