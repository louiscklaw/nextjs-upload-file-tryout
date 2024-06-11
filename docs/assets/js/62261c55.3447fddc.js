"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[23917],{77918:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var o=t(74848),n=t(28453),i=t(69678);const d={title:"Android Dependency Report",description:"Learn how to use the Android Dependency Report workflow step in Appcircle",tags:["android","mobile","android","dependency","report"]},s="Android Dependency Report",c={id:"workflows/android-specific-workflow-steps/android-dependency-report",title:"Android Dependency Report",description:"Learn how to use the Android Dependency Report workflow step in Appcircle",source:"@site/docs/workflows/android-specific-workflow-steps/android-dependency-report.md",sourceDirName:"workflows/android-specific-workflow-steps",slug:"/workflows/android-specific-workflow-steps/android-dependency-report",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/android-dependency-report",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/android-specific-workflow-steps/android-dependency-report.md",tags:[{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/tags/mobile"},{label:"dependency",permalink:"/nextjs-upload-file-tryout/tags/dependency"},{label:"report",permalink:"/nextjs-upload-file-tryout/tags/report"}],version:"current",frontMatter:{title:"Android Dependency Report",description:"Learn how to use the Android Dependency Report workflow step in Appcircle",tags:["android","mobile","android","dependency","report"]},sidebar:"mySidebar",previous:{title:"Android Build",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/android-build"},next:{title:"Android Sign",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/android-sign"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{ExternalUrlRef:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"android-dependency-report",children:"Android Dependency Report"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.strong,{children:"Android Dependency Report"})," workflow step visualizes the whole dependency tree for every ",(0,o.jsx)(r.a,{href:"https://docs.gradle.org/current/userguide/declaring_dependencies.html#sec:what-are-dependency-configurations",children:"configuration"})," available in the project."]}),"\n",(0,o.jsx)(r.p,{children:"Rendering the dependency tree is particularly useful if you\u2019d like to identify which dependencies have been resolved at runtime. It also provides you with information about any dependency conflict resolution that occurred in the process and clearly indicates the selected version. The dependency report always contains declared and transitive dependencies."}),"\n",(0,o.jsx)(r.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(r.p,{children:["The workflow steps that need to be executed before running the ",(0,o.jsx)(r.strong,{children:"Android Dependency Report"})," workflow step, along with their respective reasons, are listed in the table below."]}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Prerequisite Workflow Step"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:(0,o.jsx)(r.strong,{children:"Git Clone"})})}),(0,o.jsxs)(r.td,{children:["To initiate the ",(0,o.jsx)(r.strong,{children:"Android Dependency Report"})," process, the repository that needs to be built must be fetched from the branch. This is achieved as follows: Upon completion of the ",(0,o.jsx)(r.strong,{children:"Git Clone"})," step, it generates the ",(0,o.jsx)(r.code,{children:"AC_REPOSITORY_DIR"})," variable, which is then used as the input for the ",(0,o.jsx)(r.strong,{children:"Android Dependency Report"})," step."]})]})})]}),"\n",(0,o.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-dependency-report_1.png"}),"\n",(0,o.jsx)(r.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,o.jsxs)(r.p,{children:["For each component, specific input variables are required for its operation on your system. The input variables necessary for the ",(0,o.jsx)(r.strong,{children:"Android Dependency Report"})," are as follows:"]}),"\n",(0,o.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-dependency-report_2.png",alt:"image2"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Variable Name"}),(0,o.jsx)(r.th,{children:"Description"}),(0,o.jsx)(r.th,{children:"Status"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$AC_REPOSITORY_DIR"})}),(0,o.jsxs)(r.td,{children:["This variable represents the path of the cloned Git repository. If this step runs after the ",(0,o.jsx)(r.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:"Git Clone"})," step, the variable will be automatically populated."]}),(0,o.jsx)(r.td,{children:"Required"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$AC_MODULE"})}),(0,o.jsxs)(r.td,{children:["This variable specifies the project module to be built. This variable can also be set via the build ",(0,o.jsx)(r.a,{href:"https://docs.appcircle.io/build/build-process-management/build-profile-configuration/",children:"Configuration"}),". In Android Studio, you can locate the available modules for your project. For more information, please refer to this ",(0,o.jsx)(r.a,{href:"https://developer.android.com/studio/projects#ApplicationModules",children:"Android document"}),"."]}),(0,o.jsx)(r.td,{children:"Required"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$AC_DEPENDENCY_CONFIGURATION"})}),(0,o.jsxs)(r.td,{children:["Specifies the ",(0,o.jsx)(r.a,{href:"https://docs.gradle.org/current/userguide/declaring_dependencies.html#sec:what-are-dependency-configurations",children:"configuration"})," to resolve for displaying dependency information. The default value is: ",(0,o.jsx)(r.code,{children:"implementation"}),"."]}),(0,o.jsx)(r.td,{children:"Required"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$AC_PROJECT_PATH"})}),(0,o.jsxs)(r.td,{children:["Specifies the project path. If your project that needs to be built is ",(0,o.jsx)(r.strong,{children:"not located"})," in the root directory where it was cloned from Git, you should provide the subpath as a relative path. The default value is: ",(0,o.jsx)(r.code,{children:"./"})]}),(0,o.jsx)(r.td,{children:"Optional"})]})]})]}),"\n",(0,o.jsx)(r.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,o.jsx)(r.p,{children:"The outputs that can result from the operation of this component are listed as follows:"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Variable Name"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$AC_ANDROID_DEPENDENCY_REPORT_PATH"})}),(0,o.jsx)(r.td,{children:"Specifies the path where the Android dependency report file is stored."})]})})]}),"\n",(0,o.jsxs)(r.admonition,{type:"danger",children:[(0,o.jsxs)(r.p,{children:["If you wish to review or download the Android Dependencies Report, you can find them directly from ",(0,o.jsx)(r.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/export-build-artifacts/#download-exported-artifacts",children:(0,o.jsx)(r.strong,{children:"Download Artifacts"})}),". To do this, please ensure that the ",(0,o.jsx)(r.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps#export-build-artifacts",children:(0,o.jsx)(r.strong,{children:"Export Build Artifacts"})})," step follows the ",(0,o.jsx)(r.strong,{children:"Android Dependency Report"})," workflow step."]}),(0,o.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-dependency-report_3.png"})]}),"\n",(0,o.jsx)(r.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://github.com/appcircleio/appcircle-dependency-report.git",children:(0,o.jsx)(t,{url:"https://github.com/appcircleio/appcircle-dependency-report.git",title:"GitHub - appcircleio/appcircle-dependency-report",description:"Contribute to appcircleio/appcircle-dependency-report development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/5625fa0821785add9ba16f633531d91ae8028d701fa83453e70b9c55800a12e9/appcircleio/appcircle-dependency-report"})})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},69678:(e,r,t)=>{t.d(r,{A:()=>n});t(96540);var o=t(74848);function n(e){let{url:r}=e;return(0,o.jsx)("img",{className:"screenshot",src:r})}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>s});var o=t(96540);const n={},i=o.createContext(n);function d(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);