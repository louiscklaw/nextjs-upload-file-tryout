"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60873],{4842:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=i(74848),a=i(28453),t=i(69678),o=i(70344);const s={title:"Android Builds",description:"Using Environment Variables in Android Projects",tags:["environment variables","env vars","variables","build configuration","custom build scripts","android"],sidebar_position:5},l="Using Environment Variables in Android Projects",d={id:"config-management/platform-specific-usage/using-environment-variables-in-android-projects",title:"Android Builds",description:"Using Environment Variables in Android Projects",source:"@site/docs/060_config-management/platform-specific-usage/using-environment-variables-in-android-projects.md",sourceDirName:"060_config-management/platform-specific-usage",slug:"/config-management/platform-specific-usage/using-environment-variables-in-android-projects",permalink:"/nextjs-upload-file-tryout/config-management/platform-specific-usage/using-environment-variables-in-android-projects",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/060_config-management/platform-specific-usage/using-environment-variables-in-android-projects.md",tags:[{label:"environment variables",permalink:"/nextjs-upload-file-tryout/tags/environment-variables"},{label:"env vars",permalink:"/nextjs-upload-file-tryout/tags/env-vars"},{label:"variables",permalink:"/nextjs-upload-file-tryout/tags/variables"},{label:"build configuration",permalink:"/nextjs-upload-file-tryout/tags/build-configuration"},{label:"custom build scripts",permalink:"/nextjs-upload-file-tryout/tags/custom-build-scripts"},{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"}],version:"current",sidebarPosition:5,frontMatter:{title:"Android Builds",description:"Using Environment Variables in Android Projects",tags:["environment variables","env vars","variables","build configuration","custom build scripts","android"],sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"iOS Builds",permalink:"/nextjs-upload-file-tryout/config-management/platform-specific-usage/using-environment-variables-in-ios-projects"},next:{title:"Introduction to Environment Variables",permalink:"/nextjs-upload-file-tryout/environment-variables/"}},c={},u=[{value:"Creating Environment Variables in Appcircle and using them in Android builds",id:"creating-environment-variables-in-appcircle-and-using-them-in-android-builds",level:3}];function p(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"using-environment-variables-in-android-projects",children:"Using Environment Variables in Android Projects"}),"\n",(0,r.jsx)(n.p,{children:"Android developers can use environment variables using Gradle\u2019s module-level build configuration. This module-level Gradle configuration file lets you specify build settings for that module of your application."}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"android"})," block of your ",(0,r.jsx)(n.code,{children:"build.gradle"})," file, specify a new ",(0,r.jsx)(n.code,{children:"buildConfigField"})," method as shown below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:'android {\n   defaultConfig {\n       // Create a new variable here to be used in your code\n       buildConfigField "String", "APPCIRCLE_API_URL", "\\"${System.env.AC_API_URL}\\""\n   }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["During the build process, Gradle will generate the ",(0,r.jsx)(n.code,{children:"buildConfig"})," class and these variables will be accessible from your application in runtime."]}),"\n",(0,r.jsx)(n.p,{children:"You can now use this variable in your application. Here is an example showing how to use the variable in a view:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class SampleFragmentDetail extends Fragment {\n   @Override\n   public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {\n       // Use your BuildConfig variable in your view\n       appVersionTextView.setText("Api URL: " + BuildConfig.APPCIRCLE_API_URL);\n       return view;\n   }\n}\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"creating-environment-variables-in-appcircle-and-using-them-in-android-builds",children:"Creating Environment Variables in Appcircle and using them in Android builds"}),"\n",(0,r.jsx)(n.p,{children:"Appcircle allows you to create groups of environment variables to be used during your builds. You can create environment variable groups for different branches of your project like development, staging, and production."}),"\n",(0,r.jsx)(o.A,{url:"/environment-variables/managing-variables",children:"Managing Variables"}),"\n",(0,r.jsx)(n.p,{children:"Going forward on our sample above, you may want to use different API endpoints for development, staging, and production."}),"\n",(0,r.jsx)(n.p,{children:"To create different values of the same variable, simply create an environment variable group for each branch:"}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-3108-var2.png"}),"\n",(0,r.jsx)(n.p,{children:"Create an environment variable with the same name in each group and set the proper values for each branch."}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-3108-var5.png"}),"\n",(0,r.jsx)(n.p,{children:"Don\u2019t forget to tell your build configuration to use the proper environment variable group during the build process:"}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-env-variables.png"}),"\n",(0,r.jsx)(n.p,{children:"Appcircle will use the values from the environment variables from the designated group for the branch you are building your application from.;"}),"\n",(0,r.jsxs)(n.p,{children:["During the build process, ",(0,r.jsx)(n.code,{children:"build.gradle"})," file in your module will use the values from the environment variables and your application will use these values during the runtime:"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},70344:(e,n,i)=>{i.d(n,{A:()=>d});var r,a,t=i(96540);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)({}).hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o.apply(null,arguments)}const s=e=>{let{title:n,titleId:i,...s}=e;return t.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":i},s),n?t.createElement("title",{id:i},n):null,r||(r=t.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),a||(a=t.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var l=i(74848);function d(e){let{children:n,url:i}=e;return(0,l.jsxs)("a",{href:i,className:"content-ref-card",children:[(0,l.jsx)(s,{title:"File Icon",className:"file-icon"}),n]})}},69678:(e,n,i)=>{i.d(n,{A:()=>a});i(96540);var r=i(74848);function a(e){let{url:n}=e;return(0,r.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var r=i(96540);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);