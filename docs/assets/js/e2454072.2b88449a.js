"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[12836],{46909:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var s=r(74848),i=r(28453);const o={title:"Troubleshooting & FAQ for Appcircle Server and Runner",description:"Troubleshooting and FAQ for Appcircle server and runner",tags:["troubleshooting","faq","self-hosted"],sidebar_position:4,sidebar_label:"Troubleshooting & FAQ"},c="Overview",t={id:"self-hosted-appcircle/faq",title:"Troubleshooting & FAQ for Appcircle Server and Runner",description:"Troubleshooting and FAQ for Appcircle server and runner",source:"@site/docs/self-hosted-appcircle/faq.md",sourceDirName:"self-hosted-appcircle",slug:"/self-hosted-appcircle/faq",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/faq.md",tags:[{label:"troubleshooting",permalink:"/nextjs-upload-file-tryout/tags/troubleshooting"},{label:"faq",permalink:"/nextjs-upload-file-tryout/tags/faq"},{label:"self-hosted",permalink:"/nextjs-upload-file-tryout/tags/self-hosted"}],version:"current",sidebarPosition:4,frontMatter:{title:"Troubleshooting & FAQ for Appcircle Server and Runner",description:"Troubleshooting and FAQ for Appcircle server and runner",tags:["troubleshooting","faq","self-hosted"],sidebar_position:4,sidebar_label:"Troubleshooting & FAQ"},sidebar:"mySidebar",previous:{title:"Upgrading Server",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/update"},next:{title:"Marketplace Overview",permalink:"/nextjs-upload-file-tryout/marketplace/"}},a={},l=[{value:"Appcircle Server FAQ",id:"appcircle-server-faq",level:2},{value:"Can I change the password of the initial user?",id:"can-i-change-the-password-of-the-initial-user",level:3},{value:"Does Appcircle support LDAP login?",id:"does-appcircle-support-ldap-login",level:3},{value:"We can&#39;t send mail to outside domains.",id:"we-cant-send-mail-to-outside-domains",level:3},{value:"While installing the Appcircle server with Podman, <code>minio</code> containers can&#39;t get healthy status.",id:"while-installing-the-appcircle-server-with-podman-minio-containers-cant-get-healthy-status",level:3},{value:"We are facing &quot;manifest not found&quot; error when we run the <code>up</code> command.",id:"we-are-facing-manifest-not-found-error-when-we-run-the-up-command",level:3},{value:"Where should we download the zip package while we are updating?",id:"where-should-we-download-the-zip-package-while-we-are-updating",level:3},{value:"How do I change Docker or Podman&#39;s data location?",id:"how-do-i-change-docker-or-podmans-data-location",level:3},{value:"I&#39;m offline on the Appcircle dashboard on my browser.",id:"im-offline-on-the-appcircle-dashboard-on-my-browser",level:3},{value:"We are getting the &quot;potentially insufficient UIDs or GIDs&quot; error while using Podman.",id:"we-are-getting-the-potentially-insufficient-uids-or-gids-error-while-using-podman",level:3},{value:"We want to change the Enterprise App Store custom domain. What should we do?",id:"we-want-to-change-the-enterprise-app-store-custom-domain-what-should-we-do",level:3},{value:"How can we change the default sub-domains?",id:"how-can-we-change-the-default-sub-domains",level:3},{value:"While connecting to a repository from GitLab, we can list the projects, but binding is failing.",id:"while-connecting-to-a-repository-from-gitlab-we-can-list-the-projects-but-binding-is-failing",level:3},{value:"Appcircle Runner FAQ",id:"appcircle-runner-faq",level:2},{value:"We are facing a self-signed certificate error on builds.",id:"we-are-facing-a-self-signed-certificate-error-on-builds",level:3},{value:"We are facing an &quot;SSL certificate is not valid yet&quot; error on builds.",id:"we-are-facing-an-ssl-certificate-is-not-valid-yet-error-on-builds",level:3},{value:"We can&#39;t register Appcircle runner to the server.",id:"we-cant-register-appcircle-runner-to-the-server",level:3},{value:"We are facing &quot;LoginName too long&quot; error while running the <code>screen</code> command.",id:"we-are-facing-loginname-too-long-error-while-running-the-screen-command",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"This section is designed to help you quickly find answers to common questions and provide you with a better understanding of Appcircle server and runner."}),"\n",(0,s.jsx)(n.h2,{id:"appcircle-server-faq",children:"Appcircle Server FAQ"}),"\n",(0,s.jsx)(n.h3,{id:"can-i-change-the-password-of-the-initial-user",children:"Can I change the password of the initial user?"}),"\n",(0,s.jsxs)(n.p,{children:["For now, you shouldn't change the initial user password you defined in the ",(0,s.jsx)(n.code,{children:"global.yaml"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"does-appcircle-support-ldap-login",children:"Does Appcircle support LDAP login?"}),"\n",(0,s.jsx)(n.p,{children:"Appcircle supports LDAP login on the Testing Distribution and Enterprise App Store modules."}),"\n",(0,s.jsx)(n.p,{children:"Appcircle doesn't support LDAP login on the Appcircle dashboard, where you login to create build profiles and other developer-related jobs."}),"\n",(0,s.jsx)(n.h3,{id:"we-cant-send-mail-to-outside-domains",children:"We can't send mail to outside domains."}),"\n",(0,s.jsxs)(n.p,{children:["Let's say your company's domain is ",(0,s.jsx)(n.code,{children:"spacetech.com"}),". And you can send mail from Appcircle to ",(0,s.jsx)(n.code,{children:"user@spacetech.com"}),", but you can't send mail to ",(0,s.jsx)(n.code,{children:"user@gmail.com"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You should check the SMTP configuration and allow SMTP server to send mail to outside domains."}),"\n",(0,s.jsxs)(n.h3,{id:"while-installing-the-appcircle-server-with-podman-minio-containers-cant-get-healthy-status",children:["While installing the Appcircle server with Podman, ",(0,s.jsx)(n.code,{children:"minio"})," containers can't get healthy status."]}),"\n",(0,s.jsxs)(n.p,{children:["The podman network backend should be ",(0,s.jsx)(n.code,{children:"netavark"}),". You can check the current settings with the command below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"podman info | grep -i networkBackend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you need to use a proxy on the Appcircle server, you should configure proxy settings according to the ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/configure-server/integrations-and-access/proxy-configuration",children:"Proxy Configuration"})," document."]}),"\n",(0,s.jsxs)(n.h3,{id:"we-are-facing-manifest-not-found-error-when-we-run-the-up-command",children:['We are facing "manifest not found" error when we run the ',(0,s.jsx)(n.code,{children:"up"})," command."]}),"\n",(0,s.jsx)(n.p,{children:'If you are using the Nexus registry and are facing a "manifest not found" error, this is an expected case to occur. Nexus proxy has a known bug while pulling multiple container images. You should pull images one by one as a workaround.'}),"\n",(0,s.jsxs)(n.p,{children:["To pull images one by one, you can see the ",(0,s.jsx)(n.a,{href:"./configure-server/external-image-registry#pulling-images-one-by-one",children:"Pulling Image One By One"}),' document. Then you can pull images one by one with this script. So you won\'t face "manifest not found"\xa0error any more.']}),"\n",(0,s.jsx)(n.h3,{id:"where-should-we-download-the-zip-package-while-we-are-updating",children:"Where should we download the zip package while we are updating?"}),"\n",(0,s.jsx)(n.p,{children:"Download the zip package of the appcircle server and extract it to the same folder as the already existing Appcircle server folder. Your data and configuration will be saved while updating."}),"\n",(0,s.jsx)(n.h3,{id:"how-do-i-change-docker-or-podmans-data-location",children:"How do I change Docker or Podman's data location?"}),"\n",(0,s.jsxs)(n.p,{children:["For more details on changing the location of Docker data, refer to the ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#change-the-docker-data-location",children:"Change the Docker Data Location"})," page."]}),"\n",(0,s.jsxs)(n.p,{children:["For more details on changing the location of Podman data, refer to the ",(0,s.jsx)(n.a,{href:"./install-server/podman#change-the-podman-data-location",children:"Change the Podman Data Location"})," page."]}),"\n",(0,s.jsx)(n.h3,{id:"im-offline-on-the-appcircle-dashboard-on-my-browser",children:"I'm offline on the Appcircle dashboard on my browser."}),"\n",(0,s.jsx)(n.p,{children:"You should trust the Appcircle's or your organization's root CA certificate on your computer."}),"\n",(0,s.jsx)(n.h3,{id:"we-are-getting-the-potentially-insufficient-uids-or-gids-error-while-using-podman",children:'We are getting the "potentially insufficient UIDs or GIDs" error while using Podman.'}),"\n",(0,s.jsx)(n.p,{children:"You should check the user ID and group ID of your current account."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"id\n"})}),"\n",(0,s.jsx)(n.p,{children:"The user ID and group ID should be four-digit numbers. (For example, 1000, 1002, etc.)"}),"\n",(0,s.jsx)(n.p,{children:"If your user ID and group ID are very large, you may get this error. In this case, you should create a new user and group with regular IDs."}),"\n",(0,s.jsx)(n.h3,{id:"we-want-to-change-the-enterprise-app-store-custom-domain-what-should-we-do",children:"We want to change the Enterprise App Store custom domain. What should we do?"}),"\n",(0,s.jsxs)(n.p,{children:["You can change the custom domain settings of Enterprise App Store from the ",(0,s.jsx)(n.code,{children:"global.yaml"})," configuration file."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["We are assuming that you have installed the Appcircle server with version ",(0,s.jsx)(n.code,{children:"3.11.0"})," or later for this operation."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log in to the Appcircle server with SSH or a remote connection."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.code,{children:"appcircle-server"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"spacetech"})," in the example codes below are example project name."]}),(0,s.jsxs)(n.p,{children:["Please find your own project name and replace ",(0,s.jsx)(n.code,{children:"spacetech"})," with your project name."]}),(0,s.jsxs)(n.p,{children:["To see projects, you can check the ",(0,s.jsx)(n.code,{children:"projects"})," directory."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ls -l ./projects\n"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Shutdown Appcircle server. Keep in mind that, this will cause downtime."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Edit the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file of your project."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi ./projects/spacetech/global.yaml\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"storeWeb:\n  customDomain:\n    enabled: true\n    domain: store.spacetech.com\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Apply configuration changes."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Boot Appcircle server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"You should check the status of the Appcircle server after boot for any possible errors."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" check\n'})})]}),"\n",(0,s.jsx)(n.p,{children:"Now you can access the Enterprise App Store with the new store domain settings."}),"\n",(0,s.jsx)(n.h3,{id:"how-can-we-change-the-default-sub-domains",children:"How can we change the default sub-domains?"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["This operation needs ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docs.appcircle.io/self-hosted-appcircle/install-server/docker#reset-configuration",children:"reset"})}),' which deletes all your data like "Build Profiles", "Signing Identities", etc on the Appcircle server.']})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you only want to change the URL of the ",(0,s.jsx)(n.strong,{children:"Testing Distribution"})," or ",(0,s.jsx)(n.strong,{children:"Enterprise App Store"}),", you should follow the ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/configure-server/integrations-and-access/ssl-configuration#custom-domain",children:"custom domain"})," configuration document to assign a custom domain without resetting the Appcircle server."]})}),"\n",(0,s.jsx)(n.p,{children:"You can change the default subdomains as per your needs at the first installation time of the Appcircle server."}),"\n",(0,s.jsxs)(n.p,{children:["If you have already installed the Appcircle server and want to change the subdomains, you must ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docs.appcircle.io/self-hosted-appcircle/install-server/docker#reset-configuration",children:"reset"})})," the server before applying a new configuration."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, to change ",(0,s.jsx)(n.code,{children:"my.appcircle.spacetech.com"})," to ",(0,s.jsx)(n.code,{children:"my-appcircle.spacetech.com"})," along with other subdomains, you should follow the steps below:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to the ",(0,s.jsx)(n.code,{children:"appcircle-server"})," directory."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"spacetech"})," in the example codes below is an example project name."]}),(0,s.jsxs)(n.p,{children:["Please find your own project name and replace ",(0,s.jsx)(n.code,{children:"spacetech"})," with your project name."]}),(0,s.jsxs)(n.p,{children:["To see projects, you can check the ",(0,s.jsx)(n.code,{children:"projects"})," directory."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ls -l ./projects\n"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Edit the ",(0,s.jsx)(n.code,{children:"global.yaml"})," of your project for subdomain changes."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi ./projects/spacetech/global.yaml\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"keycloak:\n  external:\n    subdomain: auth-appcircle\nwebApp:\n  external:\n    subdomain: my-appcircle\napiGateway:\n  external:\n    subdomain: api-appcircle\ntesterWeb:\n  external:\n    subdomain: dist-appcircle\nwebEvent:\n  external:\n    subdomain: hook-appcircle\nminio:\n  external:\n    subdomain: resource-appcircle\nstoreWeb:\n  external:\n    subdomain: store-appcircle\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["If the keys already exist in the ",(0,s.jsx)(n.code,{children:"global.yaml"}),", you should just update or add the missing keys."]}),(0,s.jsxs)(n.p,{children:["For example, if you already have the ",(0,s.jsx)(n.code,{children:"keycloak"})," key in global.yaml, you must just add the ",(0,s.jsx)(n.code,{children:"keycloak.external.subdomain"})," section there."]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Edit the ",(0,s.jsx)(n.code,{children:"mainDomain"})," of your project in the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'external:\n  mainDomain: ".spacetech.com"\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["The subdomains will be concatenated to the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"mainDomain"})}),"."]}),(0,s.jsxs)(n.p,{children:["For this reason, ",(0,s.jsx)(n.code,{children:"external.mainDomain"})," in the configuration file must always begin with a ",(0,s.jsx)(n.code,{children:"."})," character as a prefix."]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"After you change the main domain and the subdomains, you can merge them yourself to see the up-to-date URLs for Appcircle modules."}),(0,s.jsx)(n.p,{children:"For example;"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["when ",(0,s.jsx)(n.code,{children:"mainDomain"})," is ",(0,s.jsx)(n.code,{children:".spacetech.com"})]}),"\n",(0,s.jsxs)(n.li,{children:["and ",(0,s.jsx)(n.code,{children:"webApp"})," ",(0,s.jsx)(n.code,{children:"subdomain"})," is ",(0,s.jsx)(n.code,{children:"my-appcircle"})]}),"\n"]}),(0,s.jsxs)(n.p,{children:["then the Appcircle dashboard URL will be ",(0,s.jsx)(n.code,{children:"my-appcircle.spacetech.com"}),"."]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsxs)(n.p,{children:["If you have configured the Appcircle server as HTTPS, as an extra step, it may be required to change the SSL certificates in the ",(0,s.jsx)(n.code,{children:"global.yaml"})," if they are not compatible with your new subdomains."]}),(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/configure-server/integrations-and-access/ssl-configuration",children:"SSL configuration"})})," document for details."]})]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"global.yaml"})," changes are ready to apply, follow the below steps:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stop the server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cleanup server data."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" reset\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"reset"})," step is optional. If you are installing for the first time, which means that you have never run the ",(0,s.jsx)(n.code,{children:"up"})," command and used the system, then you don't need to cleanup anything."]}),(0,s.jsxs)(n.p,{children:["For details, you can see the ",(0,s.jsx)(n.a,{href:"./install-server/docker/#reset-configuration",children:"reset configuration"})," section in the documentation."]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Apply the configuration changes."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start the server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check the health of the services."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" check\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You should see the message: ",(0,s.jsx)(n.em,{children:'"All services are running successfully."'})]}),"\n",(0,s.jsx)(n.h3,{id:"while-connecting-to-a-repository-from-gitlab-we-can-list-the-projects-but-binding-is-failing",children:"While connecting to a repository from GitLab, we can list the projects, but binding is failing."}),"\n",(0,s.jsxs)(n.p,{children:["The first thing you should check is ",(0,s.jsx)(n.strong,{children:"PAT"})," permissions."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are sure that ",(0,s.jsx)(n.strong,{children:"PAT"})," has the required permissions, you should check the ",(0,s.jsx)(n.strong,{children:"Outbound Requests"})," configuration of your GitLab server."]}),"\n",(0,s.jsxs)(n.p,{children:["For more details about configuring the outbound requests, you can refer to the ",(0,s.jsx)(n.a,{href:"/build/manage-the-connections/adding-a-build-profile/connecting-to-gitlab#outbound-requests",children:"Outbound Requests"})," section."]}),"\n",(0,s.jsx)(n.h2,{id:"appcircle-runner-faq",children:"Appcircle Runner FAQ"}),"\n",(0,s.jsx)(n.h3,{id:"we-are-facing-a-self-signed-certificate-error-on-builds",children:"We are facing a self-signed certificate error on builds."}),"\n",(0,s.jsx)(n.p,{children:"The certificate of your organization should be trusted on the Appcircle runner virtual machines."}),"\n",(0,s.jsxs)(n.p,{children:["You should refer to the ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/self-hosted-runner/configure-runner/custom-certificates",children:"Custom Certificates"})," page for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"we-are-facing-an-ssl-certificate-is-not-valid-yet-error-on-builds",children:'We are facing an "SSL certificate is not valid yet" error on builds.'}),"\n",(0,s.jsx)(n.p,{children:"The runner VMs cannot connect to the servers to update their date and time due to network restrictions."}),"\n",(0,s.jsxs)(n.p,{children:["You should configure NTP server settings in the runner VMs. For updating base runners, please refer to the ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/self-hosted-runner/runner-vm-setup#update-base-images",children:"Update Base Images"})," section."]}),"\n",(0,s.jsxs)(n.p,{children:["For details on configuring NTP settings, you can refer to the ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/self-hosted-runner/runner-vm-setup#2-configure-base-runners-ntp-settings",children:"NTP Configuration"})," section and follow the steps."]}),"\n",(0,s.jsx)(n.h3,{id:"we-cant-register-appcircle-runner-to-the-server",children:"We can't register Appcircle runner to the server."}),"\n",(0,s.jsx)(n.p,{children:"First, you should check if your Appcircle runner can access the Appcircle server. You can run the command below to test this. You should change the example Appcircle URL for yourself."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -v https://api.appcircle.spacetech.com\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You should check if there is a self-signed certificate problem. You can refer to the ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/self-hosted-runner/configure-runner/custom-certificates",children:"Custom Certificates"})," page to trust the root CA certificate of your organization."]}),"\n",(0,s.jsx)(n.p,{children:"If you already trusted the root CA cert, you should check the Appcircle server's certificate. If it is too long, like 5 years, it should be trusted using the graphical user interface. You should open the Keychain Access application from the GUI and add the Appcircle server's certificate. After that, you should click on the certificate and select \"Always trust\"."}),"\n",(0,s.jsxs)(n.h3,{id:"we-are-facing-loginname-too-long-error-while-running-the-screen-command",children:['We are facing "LoginName too long" error while running the ',(0,s.jsx)(n.code,{children:"screen"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"screen"})," command has a bug with long usernames which has been fixed in the new versions."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are facing this error while trying to run Appcircle runner VMs on a macOS host, you should update the ",(0,s.jsx)(n.code,{children:"screen"})," tool on the host machine with ",(0,s.jsx)(n.code,{children:"brew"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You should follow the steps below to update the ",(0,s.jsx)(n.code,{children:"screen"})," tool:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check the current version before updating."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"screen --version\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install the up-to-date version using Homebrew."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install screen\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open a new terminal session to use the new ",(0,s.jsx)(n.code,{children:"screen"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["If you don't open a new terminal session, you cannot use the up-to-date ",(0,s.jsx)(n.code,{children:"screen"})," since the current shell session has access to the older version."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Re-check the version to see if the update was done successfully."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"screen --version\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>t});var s=r(96540);const i={},o=s.createContext(i);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);