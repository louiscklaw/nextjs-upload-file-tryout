"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[87028],{74597:(e,i,o)=>{o.d(i,{Ay:()=>c,RM:()=>r});var n=o(74848),t=o(28453);const r=[{value:"Need help?",id:"need-help",level:3}];function l(e){const i={a:"a",h3:"h3",p:"p",...(0,t.R)(),...e.components},{ExternalUrlRef:o}=i;return o||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"need-help",children:"Need help?"}),"\n",(0,n.jsx)(i.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,n.jsx)(o,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function c(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},40146:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=o(74848),t=o(28453),r=o(69678),l=o(74597);const c={title:"Adding a Build Profile & Connecting a Repository",description:"Learn how to add a build profile and connect a repository in Appcircle",tags:["build profile","connection","repository"],sidebar_position:1},a="Adding a Build Profile & Connecting a Repository",s={id:"build/manage-the-connections/adding-a-build-profile/index",title:"Adding a Build Profile & Connecting a Repository",description:"Learn how to add a build profile and connect a repository in Appcircle",source:"@site/docs/build/manage-the-connections/adding-a-build-profile/index.md",sourceDirName:"build/manage-the-connections/adding-a-build-profile",slug:"/build/manage-the-connections/adding-a-build-profile/",permalink:"/build/manage-the-connections/adding-a-build-profile/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/build/manage-the-connections/adding-a-build-profile/index.md",tags:[{label:"build profile",permalink:"/tags/build-profile"},{label:"connection",permalink:"/tags/connection"},{label:"repository",permalink:"/tags/repository"}],version:"current",sidebarPosition:1,frontMatter:{title:"Adding a Build Profile & Connecting a Repository",description:"Learn how to add a build profile and connect a repository in Appcircle",tags:["build profile","connection","repository"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Manage the Connections",permalink:"/build/manage-the-connections/"},next:{title:"Connecting to GitHub",permalink:"/build/manage-the-connections/adding-a-build-profile/connecting-to-github"}},d={},p=[{value:"Create a build profile (app)",id:"create-a-build-profile-app",level:2},{value:"Connect your repository",id:"connect-your-repository",level:2},{value:"View the newly created build profile",id:"view-the-newly-created-build-profile",level:2},{value:"Delete a Build Profile",id:"delete-a-build-profile",level:3},...l.RM];function u(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"adding-a-build-profile--connecting-a-repository",children:"Adding a Build Profile & Connecting a Repository"}),"\n",(0,n.jsx)(i.p,{children:"New to Appcircle Build module? Follow our quick start guide to build your iOS and Android apps in the cloud."}),"\n",(0,n.jsx)(i.p,{children:"The Build Module allows you to streamline and automate your mobile app build flows."}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"The Build Module is the first step to automate your CI/CD processes via Appcircle."})}),"\n",(0,n.jsx)(i.h2,{id:"create-a-build-profile-app",children:"Create a build profile (app)"}),"\n",(0,n.jsx)(i.p,{children:"A build profile is an app that you can build in a target OS and framework."}),"\n",(0,n.jsx)(i.p,{children:'To create your first build profile, click on the orange "Add New" button on the top left of the screen.'}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/adding-a-build-profile.png"}),"\n",(0,n.jsx)(i.p,{children:"Enter a name for your build profile and select the target operating system (iOS or Android) and target platform."}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/adding-build-profile-ios-connection-new.png"}),"\n",(0,n.jsx)(i.h2,{id:"connect-your-repository",children:"Connect your repository"}),"\n",(0,n.jsxs)(i.p,{children:["You can connect GitHub through a GitHub app or Bitbucket and GitLab repositories to your build profile through OAuth apps. Alternatively, You can connect private repositories through SSH and public repositories directly on GitHub, Bitbucket, GitLab, and other compatible git providers such as Azure DevOps and AWS CodeCommit. (",(0,n.jsx)(i.a,{href:"/troubleshooting-faq/common-issues#how-to-connect-to-aws-codecommit-repositories-through-ssh",children:"Please refer here for more information on AWS CodeCommit connections."}),")"]}),"\n",(0,n.jsx)(i.p,{children:"You can also connect to your Self Hosted Bitbucket and GitLab account directly within Appcircle."}),"\n",(0,n.jsxs)(i.p,{children:["If you authorize Appcircle to connect to your Github, BitBucket, or GitLab account, you can auto-build your project with hooks, get build statuses and the full list of commits. If you connect to a repository through SSH or through a public URL, you need to ",(0,n.jsx)(i.a,{href:"/build/build-process-management/build-manually-or-with-triggers#setting-up-manual-webhooks-for-ssh-and-public-repositories",children:"set up webhooks manually"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["To test drive Appcircle, you can find various sample projects in the ",(0,n.jsx)(i.a,{href:"https://github.com/appcircleio?q=sample",children:"Appcircle GitHub page"})," or you can just press on the ",(0,n.jsx)(i.strong,{children:"Quick start using the sample repository"})," button to populate the repository URL field with a compatible project based on the selected framework."]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/adding-a-build-profile-connection.png"}),"\n",(0,n.jsxs)(i.p,{children:['When the "Autofill" toggle is activated on the ',(0,n.jsx)(i.strong,{children:"Select Repository"})," popup, Appcircle will try to create a default configuration using the selected repository and fill in the necessary fields."]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/autofill.png"}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsxs)(i.p,{children:["When you have exceeded the build limit of your plan, Appcircle will not be able to ",(0,n.jsx)(i.strong,{children:"Autofill"})," your build profile, although you activated the toggle."]})}),"\n",(0,n.jsx)(i.p,{children:"Refer to the relative documents under this page about the connections and differences between connection types:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-github",children:"Connect to GitHub"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-bitbucket",children:"Connect to Bitbucket"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-gitlab",children:"Connect to GitLab"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh",children:"Connect to Private Repository via SSH Key"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-public-repository",children:"Connect to Public Repository"})}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"view-the-newly-created-build-profile",children:"View the newly created build profile"}),"\n",(0,n.jsx)(i.p,{children:"You will see your build profile once it has been created. Click on the build profile to connect a repository and fetch your code to Appcircle."}),"\n",(0,n.jsx)(i.p,{children:"Appcircle will then pull your branches, commits, and other information from your repository."}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/adding-a-build-profile-aftermath.png"}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/adding-a-build-profile-inside.png"}),"\n",(0,n.jsx)(i.h3,{id:"delete-a-build-profile",children:"Delete a Build Profile"}),"\n",(0,n.jsx)(i.p,{children:"In order to delete a build, simply click on the Three Dot and click delete."}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-profile-delete-box.png"}),"\n",(0,n.jsx)(i.p,{children:"After the prompt, the profile will be deleted."}),"\n",(0,n.jsx)(i.p,{children:"In order to free up storage in your organization, you should also remove the other references pointing to the artifact. In example, if you have the same artifact on the testing distribution, you should also delete those artifacts as well."}),"\n",(0,n.jsxs)(i.p,{children:["Is your artifact storage full? Learn more about freeing up space ",(0,n.jsx)(i.a,{href:"/troubleshooting-faq/common-issues#artifact-storage-is-full",children:"here"}),"."]}),"\n","\n",(0,n.jsx)(l.Ay,{})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},69678:(e,i,o)=>{o.d(i,{A:()=>t});o(96540);var n=o(74848);function t(e){let{url:i}=e;return(0,n.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,o)=>{o.d(i,{R:()=>l,x:()=>c});var n=o(96540);const t={},r=n.createContext(t);function l(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);