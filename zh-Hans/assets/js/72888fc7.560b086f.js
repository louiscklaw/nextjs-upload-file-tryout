"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[17584],{68645:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(74848),i=t(28453),n=t(69678);const r={title:"Cocoapods Install",description:"Master Cocoapods Install for managing dependencies in your project. Learn how to use the 'pod install' command effectively.",tags:["cocoapods","install","workflow","step"]},c="Cocoapods Install",l={id:"workflows/ios-specific-workflow-steps/cocoapods-install",title:"Cocoapods Install",description:"Master Cocoapods Install for managing dependencies in your project. Learn how to use the 'pod install' command effectively.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/700_workflows/ios-specific-workflow-steps/cocoapods-install.md",sourceDirName:"700_workflows/ios-specific-workflow-steps",slug:"/workflows/ios-specific-workflow-steps/cocoapods-install",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/ios-specific-workflow-steps/cocoapods-install",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/ios-specific-workflow-steps/cocoapods-install.md",tags:[{label:"cocoapods",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/cocoapods"},{label:"install",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/install"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/step"}],version:"current",frontMatter:{title:"Cocoapods Install",description:"Master Cocoapods Install for managing dependencies in your project. Learn how to use the 'pod install' command effectively.",tags:["cocoapods","install","workflow","step"]},sidebar:"tutorialSidebar",previous:{title:"CocoaPods Deintegrate",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/ios-specific-workflow-steps/cocoapods-deintegrate"},next:{title:"Convert Xcresult to HTML/XML",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/ios-specific-workflow-steps/convert-xcresult-to-xml-html"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function p(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{ExternalUrlRef:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"cocoapods-install",children:"Cocoapods Install"}),"\n",(0,s.jsxs)(o.p,{children:["Runs the ",(0,s.jsx)(o.a,{href:"https://cocoapods.org",children:"CocoaPods"})," install command for dependency management. This step installs all pod dependencies. Appcircle uses the ",(0,s.jsx)(o.code,{children:"pod install"})," command to install pods in the project. This command comes from the CocoaPods tool installed on the system. If a version is not specified for CocoaPods, this step will use the version of ",(0,s.jsx)(o.a,{href:"https://docs.appcircle.io/infrastructure/ios-build-infrastructure#ios-build-agent-stacks",children:(0,s.jsx)(o.strong,{children:"CocoaPods installed"})})," on the system."]}),"\n",(0,s.jsx)(o.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(o.p,{children:["The workflow steps that need to be executed before running the ",(0,s.jsx)(o.strong,{children:"Cocoapods Install"})," workflow step, along with their respective reasons, are listed in the table below."]}),"\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(o.th,{children:"Description"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:"Git Clone"})}),(0,s.jsxs)(o.td,{children:["The repo needs to be cloned in order to start the CocoaPods installation process. After the clone, CocoaPods will be installed. After this step works, the variable ",(0,s.jsx)(o.code,{children:"AC_REPOSITORY_DIR"})," will be created."]})]})})]}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE2588-pod_order.png"}),"\n",(0,s.jsx)(o.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(o.p,{children:"You can find all the parameters required for this step in the table below, with their descriptions in detail."}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE2588-pod_version.png"}),"\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Variable Name"}),(0,s.jsx)(o.th,{children:"Description"}),(0,s.jsx)(o.th,{children:"Status"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"$AC_PROJECT_PATH"})}),(0,s.jsxs)(o.td,{children:["Specifies the project path. For example: ",(0,s.jsx)(o.code,{children:"./appcircle.xcodeproj"}),". If you filled in ",(0,s.jsx)(o.strong,{children:(0,s.jsx)(o.code,{children:"Configuration => Project or Workspace"})}),", this variable comes from ",(0,s.jsx)(o.a,{href:"https://docs.appcircle.io/build/build-process-management/build-profile-configuration",children:"Configuration"}),"."]}),(0,s.jsx)(o.td,{children:"Required"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"$AC_REPOSITORY_DIR"})}),(0,s.jsxs)(o.td,{children:["Specifies the cloned repository directory. This path will be generated after the ",(0,s.jsx)(o.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps#git-clone",children:"Git Clone"})," step."]}),(0,s.jsx)(o.td,{children:"Required"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"$AC_COCOAPODS_VERSION"})}),(0,s.jsx)(o.td,{children:"Specifies the CocoaPods version. If there is a specific version you want to use, give it here as hardcoded, and the system will automatically install the given version."}),(0,s.jsx)(o.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsxs)(o.p,{children:["Please note that the CocoaPods Install step uses the default system ",(0,s.jsx)(o.a,{href:"https://docs.appcircle.io/infrastructure/ios-build-infrastructure#ios-build-agent-stacks",children:(0,s.jsx)(o.strong,{children:"CocoaPods version"})}),". If you want to use a specific version, please enter it hardcoded in the CocoaPods Version parameter in the step."]})}),"\n",(0,s.jsx)(o.admonition,{type:"danger",children:(0,s.jsxs)(o.p,{children:["Remember, if the project extension is not ",(0,s.jsx)(o.strong,{children:".xcworkpace"}),", the pod install step will not work as expected. In the Configuration tab, make sure that the extension in the project path is ",(0,s.jsx)(o.strong,{children:".xcworkspace"}),"."]})}),"\n",(0,s.jsx)(o.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://github.com/appcircleio/appcircle-cocoapods-component",children:(0,s.jsx)(t,{url:"https://github.com/appcircleio/appcircle-cocoapods-component",title:"GitHub - appcircleio/appcircle-cocoapods-component",description:"Contribute to appcircleio/appcircle-cocoapods-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/2495ffca99ddc62fe5cf1b0ab8b6bd3f72da662a277fc5e4b0b9d1799616aa55/appcircleio/appcircle-cocoapods-component"})})})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},69678:(e,o,t)=>{t.d(o,{A:()=>i});t(96540);var s=t(74848);function i(e){let{url:o}=e;return(0,s.jsx)("img",{className:"screenshot",src:o})}},28453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>c});var s=t(96540);const i={},n=s.createContext(i);function r(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);