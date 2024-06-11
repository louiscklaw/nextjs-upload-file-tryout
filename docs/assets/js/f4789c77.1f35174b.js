"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[26338],{74597:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>t});var s=i(74848),r=i(28453);const t=[{value:"Need help?",id:"need-help",level:3}];function o(e){const n={a:"a",h3:"h3",p:"p",...(0,r.R)(),...e.components},{ExternalUrlRef:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"need-help",children:"Need help?"}),"\n",(0,s.jsx)(n.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,s.jsx)(i,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},21469:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>t});var s=i(74848),r=i(28453);const t=[];function o(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"spacetech"})," in the example codes below are example project name."]}),(0,s.jsxs)(n.p,{children:["Please find your own project name and replace ",(0,s.jsx)(n.code,{children:"spacetech"})," with your project name."]}),(0,s.jsxs)(n.p,{children:["To see projects, you can check the ",(0,s.jsx)(n.code,{children:"projects"})," directory."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ls -l ./projects\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},69375:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var s=i(74848),r=i(28453),t=i(11470),o=i(19365),a=i(21469),l=i(74597);const c={title:"MinIO Migration",description:"Instructions on migrating from a multi-node single drive MinIO configuration to a single-node single drive MinIO configuration",tags:["MinIO","MinIO migration","single-node MinIO","multi-node MinIO"],sidebar_class_name:"hidden"},d=void 0,h={id:"self-hosted-appcircle/configure-server/minio-migration",title:"MinIO Migration",description:"Instructions on migrating from a multi-node single drive MinIO configuration to a single-node single drive MinIO configuration",source:"@site/docs/self-hosted-appcircle/configure-server/minio-migration.md",sourceDirName:"self-hosted-appcircle/configure-server",slug:"/self-hosted-appcircle/configure-server/minio-migration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/minio-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/minio-migration.md",tags:[{label:"MinIO",permalink:"/nextjs-upload-file-tryout/tags/min-io"},{label:"MinIO migration",permalink:"/nextjs-upload-file-tryout/tags/min-io-migration"},{label:"single-node MinIO",permalink:"/nextjs-upload-file-tryout/tags/single-node-min-io"},{label:"multi-node MinIO",permalink:"/nextjs-upload-file-tryout/tags/multi-node-min-io"}],version:"current",frontMatter:{title:"MinIO Migration",description:"Instructions on migrating from a multi-node single drive MinIO configuration to a single-node single drive MinIO configuration",tags:["MinIO","MinIO migration","single-node MinIO","multi-node MinIO"],sidebar_class_name:"hidden"},sidebar:"mySidebar",previous:{title:"Auto-upgrading Server",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/auto-updating"},next:{title:"Monitoring",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/monitoring"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Migration",id:"migration",level:2},{value:"Download Latest",id:"download-latest",level:3},...a.RM,{value:"Update Packages",id:"update-packages",level:3},{value:"Update Configuration",id:"update-configuration",level:3},{value:"Update Images",id:"update-images",level:3},{value:"MinIO Migration",id:"minio-migration",level:3},{value:"Start the Server",id:"start-the-server",level:3},{value:"Troubleshooting &amp; FAQ",id:"troubleshooting--faq",level:2},{value:"There is no space left on disk while migrating",id:"there-is-no-space-left-on-disk-while-migrating",level:3},{value:"Possible checks that can be done after migration",id:"possible-checks-that-can-be-done-after-migration",level:3},{value:"When you get an error while or after migrating",id:"when-you-get-an-error-while-or-after-migrating",level:3},...a.RM,{value:"Deleting the unused MinIO volumes after migration",id:"deleting-the-unused-minio-volumes-after-migration",level:3},...a.RM,...l.RM];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["Older versions of the Appcircle server utilized MinIO in a multi-node single drive (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"mnsd"})}),") setup, which resulted in increased disk usage. By default, the Appcircle server utilizes MinIO in a single-node single drive (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"snsd"})}),") configuration with the Appcircle server version ",(0,s.jsx)(n.code,{children:"v3.14.0"})," or later."]}),"\n",(0,s.jsxs)(n.p,{children:["With the transition to Appcircle server ",(0,s.jsx)(n.code,{children:"v3.14.0"})," and the adoption of single-node single drive (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"snsd"})}),") MinIO, disk consumption is anticipated to decrease by approximately 20%."]}),"\n",(0,s.jsx)(n.p,{children:"This documentation provides comprehensive instructions on migrating from a multi-node single drive MinIO configuration to a single-node single drive MinIO configuration that can be applied to recent versions of the Appcircle server."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Please note that this process will cause downtime since it requires a restart of the Appcircle server."})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Fresh self-hosted server installations do not require any manual intervention for the MinIO configuration."}),(0,s.jsx)(n.p,{children:"The single-node single drive MinIO configuration is applied by default on fresh installations."})]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"For a successful migration from multi-node single drive MinIO to single-node single drive MinIO, it's essential to ensure adequate free disk space on the Appcircle server."}),"\n",(0,s.jsx)(n.p,{children:"To determine the required disk space, follow the steps below:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log in to Appcircle server with SSH or remote connection."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Get information about the "Used" and "Available" disk spaces where your container engine data is stored.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"df -h\n"})}),"\n",(0,s.jsx)(n.p,{children:"Below is a sample output for the command above."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Filesystem      Size  Used Avail Use% Mounted on\ndevtmpfs        5.7G     0  5.7G   0% /dev\ntmpfs           5.8G     0  5.8G   0% /dev/shm\ntmpfs           5.8G   20M  5.8G   1% /run\ntmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup\n/dev/vda3        80G   21G   60G  26% /\n/dev/vda2       100M  5.8M   95M   6% /boot/efi\ntmpfs           1.2G     0  1.2G   0% /run/user/1000\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Get information about the disk usage of the container engine."}),"\n"]}),"\n",(0,s.jsxs)(t.A,{groupId:"container-engine",children:[(0,s.jsx)(o.A,{value:"docker",label:"Docker",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker system df\n"})})}),(0,s.jsx)(o.A,{value:"podman",label:"Podman",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"podman system df\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Below is a sample output for the command above."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE\nImages          39        38        12.77GB   1.081GB (8%)\nContainers      45        41        12.08MB   4.055kB (0%)\nLocal Volumes   576       29        7.431GB   4.649GB (62%)\nBuild Cache     38        0         831.5MB   831.5MB\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:['Make sure you have half of the "Local Volumes" size of "Available" (free) disk space.',"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'In our example above, we have 60 GB of "Available" (free) disk space, which should be sufficient for the migration since the "Local Volumes" have a size of 7.4 GB.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"If you don't have enough free disk space, the migration may fail, be interrupted, and stop."}),(0,s.jsx)(n.p,{children:"Your data before the migration will be untouched and safe. So you can add some more free disk space and run the migration command again to migrate."})]}),"\n",(0,s.jsx)(n.h2,{id:"migration",children:"Migration"}),"\n",(0,s.jsx)(n.h3,{id:"download-latest",children:"Download Latest"}),"\n",(0,s.jsx)(n.p,{children:"Download the latest self-hosted Appcircle package."}),"\n",(0,s.jsxs)(n.p,{children:["To download the licensed Appcircle Server package for your organization, you must copy the ",(0,s.jsx)(n.code,{children:"cred.json"})," file to the directory where you want to install the package."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Without the ",(0,s.jsx)(n.code,{children:"cred.json"})," file, you will not be able to access the licensed Appcircle Server package."]}),(0,s.jsxs)(n.p,{children:["If you have not yet obtained the ",(0,s.jsx)(n.code,{children:"cred.json"})," file, please contact us for assistance."]})]}),"\n",(0,s.jsx)(n.p,{children:"Download the latest self-hosted Appcircle package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://cdn.appcircle.io/self-hosted/download-server.sh | bash\n"})}),"\n",(0,s.jsx)(n.p,{children:"Extract self-hosted Appcircle package into folder."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"unzip -o -u appcircle-server-linux-x64-${version}-${build}.zip -d appcircle-server\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You should use the downloaded ",(0,s.jsx)(n.code,{children:"zip"})," archive while extracting so that the actual ",(0,s.jsx)(n.code,{children:"${version}"})," and ",(0,s.jsx)(n.code,{children:"${build}"})," will come from there. You can find the relevant data in the previously executed download command output."]})}),"\n",(0,s.jsxs)(n.p,{children:["Change directory into extracted ",(0,s.jsx)(n.code,{children:"appcircle-server"})," folder for following steps."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,s.jsx)(a.Ay,{}),"\n",(0,s.jsx)(n.p,{children:"Shutdown the Appcircle server."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,s.jsx)(n.h3,{id:"update-packages",children:"Update Packages"}),"\n",(0,s.jsx)(n.p,{children:"Although it's rare, updates may have new packages or package updates. Those are the tools that the self-hosted Appcircle depends on. So they should be kept up-to-date, just like the Appcircle server."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["You need to have root access to your system for this step. Being able to run ",(0,s.jsx)(n.code,{children:"sudo"})," is sufficient for the following step. (sudoer)"]})}),"\n",(0,s.jsxs)(n.p,{children:["In order to update packages, execute the script using the ",(0,s.jsx)(n.code,{children:"-i"})," argument as shown below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ./ac-self-hosted.sh -i\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update-configuration",children:"Update Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Migrating to a single-node single drive MinIO does not necessitate any additional configuration adjustments in the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file of the project."]}),"\n",(0,s.jsx)(n.p,{children:"Execute the below command to apply configuration changes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})}),"\n",(0,s.jsx)(n.h3,{id:"update-images",children:"Update Images"}),"\n",(0,s.jsx)(n.p,{children:"In order to get container image updates for Appcircle server services, you need to pull them from the remote artifact repository."}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["If you are updating the Appcircle server with the ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/configure-server/offline-installation",children:"Offline Upgrade"})," method, you should ",(0,s.jsx)(n.code,{children:"load"})," the new container images before the MinIO migration."]}),(0,s.jsxs)(n.p,{children:["For more details, please head to the ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/configure-server/offline-installation#upgrade",children:"Offline Upgrade"})," documentation and follow the steps before the MinIO migration."]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Upgrade the container images."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" upgrade\n'})}),"\n",(0,s.jsx)(n.h3,{id:"minio-migration",children:"MinIO Migration"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"You must apply one of the options below while updating the self-hosted Appcircle server."})}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(o.A,{value:"snsd",label:"Migrating to SNSD MinIO (recommended)",default:!0,children:[(0,s.jsxs)(n.p,{children:["Migration from multi-node single drive (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"mnsd"})}),") to single-node single drive (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"snsd"})}),") configuration can be accomplished seamlessly with a single command."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" minio-migrate "mnsd" "snsd"\n'})}),(0,s.jsx)(n.p,{children:"Upon successful completion of the migration process, you should see an output like in the example:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"...\nMigration logs are being saved into the minio-migration-20240329082833.log file.\n...\n...\nThe migration command was completed successfully.\n"})}),(0,s.jsxs)(n.p,{children:["Detailed migration logs are being saved into a file named ",(0,s.jsx)(n.code,{children:"minio-migration-${datetime}.log"})," where the ",(0,s.jsx)(n.code,{children:"datetime"})," part is the current system date time in a format like ",(0,s.jsx)(n.code,{children:"20240329082833"}),"."]}),(0,s.jsx)(n.p,{children:"You can access and review the comprehensive migration logs from this file for further insights into the migration process."}),(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["If you are using a proxy on the Appcircle server, then you should update the ",(0,s.jsx)(n.code,{children:"no_proxy"})," variables."]}),(0,s.jsxs)(n.p,{children:["Please follow the ",(0,s.jsx)(n.a,{href:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/integrations-and-access/proxy-configuration#edit-no_proxy-for-internal-container-network",children:"No Proxy for Internal Container Network"})," to update your proxy configuration for the new SNSD MinIO service."]})]})]}),(0,s.jsxs)(o.A,{value:"mnsd",label:"Staying with MNSD MinIO",children:[(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Although that's not recommended, you can prefer to stay with a multi-node single drive MinIO."}),(0,s.jsxs)(n.p,{children:["Keep in mind that this type of MinIO usage is ",(0,s.jsx)(n.strong,{children:"deprecated"}),", and later versions of the self-hosted Appcircle server might drop support for multi-node single drive MinIO."]})]}),(0,s.jsxs)(n.p,{children:["In order to stay with the multi-node single drive (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"mnsd"})}),") MinIO configuration and not proceed with migration, it's necessary to specify the MinIO type in the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file of the project."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Edit the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file of your project."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi ./projects/spacetech/global.yaml\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add the below section to ",(0,s.jsx)(n.code,{children:"global.yaml"})," and specify the ",(0,s.jsx)(n.code,{children:"mnsd"})," value as the ",(0,s.jsx)(n.code,{children:"minio.type"}),"."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"minio:\n  type: mnsd\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Then execute the below command to apply configuration changes."}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"start-the-server",children:"Start the Server"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start the Appcircle server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"You should check the status of the Appcircle server after boot for any possible errors."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" check\n'})}),(0,s.jsxs)(n.p,{children:["You should see the message: ",(0,s.jsx)(n.em,{children:'"All services are running successfully."'})]})]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting--faq",children:"Troubleshooting & FAQ"}),"\n",(0,s.jsx)(n.h3,{id:"there-is-no-space-left-on-disk-while-migrating",children:"There is no space left on disk while migrating"}),"\n",(0,s.jsxs)(n.p,{children:["If you can connect to the server via SSH, you can delete the ",(0,s.jsx)(n.strong,{children:"newly created"})," single-node single drive MinIO volume to free up disk space for stable system operations."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["List and filter the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"snsd"})})," volume from container volumes."]}),"\n"]}),"\n",(0,s.jsxs)(t.A,{groupId:"container-engine",children:[(0,s.jsx)(o.A,{value:"docker",label:"Docker",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker volume ls | grep -i "snsd"\n'})})}),(0,s.jsx)(o.A,{value:"podman",label:"Podman",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'podman volume ls | grep -i "snsd"\n'})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Remove the your project's ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"snsd"})})," volume. For example;"]}),"\n"]}),"\n",(0,s.jsxs)(t.A,{groupId:"container-engine",children:[(0,s.jsx)(o.A,{value:"docker",label:"Docker",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker volume rm spacetech_minio_snsd_data\n"})})}),(0,s.jsx)(o.A,{value:"podman",label:"Podman",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"podman volume rm spacetech_minio_snsd_data\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"After that, you can cleanup the disk or add some more disk space for a successful migration."}),"\n",(0,s.jsxs)(n.p,{children:["Check the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#prerequisites",children:"prerequisites"})})," section for the required disk space."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to go on without any migration and stay with an older configuration, you should follow the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#update-configuration",children:"Staying with MNSD MinIO"})})," section for configuration details."]}),"\n",(0,s.jsx)(n.h3,{id:"possible-checks-that-can-be-done-after-migration",children:"Possible checks that can be done after migration"}),"\n",(0,s.jsx)(n.p,{children:"In order to check if the migration is successful and the data is consistent, you can check some modules on the Appcircle dashboard."}),"\n",(0,s.jsx)(n.p,{children:"Below is a short list of common modules that can be checked."}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ",'Open a "Build Profile" and check the build logs.']}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ",'Open a "Publish Profile" and check the publish logs.']}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ",'Open a "Testing Distribution Profile" and check the app icons.']}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ",'Open "Enterprise App Store" module and check the app icons.']}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The migration command also prints output about the result of the migration operation on the command line."}),"\n",(0,s.jsx)(n.h3,{id:"when-you-get-an-error-while-or-after-migrating",children:"When you get an error while or after migrating"}),"\n",(0,s.jsx)(n.p,{children:"The migration operation does not delete the old MinIO volumes automatically. Your data before the migration is untouched and safe."}),"\n",(0,s.jsx)(n.p,{children:"So if you face any error while migrating or after migrating to the SNSD MinIO, you can revert to the old MNSD MinIO configuration."}),"\n",(0,s.jsx)(n.p,{children:"In this case follow the steps below to stay with MNSD MinIO configuration."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log in to Appcircle server with SSH or remote connection."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.code,{children:"appcircle-server"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,s.jsx)(a.Ay,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stop the Appcircle server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Edit the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file of your project."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi ./projects/spacetech/global.yaml\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add the below configuration section to ",(0,s.jsx)(n.code,{children:"global.yaml"}),", or change the value as below if the ",(0,s.jsx)(n.code,{children:"minio"})," section existed before."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"minio:\n  type: mnsd\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Apply configuration changes."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start the Appcircle server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,s.jsx)(n.h3,{id:"deleting-the-unused-minio-volumes-after-migration",children:"Deleting the unused MinIO volumes after migration"}),"\n",(0,s.jsx)(n.p,{children:"If there are no errors while migrating and you are satisfied with the results after migration, you can delete the obsolete MinIO volumes to save free disk space."}),"\n",(0,s.jsx)(n.p,{children:"In order to delete the unused MinIO volumes that were left from MNSD MinIO configuration, run the command below."}),"\n",(0,s.jsx)(a.Ay,{}),"\n",(0,s.jsxs)(t.A,{groupId:"container-engine",children:[(0,s.jsx)(o.A,{value:"docker",label:"Docker",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker volume rm \\\n  spacetech_minio_data1 \\\n  spacetech_minio_data2 \\\n  spacetech_minio_data3 \\\n  spacetech_minio_data4\n"})})}),(0,s.jsx)(o.A,{value:"podman",label:"Podman",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"podman volume rm \\\n  spacetech_minio_data1 \\\n  spacetech_minio_data2 \\\n  spacetech_minio_data3 \\\n  spacetech_minio_data4\n"})})})]}),"\n",(0,s.jsx)(l.Ay,{}),"\n",(0,s.jsxs)(n.p,{children:["Have questions? ",(0,s.jsx)(n.a,{href:"https://appcircle.io/support/",children:"Contact us here."})]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>o});i(96540);var s=i(18215);const r={tabItem:"tabItem_Ymn6"};var t=i(74848);function o(e){let{children:n,hidden:i,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>w});var s=i(96540),r=i(18215),t=i(23104),o=i(56347),a=i(205),l=i(57485),c=i(31682),d=i(89466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:r}}=e;return{value:n,label:i,attributes:s,default:r}}))}(i);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:i}=e;const r=(0,o.W6)(),t=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function g(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,t=u(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[c,h]=m({queryString:i,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,d.Dv)(i);return[r,(0,s.useCallback)((e=>{i&&t.set(e)}),[i,t])]}({groupId:r}),f=(()=>{const e=c??g;return p({value:e,tabValues:t})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,t]),tabValues:t}}var x=i(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=i(74848);function v(e){let{className:n,block:i,selectedValue:s,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const n=e.currentTarget,i=l.indexOf(n),r=a[i].value;r!==s&&(c(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:t}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...t,className:(0,r.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:r}=e;const t=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);