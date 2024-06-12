"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[42765],{74597:(e,n,s)=>{s.d(n,{Ay:()=>o,RM:()=>t});var r=s(74848),i=s(28453);const t=[{value:"Need help?",id:"need-help",level:3}];function c(e){const n={a:"a",h3:"h3",p:"p",...(0,i.R)(),...e.components},{ExternalUrlRef:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"need-help",children:"Need help?"}),"\n",(0,r.jsx)(n.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,r.jsx)(s,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},37611:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=s(74848),i=s(28453),t=s(69678),c=s(74597);const o={title:"Amazon Web Services (AWS) Integration",description:"Learn how to create an Appcircle server instance on Amazon Web Services (AWS)",tags:["self-hosted","appcircle server","aws","amazon web services","EC2","AMI"],sidebar_position:1,sidebar_label:"Amazon Web Services (AWS)"},a=void 0,l={id:"self-hosted-appcircle/install-server/cloud-providers/aws",title:"Amazon Web Services (AWS) Integration",description:"Learn how to create an Appcircle server instance on Amazon Web Services (AWS)",source:"@site/docs/self-hosted-appcircle/install-server/cloud-providers/aws.md",sourceDirName:"self-hosted-appcircle/install-server/cloud-providers",slug:"/self-hosted-appcircle/install-server/cloud-providers/aws",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/install-server/cloud-providers/aws",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/install-server/cloud-providers/aws.md",tags:[{label:"self-hosted",permalink:"/nextjs-upload-file-tryout/tags/self-hosted"},{label:"appcircle server",permalink:"/nextjs-upload-file-tryout/tags/appcircle-server"},{label:"aws",permalink:"/nextjs-upload-file-tryout/tags/aws"},{label:"amazon web services",permalink:"/nextjs-upload-file-tryout/tags/amazon-web-services"},{label:"EC2",permalink:"/nextjs-upload-file-tryout/tags/ec-2"},{label:"AMI",permalink:"/nextjs-upload-file-tryout/tags/ami"}],version:"current",sidebarPosition:1,frontMatter:{title:"Amazon Web Services (AWS) Integration",description:"Learn how to create an Appcircle server instance on Amazon Web Services (AWS)",tags:["self-hosted","appcircle server","aws","amazon web services","EC2","AMI"],sidebar_position:1,sidebar_label:"Amazon Web Services (AWS)"},sidebar:"mySidebar",previous:{title:"Cloud Providers",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/install-server/cloud-providers/"},next:{title:"Overview of Self-hosted Runner",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/self-hosted-runner/"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Pre-requirements",id:"pre-requirements",level:2},{value:"Appcircle Requirements",id:"appcircle-requirements",level:3},{value:"Technical Requirements",id:"technical-requirements",level:3},{value:"AWS Account",id:"aws-account",level:4},{value:"Understanding of AWS Services",id:"understanding-of-aws-services",level:4},{value:"1. Networking and Security Configuration",id:"1-networking-and-security-configuration",level:5},{value:"2. SSH Key Pairs for Secure Access",id:"2-ssh-key-pairs-for-secure-access",level:5},{value:"3. Linux System Configuration",id:"3-linux-system-configuration",level:5},{value:"Creating an Appcircle Server from the AMI",id:"creating-an-appcircle-server-from-the-ami",level:2},{value:"Configuring the Appcircle Server Instance",id:"configuring-the-appcircle-server-instance",level:2},{value:"Connect via SSH",id:"connect-via-ssh",level:3},{value:"Configure Server",id:"configure-server",level:3},{value:"Connecting Runners",id:"connecting-runners",level:2},...c.RM];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"An Appcircle server Amazon Machine Image (AMI) is a pre-configured template used to create virtual servers, known as instances, in the Amazon Web Services (AWS) environment."}),"\n",(0,r.jsx)(n.p,{children:"Think of it as a snapshot of a server that includes the operating system, necessary tools, applications, and any additional services needed to run the Appcircle server."}),"\n",(0,r.jsx)(n.h2,{id:"pre-requirements",children:"Pre-requirements"}),"\n",(0,r.jsx)(n.h3,{id:"appcircle-requirements",children:"Appcircle Requirements"}),"\n",(0,r.jsx)(n.p,{children:"If you don't apply a license, you can go on with the package located in the AMI and use the Appcircle server as a \"Starter Plan\" user. But it's recommended to purchase a license from Appcircle that will increment the license limits and enable you to access the Appcircle resources for future upgrades."}),"\n",(0,r.jsxs)(n.p,{children:["If you are a licensed user, you should ",(0,r.jsx)(n.a,{href:"https://appcircle.io/support/",children:"contact us"})," about the licensed Appcircle server package that includes your actual license."]}),"\n",(0,r.jsx)(n.h3,{id:"technical-requirements",children:"Technical Requirements"}),"\n",(0,r.jsx)(n.p,{children:"Before using the Appcircle server AMI, there are a couple of things that you need to handle."}),"\n",(0,r.jsx)(n.h4,{id:"aws-account",children:"AWS Account"}),"\n",(0,r.jsx)(n.p,{children:"You must have an active AWS account with appropriate permissions to launch EC2 instances and work with other related services."}),"\n",(0,r.jsx)(n.h4,{id:"understanding-of-aws-services",children:"Understanding of AWS Services"}),"\n",(0,r.jsx)(n.p,{children:"A basic understanding of Amazon Web Services (AWS) services, particularly EC2 (Elastic Compute Cloud), is beneficial."}),"\n",(0,r.jsx)(n.p,{children:"You should be familiar with instance creation, networking, security groups, and storage configurations."}),"\n",(0,r.jsx)(n.h5,{id:"1-networking-and-security-configuration",children:"1. Networking and Security Configuration"}),"\n",(0,r.jsx)(n.p,{children:"You might need to configure networking aspects such as Virtual Private Cloud (VPC), subnets, route tables, and security groups to properly integrate the instance within the network environment and manage access controls."}),"\n",(0,r.jsx)(n.h5,{id:"2-ssh-key-pairs-for-secure-access",children:"2. SSH Key Pairs for Secure Access"}),"\n",(0,r.jsx)(n.p,{children:"You need an SSH key pair to access to the server that you will create securely."}),"\n",(0,r.jsx)(n.h5,{id:"3-linux-system-configuration",children:"3. Linux System Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Basic familiarity with Linux system configurations and commands is essential since this document will use Linux commands."}),"\n",(0,r.jsx)(n.h2,{id:"creating-an-appcircle-server-from-the-ami",children:"Creating an Appcircle Server from the AMI"}),"\n",(0,r.jsx)(n.p,{children:"After you meet all the requirements discussed above, you can follow the steps below to create an Appcircle server from the AMI."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Log in to the AWS console with your account."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select the region from the right upper corner."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Head to the EC2 menu to create an EC2 instance."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws23-region-menu.png"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Click on the "Launch Instance" button from the EC2 dashboard.'}),"\n"]}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws24-launch-ec2.png"}),"\n",(0,r.jsx)(n.p,{children:"You should fill out the required fields as per your needs. Please follow the below steps for a sample instance configuration."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Enter an instance name in the "Name and Tags" field. For example, "My Appcircle Server".'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'In order to select the AMI, click on the "Browse more AMIs" button and search for the Appcircle server AMI.'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws9-ami1.png"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Search for "Appcircle" in the "AWS Marketplace AMIs" tab and click on the "Select" button for the AMI.'}),"\n"]}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws10-ami2.png"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Click "Continue" to select Appcircle server AMI.'}),"\n"]}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws11-ami3.png"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["We will use the\xa0",(0,r.jsx)(n.code,{children:"t3.2xlarge"})," instance type for our sample configuration since it meets the minimum requirements for the vCPU count."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["For the details about minimum hardware requirements, you should see the ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#hardware-requirements",children:"Hardware Requirements"})," section."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Select an existing key pair or click on the "Create new key pair" button if you don\'t have any on the AWS console.'}),"\n"]}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws14-instance-type.png"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For the network settings:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"We will use the default VPC created on the form."}),"\n",(0,r.jsxs)(n.li,{children:["Allow HTTP and HTTPS traffic from the internet.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This is required for accessing the Appcircle server dashboard."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["You can restrict the SSH connection by specifying the source IP addresses.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SSH is also required"})," to access the server from the command line."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws15-network.png"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"For storage, you can select a minimum 100-GB disk for a PoC setup or testing purposes."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["You should see the recommended storage sizes and other disk requirements in the ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#hardware-requirements",children:"Hardware Requirements"})," section."]})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"Keep in mind that the pre-configured swap also consumes disk space, and its size is as large as the memory size."}),(0,r.jsx)(n.p,{children:"So, although a minimum 100-GB disk is enough to run the Appcircle server, we recommend a minimum 200-GB disk space for long-term usage."})]}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws16-storage.png"}),"\n",(0,r.jsxs)(n.p,{children:["Now you're ready to click on the ",(0,r.jsx)(n.strong,{children:"Launch Instance"})," button to create the instance with the configuration you made."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"The instance creation may take some time due to the AWS AMI subscriptions."}),(0,r.jsx)(n.p,{children:"Please wait patiently while AWS creates your Appcircle server instance. If the instance is not created within 2 hours, you can follow the steps above and launch it again."}),(0,r.jsx)(n.p,{children:'You can check the subscription in the "AWS Marketplace Subscriptions" service in the AWS console.'})]}),"\n",(0,r.jsxs)(n.p,{children:["You can head to the EC2 ",(0,r.jsx)(n.strong,{children:"Instances"})," page to see if your server is up and running."]}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws18-instance-running.png"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"To enable SSH access,"})," head to the security group settings of your instance. It's required for later configuration steps."]}),"\n",(0,r.jsx)(n.p,{children:'For our sample server instance above, select "My Appcircle Server" instance and click on the "Security" tab.'}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws19-ssh1.png"}),"\n",(0,r.jsx)(n.p,{children:"Edit the inbound rules to enable SSH access to your Appcircle server instance."}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws20-ssh2.png"}),"\n",(0,r.jsx)(n.p,{children:'Add an SSH rule for the IP addresses you want, and click on the "Save Rules" button to activate the settings.'}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws21-ssh3.png"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you want to also send ",(0,r.jsx)(n.code,{children:"ping"}),' requests to the instance for health check purposes, you should also add another rule with the type "All ICMP-IPv4" while editing the inbound rules.']})}),"\n",(0,r.jsx)(n.h2,{id:"configuring-the-appcircle-server-instance",children:"Configuring the Appcircle Server Instance"}),"\n",(0,r.jsx)(n.h3,{id:"connect-via-ssh",children:"Connect via SSH"}),"\n",(0,r.jsx)(n.p,{children:"After you have successfully created an EC2 instance from the Appcircle server AMI, you can follow the steps below to configure it."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Get the IP address of the instance from EC2 dashboard."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Networking > Networking Details > Public IPv4 address"}),"\n",(0,r.jsx)(n.li,{children:"Or, Instance > Details > Public IPv4 address"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Locate the SSH key pair, especially the private key, that you've created or used while configuring the instance."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Get an SSH connection tool like ",(0,r.jsx)(n.code,{children:"putty"})," on Windows or ",(0,r.jsx)(n.code,{children:"ssh"})," on macOS and Linux to connect to the instance."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ssh"})," command below is for macOS and Linux. The other commands are the same after you connect to the instance."]})}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.strong,{children:"private key"})," and ",(0,r.jsx)(n.strong,{children:"IP address"}),", you can connect to the instance with SSH as seen below."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'ssh -i "/path/to/your/private/key" ubuntu@ip-address-of-the-instance\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["The default user for the Appcircle AMI is ",(0,r.jsx)(n.code,{children:"ubuntu"}),"."]}),(0,r.jsxs)(n.p,{children:["So, let's assume that your instance IP address is ",(0,r.jsx)(n.code,{children:"34.205.139.17"})," and your private SSH key path is ",(0,r.jsx)(n.code,{children:"/home/spacetech/.ssh/id_rsa"}),"."]}),(0,r.jsx)(n.p,{children:"You can connect to the instance using the below command on macOS or Linux."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'ssh -i "/home/spacetech/.ssh/id_rsa" ubuntu@34.205.139.17\n'})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:'When you "Create new key pair" while creating the instance from Appcircle AMI, the downloaded private key might cause a permission error when you try to connect to the instance. For instance;'}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"... Permissions 0644 for 'MyCICDSSHKey.pem' are too open.\nIt is required that zour private key files are NOT accessible by others.\nThis private key will be ignored. ..."}),"\n"]}),(0,r.jsx)(n.p,{children:"In this case, you need to change the permissions of the private key using the below command before connecting."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'chmod 600 "/path/to/your/private/key"\n'})}),(0,r.jsx)(n.p,{children:"It will be a one-time-operation that should be done once per private key."})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["The SSH command may ask you to add this server to the list of known hosts. You should write ",(0,r.jsx)(n.code,{children:"yes"})," and hit enter."]}),(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws6-ssh.png"})]}),"\n",(0,r.jsx)(n.h3,{id:"configure-server",children:"Configure Server"}),"\n",(0,r.jsx)(n.p,{children:"After you successfully connect to the Appcircle instance, the first thing you should do is start a system update. Although the Appcircle AMI is up-to-date, it is recommended that you perform security updates again."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt upgrade\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The Appcircle server directory is located in the ",(0,r.jsx)(n.code,{children:"$HOME"})," directory as the ",(0,r.jsx)(n.code,{children:"appcircle-server"})," folder."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'ls -l "$HOME"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Change the current working directory to that folder."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cd "$HOME/appcircle-server"\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"If you are a licensed user"}),", please ",(0,r.jsx)(n.a,{href:"https://appcircle.io/support/",children:"contact us"})," to get the licensed Appcircle zip package. You should ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/update",children:"upgrade"})," the pre-installed package in the instance."]}),(0,r.jsxs)(n.p,{children:["Also, put the ",(0,r.jsx)(n.code,{children:"cred.json"})," file you received from us into the ",(0,r.jsx)(n.code,{children:"appcircle-server"})," folder."]}),(0,r.jsxs)(n.p,{children:["Please ",(0,r.jsx)(n.a,{href:"https://appcircle.io/support/",children:"contact us"})," to purchase an enterprise license if you don't have one."]})]}),"\n",(0,r.jsxs)(n.p,{children:["Now you're ready to configure the Appcircle server according to your needs. Follow the detailed ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#3-configure",children:"configuration"})," steps."]}),"\n",(0,r.jsxs)(n.p,{children:["You should also configure the ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#4-dns-settings",children:"DNS"})," settings for your Appcircle server instance. Create ",(0,r.jsx)(n.code,{children:"A"})," and ",(0,r.jsx)(n.code,{children:"CNAME"})," records for your instance."]}),"\n",(0,r.jsxs)(n.p,{children:["After the configuration is done, ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#5-run-server",children:"run the server"})," and go to the Appcircle server dashboard using the main ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#4-dns-settings",children:"domain"})," you defined."]}),"\n",(0,r.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/be-2503-aws22-dashboard.png"}),"\n",(0,r.jsx)(n.h2,{id:"connecting-runners",children:"Connecting Runners"}),"\n",(0,r.jsxs)(n.p,{children:["When you complete installation successfully by following the above steps, you're ready for your first build. ","\ud83c\udf89"]}),"\n",(0,r.jsxs)(n.p,{children:["But in order to run build pipelines, you need to install and connect self-hosted runners. We have a dedicated section for the installation and configuration of self-hosted runners. Follow and apply related the guidelines ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/self-hosted-runner/installation",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Appcircle also supports the installation and execution of the runners on AWS."}),(0,r.jsxs)(n.p,{children:["You can see the details about how to configure a runner on AWS ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/self-hosted-runner/cloud-providers/aws",children:"here"})}),"."]})]}),"\n",(0,r.jsx)(n.p,{children:"The self-hosted runner section in the documents has all the details about runners and their configuration."}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["By default, self-hosted runner package has pre-configured ",(0,r.jsx)(n.code,{children:"ASPNETCORE_BASE_API_URL"})," for Appcircle-hosted cloud."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"https://api.appcircle.io/build/v1"})}),"\n"]}),(0,r.jsxs)(n.p,{children:["\u261d"," You need to change its value with your self-hosted Appcircle server's API URL."]}),(0,r.jsxs)(n.p,{children:["Assuming our sample scenario explained in ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#3-configure",children:"configuration"}),", its value should be"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"http://api.appcircle.spacetech.com/build/v1"})}),"\n"]}),(0,r.jsx)(n.p,{children:"for our sample scenario."}),(0,r.jsxs)(n.p,{children:["\ud83c\udf97"," After ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/self-hosted-runner/installation#1-download",children:"download"}),", open ",(0,r.jsx)(n.code,{children:"appsettings.json"})," with a text editor and change ",(0,r.jsx)(n.code,{children:"ASPNETCORE_BASE_API_URL"})," value according to your configuration."]}),(0,r.jsxs)(n.p,{children:["Please note that you should do this before ",(0,r.jsx)(n.a,{href:"/self-hosted-appcircle/self-hosted-runner/installation#2-register",children:"registering"}),"."]})]}),"\n",(0,r.jsx)(n.p,{children:"Considering system performance, it will be good to install self-hosted runners on other machines. A self-hosted Appcircle server should run on a dedicated machine itself."}),"\n",(0,r.jsx)(n.p,{children:"You can install any number of runners according to your needs and connect them to a self-hosted Appcircle server."}),"\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsxs)(n.p,{children:["Have questions? ",(0,r.jsx)(n.a,{href:"https://appcircle.io/support/",children:"Contact us here."})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},69678:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var r=s(74848);function i(e){let{url:n}=e;return(0,r.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var r=s(96540);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);