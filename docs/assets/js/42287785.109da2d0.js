"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[38672],{85364:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=i(74848),s=i(28453),n=i(69678);const o={title:"App Center Android Distribute",description:"App Center Android Distribute enables developers to distribute their Android applications to testers and stakeholders for testing purposes.",tags:["android","mobile","distribution"]},d="App Center Android Distribute",p={id:"workflows/android-specific-workflow-steps/app-center-android-distribution",title:"App Center Android Distribute",description:"App Center Android Distribute enables developers to distribute their Android applications to testers and stakeholders for testing purposes.",source:"@site/docs/workflows/android-specific-workflow-steps/app-center-android-distribution.md",sourceDirName:"workflows/android-specific-workflow-steps",slug:"/workflows/android-specific-workflow-steps/app-center-android-distribution",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/app-center-android-distribution",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/android-specific-workflow-steps/app-center-android-distribution.md",tags:[{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/tags/mobile"},{label:"distribution",permalink:"/nextjs-upload-file-tryout/tags/distribution"}],version:"current",frontMatter:{title:"App Center Android Distribute",description:"App Center Android Distribute enables developers to distribute their Android applications to testers and stakeholders for testing purposes.",tags:["android","mobile","distribution"]},sidebar:"mySidebar",previous:{title:"Android Unit Tests",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/android-unit-tests"},next:{title:"App Post-Processor",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/app-post-processor"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"app-center-android-distribute",children:"App Center Android Distribute"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/appcenter/sdk/distribute/android",children:"App Center Distribute for Android"})," enables developers to distribute their Android applications to testers and stakeholders for testing purposes. It provides a centralised dashboard where developers can upload their app packages, manage distribution to specific groups of testers, collect feedback, and monitor installation and usage metrics. With App Center Distribute, developers can streamline the testing process, gather valuable insights, and iterate on their apps before releasing them to the public."]}),"\n",(0,r.jsxs)(t.p,{children:["The Appcircle ",(0,r.jsx)(t.strong,{children:"App Center Android Distribute"})," step allows you to seamlessly distribute your Android applications and mapping files to ",(0,r.jsx)(t.a,{href:"https://appcenter.ms",children:"App Center"}),"."]}),"\n",(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsx)(t.p,{children:"Please note that you can also distribute your app via Appcircle. Utilizing Appcircle's distribution modules enhances manageability within the platform."}),(0,r.jsx)(t.p,{children:"For more details, please refer to the following links:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/distribute/",children:"Appcircle Testing Distribution"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/enterprise-appstore/",children:"Appcircle Enterprise App Store"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/publish-module/",children:"Appcircle Publish"})}),"\n"]})]}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["The workflow steps that need to be executed before running the ",(0,r.jsx)(t.strong,{children:"App Center Android Distribute"})," workflow step, along with their respective reasons, are listed in the table below."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/android-specific-workflow-steps/android-build",children:"Android Build"})}),(0,r.jsx)(t.td,{children:"The app required for this step is generated by the Android Build (or alternative build steps)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/android-specific-workflow-steps/android-sign",children:"Android Sign"})}),(0,r.jsx)(t.td,{children:"If you intend to use a signed app, this step must be executed beforehand to process the output. If your app is already signed in the build step, you can skip this step."})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsxs)(t.p,{children:["If a step other than the ",(0,r.jsx)(t.strong,{children:"Android Build"})," or ",(0,r.jsx)(t.strong,{children:"Android Sign"})," step is used to build or sign the app, then the ",(0,r.jsx)(t.strong,{children:"App Center Android Distribute"})," step depends on this step."]})}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-app-center-android-distribution_1.png"}),"\n",(0,r.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,r.jsxs)(t.p,{children:["For each component, specific input variables are required for its operation on your system. The input variables necessary for ",(0,r.jsx)(t.strong,{children:"App Center Android Distribute"})," are as follows:"]}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-app-center-android-distribution_2.png"}),"\n",(0,r.jsxs)(t.admonition,{type:"danger",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Do not hard-code sensitive variables, such as tokens and API keys, directly to the parameters in the step."})}),(0,r.jsxs)(t.p,{children:["We recommend using ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/environment-variables/",children:"Environment Variables"})," groups for such sensitive variables."]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Status"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_TOKEN"})}),(0,r.jsxs)(t.td,{children:["Specifies the Appcenter API token. For more detail, please refer to this ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/appcenter/api-docs/",children:"App Center documentation"}),"."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_APK_PATH"})}),(0,r.jsxs)(t.td,{children:["Specifies the full path of the app build. Both APK (",(0,r.jsx)(t.code,{children:"$AC_APK_PATH"}),", ",(0,r.jsx)(t.code,{children:"$AC_SIGNED_APK_PATH"}),") and AAB (",(0,r.jsx)(t.code,{children:"$AC_AAB_PATH"}),", ",(0,r.jsx)(t.code,{children:"$AC_SIGNED_AAB_PATH"}),") files are supported."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_OWNER"})}),(0,r.jsxs)(t.td,{children:["Specifies the owner of the app on the App Center. The app's owner can be identified in its URL, such as ",(0,r.jsx)(t.code,{children:"https://appcenter.ms/users/JohnDoe/apps/myapp"})," for a user-owned app (where ",(0,r.jsx)(t.strong,{children:"JohnDoe"})," is the owner) and ",(0,r.jsx)(t.code,{children:"https://appcenter.ms/orgs/Appcircle/apps/myapp"})," for an org-owned app (the owner is ",(0,r.jsx)(t.strong,{children:"Appcircle"}),")."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_APPNAME"})}),(0,r.jsxs)(t.td,{children:["The name of the app is in the App Center. The app's name can be identified in its URL, such as ",(0,r.jsx)(t.code,{children:"https://appcenter.ms/users/JohnDoe/apps/myapp"})," for a user-owned app (where ",(0,r.jsx)(t.strong,{children:"myapp"})," is the app name) and ",(0,r.jsx)(t.code,{children:"https://appcenter.ms/orgs/Appcircle/apps/myapp"})," for an org-owned app (the owner is ",(0,r.jsx)(t.strong,{children:"myapp"}),")."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_GROUPS"})}),(0,r.jsxs)(t.td,{children:["Specifies the group names in the App Center. For more than one group name to be distributed, you must separate them with a comma. For example: ",(0,r.jsx)(t.code,{children:"group0,group1,..,groupn"})]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_STORE"})}),(0,r.jsxs)(t.td,{children:["Specifies the store name. For example: ",(0,r.jsx)(t.code,{children:"App Store"}),", ",(0,r.jsx)(t.code,{children:"Google Play"}),", and ",(0,r.jsx)(t.code,{children:"Intune"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_RELEASE_NOTES_PATH"})}),(0,r.jsxs)(t.td,{children:["Specifies the release note path. If you use the ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/publish-release-notes",children:(0,r.jsx)(t.strong,{children:"Publishing Release Notes"})})," component before this step, ",(0,r.jsx)(t.code,{children:"release-notes.txt"})," will be used as release notes. The default value is ",(0,r.jsx)(t.code,{children:"AC_OUTPUT_DIR/release-notes.txt"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_MAPPING_PATH"})}),(0,r.jsxs)(t.td,{children:["Specifies the path of the ",(0,r.jsx)(t.code,{children:"mapping.txt"})," file. Example: ",(0,r.jsx)(t.code,{children:"$AC_REPOSITORY_DIR/build/app/outputs/mapping/release/mapping.txt"})]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_MANDATORY"})}),(0,r.jsxs)(t.td,{children:["Specifies whether the update should be considered mandatory. The options are ",(0,r.jsx)(t.code,{children:"true"})," and ",(0,r.jsx)(t.code,{children:"false"}),". The default value is ",(0,r.jsx)(t.code,{children:"false"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_NOTIFY"})}),(0,r.jsxs)(t.td,{children:["Notify testers of this release. The options are ",(0,r.jsx)(t.code,{children:"true"})," and ",(0,r.jsx)(t.code,{children:"false"}),". The default value is ",(0,r.jsx)(t.code,{children:"false"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_VERSION"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/tr-tr/appcenter/cli/",children:"App Center CLI"})," version. The latest version will be used if no version is set."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_APPCENTER_EXTRA"})}),(0,r.jsxs)(t.td,{children:["Extra command-line arguments for App Center. For example, add ",(0,r.jsx)(t.code,{children:"--debug"})," for verbose logs."]}),(0,r.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-android-appcenter-distribute-component.git",children:(0,r.jsx)(i,{url:"https://github.com/appcircleio/appcircle-android-appcenter-distribute-component.git",title:"GitHub - appcircleio/appcircle-android-appcenter-distribute-component",description:"Contribute to appcircleio/appcircle-android-appcenter-distribute-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/76690ef25bb68842a366c494a98bb34fcecca554a2c65d71fc516205987565eb/appcircleio/appcircle-android-appcenter-distribute-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},69678:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var r=i(74848);function s(e){let{url:t}=e;return(0,r.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>d});var r=i(96540);const s={},n=r.createContext(s);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);