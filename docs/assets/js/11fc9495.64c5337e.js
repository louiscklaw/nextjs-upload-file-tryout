"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[88337],{55258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var i=r(74848),s=r(28453),o=r(69678);const n={title:"Maestro Cloud Upload",description:"Facilitate the execution of automated tests for mobile applications directly within Appcircle using Maestro Cloud Upload.",tags:["maestro","maestro-cloud","mobile","testing"]},d="Maestro Cloud Upload",l={id:"workflows/common-workflow-steps/maestro-cloud-upload",title:"Maestro Cloud Upload",description:"Facilitate the execution of automated tests for mobile applications directly within Appcircle using Maestro Cloud Upload.",source:"@site/docs/workflows/common-workflow-steps/maestro-cloud-upload.md",sourceDirName:"workflows/common-workflow-steps",slug:"/workflows/common-workflow-steps/maestro-cloud-upload",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/maestro-cloud-upload",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/common-workflow-steps/maestro-cloud-upload.md",tags:[{label:"maestro",permalink:"/nextjs-upload-file-tryout/tags/maestro"},{label:"maestro-cloud",permalink:"/nextjs-upload-file-tryout/tags/maestro-cloud"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/tags/mobile"},{label:"testing",permalink:"/nextjs-upload-file-tryout/tags/testing"}],version:"current",frontMatter:{title:"Maestro Cloud Upload",description:"Facilitate the execution of automated tests for mobile applications directly within Appcircle using Maestro Cloud Upload.",tags:["maestro","maestro-cloud","mobile","testing"]},sidebar:"mySidebar",previous:{title:"Jira Comment",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/jira-comment"},next:{title:"Marathon Cloud",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/marathon-cloud"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"For All Platforms",id:"for-all-platforms",level:3},{value:"For Android (Java / Kotlin and React Native)",id:"for-android-java--kotlin-and-react-native",level:3},{value:"For iOS (Objective-C / Swift and React Native)",id:"for-ios-objective-c--swift-and-react-native",level:3},{value:"For Android Flutter",id:"for-android-flutter",level:3},{value:"For iOS Flutter",id:"for-ios-flutter",level:3},{value:"Input Variables",id:"input-variables",level:2},{value:"Output Variables",id:"output-variables",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ExternalUrlRef:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"maestro-cloud-upload",children:"Maestro Cloud Upload"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://cloud.mobile.dev",children:"Maestro Cloud"})," is a cloud-based mobile device farm for testing and debugging mobile applications, offering developers and QA teams access to a wide range of real devices for comprehensive testing across various platforms, operating systems, and device configurations."]}),"\n",(0,i.jsxs)(t.p,{children:["The Appcircle ",(0,i.jsx)(t.strong,{children:"Maestro Cloud Upload"})," step enables users to upload their mobile applications directly to Maestro, a cloud-based mobile device farm for testing and debugging applications. This integration simplifies the process of distributing apps for testing purposes across various devices and platforms supported by Maestro. Users can configure this step within their CI/CD workflows to deploy their apps to Maestro's cloud infrastructure, facilitating efficient and comprehensive testing procedures."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["Before running the ",(0,i.jsx)(t.strong,{children:"Maestro Cloud Upload"})," step, certain prerequisites must be completed. These prerequisites, detailed in the table below, vary depending on the platform:"]}),"\n",(0,i.jsx)(t.h3,{id:"for-all-platforms",children:"For All Platforms"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/common-workflow-steps/#git-clone",children:(0,i.jsx)(t.strong,{children:"Git Clone"})})}),(0,i.jsxs)(t.td,{children:["Fetches the repository to be built from the specified branch, ensuring that the ",(0,i.jsx)(t.a,{href:"https://maestro.mobile.dev/getting-started/installing-maestro",children:"Maestro CLI"})," can run on the repository path."]})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"for-android-java--kotlin-and-react-native",children:"For Android (Java / Kotlin and React Native)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/android-specific-workflow-steps/android-build",children:(0,i.jsx)(t.strong,{children:"Android Build"})})}),(0,i.jsxs)(t.td,{children:["Generates the app required for the ",(0,i.jsx)(t.strong,{children:"Maestro Cloud Upload"})," step."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/android-specific-workflow-steps/android-sign",children:(0,i.jsx)(t.strong,{children:"Android Sign"})})}),(0,i.jsx)(t.td,{children:"This step is required for signing the app. It processes the output for signing but can be skipped if the app is already signed."})]})]})]}),"\n",(0,i.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-maestro-cloud-upload_1.png"}),"\n",(0,i.jsx)(t.h3,{id:"for-ios-objective-c--swift-and-react-native",children:"For iOS (Objective-C / Swift and React Native)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps#xcodebuild-for-devices-archive--export",children:(0,i.jsx)(t.strong,{children:"Xcodebuild for Devices"})})}),(0,i.jsxs)(t.td,{children:["Builds the application in ARM architecture and generates an ",(0,i.jsx)(t.code,{children:"IPA"})," file."]})]})})]}),"\n",(0,i.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-maestro-cloud-upload_2.png"}),"\n",(0,i.jsx)(t.h3,{id:"for-android-flutter",children:"For Android Flutter"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/flutter-specific-workflow-steps#flutter-build-for-android",children:(0,i.jsx)(t.strong,{children:"Flutter Build for Android"})})}),(0,i.jsxs)(t.td,{children:["Generates the app required for the ",(0,i.jsx)(t.strong,{children:"Maestro Cloud Upload"})," step."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/android-specific-workflow-steps/android-sign",children:(0,i.jsx)(t.strong,{children:"Android Sign"})})}),(0,i.jsx)(t.td,{children:"This step is required for signing the app. It processes the output for signing but can be skipped if the app is already signed."})]})]})]}),"\n",(0,i.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-maestro-cloud-upload_3.png"}),"\n",(0,i.jsx)(t.h3,{id:"for-ios-flutter",children:"For iOS Flutter"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps#xcodebuild-for-devices-archive--export",children:(0,i.jsx)(t.strong,{children:"Xcodebuild for Devices"})})}),(0,i.jsxs)(t.td,{children:["Builds the application in ARM architecture and generates an ",(0,i.jsx)(t.code,{children:"IPA"})," file."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/flutter-specific-workflow-steps#flutter-build-for-ios",children:(0,i.jsx)(t.strong,{children:"Flutter Build for iOS"})})}),(0,i.jsxs)(t.td,{children:["Prepares the Flutter project for the iOS environment and builds it using the ",(0,i.jsx)(t.a,{href:"https://github.com/flutter/flutter",children:"Flutter SDK"}),"."]})]})]})]}),"\n",(0,i.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-maestro-cloud-upload_4.png"}),"\n",(0,i.jsx)(t.h2,{id:"input-variables",children:"Input Variables"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Maestro Cloud Upload"})," step requires specific input variables:"]}),"\n",(0,i.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-maestro-cloud-upload_5.png"}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsxs)(t.p,{children:["Enter confidential information as a ",(0,i.jsx)(t.a,{href:"/environment-variables/managing-variables#adding-key-and-text-based-value-pairs",children:"secret environment variable"}),". Also, select the appropriate ",(0,i.jsx)(t.a,{href:"/environment-variables/managing-variables#using-environment-variable-groups-in-builds",children:"environment variable group"})," in the ",(0,i.jsx)(t.a,{href:"/build/build-process-management/build-profile-configuration/",children:"Configuration"}),"."]})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Status"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_API_KEY"})}),(0,i.jsx)(t.td,{children:"The API key is required for accessing Maestro Cloud services."}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_APP_FILE"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Android"}),": Specify the path to an x86 compatible APK file. ",(0,i.jsx)(t.strong,{children:"iOS"}),": Provide a zip archive containing an x86 compatible simulator build."]}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_WORKSPACE"})}),(0,i.jsxs)(t.td,{children:["Specifies the directory or file path where Maestro flows are located. By default, it looks for a ",(0,i.jsx)(t.code,{children:".maestro"})," folder in the project root. Override with a workspace argument if needed."]}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_UPLOAD_NAME"})}),(0,i.jsx)(t.td,{children:"Specifies the custom name for the upload."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_ASYNC"})}),(0,i.jsx)(t.td,{children:"Toggle to enable asynchronous mode for running flows."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_ENV"})}),(0,i.jsxs)(t.td,{children:["Pass environment variables to the flows. Separate variables using a new line, or ",(0,i.jsx)(t.code,{children:"\\n"}),"."]}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_ANDROID_API_LEVEL"})}),(0,i.jsxs)(t.td,{children:["Set the Android API level for devices to run. The default value is ",(0,i.jsx)(t.code,{children:"30"}),"."]}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_INCLUDE_TAGS"})}),(0,i.jsx)(t.td,{children:"Run only flows containing the specified tags (comma-separated)."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_EXCLUDE_TAGS"})}),(0,i.jsx)(t.td,{children:"Exclude flows with the specified tags (comma-separated)."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_EXPORT_TEST_REPORT"})}),(0,i.jsx)(t.td,{children:"Toggle to export the test suite report (JUnit)."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_EXPORT_OUTPUT"})}),(0,i.jsxs)(t.td,{children:["Specify the output file for the test file output. The default is ",(0,i.jsx)(t.code,{children:"report.xml"}),"."]}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_MAPPING_FILE"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Android"}),": Include the Proguard mapping file. ",(0,i.jsx)(t.strong,{children:"iOS"}),": Include the generated .dSYM file."]}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_BRANCH"})}),(0,i.jsx)(t.td,{children:"The branch from which the upload originated."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_REPO_NAME"})}),(0,i.jsx)(t.td,{children:"The name of the repository (e.g., GitHub repo slug)."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_REPO_OWNER"})}),(0,i.jsx)(t.td,{children:"The owner of the repository (e.g., GitHub organization or user slug)."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_PULL_ID"})}),(0,i.jsx)(t.td,{children:"The ID of the pull request from which the upload originated."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_MAESTRO_CLI_VERSION"})}),(0,i.jsxs)(t.td,{children:["The version of the Maestro CLI is to be downloaded in your CI environment. The default value is the ",(0,i.jsx)(t.code,{children:"latest"})," version."]}),(0,i.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"output-variables",children:"Output Variables"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Maestro Cloud Upload"})," step does not produce any output variables. The results are shown in the build log."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-maestro-cloud-upload-component.git",children:(0,i.jsx)(r,{url:"https://github.com/appcircleio/appcircle-maestro-cloud-upload-component.git",title:"GitHub - appcircleio/appcircle-maestro-cloud-upload-component",description:"Contribute to appcircleio/appcircle-maestro-cloud-upload-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/f28c524ba0b25459c161f23736ca6851d516c065e04e4a6dd5a400fb75d48608/appcircleio/appcircle-maestro-cloud-upload-component"})})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},69678:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var i=r(74848);function s(e){let{url:t}=e;return(0,i.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>d});var i=r(96540);const s={},o=i.createContext(s);function n(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);