"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[7981],{59291:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=t(74848),s=t(28453),o=t(69678);const r={title:"Publish to Microsoft Intune",description:"Learn how to submit your app to Microsoft Intune using Appcircle\u2019s streamlined integration process.",tags:["android","ios","android integrations","android publish integrations","microsoft intune"],sidebar_position:1},a="Publish to Microsoft Intune",c={id:"publish-integrations/common-publish-integrations/send-to-microsoft-intune",title:"Publish to Microsoft Intune",description:"Learn how to submit your app to Microsoft Intune using Appcircle\u2019s streamlined integration process.",source:"@site/docs/publish-integrations/common-publish-integrations/send-to-microsoft-intune.md",sourceDirName:"publish-integrations/common-publish-integrations",slug:"/publish-integrations/common-publish-integrations/send-to-microsoft-intune",permalink:"/publish-integrations/common-publish-integrations/send-to-microsoft-intune",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/publish-integrations/common-publish-integrations/send-to-microsoft-intune.md",tags:[{label:"android",permalink:"/tags/android"},{label:"ios",permalink:"/tags/ios"},{label:"android integrations",permalink:"/tags/android-integrations"},{label:"android publish integrations",permalink:"/tags/android-publish-integrations"},{label:"microsoft intune",permalink:"/tags/microsoft-intune"}],version:"current",sidebarPosition:1,frontMatter:{title:"Publish to Microsoft Intune",description:"Learn how to submit your app to Microsoft Intune using Appcircle\u2019s streamlined integration process.",tags:["android","ios","android integrations","android publish integrations","microsoft intune"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Get Approval via Email",permalink:"/publish-integrations/common-publish-integrations/get-approval-via-email"},next:{title:"iOS Integrations Overview",permalink:"/publish-integrations/ios-publish-integrations/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Providing Microsoft Graph API Credentials for Accessing Intune",id:"providing-microsoft-graph-api-credentials-for-accessing-intune",level:3},{value:"Input Variables",id:"input-variables",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"publish-to-microsoft-intune",children:"Publish to Microsoft Intune"}),"\n",(0,n.jsxs)(i.p,{children:["This step enables you to submit your line of business apps to the ",(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/mem/intune/fundamentals/what-is-intune",children:"Microsoft Intune"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(i.p,{children:"Below are the prerequisite steps necessary for this operation, accompanied by their descriptions."}),"\n",(0,n.jsx)(i.h3,{id:"providing-microsoft-graph-api-credentials-for-accessing-intune",children:"Providing Microsoft Graph API Credentials for Accessing Intune"}),"\n",(0,n.jsxs)(i.p,{children:["To send an app from Appcircle to Microsoft Intune, you need to ",(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/graph/auth-register-app-v2",children:"register an application with the Microsoft Identity Platform"})," and provide this application's credentials."]}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsxs)(i.p,{children:["Appcircle utilizes ",(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/graph/api/resources/intune-graph-overview?view=graph-rest-1.0",children:"Microsoft Graph APIs to publish apps in Microsoft Intune"}),". Therefore, you need to grant the following permissions to the application you registered and provided credentials for on the Microsoft Identity Platform."]}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"DeviceManagementApps.Read.All"}),"\n",(0,n.jsx)(i.li,{children:"DeviceManagementApps.ReadWrite.All"}),"\n"]}),(0,n.jsxs)(i.p,{children:["You can find detailed information about granting permissions ",(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-call-a-web-api-with-curl?tabs=dotnet6&pivots=no-api#add-application-permissions-to-allow-access-to-a-web-api",children:"here"}),"."]})]}),"\n",(0,n.jsx)(i.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,n.jsx)(i.p,{children:"Below are the parameters necessary for this step's operation, along with their descriptions."}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/send-to-microsoft-intune-inputs.png"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Variable Name"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Status"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"$AC_INTUNE_AUTH_URL"})}),(0,n.jsxs)(i.td,{children:["Specifies the authorization URL generated by the application you created on the Microsoft Identity Platform. This URL should be in the following format: ",(0,n.jsx)(i.code,{children:"https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token"}),". More details ",(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-call-a-web-api-with-curl?tabs=dotnet6&pivots=no-api#register-the-web-api",children:"here"}),"."]}),(0,n.jsx)(i.td,{children:"Required"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"$AC_INTUNE_CLIENT_ID"})}),(0,n.jsxs)(i.td,{children:["Specifies the ",(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-call-a-web-api-with-curl?tabs=dotnet6&pivots=no-api#register-the-web-api",children:"Application (client) ID"})," which uniquely identifies your application in the Microsoft cloud ecosystem, across all tenants."]}),(0,n.jsx)(i.td,{children:"Required"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"$AC_INTUNE_CLIENT_SECRET"})}),(0,n.jsxs)(i.td,{children:["A client secret, sometimes referred to as an application password, is a string value your app can use to identify itself. Learn how to create one ",(0,n.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/graph/auth-register-app-v2#option-2-add-a-client-secret",children:"here"}),"."]}),(0,n.jsx)(i.td,{children:"Required"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"$AC_INTUNE_APP_ID"})}),(0,n.jsx)(i.td,{children:"If you already have a published app in Microsoft Intune and want to use this step to update that app, you must specify this parameter. Otherwise, the step will create a new app in Microsoft Intune."}),(0,n.jsx)(i.td,{children:"Optional"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"$AC_INTUNE_PUBLISHER_NAME"})}),(0,n.jsx)(i.td,{children:"This parameter is used to specify the publisher name for the selected version. By default, it takes the name of your organization or the email address of the user initiating the step."}),(0,n.jsx)(i.td,{children:"Optional"})]})]})]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-publish-send-to-intune-ios",children:(0,n.jsx)(t,{url:"https://github.com/appcircleio/appcircle-publish-send-to-intune-ios",title:"GitHub - appcircleio/appcircle-publish-send-to-intune-ios: sends ipa to intune store",description:"sends ipa to intune store. Contribute to appcircleio/appcircle-publish-send-to-intune-ios development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/792bab833fa43e38e0feda9d519212d9d6454d62829481257cbbbd18e3a3018c/appcircleio/appcircle-publish-send-to-intune-ios"})}),"\n",(0,n.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-publish-send-to-intune-android",children:(0,n.jsx)(t,{url:"https://github.com/appcircleio/appcircle-publish-send-to-intune-android",title:"GitHub - appcircleio/appcircle-publish-send-to-intune-android: sends aab/apk to intune store",description:"sends aab/apk to intune store. Contribute to appcircleio/appcircle-publish-send-to-intune-android development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/fa4c1dea9d4d3538925b0879856663e9de7a7b2f2fd0f1404019d051d55b18bf/appcircleio/appcircle-publish-send-to-intune-android"})})]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},69678:(e,i,t)=>{t.d(i,{A:()=>s});t(96540);var n=t(74848);function s(e){let{url:i}=e;return(0,n.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);