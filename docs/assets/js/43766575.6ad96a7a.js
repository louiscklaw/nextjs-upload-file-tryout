"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[79272],{74597:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(74848),o=t(28453);const s=[{value:"Need help?",id:"need-help",level:3}];function r(e){const n={a:"a",h3:"h3",p:"p",...(0,o.R)(),...e.components},{ExternalUrlRef:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"need-help",children:"Need help?"}),"\n",(0,i.jsx)(n.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,i.jsx)(t,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},92727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var i=t(74848),o=t(28453),s=t(69678),r=(t(70344),t(74597));const c={title:"Connecting to Multiple Instances",description:"Learn how to connect to multiple instances of the same Git provider in Appcircle",tags:["build profile","multiple instances","git providers"],sidebar_position:7},a=void 0,l={id:"build/manage-the-connections/adding-a-build-profile/connecting-multiple-instance",title:"Connecting to Multiple Instances",description:"Learn how to connect to multiple instances of the same Git provider in Appcircle",source:"@site/docs/build/manage-the-connections/adding-a-build-profile/connecting-multiple-instance.md",sourceDirName:"build/manage-the-connections/adding-a-build-profile",slug:"/build/manage-the-connections/adding-a-build-profile/connecting-multiple-instance",permalink:"/build/manage-the-connections/adding-a-build-profile/connecting-multiple-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/build/manage-the-connections/adding-a-build-profile/connecting-multiple-instance.md",tags:[{label:"build profile",permalink:"/tags/build-profile"},{label:"multiple instances",permalink:"/tags/multiple-instances"},{label:"git providers",permalink:"/tags/git-providers"}],version:"current",sidebarPosition:7,frontMatter:{title:"Connecting to Multiple Instances",description:"Learn how to connect to multiple instances of the same Git provider in Appcircle",tags:["build profile","multiple instances","git providers"],sidebar_position:7},sidebar:"mySidebar",previous:{title:"Connecting to Private Repository via SSH",permalink:"/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh"},next:{title:"Accessing Internal Networks",permalink:"/build/manage-the-connections/accessing-repositories-in-internal-networks-firewalls"}},p={},d=[{value:"Multiple Instances Using Git Providers (Bitbucket, GitLab, Azure DevOps)",id:"multiple-instances-using-git-providers-bitbucket-gitlab-azure-devops",level:3},{value:"Connection Settings for Multiple Instances",id:"connection-settings-for-multiple-instances",level:3},...r.RM];function u(e){const n={admonition:"admonition",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"multiple-instances-using-git-providers-bitbucket-gitlab-azure-devops",children:"Multiple Instances Using Git Providers (Bitbucket, GitLab, Azure DevOps)"}),"\n",(0,i.jsx)(n.p,{children:"Multiple connection features have been introduced for connections made with PAT (Personnel Access Token) on Bitbucket, Azure DevOps, or GitLab. Thus, it is possible to add Bitbucket, Azure DevOps, or GitLab servers located in different environments by a single user."}),"\n",(0,i.jsx)(n.p,{children:"For example, the same user can connect to two different instances, such as dev1.azure.companyname.com and dev2.azure.companyname.com."}),"\n",(0,i.jsx)(n.p,{children:"Similar examples are dev1.gitlab.companyname.com and dev2.gitlab.companyname.com or dev.bitbucket.companyname.com and prod.bitbucket.companyname.com."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"In order to use this feature, it is necessary to create a PAT on the provider."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"To add a git provider, PAT support is sufficient. There is no distinction between self-hosted and cloud-based."})}),"\n",(0,i.jsx)(n.p,{children:"See below steps for an example case from Azure DevOps."}),"\n",(0,i.jsx)(n.p,{children:"First of all, we select the relevant Git provider from the add new repository screen."}),"\n",(0,i.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/azure-m-repo.png"}),"\n",(0,i.jsx)(n.p,{children:'Then click on the "Connect to an Azure DevOps Server" button in the window that opens.'}),"\n",(0,i.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/azure-m-repo-1.png"}),"\n",(0,i.jsx)(n.p,{children:'In the next window, fill in the relevant fields and click on the "Connect" button.'}),"\n",(0,i.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/azure-m-new-1.png"}),"\n",(0,i.jsx)(n.p,{children:"After the connection, the connected instances will appear on the new repository adding screen as follows."}),"\n",(0,i.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/azure-m-last-1.png"}),"\n",(0,i.jsx)(n.p,{children:"Additionally, when we click on an instance, we can see it here with the name we gave it."}),"\n",(0,i.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/azure-m-new-2.png"}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"The instance name for each Git provider must be unique."}),(0,i.jsx)(n.p,{children:'For example, if you create an instance named "Instance" for Azure DevOps Server, you cannot reconnect an instance named "Instance" for Azure DevOps Server.'}),(0,i.jsx)(n.p,{children:"However, you can connect an instance with that name for GitLab or Bitbucket Server."})]}),"\n",(0,i.jsx)(n.h3,{id:"connection-settings-for-multiple-instances",children:"Connection Settings for Multiple Instances"}),"\n",(0,i.jsx)(n.p,{children:'When we connect a repository using PAT (Personal Access Token) on multiple instances, you can use the "Connection Settings" button to view the PAT information and change the PAT information if there is a previously defined connection.'}),"\n",(0,i.jsx)(n.p,{children:'When we connect a repository using PAT over multiple instances, User Email and PAT list appears in the "Connection Settings".'}),"\n",(0,i.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connection-settings-main-3.png"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"In order to change the Personal Access Token (PAT), you must have provided more than one connection for the same Git provider. If you have more than one connection, you can switch between PATs."})}),"\n","\n",(0,i.jsx)(r.Ay,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},70344:(e,n,t)=>{t.d(n,{A:()=>l});var i,o,s=t(96540);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r.apply(this,arguments)}const c=e=>{let{title:n,titleId:t,...c}=e;return s.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":t},c),n?s.createElement("title",{id:t},n):null,i||(i=s.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),o||(o=s.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var a=t(74848);function l(e){let{children:n,url:t}=e;return(0,a.jsxs)("a",{href:t,className:"content-ref-card",children:[(0,a.jsx)(c,{title:"File Icon",className:"file-icon"}),n]})}},69678:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(74848);function o(e){let{url:n}=e;return(0,i.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);