"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[55482],{71264:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=i(74848),r=i(28453),n=i(69678);const o={title:"Android Unit Tests",description:"Learn how to use the Android Unit Tests workflow step in Appcircle",tags:["android","mobile","android","testing"]},d="Android Unit Tests",c={id:"workflows/android-specific-workflow-steps/android-unit-tests",title:"Android Unit Tests",description:"Learn how to use the Android Unit Tests workflow step in Appcircle",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/700_workflows/android-specific-workflow-steps/android-unit-tests.md",sourceDirName:"700_workflows/android-specific-workflow-steps",slug:"/workflows/android-specific-workflow-steps/android-unit-tests",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/android-specific-workflow-steps/android-unit-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/android-specific-workflow-steps/android-unit-tests.md",tags:[{label:"android",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/android"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/mobile"},{label:"testing",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/testing"}],version:"current",frontMatter:{title:"Android Unit Tests",description:"Learn how to use the Android Unit Tests workflow step in Appcircle",tags:["android","mobile","android","testing"]},sidebar:"tutorialSidebar",previous:{title:"Android Sign",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/android-specific-workflow-steps/android-sign"},next:{title:"App Center Android Distribute",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/android-specific-workflow-steps/app-center-android-distribution"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"android-unit-tests",children:"Android Unit Tests"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Android Unit Tests"})," workflow step executes the unit tests within your project, ensuring comprehensive test coverage. The results of these tests will be included in the artifact archive for further analysis and review."]}),"\n",(0,s.jsxs)(t.p,{children:["Please check out this document for more information: ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/continuous-testing/android-testing/running-android-unit-tests",children:"Running Android Unit Tests"})]}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["The workflow steps that need to be executed before running the ",(0,s.jsx)(t.strong,{children:"Android Unit Tests"})," workflow step, along with their respective reasons, are listed in the table below."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:(0,s.jsx)(t.strong,{children:"Git Clone"})})}),(0,s.jsxs)(t.td,{children:["To initiate the ",(0,s.jsx)(t.strong,{children:"Android Unit Tests"})," process, the repository that needs to be built must be fetched from the branch. This is achieved as follows: Upon completion of the ",(0,s.jsx)(t.strong,{children:"Git Clone"})," step, it generates the ",(0,s.jsx)(t.code,{children:"AC_REPOSITORY_DIR"})," variable, which is then used as the input for the ",(0,s.jsx)(t.strong,{children:"Android Unit Tests"})," step."]})]})})]}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-unit-tests_1.png"}),"\n",(0,s.jsxs)(t.admonition,{type:"danger",children:[(0,s.jsxs)(t.p,{children:["If you wish to view the test results on Appcircle's Test Reports page, it is essential to use the ",(0,s.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-test-report-component",children:"Test Reports"})," step after the ",(0,s.jsx)(t.strong,{children:"Android Unit Tests"}),". Please check out this document for more information: ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/continuous-testing/android-testing/running-android-unit-tests#generating-test-report",children:"Generating Test Report"})]}),(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-unit-tests_2.png"})]}),"\n",(0,s.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsxs)(t.p,{children:["For each component, specific input variables are required for its operation on your system. The input variables necessary for the ",(0,s.jsx)(t.strong,{children:"Android Unit Tests"})," are as follows:"]}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-unit-tests_3.png",alt:"image2"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"})}),(0,s.jsxs)(t.td,{children:["This variable represents the path of the cloned Git repository. If this step runs after the ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:"Git Clone"})," step, the variable will be automatically populated."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_MODULE"})}),(0,s.jsxs)(t.td,{children:["This variable specifies the project module to be built. This variable can also be set via the build ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/build/build-process-management/build-profile-configuration/",children:"Configuration"}),". In Android Studio, you can locate the available modules for your project. For more information, please refer to this ",(0,s.jsx)(t.a,{href:"https://developer.android.com/studio/projects#ApplicationModules",children:"Android document"}),"."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_VARIANTS"})}),(0,s.jsxs)(t.td,{children:["This variable specifies the project variant to be built. This variable can also be set via the build ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/build/build-process-management/build-profile-configuration/",children:"Configuration"}),". In Android Studio, you can find the available variants for your project. For more information, please refer to this ",(0,s.jsx)(t.a,{href:"https://developer.android.com/build/build-variants",children:"Android document"}),"."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_PROJECT_PATH"})}),(0,s.jsxs)(t.td,{children:["Specifies the project path. If your project that needs to be built is ",(0,s.jsx)(t.strong,{children:"not located"})," in the root directory where it was cloned from Git, you should provide the subpath as a relative path. The default value is: ",(0,s.jsx)(t.code,{children:"./"})]}),(0,s.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsx)(t.p,{children:"The outputs that can result from the operation of this component are listed as follows:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_TEST_RESULT_PATH"})}),(0,s.jsx)(t.td,{children:"Specifies the directory where your JUnit XML report is stored."})]})})]}),"\n",(0,s.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-android-unit-test-component.git",children:(0,s.jsx)(i,{url:"https://github.com/appcircleio/appcircle-android-unit-test-component.git",title:"GitHub - appcircleio/appcircle-android-unit-test-component",description:"Contribute to appcircleio/appcircle-android-unit-test-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/40489ea2d1fc9a405ac4dbc473881dfbd4ef10afdfa5391a8f43c3bce8d42aad/appcircleio/appcircle-android-unit-test-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},69678:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var s=i(74848);function r(e){let{url:t}=e;return(0,s.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>d});var s=i(96540);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);