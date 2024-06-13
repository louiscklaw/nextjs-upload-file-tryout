"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[35971],{97701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var s=r(74848),i=r(28453),o=r(69678);const n={title:"Carthage",description:"Appcircle supports Carthage for dependency management in iOS projects.",tags:["carthage","ios","dependency","management","workflow","step"]},a="Carthage",c={id:"workflows/ios-specific-workflow-steps/carthage",title:"Carthage",description:"Appcircle supports Carthage for dependency management in iOS projects.",source:"@site/docs/700_workflows/ios-specific-workflow-steps/carthage.md",sourceDirName:"700_workflows/ios-specific-workflow-steps",slug:"/workflows/ios-specific-workflow-steps/carthage",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/carthage",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/ios-specific-workflow-steps/carthage.md",tags:[{label:"carthage",permalink:"/nextjs-upload-file-tryout/tags/carthage"},{label:"ios",permalink:"/nextjs-upload-file-tryout/tags/ios"},{label:"dependency",permalink:"/nextjs-upload-file-tryout/tags/dependency"},{label:"management",permalink:"/nextjs-upload-file-tryout/tags/management"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/tags/step"}],version:"current",frontMatter:{title:"Carthage",description:"Appcircle supports Carthage for dependency management in iOS projects.",tags:["carthage","ios","dependency","management","workflow","step"]},sidebar:"tutorialSidebar",previous:{title:"BrowserStack App Automate",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/browserstack-app-automation"},next:{title:"CocoaPods Deintegrate",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/cocoapods-deintegrate"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{ExternalUrlRef:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"carthage",children:"Carthage"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/Carthage/Carthage",children:"Carthage"})," is a dependency manager for Swift and Objective-C applications. ",(0,s.jsx)(t.a,{href:"https://github.com/Carthage/Carthage",children:"Carthage"})," handles the installation of external libraries your application depends on during a build."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/Carthage/Carthage",children:"Carthage"})," is widely used among iOS developers for dependency management, and it's very easy to include it in your iOS projects with Appcircle."]}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["Appcircle will look for a ",(0,s.jsx)(t.a,{href:"https://github.com/Carthage/Carthage/blob/master/Documentation/Artifacts.md",children:(0,s.jsx)(t.code,{children:"Cartfile"})})," file in your repository and use it to install the dependencies. For this reason, ",(0,s.jsx)(t.strong,{children:"it should be used after the Git Clone step"}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps#git-clone",children:"Git Clone"})}),(0,s.jsx)(t.td,{children:"This step clones your git repo on the runner where the build process will take place so that the necessary workflow operations can be performed."})]})})]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2828-cartOrder.png"}),"\n",(0,s.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(t.p,{children:"You can find all the parameters required for this step in the table below, with their descriptions in detail."}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2828-cartInput.png"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_CARTHAGE_COMMAND"})}),(0,s.jsxs)(t.td,{children:["Specifies the Carthage command to run. Defaults to ",(0,s.jsx)(t.code,{children:"bootstrap"}),". ",(0,s.jsx)(t.strong,{children:"Possible values:"})," ",(0,s.jsx)(t.code,{children:"bootstrap"}),", ",(0,s.jsx)(t.code,{children:"update"})]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"})}),(0,s.jsxs)(t.td,{children:["Specifies the cloned repository directory. This path will be generated after ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps#git-clone",children:"Git Clone"}),"."]}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_CARTFILE_PATH"})}),(0,s.jsxs)(t.td,{children:["Specifies the path where the Cartfile resides. Defaults to the repository directory. ",(0,s.jsx)(t.strong,{children:"DO NOT"})," include Cartfile, this is only the path. ",(0,s.jsx)(t.strong,{children:"This value will be appended"})," to ",(0,s.jsx)(t.code,{children:"AC_REPOSITORY_DIR"}),". ",(0,s.jsx)(t.strong,{children:"Example:"})," ",(0,s.jsx)(t.code,{children:"./"})," or ",(0,s.jsx)(t.code,{children:"./subpath-to-cartfile/"})]}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_CARTHAGE_FLAGS"})}),(0,s.jsxs)(t.td,{children:["Specifies additional flags after the Carthage command. The default value is empty. ",(0,s.jsx)(t.strong,{children:"For Xcode 12 and above, make sure to include"})," ",(0,s.jsx)(t.code,{children:"--use-xcframeworks"})," ",(0,s.jsx)(t.strong,{children:"here"}),". To shorten the build time, make sure to specify the platform: ",(0,s.jsx)(t.code,{children:"--platform iOS"}),". Example usage: ",(0,s.jsx)(t.code,{children:"--platform iOS --use-xcframeworks"})]}),(0,s.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-carthage-component",children:(0,s.jsx)(r,{url:"https://github.com/appcircleio/appcircle-carthage-component",title:"GitHub - appcircleio/appcircle-carthage-component",description:"Contribute to appcircleio/appcircle-carthage-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/c5e20c2232173f30d0c08b233a4d783ae57e0925535a40e47a7924889dacf956/appcircleio/appcircle-carthage-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},69678:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(74848);function i(e){let{url:t}=e;return(0,s.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>a});var s=r(96540);const i={},o=s.createContext(i);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);