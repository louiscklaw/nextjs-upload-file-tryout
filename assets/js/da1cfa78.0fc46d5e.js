"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[89464],{12099:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=s(74848),r=s(28453),n=s(69678);const o={title:"Fortify on Demand Mobile Assessment",description:"Optimize mobile app security with Fortify on Demand Mobile Assessment. Comprehensive testing for robust, secure mobile applications.",tags:["mobile","mobile ci/cd","security","integration","ios","android"]},d="Fortify on Demand Mobile Assessment",l={id:"workflows/common-workflow-steps/fod-mobile-assesment",title:"Fortify on Demand Mobile Assessment",description:"Optimize mobile app security with Fortify on Demand Mobile Assessment. Comprehensive testing for robust, secure mobile applications.",source:"@site/docs/700_workflows/common-workflow-steps/fod-mobile-assesment.md",sourceDirName:"700_workflows/common-workflow-steps",slug:"/workflows/common-workflow-steps/fod-mobile-assesment",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/fod-mobile-assesment",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/common-workflow-steps/fod-mobile-assesment.md",tags:[{label:"mobile",permalink:"/nextjs-upload-file-tryout/tags/mobile"},{label:"mobile ci/cd",permalink:"/nextjs-upload-file-tryout/tags/mobile-ci-cd"},{label:"security",permalink:"/nextjs-upload-file-tryout/tags/security"},{label:"integration",permalink:"/nextjs-upload-file-tryout/tags/integration"},{label:"ios",permalink:"/nextjs-upload-file-tryout/tags/ios"},{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"}],version:"current",frontMatter:{title:"Fortify on Demand Mobile Assessment",description:"Optimize mobile app security with Fortify on Demand Mobile Assessment. Comprehensive testing for robust, secure mobile applications.",tags:["mobile","mobile ci/cd","security","integration","ios","android"]},sidebar:"tutorialSidebar",previous:{title:"Firebase App Distribution",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/firebase-app-distribution"},next:{title:"FTP Upload",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/ftp-upload"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"For iOS (Objective-C / Swift and React Native)",id:"for-ios-objective-c--swift-and-react-native",level:4},{value:"For Android (Java / Kotlin and React Native)",id:"for-android-java--kotlin-and-react-native",level:4},{value:"For iOS Flutter",id:"for-ios-flutter",level:4},{value:"For Android Flutter",id:"for-android-flutter",level:4},{value:"Input Variables",id:"input-variables",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"fortify-on-demand-mobile-assessment",children:"Fortify on Demand Mobile Assessment"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://www.opentext.com/products/fortify-on-demand",children:"Fortify on Demand Mobile Assessment"})," provides a robust solution for securing mobile applications by identifying vulnerabilities before they can be exploited. This comprehensive cloud-based service streamlines the security testing process, ensuring your mobile apps meet the highest standards of security."]}),"\n",(0,t.jsx)(i.p,{children:"You can seamlessly integrate Fortify on Demand Mobile Assessment into your workflow with Appcircle, facilitating easy setup and utilization within your existing development processes."}),"\n",(0,t.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(i.p,{children:["Before running the ",(0,t.jsx)(i.strong,{children:"Fortify on Demand Mobile Assessment"})," step, you must complete certain prerequisites, as detailed in the table below:"]}),"\n",(0,t.jsx)(i.h4,{id:"for-ios-objective-c--swift-and-react-native",children:"For iOS (Objective-C / Swift and React Native)"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/workflows/ios-specific-workflow-steps/xcodebuild-for-devices",children:(0,t.jsx)(i.strong,{children:"Xcodebuild for Devices"})})}),(0,t.jsxs)(i.td,{children:["This step will build your application in ARM architecture and generate an ",(0,t.jsx)(i.code,{children:"IPA"})," and ",(0,t.jsx)(i.code,{children:"dSYM"})," file."]})]})})]}),"\n",(0,t.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3152-fodIosOrder1.png"}),"\n",(0,t.jsx)(i.h4,{id:"for-android-java--kotlin-and-react-native",children:"For Android (Java / Kotlin and React Native)"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-build",children:(0,t.jsx)(i.strong,{children:"Android Build"})})}),(0,t.jsxs)(i.td,{children:["The app required for this step is generated by the ",(0,t.jsx)(i.strong,{children:"Android Build"})," (or alternative build steps)."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-sign",children:(0,t.jsx)(i.strong,{children:"Android Sign"})})}),(0,t.jsx)(i.td,{children:"If you create a signed app, you must run this step beforehand to process the output."})]})]})]}),"\n",(0,t.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3152-fodAndroidOrder.png"}),"\n",(0,t.jsx)(i.h4,{id:"for-ios-flutter",children:"For iOS Flutter"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/workflows/ios-specific-workflow-steps/xcodebuild-for-devices",children:(0,t.jsx)(i.strong,{children:"Xcodebuild for Devices"})})}),(0,t.jsxs)(i.td,{children:["This step will build your application in ARM architecture and generate an ",(0,t.jsx)(i.code,{children:"IPA"})," and ",(0,t.jsx)(i.code,{children:"dSYM"})," file."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/workflows/flutter-specific-workflow-steps/flutter-build-for-ios",children:(0,t.jsx)(i.strong,{children:"Flutter Build for iOS"})})}),(0,t.jsxs)(i.td,{children:["Generates the app required for the ",(0,t.jsx)(i.strong,{children:"Fortify on Demand"})," step."]})]})]})]}),"\n",(0,t.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3152-fodFlutterOrder1.png"}),"\n",(0,t.jsx)(i.h4,{id:"for-android-flutter",children:"For Android Flutter"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/workflows/flutter-specific-workflow-steps/flutter-build-for-android",children:(0,t.jsx)(i.strong,{children:"Flutter Build for Android"})})}),(0,t.jsxs)(i.td,{children:["Generates the app required for the ",(0,t.jsx)(i.strong,{children:"Fortify on Demand"})," step."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/workflows/android-specific-workflow-steps/android-sign",children:(0,t.jsx)(i.strong,{children:"Android Sign"})})}),(0,t.jsx)(i.td,{children:"If you create a signed app, you must run this step beforehand to process the output."})]})]})]}),"\n",(0,t.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3152-androidOrder.png"}),"\n",(0,t.jsx)(i.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,t.jsx)(i.p,{children:"Below is a list of input variables that can be used with this component, along with a description of each."}),"\n",(0,t.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3152-fodInput.png"}),"\n",(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.p,{children:"Avoid hard-coding sensitive information, like tokens and API keys, directly into the step parameters."}),(0,t.jsxs)(i.p,{children:["We recommend using ",(0,t.jsx)(i.a,{href:"/environment-variables/managing-variables",children:(0,t.jsx)(i.strong,{children:"Environment Variables"})})," groups for such sensitive variables."]})]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Variable Name"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Status"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_FOD_CLIENT_ID"})}),(0,t.jsx)(i.td,{children:"Authenticating with client credentials. The client credentials are the API keys generated in the portal."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_FOD_CLIENT_SECRET"})}),(0,t.jsx)(i.td,{children:"Authenticating with client credentials. The client credentials are the API keys generated in the portal."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_FOD_CLIENT_DATACENTER"})}),(0,t.jsx)(i.td,{children:"Select the datacenter assigned to you upon your onboarding with Fortify on Demand."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_FOD_ENTITLEMENT_ID"})}),(0,t.jsx)(i.td,{children:"The ID assigned to your current entitlement. You can retrieve this value in the Fortify on Demand portal."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_FOD_RELEASE_ID"})}),(0,t.jsx)(i.td,{children:"The ID assigned to the created release. This value can be retrieved in the Fortify on Demand portal."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_FOD_ASSESSMENT_TYPE"})}),(0,t.jsx)(i.td,{children:"Assessment type for this mobile assessment."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_FOD_FRAMEWORK_TYPE"})}),(0,t.jsx)(i.td,{children:"Framework type for this mobile assessment."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_FOD_PLATFORM_TYPE"})}),(0,t.jsx)(i.td,{children:"Platform type for this mobile assessment."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_FOD_FILE_PATH"})}),(0,t.jsxs)(i.td,{children:["Full path of the ",(0,t.jsx)(i.code,{children:"IPA"})," or ",(0,t.jsx)(i.code,{children:"APK"})," file."]}),(0,t.jsx)(i.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-fod-mobile-assessment",children:(0,t.jsx)(s,{url:"https://github.com/appcircleio/appcircle-fod-mobile-assessment",title:"GitHub - appcircleio/appcircle-fod-mobile-assessment",description:"Contribute to appcircleio/appcircle-fod-mobile-assessment development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/79cb9a1ce09b786fbd7fc3ea50f15e75a889d203f659f2344ff92a8ff2ef296c/appcircleio/appcircle-fod-mobile-assessment"})})})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},69678:(e,i,s)=>{s.d(i,{A:()=>r});s(96540);var t=s(74848);function r(e){let{url:i}=e;return(0,t.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>d});var t=s(96540);const r={},n=t.createContext(r);function o(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);