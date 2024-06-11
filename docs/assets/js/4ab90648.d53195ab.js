"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[96095],{74597:(e,i,n)=>{n.d(i,{Ay:()=>o,RM:()=>t});var c=n(74848),r=n(28453);const t=[{value:"Need help?",id:"need-help",level:3}];function s(e){const i={a:"a",h3:"h3",p:"p",...(0,r.R)(),...e.components},{ExternalUrlRef:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.h3,{id:"need-help",children:"Need help?"}),"\n",(0,c.jsx)(i.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,c.jsx)(n,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function o(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(s,{...e})}):s(e)}},90814:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var c=n(74848),r=n(28453),t=n(74597);const s={title:"Command-Line Interface (CLI) Configuration",description:"Configure the Appcircle CLI to use your self-hosted Appcircle server",tags:["self-hosted","advanced configuration","appcircle cli","cli","command-line interface"],sidebar_position:12},o=void 0,a={id:"self-hosted-appcircle/configure-server/advanced-configuration/appcircle-cli",title:"Command-Line Interface (CLI) Configuration",description:"Configure the Appcircle CLI to use your self-hosted Appcircle server",source:"@site/docs/self-hosted-appcircle/configure-server/advanced-configuration/appcircle-cli.md",sourceDirName:"self-hosted-appcircle/configure-server/advanced-configuration",slug:"/self-hosted-appcircle/configure-server/advanced-configuration/appcircle-cli",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/advanced-configuration/appcircle-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/advanced-configuration/appcircle-cli.md",tags:[{label:"self-hosted",permalink:"/nextjs-upload-file-tryout/tags/self-hosted"},{label:"advanced configuration",permalink:"/nextjs-upload-file-tryout/tags/advanced-configuration"},{label:"appcircle cli",permalink:"/nextjs-upload-file-tryout/tags/appcircle-cli"},{label:"cli",permalink:"/nextjs-upload-file-tryout/tags/cli"},{label:"command-line interface",permalink:"/nextjs-upload-file-tryout/tags/command-line-interface"}],version:"current",sidebarPosition:12,frontMatter:{title:"Command-Line Interface (CLI) Configuration",description:"Configure the Appcircle CLI to use your self-hosted Appcircle server",tags:["self-hosted","advanced configuration","appcircle cli","cli","command-line interface"],sidebar_position:12},sidebar:"mySidebar",previous:{title:"Cache Size Configuration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/advanced-configuration/cache-size-configuration"},next:{title:"Restarting Host",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/restarting-host"}},l={},d=[{value:"Pre-Requirements",id:"pre-requirements",level:2},{value:"1. Create a Personal API Token",id:"1-create-a-personal-api-token",level:3},{value:"2. Find out the Appcircle server URLs",id:"2-find-out-the-appcircle-server-urls",level:3},{value:"Change the subdomain with <code>api</code> and <code>auth</code> for the default configuration",id:"change-the-subdomain-with-api-and-auth-for-the-default-configuration",level:4},{value:"Get the subdomains from the Appcircle server for any type of configuration",id:"get-the-subdomains-from-the-appcircle-server-for-any-type-of-configuration",level:4},{value:"Configure CLI to Use Your Self-Hosted Server",id:"configure-cli-to-use-your-self-hosted-server",level:2},{value:"Self-Signed Certificates",id:"self-signed-certificates",level:2},{value:"Trusting the SSL Certificate (recommended)",id:"trusting-the-ssl-certificate-recommended",level:3},{value:"Disabling the SSL Certificate Verification (not-recommended)",id:"disabling-the-ssl-certificate-verification-not-recommended",level:3},...t.RM];function h(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.p,{children:"Appcircle CLI is a command-line interface designed to use Appcircle from the terminals. The Appcircle CLI tool, which is executed directly from the terminal, provides users with a streamlined command-driven experience for efficient management of Appcircle."}),"\n",(0,c.jsx)(i.p,{children:"The Appcircle CLI is user-friendly and versatile, offering a range of commands to enhance backend control. You can start builds, download build artifacts, publish applications on the Enterprise App Store, and do more."}),"\n",(0,c.jsx)(i.p,{children:"Additionally, its scriptable nature allows for easy automation through shell scripts, enabling users to automate tasks and integrate the CLI into existing workflows effortlessly."}),"\n",(0,c.jsxs)(i.p,{children:["For detailed usage, you can head over to the ",(0,c.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-cli#appcircle-command-line-interface",children:"Appcircle CLI"})," documentation."]}),"\n",(0,c.jsx)(i.h2,{id:"pre-requirements",children:"Pre-Requirements"}),"\n",(0,c.jsxs)(i.p,{children:["To configure Appcircle CLI to use your self-hosted Appcircle, you need a ",(0,c.jsx)(i.strong,{children:"Personal API Token"})," for authentication. Also, you need the ",(0,c.jsx)(i.code,{children:"api"})," and the ",(0,c.jsx)(i.code,{children:"auth"})," URLs of the Appcircle server."]}),"\n",(0,c.jsx)(i.h3,{id:"1-create-a-personal-api-token",children:"1. Create a Personal API Token"}),"\n",(0,c.jsxs)(i.p,{children:["For the Appcircle CLI to authenticate to your self-hosted Appcircle, you need to create a ",(0,c.jsx)(i.strong,{children:"Personal API Token"})," and configure the Appcircle CLI to use it."]}),"\n",(0,c.jsxs)(i.p,{children:["You can follow the ",(0,c.jsx)(i.a,{href:"/appcircle-api/api-authentication#generatingmanaging-the-personal-api-tokens",children:"Generating and Managing Personal API Tokens"})," page to create one."]}),"\n",(0,c.jsx)(i.h3,{id:"2-find-out-the-appcircle-server-urls",children:"2. Find out the Appcircle server URLs"}),"\n",(0,c.jsx)(i.p,{children:"To find these URLs, you have two ways."}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsx)(i.li,{children:"Change the subdomain of an Appcircle URL and test if it is working."}),"\n",(0,c.jsx)(i.li,{children:"Get the URLs from the Appcircle server configuration."}),"\n"]}),"\n",(0,c.jsxs)(i.h4,{id:"change-the-subdomain-with-api-and-auth-for-the-default-configuration",children:["Change the subdomain with ",(0,c.jsx)(i.code,{children:"api"})," and ",(0,c.jsx)(i.code,{children:"auth"})," for the default configuration"]}),"\n",(0,c.jsxs)(i.p,{children:["To find out the ",(0,c.jsx)(i.code,{children:"api"})," and the ",(0,c.jsx)(i.code,{children:"auth"})," URL, you can check the URL that you are using to access the Appcircle web UI (dashboard) and then change its subdomain according to the format."]}),"\n",(0,c.jsxs)(i.p,{children:["For example, if you are using ",(0,c.jsx)(i.code,{children:"https://my.appcircle.spacetech.com"})," to access the Appcircle web UI,"]}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["Change ",(0,c.jsx)(i.code,{children:"my"})," to ",(0,c.jsx)(i.code,{children:"api"})," for the ",(0,c.jsx)(i.strong,{children:"API_HOSTNAME"}),".","\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["It should be ",(0,c.jsx)(i.code,{children:"https://api.appcircle.spacetech.com"}),"."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["Change ",(0,c.jsx)(i.code,{children:"my"})," to ",(0,c.jsx)(i.code,{children:"auth"})," for the ",(0,c.jsx)(i.strong,{children:"AUTH_HOSTNAME"}),".","\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["It should be ",(0,c.jsx)(i.code,{children:"https://auth.appcircle.spacetech.com"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(i.p,{children:["You can test the ",(0,c.jsx)(i.strong,{children:"API"})," URL access by running the command below."]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"curl -v https://api.appcircle.spacetech.com\n"})}),"\n",(0,c.jsx)(i.p,{children:"If you are facing a connectivity error, there are two possible problems:"}),"\n",(0,c.jsxs)(i.ol,{children:["\n",(0,c.jsxs)(i.li,{children:["There is no network access between the computer that runs the ",(0,c.jsx)(i.code,{children:"curl"})," command above and the Appcircle server."]}),"\n",(0,c.jsxs)(i.li,{children:["Or the ",(0,c.jsx)(i.strong,{children:"API"})," URL is not correct. In order to get the correct URL, you can follow the title below."]}),"\n"]}),"\n",(0,c.jsx)(i.h4,{id:"get-the-subdomains-from-the-appcircle-server-for-any-type-of-configuration",children:"Get the subdomains from the Appcircle server for any type of configuration"}),"\n",(0,c.jsxs)(i.p,{children:["To get the ",(0,c.jsx)(i.code,{children:"api"})," and the ",(0,c.jsx)(i.code,{children:"auth"})," URL, you should login to the Appcircle server and follow the steps below:"]}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsx)(i.li,{children:"Change the directory on the Appcircle server."}),"\n"]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["Update the environment variable ",(0,c.jsx)(i.code,{children:"PATH"})," with the required dependencies."]}),"\n"]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"export PATH=$PATH:$(pwd)/deps/bin\n"})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["Get the ",(0,c.jsx)(i.code,{children:"api"})," and ",(0,c.jsx)(i.code,{children:"auth"})," URL from the configuration file of your project."]}),"\n"]}),"\n",(0,c.jsxs)(i.admonition,{type:"info",children:[(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.code,{children:"spacetech"})," in the example below is an example project name."]}),(0,c.jsxs)(i.p,{children:["To find out your projects, list the content of the ",(0,c.jsx)(i.code,{children:"./projects"})," directory."]}),(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"ls -l ./projects\n"})})]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"yq '.apiGateway.external.url' ./projects/spacetech/export/.global.yaml && \\\nyq '.keycloak.external.url' ./projects/spacetech/export/.global.yaml\n"})}),"\n",(0,c.jsxs)(i.p,{children:["You can test the ",(0,c.jsx)(i.strong,{children:"API"})," URL access by running the command below."]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"curl -v https://api.appcircle.spacetech.com\n"})}),"\n",(0,c.jsxs)(i.p,{children:["If you are still getting a connectivity error, you should check the network access between the host that runs ",(0,c.jsx)(i.code,{children:"curl"})," and the Appcircle server."]}),"\n",(0,c.jsx)(i.h2,{id:"configure-cli-to-use-your-self-hosted-server",children:"Configure CLI to Use Your Self-Hosted Server"}),"\n",(0,c.jsx)(i.p,{children:"By default, Appcircle CLI is configured to interact with the Appcircle cloud. But with a few commands, you can change this behavior and use your own self-hosted Appcircle server with the CLI."}),"\n",(0,c.jsxs)(i.admonition,{type:"info",children:[(0,c.jsx)(i.p,{children:"We are assuming that you have already installed the Appcircle CLI and that it is ready to use."}),(0,c.jsxs)(i.p,{children:["Follow the installation instructions ",(0,c.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-cli?tab=readme-ov-file#installation",children:"here"})," to install Appcircle CLI if it's not ready to use."]}),(0,c.jsx)(i.p,{children:"To test, you can open a terminal and run the command below in your terminal."}),(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"appcircle --version\n"})}),(0,c.jsx)(i.p,{children:"If you see the Appcircle CLI version without any errors, you are ready to configure the tool."})]}),"\n",(0,c.jsx)(i.p,{children:"To configure the Appcircle CLI to use with the self-hosted Appcircle server follow the steps below."}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"1."})," Add a new configuration with any desired name."]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:'appcircle config add "${CONFIGURATION_NAME}"\n'})}),"\n",(0,c.jsx)(i.p,{children:"For example;"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:'appcircle config add "spacetech"\n'})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"2."})," Set the ",(0,c.jsx)(i.a,{href:"#2-find-out-the-appcircle-server-urls",children:"required URLs"})," to communicate with the self-hosted Appcircle server."]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"appcircle config set API_HOSTNAME 'https://api.appcircle.spacetech.com'\n"})}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"appcircle config set AUTH_HOSTNAME 'https://auth.appcircle.spacetech.com'\n"})}),"\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"3."})," Set the ",(0,c.jsx)(i.a,{href:"#1-create-a-personal-api-token",children:"Personal API Token"})," for authentication on the server."]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:'appcircle login --pat "${PERSONAL_API_TOKEN}"\n'})}),"\n",(0,c.jsx)(i.p,{children:"For example;"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:'appcircle login --pat "TTk0...RhNw=="\n'})}),"\n",(0,c.jsx)(i.admonition,{type:"caution",children:(0,c.jsxs)(i.p,{children:['If you face any self-signed certificate error, for example, "self-signed certificate in certificate chain", check the ',(0,c.jsx)(i.a,{href:"#trusting-the-ssl-certificate-recommended",children:"Trusting Certificate"})," section for troubleshooting."]})}),"\n",(0,c.jsx)(i.p,{children:"You can check the configuration with the command below."}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"appcircle config list\n"})}),"\n",(0,c.jsxs)(i.p,{children:["You should see the current (active) configuration, the path of the ",(0,c.jsx)(i.code,{children:"config.json"})," file, and server URLs per configuration."]}),"\n",(0,c.jsx)(i.p,{children:"You can also configure the Appcircle CLI in interactive mode."}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"appcircle -i\n"})}),"\n",(0,c.jsx)(i.p,{children:"You should use the relevant menu item and follow the instructions there that are similar to the steps above."}),"\n",(0,c.jsx)(i.p,{children:"When you successfully log in with the Appcircle CLI, you can list the build profiles with the command below."}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"appcircle listBuildProfiles\n"})}),"\n",(0,c.jsxs)(i.p,{children:["For detailed usage information about the Appcircle CLI, you can refer to the ",(0,c.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-cli#appcircle-command-line-interface",children:"Appcircle CLI"})," documentation."]}),"\n",(0,c.jsx)(i.h2,{id:"self-signed-certificates",children:"Self-Signed Certificates"}),"\n",(0,c.jsx)(i.p,{children:"If you are using a self-signed SSL certificate on the self-hosted Appcircle server and the certificate is not trusted on your host, you may face an error like below while trying to run the Appcircle CLI tool."}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:'$ appcircle login --pat "TTk0...RhNw=="\n\nself-signed certificate in certificate chain undefined\n'})}),"\n",(0,c.jsx)(i.p,{children:"That error occurs when the root CA certificate or the self-signed certificate of the Appcircle server is not trusted on your host."}),"\n",(0,c.jsx)(i.p,{children:"You can trust the SSL certificate of the Appcircle server to secure the network between the CLI and the server, or you can disable certificate verification."}),"\n",(0,c.jsxs)(i.admonition,{type:"danger",children:[(0,c.jsx)(i.p,{children:"Disabling certificate verification is risky and not recommended."}),(0,c.jsx)(i.p,{children:"For secure and reliable communication, you should trust the SSL certificate."})]}),"\n",(0,c.jsx)(i.h3,{id:"trusting-the-ssl-certificate-recommended",children:"Trusting the SSL Certificate (recommended)"}),"\n",(0,c.jsx)(i.p,{children:"You can trust the SSL certificate of the Appcircle server with the Appcircle CLI tool itself to make sure all the requests are secured and trusted."}),"\n",(0,c.jsxs)(i.p,{children:["You should already have ",(0,c.jsx)(i.a,{href:"#configure-cli-to-use-your-self-hosted-server",children:"configured"})," the Appcircle CLI tool for the self-hosted Appcircle server."]}),"\n",(0,c.jsxs)(i.admonition,{type:"info",children:[(0,c.jsxs)(i.p,{children:["This command is supported on ",(0,c.jsx)(i.strong,{children:"MacOS"})," and ",(0,c.jsx)(i.strong,{children:"Linux"})," operating systems only."]}),(0,c.jsxs)(i.p,{children:["If you are a ",(0,c.jsx)(i.strong,{children:"Windows"})," user, you can download the SSL certificate and make it trusted under the ",(0,c.jsx)(i.code,{children:"MMC"})," menu in Windows."]})]}),"\n",(0,c.jsxs)(i.admonition,{type:"caution",children:[(0,c.jsxs)(i.p,{children:["Trusting the SSL certificate is supported for Appcircle CLI version ",(0,c.jsx)(i.code,{children:"1.1.1"})," or later."]}),(0,c.jsxs)(i.p,{children:["For older versions, you should upgrade the Appcircle CLI, or although it's not recommended, you can ",(0,c.jsx)(i.a,{href:"#disabling-the-ssl-certificate-verification-not-recommended",children:"disable the SSL verification"}),"."]})]}),"\n",(0,c.jsxs)(i.p,{children:["To trust the SSL certificate of the configured Appcircle server, run the ",(0,c.jsx)(i.code,{children:"config trust"})," subcommand of the Appcircle CLI."]}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"appcircle config trust\n"})}),"\n",(0,c.jsx)(i.admonition,{type:"info",children:(0,c.jsxs)(i.p,{children:["The command may ask for the ",(0,c.jsx)(i.code,{children:"sudo"})," password for some system-wide operations. You should be sudoer."]})}),"\n",(0,c.jsx)(i.p,{children:"When the script successfully trusts the certificate, you will see an output like below."}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"[+] OS: Darwin\nAppcircle URL is valid: https://api.appcircle.spacetech.com\n[-] Allowing addition of root certificates\n[-] Getting root certificate of 'api.appcircle.spacetech.com'\nFound cert that has same subject and issuer\n [+] Certificate written to 'api.appcircle.spacetech.com.crt'\n [+] Subject: Crtforge ROOT CA, emailAddress=contact@spacetech.com\n [+] Expires on: Jan 31 10:12:39 2044 GMT\n[-] Adding 'api.appcircle.spacetech.com.crt' to Keychain\nPassword:\nYES (0)\nYES (0)\n[-] Adding Certs to Nodejs\nThe line already exists in /Users/spacetech/.zshrc\n[-] Verifying connection to 'api.appcircle.spacetech.com'\n [+] Verification successful!\nThe root cert has been trusted successfully.\nYou must open a new terminal session for the changes to take effect.\n"})}),"\n",(0,c.jsx)(i.p,{children:"Now you should open a new terminal for the changes to take effect."}),"\n",(0,c.jsxs)(i.p,{children:["In a new terminal session, you can run the ",(0,c.jsx)(i.code,{children:"appcircle"})," commands securely without any certificate problems."]}),"\n",(0,c.jsx)(i.h3,{id:"disabling-the-ssl-certificate-verification-not-recommended",children:"Disabling the SSL Certificate Verification (not-recommended)"}),"\n",(0,c.jsx)(i.p,{children:"Disabling SSL certificate verification removes a critical layer of security, leaving the communication vulnerable to a variety of threats, including those associated with man-in-the-middle attacks, data integrity issues, and trustworthiness concerns."}),"\n",(0,c.jsx)(i.p,{children:"Proper SSL certificate validation is essential for ensuring the authenticity and security of the communication between the Appcircle CLI and the Appcircle server."}),"\n",(0,c.jsx)(i.p,{children:"It's crucial to prioritize security measures to protect sensitive data and maintain the integrity of your system."}),"\n",(0,c.jsxs)(i.admonition,{type:"danger",children:[(0,c.jsx)(i.p,{children:"While we do not recommend it, you have the choice to accept the mentioned risk by selectively disabling certificate verification specifically for the Appcircle CLI."}),(0,c.jsxs)(i.p,{children:["It can be used when you have problems ",(0,c.jsx)(i.a,{href:"#trusting-the-ssl-certificate-recommended",children:"trusting the SSL certificates"}),"."]})]}),"\n",(0,c.jsxs)(i.p,{children:["To disable the SSL certificate verification just for the Appcircle CLI tool, you should add a prefix to the ",(0,c.jsx)(i.code,{children:"appcircle"})," command."]}),"\n",(0,c.jsx)(i.admonition,{type:"info",children:(0,c.jsx)(i.p,{children:"SSL and TLS are the same concepts for this document. So, TLS certificates are also known as SSL certificates."})}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:'alias appcircle="NODE_TLS_REJECT_UNAUTHORIZED=0 appcircle"\n'})}),"\n",(0,c.jsx)(i.p,{children:"After disabling SSL certificate verification, there will be a warning saying SSL verification is disabled."}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-bash",children:"$ appcircle listBuildProfiles\n\n(node:74065) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.\n(Use `node --trace-warnings ...` to show where the warning was created)\n...\n"})}),"\n",(0,c.jsx)(i.p,{children:"You can ignore it. All the subcommands will work as they should."}),"\n","\n",(0,c.jsx)(t.Ay,{})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>o});var c=n(96540);const r={},t=c.createContext(r);function s(e){const i=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),c.createElement(t.Provider,{value:i},e.children)}}}]);