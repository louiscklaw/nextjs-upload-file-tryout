"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[73662],{74597:(e,i,t)=>{t.d(i,{Ay:()=>l,RM:()=>r});var n=t(74848),o=t(28453);const r=[{value:"Need help?",id:"need-help",level:3}];function a(e){const i={a:"a",h3:"h3",p:"p",...(0,o.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"need-help",children:"Need help?"}),"\n",(0,n.jsx)(i.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,n.jsx)(t,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function l(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},10042:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=t(74848),o=t(28453),r=t(69678),a=t(70344),l=t(74597);const s={title:"Building React Native Applications",description:"You can build your React Native applications in Appcircle for iOS or Android platforms.",tags:["build","platform build guides","react native"],sidebar_position:3},c="Building React Native Applications",d={id:"build/platform-build-guides/building-react-native-applications",title:"Building React Native Applications",description:"You can build your React Native applications in Appcircle for iOS or Android platforms.",source:"@site/docs/build/platform-build-guides/building-react-native-applications.md",sourceDirName:"build/platform-build-guides",slug:"/build/platform-build-guides/building-react-native-applications",permalink:"/nextjs-upload-file-tryout/build/platform-build-guides/building-react-native-applications",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/build/platform-build-guides/building-react-native-applications.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"platform build guides",permalink:"/nextjs-upload-file-tryout/tags/platform-build-guides"},{label:"react native",permalink:"/nextjs-upload-file-tryout/tags/react-native"}],version:"current",sidebarPosition:3,frontMatter:{title:"Building React Native Applications",description:"You can build your React Native applications in Appcircle for iOS or Android platforms.",tags:["build","platform build guides","react native"],sidebar_position:3},sidebar:"mySidebar",previous:{title:"Android 11+ Signing for Google Play",permalink:"/nextjs-upload-file-tryout/build/platform-build-guides/building-android-applications/android-signing-for-google-play"},next:{title:"Building Flutter Mobile Applications",permalink:"/nextjs-upload-file-tryout/build/platform-build-guides/building-flutter-applications/"}},u={},p=[{value:"Creating a React Native Build Profile",id:"creating-a-react-native-build-profile",level:3},{value:"Build Configuration for React Native Applications",id:"build-configuration-for-react-native-applications",level:3},{value:"Private Modules",id:"private-modules",level:3},{value:"Build Configuration for React Native iOS applications",id:"build-configuration-for-react-native-ios-applications",level:3},{value:"Build Configuration for React Native Android applications",id:"build-configuration-for-react-native-android-applications",level:3},{value:"Sending the Build Status to the Repository Providers",id:"sending-the-build-status-to-the-repository-providers",level:3},{value:"Build Triggers",id:"build-triggers",level:3},{value:"Signing React Native iOS applications",id:"signing-react-native-ios-applications",level:3},{value:"Signing React Native Android applications",id:"signing-react-native-android-applications",level:3},{value:"Distribution (Deployment) Configuration",id:"distribution-deployment-configuration",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Build workflows for React Native applications",id:"build-workflows-for-react-native-applications",level:3},{value:"Starting a React Native Build and After a Build",id:"starting-a-react-native-build-and-after-a-build",level:3},...l.RM];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"building-react-native-applications",children:"Building React Native Applications"}),"\n",(0,n.jsx)(i.p,{children:"You can build your React Native applications in Appcircle for iOS or Android platforms."}),"\n",(0,n.jsx)("iframe",{width:"640",height:"315",src:"https://www.youtube.com/embed/JcP1EOtuBqw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["Appcircle will use your ",(0,n.jsx)(i.code,{children:"package.json"})," file to determine and use the dependencies of your application."]})}),"\n",(0,n.jsx)(i.h3,{id:"creating-a-react-native-build-profile",children:"Creating a React Native Build Profile"}),"\n",(0,n.jsxs)(i.p,{children:["Simply create a new build profile as usual and select your target operating system as iOS or Android. Select ",(0,n.jsx)(i.strong,{children:"React Native"})," for ",(0,n.jsx)(i.strong,{children:"Target Platform"}),"."]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/create-react-native-build-profile.png"}),"\n",(0,n.jsx)(i.p,{children:"Once your build profile is created, click on it and connect your Git repository. For details on this step, please follow the directions on the following page:"}),"\n",(0,n.jsx)(a.A,{url:"/build/manage-the-connections/adding-a-build-profile",children:"Adding a Build Profile"}),"\n",(0,n.jsx)(i.h3,{id:"build-configuration-for-react-native-applications",children:"Build Configuration for React Native Applications"}),"\n",(0,n.jsx)(i.p,{children:"Build configuration options are very similar to native iOS or Android applications. You can select configuration details, build triggers, signing identities and distribution options."}),"\n",(0,n.jsx)(i.h3,{id:"private-modules",children:"Private Modules"}),"\n",(0,n.jsxs)(i.p,{children:["If your project uses private modules, don't forget the add necessary SSH keys to your workflow steps. You can use ",(0,n.jsx)(i.code,{children:"Activate SSH Private Key"})," step to add your private SSH keys."]}),"\n",(0,n.jsx)(a.A,{url:"/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh",children:"Connecting to Private Repository via SSH"}),"\n",(0,n.jsxs)(i.p,{children:["You may also use ",(0,n.jsx)(i.code,{children:"Authenticate with netrc"})," step to access your private modules."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-netrc-component",children:(0,n.jsx)(t,{url:"https://github.com/appcircleio/appcircle-netrc-component",title:"GitHub - appcircleio/appcircle-netrc-component",description:"Contribute to appcircleio/appcircle-netrc-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/9bc7de0bef4f81ea20698eb47fdfa660249d6be9fb9a8d439b9541642c86551e/appcircleio/appcircle-netrc-component"})})}),"\n",(0,n.jsx)(i.h3,{id:"build-configuration-for-react-native-ios-applications",children:"Build Configuration for React Native iOS applications"}),"\n",(0,n.jsxs)(i.p,{children:["First, we need to set up a build configuration. Select the configuration from the ",(0,n.jsx)(i.strong,{children:"Configuration"}),' section. The first step will be to enter project details. You can enter details manually or click on the "Autofill" button to retrieve them from your project.']}),"\n",(0,n.jsxs)(i.p,{children:["Your iOS project needs to have an ",(0,n.jsx)(i.strong,{children:"Xcode project"})," or an ",(0,n.jsx)(i.strong,{children:"Xcode workspace"})," and a ",(0,n.jsx)(i.strong,{children:"shared scheme"})," to complete the build configuration successfully. Appcircle can fetch these workspaces and shared schemes from your branch automatically."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Share your iOS schemes"})}),"\n",(0,n.jsx)(i.p,{children:"iOS schemes must be marked as shared in order to build your application outside of Xcode. If your application doesn't have a shared scheme, it can only be built using Xcode."}),"\n",(0,n.jsx)(i.p,{children:"You can check the shared option in your Xcode's scheme manager to mark your application's scheme as shared."}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsx)(i.p,{children:"Please don't forget to add additional scheme files to your version control."})}),"\n",(0,n.jsxs)(i.p,{children:["Major Xcode versions are available for building in Appcircle. You can select the preferred Xcode version in the Build Configuration window. You can also set the preferred NodeJS version on this screen. If you don't set any version, ",(0,n.jsx)(i.code,{children:"lts"})," version will be used."]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/create-react-native-build-edit-configuration-ios.png"}),"\n",(0,n.jsx)(i.h3,{id:"build-configuration-for-react-native-android-applications",children:"Build Configuration for React Native Android applications"}),"\n",(0,n.jsxs)(i.p,{children:["First, we need to set up a build configuration. Select the configuration from the ",(0,n.jsx)(i.strong,{children:"Configuration"}),' section. The first step will be to enter project details. You can enter details manually or click on the "Autofill" button to retrieve them from your project.']}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/create-react-native-build-edit-configuration-android.png"}),"\n",(0,n.jsx)(i.h3,{id:"sending-the-build-status-to-the-repository-providers",children:"Sending the Build Status to the Repository Providers"}),"\n",(0,n.jsx)(i.p,{children:"At the bottom of the config tab, you will the **Set Commit Build Status **option."}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/create-react-native-ios-build-commit-status.png"}),"\n",(0,n.jsx)(i.p,{children:"When this option is enabled, the build status for that commit is shared with the repository provider."}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/image (213).png"}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/appcircle-github-commit-status-pass.png"}),"\n",(0,n.jsx)(i.h3,{id:"build-triggers",children:"Build Triggers"}),"\n",(0,n.jsx)(i.p,{children:"Triggers, is common for both iOS and Android."}),"\n",(0,n.jsx)(i.p,{children:"Appcircle allows you to trigger builds manually or automatically using build triggers."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"On push: Whenever code is pushed to a configured branch, the build is triggered."}),"\n",(0,n.jsx)(i.li,{children:"On a tagged push: Whenever a tagged commit is pushed, the build is triggered for that commit. Commits without any tags are ignored."}),"\n",(0,n.jsx)(i.li,{children:"On push with selective tags: Whenever a commit includes one of the typed in tags, the build is triggered. You can specify tags with Unix shell-style wildcards to trigger builds."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"signing-react-native-ios-applications",children:"Signing React Native iOS applications"}),"\n",(0,n.jsxs)(i.p,{children:["The next step on build configuration is Signing. Here, please select the provisioning profile you added in the ",(0,n.jsx)(i.a,{href:"/signing-identities/ios-certificates-and-provisioning-profiles",children:"iOS Certificates & Provisioning Profiles"})," section."]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"You can get both unsigned and signed build artifacts based on your configuration."})}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-ios-signing-empty.png"}),"\n",(0,n.jsx)(i.h3,{id:"signing-react-native-android-applications",children:"Signing React Native Android applications"}),"\n",(0,n.jsxs)(i.p,{children:["Here, please select the Android Keystore you added in the ",(0,n.jsx)(i.a,{href:"/signing-identities/android-keystores",children:"Android Keystores"})," section."]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"You can get both unsigned and signed build artifacts based on your configuration. Please note that unsigned builds will not be distributed by email."})}),"\n",(0,n.jsx)(i.h3,{id:"distribution-deployment-configuration",children:"Distribution (Deployment) Configuration"}),"\n",(0,n.jsx)(i.p,{children:"The next step on build configuration is Distribution."}),"\n",(0,n.jsx)(i.p,{children:"You can select a previously created distribution profile or create a new one in this window. Use the top input box to enter a name for the new distribution profile you want to create. Press enter or click on the green + icon on the right to create the distribution profile."}),"\n",(0,n.jsx)(i.p,{children:"Finally, check Auto Distribute if you want your build to be deployed to the Testing Distribution automatically and Auto Deployment if you want the build to be deployed to Store Submission automatically."}),"\n",(0,n.jsx)(a.A,{url:"/distribute/create-or-select-a-distribution-profile",children:(0,n.jsx)(i.p,{children:"Create a Distribution Profile and Sharing with Testers"})}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Any previous build can be deployed to the Testing Distribution without the need for rebuilding."})}),"\n",(0,n.jsx)(i.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,n.jsx)(i.p,{children:"The final tab is to add environment variables to the build. For advanced use cases, you can define variables and secrets to be incorporated during the build in the Environment Variables submodule so that you don\u2019t need to store certain keys and configurations within the repository."}),"\n",(0,n.jsx)(i.p,{children:"Please refer to the following document for more information on environment variables:"}),"\n",(0,n.jsx)(a.A,{url:"/environment-variables",children:(0,n.jsx)(i.p,{children:"Why to Use Environment Variables and Secrets?"})}),"\n",(0,n.jsx)(i.h3,{id:"build-workflows-for-react-native-applications",children:"Build workflows for React Native applications"}),"\n",(0,n.jsx)(i.p,{children:"Once you complete your build configuration, you can edit your build workflow. React Native builds have additional steps for Node and Yarn commands. You can also arrange, add or remove workflow steps using Appcircle's workflow editor and the Workflow Marketplace."}),"\n",(0,n.jsx)(i.p,{children:"To learn more about Appcircle's Workflow editor, see the corresponding page below:"}),"\n",(0,n.jsx)(a.A,{url:"/workflows",children:"What are Workflows and How to Use Them?"}),"\n",(0,n.jsx)(i.h3,{id:"starting-a-react-native-build-and-after-a-build",children:"Starting a React Native Build and After a Build"}),"\n",(0,n.jsx)(i.p,{children:"To start your first build, just press the start build button \u2013 the play button under the actions columns (or push some code to your repo if autobuild is configured.) You will see the build progress and the log in realtime."}),"\n",(0,n.jsx)(i.p,{children:"Once your build is complete, you can now download the binary file or deploy it to Testing Distribution manually (if autodistribute is enabled, it will be sent automatically after a successful build). You can also view or download your build logs at anytime."}),"\n",(0,n.jsx)(a.A,{url:"/build/post-build-operations/after-a-build",children:"After a Build"}),"\n","\n",(0,n.jsx)(l.Ay,{})]})}function g(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},70344:(e,i,t)=>{t.d(i,{A:()=>c});var n,o,r=t(96540);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}const l=e=>{let{title:i,titleId:t,...l}=e;return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":t},l),i?r.createElement("title",{id:t},i):null,n||(n=r.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),o||(o=r.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var s=t(74848);function c(e){let{children:i,url:t}=e;return(0,s.jsxs)("a",{href:t,className:"content-ref-card",children:[(0,s.jsx)(l,{title:"File Icon",className:"file-icon"}),i]})}},69678:(e,i,t)=>{t.d(i,{A:()=>o});t(96540);var n=t(74848);function o(e){let{url:i}=e;return(0,n.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>l});var n=t(96540);const o={},r=n.createContext(o);function a(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);