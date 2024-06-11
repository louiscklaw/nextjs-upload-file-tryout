"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[86366],{32507:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=t(74848),r=t(28453),n=t(69678);const o={title:"Testinium",description:"Testinium step allows users to run automated tests on their mobile applications using Testinium directly from the Appcircle.",tags:["testinium","test"]},l="Testinium",d={id:"workflows/common-workflow-steps/testinium",title:"Testinium",description:"Testinium step allows users to run automated tests on their mobile applications using Testinium directly from the Appcircle.",source:"@site/docs/workflows/common-workflow-steps/testinium.md",sourceDirName:"workflows/common-workflow-steps",slug:"/workflows/common-workflow-steps/testinium",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/testinium",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/common-workflow-steps/testinium.md",tags:[{label:"testinium",permalink:"/nextjs-upload-file-tryout/tags/testinium"},{label:"test",permalink:"/nextjs-upload-file-tryout/tags/test"}],version:"current",frontMatter:{title:"Testinium",description:"Testinium step allows users to run automated tests on their mobile applications using Testinium directly from the Appcircle.",tags:["testinium","test"]},sidebar:"mySidebar",previous:{title:"SonarQube",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/sonarqube"},next:{title:"Upload Files to Amazon S3",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/upload-files-to-amazon-s3"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"For Android (Java / Kotlin and React Native)",id:"for-android-java--kotlin-and-react-native",level:4},{value:"For iOS (Objective-C / Swift and React Native)",id:"for-ios-objective-c--swift-and-react-native",level:4},{value:"For Android Flutter",id:"for-android-flutter",level:4},{value:"For iOS Flutter",id:"for-ios-flutter",level:4},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"testinium",children:"Testinium"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:"Testinium"})," step integrates the ",(0,s.jsx)(i.a,{href:"https://testinium.com/",children:"Testinium"})," testing platform into Appcircle's CI/CD workflow, allowing for automated testing of mobile applications directly within the Appcircle environment. This step enables developers to execute test scripts, analyze test outcomes, and verify the quality of their mobile apps before deployment"]}),"\n",(0,s.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(i.p,{children:["Before running the ",(0,s.jsx)(i.strong,{children:"Testinium"})," step, certain prerequisites must be completed. These prerequisites, detailed in the table below, vary depending on the platform:"]}),"\n",(0,s.jsx)(i.h4,{id:"for-android-java--kotlin-and-react-native",children:"For Android (Java / Kotlin and React Native)"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-build",children:(0,s.jsx)(i.strong,{children:"Android Build"})})}),(0,s.jsxs)(i.td,{children:["Generates the app required for the ",(0,s.jsx)(i.strong,{children:"Testinium"})," step."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-sign",children:(0,s.jsx)(i.strong,{children:"Android Sign"})})}),(0,s.jsx)(i.td,{children:"This step is required for signing the app. It processes the output for signing but can be skipped if the app is already signed."})]})]})]}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-testinium_1.png"}),"\n",(0,s.jsx)(i.h4,{id:"for-ios-objective-c--swift-and-react-native",children:"For iOS (Objective-C / Swift and React Native)"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/workflows/ios-specific-workflow-steps#xcodebuild-for-devices-archive--export",children:(0,s.jsx)(i.strong,{children:"Xcodebuild for Devices"})})}),(0,s.jsxs)(i.td,{children:["Builds the application in ARM architecture and generates an ",(0,s.jsx)(i.code,{children:"IPA"})," file."]})]})})]}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-testinium_2.png"}),"\n",(0,s.jsx)(i.h4,{id:"for-android-flutter",children:"For Android Flutter"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/workflows/flutter-specific-workflow-steps#flutter-build-for-android",children:(0,s.jsx)(i.strong,{children:"Flutter Build for Android"})})}),(0,s.jsxs)(i.td,{children:["Generates the app required for the ",(0,s.jsx)(i.strong,{children:"Testinium"})," step."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-sign",children:(0,s.jsx)(i.strong,{children:"Android Sign"})})}),(0,s.jsx)(i.td,{children:"This step is required for signing the app. It processes the output for signing but can be skipped if the app is already signed."})]})]})]}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-testinium_3.png"}),"\n",(0,s.jsx)(i.h4,{id:"for-ios-flutter",children:"For iOS Flutter"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/workflows/ios-specific-workflow-steps#xcodebuild-for-devices-archive--export",children:(0,s.jsx)(i.strong,{children:"Xcodebuild for Devices"})})}),(0,s.jsxs)(i.td,{children:["Builds the application in ARM architecture and generates an ",(0,s.jsx)(i.code,{children:"IPA"})," file."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/workflows/flutter-specific-workflow-steps#flutter-build-for-ios",children:(0,s.jsx)(i.strong,{children:"Flutter Build for iOS"})})}),(0,s.jsxs)(i.td,{children:["Prepares the Flutter project for the iOS environment and builds it using the ",(0,s.jsx)(i.a,{href:"https://github.com/flutter/flutter",children:"Flutter SDK"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-testinium_4.png"}),"\n",(0,s.jsx)(i.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsxs)(i.p,{children:["For each component, specific input variables are required for its operation on your system. The input variables necessary for ",(0,s.jsx)(i.strong,{children:"Testinium"})," are as follows:"]}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-testinium_5.png"}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsxs)(i.p,{children:["Confidential information should be entered as a ",(0,s.jsx)(i.a,{href:"/environment-variables/managing-variables#adding-key-and-text-based-value-pairs",children:"secret environment variable"}),". Also, ensure that the ",(0,s.jsx)(i.a,{href:"/environment-variables/managing-variables#using-environment-variable-groups-in-builds",children:"environment variable group"})," is selected in the ",(0,s.jsx)(i.a,{href:"/build/build-process-management/build-profile-configuration/",children:"Configuration"}),"."]})}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Variable Name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Status"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_APP_PATH"})}),(0,s.jsxs)(i.td,{children:["Specifies the full file path of the build output, such as ",(0,s.jsx)(i.code,{children:"$AC_EXPORT_DIR/Myapp.ipa"})," for iOS or ",(0,s.jsx)(i.code,{children:"$AC_APK_PATH"})," for Android."]}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_USERNAME"})}),(0,s.jsx)(i.td,{children:"Specifies the Testinium username used for logging in."}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_PASSWORD"})}),(0,s.jsx)(i.td,{children:"Specifies the Testinium password used for logging in."}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_PROJECT_ID"})}),(0,s.jsx)(i.td,{children:"Specifies the Testinium project ID. This ID must be obtained from the Testinium platform."}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_PLAN_ID"})}),(0,s.jsx)(i.td,{children:"Specifies the Testinium plan ID. This ID must be obtained from the Testinium platform."}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_COMPANY_ID"})}),(0,s.jsx)(i.td,{children:"Specifies the Testinium company ID. This ID must be obtained from the Testinium platform."}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_MAX_FAIL_PERCENTAGE"})}),(0,s.jsx)(i.td,{children:"Specifies the maximum failure percentage limit to interrupt the workflow. It must be in the range 1-100."}),(0,s.jsx)(i.td,{children:"Optional"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_TIMEOUT"})}),(0,s.jsx)(i.td,{children:"Specifies the Testinium plan timeout in minutes."}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_MAX_API_RETRY_COUNT"})}),(0,s.jsx)(i.td,{children:"Specifies the maximum repetition in case of Testinium platform congestion or API errors."}),(0,s.jsx)(i.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsx)(i.p,{children:"Below are the output variables generated by this component:"}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-testinium_6.png"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Variable Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_RESULT_FAILURE_SUMMARY"})}),(0,s.jsx)(i.td,{children:"Total number of failures in the test."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_RESULT_ERROR_SUMMARY"})}),(0,s.jsx)(i.td,{children:"Total number of errors in the test."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_TESTINIUM_RESULT_SUCCESS_SUMMARY"})}),(0,s.jsx)(i.td,{children:"Total number of successes in the test results."})]})]})]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-testinium-component",children:(0,s.jsx)(t,{url:"https://github.com/appcircleio/appcircle-testinium-component",title:"GitHub - appcircleio/appcircle-testinium-component",description:"Contribute to appcircleio/appcircle-testinium-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/dab8da027290666b13fdc97887fa5136ad375580f394e081831b460c79918124/appcircleio/appcircle-testinium-component"})})})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},69678:(e,i,t)=>{t.d(i,{A:()=>r});t(96540);var s=t(74848);function r(e){let{url:i}=e;return(0,s.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>l});var s=t(96540);const r={},n=s.createContext(r);function o(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);