"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[61174],{36099:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var o=t(74848),r=t(28453),i=t(69678);const n={title:"App Post-Processor",description:"This step performs the necessary system operations to identify and process the Android output binary files.",tags:["android","mobile","post-processor"]},p="Android App Post-Processor",d={id:"workflows/android-specific-workflow-steps/app-post-processor",title:"App Post-Processor",description:"This step performs the necessary system operations to identify and process the Android output binary files.",source:"@site/docs/700_workflows/android-specific-workflow-steps/app-post-processor.md",sourceDirName:"700_workflows/android-specific-workflow-steps",slug:"/workflows/android-specific-workflow-steps/app-post-processor",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/app-post-processor",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/android-specific-workflow-steps/app-post-processor.md",tags:[{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/tags/mobile"},{label:"post-processor",permalink:"/nextjs-upload-file-tryout/tags/post-processor"}],version:"current",frontMatter:{title:"App Post-Processor",description:"This step performs the necessary system operations to identify and process the Android output binary files.",tags:["android","mobile","post-processor"]},sidebar:"tutorialSidebar",previous:{title:"App Center Android Distribute",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/app-center-android-distribution"},next:{title:"Appdome Build-2Secure for Android",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/appdome-build-to-secure-for-android"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"android-app-post-processor",children:"Android App Post-Processor"}),"\n",(0,o.jsx)(s.p,{children:"This step performs the necessary system operations to identify and process the Android output binary files."}),"\n",(0,o.jsx)(s.admonition,{type:"warning",children:(0,o.jsxs)(s.p,{children:["This step also verifies whether the app is signed or not. If this step is not included in your Workflow or if it is determined that there is no signed app as a result of this step, ",(0,o.jsx)(s.strong,{children:"the app cannot be distributed"}),"."]})}),"\n",(0,o.jsx)(s.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(s.p,{children:["The workflow steps that need to be executed before running the ",(0,o.jsx)(s.strong,{children:"Android App Post-Processor"})," workflow step, along with their respective reasons, are listed in the table below."]}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Prerequisite Workflow Step"}),(0,o.jsx)(s.th,{children:"Description"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.a,{href:"/workflows/common-workflow-steps/git-clone",children:"Git Clone"})}),(0,o.jsxs)(s.td,{children:["This step relies on the ",(0,o.jsx)(s.strong,{children:"Android Build"})," step and the ",(0,o.jsx)(s.strong,{children:"Git Clone"})," step is necessary for the ",(0,o.jsx)(s.strong,{children:"Android Build"})," step to run successfully."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.a,{href:"/workflows/android-specific-workflow-steps/android-build",children:"Android Build"})}),(0,o.jsx)(s.td,{children:"To process Android output, these outputs must be obtained from the build step."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.a,{href:"/workflows/android-specific-workflow-steps/android-sign",children:"Android Sign"})}),(0,o.jsx)(s.td,{children:"If a signed app is created, this step needs to be run beforehand to process this output."})]})]})]}),"\n",(0,o.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-post-processor_1.png",alt:"image2"}),"\n",(0,o.jsx)(s.admonition,{type:"caution",children:(0,o.jsxs)(s.p,{children:["If a step other than the ",(0,o.jsx)(s.strong,{children:"Android Build"})," or ",(0,o.jsx)(s.strong,{children:"Android Sign"})," step is used to build or sign the app, then the ",(0,o.jsx)(s.strong,{children:"Android App Post-Processor"})," step depends on this step."]})}),"\n",(0,o.jsx)(s.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,o.jsxs)(s.p,{children:["There is no need to enter an input for this component. It will process Android files under the output directory (",(0,o.jsx)(s.code,{children:"$AC_OUTPUT_DIR"}),")."]}),"\n",(0,o.jsx)(s.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,o.jsx)(s.p,{children:"The outputs that can result from the operation of this component are listed as follows:"}),"\n",(0,o.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-post-processor_2.png",alt:"image2"}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Variable Name"}),(0,o.jsx)(s.th,{children:"Description"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"$AC_ANDROID_POST_PROCESS_OUTPUT_PATH"})}),(0,o.jsx)(s.td,{children:"Specifies the application post process file path. This file specifies the base name for each app and whether it is signed or not."})]})})]}),"\n",(0,o.jsxs)(s.admonition,{type:"info",children:[(0,o.jsx)(s.p,{children:"The output post-processing JSON file should adhere to the following structure:"}),(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-jsx",metastring:'title="ac_post_process_output.json"',children:'[\n  {\n    "signed": true|false,\n    "app_name": "app base name"\n  },\n  {...}\n]\n'})})]}),"\n",(0,o.jsx)(s.admonition,{type:"caution",children:(0,o.jsxs)(s.p,{children:["To share the signed apps created as a result of this step or to view them on the ",(0,o.jsx)(s.strong,{children:"Download Artifacts"})," page, please ensure that the ",(0,o.jsx)(s.a,{href:"/workflows/common-workflow-steps/export-build-artifacts",children:(0,o.jsx)(s.strong,{children:"Export Build Artifacts"})})," step is included in your Workflow after this step."]})}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://github.com/appcircleio/appcircle-android-post-process-component.git",children:(0,o.jsx)(t,{url:"https://github.com/appcircleio/appcircle-android-post-process-component.git",title:"GitHub - appcircleio/appcircle-android-post-process-component",description:"Contribute to appcircleio/appcircle-android-post-process-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/f2a9de3bbec79caf5cf0c2ab5925fa20ccc3eab8428919a88e6ba3ce05495311/appcircleio/appcircle-android-post-process-component"})})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},69678:(e,s,t)=>{t.d(s,{A:()=>r});t(96540);var o=t(74848);function r(e){let{url:s}=e;return(0,o.jsx)("img",{className:"screenshot",src:s})}},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>p});var o=t(96540);const r={},i=o.createContext(r);function n(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function p(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);