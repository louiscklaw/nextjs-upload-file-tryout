"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[47534],{38698:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var s=n(74848),l=n(28453),i=n(11470),c=n(19365);const t={title:"Network Access",description:"Learn how to configure and enable external network access for a self-hosted Appcircle server and runner",tags:["self-hosted","network access","server","runner"],sidebar_position:4},o="Overview",a={id:"self-hosted-appcircle/configure-server/integrations-and-access/network-access",title:"Network Access",description:"Learn how to configure and enable external network access for a self-hosted Appcircle server and runner",source:"@site/docs/self-hosted-appcircle/configure-server/integrations-and-access/network-access.md",sourceDirName:"self-hosted-appcircle/configure-server/integrations-and-access",slug:"/self-hosted-appcircle/configure-server/integrations-and-access/network-access",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/integrations-and-access/network-access",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/integrations-and-access/network-access.md",tags:[{label:"self-hosted",permalink:"/nextjs-upload-file-tryout/tags/self-hosted"},{label:"network access",permalink:"/nextjs-upload-file-tryout/tags/network-access"},{label:"server",permalink:"/nextjs-upload-file-tryout/tags/server"},{label:"runner",permalink:"/nextjs-upload-file-tryout/tags/runner"}],version:"current",sidebarPosition:4,frontMatter:{title:"Network Access",description:"Learn how to configure and enable external network access for a self-hosted Appcircle server and runner",tags:["self-hosted","network access","server","runner"],sidebar_position:4},sidebar:"mySidebar",previous:{title:"SSL Configuration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/integrations-and-access/ssl-configuration"},next:{title:"Login Configuration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/integrations-and-access/login-configuration"}},d={},h=[{value:"Appcircle Server Install and Update",id:"appcircle-server-install-and-update",level:2},{value:"<code>podman-compose</code> tool:",id:"podman-compose-tool",level:5},{value:"System tools:",id:"system-tools",level:5},{value:"Offline docker install script and docker <code>rpm</code> files:",id:"offline-docker-install-script-and-docker-rpm-files",level:5},{value:"System tools:",id:"system-tools-1",level:5},{value:"<code>docker</code> installation:",id:"docker-installation",level:5},{value:"System tools:",id:"system-tools-2",level:5},{value:"If you are an enterprise-licensed or PoC customer, Appcircle server <code>zip</code> package:",id:"if-you-are-an-enterprise-licensed-or-poc-customer-appcircle-server-zip-package",level:5},{value:"If you don&#39;t have a proxy registry like <code>Harbor</code> or <code>Nexus</code>, and want to use container images directly from Appcircle:",id:"if-you-dont-have-a-proxy-registry-like-harbor-or-nexus-and-want-to-use-container-images-directly-from-appcircle",level:5},{value:"If you want to install the Appcircle server using offline packages:",id:"if-you-want-to-install-the-appcircle-server-using-offline-packages",level:5},{value:"Appcircle Runner Install as Ready-to-Use MacOS Virtual Machine",id:"appcircle-runner-install-as-ready-to-use-macos-virtual-machine",level:2},{value:"Appcircle Server Runtime",id:"appcircle-server-runtime",level:2},{value:"Appcircle Runner Runtime",id:"appcircle-runner-runtime",level:2},{value:"Build",id:"build",level:3},{value:"Testing Distribution",id:"testing-distribution",level:3},{value:"Store Submit",id:"store-submit",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(r.p,{children:"This page provides guidance on configuring and enabling external network access for a self-hosted Appcircle server and runner."}),"\n",(0,s.jsx)(r.p,{children:"When deploying a self-hosted Appcircle server and runner, there are scenarios where the application needs to establish connections to external resources over the network. These connections are required to download operating system dependencies, pull Docker images from registries, or access external services such as mobile application build dependencies."}),"\n",(0,s.jsx)(r.p,{children:"Enabling external network access is essential to ensuring the smooth operation and functionality of self-hosted applications. By establishing connections to external resources, self-hosted applications can access the necessary components, data, and services that are vital for their execution."}),"\n",(0,s.jsx)(r.p,{children:"You can see different scenarios below according to how you want to install the Appcircle server and runner."}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"If you are hosting a yum or apt package repository locally on your network, you do not need to allow external domains for RHEL and Ubuntu repos."})}),"\n",(0,s.jsx)(r.h2,{id:"appcircle-server-install-and-update",children:"Appcircle Server Install and Update"}),"\n",(0,s.jsx)(r.p,{children:"Below you can find the network access details required when installing or upgrading a self-hosted Appcircle server."}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsxs)(c.A,{value:"rhel-podman",label:"RHEL with Podman",default:!0,children:[(0,s.jsx)(r.p,{children:"This section covers the external resource domains during the installation process of the Appcircle Server on the RHEL distribution using Podman."}),(0,s.jsxs)(r.h5,{id:"podman-compose-tool",children:[(0,s.jsx)(r.code,{children:"podman-compose"})," tool:"]}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"You must download the podman-compose tool from python pip repositories."}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"pypi.python.org/simple/podman-compose\npypi.org/simple/podman-compose/\npypi.python.org/simple/python-dotenv/\npypi.org/simple/python-dotenv/\npypi.python.org/pypi/pip/json\npypi.org/pypi/pip/json\nfiles.pythonhosted.org/packages/\n"})}),(0,s.jsx)(r.h5,{id:"system-tools",children:"System tools:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"The Appcircle server requires some tools to be installed."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["These tools are ",(0,s.jsx)(r.code,{children:"tar"}),", ",(0,s.jsx)(r.code,{children:"curl"}),", ",(0,s.jsx)(r.code,{children:"unzip"})," and ",(0,s.jsx)(r.code,{children:"Podman"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["If you are hosting a ",(0,s.jsx)(r.code,{children:"yum"})," repository locally on your network, you don't need these URLs."]}),"\n"]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"subscription.rhsm.redhat.com\ncdn.redhat.com\n"})})]}),(0,s.jsxs)(c.A,{value:"rhel-docker",label:"RHEL with Docker",children:[(0,s.jsx)(r.p,{children:"This section covers the external resource domains during the installation process of the Appcircle Server on the RHEL distribution using Docker."}),(0,s.jsxs)(r.h5,{id:"offline-docker-install-script-and-docker-rpm-files",children:["Offline docker install script and docker ",(0,s.jsx)(r.code,{children:"rpm"})," files:"]}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["If you want to install ",(0,s.jsx)(r.code,{children:"Docker"})," on your RHEL from Appcircle resources, then the Appcircle server host needs to access these URLs."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"storage.googleapis.com/appcircle-dev-common/self-hosted\n"})}),(0,s.jsx)(r.h5,{id:"system-tools-1",children:"System tools:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"The Appcircle server requires some tools to be installed."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["These tools are ",(0,s.jsx)(r.code,{children:"tar"}),", ",(0,s.jsx)(r.code,{children:"curl"})," and ",(0,s.jsx)(r.code,{children:"unzip"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["If you are hosting a ",(0,s.jsx)(r.code,{children:"yum"})," repository locally on your network, you don't need these URLs."]}),"\n"]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"subscription.rhsm.redhat.com\ncdn.redhat.com\n"})})]}),(0,s.jsxs)(c.A,{value:"ubuntu-docker",label:"Ubuntu with Docker",children:[(0,s.jsx)(r.p,{children:"This section covers the external resource domains during the installation process of the Appcircle Server on the Ubuntu distribution using Docker."}),(0,s.jsxs)(r.h5,{id:"docker-installation",children:[(0,s.jsx)(r.code,{children:"docker"})," installation:"]}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["If you want to install ",(0,s.jsx)(r.code,{children:"Docker"})," on your Ubuntu, then the Appcircle server host needs to access these URLs."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"download.docker.com\narchive.ubuntu.com\n"})}),(0,s.jsx)(r.h5,{id:"system-tools-2",children:"System tools:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"The Appcircle server requires some tools to be installed."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["These tools are ",(0,s.jsx)(r.code,{children:"tar"}),", ",(0,s.jsx)(r.code,{children:"curl"})," and ",(0,s.jsx)(r.code,{children:"unzip"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["If you are hosting an ",(0,s.jsx)(r.code,{children:"apt"})," repository locally on your network, you don't need these URLs."]}),"\n"]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"archive.ubuntu.com\n"})})]})]}),"\n",(0,s.jsxs)(r.h5,{id:"if-you-are-an-enterprise-licensed-or-poc-customer-appcircle-server-zip-package",children:["If you are an enterprise-licensed or PoC customer, Appcircle server ",(0,s.jsx)(r.code,{children:"zip"})," package:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["If you are an enterprise-licensed or PoC customer and want to install or update the Appcircle server, the Appcircle server host needs to access this URL to download the Appcircle server ",(0,s.jsx)(r.code,{children:"zip"})," package."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["If you want to download the ",(0,s.jsx)(r.code,{children:"zip"})," package and copy it manually (with ",(0,s.jsx)(r.code,{children:"scp"})," or ",(0,s.jsx)(r.code,{children:"ftp"}),"), then the Appcircle server host doesn't need this access."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"cdn.appcircle.io\nstorage.googleapis.com/storage/v1/b/appcircle-self-hosted\nwww.googleapis.com/oauth2/v4/token\n"})}),"\n",(0,s.jsxs)(r.h5,{id:"if-you-dont-have-a-proxy-registry-like-harbor-or-nexus-and-want-to-use-container-images-directly-from-appcircle",children:["If you don't have a proxy registry like ",(0,s.jsx)(r.code,{children:"Harbor"})," or ",(0,s.jsx)(r.code,{children:"Nexus"}),", and want to use container images directly from Appcircle:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"If you have your own proxy registry and want to mirror the Appcircle container images, then your Appcircle server doesn't need to access the origin container image registry directly."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"If you don't have an image registry, the Appcircle server needs to access this URL."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"europe-west1-docker.pkg.dev/appcircle/docker-registry\n"})}),"\n",(0,s.jsx)(r.h5,{id:"if-you-want-to-install-the-appcircle-server-using-offline-packages",children:"If you want to install the Appcircle server using offline packages:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["If you want to install the Appcircle server without an internet connection, a ",(0,s.jsx)(r.code,{children:"zip"})," package should be downloaded and transferred to the Appcircle server host."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["This ",(0,s.jsx)(r.code,{children:"zip"})," package can be downloaded from another host and transferred to the actual Appcircle server. If you plan to do that, the Appcircle server doesn't need to access these URLs."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"storage.googleapis.com/appcircle-self-hosted\nwww.googleapis.com/oauth2/v4/token\n"})}),"\n",(0,s.jsx)(r.h2,{id:"appcircle-runner-install-as-ready-to-use-macos-virtual-machine",children:"Appcircle Runner Install as Ready-to-Use MacOS Virtual Machine"}),"\n",(0,s.jsxs)(r.p,{children:["This section covers the external resource domains during the installation process of the Appcircle runner using an Appcircle-provided ",(0,s.jsx)(r.a,{href:"/self-hosted-appcircle/self-hosted-runner/installation#macos-vm",children:"virtual machine"}),"."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"homebrew"})," tool (required):"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"raw.githubusercontent.com\ngithub.com\napi.github.com\napi.apple-cloudkit.com\nformulae.brew.sh\nswcdn.apple.com\nxp.apple.com\npancake.apple.com\ngdmf.apple.com\nswdist.apple.com\nswscan.apple.com\nocsp2.apple.com\n"})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["Homebrew installs the latest version of Xcode Command Line Tools as a dependency. ",(0,s.jsx)(r.code,{children:"*.apple.com"})," domains are used for that purpose."]})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"tart"})," tool (required):"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:"Tart is a registered trademark of Cirrus Labs, Inc."})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"github.com\napi.github.com\nobjects.githubusercontent.com\napi.apple-cloudkit.com\ngoogle-analytics.com\neurope-west1-1.gcp.cloud2.influxdata.com\n"})}),"\n",(0,s.jsxs)(r.admonition,{type:"info",children:[(0,s.jsxs)(r.p,{children:["Homebrew gathers anonymous analytics using InfluxDB. The below domains are related to Homebrew analytics when installing a package via the ",(0,s.jsx)(r.code,{children:"brew"})," command."]}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"google-analytics.com"}),"\n",(0,s.jsx)(r.li,{children:"europe-west1-1.gcp.cloud2.influxdata.com"}),"\n"]}),(0,s.jsxs)(r.p,{children:["If you don't want to enable these URLs or you aren\u2019t comfortable with this, you can opt out of Homebrew analytics by following the instructions ",(0,s.jsx)(r.a,{href:"https://docs.brew.sh/Analytics#opting-out",children:"here"}),"."]})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"macOS VM image and the runner starter script (required):"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"storage.googleapis.com/appcircle-dev-common/self-hosted\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["macOS VM install script (",(0,s.jsx)(r.em,{children:"required if you prefer automatic installation"}),"):"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-access_list",children:"cdn.appcircle.io\nstorage.googleapis.com/storage/v1/b/appcircle-dev-common\n"})}),"\n",(0,s.jsx)(r.h2,{id:"appcircle-server-runtime",children:"Appcircle Server Runtime"}),"\n",(0,s.jsx)(r.p,{children:"Although Appcircle runners are responsible for the submission of iOS apps to the App Store, the server also has some features that need access to the App Store Connect API, like runners."}),"\n",(0,s.jsx)(r.p,{children:"For example, get devices from the App Store, get certificates or provisioning profiles, verify the uploaded certificates, etc."}),"\n",(0,s.jsx)(r.p,{children:"So, you should enable the below API access on the server for those features:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"api.appstoreconnect.apple.com"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"appcircle-runner-runtime",children:"Appcircle Runner Runtime"}),"\n",(0,s.jsx)(r.p,{children:"This section addresses the utilization of external resources during the build, publish, store submit, and other processes on the Appcircle runner."}),"\n",(0,s.jsx)(r.h3,{id:"build",children:"Build"}),"\n",(0,s.jsxs)(r.p,{children:["Appcircle\u2019s workflow components are hosted on GitHub and they're ",(0,s.jsx)(r.code,{children:"git"})," cloned while running the pipeline."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"github.com/appcircleio/"}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Some of the dependencies such as ",(0,s.jsx)(r.code,{children:"CocoaPods"})," and ",(0,s.jsx)(r.code,{children:"Fastlane"})," use Ruby Gems."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"rubygems.org"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"The Gradle wrapper needs access to the below URL to download Gradle."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"services.gradle.org"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Android Build Tools need access to the following URLs to download new build tools and NDKs:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"dl-ssl.google.com/android/repository"}),"\n",(0,s.jsx)(r.li,{children:"dl.google.com/android/repository"}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["All the maven repositories inside ",(0,s.jsx)(r.code,{children:"build.gradle"})," must be added to the allow-list."]}),"\n",(0,s.jsx)(r.p,{children:"For example;"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"maven.google.com"}),"\n",(0,s.jsx)(r.li,{children:"repo.maven.apache.org/maven2"}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["If you\u2019re using CocoaPods and if your ",(0,s.jsx)(r.code,{children:"Podfile"})," is using another spec repository, they also must be allowed."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"cdn.cocoapods.org"}),"\n",(0,s.jsx)(r.li,{children:"github.com/CocoaPods/Specs"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"testing-distribution",children:"Testing Distribution"}),"\n",(0,s.jsx)(r.p,{children:"Firebase:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"firebaseappdistribution.googleapis.com"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"App Center:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"api.appcenter.ms"}),"\n",(0,s.jsx)(r.li,{children:"file.appcenter.ms"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"store-submit",children:"Store Submit"}),"\n",(0,s.jsx)(r.p,{children:"Google Play"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"www.googleapis.com"})}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Huawei AppGallery"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"connect-api.cloud.huawei.com"}),"\n",(0,s.jsx)(r.li,{children:"developer.huawei.com"}),"\n",(0,s.jsx)(r.li,{children:"developerfile7.hicloud.com"}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsxs)(r.p,{children:["Please be aware that the subdomain above (",(0,s.jsx)(r.code,{children:"developerfile7"}),") may change in the future, and it is dynamically returned by the ",(0,s.jsx)(r.code,{children:"https://connect-api.cloud.huawei.com"})," endpoint."]})}),"\n",(0,s.jsx)(r.p,{children:"App Store"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"contentdelivery.itunes.apple.com"}),"\n",(0,s.jsx)(r.li,{children:"api.appstoreconnect.apple.com"}),"\n"]}),"\n",(0,s.jsxs)(r.admonition,{type:"caution",children:[(0,s.jsx)(r.p,{children:"The Apple App Store connects to several endpoints during upload."}),(0,s.jsxs)(r.p,{children:["Those endpoints are documented at ",(0,s.jsx)(r.a,{href:"https://help.apple.com/itc/transporteruserguide/en.lproj/static.html",children:"here"}),". The endpoints may change in the future."]})]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Server"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"IP Address"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"TCP Port"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"UDP Port"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr501.apple.com/",children:"vgr501.apple.com"})}),(0,s.jsx)(r.td,{children:"17.110.248.141"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr502.apple.com/",children:"vgr502.apple.com"})}),(0,s.jsx)(r.td,{children:"17.110.248.142"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr503.apple.com/",children:"vgr503.apple.com"})}),(0,s.jsx)(r.td,{children:"17.110.248.143"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr504.apple.com/",children:"vgr504.apple.com"})}),(0,s.jsx)(r.td,{children:"17.110.248.144"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr505.apple.com/",children:"vgr505.apple.com"})}),(0,s.jsx)(r.td,{children:"17.110.248.145"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr506.apple.com/",children:"vgr506.apple.com"})}),(0,s.jsx)(r.td,{children:"17.110.248.146"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr507.apple.com/",children:"vgr507.apple.com"})}),(0,s.jsx)(r.td,{children:"17.110.248.147"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr508.apple.com/",children:"vgr508.apple.com"})}),(0,s.jsx)(r.td,{children:"17.110.248.148"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr701.apple.com/",children:"vgr701.apple.com"})}),(0,s.jsx)(r.td,{children:"17.133.233.141"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr702.apple.com/",children:"vgr702.apple.com"})}),(0,s.jsx)(r.td,{children:"17.133.233.142"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr703.apple.com/",children:"vgr703.apple.com"})}),(0,s.jsx)(r.td,{children:"17.133.233.143"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr704.apple.com/",children:"vgr704.apple.com"})}),(0,s.jsx)(r.td,{children:"17.133.233.144"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr705.apple.com/",children:"vgr705.apple.com"})}),(0,s.jsx)(r.td,{children:"17.133.233.145"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr706.apple.com/",children:"vgr706.apple.com"})}),(0,s.jsx)(r.td,{children:"17.133.233.146"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr707.apple.com/",children:"vgr707.apple.com"})}),(0,s.jsx)(r.td,{children:"17.133.233.147"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr708.apple.com/",children:"vgr708.apple.com"})}),(0,s.jsx)(r.td,{children:"17.133.233.148"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr0901.apple.com/",children:"vgr0901.apple.com"})}),(0,s.jsx)(r.td,{children:"17.57.20.141"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr0902.apple.com/",children:"vgr0902.apple.com"})}),(0,s.jsx)(r.td,{children:"17.57.20.142"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr0903.apple.com/",children:"vgr0903.apple.com"})}),(0,s.jsx)(r.td,{children:"17.57.20.143"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr0904.apple.com/",children:"vgr0904.apple.com"})}),(0,s.jsx)(r.td,{children:"17.57.20.144"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr0905.apple.com/",children:"vgr0905.apple.com"})}),(0,s.jsx)(r.td,{children:"17.57.20.145"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr0906.apple.com/",children:"vgr0906.apple.com"})}),(0,s.jsx)(r.td,{children:"17.57.20.146"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr0907.apple.com/",children:"vgr0907.apple.com"})}),(0,s.jsx)(r.td,{children:"17.57.20.147"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://vgr0908.apple.com/",children:"vgr0908.apple.com"})}),(0,s.jsx)(r.td,{children:"17.57.20.148"}),(0,s.jsx)(r.td,{children:"33001"}),(0,s.jsx)(r.td,{children:"33001-33500"})]})]})]})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>c});n(96540);var s=n(18215);const l={tabItem:"tabItem_Ymn6"};var i=n(74848);function c(e){let{children:r,hidden:n,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(l.tabItem,c),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>w});var s=n(96540),l=n(18215),i=n(23104),c=n(56347),t=n(205),o=n(57485),a=n(31682),d=n(89466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:l}}=e;return{value:r,label:n,attributes:s,default:l}}))}(n);return function(e){const r=(0,a.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function u(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const l=(0,c.W6)(),i=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(l.location.search);r.set(i,e),l.replace({...l.location,search:r.toString()})}),[i,l])]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:l}=e,i=p(e),[c,o]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:i}))),[a,h]=x({queryString:n,groupId:l}),[j,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[l,i]=(0,d.Dv)(n);return[l,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:l}),g=(()=>{const e=a??j;return u({value:e,tabValues:i})?e:null})();(0,t.A)((()=>{g&&o(g)}),[g]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function v(e){let{className:r,block:n,selectedValue:s,selectValue:c,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),d=e=>{const r=e.currentTarget,n=o.indexOf(r),l=t[n].value;l!==s&&(a(r),c(l))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},r),children:t.map((e=>{let{value:r,label:n,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,l.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===r}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:l}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function b(e){const r=j(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...e,...r}),(0,f.jsx)(y,{...e,...r})]})}function w(e){const r=(0,m.A)();return(0,f.jsx)(b,{...e,children:h(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>t});var s=n(96540);const l={},i=s.createContext(l);function c(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);