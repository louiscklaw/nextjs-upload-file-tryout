"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[71375],{74597:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>s});var o=n(74848),i=n(28453);const s=[{value:"Need help?",id:"need-help",level:3}];function r(e){const t={a:"a",h3:"h3",p:"p",...(0,i.R)(),...e.components},{ExternalUrlRef:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"need-help",children:"Need help?"}),"\n",(0,o.jsx)(t.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,o.jsx)(n,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},64799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var o=n(74848),i=n(28453),s=n(69678),r=n(70344),c=n(74597);const l={title:"Connecting to GitLab",description:"Learn how to connect to GitLab repositories in Appcircle",tags:["gitlab","connection","repository","self-hosted","token","access","firewall","ip","port"],sidebar_position:2},a="Connecting to GitLab",d={id:"build/manage-the-connections/adding-a-build-profile/connecting-to-gitlab",title:"Connecting to GitLab",description:"Learn how to connect to GitLab repositories in Appcircle",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/004_build/manage-the-connections/adding-a-build-profile/connecting-to-gitlab.md",sourceDirName:"004_build/manage-the-connections/adding-a-build-profile",slug:"/build/manage-the-connections/adding-a-build-profile/connecting-to-gitlab",permalink:"/nextjs-upload-file-tryout/zh-Hans/build/manage-the-connections/adding-a-build-profile/connecting-to-gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/004_build/manage-the-connections/adding-a-build-profile/connecting-to-gitlab.md",tags:[{label:"gitlab",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/gitlab"},{label:"connection",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/connection"},{label:"repository",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/repository"},{label:"self-hosted",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/self-hosted"},{label:"token",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/token"},{label:"access",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/access"},{label:"firewall",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/firewall"},{label:"ip",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/ip"},{label:"port",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/port"}],version:"current",sidebarPosition:2,frontMatter:{title:"Connecting to GitLab",description:"Learn how to connect to GitLab repositories in Appcircle",tags:["gitlab","connection","repository","self-hosted","token","access","firewall","ip","port"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Connecting to GitHub",permalink:"/nextjs-upload-file-tryout/zh-Hans/build/manage-the-connections/adding-a-build-profile/connecting-to-github"},next:{title:"Connecting to Bitbucket",permalink:"/nextjs-upload-file-tryout/zh-Hans/build/manage-the-connections/adding-a-build-profile/connecting-to-bitbucket"}},p={},h=[{value:"Connecting to gitlab.com",id:"connecting-to-gitlabcom",level:2},{value:"Connecting to GitLab Self Hosted Repository",id:"connecting-to-gitlab-self-hosted-repository",level:2},{value:"Outbound Requests",id:"outbound-requests",level:3},{value:"Connection Notice",id:"connection-notice",level:3},{value:"Token Creation",id:"token-creation",level:3},{value:"Check Token",id:"check-token",level:3},...c.RM];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"connecting-to-gitlab",children:"Connecting to GitLab"}),"\n",(0,o.jsx)(t.h2,{id:"connecting-to-gitlabcom",children:"Connecting to gitlab.com"}),"\n",(0,o.jsx)(t.p,{children:"If you authorize Appcircle to access your repositories on GitLab, you can select the repository that you want to connect in the next screen."}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/main-connection.png"}),"\n",(0,o.jsxs)(t.p,{children:["After you click on ",(0,o.jsx)(t.strong,{children:"GitLab"}),", the following screen will appear. This will let you choose between selecting a repository which you are already authorized Appcircle to do or ask your consent about authorizing more repositories."]}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/gitlab-main.png"}),"\n",(0,o.jsx)(t.p,{children:"When you successfully authorize your account, the following screen will appear to let you select one for connection:"}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connect-repository-bitbucket-gitlab.png"}),"\n",(0,o.jsxs)(t.p,{children:["After the connection is successful, you can ",(0,o.jsx)(t.a,{href:"/build/manage-the-connections/adding-a-build-profile/#view-the-newly-created-build-profile",children:"view your newly created profile"})," and start building!"]}),"\n",(0,o.jsx)(t.h2,{id:"connecting-to-gitlab-self-hosted-repository",children:"Connecting to GitLab Self Hosted Repository"}),"\n",(0,o.jsx)(t.p,{children:"Overall process is similar with private repository connection through SSH, but Appcircle allows to directly connect through GitLab Self Hosted URL."}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["GitLab's version must be ",(0,o.jsx)(t.strong,{children:"13.12.9"})," or higher."]})}),"\n",(0,o.jsxs)(t.p,{children:["First, select ",(0,o.jsx)(t.strong,{children:"GitLab"})," and then ",(0,o.jsx)(t.strong,{children:"Connect to a Self-Managed GitLab Instance"})," through the menu:"]}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/gitlab-self-hosted2.png"}),"\n",(0,o.jsx)(t.p,{children:"Fill the relevant information about your GitLab self-hosted module. If you are not sure what those are, contact your system administrator."}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/gitlab-self-detail.png"}),"\n",(0,o.jsxs)(t.admonition,{type:"caution",children:[(0,o.jsx)(t.h3,{id:"outbound-requests",children:"Outbound Requests"}),(0,o.jsx)(t.p,{children:"When you connect to a GitLab repository by creating a profile on Appcircle, Appcircle tries to create webhooks on the GitLab repository."}),(0,o.jsxs)(t.p,{children:["If your Appcircle server has a local IP address like ",(0,o.jsx)(t.code,{children:"10.10.140.20"}),", you may get an error while connecting to the repository."]}),(0,o.jsx)(t.p,{children:"To solve this issue, the IP or the Appcircle API subdomain name should be allowed for outbound requests on the GitLab admin panel."}),(0,o.jsx)(t.p,{children:"You can follow the steps below to update outbound requests:"}),(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["You must get access to the ",(0,o.jsx)(t.strong,{children:"Admin Area"})," of the GitLab server."]}),"\n",(0,o.jsx)(t.li,{children:'Expand the "Settings" button at the bottom left.'}),"\n",(0,o.jsx)(t.li,{children:'Click on the "Network" button to access network settings.'}),"\n",(0,o.jsx)(t.li,{children:'Expand the "Outbound" requests.'}),"\n",(0,o.jsxs)(t.li,{children:["Add the IP address or the ",(0,o.jsx)(t.code,{children:"api"})," subdomain of the Appcircle server."]}),"\n"]}),(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/be-2545-sample-configuration.png"}),(0,o.jsx)(t.p,{children:"For example, if you are accessing to the Appcircle server dashboard via"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"my.appcircle.spacetech.com"})}),"\n"]}),(0,o.jsxs)(t.p,{children:["then, for default server configuration, the ",(0,o.jsx)(t.code,{children:"api"})," domain should be"]}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"api.appcircle.spacetech.com"})}),"\n"]})]}),"\n",(0,o.jsxs)(t.admonition,{type:"caution",children:[(0,o.jsx)(t.h3,{id:"connection-notice",children:"Connection Notice"}),(0,o.jsx)(t.p,{children:"For Appcircle to connect to the Self Hosted GitLab Instance, your connection must be reachable over the network."})]}),"\n",(0,o.jsx)(t.p,{children:"Is your self-hosted GitLab instance under enterprise firewall? Learn which IP addresses and ports Appcircle uses to function under the whitelist documentation:"}),"\n",(0,o.jsx)(r.A,{url:"/build/manage-the-connections/accessing-repositories-in-internal-networks-firewalls",children:(0,o.jsx)(t.p,{children:"Accessing Repositories in Internal Networks (Firewalls)"})}),"\n",(0,o.jsx)(t.h3,{id:"token-creation",children:"Token Creation"}),"\n",(0,o.jsx)(t.p,{children:"GitLab has two kinds of token at their Self Hosted instance:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://docs.gitlab.com/ee/security/token_overview.html#personal-access-tokens",children:"Personal Access Token"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://docs.gitlab.com/ee/security/token_overview.html#project-access-tokens",children:"Project Access Token"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Both works to connect your repository through Appcircle. That being said, **Project Access Token **is used to authorize a single project(repository) and **Personal Access Token **is used to authorize every repository the user has access to."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Appcircle needs admin permission to function properly. The admin permission is needed to create relevant WebHooks automatically."})}),"\n",(0,o.jsx)(t.h3,{id:"check-token",children:"Check Token"}),"\n",(0,o.jsx)(t.p,{children:"You can follow the steps below to check if your token is valid."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Open the terminal and issue the following command"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'curl "http://YOUR_GITLAB_HOST/api/v4/projects?private_token=YOUR_TOKEN"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Above command should print out your projects. If you don't see an output, please check your token and GitLab address."}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["Please also make sure that the output doesn't show any reference to ",(0,o.jsx)(t.code,{children:"localhost"}),". If you see ",(0,o.jsx)(t.code,{children:"localhost"}),", you need to configure GitLab and put the correct address of your GitLab instance."]})}),"\n","\n",(0,o.jsx)(c.Ay,{})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},70344:(e,t,n)=>{n.d(t,{A:()=>a});var o,i,s=n(96540);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(null,arguments)}const c=e=>{let{title:t,titleId:n,...c}=e;return s.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":n},c),t?s.createElement("title",{id:n},t):null,o||(o=s.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),i||(i=s.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var l=n(74848);function a(e){let{children:t,url:n}=e;return(0,l.jsxs)("a",{href:n,className:"content-ref-card",children:[(0,l.jsx)(c,{title:"File Icon",className:"file-icon"}),t]})}},69678:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var o=n(74848);function i(e){let{url:t}=e;return(0,o.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);