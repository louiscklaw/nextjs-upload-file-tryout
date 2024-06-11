"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[87916],{74597:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>r});var o=i(74848),t=i(28453);const r=[{value:"Need help?",id:"need-help",level:3}];function c(e){const n={a:"a",h3:"h3",p:"p",...(0,t.R)(),...e.components},{ExternalUrlRef:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"need-help",children:"Need help?"}),"\n",(0,o.jsx)(n.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,o.jsx)(i,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},91903:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var o=i(74848),t=i(28453),r=i(69678),c=i(74597);const l={title:"Connecting to Public Repository",description:"Learn how to connect to a public repository in Appcircle",tags:["build profile","connection","public repository"],sidebar_position:5},s="Connecting to Public Repository",a={id:"build/manage-the-connections/adding-a-build-profile/connecting-to-public-repository",title:"Connecting to Public Repository",description:"Learn how to connect to a public repository in Appcircle",source:"@site/docs/build/manage-the-connections/adding-a-build-profile/connecting-to-public-repository.md",sourceDirName:"build/manage-the-connections/adding-a-build-profile",slug:"/build/manage-the-connections/adding-a-build-profile/connecting-to-public-repository",permalink:"/nextjs-upload-file-tryout/build/manage-the-connections/adding-a-build-profile/connecting-to-public-repository",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/build/manage-the-connections/adding-a-build-profile/connecting-to-public-repository.md",tags:[{label:"build profile",permalink:"/nextjs-upload-file-tryout/tags/build-profile"},{label:"connection",permalink:"/nextjs-upload-file-tryout/tags/connection"},{label:"public repository",permalink:"/nextjs-upload-file-tryout/tags/public-repository"}],version:"current",sidebarPosition:5,frontMatter:{title:"Connecting to Public Repository",description:"Learn how to connect to a public repository in Appcircle",tags:["build profile","connection","public repository"],sidebar_position:5},sidebar:"mySidebar",previous:{title:"Connecting to Azure DevOps",permalink:"/nextjs-upload-file-tryout/build/manage-the-connections/adding-a-build-profile/connecting-to-azure"},next:{title:"Connecting to Private Repository via SSH",permalink:"/nextjs-upload-file-tryout/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh"}},p={},d=[{value:"Using a Git Provider?",id:"using-a-git-provider",level:4},{value:"Using a Private Git Server?",id:"using-a-private-git-server",level:4},{value:"Public Repository Connection",id:"public-repository-connection",level:3},{value:"Webhook Events",id:"webhook-events",level:3},...c.RM];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"connecting-to-public-repository",children:"Connecting to Public Repository"}),"\n",(0,o.jsx)(n.p,{children:"Since public repositories doesn't require any authentication or connection, the actions that can be taken with public repositories are limited. You will only have read only access towards the specified repository. Only use public repositories if you plan to use the profile for:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Testing & Previewing Appcircle"}),"\n",(0,o.jsx)(n.li,{children:"Benchmarking build times to see how fast we are \ud83d\ude80"}),"\n",(0,o.jsx)(n.li,{children:"Not planning to use the profile for long term"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"using-a-git-provider",children:"Using a Git Provider?"}),"\n",(0,o.jsx)(n.p,{children:"If your repository is located under these providers, Appcircle has built-in support to automatically connect and do the automated work for you. All you need to do is click on the appropriate button in the profile setup page (image below)."}),"\n",(0,o.jsx)(n.p,{children:"For more information on your provider, see the links below:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-github",children:"Github"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-bitbucket",children:"Bitbucket"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-gitlab",children:"GitLab"})}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"using-a-private-git-server",children:"Using a Private Git Server?"}),"\n",(0,o.jsxs)(n.p,{children:["If you plan to use Appcircle to connect your private repository, please refer to ",(0,o.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh",children:"connecting to private repositories documentation"})," for more information."]}),"\n",(0,o.jsx)(n.h3,{id:"public-repository-connection",children:"Public Repository Connection"}),"\n",(0,o.jsxs)(n.p,{children:["When you enter the profile after the build, the following screen will appear. Click on ",(0,o.jsx)(n.strong,{children:"Connect via URL"})," to connect a public repository."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Clicking **Quick start using the sample repository **will also connect the relevant sample project with public connection."})}),"\n",(0,o.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/main-connection.png"}),"\n",(0,o.jsxs)(n.p,{children:["After you click on ",(0,o.jsx)(n.strong,{children:"Connect via URL"}),", the following screen will appear and let you enter an URI"]}),"\n",(0,o.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/connect-via-url.png"}),"\n",(0,o.jsx)(n.p,{children:"Enter the URL of your repository, or continue with sample project if you plan to preview Appcircle."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Public connection refers to the HTTP(s) connection by Git Providers. SSH links in public repositories are not accepted."})}),"\n",(0,o.jsxs)(n.p,{children:["After the connection is successful, you can ",(0,o.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/#view-the-newly-created-build-profile",children:"view your newly created profile"})," and start building!"]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.h3,{id:"webhook-events",children:"Webhook Events"}),(0,o.jsxs)(n.p,{children:["Keep in mind that certain hook events ",(0,o.jsx)(n.strong,{children:"will not work"})," with a public connection."]})]}),"\n","\n",(0,o.jsx)(c.Ay,{})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},69678:(e,n,i)=>{i.d(n,{A:()=>t});i(96540);var o=i(74848);function t(e){let{url:n}=e;return(0,o.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var o=i(96540);const t={},r=o.createContext(t);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);