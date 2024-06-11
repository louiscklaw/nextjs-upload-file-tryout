"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[91561],{22062:(e,n,c)=>{c.d(n,{Ay:()=>t,RM:()=>s});var i=c(74848),r=c(28453);const s=[];function o(e){const n={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Be aware that this process will cause downtime since it requires a restart of the Appcircle server."})})}function t(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28376:(e,n,c)=>{c.d(n,{Ay:()=>t,RM:()=>s});var i=c(74848),r=c(28453);const s=[];function o(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Shutdown Appcircle server."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Apply configuration changes."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Boot Appcircle server."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"You should check the status of the Appcircle server after boot for any possible errors."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" check\n'})})]})]})}function t(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},21469:(e,n,c)=>{c.d(n,{Ay:()=>t,RM:()=>s});var i=c(74848),r=c(28453);const s=[];function o(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"spacetech"})," in the example codes below are example project name."]}),(0,i.jsxs)(n.p,{children:["Please find your own project name and replace ",(0,i.jsx)(n.code,{children:"spacetech"})," with your project name."]}),(0,i.jsxs)(n.p,{children:["To see projects, you can check the ",(0,i.jsx)(n.code,{children:"projects"})," directory."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ls -l ./projects\n"})})]})}function t(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},64935:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var i=c(74848),r=c(28453),s=c(21469),o=c(28376),t=c(22062);const a={title:"Cache Size Configuration",description:"Learn how to configure the cache size limit in the Appcircle server",tags:["self-hosted","advanced configuration","cache size"],sidebar_position:11},l=void 0,d={id:"self-hosted-appcircle/configure-server/advanced-configuration/cache-size-configuration",title:"Cache Size Configuration",description:"Learn how to configure the cache size limit in the Appcircle server",source:"@site/docs/self-hosted-appcircle/configure-server/advanced-configuration/cache-size-configuration.md",sourceDirName:"self-hosted-appcircle/configure-server/advanced-configuration",slug:"/self-hosted-appcircle/configure-server/advanced-configuration/cache-size-configuration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/advanced-configuration/cache-size-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/advanced-configuration/cache-size-configuration.md",tags:[{label:"self-hosted",permalink:"/nextjs-upload-file-tryout/tags/self-hosted"},{label:"advanced configuration",permalink:"/nextjs-upload-file-tryout/tags/advanced-configuration"},{label:"cache size",permalink:"/nextjs-upload-file-tryout/tags/cache-size"}],version:"current",sidebarPosition:11,frontMatter:{title:"Cache Size Configuration",description:"Learn how to configure the cache size limit in the Appcircle server",tags:["self-hosted","advanced configuration","cache size"],sidebar_position:11},sidebar:"mySidebar",previous:{title:"LDAP Brute Force Protection",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/advanced-configuration/ldap-brutefore"},next:{title:"Command-Line Interface (CLI) Configuration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/advanced-configuration/appcircle-cli"}},h={},p=[...t.RM,{value:"Configuring the Appcircle Server",id:"configuring-the-appcircle-server",level:2},...s.RM,...o.RM];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Appcircle has a limit for cache sizes that can be pushed or pulled on the build workflows."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"maxBodySize"})," parameter in the ",(0,i.jsx)(n.code,{children:"global.yaml"})," file allows you to configure the maximum cache file size that can be uploaded with the ",(0,i.jsx)(n.a,{href:"/workflows/common-workflow-steps/#cache-push",children:"Cache Push"})," component."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, the cache size is set to ",(0,i.jsx)(n.strong,{children:"4096m"}),". However, you can increase or decrease this limit according to your needs by modifying the ",(0,i.jsx)(n.code,{children:"global.yaml"})," file."]}),"\n",(0,i.jsx)(t.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-appcircle-server",children:"Configuring the Appcircle Server"}),"\n",(0,i.jsxs)(n.p,{children:["We are assuming that you have installed the Appcircle server with version ",(0,i.jsx)(n.code,{children:"3.10.0"})," or later."]}),"\n",(0,i.jsxs)(n.p,{children:["To configure the ",(0,i.jsx)(n.code,{children:"maxBodySize"})," parameter, you can follow the steps below:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Log in to Appcircle server with SSH or remote connection."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.code,{children:"appcircle-server"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Edit the ",(0,i.jsx)(n.code,{children:"global.yaml"})," file of your project."]}),"\n"]}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vi ./projects/spacetech/global.yaml\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Find the ",(0,i.jsx)(n.code,{children:"nginx"})," entry, add or edit the key named ",(0,i.jsx)(n.code,{children:"maxBodySize"}),", and set it to the desired value."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"nginx:\n  maxBodySize: 5120m\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If your ",(0,i.jsx)(n.code,{children:"global.yaml"})," file does not have the ",(0,i.jsx)(n.code,{children:"nginx"})," key, you can add it yourself."]}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"5120m"})," with the desired maximum cache size according to your needs. The size should be specified in megabytes (m)."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Larger cache sizes require more disk space on the Appcircle server. So be cautious about allowing large cache sizes in your installation."})}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsx)(n.p,{children:"Once your server is up and healthy, you can run the build that requires pushing a cache file larger than 4096m but less than 5120m."}),"\n",(0,i.jsxs)(n.p,{children:["You can also reduce the default ",(0,i.jsx)(n.code,{children:"maxBodySize"})," for security purposes."]})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>o,x:()=>t});var i=c(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);