"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6270],{21469:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>a});var r=n(74848),s=n(28453);const a=[];function o(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"spacetech"})," in the example codes below are example project name."]}),(0,r.jsxs)(t.p,{children:["Please find your own project name and replace ",(0,r.jsx)(t.code,{children:"spacetech"})," with your project name."]}),(0,r.jsxs)(t.p,{children:["To see projects, you can check the ",(0,r.jsx)(t.code,{children:"projects"})," directory."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ls -l ./projects\n"})})]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},90462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(74848),s=n(28453),a=n(21469);const o={title:"Auto-upgrading Server",description:"Learn how to upgrade a self-hosted Appcircle server automatically.",tags:["self-hosted server","update","upgrade","auto-update","auto-upgrade","crontab"],sidebar_position:15},i=void 0,l={id:"self-hosted-appcircle/configure-server/auto-updating",title:"Auto-upgrading Server",description:"Learn how to upgrade a self-hosted Appcircle server automatically.",source:"@site/docs/self-hosted-appcircle/configure-server/auto-updating.md",sourceDirName:"self-hosted-appcircle/configure-server",slug:"/self-hosted-appcircle/configure-server/auto-updating",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/auto-updating",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/auto-updating.md",tags:[{label:"self-hosted server",permalink:"/nextjs-upload-file-tryout/tags/self-hosted-server"},{label:"update",permalink:"/nextjs-upload-file-tryout/tags/update"},{label:"upgrade",permalink:"/nextjs-upload-file-tryout/tags/upgrade"},{label:"auto-update",permalink:"/nextjs-upload-file-tryout/tags/auto-update"},{label:"auto-upgrade",permalink:"/nextjs-upload-file-tryout/tags/auto-upgrade"},{label:"crontab",permalink:"/nextjs-upload-file-tryout/tags/crontab"}],version:"current",sidebarPosition:15,frontMatter:{title:"Auto-upgrading Server",description:"Learn how to upgrade a self-hosted Appcircle server automatically.",tags:["self-hosted server","update","upgrade","auto-update","auto-upgrade","crontab"],sidebar_position:15},sidebar:"mySidebar",previous:{title:"Customize Enterprise App Store",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/enterprise-store"},next:{title:"MinIO Migration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/minio-migration"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Updating the Server on Demand",id:"updating-the-server-on-demand",level:2},...a.RM,{value:"Updating the Server Scheduled",id:"updating-the-server-scheduled",level:2},{value:"Enable Passwordless Sudo",id:"enable-passwordless-sudo",level:3},{value:"Create the Crontab Job",id:"create-the-crontab-job",level:3},...a.RM];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"In this document, you will learn how to update the Appcircle server automatically."}),"\n",(0,r.jsx)(t.p,{children:"The automated update tool streamlines the process of keeping your Appcircle server up-to-date. It takes care of seamlessly downloading the latest release, extracting the necessary files, and applying any new configurations."}),"\n",(0,r.jsx)(t.p,{children:"In the event of a minor or patch upgrade, the tool will gracefully stop the existing Appcircle server, pull the updated container images, and restart the Appcircle server with the new changes."}),"\n",(0,r.jsx)(t.p,{children:"This automated approach ensures a smooth transition to the latest version, minimizing downtime and maximizing efficiency."}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"The auto-update tool does not update the Appcircle server in the event of a major Appcircle server update."})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"The auto-update tool does not currently support the handling of proxy environment variables. Therefore, it is not recommended to use this tool on an Appcircle server that use proxy environment variables."})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The auto-update tool is included in the Appcircle server package version ",(0,r.jsx)(t.code,{children:"v3.16.0"})," or later."]})}),"\n",(0,r.jsx)(t.h2,{id:"updating-the-server-on-demand",children:"Updating the Server on Demand"}),"\n",(0,r.jsx)(t.p,{children:"For a manual yet simplified update process of the Appcircle server, you can leverage the auto-update via a single command."}),"\n",(0,r.jsx)(t.p,{children:"The auto-update will do the following jobs automatically:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Downloads the latest available Appcircle server package for your organization."}),"\n",(0,r.jsxs)(t.li,{children:["Checks the package version for a possible major upgrade.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.em,{children:"If yes, exits gracefully since the major upgrade might require manual jobs. Please check the release notes for detailed information in this case."})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Extracts the downloaded Appcircle server package."}),"\n",(0,r.jsx)(t.li,{children:"Stops the Appcircle server."}),"\n",(0,r.jsx)(t.li,{children:"Exports the updated configurations."}),"\n",(0,r.jsx)(t.li,{children:"Pulls the updated container images."}),"\n",(0,r.jsx)(t.li,{children:"Starts the Appcircle server."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"Please note that this process will cause downtime since it requires a restart of the Appcircle server."})}),"\n",(0,r.jsx)(t.p,{children:"In order to perform above operations with a single command call, follow the steps below."}),"\n",(0,r.jsx)(t.p,{children:"Change the directory to the Appcircle server."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,r.jsx)(a.Ay,{}),"\n",(0,r.jsx)(t.p,{children:"Run the auto-update tool for your project."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'./helper-tools/auto-update.sh -n "spacetech" update\n'})}),"\n",(0,r.jsx)(t.h2,{id:"updating-the-server-scheduled",children:"Updating the Server Scheduled"}),"\n",(0,r.jsx)(t.p,{children:"To fully automate the update process of the Appcircle, you can leverage the auto-update tool to create a cronjob on the Appcircle server."}),"\n",(0,r.jsx)(t.p,{children:"Crontab is a scheduling utility that enables users to schedule tasks and commands to run at predetermined intervals."}),"\n",(0,r.jsx)(t.p,{children:"By utilizing crontab, you can seamlessly automate minor or patch updates for the Appcircle server, ensuring your application remains up-to-date without manual intervention."}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["If you are updating the Appcircle server with the ",(0,r.jsx)(t.a,{href:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/offline-installation#upgrade",children:"Offline Upgrade"})," method, then you can't use auto-update tool since it requires some network access to download the Appcircle server package and up-to-date container images."]})}),"\n",(0,r.jsx)(t.h3,{id:"enable-passwordless-sudo",children:"Enable Passwordless Sudo"}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["To use the crontab, you ",(0,r.jsx)(t.strong,{children:"must"})," enable the passwordless ",(0,r.jsx)(t.code,{children:"sudo"})," commands."]})}),"\n",(0,r.jsxs)(t.p,{children:["Passwordless ",(0,r.jsx)(t.code,{children:"sudo"})," allows authorized users or scripts to execute commands with superuser privileges without being prompted for a password, enhancing the automation capabilities of administrative tasks."]}),"\n",(0,r.jsxs)(t.p,{children:["To activate passwordless ",(0,r.jsx)(t.code,{children:"sudo"}),", you should edit the ",(0,r.jsx)(t.code,{children:"sudoers"})," file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo visudo\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Find the line below in the ",(0,r.jsx)(t.code,{children:"sudoers"})," file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:"%wheel ALL=(ALL)       ALL\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"wheel"})})," in the example output above is the privileged group name that depends on the Linux distribution you use."]}),(0,r.jsxs)(t.p,{children:["For RHEL or its derivatives, it is generally ",(0,r.jsx)(t.code,{children:"wheel"}),". For Ubuntu or Debian derivatives, it can be one of ",(0,r.jsx)(t.code,{children:"admin"})," or ",(0,r.jsx)(t.code,{children:"sudo"}),"."]}),(0,r.jsx)(t.p,{children:"You can also enable passwordless sudo only for a user. Please refer to your Linux distribution's user manuals for details."})]}),"\n",(0,r.jsxs)(t.p,{children:["Add ",(0,r.jsx)(t.code,{children:"NOPASSWD:"})," to activate the passwordless sudo."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:"%wheel  ALL=(ALL)       NOPASSWD: ALL\n"})}),"\n",(0,r.jsx)(t.h3,{id:"create-the-crontab-job",children:"Create the Crontab Job"}),"\n",(0,r.jsx)(t.p,{children:"To create a cronjob, you can simply use the auto-update tool commands."}),"\n",(0,r.jsx)(t.p,{children:"Change the directory to the Appcircle server."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,r.jsx)(a.Ay,{}),"\n",(0,r.jsx)(t.p,{children:"Create the crontab job with the command below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'./helper-tools/auto-update.sh -n "spacetech" install\n'})}),"\n",(0,r.jsx)(t.p,{children:"Check if crontab job is activated."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"crontab -l\n"})}),"\n",(0,r.jsx)(t.p,{children:"You should see the newly added crontab entry in the list of jobs, like below:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:'0 3 * * 6 /home/user/appcircle-server/helper-tools/auto-update.sh -n "spacetech" update &>> /home/user/appcircle-server/appcircle-server-auto-update.log\n'})}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:"As you can see in the above job definition, the logs will be saved into a file named"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"appcircle-server-auto-update.log"})}),"\n"]}),(0,r.jsxs)(t.p,{children:["in the ",(0,r.jsx)(t.code,{children:"appcircle-server"})," directory. You can check the logs if you have any issues with the automated update."]})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"By default, the crontab job is defined to check and update the Appcircle server at 3:00 AM every Saturday."})}),"\n",(0,r.jsx)(t.p,{children:"You can remove the crontab job if you don't need it anymore with the below command."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'./helper-tools/auto-update.sh -n "spacetech" remove\n'})}),"\n",(0,r.jsx)(t.p,{children:"You can change the crontab schedule if you want to check and update the Appcircle server, for instance, at 3:00 AM every day."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'./helper-tools/auto-update.sh -n "spacetech" install --cron-time "0 3 * * *"\n'})}),"\n",(0,r.jsx)(t.p,{children:"Below are some sample crontab schedules that can be used for scheduled upgrades."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["At 3:00 AM every Sunday: ",(0,r.jsx)(t.code,{children:"0 3 * * 0"})]}),"\n",(0,r.jsxs)(t.li,{children:["At 3:00 AM first day of every month: ",(0,r.jsx)(t.code,{children:"0 3 1 * *"})]}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"If you have enabled automated Appcircle server updates, you might want to consider cleaning the unused old Appcircle server container images since these images will consume the disk and won't be used at runtime."}),(0,r.jsxs)(t.p,{children:["You can use the below command for this purpose to clean up unused container images. However ",(0,r.jsx)(t.strong,{children:"it should be called while the Appcircle server is running"})," smoothly."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker image prune -a\n"})}),(0,r.jsx)(t.p,{children:"It will remove all images without at least one container associated with them so that the container images that are used by containers will not be affected."})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);