"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[77981],{41632:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(74848),o=n(28453);const i={title:"Upgrading Server",description:"Learn how to upgrade self-hosted Appcircle server",tags:["self-hosted server","update","upgrade"],sidebar_position:3},t="Overview",a={id:"self-hosted-appcircle/update",title:"Upgrading Server",description:"Learn how to upgrade self-hosted Appcircle server",source:"@site/docs/self-hosted-appcircle/update.md",sourceDirName:"self-hosted-appcircle",slug:"/self-hosted-appcircle/update",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/update",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/update.md",tags:[{label:"self-hosted server",permalink:"/nextjs-upload-file-tryout/tags/self-hosted-server"},{label:"update",permalink:"/nextjs-upload-file-tryout/tags/update"},{label:"upgrade",permalink:"/nextjs-upload-file-tryout/tags/upgrade"}],version:"current",sidebarPosition:3,frontMatter:{title:"Upgrading Server",description:"Learn how to upgrade self-hosted Appcircle server",tags:["self-hosted server","update","upgrade"],sidebar_position:3},sidebar:"mySidebar",previous:{title:"Monitoring",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/monitoring"},next:{title:"Troubleshooting & FAQ",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/faq"}},l={},c=[{value:"\u2728 Auto-upgrading Server",id:"-auto-upgrading-server",level:4},{value:"1. Download Latest",id:"1-download-latest",level:3},{value:"2. Update Packages",id:"2-update-packages",level:3},{value:"3. Update Server",id:"3-update-server",level:3},{value:"4. Update Images",id:"4-update-images",level:3},{value:"Notes",id:"notes",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:"As in cloud, we're releasing regular updates for self-hosted Appcircle server. You should keep your instance up-to-date in order to get latest features, bug fixes and improvements."}),"\n",(0,r.jsx)(s.p,{children:"When a new version of self-hosted Appcircle is released, you can update with below steps."}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"Prerequisites and dependencies are all same as installation steps. So we will keep it short in this page, try to document only update related details, and give references to installation when required."}),(0,r.jsxs)(s.p,{children:["When you're in trouble with update, it will be useful to review details and warnings written in ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/install-server/docker",children:"installation"})," docs."]})]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.p,{children:"Below steps does not affect or destroy your data. Update process keeps your data and schema compatible with latest self-hosted Appcircle server by using incremental migrations all handled automatically."})}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"To determine the current version of either a project or the script itself, use the version command provided with the script. This will display the script version and any docker image hashes associated with the project. If no docker images are found, the command will output script version only."}),(0,r.jsx)(s.p,{children:"Note that a project name is required to execute the version command."}),(0,r.jsx)(s.p,{children:'For example, to find the version for a project named "spacetech", run the following command:'}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" version\n'})})]}),"\n",(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsx)(s.h4,{id:"-auto-upgrading-server",children:"\u2728 Auto-upgrading Server"}),(0,r.jsxs)(s.p,{children:["If you want to update the Appcircle server in an automated way, you can check out the ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/configure-server/auto-updating",children:"Auto-upgrading Server"})," documents."]}),(0,r.jsx)(s.p,{children:"You can effortlessly manage all the commands listed below."}),(0,r.jsx)(s.p,{children:"Additionally, you can set up recurring cron jobs (daily or weekly) to automatically check if Appcircle's server needs updating."})]}),"\n",(0,r.jsx)(s.h3,{id:"1-download-latest",children:"1. Download Latest"}),"\n",(0,r.jsxs)(s.p,{children:["To download the licensed Appcircle Server package for your organization, you must copy the ",(0,r.jsx)(s.code,{children:"cred.json"})," file to the directory where you want to install the package. This typically means copying the ",(0,r.jsx)(s.code,{children:"cred.json"})," file to the same directory containing the ",(0,r.jsx)(s.code,{children:"appcircle-server"})," directory."]}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsxs)(s.p,{children:["Without the ",(0,r.jsx)(s.code,{children:"cred.json"})," file, you will not be able to access the licensed Appcircle Server package."]}),(0,r.jsxs)(s.p,{children:["If you have not yet obtained the ",(0,r.jsx)(s.code,{children:"cred.json"})," file, please contact us for assistance."]})]}),"\n",(0,r.jsx)(s.p,{children:"Download the latest self-hosted Appcircle package."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -fsSL https://cdn.appcircle.io/self-hosted/download-server.sh | bash\n"})}),"\n",(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsx)(s.p,{children:"By default, the command above downloads the latest available Appcircle server version."}),(0,r.jsxs)(s.p,{children:["You can specify a specific version using the ",(0,r.jsx)(s.code,{children:"--package-version"})," option or ",(0,r.jsx)(s.code,{children:"AC_SERVER_VERSION"})," environment variable.."]}),(0,r.jsxs)(s.p,{children:["For instance, suppose there are multiple versions available (e.g. ",(0,r.jsx)(s.code,{children:"3.14.0"}),", ",(0,r.jsx)(s.code,{children:"3.14.1"}),", ",(0,r.jsx)(s.code,{children:"3.14.2"}),", and ",(0,r.jsx)(s.code,{children:"3.15.0"}),") and you want to download version ",(0,r.jsx)(s.code,{children:"3.14.1"}),". To achieve this, simply run the command below:"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -fsSL https://cdn.appcircle.io/self-hosted/download-server.sh | AC_SERVER_VERSION=3.14.1 bash\n"})}),(0,r.jsx)(s.p,{children:"Alternatively, if you wish to download the latest package in the 3.14.x series (which would be version 3.14.2), use the following command:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -fsSL https://cdn.appcircle.io/self-hosted/download-server.sh | AC_SERVER_VERSION=3.14 bash\n"})})]}),"\n",(0,r.jsxs)(s.admonition,{type:"caution",children:[(0,r.jsxs)(s.p,{children:["Upgrading from older versions to ",(0,r.jsx)(s.code,{children:"v3.14.0"})," or later, requires MinIO migration that should be done interactively while upgrading."]}),(0,r.jsxs)(s.p,{children:["In order to migrate to single-node single drive MinIO configuration or stay with the deprecated multi-node single drive MinIO configuration, ",(0,r.jsx)(s.strong,{children:"you must follow the instructions"})," that are defined in the ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/configure-server/minio-migration",children:"MinIO Migration"})," document."]})]}),"\n",(0,r.jsx)(s.p,{children:"Extract self-hosted Appcircle package into folder."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"unzip -o -u appcircle-server-linux-x64-${version}-${build}.zip -d appcircle-server\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["You should use the downloaded ",(0,r.jsx)(s.code,{children:"zip"})," archive while extracting so that the actual ",(0,r.jsx)(s.code,{children:"${version}"})," and ",(0,r.jsx)(s.code,{children:"${build}"})," will come from there. You can find the relevant data in the previously executed download command output."]})}),"\n",(0,r.jsxs)(s.p,{children:["Change directory into extracted ",(0,r.jsx)(s.code,{children:"appcircle-server"})," folder for following steps."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,r.jsxs)(s.p,{children:["For other details and troubleshooting, you can refer to ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/install-server/docker#1-download",children:"download"})," section in installation docs."]}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsxs)(s.p,{children:["After version ",(0,r.jsx)(s.code,{children:"3.7.1"}),", the container image versions, pulled from the Appcircle artifact registry, will be the same version of the Appcircle zip package you downloaded."]}),(0,r.jsx)(s.p,{children:"In this case, if you download an older version of the Appcircle zip package, the container images will also be older versions."}),(0,r.jsx)(s.p,{children:"So as a result, you will downgrade the Appcircle server if you download an older version zip package."})]}),"\n",(0,r.jsx)(s.h3,{id:"2-update-packages",children:"2. Update Packages"}),"\n",(0,r.jsx)(s.p,{children:"Although it's rare, update may have new packages or package updates. Those are the tools that self-hosted Appcircle depends on. So they should be kept up-to-date same as Appcircle server."}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["You need to have root access on your system for this step. Being able to run ",(0,r.jsx)(s.code,{children:"sudo"})," is sufficient for the following step. (sudoer)"]})}),"\n",(0,r.jsxs)(s.p,{children:["In order to update packages, execute the script using the ",(0,r.jsx)(s.code,{children:"-i"})," argument as shown below."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo ./ac-self-hosted.sh -i\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You can also use the long option ",(0,r.jsx)(s.code,{children:"--install-package"})," for the same purpose."]}),"\n",(0,r.jsxs)(s.p,{children:["For other details and troubleshooting, you can refer to ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/install-server/docker#2-packages",children:"packages"})," section in installation docs."]}),"\n",(0,r.jsx)(s.h3,{id:"3-update-server",children:"3. Update Server"}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsxs)(s.p,{children:["We're going on with the same sample scenario as in ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/install-server/docker#3-configure",children:"installation"})," steps."]}),(0,r.jsx)(s.p,{children:'Let\'s assume we have company named as Space Tech and our project name is "spacetech". For the following steps, we will give examples based on this fictive company for better understanding.'})]}),"\n",(0,r.jsxs)(s.p,{children:["If update has new features with their configuration options or you want to make some minor changes in your configuration, first edit your ",(0,r.jsx)(s.code,{children:"global.yaml"})," file."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-txt",children:"projects\n\u2514\u2500\u2500 spacetech\n    \u251c\u2500\u2500 export\n    \u251c\u2500\u2500 generated-secret.yaml\n    \u251c\u2500\u2500 global.yaml\n    \u2514\u2500\u2500 user-secret\n"})}),"\n",(0,r.jsx)(s.p,{children:"In most cases, you don't need to change anything in your configuration. So, above step is optional."}),"\n",(0,r.jsx)(s.p,{children:"Then execute below command to update server."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})}),"\n",(0,r.jsxs)(s.p,{children:["For other details and troubleshooting, you can refer to ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/install-server/docker#3-configure",children:"configuration"})," section in installation docs."]}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"Although it's rare, self-hosted Appcircle may have a new service with its dedicated subdomain."}),(0,r.jsx)(s.p,{children:"If it was announced in release notes, you need to add new subdomain to your DNS server."}),(0,r.jsxs)(s.p,{children:["All process is same as in installation, so refer to ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/install-server/docker#4-dns-settings",children:"DNS settings"})," section in installation docs for details."]})]}),"\n",(0,r.jsx)(s.h3,{id:"4-update-images",children:"4. Update Images"}),"\n",(0,r.jsx)(s.p,{children:"In order to get docker image updates for Appcircle server services, we need to pull them from remote artifact repository."}),"\n",(0,r.jsx)(s.p,{children:"To activate image updates, first stop all running docker containers."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,r.jsx)(s.p,{children:"Upgrade images."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" upgrade\n'})}),"\n",(0,r.jsxs)(s.admonition,{type:"caution",children:[(0,r.jsx)(s.p,{children:"If you are using a proxy on the server, then you should maintain the proxy variables."}),(0,r.jsxs)(s.p,{children:["Please head to the ",(0,r.jsx)(s.a,{href:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/integrations-and-access/proxy-configuration#maintenance-of-no_proxy-variables",children:"Maintenance of Proxy Variables"})," for more details."]})]}),"\n",(0,r.jsx)(s.p,{children:"Then start with below command."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,r.jsx)(s.p,{children:"When complete, check service statuses."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" check\n'})}),"\n",(0,r.jsx)(s.p,{children:"You may also print the image hashes and script's version by using the below command."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" version\n'})}),"\n",(0,r.jsxs)(s.admonition,{type:"caution",children:[(0,r.jsx)(s.p,{children:"Please keep in mind that, restarting docker containers will stop all services until all started again. So, it will take some time and during that duration self-hosted Appcircle server will be unreachable."}),(0,r.jsx)(s.p,{children:"For this reason, you may prefer to execute this step on an idle time in order to minimize its negative effects on your users."})]}),"\n",(0,r.jsxs)(s.p,{children:["For other details and troubleshooting, you can refer to ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/install-server/docker#5-run-server",children:"run server"})," section in installation docs."]}),"\n",(0,r.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"Above explained update steps keep all your data consistent and compatible. On most cases, data loss is an undesired case for an update scenario."}),(0,r.jsxs)(s.p,{children:["But if you want or need to reset your data for some reason, you can follow ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/install-server/docker#reset-configuration",children:"reset configuration"})," steps in installation docs."]})]}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"Although it's rare, self-hosted Appcircle may require also self-hosted runner update. Because on some cases, it may bring some breaking changes for older runners."}),(0,r.jsx)(s.p,{children:"If it's required, it will be announced in self-hosted Appcircle release notes with minimum supported runner version."}),(0,r.jsxs)(s.p,{children:["In order to update your self-hosted runners, refer to ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/self-hosted-runner/update",children:"update self-hosted runner"})," section in docs."]}),(0,r.jsxs)(s.p,{children:["For other details and troubleshooting, you can refer to ",(0,r.jsx)(s.a,{href:"/self-hosted-appcircle/install-server/docker#connecting-runners",children:"connecting runners"})," section in installation docs."]})]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);