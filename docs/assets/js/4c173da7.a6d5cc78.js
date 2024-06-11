"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[13649],{85258:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=i(74848),n=i(28453),s=i(69678);const o={title:"Setting Up Appcircle Enterprise App Store in Your Pipeline",sidebar_label:"Enterprise App Store",description:"Overview of Azure DevOps Enterprise App Store Extension",tags:["testing-distribution","overview","concepts","app store","internal testing","beta testing","binary distribution","ipa distribution","apk distribution"],sidebar_position:2},a=void 0,p={id:"marketplace/visual-studio-marketplace/enterprise-app-store/index",title:"Setting Up Appcircle Enterprise App Store in Your Pipeline",description:"Overview of Azure DevOps Enterprise App Store Extension",source:"@site/docs/marketplace/visual-studio-marketplace/enterprise-app-store/index.md",sourceDirName:"marketplace/visual-studio-marketplace/enterprise-app-store",slug:"/marketplace/visual-studio-marketplace/enterprise-app-store/",permalink:"/nextjs-upload-file-tryout/marketplace/visual-studio-marketplace/enterprise-app-store/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/marketplace/visual-studio-marketplace/enterprise-app-store/index.md",tags:[{label:"testing-distribution",permalink:"/nextjs-upload-file-tryout/tags/testing-distribution"},{label:"overview",permalink:"/nextjs-upload-file-tryout/tags/overview"},{label:"concepts",permalink:"/nextjs-upload-file-tryout/tags/concepts"},{label:"app store",permalink:"/nextjs-upload-file-tryout/tags/app-store"},{label:"internal testing",permalink:"/nextjs-upload-file-tryout/tags/internal-testing"},{label:"beta testing",permalink:"/nextjs-upload-file-tryout/tags/beta-testing"},{label:"binary distribution",permalink:"/nextjs-upload-file-tryout/tags/binary-distribution"},{label:"ipa distribution",permalink:"/nextjs-upload-file-tryout/tags/ipa-distribution"},{label:"apk distribution",permalink:"/nextjs-upload-file-tryout/tags/apk-distribution"}],version:"current",sidebarPosition:2,frontMatter:{title:"Setting Up Appcircle Enterprise App Store in Your Pipeline",sidebar_label:"Enterprise App Store",description:"Overview of Azure DevOps Enterprise App Store Extension",tags:["testing-distribution","overview","concepts","app store","internal testing","beta testing","binary distribution","ipa distribution","apk distribution"],sidebar_position:2},sidebar:"mySidebar",previous:{title:"Testing Distribution",permalink:"/nextjs-upload-file-tryout/marketplace/visual-studio-marketplace/testing-distribution/"},next:{title:"Best Practices",permalink:"/nextjs-upload-file-tryout/best-practices/"}},l={},c=[{value:"How to Install the Appcircle Enterprise Store Task in Your Pipeline",id:"how-to-install-the-appcircle-enterprise-store-task-in-your-pipeline",level:3},{value:"Leveraging Environment Variables",id:"leveraging-environment-variables",level:2},{value:"References",id:"references",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Appcircle Enterprise Mobile App Store serves as your private mobile app store, allowing access to in-house apps through a customizable mobile storefront. The Appcircle Enterprise Mobile App Store extension enables you to upload your app to your personalized app store within Appcircle."}),"\n","\n",(0,r.jsx)(t.h3,{id:"how-to-install-the-appcircle-enterprise-store-task-in-your-pipeline",children:"How to Install the Appcircle Enterprise Store Task in Your Pipeline"}),"\n",(0,r.jsx)(t.p,{children:"In order to install Appcircle Enterprise Store task extension, follow these steps;"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'Go to your pipeline, click "Edit" button on the top right corner'}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/testing-distribution-azure-pipeline-edit.png"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'Inside your YAML file, search for "Appcircle Enterprise Store" task extension'}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/ac-app-store-azure-extension-task.png"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'Complete the necessary input fields and then click the "Add" button.'}),"\n",(0,r.jsxs)(t.p,{children:["3.1. You can learn more about getting your access token ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/appcircle-api/api-authentication#generatingmanaging-the-personal-api-tokens",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"You should add this task extension after completing your build steps."})}),"\n",(0,r.jsxs)(t.p,{children:["After filling out the required fields, the ",(0,r.jsx)(t.code,{children:"AppcircleEnterpriseStore@0"})," task will appear in your pipeline steps as shown below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'- task: AppcircleDistribute@0\n  inputs:\n    accessToken: "APPCIRCLE_ACCESS_TOKEN" # Your Appcircle Access Token\n    profileId: "APPCIRCLE_PROFILE_ID" # ID of your Appcircle Distribution Profile\n    appPath: "BUILD_PATH" # Path to your iOS .ipa or .xcarchive, or Android APK or App Bundle\n    message: "Sample Message" # Custom message for your testers\n'})}),"\n",(0,r.jsx)(t.h2,{id:"leveraging-environment-variables",children:"Leveraging Environment Variables"}),"\n",(0,r.jsx)(t.p,{children:"Utilize environment variables seamlessly by substituting the parameters with $(VARIABLE_NAME) in your task inputs. The extension automatically retrieves values from the specified environment variables within your pipeline."}),"\n",(0,r.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["For details on generating an Appcircle Personal Access Token, visit ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/appcircle-api/api-authentication#generatingmanaging-the-personal-api-tokens",children:"Generating/Managing Personal API Tokens"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For more detailed instructions and support, visit the ",(0,r.jsx)(t.a,{href:"https://appcircle.io/enterprise-app-store",children:"Appcircle Enterprise App Store documentation"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},69678:(e,t,i)=>{i.d(t,{A:()=>n});i(96540);var r=i(74848);function n(e){let{url:t}=e;return(0,r.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var r=i(96540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);