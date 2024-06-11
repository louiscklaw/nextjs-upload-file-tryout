"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[17207],{74597:(e,i,n)=>{n.d(i,{Ay:()=>l,RM:()=>t});var r=n(74848),o=n(28453);const t=[{value:"Need help?",id:"need-help",level:3}];function s(e){const i={a:"a",h3:"h3",p:"p",...(0,o.R)(),...e.components},{ExternalUrlRef:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h3,{id:"need-help",children:"Need help?"}),"\n",(0,r.jsx)(i.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,r.jsx)(n,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function l(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},47085:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(74848),o=n(28453),t=n(70344),s=n(74597);const l={title:"Appcircle Onboarding",description:"To add your iOS or Android project to Appcircle, you need to complete the following checklist. The list is divided into sub-sections.",tags:["onboarding","best practices"],sidebar_position:2},c="Appcircle Onboarding",a={id:"best-practices/onboarding",title:"Appcircle Onboarding",description:"To add your iOS or Android project to Appcircle, you need to complete the following checklist. The list is divided into sub-sections.",source:"@site/docs/best-practices/onboarding.md",sourceDirName:"best-practices",slug:"/best-practices/onboarding",permalink:"/nextjs-upload-file-tryout/best-practices/onboarding",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/best-practices/onboarding.md",tags:[{label:"onboarding",permalink:"/nextjs-upload-file-tryout/tags/onboarding"},{label:"best practices",permalink:"/nextjs-upload-file-tryout/tags/best-practices"}],version:"current",sidebarPosition:2,frontMatter:{title:"Appcircle Onboarding",description:"To add your iOS or Android project to Appcircle, you need to complete the following checklist. The list is divided into sub-sections.",tags:["onboarding","best practices"],sidebar_position:2},sidebar:"mySidebar",previous:{title:"Building Multiple Apps in One Profile",permalink:"/nextjs-upload-file-tryout/best-practices/building-multiple-apps-in-one-profile"},next:{title:"Troubleshooting & FAQ",permalink:"/nextjs-upload-file-tryout/troubleshooting-faq/"}},d={},p=[{value:"Firewall",id:"firewall",level:2},{value:"Repository Owner",id:"repository-owner",level:2},{value:"Repository Type",id:"repository-type",level:2},{value:"Cloud",id:"cloud",level:3},{value:"Self Hosted",id:"self-hosted",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"SSH Private Key",id:"ssh-private-key",level:3},{value:"Netrc File",id:"netrc-file",level:3},{value:"Signing",id:"signing",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Integrations",id:"integrations",level:2},{value:"Extra suggestions",id:"extra-suggestions",level:2},...s.RM];function h(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"appcircle-onboarding",children:"Appcircle Onboarding"}),"\n",(0,r.jsx)(i.p,{children:"To add your iOS or Android project to Appcircle, you must complete the following checklist, divided into sub-sections."}),"\n",(0,r.jsx)(i.h1,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,r.jsxs)(i.p,{children:["Before building the project on Appcircle, ensure it builds properly on your local computer. Developers often do not commit changes, or their changes may not end up in the repo due to the ",(0,r.jsx)(i.code,{children:".gitignore"})," file. Follow these steps to ensure that the project builds without errors:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Clone the repo to another folder."}),"\n",(0,r.jsx)(i.li,{children:"If it's an iOS project using Cocoapods or Carthage, run pod install or carthage bootstrap."}),"\n",(0,r.jsx)(i.li,{children:"Build the project."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"If you encounter any errors, correct them and push the changes to your repo. Appcircle always starts a machine from scratch, so it must have access to all files required to build your project."}),"\n",(0,r.jsx)(i.p,{children:"For detailed information on how Appcircle configures its build machines and manages dependencies, refer to our Infrastructure Documentation. This guide will help you understand the environments in which your applications are built, ensuring you have all necessary files and settings in place"}),"\n",(0,r.jsx)(t.A,{url:"/infrastructure",children:(0,r.jsx)(i.p,{children:"Infrastructure"})}),"\n",(0,r.jsx)(i.p,{children:"Once your project builds without error, complete the following sections:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Repository"}),"\n",(0,r.jsx)(i.li,{children:"Dependencies"}),"\n",(0,r.jsx)(i.li,{children:"Signing"}),"\n",(0,r.jsx)(i.li,{children:"Integrations"}),"\n",(0,r.jsx)(i.li,{children:"Extra suggestions"}),"\n"]}),"\n",(0,r.jsx)(i.h1,{id:"repository",children:"Repository"}),"\n",(0,r.jsx)(i.h2,{id:"firewall",children:"Firewall"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Internal Networks:"})," If your repositories are hosted internally, you must configure firewall settings to allow the runners to clone them. This setup is essential to prevent access issues during the build process."]}),"\n"]}),"\n",(0,r.jsx)(t.A,{url:"/build/manage-the-connections/accessing-repositories-in-internal-networks-firewalls/",children:(0,r.jsx)(i.p,{children:"Accessing Repositories in Internal Networks (Firewalls)"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"External Hosts (e.g., GitHub.com):"})," If your repositories are hosted on external platforms like GitHub, no additional firewall configuration is necessary."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"repository-owner",children:"Repository Owner"}),"\n",(0,r.jsx)(i.p,{children:"The person adding the repository to Appcircle must own the repository. If the owner has too many repositories, consider creating a bot user specifically for Appcircle to access only the required repositories."}),"\n",(0,r.jsx)(i.h2,{id:"repository-type",children:"Repository Type"}),"\n",(0,r.jsx)(i.h3,{id:"cloud",children:"Cloud"}),"\n",(0,r.jsx)(i.p,{children:"Access to repositories on GitHub and GitLab is managed by installing an app to the repository. The user who adds the repo must have the necessary access to install the application."}),"\n",(0,r.jsx)(i.h3,{id:"self-hosted",children:"Self Hosted"}),"\n",(0,r.jsx)(i.p,{children:"If your repository is Self Hosted with GitLab or Bitbucket, add your repo using an Access Token."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Azure DevOps"})}),"\n",(0,r.jsx)(i.p,{children:"Azure DevOps requires a Personal Access Token to access the repository. The token must have access to the necessary repositories."}),"\n",(0,r.jsx)(t.A,{url:"/build/manage-the-connections/adding-a-build-profile/connecting-to-azure",children:(0,r.jsx)(i.p,{children:"Connecting to Azure DevOps"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"GitLab"})}),"\n",(0,r.jsx)(i.p,{children:"Generate a Personal Access Token or Project Access Token for GitLab. A Personal Access Token allows access to all the repositories of that person. A Project Access Token allows access to all the repositories under the specified project."}),"\n",(0,r.jsx)(t.A,{url:"/build/manage-the-connections/adding-a-build-profile/connecting-to-gitlab",children:(0,r.jsx)(i.p,{children:"Connecting to GitLab"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Bitbucket"})}),"\n",(0,r.jsx)(i.p,{children:"Bitbucket also supports using repository tokens to access a single repository."}),"\n",(0,r.jsx)(i.p,{children:"Personal Access Token allows to access all the repositories of that person. Project Access Token allows to access all the repositories under the specified project."}),"\n",(0,r.jsx)(t.A,{url:"/build/manage-the-connections/adding-a-build-profile/connecting-to-bitbucket",children:(0,r.jsx)(i.p,{children:"Connecting to Bitbucket"})}),"\n",(0,r.jsx)(i.p,{children:"Appcircle requires admin permission to function properly, which is necessary to create relevant WebHooks automatically."}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"If dependencies used by the repo are in a different project or inaccessible to the person, the build will throw an error. Therefore, the added token must have access to all necessary dependencies."})}),"\n",(0,r.jsx)(i.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsx)(i.p,{children:"If you use libraries in a private repo, these must be accessible with the tokens mentioned above. If this is not possible, access these libraries using one of the following methods:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"SSH Private Key"}),"\n",(0,r.jsx)(i.li,{children:".netrc file"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"ssh-private-key",children:"SSH Private Key"}),"\n",(0,r.jsx)(i.p,{children:"Create a new SSH key, upload the public key to your Repo, and the private key to Appcircle. Follow the steps in this guide."}),"\n",(0,r.jsx)(t.A,{url:"/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh",children:(0,r.jsx)(i.p,{children:"Connecting to Private Repository via SSH"})}),"\n",(0,r.jsx)(i.h3,{id:"netrc-file",children:"Netrc File"}),"\n",(0,r.jsx)(i.p,{children:"The .netrc file contains login and initialization information used by the auto-login process. You can use this component to add credentials for hosts such as your repositories or external hosts. Git automatically recognizes the .netrc file.\\"}),"\n",(0,r.jsx)(t.A,{url:"/workflows/common-workflow-steps/authenticate-with-netrc",children:(0,r.jsx)(i.p,{children:"Authenticate with .netrc"})}),"\n",(0,r.jsx)(i.h2,{id:"signing",children:"Signing"}),"\n",(0,r.jsx)(i.p,{children:"To upload artifacts to the App Store or GooglePlay, the files must be signed. Upload the following files to Appcircle's Signing Module:"}),"\n",(0,r.jsx)(i.h3,{id:"ios",children:"iOS"}),"\n",(0,r.jsx)(i.p,{children:"There are two types of signing for iOS, Manual and Automatic."}),"\n",(0,r.jsx)(i.p,{children:"Manual Signing requires you to upload the provisioning profile for each bundle id. For Automatic code signing, only 2 certificates and App Store Connect Key must be added."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Manual Signing:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Upload the Distribution Certificate as a ",(0,r.jsx)(i.code,{children:".p12"})," file. It is better to create a new distribution certificate specifically for Appcircle."]}),"\n",(0,r.jsx)(i.li,{children:"Upload Provisioning profiles created with the above certificates. A green checkmark will appear next to the entry if successful. If not, refresh the page or check for missing certificate files."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Automatic Sign"})}),"\n",(0,r.jsx)(i.p,{children:"Automatic signing works with Xcode 13 and later. It requires:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"One Distribution Certificate"}),"\n",(0,r.jsx)(i.li,{children:"One Development Certificate"}),"\n",(0,r.jsx)(i.li,{children:"App Store Connect API Key"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Provide both development and distribution certificates to prevent Xcode from continuously creating new certificates in your account."}),"\n",(0,r.jsx)(i.h3,{id:"android",children:"Android"}),"\n",(0,r.jsxs)(i.p,{children:["For Android, upload the keystore file used to sign the project. Simply uploading this file may not suffice for signing; adjustments to the ",(0,r.jsx)(i.code,{children:"build.gradle"})," file might also be necessary. Consult this document for further guidance."]}),"\n",(0,r.jsx)(t.A,{url:"/build/platform-build-guides/building-android-applications/android-signing-for-google-play#enable-v2-sign-through-the-android-project-buildgradle",children:(0,r.jsx)(i.p,{children:"Android Signing for Google Play"})}),"\n",(0,r.jsx)(i.h2,{id:"integrations",children:"Integrations"}),"\n",(0,r.jsx)(i.p,{children:"Add App Store, Google Play, or Huawei AppGallery keys to Appcircle to upload IPA or APK-AAB files. Follow these guides for detailed instructions:"}),"\n",(0,r.jsx)(t.A,{url:"/publish-integrations/ios-publish-integrations/send-to-app-store",children:(0,r.jsx)(i.p,{children:"Send to App Store"})}),"\n",(0,r.jsx)(t.A,{url:"/publish-integrations/android-publish-integrations/publish-to-google-play",children:(0,r.jsx)(i.p,{children:"Send to Google Play"})}),"\n",(0,r.jsx)(t.A,{url:"/publish-integrations/android-publish-integrations/publish-to-huawei-appgallery",children:(0,r.jsx)(i.p,{children:"Send to Huawei"})}),"\n",(0,r.jsx)(i.h2,{id:"extra-suggestions",children:"Extra suggestions"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"General"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Manage confidential or frequently changing information with Environment Variables to achieve different outputs by selecting different variable groups without altering your code."}),"\n"]}),"\n",(0,r.jsx)(t.A,{url:"/environment-variables/managing-variables#creating-environment-variable-groups",children:(0,r.jsx)(i.p,{children:"Creating Environment Variable Groups"})}),"\n",(0,r.jsx)(t.A,{url:"/environment-variables/platform-specific-usage/using-environment-variables-in-ios-projects#using-different-values-for-different-stages",children:(0,r.jsx)(i.p,{children:"Using Different Values for Different Stages"})}),"\n",(0,r.jsx)(t.A,{url:"/environment-variables/platform-specific-usage/using-environment-variables-in-android-projects",children:(0,r.jsx)(i.p,{children:"Using Environment Variables in Android Projects"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Specify versions for React Native and Flutter on the config screen to avoid building with the latest version by default."}),"\n",(0,r.jsx)(i.li,{children:"Disable Flipper in React Native to shorten build times by modifying the Podfile as follows:"}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"if !ENV['AC_APPCIRCLE']\n    use_flipper!\n    post_install do |installer|\n      flipper_post_install(installer)\n    end\n  end\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"iOS"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["If you are using CocoaPods, SwiftPM or Carthage, you need to commit ",(0,r.jsx)(i.code,{children:"Podfile.lock"})," ",(0,r.jsx)(i.code,{children:"Package.resolved"})," and ",(0,r.jsx)(i.code,{children:"Cartfile.resolved"})," files. When these files are not available, the wrong versions may be installed."]}),"\n",(0,r.jsx)(i.li,{children:"Avoid making local changes to your pods. If necessary, fork the original pod and make changes in that fork. Appcircle must have access to the same code as your local machine."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Android"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Include your Gradle folder in your repo. Appcircle uses the ",(0,r.jsx)(i.code,{children:"./gradlew"})," command to build your project. If this file is missing, the build will fail."]}),"\n",(0,r.jsxs)(i.li,{children:["Update your build.gradle file to replace ",(0,r.jsx)(i.code,{children:"jcenter()"})," with ",(0,r.jsx)(i.code,{children:"mavenCentral()"})," if your project uses Bintray resources, as JFrog shut down Bintray on May 1, 2021. Some dependencies may not be available on Maven."]}),"\n",(0,r.jsxs)(i.li,{children:["Consider uploading dependencies used from jitpack to ",(0,r.jsx)(i.code,{children:"mavenCentral()"}),". Jitpack has reliability issues, and while your local builds may use cached versions, Appcircle downloads your dependencies for each build, which can lead to problems.\\"]}),"\n"]}),"\n","\n",(0,r.jsx)(s.Ay,{}),"\n",(0,r.jsx)(i.p,{children:"Need more help? Check out our FAQ section:"}),"\n",(0,r.jsx)(t.A,{url:"/troubleshooting-faq",children:(0,r.jsx)(i.p,{children:"FAQ"})})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},70344:(e,i,n)=>{n.d(i,{A:()=>a});var r,o,t=n(96540);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}const l=e=>{let{title:i,titleId:n,...l}=e;return t.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":n},l),i?t.createElement("title",{id:n},i):null,r||(r=t.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),o||(o=t.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var c=n(74848);function a(e){let{children:i,url:n}=e;return(0,c.jsxs)("a",{href:n,className:"content-ref-card",children:[(0,c.jsx)(l,{title:"File Icon",className:"file-icon"}),i]})}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>l});var r=n(96540);const o={},t=r.createContext(o);function s(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);