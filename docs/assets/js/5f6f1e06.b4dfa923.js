"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[79662],{74597:(e,n,o)=>{o.d(n,{Ay:()=>c,RM:()=>i});var r=o(74848),t=o(28453);const i=[{value:"Need help?",id:"need-help",level:3}];function s(e){const n={a:"a",h3:"h3",p:"p",...(0,t.R)(),...e.components},{ExternalUrlRef:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"need-help",children:"Need help?"}),"\n",(0,r.jsx)(n.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,r.jsx)(o,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},36936:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=o(74848),t=o(28453),i=o(69678),s=o(70344),c=o(74597);const l={title:"Connecting to Azure DevOps",description:"Learn how to connect to Azure DevOps in Appcircle",tags:["build profile","connection","azure devops"],sidebar_position:4},a="Connecting to Azure DevOps",d={id:"build/manage-the-connections/adding-a-build-profile/connecting-to-azure",title:"Connecting to Azure DevOps",description:"Learn how to connect to Azure DevOps in Appcircle",source:"@site/docs/build/manage-the-connections/adding-a-build-profile/connecting-to-azure.md",sourceDirName:"build/manage-the-connections/adding-a-build-profile",slug:"/build/manage-the-connections/adding-a-build-profile/connecting-to-azure",permalink:"/nextjs-upload-file-tryout/build/manage-the-connections/adding-a-build-profile/connecting-to-azure",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/build/manage-the-connections/adding-a-build-profile/connecting-to-azure.md",tags:[{label:"build profile",permalink:"/nextjs-upload-file-tryout/tags/build-profile"},{label:"connection",permalink:"/nextjs-upload-file-tryout/tags/connection"},{label:"azure devops",permalink:"/nextjs-upload-file-tryout/tags/azure-devops"}],version:"current",sidebarPosition:4,frontMatter:{title:"Connecting to Azure DevOps",description:"Learn how to connect to Azure DevOps in Appcircle",tags:["build profile","connection","azure devops"],sidebar_position:4},sidebar:"mySidebar",previous:{title:"Connecting to Bitbucket",permalink:"/nextjs-upload-file-tryout/build/manage-the-connections/adding-a-build-profile/connecting-to-bitbucket"},next:{title:"Connecting to Public Repository",permalink:"/nextjs-upload-file-tryout/build/manage-the-connections/adding-a-build-profile/connecting-to-public-repository"}},p={},u=[{value:"Connecting to Azure DevOps Services Cloud",id:"connecting-to-azure-devops-services-cloud",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Configuration Azure DevOps Services Setting on Appcircle",id:"configuration-azure-devops-services-setting-on-appcircle",level:3},{value:"Connecting to Azure DevOps Server Repository",id:"connecting-to-azure-devops-server-repository",level:2},{value:"Azure Devops Server That Is Upgraded From a TFS Server",id:"azure-devops-server-that-is-upgraded-from-a-tfs-server",level:3},{value:"Connection Notice",id:"connection-notice",level:3},{value:"Token Creation",id:"token-creation",level:3},{value:"Check Token",id:"check-token",level:3},...c.RM];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{ExternalUrlRef:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"connecting-to-azure-devops",children:"Connecting to Azure DevOps"}),"\n",(0,r.jsx)(n.h2,{id:"connecting-to-azure-devops-services-cloud",children:"Connecting to Azure DevOps Services Cloud"}),"\n",(0,r.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(n.p,{children:"You must enable third-party application access via OAuth. To do that, you can follow the steps:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.a,{href:"https://dev.azure.com",children:(0,r.jsx)(o,{url:"https://dev.azure.com",title:"dev.azure.com",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})]}),"\n",(0,r.jsx)(n.li,{children:"Click to Organization setting from the left sidebar."}),"\n",(0,r.jsx)(n.li,{children:"Go to your policies settings below security."}),"\n",(0,r.jsx)(n.li,{children:"Enable Third-Party application access via OAuth."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"If you don't enable third-party application access via the Oauth setting, you can't authorize Appcircle."})}),"\n",(0,r.jsx)(n.h3,{id:"configuration-azure-devops-services-setting-on-appcircle",children:"Configuration Azure DevOps Services Setting on Appcircle"}),"\n",(0,r.jsx)(n.p,{children:"If you authorize Appcircle to access your repositories on Azure DevOps, you can select the repository that you want to connect in the next screen."}),"\n",(0,r.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/azure-connect-main.png"}),"\n",(0,r.jsxs)(n.p,{children:["After you click on ",(0,r.jsx)(n.strong,{children:"Azure"}),", the following screen will appear. This will let you choose between selecting a repository, which you have already authorized Appcircle to do, or ask your consent about authorizing more repositories."]}),"\n",(0,r.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/azure-connection-3.png"}),"\n",(0,r.jsx)(n.p,{children:"When you successfully authorize your account, the following screen will appear to let you select one for connection:"}),"\n",(0,r.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/connect-repository-bitbucket-gitlab.png"}),"\n",(0,r.jsxs)(n.p,{children:["After the connection is successful, you can ",(0,r.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/#view-the-newly-created-build-profile",children:"view your newly created profile"})," and start building!"]}),"\n",(0,r.jsx)(n.h2,{id:"connecting-to-azure-devops-server-repository",children:"Connecting to Azure DevOps Server Repository"}),"\n",(0,r.jsx)(n.p,{children:"The overall process is similar to a private repository connection through SSH, but Appcircle allows you to directly connect through the Azure DevOps Server URL."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"TFS is not compatible with Azure DevOps Server on Appcircle."})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Azure DevOps Server version must be ",(0,r.jsx)(n.strong,{children:"Azure DevOps Server 2020"})," or higher."]})}),"\n",(0,r.jsxs)(n.p,{children:["First, select ",(0,r.jsx)(n.strong,{children:"Azure"})," and then ",(0,r.jsx)(n.strong,{children:"Connect to an Azure DevOps Server"})," through the menu:"]}),"\n",(0,r.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/azure-con-2.png"}),"\n",(0,r.jsx)(n.p,{children:"Fill in the relevant information about your Azure DevOps Server. If you are not sure what those are, contact your system administrator."}),"\n",(0,r.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/azure-con-5.png"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Connection Name"}),": Appcircle allows multiple instance connections. Here, you can give the connection a name so you can group the connections together."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For example: ",(0,r.jsx)(n.code,{children:"InternalAzure"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Azure DevOps Server URL"}),": Use the server URL without a path. If the server has a custom port, it should be appended to the URL using ",(0,r.jsx)(n.code,{children:":"})," in front of the port."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For example: ",(0,r.jsx)(n.code,{children:"https://azure.spacetech.com"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Owner Username"}),": Use the collection name on the Azure Devops Server. You can see collections on the left-hand side when you open your Azure Devops Server home page."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For example: ",(0,r.jsx)(n.code,{children:"DefaultCollection"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Personal Access Token"}),": Use the personal access token that you created earlier and that has enough permissions."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For example: ",(0,r.jsx)(n.code,{children:"54rdrkce6wa4d22kf75lhmq4hosgx7iy7h76cc62y77oguombnnq"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.h3,{id:"azure-devops-server-that-is-upgraded-from-a-tfs-server",children:"Azure Devops Server That Is Upgraded From a TFS Server"}),(0,r.jsx)(n.p,{children:"If your Azure Devops Server is upgraded from a TFS server, you should identify your Azure Devops Server URL."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Copy a repository clone URL for any git repository."}),"\n",(0,r.jsxs)(n.li,{children:["Check if your URL has an unexpected ",(0,r.jsx)(n.strong,{children:"path"})," in the URL.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For example: ",(0,r.jsx)(n.code,{children:"https://azure.spacetech.com/tfs/DefaultCollection/MOBILE_IOS/_git/wallet"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["If there is a path between your domain (",(0,r.jsx)(n.code,{children:"azure.spacetech.com"}),") and your collection name (",(0,r.jsx)(n.code,{children:"DefaultCollection"}),"), you must give that path (",(0,r.jsx)(n.code,{children:"tfs"}),') as a prefix in the "Owner Username".',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For example, the fields should have values like below.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Azure DevOps Server URL: ",(0,r.jsx)(n.code,{children:"https://azure.spacetech.com"})]}),"\n",(0,r.jsxs)(n.li,{children:["Owner Username: ",(0,r.jsx)(n.code,{children:"tfs/DefaultCollection"})]}),"\n",(0,r.jsxs)(n.li,{children:["Personal Access Token: ",(0,r.jsx)(n.code,{children:"54rdrkce6wa4d22kf75lhmq4hosgx7iy7h76cc62y77oguombnnq"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.h3,{id:"connection-notice",children:"Connection Notice"}),(0,r.jsx)(n.p,{children:"For Appcircle to connect to the Azure DevOps Server instance, your connection must be reachable over the network."})]}),"\n",(0,r.jsx)(n.p,{children:"Is your Azure DevOps Server instance under the enterprise firewall? Learn which IP addresses and ports Appcircle uses to function under the whitelist documentation:"}),"\n",(0,r.jsx)(s.A,{url:"/build/manage-the-connections/accessing-repositories-in-internal-networks-firewalls",children:(0,r.jsx)(n.p,{children:"Accessing Repositories in Internal Networks (Firewalls)"})}),"\n",(0,r.jsx)(n.h3,{id:"token-creation",children:"Token Creation"}),"\n",(0,r.jsx)(n.p,{children:"Azure DevOps Server has one kind of token at their self-hosted instance:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows",children:"Personal Access Token"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["That being said, ",(0,r.jsx)(n.strong,{children:"Personal Access Token"})," is used to authorize every repository the user has access to."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Appcircle needs admin permission to function properly. The admin permission is needed to create relevant WebHooks automatically."})}),"\n",(0,r.jsx)(n.h3,{id:"check-token",children:"Check Token"}),"\n",(0,r.jsx)(n.p,{children:"You can follow the steps below to check if your token is valid."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open the terminal and issue the following command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'personalAccessToken=abcde && \\\nserverUrl=https://azure.spacetech.com && \\\norganizationName=Appcircle && \\\ncurl -H "Authorization: Basic $(echo -n :${personalAccessToken} | base64)" \\\n"${serverUrl}/${organizationName}/_apis/projects?api-version=6.0" | jq\n'})}),"\n",(0,r.jsx)(n.p,{children:"The above command should print out your projects. If you don't see an output, please check your token, Azure DevOps Server address, or collection name."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Please also make sure that the output doesn't show any reference to ",(0,r.jsx)(n.code,{children:"localhost"}),". If you see ",(0,r.jsx)(n.code,{children:"localhost"}),", you need to configure Azure DevOps Server and put the correct address of the instance."]})}),"\n","\n",(0,r.jsx)(c.Ay,{})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},70344:(e,n,o)=>{o.d(n,{A:()=>a});var r,t,i=o(96540);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)({}).hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},s.apply(null,arguments)}const c=e=>{let{title:n,titleId:o,...c}=e;return i.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":o},c),n?i.createElement("title",{id:o},n):null,r||(r=i.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),t||(t=i.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var l=o(74848);function a(e){let{children:n,url:o}=e;return(0,l.jsxs)("a",{href:o,className:"content-ref-card",children:[(0,l.jsx)(c,{title:"File Icon",className:"file-icon"}),n]})}},69678:(e,n,o)=>{o.d(n,{A:()=>t});o(96540);var r=o(74848);function t(e){let{url:n}=e;return(0,r.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var r=o(96540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);