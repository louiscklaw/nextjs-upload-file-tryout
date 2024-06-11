"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[79509],{86651:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=i(74848),s=i(28453);const t={title:"Install the Self-Hosted Appcircle Server",description:"Overview of the steps required to install the self-hosted Appcircle on your infrastructure.",tags:["self-hosted","server","installation"],sidebar_position:1},l=void 0,o={id:"self-hosted-appcircle/install-server/index",title:"Install the Self-Hosted Appcircle Server",description:"Overview of the steps required to install the self-hosted Appcircle on your infrastructure.",source:"@site/docs/self-hosted-appcircle/install-server/index.md",sourceDirName:"self-hosted-appcircle/install-server",slug:"/self-hosted-appcircle/install-server/",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/install-server/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/install-server/index.md",tags:[{label:"self-hosted",permalink:"/nextjs-upload-file-tryout/tags/self-hosted"},{label:"server",permalink:"/nextjs-upload-file-tryout/tags/server"},{label:"installation",permalink:"/nextjs-upload-file-tryout/tags/installation"}],version:"current",sidebarPosition:1,frontMatter:{title:"Install the Self-Hosted Appcircle Server",description:"Overview of the steps required to install the self-hosted Appcircle on your infrastructure.",tags:["self-hosted","server","installation"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Overview & Concepts",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/"},next:{title:"Pre-Installation Checklist",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/install-server/pre-installation-checklist"}},a={},c=[{value:"Server Installation",id:"server-installation",level:2},{value:"Supported Linux Distributions",id:"supported-linux-distributions",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Dependencies for Download",id:"dependencies-for-download",level:3},{value:"Download and Extract the Package",id:"download-and-extract-the-package",level:3},{value:"Install Server Dependencies",id:"install-server-dependencies",level:3},{value:"Configure Podman Specific Settings",id:"configure-podman-specific-settings",level:4},{value:"Configure Server Settings",id:"configure-server-settings",level:3},{value:"HTTP and HTTPS Settings",id:"http-and-https-settings",level:4},{value:"Domain Settings of the Modules",id:"domain-settings-of-the-modules",level:4},{value:"SMTP Settings for Email Notifications",id:"smtp-settings-for-email-notifications",level:4},{value:"Initial Username and Password",id:"initial-username-and-password",level:4},{value:"DNS Settings for Subdomains",id:"dns-settings-for-subdomains",level:3},{value:"Pull the Container Images",id:"pull-the-container-images",level:3},{value:"Run the Appcircle Server",id:"run-the-appcircle-server",level:3},{value:"Runner Installation",id:"runner-installation",level:2},{value:"Connect Runner to the Server",id:"connect-runner-to-the-server",level:3},{value:"Build a Sample App",id:"build-a-sample-app",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This document provides an overview of the steps required to install the self-hosted Appcircle on your infrastructure. It's a summary of the overall journey and gives you an idea of the big picture."}),"\n",(0,r.jsx)(n.p,{children:"For detailed instructions, please refer to the corresponding pages mentioned below."}),"\n",(0,r.jsx)(n.h2,{id:"server-installation",children:"Server Installation"}),"\n",(0,r.jsx)(n.h3,{id:"supported-linux-distributions",children:"Supported Linux Distributions"}),"\n",(0,r.jsx)(n.p,{children:"Before proceeding with the installation, it is essential to verify the compatibility of the targeted operating system version."}),"\n",(0,r.jsxs)(n.p,{children:["If you're planning to use ",(0,r.jsx)(n.strong,{children:"Docker"})," as the container runtime engine, you should check for compatible OS versions ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#supported-linux-distributions",children:"here."})]}),"\n",(0,r.jsxs)(n.p,{children:["If you're planning to use ",(0,r.jsx)(n.strong,{children:"Podman"})," as the container runtime engine, you should check for compatible OS versions ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#supported-linux-distributions",children:"here."})]}),"\n",(0,r.jsx)(n.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,r.jsx)(n.p,{children:"Check CPU, memory, swap, and disk space requirements."}),"\n",(0,r.jsxs)(n.p,{children:["You can check the hardware requirements ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#hardware-requirements",children:"here."})]}),"\n",(0,r.jsx)(n.h3,{id:"dependencies-for-download",children:"Dependencies for Download"}),"\n",(0,r.jsx)(n.p,{children:"To download and extract the application installation zip package, you need to install the necessary dependencies."}),"\n",(0,r.jsxs)(n.p,{children:["You can see the dependencies ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#1-download",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"download-and-extract-the-package",children:"Download and Extract the Package"}),"\n",(0,r.jsx)(n.p,{children:"Obtain the application's zip file and extract its contents."}),"\n",(0,r.jsxs)(n.p,{children:["You should follow the download and extract processes ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#1-download",children:"here."})]}),"\n",(0,r.jsx)(n.h3,{id:"install-server-dependencies",children:"Install Server Dependencies"}),"\n",(0,r.jsx)(n.p,{children:"Install additional dependencies and packages required by the self-hosted Appcircle server."}),"\n",(0,r.jsxs)(n.p,{children:["If you're planning to use ",(0,r.jsx)(n.strong,{children:"Docker"})," as the container runtime engine, you can check application dependencies and how to install them ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#2-packages",children:"here."})]}),"\n",(0,r.jsxs)(n.p,{children:["If you're planning to use ",(0,r.jsx)(n.strong,{children:"Podman"})," as the container runtime engine, you can check application dependencies and how to install them ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/podman#2-packages",children:"here."})]}),"\n",(0,r.jsx)(n.h4,{id:"configure-podman-specific-settings",children:"Configure Podman Specific Settings"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"You should skip this step if you are installing the application with Docker."})}),"\n",(0,r.jsx)(n.p,{children:"If you are installing the server with Podman, you must configure Podman's network settings. And also need to install an additional application to use podman rootless."}),"\n",(0,r.jsxs)(n.p,{children:["You can check the port forwarding settings ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/podman#podman-requirements",children:"here."})]}),"\n",(0,r.jsxs)(n.p,{children:["You can check the Podman network stack settings ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/podman#podman-network-stack",children:"here."})]}),"\n",(0,r.jsx)(n.h3,{id:"configure-server-settings",children:"Configure Server Settings"}),"\n",(0,r.jsxs)(n.p,{children:["You need to edit the default ",(0,r.jsx)(n.code,{children:"global.yaml"})," file for your requirements and infrastructure."]}),"\n",(0,r.jsxs)(n.p,{children:["You can see the detailed configuration steps ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#3-configure",children:"here."})]}),"\n",(0,r.jsx)(n.h4,{id:"http-and-https-settings",children:"HTTP and HTTPS Settings"}),"\n",(0,r.jsxs)(n.p,{children:["You can utilize the Appcircle server in either HTTP or HTTPS mode, which can be configured in the ",(0,r.jsx)(n.code,{children:"global.yaml"})," settings file."]}),"\n",(0,r.jsxs)(n.p,{children:["After following the general configuration steps above, see the SSL configuration details ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/configure-server/integrations-and-access/ssl-configuration",children:"here."})]}),"\n",(0,r.jsx)(n.h4,{id:"domain-settings-of-the-modules",children:"Domain Settings of the Modules"}),"\n",(0,r.jsx)(n.p,{children:"You need to set a main domain for the Appcircle server. Also, you should decide the domain configurations for the Enterprise App Store and Testing Distribution modules."}),"\n",(0,r.jsx)(n.h4,{id:"smtp-settings-for-email-notifications",children:"SMTP Settings for Email Notifications"}),"\n",(0,r.jsxs)(n.p,{children:["To utilize email services such as registration or testing distribution notifications, it is necessary to define SMTP settings in the ",(0,r.jsx)(n.code,{children:"global.yaml"})," configuration file."]}),"\n",(0,r.jsx)(n.h4,{id:"initial-username-and-password",children:"Initial Username and Password"}),"\n",(0,r.jsxs)(n.p,{children:["The initial user will be the owner or administrator of the organization on the Appcircle server. So, you should configure it in ",(0,r.jsx)(n.code,{children:"global.yaml"})," properly."]}),"\n",(0,r.jsx)(n.h3,{id:"dns-settings-for-subdomains",children:"DNS Settings for Subdomains"}),"\n",(0,r.jsx)(n.p,{children:"The Appcircle server has some subdomains for different services. They should be configured according to the network infrastructure."}),"\n",(0,r.jsxs)(n.p,{children:["You can see the DNS configuration details ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#4-dns-settings",children:"here."})]}),"\n",(0,r.jsx)(n.h3,{id:"pull-the-container-images",children:"Pull the Container Images"}),"\n",(0,r.jsx)(n.p,{children:"The Appcircle server is a containerized application composed of microservices."}),"\n",(0,r.jsx)(n.p,{children:"Prior to running the server, it is necessary to pull the images from the Appcircle image repository. You don't need to perform an additional step to pull container images, as the Appcircle install script will automatically handle the image retrieval process."}),"\n",(0,r.jsxs)(n.p,{children:["If you're planning to use a proxy repository to access the origin repository, it should be defined in the ",(0,r.jsx)(n.code,{children:"global.yaml"})," configuration file."]}),"\n",(0,r.jsxs)(n.p,{children:["You can check the required steps on how to define a custom image registry ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/configure-server/external-image-registry",children:"here."})]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["You need ",(0,r.jsx)(n.code,{children:"cred.json"})," file to pull the container images. Only the enterprise customers who have self-hosted Appcircle license can have ",(0,r.jsx)(n.code,{children:"cred.json"}),"."]}),(0,r.jsxs)(n.p,{children:["For details about the ",(0,r.jsx)(n.code,{children:"cred.json"}),", see ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#artifact-registry-credentials-credjson",children:"here."})]})]}),"\n",(0,r.jsx)(n.h3,{id:"run-the-appcircle-server",children:"Run the Appcircle Server"}),"\n",(0,r.jsx)(n.p,{children:"At the end, you are ready to start the Appcircle server. \ud83c\udf89"}),"\n",(0,r.jsxs)(n.p,{children:["Start the server and verify its ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#5-run-server",children:"health."})]}),"\n",(0,r.jsx)(n.h2,{id:"runner-installation",children:"Runner Installation"}),"\n",(0,r.jsx)(n.p,{children:"To build and distribute mobile applications, you need self-hosted Appcircle runners that are connected to the server."}),"\n",(0,r.jsxs)(n.p,{children:["You can check out how to install a self-hosted runner ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/self-hosted-runner/installation",children:"here."})]}),"\n",(0,r.jsx)(n.h3,{id:"connect-runner-to-the-server",children:"Connect Runner to the Server"}),"\n",(0,r.jsx)(n.p,{children:"You need to connect your self-hosted runner to the server. So the server can share builds and distribute jobs with the runner."}),"\n",(0,r.jsxs)(n.p,{children:["You can check how to connect runner to server ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/self-hosted-runner/installation#2-register",children:"here."})]}),"\n",(0,r.jsx)(n.h2,{id:"build-a-sample-app",children:"Build a Sample App"}),"\n",(0,r.jsx)(n.p,{children:"To test overall functionality and system stabilization, you can build example mobile applications."}),"\n",(0,r.jsx)(n.p,{children:"If you don't have one, you can use the sample repositories of Appcircle mobile applications."}),"\n",(0,r.jsx)(n.p,{children:'To build sample applications, create a build profile. After that, you can click Quick start using the sample repository"\xa0button to import sample Appcircle repositories.'}),"\n",(0,r.jsx)(n.p,{children:"If you're on a restricted network and cannot reach Appcircle's GitHub repository, you can import the sample apps to your git provider on your private network and use them from there."}),"\n",(0,r.jsx)(n.p,{children:"Below is a list of sample apps that you can use for demoing or testing:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appcircleio/appcircle-sample-ios",children:"iOS sample app"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appcircleio/appcircle-sample-android",children:"Android sample app"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appcircleio/appcircle-sample-flutter",children:"Flutter sample app"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/appcircleio/appcircle-sample-react-native",children:"React Native sample app"})}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"Please note that this overview serves as a high-level roadmap, and detailed instructions for each step can be found in the associated pages."}),(0,r.jsx)(n.p,{children:"For more detailed instructions to install the server, please refer to installation page."}),(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker",children:"here"})," to see Appcircle server installation on ",(0,r.jsx)(n.strong,{children:"Docker"}),"."]}),(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/podman",children:"here"})," to see Appcircle server installation on ",(0,r.jsx)(n.strong,{children:"Podman"}),"."]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(96540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);