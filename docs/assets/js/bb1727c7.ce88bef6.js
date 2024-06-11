"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[97772],{28258:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=s(74848),r=s(28453),n=s(69678);const o={title:"Xcodebuild for Unit and UI Testing",description:'This step performs unit and UI tests for your iOS applications. This does not "build" your app, but uses the "xcodebuild" command to run tests.',tags:["build","test","ios","workflow","step"]},d="Xcodebuild for Unit and UI Testing",l={id:"workflows/ios-specific-workflow-steps/xcodebuild-for-unit-and-ui-test",title:"Xcodebuild for Unit and UI Testing",description:'This step performs unit and UI tests for your iOS applications. This does not "build" your app, but uses the "xcodebuild" command to run tests.',source:"@site/docs/workflows/ios-specific-workflow-steps/xcodebuild-for-unit-and-ui-test.md",sourceDirName:"workflows/ios-specific-workflow-steps",slug:"/workflows/ios-specific-workflow-steps/xcodebuild-for-unit-and-ui-test",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/xcodebuild-for-unit-and-ui-test",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/ios-specific-workflow-steps/xcodebuild-for-unit-and-ui-test.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"test",permalink:"/nextjs-upload-file-tryout/tags/test"},{label:"ios",permalink:"/nextjs-upload-file-tryout/tags/ios"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/tags/step"}],version:"current",frontMatter:{title:"Xcodebuild for Unit and UI Testing",description:'This step performs unit and UI tests for your iOS applications. This does not "build" your app, but uses the "xcodebuild" command to run tests.',tags:["build","test","ios","workflow","step"]},sidebar:"mySidebar",previous:{title:"Xcodebuild for Testing",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/xcodebuild-for-testing"},next:{title:"Android Specific Workflow Steps",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"xcodebuild-for-unit-and-ui-testing",children:"Xcodebuild for Unit and UI Testing"}),"\n",(0,i.jsxs)(t.p,{children:["This step allows you to run unit and UI tests in your project. When this step runs, all your tests are run, and an ",(0,i.jsx)(t.code,{children:".xcresult"})," file is created as a result.\xa0This step does not ",(0,i.jsx)(t.code,{children:"build"})," your app, but uses the ",(0,i.jsx)(t.code,{children:"xcodebuild"})," command to run tests."]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["This step does not generate ",(0,i.jsx)(t.strong,{children:"IPA"}),", it only runs tests within the project."]})}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/common-workflow-steps/git-clone",children:(0,i.jsx)(t.strong,{children:"Git Clone"})})}),(0,i.jsxs)(t.td,{children:["The repository must be cloned to initiate the unit and UI testing process. Following the clone, this step will run the tests and create the ",(0,i.jsx)(t.code,{children:"AC_REPOSITORY_DIR"})," variable."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps/xcode-select",children:(0,i.jsx)(t.strong,{children:"Xcode Select"})})}),(0,i.jsx)(t.td,{children:"This step selects the specified Xcode version."})]})]})]}),"\n",(0,i.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3098-unitOrder.png"}),"\n",(0,i.jsxs)(t.admonition,{type:"danger",children:[(0,i.jsxs)(t.p,{children:["If any tests fail during this step, an error will be automatically reported, which reflects issues within the project's tests, not the Appcircle workflow. To prevent disruption in the workflow, enable the ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:'"Continue with the next step even if this step fails"'})})," option."]}),(0,i.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3098-continueEnable.png"})]}),"\n",(0,i.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,i.jsx)(t.p,{children:"Below are the parameters required for this step, along with detailed explanations."}),"\n",(0,i.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3098-unitInput.png"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Status"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"})}),(0,i.jsxs)(t.td,{children:["Specifies the cloned repository directory. This path will be generated after the ",(0,i.jsx)(t.a,{href:"/workflows/common-workflow-steps/git-clone",children:"Git Clone"})," step."]}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_OUTPUT_DIR_PATH"})}),(0,i.jsx)(t.td,{children:"Specifies the path for outputs for generated artifacts."}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_SCHEME"})}),(0,i.jsxs)(t.td,{children:["Specifies the project scheme for build. If you filled in ",(0,i.jsx)(t.code,{children:"Config => Build Schema"})," in the Configuration, this variable comes from ",(0,i.jsx)(t.a,{href:"/build/platform-build-guides/building-ios-applications#build-configuration",children:"Configuration"}),"."]}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_ARCHIVE_FLAGS"})}),(0,i.jsxs)(t.td,{children:["Specifies the extra xcodebuild flag. For example: ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"-quiet"})})]}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_PROJECT_PATH"})}),(0,i.jsxs)(t.td,{children:["Specifies the project path. For example: ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"./appcircle.xcodeproj"})}),". This variable comes from ",(0,i.jsx)(t.a,{href:"/build/platform-build-guides/building-ios-applications#build-configuration",children:"Configuration"}),"."]}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_CONFIGURATION_NAME"})}),(0,i.jsxs)(t.td,{children:["You can build your project with any configuration you want. Specify the configuration as hard-coded. Appcircle will automatically add this configuration to the xcodebuild command. For example; ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Debug"})})]}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_COMPILER_INDEX_STORE_ENABLE"})}),(0,i.jsxs)(t.td,{children:["You can disable indexing during the build for a faster build. The default value is ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"No"})}),"."]}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_TEST_OS_VERSION"})}),(0,i.jsxs)(t.td,{children:["Specify the test OS version. The default value is ",(0,i.jsx)(t.code,{children:"latest"}),". User can use different OS version. For example: ",(0,i.jsx)(t.code,{children:"16.3"})]}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_TEST_DEVICE"})}),(0,i.jsxs)(t.td,{children:["Destination name of the test simulator device. Ex. ",(0,i.jsx)(t.code,{children:"iPhone 14"}),". If you set a simulator name, the build will be installed into the given simulator. The default value is ",(0,i.jsx)(t.code,{children:"iPhone 8 Plus"}),"."]}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_TEST_PLATFORM"})}),(0,i.jsxs)(t.td,{children:["Specify the test platform. The default value is ",(0,i.jsx)(t.code,{children:"iOS Simulator"}),"."]}),(0,i.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Ensure the simulator type matches the OS version used. For example, if you use the ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/ios-ipados-release-notes",children:(0,i.jsx)(t.strong,{children:"latest OS version"})}),", the iPhone 14 simulator cannot be used."]})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["To view the output artifacts on the ",(0,i.jsx)(t.a,{href:"/workflows/common-workflow-steps/export-build-artifacts",children:(0,i.jsx)(t.strong,{children:"Download Artifacts"})})," page, please ensure that the ",(0,i.jsx)(t.a,{href:"/workflows/common-workflow-steps/export-build-artifacts",children:(0,i.jsx)(t.strong,{children:"Export Build Artifacts"})})," step is included in your Workflow after this step."]})}),"\n",(0,i.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_TEST_RESULT_PATH"})}),(0,i.jsxs)(t.td,{children:["The output path for the ",(0,i.jsx)(t.code,{children:".xcresult"})," file. This environment variable can be utilized in subsequent steps."]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},69678:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var i=s(74848);function r(e){let{url:t}=e;return(0,i.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var i=s(96540);const r={},n=i.createContext(r);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);