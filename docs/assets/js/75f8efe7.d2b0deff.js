"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[5296],{41388:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>n,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var t=s(74848),o=s(28453),r=s(69678);const l={title:"Xcodebuild for iOS Simulator",description:"Build your iOS app for the Simulator with Xcodebuild. Creates an unsigned xarchive file.",tags:["ios","simulator","xcodebuild","workflow","step"]},c="Xcodebuild for iOS Simulator",d={id:"workflows/ios-specific-workflow-steps/xcodebuild-for-ios-simulator",title:"Xcodebuild for iOS Simulator",description:"Build your iOS app for the Simulator with Xcodebuild. Creates an unsigned xarchive file.",source:"@site/docs/workflows/ios-specific-workflow-steps/xcodebuild-for-ios-simulator.md",sourceDirName:"workflows/ios-specific-workflow-steps",slug:"/workflows/ios-specific-workflow-steps/xcodebuild-for-ios-simulator",permalink:"/workflows/ios-specific-workflow-steps/xcodebuild-for-ios-simulator",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/ios-specific-workflow-steps/xcodebuild-for-ios-simulator.md",tags:[{label:"ios",permalink:"/tags/ios"},{label:"simulator",permalink:"/tags/simulator"},{label:"xcodebuild",permalink:"/tags/xcodebuild"},{label:"workflow",permalink:"/tags/workflow"},{label:"step",permalink:"/tags/step"}],version:"current",frontMatter:{title:"Xcodebuild for iOS Simulator",description:"Build your iOS app for the Simulator with Xcodebuild. Creates an unsigned xarchive file.",tags:["ios","simulator","xcodebuild","workflow","step"]},sidebar:"mySidebar",previous:{title:"Xcodebuild for Devices (Archive & Export)",permalink:"/workflows/ios-specific-workflow-steps/xcodebuild-for-devices"},next:{title:"Xcodebuild for Testing",permalink:"/workflows/ios-specific-workflow-steps/xcodebuild-for-testing"}},n={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{ExternalUrlRef:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"xcodebuild-for-ios-simulator",children:"Xcodebuild for iOS Simulator"}),"\n",(0,t.jsxs)(i.p,{children:["This step builds your application for the iOS Simulator in x86_64 or arm64 architecture. This step creates an unsigned ",(0,t.jsx)(i.code,{children:"xarchive"})," file. You may also optionally install the application for the given simulator."]}),"\n",(0,t.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(i.p,{children:["Use this step after the ",(0,t.jsx)(i.strong,{children:"Xcode Select"}),"  and ",(0,t.jsx)(i.strong,{children:"CocoaPods Install"})," (if you use ",(0,t.jsx)(i.strong,{children:"CocoaPods"})," in your project) steps."]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps#xcode-select-version",children:(0,t.jsx)(i.strong,{children:"Xcode Select"})})}),(0,t.jsx)(i.td,{children:"This step selects the Xcode version that is specified."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps#cocoapods-install",children:(0,t.jsx)(i.strong,{children:"Cocoapods Install"})})}),(0,t.jsx)(i.td,{children:"This step installs all the dependencies of the pod file."})]})]})]}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/BE2586-sim_order.png"}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsxs)(i.p,{children:["If you use SPM (Swift Package Manager), Xcode will manage itself when a project is built. The ",(0,t.jsx)(i.strong,{children:"CocoaPods Install"})," step is not necessary."]})}),"\n",(0,t.jsx)(i.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,t.jsx)(i.p,{children:"You can find all the parameters required for this step in the table below, with their descriptions in detail."}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/BE2586-simInput.png"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Variable Name"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Status"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_REPOSITORY_DIR"})}),(0,t.jsxs)(i.td,{children:["Specifies the cloned repository directory. This path will be generated after the ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps#git-clone",children:"Git Clone"})," step."]}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_OUTPUT_DIR_PATH"})}),(0,t.jsx)(i.td,{children:"Specifies the path for outputs for generated artifacts."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_SCHEME"})}),(0,t.jsxs)(i.td,{children:["Specifies the project scheme for build. If you filled in ",(0,t.jsx)(i.code,{children:"Config => Build Schema"})," in the Configuration, this variable comes from ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/build/building-ios-applications#build-configuration",children:"Configuration"}),"."]}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_SIMULATOR_ARCH"})}),(0,t.jsxs)(i.td,{children:["Specifies the CPU architecture for the simulator build. The default variable is ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"arm64"})}),"."]}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_SIMULATOR_NAME"})}),(0,t.jsxs)(i.td,{children:["Destination name of the simulator. Ex. ",(0,t.jsx)(i.code,{children:"iPhone 14"}),". If you set a simulator name, the build will be installed into the given simulator. Please be aware that setting the simulator name invalidates the ",(0,t.jsx)(i.code,{children:"AC_SIMULATOR_ARCH"})," option."]}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_ARCHIVE_FLAGS"})}),(0,t.jsx)(i.td,{children:"Specifies the extra xcodebuild flag. For example: -quiet"}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_PROJECT_PATH"})}),(0,t.jsxs)(i.td,{children:["Specifies the project path. If you filled in ",(0,t.jsx)(i.code,{children:"Config => Xcode Project or Workspace Path"})," in the Configuration, this variable comes from ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/build/building-ios-applications#build-configuration",children:"Configuration"}),". For example: ",(0,t.jsx)(i.code,{children:"./appcircle.xcodeproj"}),"."]}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_CONFIGURATION_NAME"})}),(0,t.jsxs)(i.td,{children:["You can build your project with any configuration you want. Specify the configuration as hard coded. Appcircle will automatically add this configuration to the xcodebuild command. For example; ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"Debug"})}),"."]}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_COMPILER_INDEX_STORE_ENABLE"})}),(0,t.jsxs)(i.td,{children:["You can disable indexing during the build for a faster build. The default value is ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"No"})}),"."]}),(0,t.jsx)(i.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsxs)(i.p,{children:["Be aware of which OS version you used; the simulator type should match that OS version. For example, if you use the ",(0,t.jsx)(i.a,{href:"https://developer.apple.com/documentation/ios-ipados-release-notes",children:(0,t.jsx)(i.strong,{children:"latest OS version"})}),", you can not use the ",(0,t.jsx)(i.strong,{children:"iPhone 14"})," simulator."]})}),"\n",(0,t.jsx)(i.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Variable Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_SIMULATOR_APP_PATH"})}),(0,t.jsx)(i.td,{children:"Simulator app path. You can reach the Simulator app from this path, and it will be exported, it can be downloaded from the download artifacts."})]})})]}),"\n",(0,t.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-ios-build-simulator",children:(0,t.jsx)(s,{url:"https://github.com/appcircleio/appcircle-ios-build-simulator",title:"GitHub - appcircleio/appcircle-ios-build-simulator",description:"Contribute to appcircleio/appcircle-ios-build-simulator development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/1d52886bd005cdef818cb01063f0deba1afea917251111b97be8a2e7fcdd40f1/appcircleio/appcircle-ios-build-simulator"})})})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},69678:(e,i,s)=>{s.d(i,{A:()=>o});s(96540);var t=s(74848);function o(e){let{url:i}=e;return(0,t.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>c});var t=s(96540);const o={},r=t.createContext(o);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);