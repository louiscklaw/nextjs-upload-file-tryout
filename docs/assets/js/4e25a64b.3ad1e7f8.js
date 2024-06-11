"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[43874],{11366:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var s=i(74848),r=i(28453),o=i(69678);const n={title:"AppSweep Mobile Security Testing",description:"Learn how to use the AppSweep Mobile Security Testing workflow step in Appcircle",tags:["android","mobile","android","security","testing","AppSweep"]},p="AppSweep Mobile Security Testing",c={id:"workflows/android-specific-workflow-steps/appsweep-mobile-security-testing",title:"AppSweep Mobile Security Testing",description:"Learn how to use the AppSweep Mobile Security Testing workflow step in Appcircle",source:"@site/docs/workflows/android-specific-workflow-steps/appsweep-mobile-security-testing.md",sourceDirName:"workflows/android-specific-workflow-steps",slug:"/workflows/android-specific-workflow-steps/appsweep-mobile-security-testing",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/appsweep-mobile-security-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/android-specific-workflow-steps/appsweep-mobile-security-testing.md",tags:[{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/tags/mobile"},{label:"security",permalink:"/nextjs-upload-file-tryout/tags/security"},{label:"testing",permalink:"/nextjs-upload-file-tryout/tags/testing"},{label:"AppSweep",permalink:"/nextjs-upload-file-tryout/tags/app-sweep"}],version:"current",frontMatter:{title:"AppSweep Mobile Security Testing",description:"Learn how to use the AppSweep Mobile Security Testing workflow step in Appcircle",tags:["android","mobile","android","security","testing","AppSweep"]},sidebar:"mySidebar",previous:{title:"Appdome Build-2Secure for Android",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/appdome-build-to-secure-for-android"},next:{title:"Azure DevOps Bot for Detekt Report",permalink:"/nextjs-upload-file-tryout/workflows/android-specific-workflow-steps/azure-bot-for-detekt-report"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"appsweep-mobile-security-testing",children:"AppSweep Mobile Security Testing"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.guardsquare.com/appsweep-mobile-application-security-testing",children:"AppSweep Mobile Security Testing"})," is a comprehensive security solution designed to protect mobile applications from various threats and vulnerabilities. It offers advanced scanning capabilities to identify security flaws, privacy concerns, and compliance issues within mobile apps. By thoroughly analysing app code, configurations, and dependencies, AppSweep helps developers and organisations mitigate risks and ensure the integrity and safety of their mobile applications."]}),"\n",(0,s.jsxs)(t.p,{children:["The Appcircle ",(0,s.jsx)(t.strong,{children:"AppSweep Mobile Security Testing"})," step allows you to comprehensively analyse your mobile applications for potential security vulnerabilities, privacy risks, and compliance issues, thereby ensuring the robustness and integrity of your software before deployment."]}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["The workflow steps that need to be executed before running the ",(0,s.jsx)(t.strong,{children:"AppSweep Mobile Security Testing"})," workflow step, along with their respective reasons, are listed in the table below."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/#git-clone",children:"Git Clone"})}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.strong,{children:"AppSweep Mobile Security Testing"})," step requires the repository to be cloned from the Git provider before it can function properly."]})]})})]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-appsweep-mobile-security-testing_1.png"}),"\n",(0,s.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsxs)(t.p,{children:["For each component, specific input variables are required for its operation on your system. The input variables necessary for ",(0,s.jsx)(t.strong,{children:"AppSweep Mobile Security Testing"})," are as follows:"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-appsweep-mobile-security-testing_2.png"}),"\n",(0,s.jsxs)(t.admonition,{type:"danger",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Do not hard-code sensitive variables, such as tokens and API keys, directly to the parameters in the step."})}),(0,s.jsxs)(t.p,{children:["We recommend using ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/environment-variables/",children:"Environment Variables"})," groups for such sensitive variables."]})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPSWEEP_API_KEY"})}),(0,s.jsx)(t.td,{children:"Specifies the API key of the AppSweep account. You can create an API key in the API Keys section of your project settings on the AppSweep website."}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPSWEEP_VARIANT"})}),(0,s.jsxs)(t.td,{children:["Specifies the project variant to be built. This variable can also be set via the build ",(0,s.jsx)(t.a,{href:"https://docs.appcircle.io/build/build-process-management/build-profile-configuration/",children:"Configuration"}),". In Android Studio, you can find the available variants for your project. For more information, please refer to this ",(0,s.jsx)(t.a,{href:"https://developer.android.com/build/build-variants",children:"Android document"}),"."]}),(0,s.jsx)(t.td,{children:"Required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_PROJECT_PATH"})}),(0,s.jsxs)(t.td,{children:["Specifies the project path. If your project that needs to be built is ",(0,s.jsx)(t.strong,{children:"not located"})," in the root directory where it was cloned from Git, you should provide the subpath as a relative path."]}),(0,s.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsx)(t.p,{children:"The outputs that can result from the operation of this component are listed as follows:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_APPSWEEP_URL"})}),(0,s.jsx)(t.td,{children:"A direct link to the scan results is on the AppSweep website."})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-appsweep-component.git",children:(0,s.jsx)(i,{url:"https://github.com/appcircleio/appcircle-appsweep-component.git",title:"GitHub - appcircleio/appcircle-appsweep-component",description:"Contribute to appcircleio/appcircle-appsweep-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/98013d0b1f0ebc5221cf37bf1357f3ce880e325988ffc86031c828f100692ae8/appcircleio/appcircle-appsweep-component"})})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},69678:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var s=i(74848);function r(e){let{url:t}=e;return(0,s.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>p});var s=i(96540);const r={},o=s.createContext(r);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);