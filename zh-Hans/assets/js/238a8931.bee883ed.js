"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[33490],{74597:(e,i,t)=>{t.d(i,{Ay:()=>s,RM:()=>r});var n=t(74848),o=t(28453);const r=[{value:"Need help?",id:"need-help",level:3}];function l(e){const i={a:"a",h3:"h3",p:"p",...(0,o.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"need-help",children:"Need help?"}),"\n",(0,n.jsx)(i.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,n.jsx)(t,{url:"https://join.slack.com/t/appcircleio/signup",title:"join.slack.com",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function s(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},15526:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var n=t(74848),o=t(28453),r=t(69678),l=t(70344),s=t(74597);const d={title:"Building Android Applications",description:"Learn how to build Android applications in Appcircle",tags:["build","platform build guides","android"]},a="Building Android Applications",c={id:"build/platform-build-guides/building-android-applications/index",title:"Building Android Applications",description:"Learn how to build Android applications in Appcircle",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/004_build/platform-build-guides/building-android-applications/index.md",sourceDirName:"004_build/platform-build-guides/building-android-applications",slug:"/build/platform-build-guides/building-android-applications/",permalink:"/nextjs-upload-file-tryout/zh-Hans/build/platform-build-guides/building-android-applications/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/004_build/platform-build-guides/building-android-applications/index.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/build"},{label:"platform build guides",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/platform-build-guides"},{label:"android",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/android"}],version:"current",frontMatter:{title:"Building Android Applications",description:"Learn how to build Android applications in Appcircle",tags:["build","platform build guides","android"]},sidebar:"tutorialSidebar",previous:{title:"Building iOS Applications",permalink:"/nextjs-upload-file-tryout/zh-Hans/build/platform-build-guides/building-ios-applications"},next:{title:"Android 11+ Signing for Google Play",permalink:"/nextjs-upload-file-tryout/zh-Hans/build/platform-build-guides/building-android-applications/android-signing-for-google-play"}},u={},p=[{value:"Build Configuration",id:"build-configuration",level:3},{value:"Private Modules",id:"private-modules",level:3},{value:"Sending the Build Status to the Repository Providers",id:"sending-the-build-status-to-the-repository-providers",level:3},{value:"Build Triggers",id:"build-triggers",level:3},{value:"Signing",id:"signing",level:3},{value:"Distribution",id:"distribution",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Workflow Editor",id:"workflow-editor",level:3},{value:"Start Build",id:"start-build",level:3},...s.RM];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"building-android-applications",children:"Building Android Applications"}),"\n",(0,n.jsx)("iframe",{width:"640",height:"315",src:"https://www.youtube.com/embed/-6CpaE1FW7M",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,n.jsx)(i.p,{children:"Before starting your first Android app build, please make sure you first create a build profile and connect your Git repository to your build profile. You can refer to the page below for this step:"}),"\n",(0,n.jsx)(l.A,{url:"/build/manage-the-connections/adding-a-build-profile",children:"Adding a Build Profile"}),"\n",(0,n.jsx)(i.p,{children:"After connecting your repository, please add or create your Android Keystore. You can refer to the page below for this step:"}),"\n",(0,n.jsx)(l.A,{url:"/signing-identities/android-keystores",children:"Android Keystores"}),"\n",(0,n.jsx)(i.p,{children:"When you are done with the steps above, you can now start building your Android application."}),"\n",(0,n.jsx)(i.h3,{id:"build-configuration",children:"Build Configuration"}),"\n",(0,n.jsxs)(i.p,{children:["First, we need to set up a build configuration. Select the configuration from the ",(0,n.jsx)(i.strong,{children:"Configuration"}),' section. The first step will be to enter project details. You can enter details manually or click on the "Autofill" button to retrieve them from your project.']}),"\n",(0,n.jsx)(i.h3,{id:"private-modules",children:"Private Modules"}),"\n",(0,n.jsxs)(i.p,{children:["If your project uses private modules, don't forget the add necessary SSH keys to your workflow steps. You can use ",(0,n.jsx)(i.code,{children:"Activate SSH Private Key"})," step to add your private SSH keys."]}),"\n",(0,n.jsx)(l.A,{url:"/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh",children:"Connecting to Private Repository via SSH"}),"\n",(0,n.jsxs)(i.p,{children:["You may also use ",(0,n.jsx)(i.code,{children:"Authenticate with netrc"})," step to access your private modules."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-netrc-component",children:(0,n.jsx)(t,{url:"https://github.com/appcircleio/appcircle-netrc-component",title:"GitHub - appcircleio/appcircle-netrc-component",description:"Contribute to appcircleio/appcircle-netrc-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/9bc7de0bef4f81ea20698eb47fdfa660249d6be9fb9a8d439b9541642c86551e/appcircleio/appcircle-netrc-component"})})}),"\n",(0,n.jsx)(i.h3,{id:"sending-the-build-status-to-the-repository-providers",children:"Sending the Build Status to the Repository Providers"}),"\n",(0,n.jsx)(i.p,{children:"At the bottom of the config tab, you will the **Set Commit Build Status **option."}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/create-android-build-commit-status.png"}),"\n",(0,n.jsx)(i.p,{children:"When this option is enabled, the build status for that commit is shared with the repository provider."}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/image (213).png"}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/appcircle-github-commit-status-pass.png"}),"\n",(0,n.jsx)(i.h3,{id:"build-triggers",children:"Build Triggers"}),"\n",(0,n.jsx)(i.p,{children:"Appcircle allows you to trigger builds manually or automatically using build triggers."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"On push: Whenever code is pushed to a configured branch, the build is triggered."}),"\n",(0,n.jsx)(i.li,{children:"On a tagged push: Whenever a tagged commit is pushed, the build is triggered for that commit. Commits without any tags are ignored."}),"\n",(0,n.jsx)(i.li,{children:"On push with selective tags: Whenever a commit includes one of the typed in tags, the build is triggered. You can specify tags with Unix shell-style wildcards to trigger builds."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"You can visit the following page for details on build triggers:"}),"\n",(0,n.jsx)(l.A,{url:"/build/build-process-management/build-manually-or-with-triggers",children:(0,n.jsx)(i.p,{children:"Build Manually or Automatically with Webhooks and Triggers"})}),"\n",(0,n.jsx)(i.h3,{id:"signing",children:"Signing"}),"\n",(0,n.jsxs)(i.p,{children:["The next step on build configuration is Signing. Here, please select the Android Keystore you added at ",(0,n.jsx)(i.a,{href:"/signing-identities/android-keystores",children:"Android Keystores"})," page."]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"You can get both unsigned and signed build artifacts based on your configuration. Please note that unsigned builds will not be distributed by email."})}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-android-signing.png"}),"\n",(0,n.jsx)(i.h3,{id:"distribution",children:"Distribution"}),"\n",(0,n.jsx)(i.p,{children:"The next step on build configuration is Distribution. You can create a new distribution profile at this screen or select a previous profile you created earlier. You can also enable auto deployment features if you need to."}),"\n",(0,n.jsx)(l.A,{url:"/distribute/create-or-select-a-distribution-profile",children:(0,n.jsx)(i.p,{children:"Create a Distribution Profile and Sharing with Testers"})}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-android-distribution.png"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Any previous build can be deployed to the Testing Distribution without the need for rebuilding."})}),"\n",(0,n.jsx)(i.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,n.jsx)(i.p,{children:"The final step on build configuration is Environment Variables."}),"\n",(0,n.jsx)(i.p,{children:"Appcircle Build module is simple and powerful. You can get your builds instantly just with a few clicks, advanced management of builds is also possible with the environment variables and workflows."}),"\n",(0,n.jsx)(i.p,{children:"You can define variables and secrets to be incorporated during the build in the Environment Variables submodule so that you don't need to store certain keys and configurations within the repository."}),"\n",(0,n.jsx)(i.p,{children:"Please see the following page for more information about environment variables:"}),"\n",(0,n.jsx)(l.A,{url:"/environment-variables",children:(0,n.jsx)(i.p,{children:"Why to Use Environment Variables and Secrets?"})}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-android-env-variables.png"}),"\n",(0,n.jsx)(i.p,{children:"Please click on the Save button and close this modal."}),"\n",(0,n.jsx)(i.h3,{id:"workflow-editor",children:"Workflow Editor"}),"\n",(0,n.jsx)(i.p,{children:"You can use the workflow editor for in-depth configuration of all build steps. Please click on the workflow icon to open and use workflow editor."}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Any custom operation during the build can be executed through the Custom Script step in the workflow."})}),"\n",(0,n.jsx)(i.p,{children:"For details on using Appcircle's workflow editor, please see the related page below:"}),"\n",(0,n.jsx)(l.A,{url:"/workflows",children:"What are Workflows and How to Use Them?"}),"\n",(0,n.jsx)(i.h3,{id:"start-build",children:"Start Build"}),"\n",(0,n.jsxs)(i.p,{children:["You are now ready to start your first build. Select the branch from the left side and click on the ",(0,n.jsx)(i.strong,{children:"Start Build"})," button."]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-android-start-build.png"}),"\n",(0,n.jsxs)(i.p,{children:["Select a configuration, workflow, commit id and click on ",(0,n.jsx)(i.strong,{children:"Start Build button"})]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-android-build-modal.png"}),"\n",(0,n.jsx)(i.p,{children:"Appcircle will start building your application. Build log window will open and you can follow build process in realtime."}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"You can safely close the build log window, it won't affect the status of your build. You can come back and click on the build to track the status of your build."})}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-android-workflow.png"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Distribute Your Build"})}),"\n",(0,n.jsx)(i.p,{children:"Your build will be distributed automatically if you had set up Auto Distribute earlier. You can also manually distribute builds at any time you like."}),"\n",(0,n.jsx)(l.A,{url:"/build/post-build-operations/after-a-build",children:"After a Build"}),"\n",(0,n.jsx)(s.Ay,{})]})}function g(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},70344:(e,i,t)=>{t.d(i,{A:()=>a});var n,o,r=t(96540);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(null,arguments)}const s=e=>{let{title:i,titleId:t,...s}=e;return r.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":t},s),i?r.createElement("title",{id:t},i):null,n||(n=r.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),o||(o=r.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var d=t(74848);function a(e){let{children:i,url:t}=e;return(0,d.jsxs)("a",{href:t,className:"content-ref-card",children:[(0,d.jsx)(s,{title:"File Icon",className:"file-icon"}),i]})}},69678:(e,i,t)=>{t.d(i,{A:()=>o});t(96540);var n=t(74848);function o(e){let{url:i,description:t=""}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:""!=t?24:8},children:[(0,n.jsx)("img",{className:"screenshot",src:i,style:{borderRadius:5,marginBottom:""!=t?8:24}}),""!=t?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{paddingTop:0,marginTop:0,fontWeight:"500",fontStyle:"italic",color:"rgba(0,0,0,0.5)"},children:t})}):(0,n.jsx)(n.Fragment,{})]})})}},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>s});var n=t(96540);const o={},r=n.createContext(o);function l(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);