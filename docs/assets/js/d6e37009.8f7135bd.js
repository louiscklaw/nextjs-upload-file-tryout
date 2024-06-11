"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[8257],{31154:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var s=i(74848),r=i(28453),o=i(69678);const n={title:"Xcodebuild for Testing",description:'Build your app with Xcodebuild for Testing. Generate an IPA for use in test automation frameworks like BrowserStack or Testinium."',tags:["build","test","ios","workflow","step"]},l="Xcodebuild for Testing",c={id:"workflows/ios-specific-workflow-steps/xcodebuild-for-testing",title:"Xcodebuild for Testing",description:'Build your app with Xcodebuild for Testing. Generate an IPA for use in test automation frameworks like BrowserStack or Testinium."',source:"@site/docs/workflows/ios-specific-workflow-steps/xcodebuild-for-testing.md",sourceDirName:"workflows/ios-specific-workflow-steps",slug:"/workflows/ios-specific-workflow-steps/xcodebuild-for-testing",permalink:"/workflows/ios-specific-workflow-steps/xcodebuild-for-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/ios-specific-workflow-steps/xcodebuild-for-testing.md",tags:[{label:"build",permalink:"/tags/build"},{label:"test",permalink:"/tags/test"},{label:"ios",permalink:"/tags/ios"},{label:"workflow",permalink:"/tags/workflow"},{label:"step",permalink:"/tags/step"}],version:"current",frontMatter:{title:"Xcodebuild for Testing",description:'Build your app with Xcodebuild for Testing. Generate an IPA for use in test automation frameworks like BrowserStack or Testinium."',tags:["build","test","ios","workflow","step"]},sidebar:"mySidebar",previous:{title:"Xcodebuild for iOS Simulator",permalink:"/workflows/ios-specific-workflow-steps/xcodebuild-for-ios-simulator"},next:{title:"Xcodebuild for Unit and UI Testing",permalink:"/workflows/ios-specific-workflow-steps/xcodebuild-for-unit-and-ui-test"}},d={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"xcodebuild-for-testing",children:"Xcodebuild for Testing"}),"\n",(0,s.jsxs)(t.p,{children:["This step builds your application and generates an IPA for testing so that it can be used in test automation frameworks like ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps#browserstack-app-automate---xcui",children:(0,s.jsx)(t.strong,{children:"BrowserStack"})})," or ",(0,s.jsx)(t.a,{href:"/workflows/common-workflow-steps/testinium",children:(0,s.jsx)(t.strong,{children:"Testinium"})}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"In order for this step to work correctly, it must be used after the two steps listed below."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps#xcode-select-version",children:(0,s.jsx)(t.strong,{children:"Xcode Select"})})}),(0,s.jsx)(t.td,{children:"This step selects the Xcode version that is specified."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps#cocoapods-install",children:(0,s.jsx)(t.strong,{children:"CocoaPods Install"})})}),(0,s.jsx)(t.td,{children:"This step installs all the dependencies of the pod file."})]})]})]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2827-testingOrder.png"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["If you use SPM (Swift Package Manager), Xcode will manage itself when a project build. The ",(0,s.jsx)(t.strong,{children:"CocoaPods Install"})," step is not necessary."]})}),"\n",(0,s.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(t.p,{children:"You can find the parameters required for this step to work and detailed explanations in the list below."}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2827-testingInputs.png"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_REPOSITORY_DIR"})}),(0,s.jsxs)(t.td,{children:["Specifies the cloned repository directory. This path will be generated after the ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps#git-clone",children:"Git Clone"})," step."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_SCHEME"})}),(0,s.jsxs)(t.td,{children:["Specifies the project scheme for build. If you filled in ",(0,s.jsx)(t.code,{children:"Config => Build Schema"})," in the Configuration, this variable comes from ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/build/building-ios-applications#build-configuration",children:"Configuration"}),"."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_ARCHIVE_FLAGS"})}),(0,s.jsxs)(t.td,{children:["Specifies the extra xcodebuild flag. For example: ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-quiet"})})]}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_PROJECT_PATH"})}),(0,s.jsxs)(t.td,{children:["Specifies the project path. For example: ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"./appcircle.xcodeproj"})}),". This variable comes from ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/build/building-ios-applications#build-configuration",children:"Configuration"}),"."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_CONFIGURATION_NAME"})}),(0,s.jsxs)(t.td,{children:["You can build your project with any configuration you want. Specify the configuration as hard-coded. Appcircle will automatically add this configuration to the xcodebuild command. For example; ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Debug"})})]}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_COMPILER_INDEX_STORE_ENABLE"})}),(0,s.jsxs)(t.td,{children:["You can disable indexing during the build for a faster build. The default value is ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"No"})}),"."]}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_DESTINATION"})}),(0,s.jsxs)(t.td,{children:["This parameter determines for which destination the application will be built and IPA will be generated. The default value is ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"generic/platform=iOS"})}),", which means that it will be built for all iOS devices."]}),(0,s.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsx)(t.p,{children:"This component outputs some important parameters after running."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_TEST_APP_PATH"})}),(0,s.jsx)(t.td,{children:"This parameter is the path of the application after the build is complete. If you are using a test automation tool, you can use this path as the app path."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_UITESTS_RUNNER_PATH"})}),(0,s.jsx)(t.td,{children:"This path is the UI Runner Path for running UI tests after the build is complete. This variable is sent to test automation tools to run the tests."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_XCTEST_PATH"})}),(0,s.jsx)(t.td,{children:"This variable is the path containing the tests."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_UITESTS_RUNNER_IPA_PATH"})}),(0,s.jsx)(t.td,{children:"This variable is the path that the IPA generated for the test creates for the UI tests to run. This can be sent directly to test automation tools."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_XCTEST_ZIP_PATH"})}),(0,s.jsx)(t.td,{children:"Path to the IPA version of the Xctests. You can access it directly via this path."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_TEST_IPA_PATH"})}),(0,s.jsx)(t.td,{children:"This path holds the IPA file created for running tests and sending the IPA file to test automation tools."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-ios-build-for-testing",children:(0,s.jsx)(i,{url:"https://github.com/appcircleio/appcircle-ios-build-for-testing",title:"GitHub - appcircleio/appcircle-ios-build-for-testing",description:"Contribute to appcircleio/appcircle-ios-build-for-testing development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/f7089e91de9f689f501a0627b983d09e89e029d1aaa12fbed053a44ae6df4079/appcircleio/appcircle-ios-build-for-testing"})})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},69678:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var s=i(74848);function r(e){let{url:t}=e;return(0,s.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>l});var s=i(96540);const r={},o=s.createContext(r);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);