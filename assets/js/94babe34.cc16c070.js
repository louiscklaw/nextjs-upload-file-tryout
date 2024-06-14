"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[25237],{25406:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>p,toc:()=>f});var n=i(74848),r=i(28453),o=i(69678),l=i(70344),a=i(11470),s=i(19365),u=i(74597);const d={title:"Building Flutter Mobile Applications",description:"You can build your Flutter applications in Appcircle for iOS or Android platforms.",tags:["build","platform build guides","flutter"],sidebar_position:7},c="Building Flutter Mobile Applications",p={id:"build/platform-build-guides/building-flutter-applications/building-flutter-applications",title:"Building Flutter Mobile Applications",description:"You can build your Flutter applications in Appcircle for iOS or Android platforms.",source:"@site/docs/004_build/platform-build-guides/building-flutter-applications/building-flutter-applications.md",sourceDirName:"004_build/platform-build-guides/building-flutter-applications",slug:"/build/platform-build-guides/building-flutter-applications/",permalink:"/nextjs-upload-file-tryout/build/platform-build-guides/building-flutter-applications/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/004_build/platform-build-guides/building-flutter-applications/building-flutter-applications.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"platform build guides",permalink:"/nextjs-upload-file-tryout/tags/platform-build-guides"},{label:"flutter",permalink:"/nextjs-upload-file-tryout/tags/flutter"}],version:"current",sidebarPosition:7,frontMatter:{title:"Building Flutter Mobile Applications",description:"You can build your Flutter applications in Appcircle for iOS or Android platforms.",tags:["build","platform build guides","flutter"],sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Building React Native Applications",permalink:"/nextjs-upload-file-tryout/build/platform-build-guides/building-react-native-applications"},next:{title:"Building Flutter Web Applications",permalink:"/nextjs-upload-file-tryout/build/platform-build-guides/building-flutter-applications/building-flutter-web-applications"}},h={},f=[{value:"Creating a Flutter Build Profile",id:"creating-a-flutter-build-profile",level:3},{value:"Build Configuration for Flutter Applications",id:"build-configuration-for-flutter-applications",level:3},{value:"Private Modules",id:"private-modules",level:3},{value:"Build Configuration for Flutter iOS applications",id:"build-configuration-for-flutter-ios-applications",level:3},{value:"Build Configuration for Flutter Android applications",id:"build-configuration-for-flutter-android-applications",level:3},{value:"Build Configuration for Flutter Web applications",id:"build-configuration-for-flutter-web-applications",level:3},{value:"Sending the Build Status to the Repository Providers",id:"sending-the-build-status-to-the-repository-providers",level:3},{value:"Build Triggers",id:"build-triggers",level:3},{value:"Signing Flutter iOS Applications",id:"signing-flutter-ios-applications",level:3},{value:"Signing Flutter Android Applications",id:"signing-flutter-android-applications",level:3},{value:"Distribution (Deployment) Configuration",id:"distribution-deployment-configuration",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Build Workflows for Flutter Applications",id:"build-workflows-for-flutter-applications",level:3},{value:"How to Set a Specific Flutter Version for the Build",id:"how-to-set-a-specific-flutter-version-for-the-build",level:3},{value:"Starting a Flutter Build and After a Build",id:"starting-a-flutter-build-and-after-a-build",level:3},...u.RM];function g(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"building-flutter-mobile-applications",children:"Building Flutter Mobile Applications"}),"\n",(0,n.jsx)(t.p,{children:"You can build your Flutter applications in Appcircle for iOS or Android platforms."}),"\n",(0,n.jsx)("iframe",{width:"650",height:"315",src:"https://www.youtube.com/embed/XiRQOCw0wxk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,n.jsx)(t.h3,{id:"creating-a-flutter-build-profile",children:"Creating a Flutter Build Profile"}),"\n",(0,n.jsxs)(t.p,{children:["Simply create a new build profile as usual and select your target operating system as iOS or Android. Select **Flutter **for ",(0,n.jsx)(t.strong,{children:"Target Platform"}),"."]}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/add-flutter-profile.png"}),"\n",(0,n.jsx)(t.p,{children:"Once your build profile is created, click on it and connect your Git repository. For details on this step, please follow the directions on the following page:"}),"\n",(0,n.jsx)(l.A,{url:"/build/manage-the-connections/adding-a-build-profile",children:"Adding a Build Profile"}),"\n",(0,n.jsxs)(t.p,{children:["To test drive the Appcircle platform for Flutter app builds, you can also use our sample Flutter App by forking it or adding it as a public repository: ",(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-sample-flutter",children:(0,n.jsx)(i,{url:"https://github.com/appcircleio/appcircle-sample-flutter",title:"GitHub - appcircleio/appcircle-sample-flutter: Appcircle Flutter Sample Project",description:"Appcircle Flutter Sample Project. Contribute to appcircleio/appcircle-sample-flutter development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/601b11e41157a3e6a194bf6da86c4c480fb06793a98d9fd7a86a8e9541996352/appcircleio/appcircle-sample-flutter"})})]}),"\n",(0,n.jsx)(t.h3,{id:"build-configuration-for-flutter-applications",children:"Build Configuration for Flutter Applications"}),"\n",(0,n.jsx)(t.p,{children:"Build configuration options are very similar to native iOS or Android applications. You can select configuration details, build triggers, signing identities and distribution options."}),"\n",(0,n.jsx)(t.h3,{id:"private-modules",children:"Private Modules"}),"\n",(0,n.jsxs)(t.p,{children:["If your project uses private modules, don't forget the add necessary SSH keys to your workflow steps. You can use ",(0,n.jsx)(t.code,{children:"Activate SSH Private Key"})," step to add your private SSH keys."]}),"\n",(0,n.jsx)(l.A,{url:"/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh",children:"Connecting to Private Repository via SSH"}),"\n",(0,n.jsxs)(t.p,{children:["You may also use ",(0,n.jsx)(t.code,{children:"Authenticate with netrc"})," step to access your private modules."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-netrc-component",children:(0,n.jsx)(i,{url:"https://github.com/appcircleio/appcircle-netrc-component",title:"github.com",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})}),"\n",(0,n.jsx)(t.h3,{id:"build-configuration-for-flutter-ios-applications",children:"Build Configuration for Flutter iOS applications"}),"\n",(0,n.jsxs)(t.p,{children:["First, we need to set up a build configuration. Select the configuration from the ",(0,n.jsx)(t.strong,{children:"Configuration"}),' section. The first step will be to enter project details. You can enter details manually or click on the "Autofill" button to retrieve them from your project.']}),"\n",(0,n.jsxs)(t.p,{children:["Your iOS project needs to have an ",(0,n.jsx)(t.strong,{children:"Xcode project"})," or an ",(0,n.jsx)(t.strong,{children:"Xcode workspace"})," and a ",(0,n.jsx)(t.strong,{children:"shared scheme"})," to complete the build configuration successfully. Appcircle can fetch these workspaces and shared schemes from your branch automatically."]}),"\n",(0,n.jsx)(t.p,{children:"You can also select a specific Xcode version if you have certain dependencies or if you want to test your build on a specific version."}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-flutter-config-ios.png"}),"\n",(0,n.jsx)(t.h3,{id:"build-configuration-for-flutter-android-applications",children:"Build Configuration for Flutter Android applications"}),"\n",(0,n.jsxs)(t.p,{children:["First, we need to set up a build configuration. Select the configuration from the ",(0,n.jsx)(t.strong,{children:"Configuration"})," section. The first step will be to enter project details. For Flutter Android apps, the fetch operation is not required. You can simply select the build mode (e.g. debug or release) and the output type (APK or Splik APK as AAB)."]}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-flutter-config-android.png"}),"\n",(0,n.jsx)(t.h3,{id:"build-configuration-for-flutter-web-applications",children:"Build Configuration for Flutter Web applications"}),"\n",(0,n.jsx)(t.p,{children:"Flutter Web apps are built alongside with iOS or Android Flutter apps. For more information please refer to the following guide:"}),"\n",(0,n.jsx)(l.A,{url:"/build/platform-build-guides/building-flutter-applications/building-flutter-web-applications",children:"Building Flutter Web Applications"}),"\n",(0,n.jsx)(t.h3,{id:"sending-the-build-status-to-the-repository-providers",children:"Sending the Build Status to the Repository Providers"}),"\n",(0,n.jsx)(t.p,{children:"At the bottom of the config tab, you will the **Set Commit Build Status **option."}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/create-flutter-build-commit-status.png"}),"\n",(0,n.jsx)(t.p,{children:"When this option is enabled, the build status for that commit is shared with the repository provider."}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/image (213).png"}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/appcircle-github-commit-status-pass.png"}),"\n",(0,n.jsx)(t.h3,{id:"build-triggers",children:"Build Triggers"}),"\n",(0,n.jsx)(t.p,{children:"The next section, Triggers, is common for both iOS and Android."}),"\n",(0,n.jsx)(t.p,{children:"Appcircle allows you to trigger builds manually or automatically using build triggers."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"On push: Whenever code is pushed to a configured branch, the build is triggered."}),"\n",(0,n.jsx)(t.li,{children:"On a tagged push: Whenever a tagged commit is pushed, the build is triggered for that commit. Commits without any tags are ignored."}),"\n",(0,n.jsx)(t.li,{children:"On push with selective tags: Whenever a commit includes one of the typed in tags, the build is triggered. You can specify tags with Unix shell-style wildcards to trigger builds."}),"\n"]}),"\n",(0,n.jsx)(l.A,{url:"/build/build-process-management/build-manually-or-with-triggers",children:(0,n.jsx)(t.p,{children:"Build Manually or Automatically with Webhooks and Triggers"})}),"\n",(0,n.jsx)(t.h3,{id:"signing-flutter-ios-applications",children:"Signing Flutter iOS Applications"}),"\n",(0,n.jsxs)(t.p,{children:["The next step in the build configuration is Signing. Here, please select the provisioning profile you added in the ",(0,n.jsx)(t.a,{href:"/signing-identities/ios-certificates-and-provisioning-profiles",children:"iOS Certificates & Provisioning Profiles"})," section."]}),"\n",(0,n.jsx)(t.p,{children:"For signing iOS apps, press add, select the bundle ID from the first dropdown and then select a compatible provisioning profile (added from the signing identities module) from the second dropdown."}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/build-profile-ios-signing-configuration.png"}),"\n",(0,n.jsx)(t.h3,{id:"signing-flutter-android-applications",children:"Signing Flutter Android Applications"}),"\n",(0,n.jsxs)(t.p,{children:["Here, please select the Android Keystore you added in the ",(0,n.jsx)(t.a,{href:"/signing-identities/android-keystores",children:"Android Keystores"})," section. For signing Android apps, simply select a keystore (added from the signing identities module)."]}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-android-signing.png"}),"\n",(0,n.jsx)(t.h3,{id:"distribution-deployment-configuration",children:"Distribution (Deployment) Configuration"}),"\n",(0,n.jsx)(t.p,{children:"The next step on build configuration is Distribution."}),"\n",(0,n.jsx)(t.p,{children:"You can select a previously created distribution profile or create a new one in this window. Use the top input box to enter a name for the new distribution profile you want to create. Press enter or click on the green + icon on the right to create the distribution profile."}),"\n",(0,n.jsx)(t.p,{children:"Finally, check Auto Distribute if you want your build to be deployed to the Testing Distribution automatically and Auto Deployment if you want the build to be deployed to Store Submission automatically."}),"\n",(0,n.jsx)(l.A,{url:"/distribute/create-or-select-a-distribution-profile",children:(0,n.jsx)(t.p,{children:"Create a Distribution Profile and Sharing with Testers"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Any previous build can be deployed to the Testing Distribution without the need for rebuilding."})}),"\n",(0,n.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,n.jsx)(t.p,{children:"The final tab is to add environment variables to the build. For advanced use cases, you can define variables and secrets to be incorporated during the build in the Environment Variables submodule so that you don\u2019t need to store certain keys and configurations within the repository."}),"\n",(0,n.jsx)(t.p,{children:"Please refer to the following document for more information on environment variables:"}),"\n",(0,n.jsx)(l.A,{url:"/environment-variables",children:(0,n.jsx)(t.p,{children:"Why to Use Environment Variables and Secrets?"})}),"\n",(0,n.jsx)(t.h3,{id:"build-workflows-for-flutter-applications",children:"Build Workflows for Flutter Applications"}),"\n",(0,n.jsx)(t.p,{children:"Once you complete your build configuration, you can edit your build workflow. Flutter builds have additional steps for Flutter commands. You can also arrange, add or remove workflow steps using Appcircle's workflow editor and Workflow Marketplace."}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/image (6).png"}),"\n",(0,n.jsx)(t.p,{children:"To learn more about Appcircle's Workflow editor, see the corresponding page below:"}),"\n",(0,n.jsx)(l.A,{url:"/workflows",children:"What are Workflows and How to Use Them?"}),"\n",(0,n.jsx)(t.h3,{id:"how-to-set-a-specific-flutter-version-for-the-build",children:"How to Set a Specific Flutter Version for the Build"}),"\n",(0,n.jsx)(t.p,{children:'To change the Flutter version, open the Flutter Install workflow step from the workflow editor and set the version under the "Selected Flutter Version" field.'}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-flutter-select-version-workflow.png"}),"\n",(0,n.jsxs)(t.p,{children:["You can also set the preferred Flutter version on config screen. If you don't set any version, ",(0,n.jsx)(t.code,{children:"stable"})," version will be used."]}),"\n",(0,n.jsx)(t.h3,{id:"starting-a-flutter-build-and-after-a-build",children:"Starting a Flutter Build and After a Build"}),"\n",(0,n.jsxs)(t.p,{children:["You are now ready to start your first build. Select the branach from the left side and click on the ",(0,n.jsx)(t.strong,{children:"Start Build"})," button."]}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-start-build.png"}),"\n",(0,n.jsxs)(t.p,{children:["Select a configuration, workflow, commit id and click on ",(0,n.jsx)(t.strong,{children:"Start Build button"})]}),"\n",(0,n.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-start-build-modal.png"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"As of Flutter 1.21, the Flutter SDK includes the full Dart SDK. So if you have Flutter installed, you might not need to explicitly download the Dart SDK. If you need to use a different Dart version than the bundled one, you can install it using the below commands."})}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(s.A,{value:"ios",label:"iOS",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"brew tap dart-lang/dart\nbrew install dart\n"})})}),(0,n.jsx)(s.A,{value:"android",label:"Android",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:" sudo apt-get update\n sudo apt-get install apt-transport-https\n sudo sh -c 'wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'\n sudo sh -c 'wget -qO- https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'\n sudo apt-get install dart\n"})})})]}),"\n","\n",(0,n.jsx)(u.Ay,{})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},74597:(e,t,i)=>{i.d(t,{Ay:()=>a,RM:()=>o});var n=i(74848),r=i(28453);const o=[{value:"Need help?",id:"need-help",level:3}];function l(e){const t={a:"a",h3:"h3",p:"p",...(0,r.R)(),...e.components},{ExternalUrlRef:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"need-help",children:"Need help?"}),"\n",(0,n.jsx)(t.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,n.jsx)(i,{url:"https://join.slack.com/t/appcircleio/signup",title:"join.slack.com",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>l});i(96540);var n=i(18215);const r={tabItem:"tabItem_Ymn6"};var o=i(74848);function l(e){let{children:t,hidden:i,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>w});var n=i(96540),r=i(18215),o=i(23104),l=i(56347),a=i(205),s=i(57485),u=i(31682),d=i(89466);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:r}}=e;return{value:t,label:i,attributes:n,default:r}}))}(i);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function h(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:i}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,s.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:i=!1,groupId:r}=e,o=p(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,c]=f({queryString:i,groupId:r}),[g,b]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Dv)(i);return[r,(0,n.useCallback)((e=>{i&&o.set(e)}),[i,o])]}({groupId:r}),m=(()=>{const e=u??g;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{m&&s(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var b=i(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(74848);function v(e){let{className:t,block:i,selectedValue:n,selectValue:l,tabValues:a}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const t=e.currentTarget,i=s.indexOf(t),r=a[i].value;r!==n&&(u(t),l(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=s.indexOf(e.currentTarget)+1;t=s[i]??s[0];break}case"ArrowLeft":{const i=s.indexOf(e.currentTarget)-1;t=s[i]??s[s.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},t),children:a.map((e=>{let{value:t,label:i,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>s.push(e),onKeyDown:c,onClick:d,...o,className:(0,r.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function j(e){let{lazy:t,children:i,selectedValue:r}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(y,{...e,children:c(e.children)},String(t))}},70344:(e,t,i)=>{i.d(t,{A:()=>u});var n,r,o=i(96540);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},l.apply(null,arguments)}const a=e=>{let{title:t,titleId:i,...a}=e;return o.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":i},a),t?o.createElement("title",{id:i},t):null,n||(n=o.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),r||(r=o.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var s=i(74848);function u(e){let{children:t,url:i}=e;return(0,s.jsxs)("a",{href:i,className:"content-ref-card",children:[(0,s.jsx)(a,{title:"File Icon",className:"file-icon"}),t]})}},69678:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var n=i(74848);function r(e){let{url:t,description:i=""}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:""!=i?24:8},children:[(0,n.jsx)("img",{className:"screenshot",src:t,style:{borderRadius:5,marginBottom:""!=i?8:24}}),""!=i?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{paddingTop:0,marginTop:0,fontWeight:"500",fontStyle:"italic",color:"rgba(0,0,0,0.5)"},children:i})}):(0,n.jsx)(n.Fragment,{})]})})}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var n=i(96540);const r={},o=n.createContext(r);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);