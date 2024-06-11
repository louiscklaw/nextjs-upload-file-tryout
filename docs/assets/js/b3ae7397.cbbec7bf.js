"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[74386],{56149:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var s=i(74848),n=i(28453),l=i(69678),o=i(70344);const r={title:"Publish Settings",description:"Configure the publish settings for your app in Appcircle",tags:["publish settings","publish","settings"]},a="Publish Settings",u={id:"publish-module/publish-settings/index",title:"Publish Settings",description:"Configure the publish settings for your app in Appcircle",source:"@site/docs/publish-module/publish-settings/index.md",sourceDirName:"publish-module/publish-settings",slug:"/publish-module/publish-settings/",permalink:"/nextjs-upload-file-tryout/publish-module/publish-settings/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/publish-module/publish-settings/index.md",tags:[{label:"publish settings",permalink:"/nextjs-upload-file-tryout/tags/publish-settings"},{label:"publish",permalink:"/nextjs-upload-file-tryout/tags/publish"},{label:"settings",permalink:"/nextjs-upload-file-tryout/tags/settings"}],version:"current",frontMatter:{title:"Publish Settings",description:"Configure the publish settings for your app in Appcircle",tags:["publish settings","publish","settings"]},sidebar:"mySidebar",previous:{title:"Resign Binary",permalink:"/nextjs-upload-file-tryout/publish-module/publish-information/resign-binary"},next:{title:"Publish Variables",permalink:"/nextjs-upload-file-tryout/publish-module/publish-variables/"}},h={},d=[{value:"Auto Publish",id:"auto-publish",level:2},{value:"Select a Pool",id:"select-a-pool",level:2},{value:"Publish Variables",id:"publish-variables",level:2},{value:"Store Credentials",id:"store-credentials",level:2}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"publish-settings",children:"Publish Settings"}),"\n","\n",(0,s.jsxs)(t.p,{children:["When a build is completed on the Build module and its artifacts are distributed to the Publish module, we can start the publish process to the stores using the ",(0,s.jsx)(t.strong,{children:"Auto Publish"})," toggle in ",(0,s.jsx)(t.strong,{children:"Settings"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Your configured publish flow will be executed automatically when you enable ",(0,s.jsx)(t.strong,{children:"Auto Publish"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also select a runner pool from the ",(0,s.jsx)(t.strong,{children:"SELECT A POOL"})," dropdown list."]}),"\n",(0,s.jsx)(l.A,{url:"https://cdn.appcircle.io/docs/assets/publish-settings.png"}),"\n",(0,s.jsx)(t.p,{children:'"Default Intel Pool" and "Default M1 Pool" are Appcircle cloud-hosted pools and only available for the cloud services.'}),"\n",(0,s.jsx)(t.p,{children:"If there are any self-hosted pools in your organization, you can also select them from the list. Self-hosted Appcircle users will only see the self-hosted pools in this list."}),"\n",(0,s.jsx)(o.A,{url:"/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-pools",children:(0,s.jsx)(t.p,{children:"Self-hosted Pools"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["If group or variable definitions have been made in ",(0,s.jsx)(t.strong,{children:"Publish Variables"}),", you will see the list of variable groups in ",(0,s.jsx)(t.strong,{children:"Settings"}),", and you can select one or more of them to use in your publish flow."]})}),"\n",(0,s.jsx)(t.h2,{id:"auto-publish",children:"Auto Publish"}),"\n",(0,s.jsx)(t.p,{children:"This switch, when enabled, automatically starts the publishing process for new app versions as they become available."}),"\n",(0,s.jsx)(t.h2,{id:"select-a-pool",children:"Select a Pool"}),"\n",(0,s.jsx)(t.p,{children:"You can select a runner pool from the dropdown list to execute the publish flow."}),"\n",(0,s.jsx)(t.p,{children:"There are two default pools available for cloud services:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Default Intel Pool"}),"\n",(0,s.jsx)(t.li,{children:"Default M1 Pool"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Self-hosted Appcircle users will see their self-hosted pools in this list."}),"\n",(0,s.jsx)(t.h2,{id:"publish-variables",children:"Publish Variables"}),"\n",(0,s.jsx)(t.p,{children:"Publish Variables are key-value pairs that can be used to store configuration settings, credentials, and other data required during the publish process. You can add new variables directly in the Publish Variables section without the need for an additional menu or button."}),"\n",(0,s.jsx)(t.p,{children:"For detailed information on Publish Variables, follow the link below."}),"\n",(0,s.jsx)(o.A,{url:"/publish-module/publish-variables",children:(0,s.jsx)(t.p,{children:"Publish Variables"})}),"\n",(0,s.jsx)(t.h2,{id:"store-credentials",children:"Store Credentials"}),"\n",(0,s.jsx)(t.p,{children:"Store credentials are the connection details for the stores that you will publish your app to."}),"\n",(0,s.jsx)(t.p,{children:"For detailed information on store connections, follow the links below."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Store"}),(0,s.jsx)(t.th,{children:"Connection"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"App Store"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/nextjs-upload-file-tryout/account/my-organization/api-integrations/adding-an-app-store-connect-api-key",children:"Adding an App Store Connect API Key"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Google Play"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/nextjs-upload-file-tryout/account/my-organization/api-integrations/adding-google-play-service-account",children:"Adding Google Play Service Account"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Huawei AppGallery"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/account/my-organization/api-integrations/adding-huawei-api-key",children:"Adding Huawei API Key"})})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},70344:(e,t,i)=>{i.d(t,{A:()=>u});var s,n,l=i(96540);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)({}).hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},o.apply(null,arguments)}const r=e=>{let{title:t,titleId:i,...r}=e;return l.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":i},r),t?l.createElement("title",{id:i},t):null,s||(s=l.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),n||(n=l.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var a=i(74848);function u(e){let{children:t,url:i}=e;return(0,a.jsxs)("a",{href:i,className:"content-ref-card",children:[(0,a.jsx)(r,{title:"File Icon",className:"file-icon"}),t]})}},69678:(e,t,i)=>{i.d(t,{A:()=>n});i(96540);var s=i(74848);function n(e){let{url:t}=e;return(0,s.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var s=i(96540);const n={},l=s.createContext(n);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);