"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[25005],{96342:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>d});var s=o(74848),i=o(28453),l=o(69678),r=o(70344);const n={title:"Get Approval From Google Play",description:"Ensure your app release is approved by checking its status on the Google Play Console.",tags:["android","approve","google play"],sidebar_position:2},a="Get Approval From Google Play",p={id:"publish-integrations/android-publish-integrations/get-approval-from-google-play",title:"Get Approval From Google Play",description:"Ensure your app release is approved by checking its status on the Google Play Console.",source:"@site/docs/publish-integrations/android-publish-integrations/get-approval-from-google-play.md",sourceDirName:"publish-integrations/android-publish-integrations",slug:"/publish-integrations/android-publish-integrations/get-approval-from-google-play",permalink:"/nextjs-upload-file-tryout/publish-integrations/android-publish-integrations/get-approval-from-google-play",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/publish-integrations/android-publish-integrations/get-approval-from-google-play.md",tags:[{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"},{label:"approve",permalink:"/nextjs-upload-file-tryout/tags/approve"},{label:"google play",permalink:"/nextjs-upload-file-tryout/tags/google-play"}],version:"current",sidebarPosition:2,frontMatter:{title:"Get Approval From Google Play",description:"Ensure your app release is approved by checking its status on the Google Play Console.",tags:["android","approve","google play"],sidebar_position:2},sidebar:"mySidebar",previous:{title:"App Information from Google Play",permalink:"/nextjs-upload-file-tryout/publish-integrations/android-publish-integrations/app-information-from-google-play"},next:{title:"Publish to Google Play",permalink:"/nextjs-upload-file-tryout/publish-integrations/android-publish-integrations/publish-to-google-play"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Input Variables",id:"input-variables",level:2},{value:"Output Variables",id:"output-variables",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{ExternalUrlRef:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"get-approval-from-google-play",children:"Get Approval From Google Play"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Get Approval From Google Play"})," step ensures that your app release is approved by checking its status on the ",(0,s.jsx)(t.a,{href:"https://play.google.com/console",children:"Google Play Console"}),". This allows you to monitor the progress of your submission and take any necessary actions to address any issues or concerns that may arise during the review process."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["The Publish flow steps that need to be executed before running the ",(0,s.jsx)(t.strong,{children:"Get Approval via Email"})," step, along with their respective reasons, are listed in the table below:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/publish-integrations/android-publish-integrations/publish-to-google-play",children:(0,s.jsx)(t.strong,{children:"Publish to Google Play"})})}),(0,s.jsx)(t.td,{children:"The app must be published to Google Play before checking the status of the app version in the Google Play Console."})]})})]}),"\n",(0,s.jsx)(l.A,{url:"https://cdn.appcircle.io/docs/assets/android-publishflow-approve-from-google-play-0.png"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["If you have previously submitted this app version to the Google Play Console, you do not need to add the ",(0,s.jsx)(t.strong,{children:"Publish to Google Play"})," step."]})}),"\n",(0,s.jsx)(t.p,{children:"You also need to have a Google Service Account and its key as a JSON file. Please refer to the following document for more information about service accounts:"}),"\n",(0,s.jsx)(r.A,{url:"/account/my-organization/api-integrations/adding-google-play-service-account",children:(0,s.jsx)(t.p,{children:"Adding Google Play Service Accounts"})}),"\n",(0,s.jsxs)(t.p,{children:["After completing the integration with Google Play Services, go to ",(0,s.jsx)(t.a,{href:"/publish-module/publish-settings",children:"Publishing Settings"}),". In the ",(0,s.jsx)(t.a,{href:"/publish-module/publish-settings#store-credentials",children:(0,s.jsx)(t.code,{children:"Store Credential"})})," section, select the Google Play Store API Key you uploaded, from the drop-down list."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["If you are using ",(0,s.jsx)(t.a,{href:"/publish-module/publish-settings#publish-variables",children:"Publish Variables"}),", you should select them in the ",(0,s.jsx)(t.a,{href:"/publish-module/publish-settings",children:"Publishing Settings"})," window."]})}),"\n",(0,s.jsx)(t.h2,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(t.p,{children:"The parameters required for this step to work as expected are listed below:"}),"\n",(0,s.jsx)(l.A,{url:"https://cdn.appcircle.io/docs/assets/android-publishflow-approve-from-google-play-1.png"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_TRACK_TO_CHECK"})}),(0,s.jsxs)(t.td,{children:["Select a release track to check the app's status. It is recommended to choose the track to which you have sent the app in the previous steps. Options: ",(0,s.jsx)(t.code,{children:"alpha"}),", ",(0,s.jsx)(t.code,{children:"beta"}),", ",(0,s.jsx)(t.code,{children:"production"}),", and ",(0,s.jsx)(t.code,{children:"internal"}),"."]}),(0,s.jsx)(t.td,{children:"Optional"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"$AC_ACCEPTED_STATUSES"})}),(0,s.jsxs)(t.td,{children:["Customize the statuses to be accepted as passed by using commas. You can use statuses such as ",(0,s.jsx)(t.code,{children:"completed"}),", ",(0,s.jsx)(t.code,{children:"inProgress"}),", ",(0,s.jsx)(t.code,{children:"draft"}),", ",(0,s.jsx)(t.code,{children:"halted"}),"."]}),(0,s.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Please follow the document to get information about the ",(0,s.jsx)(t.a,{href:"https://developers.google.com/assistant/console/releases#lifecycle",children:"Release Lifecycle"})," on Google Play."]})}),"\n",(0,s.jsx)(t.h2,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Get Approval from Google Play"})," step does not produce any output variables. However, the step will succeed or fail, based on whether your application is in the correct status according to the ",(0,s.jsx)(t.a,{href:"#input-variables",children:"inputs"})," you provide."]}),"\n",(0,s.jsx)(l.A,{url:"https://cdn.appcircle.io/docs/assets/android-publishflow-approve-from-google-play-2.png"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-publish-googleplay-status-check.git",children:(0,s.jsx)(o,{url:"https://github.com/appcircleio/appcircle-publish-googleplay-status-check.git",title:"GitHub - appcircleio/appcircle-publish-googleplay-status-check: check status of an app release in Google Play Developer Console",description:"check status of an app release in Google Play Developer Console - appcircleio/appcircle-publish-googleplay-status-check",image:"https://opengraph.githubassets.com/a7f9aa8452ad3580c2e0e32722cf3695be9e66171ece7b4c48b86f8f103ebaa3/appcircleio/appcircle-publish-googleplay-status-check"})})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},70344:(e,t,o)=>{o.d(t,{A:()=>p});var s,i,l=o(96540);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)({}).hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},r.apply(null,arguments)}const n=e=>{let{title:t,titleId:o,...n}=e;return l.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":o},n),t?l.createElement("title",{id:o},t):null,s||(s=l.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),i||(i=l.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var a=o(74848);function p(e){let{children:t,url:o}=e;return(0,a.jsxs)("a",{href:o,className:"content-ref-card",children:[(0,a.jsx)(n,{title:"File Icon",className:"file-icon"}),t]})}},69678:(e,t,o)=>{o.d(t,{A:()=>i});o(96540);var s=o(74848);function i(e){let{url:t}=e;return(0,s.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>n});var s=o(96540);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);