"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[43147],{22062:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>o});var s=i(74848),r=i(28453);const o=[];function t(e){const n={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Be aware that this process will cause downtime since it requires a restart of the Appcircle server."})})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28376:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>o});var s=i(74848),r=i(28453);const o=[];function t(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Shutdown Appcircle server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Apply configuration changes."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Boot Appcircle server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"You should check the status of the Appcircle server after boot for any possible errors."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" check\n'})})]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},21469:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>o});var s=i(74848),r=i(28453);const o=[];function t(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"spacetech"})," in the example codes below are example project name."]}),(0,s.jsxs)(n.p,{children:["Please find your own project name and replace ",(0,s.jsx)(n.code,{children:"spacetech"})," with your project name."]}),(0,s.jsxs)(n.p,{children:["To see projects, you can check the ",(0,s.jsx)(n.code,{children:"projects"})," directory."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ls -l ./projects\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},64314:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var s=i(74848),r=i(28453),o=i(69678),t=i(21469),a=i(28376),c=i(22062);const l={title:"Monitoring",description:"Monitoring the Appcircle Server service logs and metrics with Grafana.",tags:["monitoring","logging","Grafana"]},d=void 0,h={id:"self-hosted-appcircle/configure-server/monitoring",title:"Monitoring",description:"Monitoring the Appcircle Server service logs and metrics with Grafana.",source:"@site/docs/self-hosted-appcircle/configure-server/monitoring.md",sourceDirName:"self-hosted-appcircle/configure-server",slug:"/self-hosted-appcircle/configure-server/monitoring",permalink:"/self-hosted-appcircle/configure-server/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/monitoring.md",tags:[{label:"monitoring",permalink:"/tags/monitoring"},{label:"logging",permalink:"/tags/logging"},{label:"Grafana",permalink:"/tags/grafana"}],version:"current",frontMatter:{title:"Monitoring",description:"Monitoring the Appcircle Server service logs and metrics with Grafana.",tags:["monitoring","logging","Grafana"]},sidebar:"mySidebar",previous:{title:"MinIO Migration",permalink:"/self-hosted-appcircle/configure-server/minio-migration"},next:{title:"Upgrading Server",permalink:"/self-hosted-appcircle/update"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Accessing to Grafana Web UI",id:"accessing-to-grafana-web-ui",level:2},...t.RM,{value:"Retention Period of Logs",id:"retention-period-of-logs",level:2},{value:"Retention Period on Loki",id:"retention-period-on-loki",level:3},...c.RM,...a.RM,{value:"Retention on Systemd",id:"retention-on-systemd",level:3},{value:"Filtering Logs",id:"filtering-logs",level:2},{value:"Downloading and Sharing the Logs",id:"downloading-and-sharing-the-logs",level:2},{value:"Grafana User Management",id:"grafana-user-management",level:2},{value:"Disable the Monitoring Services",id:"disable-the-monitoring-services",level:2},...c.RM,...t.RM,...a.RM];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"This document provides instructions on how to access and use the monitoring system implemented for the self-hosted Appcircle server."}),"\n",(0,s.jsx)(n.p,{children:"The monitoring system is designed to provide visibility into the application logs, enabling you to troubleshoot issues, monitor performance, and gain insights into the application's behavior."}),"\n",(0,s.jsx)(n.p,{children:"The subsequent sections of this document will guide you through the process of accessing the Grafana web interface, navigating the log data."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["To access and use the monitoring capabilities, you must be running Appcircle server version ",(0,s.jsx)(n.code,{children:"3.15.0"})," or later."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"The log monitoring system is for viewing the logs of the running Appcircle Server services. If you are having issues about starting the Appcircle Server services, you should use other CLI tools for troubleshooting and resolving the issues."}),(0,s.jsx)(n.p,{children:"You may not access to the monitoring UI if services are not running healthy."})]}),"\n",(0,s.jsx)(n.h2,{id:"accessing-to-grafana-web-ui",children:"Accessing to Grafana Web UI"}),"\n",(0,s.jsx)(t.Ay,{}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["We will use ",(0,s.jsx)(n.code,{children:".appcircle.spacetech.com"})," example URLs below. You should change this domain with your own Appcircle domain."]})}),"\n",(0,s.jsxs)(n.p,{children:["The Grafana monitoring UI is accessible by default through the ",(0,s.jsx)(n.code,{children:"monitor"})," subdomain. In our example, the full domain URL is ",(0,s.jsx)(n.code,{children:"monitor.appcircle.spacetech.com"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["You can face SSL errors while connecting to the ",(0,s.jsx)(n.code,{children:"monitor"})," URL like ",(0,s.jsx)(n.code,{children:"ERR_CERT_COMMON_NAME_INVALID"}),". That error indicates the SSL certificate of the Appcircle server doesn't include the ",(0,s.jsx)(n.code,{children:"monitor"})," subdomain."]}),(0,s.jsx)(n.p,{children:"The recommended solution is to update the SSL certificate of the Appcircle server."})]}),"\n",(0,s.jsx)(n.p,{children:"Upon navigating to the Grafana login page, you should authenticate using the initial username and password specified in the global.yaml file of your project. To verify these credentials, you can execute the following command on the Appcircle server:"}),"\n",(0,s.jsx)(n.p,{children:"Change directory to Appcircle server."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Update the environment variable ",(0,s.jsx)(n.code,{children:"PATH"})," with the required dependencies."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export PATH=$PATH:$(pwd)/deps/bin\n"})}),"\n",(0,s.jsx)(n.p,{children:"Print the Keycloak authentication credentials."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yq '.keycloak.initialUsername' ./projects/spacetech/export/.global.yaml && \\\nyq '.keycloak.initialPassword' ./projects/spacetech/export/.global.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The example output below displays the ",(0,s.jsx)(n.code,{children:"initialUsername"})," on the first line and ",(0,s.jsx)(n.code,{children:"initialPassword"})," on the second line. These credentials serve as your login information for the Grafana monitoring interface."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"admin@spacetech.com\nSuperSecretPassword\n"})}),"\n",(0,s.jsx)(n.h2,{id:"retention-period-of-logs",children:"Retention Period of Logs"}),"\n",(0,s.jsx)(n.p,{children:"Retention period refers to the duration for which log data is stored before being deleted or archived. It's used to manage storage space, optimize system performance, and ensure compliance with regulatory requirements."}),"\n",(0,s.jsx)(n.h3,{id:"retention-period-on-loki",children:"Retention Period on Loki"}),"\n",(0,s.jsx)(n.p,{children:"The Appcircle server logs will be stored in the Loki. So the queries and filters that you run from the Grafana UI will run on the Loki side."}),"\n",(0,s.jsx)(n.p,{children:"The logs in the loki should be cleaned automatically. By default, the retention period for the Appcircle server logs on the Loki side are 720 hours (30 days)."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to change this, you can edit the ",(0,s.jsx)(n.code,{children:"global.yaml"})," of your project."]}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi ./projects/spacetech/global.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add or change the retention period variable."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"loki:\n  retentionPeriod: 168h # 7 days\n"})}),"\n",(0,s.jsx)(a.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"retention-on-systemd",children:"Retention on Systemd"}),"\n",(0,s.jsx)(n.p,{children:"The Appcircle server and other system services also transmit their logs to the Journald log driver. However, once Appcircle server logs are successfully forwarded to Loki, the local server logs become redundant and can be safely deleted."}),"\n",(0,s.jsx)(n.p,{children:"If you wish to configure a maximum size limit for automatic log deletion on the Journald, you can modify the relevant configuration settings."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Modifying the Journald configuration requires elevated privileges with ",(0,s.jsx)(n.code,{children:"sudo"})," permissions, as it involves altering system-level settings."]})}),"\n",(0,s.jsx)(n.p,{children:"Edit the Journald config file."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo vi /etc/systemd/journald.conf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Uncomment or add the ",(0,s.jsx)(n.code,{children:"SystemMaxUse"})," variable in the configuration file and assign it the desired value, such as ",(0,s.jsx)(n.code,{children:"200M"})," for a 200 megabyte limit."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SystemMaxUse=200M\n"})}),"\n",(0,s.jsx)(n.p,{children:"Restart the Systemd journal service to apply the changes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart systemd-journald\n"})}),"\n",(0,s.jsx)(n.p,{children:"With this configuration change, the Journald log driver will now utilize a maximum of 200 megabytes of disk space for storing logs."}),"\n",(0,s.jsx)(n.h2,{id:"filtering-logs",children:"Filtering Logs"}),"\n",(0,s.jsx)(n.p,{children:'After successfully authenticating with the Grafana user interface, you can commence filtering and exploring log data by navigating to the "Explore" menu.'}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/be-2111-1-explore.png"}),"\n",(0,s.jsxs)(n.p,{children:["To filter and view logs for a specific service, follow the steps outlined below. For instance, if you wish to examine the log entries pertaining to the ",(0,s.jsx)(n.code,{children:"build"})," service:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.code,{children:"container"})," as label from ",(0,s.jsx)(n.code,{children:"1"}),". box."]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.code,{children:"spacetech-build-1"})," as value from ",(0,s.jsx)(n.code,{children:"2"}),". box."]}),"\n",(0,s.jsxs)(n.li,{children:["Select the date time you want to query from ",(0,s.jsx)(n.code,{children:"3"}),". box."]}),"\n",(0,s.jsx)(n.li,{children:'After you set the query parameters, hit "Run query" button to see the logs.'}),"\n",(0,s.jsx)(n.li,{children:'Additionally, if you want to "follow" the logs in realtime, you can hit "Live" button.'}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/be-2111-2-filter-logs.png"}),"\n",(0,s.jsxs)(n.p,{children:['Upon executing the query by clicking the "Run query" button, the log entries generated by the ',(0,s.jsx)(n.code,{children:"spacetech-build-1"})," service will be displayed."]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/be-2111-3-view-logs.png"}),"\n",(0,s.jsx)(n.p,{children:'You can also filter words. For example you can filter any log line that contain "error" word.'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Select the ",(0,s.jsx)(n.code,{children:"container"})," and relevant container."]}),"\n",(0,s.jsxs)(n.li,{children:["Change filter to ",(0,s.jsx)(n.code,{children:"Line contains case insensitive"})," for a case insensitive search."]}),"\n",(0,s.jsx)(n.li,{children:'Write "error" to the input.'}),"\n",(0,s.jsx)(n.li,{children:'Select the date time and hit "Run query" button.'}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/be-2111-6-filter-errors.png"}),"\n",(0,s.jsx)(n.h2,{id:"downloading-and-sharing-the-logs",children:"Downloading and Sharing the Logs"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to download and share the logs after you ",(0,s.jsx)(n.a,{href:"#filtering-logs",children:"filter"}),", you can the same UI."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Filter the logs according to your needs."}),"\n",(0,s.jsx)(n.li,{children:'Hit the "Download" button from upper right corner of the logs.'}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.code,{children:"txt"})," as the format."]}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/be-2111-4-download-logs.png"}),"\n",(0,s.jsx)(n.p,{children:"A file that contains the filtered logs will be downloaded to your local computer."}),"\n",(0,s.jsx)(n.p,{children:"You can share that log file to troubleshoot the problems."}),"\n",(0,s.jsx)(n.h2,{id:"grafana-user-management",children:"Grafana User Management"}),"\n",(0,s.jsx)(n.p,{children:"It is important to note that the user accounts for the Appcircle Server and the Grafana monitoring interface are entirely separate and unrelated entities. There is no direct association or shared credentials between these two user management systems."}),"\n",(0,s.jsx)(n.p,{children:"If you require additional users beyond the initial user account to have access to view log data, you can create new user accounts within the Grafana user management system."}),"\n",(0,s.jsx)(n.p,{children:'To create a new user account, navigate to the "Administration" section of the Grafana interface, then access the "Users" menu. From there, click on the "New user" button to initiate the process of adding a new user.'}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/be-2111-7-adding-users.png"}),"\n",(0,s.jsx)(n.p,{children:'Provide the necessary user information in the respective fields, and then click the "Create user" button to save and create the new user account.'}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/be-2111-8-creating-user-menu.png"}),"\n",(0,s.jsx)(n.p,{children:'To grant administrative privileges to the user, click the "Change" button and toggle the "Grafana Admin" switch to the "Yes" position. Click "Change" again to confirm and save the updated permissions.'}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/be-2111-9-make-it-admin.png"}),"\n",(0,s.jsxs)(n.p,{children:["For more detailed information, you can check the official ",(0,s.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/administration/user-management/",children:"Grafana User Management"})," documentation."]}),"\n",(0,s.jsx)(n.h2,{id:"disable-the-monitoring-services",children:"Disable the Monitoring Services"}),"\n",(0,s.jsx)(n.p,{children:"The monitoring services have been activated in the default configuration. However, you can disable them when you need to and then re-enable them again."}),"\n",(0,s.jsxs)(n.p,{children:["If you need to disable the monitoring services of the Appcircle server, edit the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file of your project and set the ",(0,s.jsx)(n.code,{children:"monitoring.enabled"})," parameter to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(t.Ay,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to the ",(0,s.jsx)(n.code,{children:"appcircle-server"})," directory."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Edit the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file of your project."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi ./projects/spacetech/global.yaml\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add or update the ",(0,s.jsx)(n.code,{children:"monitoring.enabled"})," parameter as below."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"monitoring:\n  enabled: false\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you can't find the ",(0,s.jsx)(n.code,{children:"monitoring"})," parameter in the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file, you can add it manually at the end of the ",(0,s.jsx)(n.code,{children:"global.yaml"}),"."]})}),"\n",(0,s.jsx)(a.Ay,{}),"\n",(0,s.jsxs)(n.p,{children:["When you run the ",(0,s.jsx)(n.code,{children:"check"})," command, you should see that the logging service is not running, as below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Appcircle logging service is not running.\nAll services are running successfully. Project name is spacetech\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When you need to re-enable the monitoring services again, you can remove ",(0,s.jsx)(n.code,{children:"monitoring"})," from ",(0,s.jsx)(n.code,{children:"global.yaml"})," or set its value to ",(0,s.jsx)(n.code,{children:"true"}),". After that, you should follow the Appcircle server restart steps above to apply the configuration changes."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Disabling the Appcircle monitoring services does not disable the Appcircle logging."}),(0,s.jsxs)(n.p,{children:["You can always access the container logs from container engine (",(0,s.jsx)(n.code,{children:"docker"})," or ",(0,s.jsx)(n.code,{children:"podman"}),")."]}),(0,s.jsxs)(n.p,{children:["The container logs are also sent to the ",(0,s.jsx)(n.code,{children:"systemd"})," journal. So the log entries can be retrieved using the ",(0,s.jsx)(n.code,{children:"journalctl"})," command through the journal API. For more information, see the ",(0,s.jsxs)(n.a,{href:"https://docs.docker.com/config/containers/logging/journald/",children:[(0,s.jsx)(n.code,{children:"journald"})," logging driver"]})," page."]})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},69678:(e,n,i)=>{i.d(n,{A:()=>r});i(96540);var s=i(74848);function r(e){let{url:n}=e;return(0,s.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(96540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);