"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[71201],{24694:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(74848),n=t(28453),r=t(69678);const o={title:"Setting Up Appcircle Distribute Task in Azure DevOps Pipeline",sidebar_label:"Testing Distribution",description:"Overview of self-hosted Appcircle and related concepts",tags:["testing-distribution","ipa distribution","apk distribution","binary distribution"],sidebar_position:1},a=void 0,l={id:"marketplace/visual-studio-marketplace/testing-distribution/index",title:"Setting Up Appcircle Distribute Task in Azure DevOps Pipeline",description:"Overview of self-hosted Appcircle and related concepts",source:"@site/docs/marketplace/visual-studio-marketplace/testing-distribution/index.md",sourceDirName:"marketplace/visual-studio-marketplace/testing-distribution",slug:"/marketplace/visual-studio-marketplace/testing-distribution/",permalink:"/nextjs-upload-file-tryout/marketplace/visual-studio-marketplace/testing-distribution/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/marketplace/visual-studio-marketplace/testing-distribution/index.md",tags:[{label:"testing-distribution",permalink:"/nextjs-upload-file-tryout/tags/testing-distribution"},{label:"ipa distribution",permalink:"/nextjs-upload-file-tryout/tags/ipa-distribution"},{label:"apk distribution",permalink:"/nextjs-upload-file-tryout/tags/apk-distribution"},{label:"binary distribution",permalink:"/nextjs-upload-file-tryout/tags/binary-distribution"}],version:"current",sidebarPosition:1,frontMatter:{title:"Setting Up Appcircle Distribute Task in Azure DevOps Pipeline",sidebar_label:"Testing Distribution",description:"Overview of self-hosted Appcircle and related concepts",tags:["testing-distribution","ipa distribution","apk distribution","binary distribution"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Visual Studio Marketplace",permalink:"/nextjs-upload-file-tryout/marketplace/visual-studio-marketplace/"},next:{title:"Enterprise App Store",permalink:"/nextjs-upload-file-tryout/marketplace/visual-studio-marketplace/enterprise-app-store/"}},p={},c=[{value:"How to Add the Appcircle Distribute Task Extension to Your Pipeline",id:"how-to-add-the-appcircle-distribute-task-extension-to-your-pipeline",level:3},{value:"Discover Extension",id:"discover-extension",level:3},{value:"Leveraging Environment Variables",id:"leveraging-environment-variables",level:2},{value:"References",id:"references",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"The Appcircle distribute extension allows users to upload their apps and start distribution to test groups or individuals."}),"\n","\n",(0,s.jsx)(i.h3,{id:"how-to-add-the-appcircle-distribute-task-extension-to-your-pipeline",children:"How to Add the Appcircle Distribute Task Extension to Your Pipeline"}),"\n",(0,s.jsx)(i.p,{children:"To install the Appcircle Distribute Task Extension, follow these steps:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:'Go to your pipeline, click "Edit" button on the top right corner'}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/testing-distribution-azure-pipeline-edit.png"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Search for the \u201cAppcircle distribute\u201d task extension within your ",(0,s.jsx)(i.code,{children:"YAML"})," file."]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/testing-distribution-azure-extension-task.png"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Fill out the necessary input fields and click the ",(0,s.jsx)(i.strong,{children:"Add"})," button."]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/testing-distribution-azure-extension-task-detail.png"}),"\n",(0,s.jsxs)(i.p,{children:["3.1. You can learn more about getting your access token ",(0,s.jsx)(i.a,{href:"/appcircle-api/api-authentication#generatingmanaging-the-personal-api-tokens",children:"here"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["3.2. Find out how to create a distribution profile ",(0,s.jsx)(i.a,{href:"/distribute/create-or-select-a-distribution-profile",children:"here"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{title:"Build Steps Order",type:"caution",children:(0,s.jsx)(i.p,{children:"You should add this task extension after completing your build steps."})}),"\n",(0,s.jsxs)(i.p,{children:["After filling out the required fields, the ",(0,s.jsx)(i.code,{children:"AppcircleEnterpriseStore@0"})," task will appear in your pipeline steps as shown below:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:'- task: AppcircleDistribute@0\n  inputs:\n    accessToken: "APPCIRCLE_ACCESS_TOKEN" # Your Appcircle Access Token\n    profileId: "APPCIRCLE_PROFILE_ID" # ID of your Appcircle Distribution Profile\n    appPath: "BUILD_PATH" # Path to your iOS .ipa or .xcarchive, or Android APK or App Bundle\n    message: "Sample Message" # Custom message for your testers\n'})}),"\n",(0,s.jsx)(i.h3,{id:"discover-extension",children:"Discover Extension"}),"\n",(0,s.jsxs)(i.p,{children:["You can discover more about this extension and install it by:\n",(0,s.jsx)(i.a,{href:"https://marketplace.visualstudio.com/items?itemName=Appcircle.build-release-task",children:(0,s.jsx)(t,{url:"https://marketplace.visualstudio.com/items?itemName=Appcircle.build-release-task",title:"Testing Distribution - Visual Studio Marketplace",description:"Extension for Azure DevOps - Appcircle Test Distribution allows you to distribute your mobile apps to your test groups",image:"https://appcircle.gallerycdn.vsassets.io/extensions/appcircle/build-release-task/0.0.51/1716569750469/Microsoft.VisualStudio.Services.Icons.Default"})})]}),"\n",(0,s.jsx)(i.h2,{id:"leveraging-environment-variables",children:"Leveraging Environment Variables"}),"\n",(0,s.jsx)(i.p,{children:"Utilize environment variables seamlessly by substituting the parameters with $(VARIABLE_NAME) in your task inputs. The extension automatically retrieves values from the specified environment variables within your pipeline."}),"\n",(0,s.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["For details on generating an Appcircle Personal Access Token, visit ",(0,s.jsx)(i.a,{href:"/appcircle-api/api-authentication#generatingmanaging-the-personal-api-tokens",children:"Generating/Managing Personal API Tokens"})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["To create or learn more about Appcircle testing and distribution profiles, please refer to ",(0,s.jsx)(i.a,{href:"/distribute/create-or-select-a-distribution-profile",children:"Creating or Selecting a Distribution Profile"})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},69678:(e,i,t)=>{t.d(i,{A:()=>n});t(96540);var s=t(74848);function n(e){let{url:i}=e;return(0,s.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var s=t(96540);const n={},r=s.createContext(n);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);