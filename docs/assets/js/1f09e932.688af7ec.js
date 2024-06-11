"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[42654],{22492:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(74848),s=i(28453),r=i(69678);const o={title:"App Information from App Store",description:"Fetch and display your app's current listing information directly from the App Store to ensure all details are correct and up to date.",tags:["app information","app store","app store connect","testflight","app store version"],sidebar_position:1},p="App Information from App Store",a={id:"publish-integrations/ios-publish-integrations/app-information-app-store",title:"App Information from App Store",description:"Fetch and display your app's current listing information directly from the App Store to ensure all details are correct and up to date.",source:"@site/docs/publish-integrations/ios-publish-integrations/app-information-app-store.md",sourceDirName:"publish-integrations/ios-publish-integrations",slug:"/publish-integrations/ios-publish-integrations/app-information-app-store",permalink:"/nextjs-upload-file-tryout/publish-integrations/ios-publish-integrations/app-information-app-store",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/publish-integrations/ios-publish-integrations/app-information-app-store.md",tags:[{label:"app information",permalink:"/nextjs-upload-file-tryout/tags/app-information"},{label:"app store",permalink:"/nextjs-upload-file-tryout/tags/app-store"},{label:"app store connect",permalink:"/nextjs-upload-file-tryout/tags/app-store-connect"},{label:"testflight",permalink:"/nextjs-upload-file-tryout/tags/testflight"},{label:"app store version",permalink:"/nextjs-upload-file-tryout/tags/app-store-version"}],version:"current",sidebarPosition:1,frontMatter:{title:"App Information from App Store",description:"Fetch and display your app's current listing information directly from the App Store to ensure all details are correct and up to date.",tags:["app information","app store","app store connect","testflight","app store version"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"iOS Integrations Overview",permalink:"/nextjs-upload-file-tryout/publish-integrations/ios-publish-integrations/"},next:{title:"Send to App Store",permalink:"/nextjs-upload-file-tryout/publish-integrations/ios-publish-integrations/send-to-app-store"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"app-information-from-app-store",children:"App Information from App Store"}),"\n",(0,n.jsxs)(t.p,{children:["This step enables you to view app version information from both ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/testflight/",children:(0,n.jsx)(t.strong,{children:"TestFlight"})})," and the ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/appstoreconnectapi/app_store",children:(0,n.jsx)(t.strong,{children:"App Store"})})," on a single screen, including the version you intend to submit. Upon running this step, it displays the latest version information from TestFlight and the App Store as follows:"]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/BE2917-infoDetail.png"}),"\n",(0,n.jsx)(t.p,{children:"Below are brief descriptions of the information provided on the App Information screen."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Information"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Additional Info"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Bundle ID"})}),(0,n.jsxs)(t.td,{children:["The ",(0,n.jsx)(t.code,{children:"bundleIds"})," resource represents the app's unique identifier that you can register, modify, and delete."]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/appstoreconnectapi/bundle_ids",children:"Apple's documentation"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"App Icon"})}),(0,n.jsx)(t.td,{children:"Specifies the icon that will appear for the app on the selected platform."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://developer.apple.com/design/human-interface-guidelines/app-icons",children:"Apple App Icon documentation"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"App Name"})}),(0,n.jsx)(t.td,{children:"The display name of the application on the selected platform."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Version"})}),(0,n.jsxs)(t.td,{children:["The current available app versions. For example, ",(0,n.jsx)(t.code,{children:"1.0.5"}),"."]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Build Number"})}),(0,n.jsxs)(t.td,{children:["Version code information of your application. For example, ",(0,n.jsx)(t.code,{children:"1.0.5(1)"}),"."]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Uploaded Date"})}),(0,n.jsxs)(t.td,{children:["Date the application was first uploaded. The ",(0,n.jsx)(t.strong,{children:"Release Candidate"})," version is based on the date it was uploaded to the ",(0,n.jsx)(t.strong,{children:"Publish module"}),"."]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Expire Date"})}),(0,n.jsxs)(t.td,{children:["The expiration date of the application version in TestFlight and the App Store. The ",(0,n.jsx)(t.strong,{children:"Release Candidate"})," version does not have an expiration date."]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Release Type"})}),(0,n.jsxs)(t.td,{children:["Indicates the release type of your application. For example, if you have an application released to the market, you will see the type as ",(0,n.jsx)(t.strong,{children:"After Approval"}),"."]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Processing State"})}),(0,n.jsxs)(t.td,{children:["This indicates the status of your application; it will appear as ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Valid"})})," when there are no issues. For instance, if your application has expired in the TestFlight environment, the state will be ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Expire"})}),". If the application is rejected, the state will be ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Reject"})}),"."]}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Make sure the ",(0,n.jsx)(t.a,{href:"https://docs.appcircle.io/account/adding-an-app-store-connect-api-key#linking-appcircle-with-app-store-connect",children:(0,n.jsx)(t.strong,{children:"App Store Connect API Key"})})," is added to Appcircle and selected in ",(0,n.jsx)(t.a,{href:"https://docs.appcircle.io/publish-module/#publish-settings",children:(0,n.jsx)(t.strong,{children:"Publish Settings"})}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:["This step does not depend on any other steps to function. However, it is advisable to use it as the initial step in your ",(0,n.jsx)(t.strong,{children:"Publish Flow"}),"."]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/BE2917-appInfo.png"}),"\n",(0,n.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,n.jsx)(t.p,{children:"This step does not need any input variable."}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsxs)(t.p,{children:["This step requires only the ",(0,n.jsx)(t.a,{href:"https://docs.appcircle.io/publish-integrations/ios-publish-integrations/send-to-app-store#adding-an-app-store-connect-api-key-recommended-method",children:(0,n.jsx)(t.strong,{children:"App Store Connect API Key"})})," credentials. Ensure this API key is configured in Appcircle and selected for the appropriate flow."]})}),"\n",(0,n.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-publish-appstore-app-information",children:(0,n.jsx)(i,{url:"https://github.com/appcircleio/appcircle-publish-appstore-app-information",title:"GitHub - appcircleio/appcircle-publish-appstore-app-information: gets package details from appstore",description:"gets package details from appstore. Contribute to appcircleio/appcircle-publish-appstore-app-information development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/2ab42510556176dcb5d753d9484c6625fd75b401cd93d5fc29dc0c9f6ec08038/appcircleio/appcircle-publish-appstore-app-information"})})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},69678:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var n=i(74848);function s(e){let{url:t}=e;return(0,n.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>p});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);