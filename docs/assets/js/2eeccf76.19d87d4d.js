"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[91500],{13500:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=r(74848),o=r(28453),n=r(69678);const s={title:"Android Build",description:"Learn how to use the Android Build workflow step in Appcircle",tags:["android","mobile","android","build"]},d="Android Build",l={id:"workflows/android-specific-workflow-steps/android-build",title:"Android Build",description:"Learn how to use the Android Build workflow step in Appcircle",source:"@site/docs/workflows/android-specific-workflow-steps/android-build.md",sourceDirName:"workflows/android-specific-workflow-steps",slug:"/workflows/android-specific-workflow-steps/android-build",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/android-build",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/android-specific-workflow-steps/android-build.md",tags:[{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/tags/mobile"},{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"}],version:"current",frontMatter:{title:"Android Build",description:"Learn how to use the Android Build workflow step in Appcircle",tags:["android","mobile","android","build"]},sidebar:"mySidebar",previous:{title:"Android Build for UI Testing",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/android-build-for-ui-testing"},next:{title:"Android Dependency Report",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/android-dependency-report"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{ExternalUrlRef:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"android-build",children:"Android Build"}),"\n",(0,t.jsx)(i.p,{children:"The Appcircle Android Build step is designed to build your Android application for the architectures specified in your project."}),"\n",(0,t.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(i.p,{children:["The workflow steps that need to be executed before running the ",(0,t.jsx)(i.strong,{children:"Android Build"})," workflow step, along with their respective reasons, are listed in the table below."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:"Git Clone"})}),(0,t.jsxs)(i.td,{children:["To initiate the Android build process, the repository that needs to be built must be fetched from the branch. This is achieved as follows: Upon completion of the Git Clone step, it generates the ",(0,t.jsx)(i.code,{children:"AC_REPOSITORY_DIR"})," variable, which is then used as the input for the Android Build step."]})]})})]}),"\n",(0,t.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-build_3.png",alt:"image2"}),"\n",(0,t.jsx)(i.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,t.jsxs)(i.p,{children:["For each component, specific input variables are required for its operation on your system. The input variables necessary for the ",(0,t.jsx)(i.strong,{children:"Android Build"})," are as follows:"]}),"\n",(0,t.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-build_2.png",alt:"image2"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Variable Name"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Status"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_REPOSITORY_DIR"})}),(0,t.jsxs)(i.td,{children:["This variable represents the path of the cloned Git repository. If this step runs after the ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:"Git Clone"})," step, the variable will be automatically populated."]}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_MODULE"})}),(0,t.jsxs)(i.td,{children:["This variable specifies the project module to be build. This variable can also be set via the build ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/build/build-process-management/build-profile-configuration/",children:"Configuration"}),". In Android Studio, you can locate the available modules for your project. For more information, please refer to ",(0,t.jsx)(i.a,{href:"https://developer.android.com/studio/projects#ApplicationModules",children:"this Android document"}),"."]}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_VARIANTS"})}),(0,t.jsxs)(i.td,{children:["This variable specifies the project variant to be build. This variable can also be set via the build ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/build/build-process-management/build-profile-configuration/",children:"Configuration"}),". In Android Studio, you can find the available variants for your project. For more information, please refer to this ",(0,t.jsx)(i.a,{href:"https://developer.android.com/build/build-variants",children:"Android document"}),"."]}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_OUTPUT_TYPE"})}),(0,t.jsxs)(i.td,{children:["This variable specifies the output type for your build file (APK or AAB). This variable can also be set via the build ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/build/build-process-management/build-profile-configuration/",children:"Configuration"}),"."]}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_PROJECT_PATH"})}),(0,t.jsxs)(i.td,{children:["Specifies the project path. If your project that needs to be built is ",(0,t.jsx)(i.strong,{children:"not located"})," in the root directory where it was cloned from Git, you should provide the subpath as a relative path."]}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_GRADLE_BUILD_EXTRA_ARGS"})}),(0,t.jsxs)(i.td,{children:["Extra arguments were passed to build task. For more information, please refer to ",(0,t.jsx)(i.a,{href:"https://docs.gradle.org/current/userguide/writing_build_scripts.html#sec:extra_properties",children:"this Gradle document"}),"."]}),(0,t.jsx)(i.td,{children:"Optional"})]})]})]}),"\n",(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsxs)(i.p,{children:["If you have filled in the necessary variables in the ",(0,t.jsx)(i.strong,{children:"Configuration"})," section, you will not need to redefine these variables again in the Workflow. For more information about configurations, refer to the ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/build/build-process-management/build-profile-configuration",children:"Build Profile Configuration Overview"})," document. The information you fill in the configuration will be used as input in the Android Build step. Please replace the example information with your own details:"]}),(0,t.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-android-build_1.png",alt:"Configuration Image"}),(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["The input corresponding to the 1st field: ",(0,t.jsx)(i.code,{children:"$AC_MODULE"})]}),"\n",(0,t.jsxs)(i.li,{children:["The input corresponding to the 2nd field: ",(0,t.jsx)(i.code,{children:"$AC_VARIANTS"})]}),"\n",(0,t.jsxs)(i.li,{children:["The input corresponding to the 3rd field: ",(0,t.jsx)(i.code,{children:"$AC_OUTPUT_TYPE"})]}),"\n"]})]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["If you are using Gradle 4.3 and above in your project, you can just use the ",(0,t.jsx)(i.code,{children:"--scan"})," flag in the build step to enable build scans. For existing projects, you may need to add the Gradle Scan (Gradle Enterprise) plugin. For more information, please refer to ",(0,t.jsx)(i.a,{href:"https://scans.gradle.com/",children:(0,t.jsx)(r,{url:"https://scans.gradle.com/",title:"scans.gradle.com",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})]})}),"\n",(0,t.jsx)(i.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,t.jsx)(i.p,{children:"The outputs that can result from the operation of this component are listed as follows:"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Variable Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_APK_PATH"})}),(0,t.jsxs)(i.td,{children:["Path for the generated ",(0,t.jsx)(i.strong,{children:"APK"})," file. This path will be created after the ",(0,t.jsx)(i.strong,{children:"Android Build"})," step runs."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_AAB_PATH"})}),(0,t.jsxs)(i.td,{children:["Path for the generated ",(0,t.jsx)(i.strong,{children:"AAB"})," file. This path will be created after the Android Build step runs and when ",(0,t.jsx)(i.code,{children:"AAB"})," is selected."]})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:["The resulting files will be either APK or AAB, depending on whether you choose the Android App in the project ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/build/build-process-management/build-profile-configuration",children:"Configuration"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["If your project has the ",(0,t.jsx)(i.a,{href:"https://developer.android.com/studio/build/gradle-tips#sign-your-app",children:"signing configuration"})," in Gradle, this step will generate a signed artifact."]}),"\n",(0,t.jsxs)(i.admonition,{type:"caution",children:[(0,t.jsxs)(i.p,{children:["If you do not disable the ",(0,t.jsx)(i.strong,{children:"Android Sign"})," step and your project has no signing configuration defined in Gradle, your artifact will remain unsigned."]}),(0,t.jsxs)(i.p,{children:["So, in order to sign your app using the keystore selected in the build configuration, you should enable the ",(0,t.jsx)(i.strong,{children:"Android Sign"})," step after ",(0,t.jsx)(i.strong,{children:"Android Build"}),"."]})]}),"\n",(0,t.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-android-build-component.git",children:(0,t.jsx)(r,{url:"https://github.com/appcircleio/appcircle-android-build-component.git",title:"GitHub - appcircleio/appcircle-android-build-component",description:"Contribute to appcircleio/appcircle-android-build-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/82b34b33e5bc2854a58768fb035c93a0c3e775907ef255e916077f3215644b45/appcircleio/appcircle-android-build-component"})})})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},69678:(e,i,r)=>{r.d(i,{A:()=>o});r(96540);var t=r(74848);function o(e){let{url:i}=e;return(0,t.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>d});var t=r(96540);const o={},n=t.createContext(o);function s(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);