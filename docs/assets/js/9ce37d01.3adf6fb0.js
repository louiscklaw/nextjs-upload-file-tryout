"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[59591],{62722:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(74848),o=i(28453),t=i(69678);const r={title:"Git Providers",description:"Configure git providers in self-hosted Appcircle",tags:["self-hosted","git providers","configuration"],sidebar_position:1},l=void 0,a={id:"self-hosted-appcircle/configure-server/integrations-and-access/git-providers",title:"Git Providers",description:"Configure git providers in self-hosted Appcircle",source:"@site/docs/self-hosted-appcircle/configure-server/integrations-and-access/git-providers.md",sourceDirName:"self-hosted-appcircle/configure-server/integrations-and-access",slug:"/self-hosted-appcircle/configure-server/integrations-and-access/git-providers",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/integrations-and-access/git-providers",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/integrations-and-access/git-providers.md",tags:[{label:"self-hosted",permalink:"/nextjs-upload-file-tryout/tags/self-hosted"},{label:"git providers",permalink:"/nextjs-upload-file-tryout/tags/git-providers"},{label:"configuration",permalink:"/nextjs-upload-file-tryout/tags/configuration"}],version:"current",sidebarPosition:1,frontMatter:{title:"Git Providers",description:"Configure git providers in self-hosted Appcircle",tags:["self-hosted","git providers","configuration"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Integrations and Access",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/integrations-and-access/"},next:{title:"Integrations",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/integrations-and-access/integration"}},c={},d=[{value:"Connect to Bitbucket Server",id:"connect-to-bitbucket-server",level:2},{value:"Connect to Azure Devops Server",id:"connect-to-azure-devops-server",level:2},{value:"Connect to Self-Managed GitLab",id:"connect-to-self-managed-gitlab",level:2},{value:"Connect via SSH",id:"connect-via-ssh",level:2},{value:"Connect via URL",id:"connect-via-url",level:2},{value:"Applying Git Provider Changes",id:"applying-git-provider-changes",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"With default installation, self-hosted Appcircle comes with the connection options below:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bitbucket"}),"\n",(0,s.jsx)(n.li,{children:"Azure"}),"\n",(0,s.jsx)(n.li,{children:"GitLab"}),"\n",(0,s.jsx)(n.li,{children:"Connect via SSH"}),"\n",(0,s.jsx)(n.li,{children:"Connect via URL"}),"\n"]}),"\n",(0,s.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2031-git-providers-v2.png"}),"\n",(0,s.jsx)(n.p,{children:"But you're not limited with these options. You can configure the git providers and use them within your self-hosted Appcircle server, same as in cloud."}),"\n",(0,s.jsx)(n.p,{children:"Following sections will give you more details about removing or adding other git providers."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["We're assuming that previously you reviewed or followed ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#3-configure",children:"install self-hosted appcircle"})," section in docs, understood configuration made there and scenarios told there."]})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Current working directory is assumed ",(0,s.jsx)(n.code,{children:"appcircle-server"})," for following steps. See ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#1-download",children:"here"})," for installation details."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"global.yaml"})," configuration file is located under ",(0,s.jsx)(n.strong,{children:"project"})," folder."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"projects/${YOUR_PROJECT}"})}),"\n"]}),(0,s.jsxs)(n.p,{children:["You can see an example project configuration from ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#3-configure",children:"here"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-bitbucket-server",children:"Connect to Bitbucket Server"}),"\n",(0,s.jsxs)(n.p,{children:['To disable the "Bitbucket" option, add the below configuration to ',(0,s.jsx)(n.code,{children:"global.yaml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"build:\n  oauths:\n    bitbucketServer:\n      enabled: false\n"})}),"\n",(0,s.jsxs)(n.p,{children:['If you want to re-enable "Bitbucket" again, you can set the ',(0,s.jsx)(n.code,{children:"enabled"})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:['For more details about "Bitbucket" usage, see related docs in the ',(0,s.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-bitbucket",children:"Connecting to Bitbucket"})," page."]}),"\n",(0,s.jsxs)(n.p,{children:["To apply the changes, please follow ",(0,s.jsx)(n.a,{href:"#applying-git-provider-changes",children:"Applying Git Provider Changes"})]}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-azure-devops-server",children:"Connect to Azure Devops Server"}),"\n",(0,s.jsxs)(n.p,{children:['To disable the "Azure" option, add the below configuration to ',(0,s.jsx)(n.code,{children:"global.yaml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"build:\n  oauths:\n    azureDevopsServer:\n      enabled: false\n"})}),"\n",(0,s.jsxs)(n.p,{children:['If you want to re-enable "Azure" again, you can set the ',(0,s.jsx)(n.code,{children:"enabled"})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:['For more details about "Azure" usage, see related docs in the ',(0,s.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-azure",children:"Connecting to Azure DevOps"})," page."]}),"\n",(0,s.jsxs)(n.p,{children:["To apply the changes, please follow ",(0,s.jsx)(n.a,{href:"#applying-git-provider-changes",children:"Applying Git Provider Changes"})]}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-self-managed-gitlab",children:"Connect to Self-Managed GitLab"}),"\n",(0,s.jsxs)(n.p,{children:['To disable the "GitLab" option, add the below configuration to ',(0,s.jsx)(n.code,{children:"global.yaml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"build:\n  oauths:\n    gitlabSelfHosted:\n      enabled: false\n"})}),"\n",(0,s.jsxs)(n.p,{children:['If you want to re-enable "GitLab" again, you can set the ',(0,s.jsx)(n.code,{children:"enabled"})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:['For more details about "GitLab" usage, see related docs in the ',(0,s.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-gitlab",children:"Connecting to GitLab"})," page."]}),"\n",(0,s.jsxs)(n.p,{children:["To apply the changes, please follow ",(0,s.jsx)(n.a,{href:"#applying-git-provider-changes",children:"Applying Git Provider Changes"})]}),"\n",(0,s.jsx)(n.h2,{id:"connect-via-ssh",children:"Connect via SSH"}),"\n",(0,s.jsxs)(n.p,{children:['To disable the "Connect via SSH" option, add the below configuration to ',(0,s.jsx)(n.code,{children:"global.yaml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"build:\n  oauths:\n    ssh:\n      enabled: false\n"})}),"\n",(0,s.jsxs)(n.p,{children:['If you want to re-enable "Connect via SSH" again, you can set the ',(0,s.jsx)(n.code,{children:"enabled"})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:['For more details about "Connect via SSH" usage, see related docs in the ',(0,s.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh",children:"Connect via SSH"})," page."]}),"\n",(0,s.jsxs)(n.p,{children:["To apply the changes, please follow ",(0,s.jsx)(n.a,{href:"#applying-git-provider-changes",children:"Applying Git Provider Changes"})]}),"\n",(0,s.jsx)(n.h2,{id:"connect-via-url",children:"Connect via URL"}),"\n",(0,s.jsxs)(n.p,{children:['To disable the "Connect via URL" option, add the below configuration to ',(0,s.jsx)(n.code,{children:"global.yaml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"build:\n  oauths:\n    publicRepository:\n      enabled: false\n"})}),"\n",(0,s.jsxs)(n.p,{children:['If you want to re-enable "Connect via URL" again, you can set the ',(0,s.jsx)(n.code,{children:"enabled"})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:['For more details about "Connect via URL" usage, see related docs in the ',(0,s.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-public-repository",children:"Connect via URL"})," page."]}),"\n",(0,s.jsxs)(n.p,{children:["To apply the changes, please follow ",(0,s.jsx)(n.a,{href:"#applying-git-provider-changes",children:"Applying Git Provider Changes"})]}),"\n",(0,s.jsx)(n.h2,{id:"applying-git-provider-changes",children:"Applying Git Provider Changes"}),"\n",(0,s.jsxs)(n.p,{children:["You can add or remove git providers at ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker",children:"installation"})," steps or later when you need. Following sections will explain how to apply changes especially after installation."]}),"\n",(0,s.jsxs)(n.p,{children:['Let\'s assume we want to disable both "Connect via SSH" and "Connect via URL" options. Then we need to add below section to our ',(0,s.jsx)(n.code,{children:"global.yaml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"build:\n  oauths:\n    ssh:\n      enabled: false\n    publicRepository:\n      enabled: false\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["You should have only one ",(0,s.jsx)(n.code,{children:"build.oauths"})," section in your ",(0,s.jsx)(n.code,{children:"global.yaml"})," file."]}),(0,s.jsxs)(n.p,{children:["Keep in mind that if you have multiple ",(0,s.jsx)(n.code,{children:"build.oauths"})," sections in ",(0,s.jsx)(n.code,{children:"global.yaml"}),", then the last one will be used in the Appcircle server runtime."]}),(0,s.jsxs)(n.p,{children:["Be careful while configuring different connection options at the same time. Union them under one ",(0,s.jsx)(n.code,{children:"build.oauths"})," section in the ",(0,s.jsx)(n.code,{children:"global.yaml"}),"."]})]}),"\n",(0,s.jsxs)(n.p,{children:["If we ",(0,s.jsx)(n.strong,{children:"do"})," this at installation time then there is no extra step to take. These options will be disabled on first boot without any extra effort."]}),"\n",(0,s.jsxs)(n.p,{children:["If we ",(0,s.jsx)(n.strong,{children:"don't do"})," the configuration at installation, then after editing ",(0,s.jsx)(n.code,{children:"global.yaml"}),", we need to apply below steps to activate changes."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["We're assuming that previously you reviewed or followed ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#3-configure",children:"install self-hosted appcircle"})," section in docs and applied example scenario."]}),(0,s.jsx)(n.p,{children:"Following steps are using example project as project naming, which was told there."})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Shutdown Appcircle server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Apply configuration changes."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Boot Appcircle server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,s.jsxs)(n.p,{children:['On complete, refresh your browser and login to Appcircle with your account. You should see that "Connect via SSH" and "Connect via URL" option is disabled on the connection page. ',"\ud83c\udf89"]}),"\n",(0,s.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2031-ssh-url-disabled-v2.png"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},69678:(e,n,i)=>{i.d(n,{A:()=>o});i(96540);var s=i(74848);function o(e){let{url:n}=e;return(0,s.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(96540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);