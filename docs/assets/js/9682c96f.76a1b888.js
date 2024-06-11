"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[86252],{38880:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var i=t(74848),n=t(28453),r=t(69678),a=t(70344);const s={title:"App Information from Google Play",description:"Check status of an app releases in Google Play Console.",tags:["android","approval","google play"],sidebar_position:1},l="App Information from Google Play",p={id:"publish-integrations/android-publish-integrations/app-information-from-google-play",title:"App Information from Google Play",description:"Check status of an app releases in Google Play Console.",source:"@site/docs/publish-integrations/android-publish-integrations/app-information-from-google-play.md",sourceDirName:"publish-integrations/android-publish-integrations",slug:"/publish-integrations/android-publish-integrations/app-information-from-google-play",permalink:"/publish-integrations/android-publish-integrations/app-information-from-google-play",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/publish-integrations/android-publish-integrations/app-information-from-google-play.md",tags:[{label:"android",permalink:"/tags/android"},{label:"approval",permalink:"/tags/approval"},{label:"google play",permalink:"/tags/google-play"}],version:"current",sidebarPosition:1,frontMatter:{title:"App Information from Google Play",description:"Check status of an app releases in Google Play Console.",tags:["android","approval","google play"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Android Integrations Overview",permalink:"/publish-integrations/android-publish-integrations/"},next:{title:"Get Approval From Google Play",permalink:"/publish-integrations/android-publish-integrations/get-approval-from-google-play"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Input Variables",id:"input-variables",level:2},{value:"Output Variables",id:"output-variables",level:2}];function u(e){const o={a:"a",admonition:"admonition",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,n.R)(),...e.components},{ExternalUrlRef:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"app-information-from-google-play",children:"App Information from Google Play"}),"\n",(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.strong,{children:"App Information from Google Play"})," step checks the status of the app releases in the ",(0,i.jsx)(o.a,{href:"https://play.google.com/console",children:"Google Play Console"}),". This allows you to monitor the progress of your app."]}),"\n",(0,i.jsx)(o.admonition,{type:"tip",children:(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.strong,{children:"App Information from Google Play"})," step monitors the general status information of the app on Google Play. It is not limited to the specific version you sent."]})}),"\n",(0,i.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/android-publishflow-app-info-from-google-play-1.png"}),"\n",(0,i.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(o.p,{children:["To run the ",(0,i.jsx)(o.strong,{children:"App Information from Google Play"})," step, you need to have previously uploaded at least one version of the app to the Google Play Console. However, if you want to monitor the app information after publishing it to Google Play, you can add the ",(0,i.jsx)(o.a,{href:"/publish-integrations/android-publish-integrations/publish-to-google-play",children:(0,i.jsx)(o.strong,{children:"Publish to Google Play"})})," step before this step in the publish flow."]}),"\n",(0,i.jsx)(o.p,{children:"You also need to have a Google Service Account and its key as a JSON file. Please refer to the following document for more information about service accounts:"}),"\n",(0,i.jsx)(a.A,{url:"/account/my-organization/api-integrations/adding-google-play-service-account",children:(0,i.jsx)(o.p,{children:"Adding Google Play Service Accounts"})}),"\n",(0,i.jsxs)(o.p,{children:["After completing the integration with Google Play Services, go to ",(0,i.jsx)(o.a,{href:"/publish-module/publish-settings",children:"Publishing Settings"}),". In the ",(0,i.jsx)(o.a,{href:"/publish-module/publish-settings#store-credentials",children:"Store Credential"})," section, select the Google Play Store API Key you uploaded, from the drop-down list."]}),"\n",(0,i.jsx)(o.admonition,{type:"info",children:(0,i.jsxs)(o.p,{children:["If you are using ",(0,i.jsx)(o.a,{href:"/publish-module/publish-settings#publish-variables",children:"Publish Variables"}),", you should select them in the ",(0,i.jsx)(o.a,{href:"/publish-module/publish-settings",children:"Publishing Settings"})," window."]})}),"\n",(0,i.jsx)(o.h2,{id:"input-variables",children:"Input Variables"}),"\n",(0,i.jsxs)(o.p,{children:["No input variables are required for the ",(0,i.jsx)(o.strong,{children:"App Information from Google Play"})," step. It will retrieve information from Google Play, based on the app you are running and the ",(0,i.jsx)(o.a,{href:"/publish-module/publish-settings#store-credentials",children:"Store Credential"})," you select in ",(0,i.jsx)(o.a,{href:"/publish-module/publish-settings",children:"Publishing Settings"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"output-variables",children:"Output Variables"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"App Information from Google Play"})," step does not produce any output variables. However, you can check the logs to see detailed release statuses for your app."]}),"\n",(0,i.jsx)(o.hr,{}),"\n",(0,i.jsx)(o.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://github.com/appcircleio/appcircle-publish-playstore-app-information.git",children:(0,i.jsx)(t,{url:"https://github.com/appcircleio/appcircle-publish-playstore-app-information.git",title:"GitHub - appcircleio/appcircle-publish-playstore-app-information: Gets package informatiom from Google Play Store for Publish Module",description:"Gets package informatiom from Google Play Store for Publish Module - appcircleio/appcircle-publish-playstore-app-information",image:"https://opengraph.githubassets.com/43ab2d0dd8d423b33efc09c0a72fc86288a04360dc42e15e2687b518e33cd677/appcircleio/appcircle-publish-playstore-app-information"})})})]})}function d(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},70344:(e,o,t)=>{t.d(o,{A:()=>p});var i,n,r=t(96540);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}const s=e=>{let{title:o,titleId:t,...s}=e;return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":t},s),o?r.createElement("title",{id:t},o):null,i||(i=r.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),n||(n=r.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var l=t(74848);function p(e){let{children:o,url:t}=e;return(0,l.jsxs)("a",{href:t,className:"content-ref-card",children:[(0,l.jsx)(s,{title:"File Icon",className:"file-icon"}),o]})}},69678:(e,o,t)=>{t.d(o,{A:()=>n});t(96540);var i=t(74848);function n(e){let{url:o}=e;return(0,i.jsx)("img",{className:"screenshot",src:o})}},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>s});var i=t(96540);const n={},r=i.createContext(n);function a(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);