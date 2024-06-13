"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[45420],{97159:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var s=i(74848),r=i(28453),n=i(69678);const o={title:"App Center iOS Distribution",description:"Distribute your iOS app to App Center for testing and distribution. `Prerequisite:` Xcodebuild for Devices step.",tags:["build","test","distribute","app center","ios","workflow","step"]},d="App Center iOS Distrubiton",c={id:"workflows/ios-specific-workflow-steps/appcenter-ios-distribution",title:"App Center iOS Distribution",description:"Distribute your iOS app to App Center for testing and distribution. `Prerequisite:` Xcodebuild for Devices step.",source:"@site/docs/700_workflows/ios-specific-workflow-steps/appcenter-ios-distribution.md",sourceDirName:"700_workflows/ios-specific-workflow-steps",slug:"/workflows/ios-specific-workflow-steps/appcenter-ios-distribution",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/appcenter-ios-distribution",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/ios-specific-workflow-steps/appcenter-ios-distribution.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"test",permalink:"/nextjs-upload-file-tryout/tags/test"},{label:"distribute",permalink:"/nextjs-upload-file-tryout/tags/distribute"},{label:"app center",permalink:"/nextjs-upload-file-tryout/tags/app-center"},{label:"ios",permalink:"/nextjs-upload-file-tryout/tags/ios"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/tags/step"}],version:"current",frontMatter:{title:"App Center iOS Distribution",description:"Distribute your iOS app to App Center for testing and distribution. `Prerequisite:` Xcodebuild for Devices step.",tags:["build","test","distribute","app center","ios","workflow","step"]},sidebar:"tutorialSidebar",previous:{title:"iOS Specific Workflow Steps",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/"},next:{title:"Appdome Build-2Secure for iOS",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/appdome-build-to-secure-for-ios"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"app-center-ios-distrubiton",children:"App Center iOS Distrubiton"}),"\n",(0,s.jsxs)(t.p,{children:["With this step, you can send your ",(0,s.jsx)(t.code,{children:"IPA"})," and ",(0,s.jsx)(t.code,{children:"dSYM"})," files to the ",(0,s.jsx)(t.a,{href:"https://appcenter.ms/",children:"App Center"}),". For this, the step needs to be configured according to your App Center account."]}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["First, you need to use this step after the ",(0,s.jsx)(t.strong,{children:"Xcodebuild for Devices."})," This is because the project is compiled and archived in the Xcodebuild for Devices step."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps#xcodebuild-for-devices-archive--export",children:(0,s.jsx)(t.strong,{children:"Xcodebuild for Devices"})})}),(0,s.jsxs)(t.td,{children:["This step will build your application in ARM architecture and generate an ",(0,s.jsx)(t.code,{children:"IPA"})," and ",(0,s.jsx)(t.code,{children:"dSYM"})," file."]})]})})]}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE2612-center_order.png"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["Note that if you do not use this step after the ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps#xcodebuild-for-devices-archive--export",children:(0,s.jsx)(t.strong,{children:"Xcodebuild for Devices"})}),", Appcircle will not find ",(0,s.jsx)(t.strong,{children:"IPA"})," and ",(0,s.jsx)(t.strong,{children:"dSYM"})," files to distribute to the ",(0,s.jsx)(t.strong,{children:"App Center"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Inside the step, there will be some parameters that you need to configure according to your ",(0,s.jsx)(t.strong,{children:"App Center account"}),". You can find the list and detailed descriptions of all parameters of the step in the table below."]}),"\n"]}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE2612-centerInput.png"}),"\n",(0,s.jsxs)(t.admonition,{type:"danger",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Do not hard-code sensitive variables, such as tokens and API keys, directly to the parameters in the step."})}),(0,s.jsxs)(t.p,{children:["We recommend using ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/environment-variables/",children:"Environment Variables"})," groups for such sensitive variables."]})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPCENTER_TOKEN"})}),(0,s.jsxs)(t.td,{children:["You need to enter your ",(0,s.jsx)(t.strong,{children:"App Center Access Token"})," in this parameter. The CLI tool will be authenticated with this token."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPCENTER_IPA_PATH"})}),(0,s.jsxs)(t.td,{children:["Full path of the build. The path will be generated after the ",(0,s.jsx)(t.strong,{children:"Xcodebuild for Devices"})," step. You may enter the exact path of the ",(0,s.jsx)(t.code,{children:"IPA"})," or the parent folder."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPCENTER_OWNER"})}),(0,s.jsxs)(t.td,{children:["Owner of the app. The app's owner can be identified in its URL, such as ",(0,s.jsx)(t.code,{children:"https://appcenter.ms/users/JohnDoe/apps/myapp"})," for a user-owned app (where ",(0,s.jsx)(t.strong,{children:"JohnDoe"})," is the owner) and ",(0,s.jsx)(t.code,{children:"https://appcenter.ms/orgs/Appcircle/apps/myapp"})," for an org-owned app (the owner is ",(0,s.jsx)(t.strong,{children:"Appcircle"}),")."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPCENTER_APPNAME"})}),(0,s.jsxs)(t.td,{children:["The name of the app. The app's name can be identified in its URL, such as ",(0,s.jsx)(t.code,{children:"https://appcenter.ms/users/JohnDoe/apps/myapp"})," for a user-owned app (where ",(0,s.jsx)(t.strong,{children:"myapp"})," is the app name) and ",(0,s.jsx)(t.code,{children:"https://appcenter.ms/orgs/Appcircle/apps/myapp"})," for an org-owned app (the owner is ",(0,s.jsx)(t.strong,{children:"myapp"}),")."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPCENTER_GROUPS"})}),(0,s.jsxs)(t.td,{children:["The group name parameter is the distribution of ",(0,s.jsx)(t.code,{children:"Group Names"})," you opened in your App Center account. You can type in which group you want to send it to."]}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPCENTER_STORE"})}),(0,s.jsx)(t.td,{children:"Name of the store (App Store, Google Play, Intune). You can submit directly to this variable by giving one of the store names in your App Center account."}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"AC_APPCENTER_RELEASE_NOTES_PATH"})}),(0,s.jsxs)(t.td,{children:["If you use the ",(0,s.jsx)(t.code,{children:"Publish Release Notes"})," component before this step, release-notes.txt will be used as release notes."]}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPCENTER_UPLOAD_DSYM"})}),(0,s.jsxs)(t.td,{children:["The user can decide whether to upload your ",(0,s.jsx)(t.code,{children:"dSYM"})," file. This parameter uploads the ",(0,s.jsx)(t.code,{children:"dSYM"})," file automatically. The default value is ",(0,s.jsx)(t.strong,{children:"true"}),"."]}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPCENTER_MANDATORY"})}),(0,s.jsxs)(t.td,{children:["This parameter specifies whether the update should be considered mandatory or not. The default value is ",(0,s.jsx)(t.strong,{children:"false"}),"."]}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPCENTER_NOTIFY"})}),(0,s.jsxs)(t.td,{children:["This parameter sends notifications to testers. The default value is ",(0,s.jsx)(t.strong,{children:"true"}),"."]}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"AC_APPCENTER_VERSION"})}),(0,s.jsx)(t.td,{children:"The latest version will be used if no version is set."}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"AC_APPCENTER_EXTRA"})}),(0,s.jsxs)(t.td,{children:["Extra command line arguments for App Center. For example, add ",(0,s.jsx)(t.code,{children:"--debug"})," for verbose logs."]}),(0,s.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-ios-appcenter-distribute-component",children:(0,s.jsx)(i,{url:"https://github.com/appcircleio/appcircle-ios-appcenter-distribute-component",title:"GitHub - appcircleio/appcircle-ios-appcenter-distribute-component",description:"Contribute to appcircleio/appcircle-ios-appcenter-distribute-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/af5f411e05165dc2f2c8b479891508fde67a9d96de9e92d764b9cc5fb31d10b1/appcircleio/appcircle-ios-appcenter-distribute-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},69678:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var s=i(74848);function r(e){let{url:t}=e;return(0,s.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>d});var s=i(96540);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);