"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[28184],{48486:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var t=i(74848),n=i(28453);const c={title:"Pre-Installation Checklist",description:"Checklist to be followed before installing the self-hosted Appcircle",tags:["self-hosted","installation","checklist"],sidebar_position:2},l=void 0,a={id:"self-hosted-appcircle/install-server/pre-installation-checklist",title:"Pre-Installation Checklist",description:"Checklist to be followed before installing the self-hosted Appcircle",source:"@site/docs/self-hosted-appcircle/install-server/pre-installation-checklist.md",sourceDirName:"self-hosted-appcircle/install-server",slug:"/self-hosted-appcircle/install-server/pre-installation-checklist",permalink:"/self-hosted-appcircle/install-server/pre-installation-checklist",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/install-server/pre-installation-checklist.md",tags:[{label:"self-hosted",permalink:"/tags/self-hosted"},{label:"installation",permalink:"/tags/installation"},{label:"checklist",permalink:"/tags/checklist"}],version:"current",sidebarPosition:2,frontMatter:{title:"Pre-Installation Checklist",description:"Checklist to be followed before installing the self-hosted Appcircle",tags:["self-hosted","installation","checklist"],sidebar_position:2},sidebar:"mySidebar",previous:{title:"Install the Self-Hosted Appcircle Server",permalink:"/self-hosted-appcircle/install-server/"},next:{title:"Docker",permalink:"/self-hosted-appcircle/install-server/docker"}},r={},o=[{value:"Server Checklist",id:"server-checklist",level:2},{value:"Check the Operating System",id:"check-the-operating-system",level:3},{value:"Check the CPU Cores",id:"check-the-cpu-cores",level:3},{value:"Check the CPU Architecture",id:"check-the-cpu-architecture",level:3},{value:"Check the RAM Size",id:"check-the-ram-size",level:3},{value:"Check the Disk Size",id:"check-the-disk-size",level:3},{value:"Check the Swap Size",id:"check-the-swap-size",level:3},{value:"Check the Swappiness",id:"check-the-swappiness",level:3},{value:"Configure the DNS Settings",id:"configure-the-dns-settings",level:3},{value:"Obtain an SSL Certificate",id:"obtain-an-ssl-certificate",level:3},{value:"Obtain the SMTP Settings",id:"obtain-the-smtp-settings",level:3},{value:"Configure the Git Server",id:"configure-the-git-server",level:3},{value:"Network Access for Installation",id:"network-access-for-installation",level:3},{value:"Runner Checklist",id:"runner-checklist",level:2},{value:"Network Access for Installation",id:"network-access-for-installation-1",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"This page provides a checklist to be followed before installing the self-hosted Appcircle."}),"\n",(0,t.jsx)(s.p,{children:"Please ensure all the checks are completed for a smooth installation process."}),"\n",(0,t.jsx)(s.h2,{id:"server-checklist",children:"Server Checklist"}),"\n",(0,t.jsx)(s.h3,{id:"check-the-operating-system",children:"Check the Operating System"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If you are using RHEL, it should be ",(0,t.jsx)(s.strong,{children:"RHEL 8 or later"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cat /etc/redhat-release\n"})}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If you are using Ubuntu, it should be ",(0,t.jsx)(s.strong,{children:"Ubuntu 20.04 or later"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cat /etc/os-release\n"})}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If you are using Debian, it should be ",(0,t.jsx)(s.strong,{children:"Debian 11 or later"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cat /etc/os-release\n"})}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If you are using CentOS, it should be ",(0,t.jsx)(s.strong,{children:"CentOS 8 or later"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cat /etc/centos-release\n"})}),"\n",(0,t.jsx)(s.h3,{id:"check-the-cpu-cores",children:"Check the CPU Cores"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Minimum CPU core count should be ",(0,t.jsx)(s.strong,{children:"8 cores"}),".","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For enterprise installations and production environments, ",(0,t.jsx)(s.strong,{children:"16 or 32 CPU cores"})," are recommended."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"nproc --all\n"})}),"\n",(0,t.jsx)(s.h3,{id:"check-the-cpu-architecture",children:"Check the CPU Architecture"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The CPU architecture must be ",(0,t.jsx)(s.strong,{children:"x86_64"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"uname -i\n"})}),"\n",(0,t.jsx)(s.p,{children:"If the command above doesn't work, you can try the command below."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"arch\n"})}),"\n",(0,t.jsx)(s.h3,{id:"check-the-ram-size",children:"Check the RAM Size"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Minimum RAM size should be ",(0,t.jsx)(s.strong,{children:"16 GB"}),".","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For enterprise installations and production environments, ",(0,t.jsx)(s.strong,{children:"32 GB or 64 GB of RAM"})," is recommended."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"free -h\n"})}),"\n",(0,t.jsx)(s.h3,{id:"check-the-disk-size",children:"Check the Disk Size"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Minimum disk size should be ",(0,t.jsx)(s.strong,{children:"500 GB"}),".","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For enterprise installations and production environments, ",(0,t.jsx)(s.strong,{children:"1 TB of disk space"})," is recommended."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"df -h\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["Keep in mind that ",(0,t.jsx)(s.strong,{children:"SSDs"})," are a better and ",(0,t.jsx)(s.strong,{children:"recommended"})," choice for faster disk operations."]})}),"\n",(0,t.jsx)(s.h3,{id:"check-the-swap-size",children:"Check the Swap Size"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The swap size should be minimum half of the RAM size."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"free -h\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you don't have any swap space or it's insufficient, you can find the configuration details ",(0,t.jsx)(s.a,{href:"docker#swap",children:"here"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"check-the-swappiness",children:"Check the Swappiness"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The swappiness configuration should be ",(0,t.jsx)(s.strong,{children:"10"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo cat /proc/sys/vm/swappiness\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If the output is not 10, you can find the configuration details ",(0,t.jsx)(s.a,{href:"docker#swappiness",children:"here"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"configure-the-dns-settings",children:"Configure the DNS Settings"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create a subdomain under your company's primary domain name."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:['For example, if your company is "Spacetech" with the domain ',(0,t.jsx)(s.code,{children:"spacetech.com"}),", you can create a subdomain like ",(0,t.jsx)(s.code,{children:"appcircle.spacetech.com"})," or ",(0,t.jsx)(s.code,{children:"appcircle-test.spacetech.com"})," to assign to the Appcircle server."]}),"\n",(0,t.jsxs)(s.p,{children:["It will be the ",(0,t.jsx)(s.strong,{children:"main domain"})," for the self-hosted Appcircle server."]}),"\n",(0,t.jsxs)(s.p,{children:["The main domain (",(0,t.jsx)(s.code,{children:"appcircle.spacetech.com"}),", for instance.) should have seven subdomains which should resolve to the IP address of the Appcircle server."]}),"\n",(0,t.jsxs)(s.p,{children:["These subdomains are ",(0,t.jsx)(s.strong,{children:"api"}),", ",(0,t.jsx)(s.strong,{children:"auth"}),", ",(0,t.jsx)(s.strong,{children:"dist"}),", ",(0,t.jsx)(s.strong,{children:"hook"}),", ",(0,t.jsx)(s.strong,{children:"my"}),", ",(0,t.jsx)(s.strong,{children:"resource"})," and ",(0,t.jsx)(s.strong,{children:"store"}),"."]}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create these seven domain name entries on your DNS."]}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.code,{children:"api.appcircle.spacetech.com"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.code,{children:"auth.appcircle.spacetech.com"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.code,{children:"dist.appcircle.spacetech.com"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.code,{children:"hook.appcircle.spacetech.com"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.code,{children:"my.appcircle.spacetech.com"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.code,{children:"resource.appcircle.spacetech.com"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.code,{children:"store.appcircle.spacetech.com"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.code,{children:"monitor.appcircle.spacetech.com"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","All of these domain names should resolve to the same server IP address, which is the Appcircle server."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["You can see details in the ",(0,t.jsx)(s.a,{href:"/self-hosted-appcircle/install-server/docker#4-dns-settings",children:"DNS Settings"})," section."]}),"\n",(0,t.jsx)(s.h3,{id:"obtain-an-ssl-certificate",children:"Obtain an SSL Certificate"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","You should create only one SSL certificate that covers all seven domain names which you have seen in the ",(0,t.jsx)(s.a,{href:"#configure-the-dns-settings",children:"Configure DNS"})," section above."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The SSL certificate should be in PEM format."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The SSL certificate private key must not have a passphrase."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Obtain the root CA certificate of your company."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Obtain the intermediate CA certificate of your company if it exists."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"obtain-the-smtp-settings",children:"Obtain the SMTP Settings"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Obtain the IP address or host name of the SMTP server."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Obtain the port number of the SMTP server."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Determine if the SMTP server is using ",(0,t.jsx)(s.code,{children:"SSL"}),"."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Determine if the SMTP server is using ",(0,t.jsx)(s.code,{children:"STARTTLS"}),".","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u26a0\ufe0f"," ",(0,t.jsx)(s.code,{children:"SSL"})," and ",(0,t.jsx)(s.code,{children:"STARTTLS"})," are ",(0,t.jsx)(s.strong,{children:"not"})," the same thing."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["If the SMTP server requires authentication:","\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create a user for Appcircle on the SMTP server."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Obtain the password of the Appcircle user on the SMTP server."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Contact the system admin to get required permissions to send email with the Appcircle user via the SMTP server."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create a firewall rule (or permission) from the Appcircle server to the SMTP server."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"configure-the-git-server",children:"Configure the Git Server"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Import Appcircle Android and/or iOS sample repositories on your local git server.","\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.a,{href:"https://github.com/appcircleio/appcircle-sample-android",children:"Android Sample Repo"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(s.a,{href:"https://github.com/appcircleio/appcircle-sample-ios",children:"iOS Sample Repo"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create an Appcircle user on the git server (GitLab, Azure DevOps, Bitbucket)."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Give the required permissions to the Appcircle user to clone and edit the repositories."]}),"\n",(0,t.jsxs)(s.li,{children:["If you are using GitLab, Azure DevOps, Bitbucket:","\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create an Appcircle user. Give it permissions for the repositories."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create a personal access token that has sufficient permissions.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For details like token permissions, check the ",(0,t.jsx)(s.a,{href:"/build/manage-the-connections/adding-a-build-profile#connect-your-repository",children:"connect your repository"})," section."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["If you are using any other git server:","\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create a public-private SSH key pair."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Configure your Appcircle git user's public SSH keys and upload the public SSH key you created.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For details, you can check the ",(0,t.jsx)(s.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh",children:"connect via SSH"})," section."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create a firewall rule (or permission) between the Appcircle server and the git server in both directions."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"network-access-for-installation",children:"Network Access for Installation"}),"\n",(0,t.jsxs)(s.p,{children:["According to the selected Linux distribution and installation method, you need to configure firewall rules (or permissions) for the Appcircle server. All required domains that are used for installation are detailed in the ",(0,t.jsx)(s.a,{href:"/self-hosted-appcircle/configure-server/integrations-and-access/network-access",children:"network access"})," section."]}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Review the ",(0,t.jsx)(s.a,{href:"/self-hosted-appcircle/configure-server/integrations-and-access/network-access#appcircle-server-install-and-update",children:"network access"})," section and be sure that the listed domains are reachable from the Appcircle server."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"runner-checklist",children:"Runner Checklist"}),"\n",(0,t.jsx)(s.h3,{id:"network-access-for-installation-1",children:"Network Access for Installation"}),"\n",(0,t.jsx)(s.p,{children:"The Appcircle runner should be able to access the Appcircle server."}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create a firewall rule (or permission) from the Appcircle runner to the Appcircle server."]}),"\n"]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.p,{children:["Port depends on the configured ",(0,t.jsx)(s.code,{children:"external.scheme"}),' ("http" or "https") in the ',(0,t.jsx)(s.code,{children:"global.yaml"}),"."]}),(0,t.jsxs)(s.p,{children:["It's ",(0,t.jsx)(s.code,{children:"443"})," by default."]})]}),"\n",(0,t.jsx)(s.p,{children:"The Appcircle runner should be able to access to the git provider"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Create a firewall rule (or permission) from the Appcircle runner to the git server."]}),"\n"]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"Port depends on the selected connection method. Default values can be:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["HTTP(s): ",(0,t.jsx)(s.code,{children:"80"})," or ",(0,t.jsx)(s.code,{children:"443"})]}),"\n",(0,t.jsxs)(s.li,{children:["SSH: ",(0,t.jsx)(s.code,{children:"22"})]}),"\n"]}),(0,t.jsx)(s.p,{children:"If your git server has a custom port for git servcies, then you should use that port."})]}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Review the ",(0,t.jsx)(s.a,{href:"/self-hosted-appcircle/configure-server/integrations-and-access/network-access#appcircle-runner-install-as-ready-to-use-macos-virtual-machine",children:"network access"})," section and be sure that the listed domains are reachable from the Appcircle runner."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>a});var t=i(96540);const n={},c=t.createContext(n);function l(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);