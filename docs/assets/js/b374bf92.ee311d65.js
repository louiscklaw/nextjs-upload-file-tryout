"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77070],{46111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(74848),o=r(28453),i=r(69678);const s={title:"Repeato Test Runner",description:"Repeato Test Runner facilitates the execution of automated tests for mobile applications directly within Appcircle.",tags:["repeato","test-runner","mobile","automation"]},a="Repeato Test Runner",c={id:"workflows/common-workflow-steps/repeato-test-runner",title:"Repeato Test Runner",description:"Repeato Test Runner facilitates the execution of automated tests for mobile applications directly within Appcircle.",source:"@site/docs/workflows/common-workflow-steps/repeato-test-runner.md",sourceDirName:"workflows/common-workflow-steps",slug:"/workflows/common-workflow-steps/repeato-test-runner",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/repeato-test-runner",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/common-workflow-steps/repeato-test-runner.md",tags:[{label:"repeato",permalink:"/nextjs-upload-file-tryout/tags/repeato"},{label:"test-runner",permalink:"/nextjs-upload-file-tryout/tags/test-runner"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/tags/mobile"},{label:"automation",permalink:"/nextjs-upload-file-tryout/tags/automation"}],version:"current",frontMatter:{title:"Repeato Test Runner",description:"Repeato Test Runner facilitates the execution of automated tests for mobile applications directly within Appcircle.",tags:["repeato","test-runner","mobile","automation"]},sidebar:"mySidebar",previous:{title:"Publish Release Notes",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/publish-release-notes"},next:{title:"Set Environment Variable",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/set-environment-variable"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{ExternalUrlRef:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"repeato-test-runner",children:"Repeato Test Runner"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.repeato.app",children:"Repeato"})," is a test automation platform designed for mobile applications. It enables developers to create, manage, and execute automated tests for mobile apps across different platforms and devices. Repeato supports various testing frameworks and provides features for test script creation, test execution, result analysis, and reporting. It helps streamline the testing process, improve test coverage, and enhance the overall quality of mobile applications."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Repeato Test Runner"})," integrates as a service within the Appcircle CI/CD workflow, streamlining the execution of automated tests directly within Appcircle. This service enables developers to validate the functionality and performance of their mobile applications before deployment, ensuring releases of high quality."]}),"\n",(0,n.jsx)(t.p,{children:"For more information, please check out this blog post:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://appcircle.io/blog/streamline-project-integration-and-test-automation-with-repeato-and-appcircle",children:(0,n.jsx)(r,{url:"https://appcircle.io/blog/streamline-project-integration-and-test-automation-with-repeato-and-appcircle",title:"Streamline Project Integration and Test Automation with Repeato and Appcircle - Appcircle Blog",description:"Efficiently integrate and automate your software projects with Repeato and Appcircle. Discover the benefits!",image:"https://ac.appcircle.io/wp-content/uploads/2023/06/mobile-test-automation-with-Repeato-1.png"})})}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:["Before executing the ",(0,n.jsx)(t.strong,{children:"Repeato Test Runner"})," workflow step, certain prerequisite workflow steps must be completed:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/#git-clone",children:(0,n.jsx)(t.strong,{children:"Git Clone"})})}),(0,n.jsxs)(t.td,{children:["The repository that needs to be built must be fetched from the branch. Upon completion of the ",(0,n.jsx)(t.strong,{children:"Git Clone"})," step, it generates the ",(0,n.jsx)(t.code,{children:"AC_REPOSITORY_DIR"})," variable, which is then used as the input for the Android Build step."]})]})})]}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-repeato_1.png"}),"\n",(0,n.jsxs)(t.admonition,{type:"danger",children:[(0,n.jsxs)(t.p,{children:["If you wish to view the test results on Appcircle's Test Reports page, it is essential to use the ",(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-test-report-component",children:"Test Reports"})," step after the ",(0,n.jsx)(t.strong,{children:"Repeato Test Runner"}),". Please check out this document for more information: ",(0,n.jsx)(t.a,{href:"/continuous-testing/android-testing/running-android-unit-tests#generating-test-report",children:"Generating Test Report"})]}),(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-unit-tests_2.png"})]}),"\n",(0,n.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,n.jsxs)(t.p,{children:["Specific input variables are required for the ",(0,n.jsx)(t.strong,{children:"Repeato Test Runner"})," to function correctly:"]}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-repeato_2.png"}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsxs)(t.p,{children:["Confidential information must be entered as a ",(0,n.jsx)(t.a,{href:"/environment-variables/managing-variables#adding-key-and-text-based-value-pairs",children:"secret environment variable"}),". Additionally, ensure that the appropriate ",(0,n.jsx)(t.a,{href:"/environment-variables/managing-variables#using-environment-variable-groups-in-builds",children:"environment variable group"})," is selected in the ",(0,n.jsx)(t.a,{href:"/build/build-process-management/build-profile-configuration/",children:"Configuration"}),"."]})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Status"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_REPEATO_CLI_VER"})}),(0,n.jsx)(t.td,{children:"Specifies the Repeato CLI version compatible with your workspace tests."}),(0,n.jsx)(t.td,{children:"Optional"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_REPEATO_WORKSPACE_DIR"})}),(0,n.jsxs)(t.td,{children:["The workspace path is required by the Repeato test runner to set up the workspace before executing the batch. Example: ",(0,n.jsx)(t.code,{children:"./mypath"}),"."]}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_REPEATO_BATCH_ID"})}),(0,n.jsxs)(t.td,{children:["Provides the batch ID for test execution. For more details, please refer to ",(0,n.jsx)(t.a,{href:"https://www.repeato.app/documentation/continuous-integration/#appcircle",children:"this document"}),"."]}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_REPEATO_LIC_KEY"})}),(0,n.jsx)(t.td,{children:"Provides a license key for test execution."}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_REPEATO_LOG_LEVEL"})}),(0,n.jsxs)(t.td,{children:["Switch to ",(0,n.jsx)(t.code,{children:"DEBUG"})," if you encounter issues while running your batches. This prints additional information to the log. Options: ",(0,n.jsx)(t.code,{children:"INFO"}),", ",(0,n.jsx)(t.code,{children:"DEBUG"}),", ",(0,n.jsx)(t.code,{children:"WARN"}),"."]}),(0,n.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,n.jsx)(t.p,{children:"The outputs resulting from the operation of this component are as follows:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_REPEATO_REPORT"})}),(0,n.jsx)(t.td,{children:"Report of Repeato batches that have been executed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_REPEATO_JUNIT_REPORT"})}),(0,n.jsx)(t.td,{children:"Report of Repeato executed tests in JUnit XML format."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"$AC_TEST_RESULT_PATH"})}),(0,n.jsx)(t.td,{children:"The directory where your JUnit XML report will be saved."})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-repeato-component",children:(0,n.jsx)(r,{url:"https://github.com/appcircleio/appcircle-repeato-component",title:"GitHub - appcircleio/appcircle-repeato-component: Repeato Test Runner Component",description:"Repeato Test Runner Component. Contribute to appcircleio/appcircle-repeato-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/f118f24218dd4589f2b1336423d0fd63e6d2805f76772be629793c1dcd448a14/appcircleio/appcircle-repeato-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},69678:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(74848);function o(e){let{url:t}=e;return(0,n.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);