"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[14692],{56218:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=n(74848),i=n(28453);const o={title:"LDAP Brute Force Protection",description:"Learn how to configure LDAP brute-force protection on the Appcircle server",tags:["ldap","brute-force","security","appcircle server"],sidebar_position:10},s=void 0,c={id:"self-hosted-appcircle/configure-server/advanced-configuration/ldap-brutefore",title:"LDAP Brute Force Protection",description:"Learn how to configure LDAP brute-force protection on the Appcircle server",source:"@site/docs/self-hosted-appcircle/configure-server/advanced-configuration/ldap-brutefore.md",sourceDirName:"self-hosted-appcircle/configure-server/advanced-configuration",slug:"/self-hosted-appcircle/configure-server/advanced-configuration/ldap-brutefore",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/advanced-configuration/ldap-brutefore",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/advanced-configuration/ldap-brutefore.md",tags:[{label:"ldap",permalink:"/nextjs-upload-file-tryout/tags/ldap"},{label:"brute-force",permalink:"/nextjs-upload-file-tryout/tags/brute-force"},{label:"security",permalink:"/nextjs-upload-file-tryout/tags/security"},{label:"appcircle server",permalink:"/nextjs-upload-file-tryout/tags/appcircle-server"}],version:"current",sidebarPosition:10,frontMatter:{title:"LDAP Brute Force Protection",description:"Learn how to configure LDAP brute-force protection on the Appcircle server",tags:["ldap","brute-force","security","appcircle server"],sidebar_position:10},sidebar:"mySidebar",previous:{title:"Advanced Configuration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/advanced-configuration/"},next:{title:"Cache Size Configuration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/advanced-configuration/cache-size-configuration"}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"Default Configuration",id:"default-configuration",level:3},{value:"Brute-Force Arguments",id:"brute-force-arguments",level:2},{value:"Configuring the Appcircle Server",id:"configuring-the-appcircle-server",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.p,{children:"Enabling LDAP authentication introduces the risk of brute-force attacks that can originate from external or internal sources."}),"\n",(0,t.jsx)(r.p,{children:"A sustained LDAP brute-force attack can result in user accounts being locked out of the LDAP directory, preventing access to other applications integrated with the directory."}),"\n",(0,t.jsx)(r.p,{children:"To mitigate this risk, a self-hosted Appcircle server can be configured to block repeated failed login attempts for a duration before allowing additional attempts."}),"\n",(0,t.jsx)(r.p,{children:"The Appcircle server's brute-force algorithm is based on successive failed attempts, not failed attempts over a period of time."}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Minimum Required Version"})}),(0,t.jsxs)(r.p,{children:["If you want to enable LDAP brute-force settings, the Appcircle server version must be ",(0,t.jsx)(r.code,{children:"3.10.0"})," or later."]})]}),"\n",(0,t.jsx)(r.h3,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,t.jsxs)(r.p,{children:["Appcircle server comes with brute-force protection ",(0,t.jsx)(r.strong,{children:"turned off"})," by default."]}),"\n",(0,t.jsx)(r.p,{children:"It is completely up to you to set this up. See the following sections for details."}),"\n",(0,t.jsx)(r.h2,{id:"brute-force-arguments",children:"Brute-Force Arguments"}),"\n",(0,t.jsx)(r.p,{children:"The appropriate blocking threshold and duration are dependent on the account lockout policies enforced on the LDAP server itself."}),"\n",(0,t.jsx)(r.p,{children:"For example, if the LDAP server locks accounts for 1 hour after 10 failed attempts, Appcircle can be configured to block login attempts for 2 hours after 5 failures to provide an early warning system."}),"\n",(0,t.jsx)(r.p,{children:"So the users won't be blocked by the LDAP server and can continue to use other applications."}),"\n",(0,t.jsx)(r.p,{children:"Follow the recommendations below when tuning the brute-force protection mechanisms:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Review the number of failed login attempts that trigger account lockout and the lockout duration configured on your LDAP server."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Configure the Appcircle server's maximum retry attempts equal to or lower than your LDAP server's threshold. For example, if LDAP locks accounts after 10 failed logins, set the Appcircle server to block after 5-8 attempts."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Configure Appcircle's lockout duration to be equal to or greater than LDAP. For instance, if LDAP locks accounts for 1 hour, Appcircle should be 1 hour or more."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Test updated configurations in a non-production environment first. Validate that the Appcircle server lockouts are triggered before LDAP lockouts when deliberately failing logins."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Monitor logs for incidents blocked by the Appcircle server to optimize configurations based on real activity targeting your environment."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Following these best practices will allow the Appcircle server to effectively function as an early warning system for brute-force attacks against LDAP infrastructure. Besides, you will prevent a general LDAP lockout, which can block your LDAP users from using other systems on the intranet."}),"\n",(0,t.jsx)(r.h2,{id:"configuring-the-appcircle-server",children:"Configuring the Appcircle Server"}),"\n",(0,t.jsxs)(r.p,{children:["We are assuming that you have installed the Appcircle server with version ",(0,t.jsx)(r.code,{children:"3.10.0"})," or later and configured the LDAP settings from the UI."]}),"\n",(0,t.jsxs)(r.admonition,{type:"caution",children:[(0,t.jsxs)(r.p,{children:["LDAP brute-force settings can be configured for only ",(0,t.jsx)(r.strong,{children:"Testing Distribution"})," and ",(0,t.jsx)(r.strong,{children:"Enterprise App Store"})," modules."]}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/self-hosted-appcircle/configure-server/integrations-and-access/ldap-settings#appcircle-login-with-ldap",children:"Appcircle login with LDAP"})," is not supported and is out-of-scope for the brute-force settings."]})]}),"\n",(0,t.jsx)(r.p,{children:"To configure LDAP brute-force settings on the Appcircle server, you can follow the steps below:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Log in to Appcircle server with SSH or remote connection."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Go to the ",(0,t.jsx)(r.code,{children:"appcircle-server"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Edit the ",(0,t.jsx)(r.code,{children:"global.yaml"})," file of your project."]}),"\n"]}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"spacetech"})," in the example codes below are example project name."]}),(0,t.jsxs)(r.p,{children:["Please find your own project name and replace ",(0,t.jsx)(r.code,{children:"spacetech"})," with your project name."]}),(0,t.jsxs)(r.p,{children:["To see projects, you can check the ",(0,t.jsx)(r.code,{children:"projects"})," directory."]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"ls -l ./projects\n"})})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"vi ./projects/spacetech/global.yaml\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Find the ",(0,t.jsx)(r.code,{children:"keycloak"})," entry and add or edit the missing ",(0,t.jsx)(r.code,{children:"bruteForce"})," key to it."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["For the Testing Distribution module, you must use the ",(0,t.jsx)(r.code,{children:"distribution"})," section."]}),"\n",(0,t.jsxs)(r.p,{children:["For the Enterprise App Store module, you must use the ",(0,t.jsx)(r.code,{children:"store"})," section."]}),"\n",(0,t.jsx)(r.p,{children:"See the example configuration below:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"keycloak:\n  initialUsername: admin@example.com\n  enabledRegistration: true\n  bruteForce:\n    distribution:\n      maxFailureCount: 10\n      maxLockDuration: 3600\n    store:\n      maxFailureCount: 10\n      maxLockDuration: 3600\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"maxFailureCount"}),": The needed count of successive failed attempts to block user."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"maxLockDuration"}),": The time in seconds required to unblock the user."]}),"\n"]})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Shutdown Appcircle server."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Apply configuration changes."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Boot Appcircle server."}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,t.jsxs)(r.admonition,{type:"tip",children:[(0,t.jsx)(r.p,{children:"You should check the status of the Appcircle server after boot for any possible errors."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" check\n'})})]})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var t=n(96540);const i={},o=t.createContext(i);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);