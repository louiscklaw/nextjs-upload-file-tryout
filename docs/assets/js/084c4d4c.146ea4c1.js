"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[73199],{15401:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>n,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var t=s(74848),r=s(28453),d=s(69678);const o={title:"Xcodebuild for Devices (Archive & Export)",description:"Learn to build iOS apps for ARM devices with Xcodebuild. Essential for Sharing With Testers feature and iOS distribution",tags:["xcode","ios","build","archive","export","workflow","step"]},c="Xcodebuild for Devices (Archive & Export)",l={id:"workflows/ios-specific-workflow-steps/xcodebuild-for-devices",title:"Xcodebuild for Devices (Archive & Export)",description:"Learn to build iOS apps for ARM devices with Xcodebuild. Essential for Sharing With Testers feature and iOS distribution",source:"@site/docs/workflows/ios-specific-workflow-steps/xcodebuild-for-devices.md",sourceDirName:"workflows/ios-specific-workflow-steps",slug:"/workflows/ios-specific-workflow-steps/xcodebuild-for-devices",permalink:"/workflows/ios-specific-workflow-steps/xcodebuild-for-devices",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/ios-specific-workflow-steps/xcodebuild-for-devices.md",tags:[{label:"xcode",permalink:"/tags/xcode"},{label:"ios",permalink:"/tags/ios"},{label:"build",permalink:"/tags/build"},{label:"archive",permalink:"/tags/archive"},{label:"export",permalink:"/tags/export"},{label:"workflow",permalink:"/tags/workflow"},{label:"step",permalink:"/tags/step"}],version:"current",frontMatter:{title:"Xcodebuild for Devices (Archive & Export)",description:"Learn to build iOS apps for ARM devices with Xcodebuild. Essential for Sharing With Testers feature and iOS distribution",tags:["xcode","ios","build","archive","export","workflow","step"]},sidebar:"mySidebar",previous:{title:"Xcode Select",permalink:"/workflows/ios-specific-workflow-steps/xcode-select"},next:{title:"Xcodebuild for iOS Simulator",permalink:"/workflows/ios-specific-workflow-steps/xcodebuild-for-ios-simulator"}},n={},h=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"xcodebuild-for-devices-archive--export",children:"Xcodebuild for Devices (Archive & Export)"}),"\n",(0,t.jsxs)(i.p,{children:["This step builds your application for iOS devices in ARM architecture, which is required for the ",(0,t.jsx)(i.a,{href:"/distribute/create-or-select-a-distribution-profile",children:(0,t.jsx)(i.strong,{children:"Sharing With Testers"})})," feature or any other means of iOS distribution."]}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["This step is the archive and export step. When the step is completed, the ",(0,t.jsx)(i.code,{children:".ipa"})," file of the application is generated."]})}),"\n",(0,t.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(i.p,{children:"The workflow steps that need to be executed before running this step, along with their respective reasons, are listed in the table below."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Require Workflow Step"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:(0,t.jsx)(i.strong,{children:"Git Clone"})})}),(0,t.jsxs)(i.td,{children:["The repository that needs to be built must be fetched from the Git provider. ",(0,t.jsx)(i.strong,{children:"Xcodebuild for Devices"})," should be used after this step."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps#cocoapods-install",children:(0,t.jsx)(i.strong,{children:"Cocoapods Install"})})}),(0,t.jsxs)(i.td,{children:["This step installs all pod dependencies for project. ",(0,t.jsx)(i.strong,{children:"Xcodebuild for Devices"})," should be used after this step. If you use SPM (Swift Package Manager), it is not necessary to use."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps#xcode-select-version",children:(0,t.jsx)(i.strong,{children:"Xcode Select"})})}),(0,t.jsxs)(i.td,{children:["In this step, select the Xcode version to build. ",(0,t.jsx)(i.strong,{children:"Xcodebuild for Devices"})," should be used after this step."]})]})]})]}),"\n",(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.p,{children:"This step should always follow steps that may affect Archive and Export, such as Xcode Select and Cocoapods Install."}),(0,t.jsx)(d.A,{url:"https://cdn.appcircle.io/docs/assets/BE2880-buildOrder.png"})]}),"\n",(0,t.jsx)(i.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,t.jsx)(i.p,{children:"You can find all the parameters required for this step in the table below, with their descriptions in detail."}),"\n",(0,t.jsx)(d.A,{url:"https://cdn.appcircle.io/docs/assets/BE2880-buildInput.png"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Variable Name"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Status"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_REPOSITORY_DIR"})}),(0,t.jsxs)(i.td,{children:["Specifies the cloned repository directory. This path will be generated after the ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps#git-clone",children:"Git Clone"})," step."]}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_OUTPUT_DIR_PATH"})}),(0,t.jsx)(i.td,{children:"This variable specifies the path of the artifacts that will be generated after the build is complete."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_SCHEME"})}),(0,t.jsxs)(i.td,{children:["Specifies the project scheme for build. If you filled in ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"Configuration => Build Scheme"})}),", this variable comes from ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/build/building-ios-applications#build-configuration",children:"Configuration"}),"."]}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_ARCHIVE_FLAGS"})}),(0,t.jsx)(i.td,{children:"Specifies the extra xcodebuild flag. For example: -quiet"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_PROJECT_PATH"})}),(0,t.jsxs)(i.td,{children:["Specifies the project path. For example: ",(0,t.jsx)(i.code,{children:"./appcircle.xcodeproj"}),". If you filled in ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"Configuration => Project or Workspace"})}),", this variable comes from ",(0,t.jsx)(i.a,{href:"https://docs.appcircle.io/build/building-ios-applications#build-configuration",children:"Configuration"}),"."]}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_CERTIFICATES"})}),(0,t.jsx)(i.td,{children:"This variable specifies the path of the certificates to be signed."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_BUNDLE_IDENTIFIERS"})}),(0,t.jsx)(i.td,{children:"This variable holds the Bundle Identifier of the application to be built."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_PROVISIONING_PROFILES"})}),(0,t.jsx)(i.td,{children:"This variable specifies the path of provisioning profiles to be signed."}),(0,t.jsx)(i.td,{children:"Required"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_CONFIGURATION_NAME"})}),(0,t.jsxs)(i.td,{children:["You can build your project with any configuration you want. Specify the configuration as hard coded. Appcircle will add automatically this configuration to the xcodebuild command. For example; ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"Debug"})})]}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_COMPILER_INDEX_STORE_ENABLE"})}),(0,t.jsxs)(i.td,{children:["You can disable indexing during the build for faster build. Default value is ",(0,t.jsx)(i.code,{children:"No"}),"."]}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_METHOD_FOR_EXPORT"})}),(0,t.jsxs)(i.td,{children:["Describes how Xcode should export the archive. Available options are ",(0,t.jsx)(i.code,{children:"auto-detect"}),", ",(0,t.jsx)(i.code,{children:"app-store"}),", ",(0,t.jsx)(i.code,{children:"ad-hoc"}),", ",(0,t.jsx)(i.code,{children:"enterprise"}),", ",(0,t.jsx)(i.code,{children:"development"}),". The default is ",(0,t.jsx)(i.code,{children:"auto-detect"}),"."]}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_TEAMID_FOR_EXPORT"})}),(0,t.jsx)(i.td,{children:"The Developer Portal team to be use for this export. Defaults to the team used to build the archive."}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_COMPILE_BITCODE_FOR_EXPORT"})}),(0,t.jsxs)(i.td,{children:["For non-App Store exports, should Xcode re-compile the app from bitcode? Available options ",(0,t.jsx)(i.code,{children:"YES"}),", ",(0,t.jsx)(i.code,{children:"NO"}),"."]}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_UPLOAD_BITCODE_FOR_EXPORT"})}),(0,t.jsxs)(i.td,{children:["For App Store exports, should the package include a bitcode? Available options ",(0,t.jsx)(i.code,{children:"YES"}),", ",(0,t.jsx)(i.code,{children:"NO"}),"."]}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_UPLOAD_SYMBOLS_FOR_EXPORT"})}),(0,t.jsxs)(i.td,{children:["For App Store exports, should the package include symbols? Available options ",(0,t.jsx)(i.code,{children:"YES"}),", ",(0,t.jsx)(i.code,{children:"NO"}),"."]}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_ICLOUD_CONTAINER_ENVIRONMENT_FOR_EXPORT"})}),(0,t.jsxs)(i.td,{children:['For non-App Store exports, if the app is using CloudKit, this configures the "com.apple.developer.icloud-container-environment" entitlement. Available options ',(0,t.jsx)(i.code,{children:"Development"})," and ",(0,t.jsx)(i.code,{children:"Production"}),"."]}),(0,t.jsx)(i.td,{children:"Optional"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_DELETE_ARCHIVE"})}),(0,t.jsxs)(i.td,{children:["Delete ",(0,t.jsx)(i.code,{children:"build.xcarchive"})," file after creating ipa file."]}),(0,t.jsx)(i.td,{children:"Optional"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Variable Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_ARCHIVE_PATH"})}),(0,t.jsx)(i.td,{children:"This is the path created after retrieving the archive."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_ARCHIVE_METADATA_PATH"})}),(0,t.jsx)(i.td,{children:"This is the path created after the metadata is generated."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"$AC_EXPORT_DIR"})}),(0,t.jsx)(i.td,{children:"This is the path created when exporting."})]})]})]}),"\n",(0,t.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-ios-build-sign-component",children:(0,t.jsx)(s,{url:"https://github.com/appcircleio/appcircle-ios-build-sign-component",title:"GitHub - appcircleio/appcircle-ios-build-sign-component",description:"Contribute to appcircleio/appcircle-ios-build-sign-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/4a79e2e2b1d18edfc1a6b4568749d0c1f41aeab29554b9f527c3d8a99b05700c/appcircleio/appcircle-ios-build-sign-component"})})})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},69678:(e,i,s)=>{s.d(i,{A:()=>r});s(96540);var t=s(74848);function r(e){let{url:i}=e;return(0,t.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>c});var t=s(96540);const r={},d=t.createContext(r);function o(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);