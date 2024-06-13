"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[34627],{47601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var i=t(74848),s=t(28453),r=t(69678);t(70344);const o={title:"Binary Management",description:"Learn how to manage binaries in Appcircle",tags:["publish module","binary management"]},a="Binary Management",l={id:"publish-module/binary-management/index",title:"Binary Management",description:"Learn how to manage binaries in Appcircle",source:"@site/docs/110_publish-module/binary-management/index.md",sourceDirName:"110_publish-module/binary-management",slug:"/publish-module/binary-management/",permalink:"/nextjs-upload-file-tryout/publish-module/binary-management/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/110_publish-module/binary-management/index.md",tags:[{label:"publish module",permalink:"/nextjs-upload-file-tryout/tags/publish-module"},{label:"binary management",permalink:"/nextjs-upload-file-tryout/tags/binary-management"}],version:"current",frontMatter:{title:"Binary Management",description:"Learn how to manage binaries in Appcircle",tags:["publish module","binary management"]},sidebar:"tutorialSidebar",previous:{title:"Managing Publish Profiles",permalink:"/nextjs-upload-file-tryout/publish-module/creating-publish-profiles/managing-publish-profiles"},next:{title:"Publish Flow",permalink:"/nextjs-upload-file-tryout/publish-module/publish-flow/"}},c={},h=[{value:"Store Status",id:"store-status",level:2},{value:"How It Works",id:"how-it-works",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"binary-management",children:"Binary Management"}),"\n","\n",(0,i.jsxs)(n.p,{children:["Appcircle supports publishing the application to the stores without using the Build module. To add an application version manually, you need to add a publish profile beforehand and then ",(0,i.jsx)(n.strong,{children:"Open"})," its details."]}),"\n",(0,i.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/publish-manuel.png"}),"\n",(0,i.jsxs)(n.p,{children:["You can then upload the application by clicking on the ",(0,i.jsx)(n.strong,{children:"Add Version"})," button on the right."]}),"\n",(0,i.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/publish-upload.png"}),"\n",(0,i.jsx)(n.p,{children:"When the upload is completed successfully, the relevant application version will appear in the list."}),"\n",(0,i.jsxs)(n.admonition,{title:"BUNDLE ID AND PACKAGE NAME MUST BE UNIQUE",type:"caution",children:[(0,i.jsx)(n.p,{children:"To maintain consistency, do not upload iOS app versions with different Bundle IDs under the same Publish Profile. All app versions must share the same Bundle ID within the Publish Profile."}),(0,i.jsx)(n.p,{children:"Similarly, for Android Publish Profiles, all app versions must have identical Package Names within the Android Publish Profile."}),(0,i.jsxs)(n.p,{children:["You can view the Bundle ID (iOS) and Package Name (Android) beneath the Publish Profile name. Users can also verify this information by selecting the ",(0,i.jsx)(n.a,{href:"/publish-module/publish-information/binary-information",children:"Binary Information"})," for an app version under the actions menu."]})]}),"\n",(0,i.jsx)(n.p,{children:"Afterwards, you can start submitting your application to the stores with the publish flow that you have configured."}),"\n",(0,i.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/publish-version-list.png"}),"\n",(0,i.jsxs)(n.p,{children:["For this, click on the ",(0,i.jsx)(n.strong,{children:"Actions"})," button for the relevant version and go to ",(0,i.jsx)(n.strong,{children:"Details"}),". From there, you can manually ",(0,i.jsx)(n.strong,{children:"Start Flow"})," for the uploaded application version."]}),"\n",(0,i.jsx)(n.h2,{id:"store-status",children:"Store Status"}),"\n",(0,i.jsxs)(n.p,{children:["Appcircle now allows you to track the App Store status of your applications directly within the Publish module. This powerful feature is tailored for ",(0,i.jsx)(n.strong,{children:"Enterprise License"})," holders, ensuring continuous monitoring of your application's deployment status."]}),"\n",(0,i.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3681-publish-store-status.png"}),"\n",(0,i.jsx)(n.h3,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Enterprise License"}),": This feature is accessible to users with an enterprise license."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Continuous Monitoring"}),": Once a version is set as a ",(0,i.jsx)(n.strong,{children:"Release Candidate"}),", it is automatically monitored ",(0,i.jsx)(n.strong,{children:"every 30 minutes"})," to check its status on ",(0,i.jsx)(n.strong,{children:"TestFlight"})," and the ",(0,i.jsx)(n.strong,{children:"App Store Distribution"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Priority on Distribution"}),": If the version is available in both ",(0,i.jsx)(n.strong,{children:"TestFlight"})," and ",(0,i.jsx)(n.strong,{children:"App Store Distribution"}),", the system prioritizes the status from ",(0,i.jsx)(n.strong,{children:"App Store Distribution"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Version Status"}),": If a version has ",(0,i.jsx)(n.strong,{children:"never"})," been submitted to the ",(0,i.jsx)(n.strong,{children:"App Store"}),", it will show as ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Not Available"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Completion of Distribution"}),": When a version reaches ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Ready for Distribution"})}),", Appcircle stops monitoring it, allowing you to focus resources on versions that still require attention."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Store Credentials Required",type:"caution",children:(0,i.jsxs)(n.p,{children:["Ensure you select store credentials in the ",(0,i.jsx)(n.a,{href:"/publish-module/publish-settings#store-credentials",children:"Publish settings"})," to start monitoring. If the credentials are ",(0,i.jsx)(n.strong,{children:"not"})," selected, the status will display as ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Not Available"})}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"This streamlined approach ensures that you are always informed of your application's status, simplifying management and enhancing your deployment strategy directly from the Appcircle dashboard."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},70344:(e,n,t)=>{t.d(n,{A:()=>c});var i,s,r=t(96540);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(null,arguments)}const a=e=>{let{title:n,titleId:t,...a}=e;return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":t},a),n?r.createElement("title",{id:t},n):null,i||(i=r.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),s||(s=r.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var l=t(74848);function c(e){let{children:n,url:t}=e;return(0,l.jsxs)("a",{href:t,className:"content-ref-card",children:[(0,l.jsx)(a,{title:"File Icon",className:"file-icon"}),n]})}},69678:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(74848);function s(e){let{url:n}=e;return(0,i.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);