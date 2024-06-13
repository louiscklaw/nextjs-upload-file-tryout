"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[55799],{73018:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=i(74848),s=i(28453),t=i(70344);const o={title:"Versioning \u7248\u672c\u63a7\u5236",description:"Understand and manage versioning for Android and iOS applications",tags:["versioning","android","ios"]},d=void 0,a={id:"versioning/index",title:"Versioning \u7248\u672c\u63a7\u5236",description:"Understand and manage versioning for Android and iOS applications",source:"@site/docs/800_versioning/index.md",sourceDirName:"800_versioning",slug:"/versioning/",permalink:"/nextjs-upload-file-tryout/versioning/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/800_versioning/index.md",tags:[{label:"versioning",permalink:"/nextjs-upload-file-tryout/tags/versioning"},{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"},{label:"ios",permalink:"/nextjs-upload-file-tryout/tags/ios"}],version:"current",frontMatter:{title:"Versioning \u7248\u672c\u63a7\u5236",description:"Understand and manage versioning for Android and iOS applications",tags:["versioning","android","ios"]},sidebar:"tutorialSidebar",previous:{title:"Android Builds",permalink:"/nextjs-upload-file-tryout/environment-variables/platform-specific-usage/using-environment-variables-in-android-projects"},next:{title:"Understanding Android Versioning",permalink:"/nextjs-upload-file-tryout/versioning/android-version"}},l={},c=[{value:"Understanding Android Versioning",id:"understanding-android-versioning",level:2},{value:"Understanding iOS Versioning",id:"understanding-ios-versioning",level:2}];function u(n){const e={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Proper versioning is crucial for maintaining and updating mobile applications effectively. It helps in tracking different versions of your app, managing updates, and ensuring compatibility."}),"\n",(0,r.jsx)(e.h2,{id:"understanding-android-versioning",children:"Understanding Android Versioning"}),"\n",(0,r.jsxs)(e.p,{children:["Android apps use a combination of ",(0,r.jsx)(e.code,{children:"versionCode"})," and ",(0,r.jsx)(e.code,{children:"versionName"})," in their build configurations:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"versionCode"}),": An integer value that represents the version of the application code, which is incremented with every release."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"versionName"}),": A string value that represents the release version to the user."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"For a detailed guide on Android versioning, please refer to:"}),"\n",(0,r.jsx)(t.A,{url:"/versioning/android-version",children:(0,r.jsx)(e.p,{children:"Understanding Android Versioning"})}),"\n",(0,r.jsx)(e.h2,{id:"understanding-ios-versioning",children:"Understanding iOS Versioning"}),"\n",(0,r.jsxs)(e.p,{children:["iOS apps use ",(0,r.jsx)(e.code,{children:"CFBundleShortVersionString"})," and ",(0,r.jsx)(e.code,{children:"CFBundleVersion"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"CFBundleShortVersionString"}),": The release version number displayed to users."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"CFBundleVersion"}),": The build number, which identifies an iteration of the app."]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"For a detailed guide on iOS versioning, please refer to:"}),"\n",(0,r.jsx)(t.A,{url:"/versioning/ios-version",children:(0,r.jsx)(e.p,{children:"Understanding iOS Versioning"})}),"\n",(0,r.jsx)(e.p,{children:"This section provides resources and guidelines to understand and manage the versioning system for both Android and iOS platforms."})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},70344:(n,e,i)=>{i.d(e,{A:()=>l});var r,s,t=i(96540);function o(){return o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)({}).hasOwnProperty.call(i,r)&&(n[r]=i[r])}return n},o.apply(null,arguments)}const d=n=>{let{title:e,titleId:i,...d}=n;return t.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":i},d),e?t.createElement("title",{id:i},e):null,r||(r=t.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),s||(s=t.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var a=i(74848);function l(n){let{children:e,url:i}=n;return(0,a.jsxs)("a",{href:i,className:"content-ref-card",children:[(0,a.jsx)(d,{title:"File Icon",className:"file-icon"}),e]})}},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>d});var r=i(96540);const s={},t=r.createContext(s);function o(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);