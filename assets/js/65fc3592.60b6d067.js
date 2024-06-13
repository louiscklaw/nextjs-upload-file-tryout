"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[80188],{673:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var s=i(74848),r=i(28453),o=i(69678);const n={title:"Appdome Build-2Secure for iOS",description:"Automate mobile app security with Appdome Build-2Secure for iOS. Enhance security without manual coding or code analysis.",tags:["build","test","security","appdome","ios","workflow","step"]},d="Appdome Build-2Secure for iOS",l={id:"workflows/ios-specific-workflow-steps/appdome-build-to-secure-for-ios",title:"Appdome Build-2Secure for iOS",description:"Automate mobile app security with Appdome Build-2Secure for iOS. Enhance security without manual coding or code analysis.",source:"@site/docs/700_workflows/ios-specific-workflow-steps/appdome-build-to-secure-for-ios.md",sourceDirName:"700_workflows/ios-specific-workflow-steps",slug:"/workflows/ios-specific-workflow-steps/appdome-build-to-secure-for-ios",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/appdome-build-to-secure-for-ios",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/ios-specific-workflow-steps/appdome-build-to-secure-for-ios.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"test",permalink:"/nextjs-upload-file-tryout/tags/test"},{label:"security",permalink:"/nextjs-upload-file-tryout/tags/security"},{label:"appdome",permalink:"/nextjs-upload-file-tryout/tags/appdome"},{label:"ios",permalink:"/nextjs-upload-file-tryout/tags/ios"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/tags/step"}],version:"current",frontMatter:{title:"Appdome Build-2Secure for iOS",description:"Automate mobile app security with Appdome Build-2Secure for iOS. Enhance security without manual coding or code analysis.",tags:["build","test","security","appdome","ios","workflow","step"]},sidebar:"tutorialSidebar",previous:{title:"App Center iOS Distribution",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/appcenter-ios-distribution"},next:{title:"Audit Permission Changes",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/audit-permission-change"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"appdome-build-2secure-for-ios",children:"Appdome Build-2Secure for iOS"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://apis.appdome.com/docs/integrate-in-cicd",children:"Appdome Build-2Secure"})," automates the integration of advanced security features, adaptive protections, code-signing, and certification processes into mobile applications, enhancing security without the need for manual coding or code analysis."]}),"\n",(0,s.jsxs)(t.p,{children:["For detailed information on the benefits that ",(0,s.jsx)(t.strong,{children:"Appdome Build-2Secure"})," adds to your mobile app, please refer to the following blog post:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://appcircle.io/blog/elevate-your-mobile-app-security-with-appdome-integration",children:(0,s.jsx)(i,{url:"https://appcircle.io/blog/elevate-your-mobile-app-security-with-appdome-integration",title:"Elevate Your Mobile App Security with Appdome Integration - Appcircle Blog",description:"Learn to fortify app security seamlessly with Appdome integrated into Appcircle CI/CD pipelines",image:"https://ac.appcircle.io/wp-content/uploads/2024/01/mobile-app-security-with-appdome.png"})})}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["The workflow steps that need to be executed before running the ",(0,s.jsx)(t.strong,{children:"Appdome Build-2Secure for iOS"})," workflow step, along with their respective reasons, are listed in the table below."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps/xcodebuild-for-devices",children:"Xcodebuild for Devices"})}),(0,s.jsxs)(t.td,{children:["The app required for this step is generated by the ",(0,s.jsx)(t.strong,{children:"Xcodebuild for Devices"})," (or alternative build steps)."]})]})})]}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["If a step other than the ",(0,s.jsx)(t.strong,{children:"Xcodebuild for Devices"})," step is used to build or sign the app, then the ",(0,s.jsx)(t.strong,{children:"Appdome Build-2Secure for iOS"})," step depends on this step."]})}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE3049-domeOrder1.png"}),"\n",(0,s.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(t.p,{children:"This stepper needs the necessary parameters to operate. You can find all parameters and their detailed descriptions in the table below."}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE3049-domeInput.png"}),"\n",(0,s.jsxs)(t.admonition,{type:"danger",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Do not hard-code sensitive variables, such as tokens and API keys, directly to the parameters in the step."})}),(0,s.jsxs)(t.p,{children:["We recommend using ",(0,s.jsx)(t.a,{href:"/environment-variables/",children:"Environment Variables"})," groups for such sensitive variables."]})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_IPA_PATH"})}),(0,s.jsxs)(t.td,{children:["URL to app file (ipa) or an environment variable representing its path. For example: ",(0,s.jsx)(t.code,{children:"$AC_EXPORT_DIR/<myappname>.ipa"}),"."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_API_KEY"})}),(0,s.jsxs)(t.td,{children:["This API key must be taken from the Appdome. Please follow the ",(0,s.jsx)(t.a,{href:"https://apis.appdome.com/docs/getting-started#getting-and-resetting-your-appdomes-build2secure-api-token",children:"Appdome documentations"}),"."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_FUSION_SET_ID"})}),(0,s.jsx)(t.td,{children:"Fusion Set ID must be taken from the Appdome."}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_TEAM_ID"})}),(0,s.jsxs)(t.td,{children:["Team ID must be taken from the Appdome. Please follow the ",(0,s.jsx)(t.a,{href:"https://apis.appdome.com/docs/getting-started#getting-a-teams-id",children:"Appdome documantation"}),"."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_SIGN_METHOD"})}),(0,s.jsx)(t.td,{children:"Signing method for automatically sign applications using the Appdome service in accordance with Apple's guidelines."}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_IOS_ENTITLEMENTS"})}),(0,s.jsxs)(t.td,{children:["Entitlements must be taken from the Xcode. You can separate entitlement files with commas. It must have ",(0,s.jsx)(t.code,{children:"plist"}),", ",(0,s.jsx)(t.code,{children:"txt"})," or ",(0,s.jsx)(t.code,{children:"xml"})," file extension."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_PROVISIONING_PROFILES"})}),(0,s.jsxs)(t.td,{children:["Paths of the provisioning profiles. You can separate files with commas. It must have ",(0,s.jsx)(t.code,{children:"mobileprovision"})," extension."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_CERTIFICATES"})}),(0,s.jsxs)(t.td,{children:["Paths of the certificate file. It must have ",(0,s.jsx)(t.code,{children:"p12"})," extension."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_CERTIFICATES_PASS"})}),(0,s.jsx)(t.td,{children:"iOS Certificate Password."}),(0,s.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsx)(t.p,{children:"The outputs that can result from the operation of this component are listed as follows:"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["To view the output artifacts on the ",(0,s.jsx)(t.a,{href:"/workflows/common-workflow-steps/export-build-artifacts",children:(0,s.jsx)(t.strong,{children:"Download Artifacts"})})," page, please ensure that the ",(0,s.jsx)(t.a,{href:"/workflows/common-workflow-steps/export-build-artifacts",children:(0,s.jsx)(t.strong,{children:"Export Build Artifacts"})})," step is included in your Workflow after this step."]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_SECURED_IPA_PATH"})}),(0,s.jsxs)(t.td,{children:["Local path of the secured .ipa file. Available when 'Signing Method' set to ",(0,s.jsx)(t.code,{children:"On-Appdome"})," or ",(0,s.jsx)(t.code,{children:"Private-Signing"})]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_PRIVATE_SIGN_SCRIPT_PATH"})}),(0,s.jsxs)(t.td,{children:["TLocal path of the .sh sign script file. Available when ",(0,s.jsx)(t.code,{children:"Signing Method"})," set to ",(0,s.jsx)(t.code,{children:"Auto-Dev-Signing"})]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPDOME_CERTIFICATE_PATH"})}),(0,s.jsxs)(t.td,{children:["Local path of the Certified Secure Certificate ",(0,s.jsx)(t.code,{children:".pdf"})," file"]}),(0,s.jsx)(t.td,{children:"Required"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},69678:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var s=i(74848);function r(e){let{url:t}=e;return(0,s.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>d});var s=i(96540);const r={},o=s.createContext(r);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);