"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[68715],{11151:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var r=s(74848),i=s(28453),o=s(69678);const n={title:"Detekt",description:"Detekt step, checks for code smells, performance problems, bugs, and adherence to best practices, offering configurable rules and plugins for customization.",tags:["detekt","android","code-quality"]},c="Detekt",d={id:"workflows/android-specific-workflow-steps/detekt",title:"Detekt",description:"Detekt step, checks for code smells, performance problems, bugs, and adherence to best practices, offering configurable rules and plugins for customization.",source:"@site/docs/workflows/android-specific-workflow-steps/detekt.md",sourceDirName:"workflows/android-specific-workflow-steps",slug:"/workflows/android-specific-workflow-steps/detekt",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/detekt",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/android-specific-workflow-steps/detekt.md",tags:[{label:"detekt",permalink:"/nextjs-upload-file-tryout/tags/detekt"},{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"},{label:"code-quality",permalink:"/nextjs-upload-file-tryout/tags/code-quality"}],version:"current",frontMatter:{title:"Detekt",description:"Detekt step, checks for code smells, performance problems, bugs, and adherence to best practices, offering configurable rules and plugins for customization.",tags:["detekt","android","code-quality"]},sidebar:"mySidebar",previous:{title:"Bundle Universal Apk",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/bundle-universal-apk"},next:{title:"Firebase Test Lab for Android",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/firebase-test-lab"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{ExternalUrlRef:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"detekt",children:"Detekt"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://detekt.dev/",children:"Detekt"})," is a static code analysis tool for ",(0,r.jsx)(t.a,{href:"https://kotlinlang.org/",children:"Kotlin"})," used in Android development. It identifies issues, enforces standards, and improves code quality by checking for code smells, performance issues, bugs, and adherence to best practices, with configurable rules and plugins for customization. Its integration into workflows promotes clean and efficient Kotlin codebases."]}),"\n",(0,r.jsxs)(t.p,{children:["The Appcircle Detekt step executes the Detekt Gradle task. For further details, please refer to the ",(0,r.jsx)(t.a,{href:"https://detekt.dev/docs/gettingstarted/gradle/",children:"Run detekt using the Detekt Gradle Plugin"})," documentation."]}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Below are the prerequisite workflow steps required before running the ",(0,r.jsx)(t.strong,{children:"Detekt"})," step, along with their reasons:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/git-clone",children:"Git Clone"})}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.strong,{children:"Git Clone"})," step is necessary to fetch the repository before conducting code checks and must precede the ",(0,r.jsx)(t.strong,{children:"Detekt"})," step."]})]})})]}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-detekt_1.png"}),"\n",(0,r.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,r.jsxs)(t.p,{children:["Each component requires specific input variables for its operation. The input variables necessary for the ",(0,r.jsx)(t.strong,{children:"Detekt"})," step are:"]}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-detekt_2.png"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Status"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_DETEKT_TASK"})}),(0,r.jsxs)(t.td,{children:["Specifies the name of the Detekt task. The default value is ",(0,r.jsx)(t.code,{children:"detekt"}),"."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_DETEKT_EXTRA_PARAMETERS"})}),(0,r.jsx)(t.td,{children:"Additional command-line parameters for Detekt."}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_DETEKT_SAVE_REPORT"})}),(0,r.jsxs)(t.td,{children:["Specifies whether the Detekt report will be saved. If set to ",(0,r.jsx)(t.code,{children:"true"}),", report files will be saved into the artifacts folder. The default value is ",(0,r.jsx)(t.code,{children:"false"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_DETEKT_OUTPUT_PATH"})}),(0,r.jsxs)(t.td,{children:["Specifies the Detekt output path. If the ",(0,r.jsx)(t.code,{children:"AC_DETEKT_SAVE_REPORT"})," input is set to ",(0,r.jsx)(t.code,{children:"true"})," and this value is not defined, then ",(0,r.jsx)(t.code,{children:"<ac_module>/build/reports"})," will be used as the default path."]}),(0,r.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"$AC_DETEKT_SAVE_REPORT"})," is set to ",(0,r.jsx)(t.code,{children:"true"}),", place the ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/export-build-artifacts",children:(0,r.jsx)(t.strong,{children:"Export Build Artifacts"})})," step after the ",(0,r.jsx)(t.strong,{children:"Detekt"})," step to ensure proper transfer of outputs to the ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/export-build-artifacts#download-exported-artifacts",children:"Download Artifacts"})," section."]})}),"\n",(0,r.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,r.jsxs)(t.p,{children:["The output is not stored in any variable. If ",(0,r.jsx)(t.code,{children:"AC_DETEKT_SAVE_REPORT"})," is set to ",(0,r.jsx)(t.code,{children:"true"}),", the file output will be saved in the ",(0,r.jsx)(t.code,{children:"$AC_PROJECT_PATH/$AC_MODULE/build/reports"})," directory (check these variables on the ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/environment-variables/appcircle-specific-environment-variables#ios--android-common-environment-variables",children:"Appcircle-Specific Environment Variables"})," page). If you've added the ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/export-build-artifacts",children:(0,r.jsx)(t.strong,{children:"Export Build Artifacts"})})," step after the ",(0,r.jsx)(t.strong,{children:"Detekt"})," step, this output will also be accessible in the ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/export-build-artifacts#download-exported-artifacts",children:"Download Artifacts"})," section."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-detekt-component.git",children:(0,r.jsx)(s,{url:"https://github.com/appcircleio/appcircle-detekt-component.git",title:"GitHub - appcircleio/appcircle-detekt-component",description:"Contribute to appcircleio/appcircle-detekt-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/780c0be38e7acc500bc5498ca4adc4b0f8ff619a553f12a9ed06a262cb1e547e/appcircleio/appcircle-detekt-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},69678:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var r=s(74848);function i(e){let{url:t}=e;return(0,r.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>c});var r=s(96540);const i={},o=r.createContext(i);function n(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);