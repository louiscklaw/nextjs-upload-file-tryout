"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[87709],{91163:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var s=t(74848),r=t(28453),o=t(69678);const n={title:"Install Certificates and Provisioning Profiles",description:"Learn how to install certificates and provisioning profiles for iOS distribution in Appcircle.",tags:["build","test","distribute","ios","workflow","step"]},l="Install Certificates and Provisioning Profiles",c={id:"workflows/ios-specific-workflow-steps/install-certificates-provisions",title:"Install Certificates and Provisioning Profiles",description:"Learn how to install certificates and provisioning profiles for iOS distribution in Appcircle.",source:"@site/docs/700_workflows/ios-specific-workflow-steps/install-certificates-provisions.md",sourceDirName:"700_workflows/ios-specific-workflow-steps",slug:"/workflows/ios-specific-workflow-steps/install-certificates-provisions",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/install-certificates-provisions",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/ios-specific-workflow-steps/install-certificates-provisions.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"test",permalink:"/nextjs-upload-file-tryout/tags/test"},{label:"distribute",permalink:"/nextjs-upload-file-tryout/tags/distribute"},{label:"ios",permalink:"/nextjs-upload-file-tryout/tags/ios"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/tags/step"}],version:"current",frontMatter:{title:"Install Certificates and Provisioning Profiles",description:"Learn how to install certificates and provisioning profiles for iOS distribution in Appcircle.",tags:["build","test","distribute","ios","workflow","step"]},sidebar:"tutorialSidebar",previous:{title:"Firebase Upload dSYM",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/firebase-upload-dsym"},next:{title:"iOS Increment Build and Version Number",permalink:"/nextjs-upload-file-tryout/workflows/ios-specific-workflow-steps/ios-increment-build-and-version-number"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"install-certificates-and-provisioning-profiles",children:"Install Certificates and Provisioning Profiles"}),"\n",(0,s.jsxs)(i.p,{children:["This step installs the specified ",(0,s.jsx)(i.a,{href:"https://developer.apple.com/support/certificates/",children:"certificate"})," and ",(0,s.jsx)(i.a,{href:"https://developer.apple.com/help/account/manage-profiles/create-a-development-provisioning-profile/",children:"provisioning profile"})," files to sign the project.\nFor more detailed information on ",(0,s.jsx)(i.strong,{children:"iOS Certificates and Provisioning Profiles"}),", please refer to ",(0,s.jsx)(i.a,{href:"https://docs.appcircle.io/signing-identities/ios-certificates-and-provisioning-profiles/",children:"this document"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"If you are using an automatic code sign, you can remove this step. Since automatic code signing is managed by Xcode, this step will not be needed."})}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:(0,s.jsx)(i.strong,{children:"Git Clone"})})}),(0,s.jsx)(i.td,{children:"Clone your repository to the runner machine. Use the Install Certificates and Provisiong Profiles step after this step. This step will clone your repository to be able to use provisioning profiles and certificates."})]})})]}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsxs)(i.p,{children:["Please remember. If you are using ",(0,s.jsx)(i.strong,{children:"manual sign"}),", you should definitely use this step and run it after the ",(0,s.jsx)(i.strong,{children:"Git Clone"})," step."]})}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2786-cert_order.png"}),"\n",(0,s.jsx)(i.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(i.p,{children:"The parameters required for this step to work are listed in the table below. These parameters are defaults."}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2786-cert_input.png"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Variable Name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Status"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_CERTIFICATES"})}),(0,s.jsxs)(i.td,{children:["Concatenated strings of ",(0,s.jsx)(i.code,{children:"cert_pass"}),"|",(0,s.jsx)(i.code,{children:"cert_path"})," combined with a pipe ('|') character that have the paths of the certificates and their passwords if they exist. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," For instance, when we have two certificates A and B that require passwords, then it should be like '",(0,s.jsx)(i.code,{children:"a_cert_pass"}),"|",(0,s.jsx)(i.code,{children:"a_cert_path"}),"|",(0,s.jsx)(i.code,{children:"b_cert_pass"}),"|",(0,s.jsx)(i.code,{children:"b_cert_path"}),"'. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," If there is no password, its field will be empty, like '|",(0,s.jsx)(i.code,{children:"a_cert_path"}),"'."]}),(0,s.jsx)(i.td,{children:"Required"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_PROVISIONING_PROFILES"})}),(0,s.jsx)(i.td,{children:"Paths of the provisioning profiles."}),(0,s.jsx)(i.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsx)(i.p,{children:"The output parameters after this step is executed are as follows:"}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2786-cert_output.png"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Variable Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_KEYCHAIN_PATH"})}),(0,s.jsx)(i.td,{children:"A path is created after the certificate is added to the current runner's keychain."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_KEYCHAIN_PASSWORD"})}),(0,s.jsx)(i.td,{children:"After this certificate is added to the keychain, the password assigned to the keychain"})]})]})]}),"\n",(0,s.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-ios-install-certificates-and-profiles-component",children:(0,s.jsx)(t,{url:"https://github.com/appcircleio/appcircle-ios-install-certificates-and-profiles-component",title:"GitHub - appcircleio/appcircle-ios-install-certificates-and-profiles-component",description:"Contribute to appcircleio/appcircle-ios-install-certificates-and-profiles-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/e215a10e28566d7407014844d6783dde78e1def391b241292f12afdd293b9bf4/appcircleio/appcircle-ios-install-certificates-and-profiles-component"})})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},69678:(e,i,t)=>{t.d(i,{A:()=>r});t(96540);var s=t(74848);function r(e){let{url:i}=e;return(0,s.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>l});var s=t(96540);const r={},o=s.createContext(r);function n(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);