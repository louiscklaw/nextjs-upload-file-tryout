"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[67690],{71820:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var i=r(74848),s=r(28453),l=r(69678);const o={title:"Flutter Build for Android",description:"The Flutter Build for Android step builds your Flutter project with Flutter SDK.",tags:["flutter","build","android"]},n="Flutter Build for Android",d={id:"workflows/flutter-specific-workflow-steps/flutter-build-for-android",title:"Flutter Build for Android",description:"The Flutter Build for Android step builds your Flutter project with Flutter SDK.",source:"@site/docs/workflows/flutter-specific-workflow-steps/flutter-build-for-android.md",sourceDirName:"workflows/flutter-specific-workflow-steps",slug:"/workflows/flutter-specific-workflow-steps/flutter-build-for-android",permalink:"/nextjs-upload-file-tryout/workflows/flutter-specific-workflow-steps/flutter-build-for-android",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/flutter-specific-workflow-steps/flutter-build-for-android.md",tags:[{label:"flutter",permalink:"/nextjs-upload-file-tryout/tags/flutter"},{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"}],version:"current",frontMatter:{title:"Flutter Build for Android",description:"The Flutter Build for Android step builds your Flutter project with Flutter SDK.",tags:["flutter","build","android"]},sidebar:"mySidebar",previous:{title:"Flutter Analyze",permalink:"/nextjs-upload-file-tryout/workflows/flutter-specific-workflow-steps/flutter-analyze"},next:{title:"Flutter Build for iOS",permalink:"/nextjs-upload-file-tryout/workflows/flutter-specific-workflow-steps/flutter-build-for-ios"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ExternalUrlRef:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"flutter-build-for-android",children:"Flutter Build for Android"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Flutter Build for Android"})," step automates the generation of Android APK (Android Package) or AAB (Android App Bundle) files from ",(0,i.jsx)(t.a,{href:"https://flutter.dev",children:"Flutter"})," source code using the ",(0,i.jsx)(t.a,{href:"https://docs.flutter.dev/tools/sdk",children:"Flutter SDK"}),". This simplifies the process of creating distributable packages for Flutter applications."]}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["Before running the ",(0,i.jsx)(t.strong,{children:"Flutter Build for Android"})," step, certain prerequisites must be completed. These prerequisites are detailed in the table below:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/workflows/common-workflow-steps/#git-clone",children:(0,i.jsx)(t.strong,{children:"Git Clone"})})}),(0,i.jsx)(t.td,{children:"This step fetches the repository that needs to be built from the specified branch. It is essential for initiating the Flutter Android build process."})]})})]}),"\n",(0,i.jsx)(l.A,{url:"https://cdn.appcircle.io/docs/assets/flutter-workflow-components-build_1.png"}),"\n",(0,i.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,i.jsxs)(t.p,{children:["Each component requires specific input variables for its operation. The input variables necessary for the ",(0,i.jsx)(t.strong,{children:"Flutter Build for Android"})," step are:"]}),"\n",(0,i.jsx)(l.A,{url:"https://cdn.appcircle.io/docs/assets/flutter-workflow-components-build_2.png"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Status"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_FLUTTER_PROJECT_DIR"})}),(0,i.jsxs)(t.td,{children:["Specifies the directory at the root of your Flutter project where the ",(0,i.jsx)(t.code,{children:"pubspec.yaml"})," file is located."]}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_OUTPUT_TYPE"})}),(0,i.jsxs)(t.td,{children:["Defines the output type, such as ",(0,i.jsx)(t.code,{children:"APK"})," or ",(0,i.jsx)(t.code,{children:"AAB"})," (Android App Bundle)."]}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_FLUTTER_BUILD_MODE"})}),(0,i.jsxs)(t.td,{children:["Specifies the Flutter build mode. The default value is ",(0,i.jsx)(t.code,{children:"release"}),"."]}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_FLUTTER_BUILD_EXTRA_ARGS"})}),(0,i.jsxs)(t.td,{children:["Additional custom build arguments. For instance: ",(0,i.jsx)(t.code,{children:"--split-per-abi"}),"."]}),(0,i.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["If the required variables are already defined in the ",(0,i.jsx)(t.strong,{children:"Configuration"})," section, there is no need to redefine them in the Workflow. For more details, see the ",(0,i.jsx)(t.a,{href:"/build/build-process-management/build-profile-configuration",children:"Build Profile Configuration Overview"}),". The details you provide in the configuration will serve as input for the Android Build step. Kindly substitute the example information with your details:"]}),(0,i.jsx)(l.A,{url:"https://cdn.appcircle.io/docs/assets/flutter-workflow-components-build_3.png"})]}),"\n",(0,i.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,i.jsx)(t.p,{children:"The outputs resulting from the operation of this component are as follows:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Output Variable"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_APK_PATH"})}),(0,i.jsx)(t.td,{children:"Path of the generated APK file."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_AAB_PATH"})}),(0,i.jsx)(t.td,{children:"Path of the generated AAB file."})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["The resulting files will be either APK or AAB, based on the ",(0,i.jsx)(t.code,{children:"Output Type"})," selected in the project ",(0,i.jsx)(t.a,{href:"/build/build-process-management/build-profile-configuration",children:"Configuration"}),"."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-android-flutter-build-component",children:(0,i.jsx)(r,{url:"https://github.com/appcircleio/appcircle-android-flutter-build-component",title:"GitHub - appcircleio/appcircle-android-flutter-build-component",description:"Contribute to appcircleio/appcircle-android-flutter-build-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/d59c7119bd8df94d3c9885767bc19c51f84ead2d83974d034809d99a79cf37e7/appcircleio/appcircle-android-flutter-build-component"})})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},69678:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var i=r(74848);function s(e){let{url:t}=e;return(0,i.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>n});var i=r(96540);const s={},l=i.createContext(s);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);