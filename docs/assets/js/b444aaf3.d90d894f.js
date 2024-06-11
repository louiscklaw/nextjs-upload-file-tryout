"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[51002],{74597:(e,i,n)=>{n.d(i,{Ay:()=>l,RM:()=>r});var t=n(74848),o=n(28453);const r=[{value:"Need help?",id:"need-help",level:3}];function s(e){const i={a:"a",h3:"h3",p:"p",...(0,o.R)(),...e.components},{ExternalUrlRef:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h3,{id:"need-help",children:"Need help?"}),"\n",(0,t.jsx)(i.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,t.jsx)(n,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function l(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},66158:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var t=n(74848),o=n(28453),r=n(69678),s=n(70344),l=n(74597);const a={title:"Building iOS Applications",description:"Building iOS applications may be complex and confusing. Appcircle will help you smooth the process and doesn't require any additional configuration files from you.",tags:["build","platform build guides","ios"],sidebar_position:1},d="Building iOS Applications",c={id:"build/platform-build-guides/building-ios-applications",title:"Building iOS Applications",description:"Building iOS applications may be complex and confusing. Appcircle will help you smooth the process and doesn't require any additional configuration files from you.",source:"@site/docs/build/platform-build-guides/building-ios-applications.md",sourceDirName:"build/platform-build-guides",slug:"/build/platform-build-guides/building-ios-applications",permalink:"/nextjs-upload-file-tryout/build/platform-build-guides/building-ios-applications",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/build/platform-build-guides/building-ios-applications.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"platform build guides",permalink:"/nextjs-upload-file-tryout/tags/platform-build-guides"},{label:"ios",permalink:"/nextjs-upload-file-tryout/tags/ios"}],version:"current",sidebarPosition:1,frontMatter:{title:"Building iOS Applications",description:"Building iOS applications may be complex and confusing. Appcircle will help you smooth the process and doesn't require any additional configuration files from you.",tags:["build","platform build guides","ios"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Platform Build Guides",permalink:"/nextjs-upload-file-tryout/build/platform-build-guides/"},next:{title:"Building Android Applications",permalink:"/nextjs-upload-file-tryout/build/platform-build-guides/building-android-applications/"}},u={},p=[{value:"Build Configuration",id:"build-configuration",level:3},{value:"Private Modules",id:"private-modules",level:3},{value:"Selecting the Xcode Version and Switching to the Xcode Beta",id:"selecting-the-xcode-version-and-switching-to-the-xcode-beta",level:4},{value:"Sending the Build Status to the Repository Providers",id:"sending-the-build-status-to-the-repository-providers",level:3},{value:"Build Triggers",id:"build-triggers",level:3},{value:"Signing",id:"signing",level:3},{value:"Distribution",id:"distribution",level:3},{value:"Versioning",id:"versioning",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Workflow Editor",id:"workflow-editor",level:3},{value:"Start Build",id:"start-build",level:3},...l.RM];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{ExternalUrlRef:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"building-ios-applications",children:"Building iOS Applications"}),"\n",(0,t.jsx)("iframe",{width:"640",height:"315",src:"https://www.youtube.com/embed/3ZorIciD7-o",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,t.jsx)(i.p,{children:"Building iOS applications may be complex and confusing. Appcircle will help you smooth the process and doesn't require any additional configuration files from you."}),"\n",(0,t.jsx)(i.p,{children:"Before starting your first iOS app build, please make sure you first create a build profile and connect your Git repository to your build profile. You can refer to the page below for this step:"}),"\n",(0,t.jsx)(s.A,{url:"/build/manage-the-connections/adding-a-build-profile",children:"Adding a Build Profile"}),"\n",(0,t.jsx)(i.p,{children:"After connecting your repository, please add or create your iOS certificate and provisioning profile. You can refer to the page below for this step:"}),"\n",(0,t.jsx)(s.A,{url:"/signing-identities/ios-certificates-and-provisioning-profiles",children:(0,t.jsx)(i.p,{children:"iOS Certificates and Provisioning Profiles"})}),"\n",(0,t.jsx)(i.p,{children:"When you are done with the steps above, you can now start building your iOS application."}),"\n",(0,t.jsx)(i.h3,{id:"build-configuration",children:"Build Configuration"}),"\n",(0,t.jsxs)(i.p,{children:["First, we need to set up a build configuration. Select the configuration from the ",(0,t.jsx)(i.strong,{children:"Configuration"}),' section. The first step will be to enter project details. You can enter details manually or click on the "Autofill" button to retrieve them from your project.']}),"\n",(0,t.jsxs)(i.p,{children:["Your iOS project needs to have an ",(0,t.jsx)(i.strong,{children:"Xcode project"})," or an ",(0,t.jsx)(i.strong,{children:"Xcode workspace"})," and a ",(0,t.jsx)(i.strong,{children:"shared scheme"})," to complete the build configuration successfully. Appcircle can fetch these workspaces and shared schemes from your branch automatically."]}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-profile-ios-fetch.png"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Share your iOS schemes"})}),"\n",(0,t.jsx)(i.p,{children:"iOS schemes must be marked as shared in order to build your application outside of Xcode. If your application doesn't have a shared scheme, it can only be built using Xcode."}),"\n",(0,t.jsx)(i.p,{children:"You can check the shared option in your Xcode's scheme manager to mark your application's scheme as shared."}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsx)(i.p,{children:"Please don't forget to add additional scheme files to your version control."})}),"\n",(0,t.jsx)(i.h3,{id:"private-modules",children:"Private Modules"}),"\n",(0,t.jsxs)(i.p,{children:["If your project uses private modules, don't forget the add necessary SSH keys to your workflow steps. You can use ",(0,t.jsx)(i.code,{children:"Activate SSH Private Key"})," step to add your private SSH keys."]}),"\n",(0,t.jsx)(s.A,{url:"/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh",children:"Connecting to Private Repository via SSH"}),"\n",(0,t.jsxs)(i.p,{children:["You may also use ",(0,t.jsx)(i.code,{children:"Authenticate with netrc"})," step to access your private modules."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-netrc-component",children:(0,t.jsx)(n,{url:"https://github.com/appcircleio/appcircle-netrc-component",title:"GitHub - appcircleio/appcircle-netrc-component",description:"Contribute to appcircleio/appcircle-netrc-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/9bc7de0bef4f81ea20698eb47fdfa660249d6be9fb9a8d439b9541642c86551e/appcircleio/appcircle-netrc-component"})})}),"\n",(0,t.jsx)(i.h4,{id:"selecting-the-xcode-version-and-switching-to-the-xcode-beta",children:"Selecting the Xcode Version and Switching to the Xcode Beta"}),"\n",(0,t.jsx)(i.p,{children:"Major Xcode versions are available for building in Appcircle. You can select the preferred Xcode version in Build Configuration window."}),"\n",(0,t.jsxs)(i.p,{children:["The list of currently available Xcode versions can be found in the following document: ",(0,t.jsx)(i.a,{href:"/infrastructure/ios-build-infrastructure",children:"iOS Build Infrastructure"})]}),"\n",(0,t.jsx)(i.p,{children:"By default, the most recent stable version of Xcode is selected. If available, you can also switch to the most recent Xcode beta at the top of the list."}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-profile-ios-fetch.png"}),"\n",(0,t.jsx)(i.h3,{id:"sending-the-build-status-to-the-repository-providers",children:"Sending the Build Status to the Repository Providers"}),"\n",(0,t.jsxs)(i.p,{children:["At the bottom of the config tab, you will see the ",(0,t.jsx)(i.strong,{children:"Set Commit Build Status"})," option."]}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/create-ios-build-commit-status.png"}),"\n",(0,t.jsx)(i.p,{children:"When this option is enabled, the build status for that commit is shared with the repository provider."}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/image (213).png"}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/appcircle-github-commit-status-pass.png"}),"\n",(0,t.jsx)(i.h3,{id:"build-triggers",children:"Build Triggers"}),"\n",(0,t.jsx)(i.p,{children:"Appcircle allows you to trigger builds manually or automatically using build triggers."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"On push: Whenever code is pushed to a configured branch, the build is triggered."}),"\n",(0,t.jsx)(i.li,{children:"On a tagged push: Whenever a tagged commit is pushed, the build is triggered for that commit. Commits without any tags are ignored."}),"\n",(0,t.jsx)(i.li,{children:"On push with selective tags: Whenever a commit includes one of the typed in tags, the build is triggered. You can specify tags with Unix shell-style wildcards to trigger builds."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"You can visit the following page for details on build triggers:"}),"\n",(0,t.jsx)(s.A,{url:"/build/build-process-management/build-manually-or-with-triggers",children:(0,t.jsx)(i.p,{children:"Build Manually or Automatically with Webhooks and Triggers"})}),"\n",(0,t.jsx)(i.h3,{id:""}),"\n",(0,t.jsx)(i.h3,{id:"signing",children:"Signing"}),"\n",(0,t.jsxs)(i.p,{children:["The next step on build configuration is Signing. Here, please select the provisioning profile you added at ",(0,t.jsx)(i.a,{href:"/signing-identities/ios-certificates-and-provisioning-profiles",children:"iOS Certificates & Provisioning Profiles"})," page."]}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"You can get both unsigned and signed build artifacts based on your configuration."})}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-profile-ios-signing-configuration.png"}),"\n",(0,t.jsx)(i.h3,{id:"distribution",children:"Distribution"}),"\n",(0,t.jsx)(i.p,{children:"The next step on build configuration is Distribution. You can create a new distribution profile at this screen or select a previous profile you created earlier. You can also enable auto deployment features if you need to."}),"\n",(0,t.jsx)(s.A,{url:"/distribute/create-or-select-a-distribution-profile",children:(0,t.jsx)(i.p,{children:"Create a Distribution Profile and Sharing with Testers"})}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"Any previous build can be deployed to the Testing Distribution without the need for rebuilding."})}),"\n",(0,t.jsx)(i.h3,{id:"versioning",children:"Versioning"}),"\n",(0,t.jsx)(i.p,{children:"The versioning tab will allow you to change the build or version number during the build. You can increase the build number or version number by using different sources and strategies."}),"\n",(0,t.jsx)(s.A,{url:"/versioning/ios-version",children:(0,t.jsx)(i.p,{children:"Managing iOS Build and Version Numbers"})}),"\n",(0,t.jsx)(i.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsx)(i.p,{children:"The final step on build configuration is Environment Variables."}),"\n",(0,t.jsx)(i.p,{children:"Appcircle Build module is simple and powerful. You can get your builds instantly just with a few clicks, advanced management of builds is also possible with the environment variables and workflows."}),"\n",(0,t.jsx)(i.p,{children:"You can define variables and secrets to be incorporated during the build in the Environment Variables submodule so that you don't need to store certain keys and configurations within the repository."}),"\n",(0,t.jsx)(i.p,{children:"Please see the following page for more information about environment variables:"}),"\n",(0,t.jsx)(s.A,{url:"/environment-variables",children:(0,t.jsx)(i.p,{children:"Why to Use Environment Variables and Secrets?"})}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-env-variables.png"}),"\n",(0,t.jsx)(i.p,{children:"Please click on the Save button and close this modal."}),"\n",(0,t.jsx)(i.h3,{id:"workflow-editor",children:"Workflow Editor"}),"\n",(0,t.jsx)(i.p,{children:"You can use the workflow editor for in-depth configuration of all build steps. Please click on the workflow icon to open and use workflow editor."}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"Any custom operation during the build can be executed through the Custom Script step in the workflow"})}),"\n",(0,t.jsx)(i.p,{children:"For details on using Appcircle's workflow editor, please see the related page below:"}),"\n",(0,t.jsx)(s.A,{url:"/workflows",children:"What are Workflows and How to Use Them?"}),"\n",(0,t.jsx)(i.h3,{id:"start-build",children:"Start Build"}),"\n",(0,t.jsxs)(i.p,{children:["You are now ready to start your first build. Select the branach from the left side and click on the ",(0,t.jsx)(i.strong,{children:"Start Build"})," button."]}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-start-build.png"}),"\n",(0,t.jsxs)(i.p,{children:["Select a configuration, workflow, commit id and click on ",(0,t.jsx)(i.strong,{children:"Start Build button"})]}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-start-build-modal.png"}),"\n",(0,t.jsx)(i.p,{children:"Appcircle will start building your application. Build log window will open and you can follow build process in realtime."}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"You can safely close the build log window, it won't affect the status of your build. You can come back and click on the build to track the status of your build."})}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-ios-build-workflow.png"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Distribute your build"})}),"\n",(0,t.jsx)(i.p,{children:"Your build will be distributed automatically if you had set up auto build earlier. You can also manually distribute builds at any time you like."}),"\n",(0,t.jsx)(s.A,{url:"/build/post-build-operations/after-a-build",children:"After a Build"}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-ios-distribute-artifacts.png"}),"\n","\n",(0,t.jsx)(l.Ay,{})]})}function g(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},70344:(e,i,n)=>{n.d(i,{A:()=>d});var t,o,r=n(96540);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}const l=e=>{let{title:i,titleId:n,...l}=e;return r.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":n},l),i?r.createElement("title",{id:n},i):null,t||(t=r.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),o||(o=r.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var a=n(74848);function d(e){let{children:i,url:n}=e;return(0,a.jsxs)("a",{href:n,className:"content-ref-card",children:[(0,a.jsx)(l,{title:"File Icon",className:"file-icon"}),i]})}},69678:(e,i,n)=>{n.d(i,{A:()=>o});n(96540);var t=n(74848);function o(e){let{url:i}=e;return(0,t.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>l});var t=n(96540);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);