"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[23471],{54676:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=s(74848),r=s(28453),i=s(69678);const n={title:"Upload Files to Amazon S3",description:"Learn how to upload files to Amazon S3 with Appcircle. Streamline your storage and backup processes for app development.",tags:["build","test","upload","amazon","s3","workflow","step"]},a="Upload Files to Amazon S3",l={id:"workflows/common-workflow-steps/upload-files-to-amazon-s3",title:"Upload Files to Amazon S3",description:"Learn how to upload files to Amazon S3 with Appcircle. Streamline your storage and backup processes for app development.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/700_workflows/common-workflow-steps/upload-files-to-amazon-s3.md",sourceDirName:"700_workflows/common-workflow-steps",slug:"/workflows/common-workflow-steps/upload-files-to-amazon-s3",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/common-workflow-steps/upload-files-to-amazon-s3",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/common-workflow-steps/upload-files-to-amazon-s3.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/build"},{label:"test",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/test"},{label:"upload",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/upload"},{label:"amazon",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/amazon"},{label:"s3",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/s-3"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/workflow"},{label:"step",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/step"}],version:"current",frontMatter:{title:"Upload Files to Amazon S3",description:"Learn how to upload files to Amazon S3 with Appcircle. Streamline your storage and backup processes for app development.",tags:["build","test","upload","amazon","s3","workflow","step"]},sidebar:"tutorialSidebar",previous:{title:"Testinium",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/common-workflow-steps/testinium"},next:{title:"iOS Specific Workflow Steps",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/ios-specific-workflow-steps/"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"upload-files-to-amazon-s3",children:"Upload Files to Amazon S3"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://aws.amazon.com/s3/",children:"Amazon Simple Storage Service (S3)"})," is an object storage service provided by AWS, utilized for storing build artifacts across diverse use cases."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Upload Files to Amazon S3"})," step in Appcircle enables direct uploading of any file or folder to the designated Amazon S3 bucket during the build process."]}),"\n",(0,o.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.p,{children:["There are no prerequisites required before using the ",(0,o.jsx)(t.strong,{children:"Upload Files to Amazon S3"})," step."]}),"\n",(0,o.jsxs)(t.p,{children:["To begin, add the ",(0,o.jsx)(t.strong,{children:"Upload Files to Amazon S3"})," step to the workflow from the ",(0,o.jsx)(t.a,{href:"/workflows/#workflow-marketplace",children:"workflow marketplace"}),". You can incorporate it at any point within the workflow and multiple times, as necessary, to upload specific files or folders. For example, you can place it after the build step to deploy the build outputs."]}),"\n",(0,o.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/s3-workflow-ios.png"}),"\n",(0,o.jsxs)(t.p,{children:["Once added, exit the workflow edit mode by saving your changes, and then click on the ",(0,o.jsx)(t.strong,{children:"Upload Files to Amazon S3"})," step."]}),"\n",(0,o.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,o.jsxs)(t.p,{children:["Below is a table containing all the parameters required for the ",(0,o.jsx)(t.strong,{children:"Upload Files to Amazon S3"})," step, along with detailed descriptions:"]}),"\n",(0,o.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/s3-workflow-details.png"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Variable Name"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Status"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AC_INPUT_FILE_PATH"})}),(0,o.jsxs)(t.td,{children:["Specifies the file or folder name to be uploaded to S3. You can provide the full path or the output of another step as an environment variable (e.g., ",(0,o.jsx)(t.code,{children:"$AC_ARCHIVE_PATH"})," allows you to upload the output of the ",(0,o.jsx)(t.strong,{children:"Xcode Build for Devices"})," step)."]}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AWS_ACCESS_KEY_ID"})}),(0,o.jsxs)(t.td,{children:["Specifies the AWS access key ID. ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys",children:"For more information, refer here"}),"."]}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AWS_SECRET_ACCESS_KEY"})}),(0,o.jsxs)(t.td,{children:["Specifies the secret access key associated with the entered ID. ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys",children:"For more information, refer here"}),"."]}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AWS_BUCKET_NAME"})}),(0,o.jsx)(t.td,{children:"Specifies the S3 bucket name as the deployment target."}),(0,o.jsx)(t.td,{children:"Required"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AWS_BUCKET_REGION"})}),(0,o.jsxs)(t.td,{children:["Specifies the AWS region where the specified bucket resides. You can find the ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints",children:"endpoint codes for the regions here"}),". The default value is ",(0,o.jsx)(t.code,{children:"us-east-1"}),"."]}),(0,o.jsx)(t.td,{children:"Optional"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AWS_TARGET_DIR"})}),(0,o.jsxs)(t.td,{children:["Specifies the Amazon S3 folder path in the bucket. By default, it selects the date (",(0,o.jsx)(t.code,{children:"Y-m-d-H-M-S"}),") as the folder."]}),(0,o.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["It is highly recommended to add the keys as ",(0,o.jsx)(t.a,{href:"../../.././environment-variables/managing-variables",children:"secret environment variables"})," instead of typing them here for security purposes."]})}),"\n",(0,o.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,o.jsx)(t.p,{children:"As the output may vary depending on the task you execute, there is no specific output defined by default."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Output Variable"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"$AC_AWS_UPLOAD_URL"})}),(0,o.jsxs)(t.td,{children:["Specifies that the files and folders are deployed to a newly created directory as ",(0,o.jsx)(t.code,{children:"s3://bucket-name/timestamp"})," to avoid any conflicts and potential overwrites."]})]})})]}),"\n",(0,o.jsx)(t.p,{children:"After saving your settings, the build can be run, and the step will be executed accordingly. Details of the upload operation can be viewed in the build logs:"}),"\n",(0,o.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/s3-workflow-ios-upload.png"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-file-upload-to-amazon-s3",children:(0,o.jsx)(s,{url:"https://github.com/appcircleio/appcircle-file-upload-to-amazon-s3",title:"GitHub - appcircleio/appcircle-file-upload-to-amazon-s3",description:"Contribute to appcircleio/appcircle-file-upload-to-amazon-s3 development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/c8e86f199e479cf3aa233efc8713f47e850beaaeab5812a6e862e8bf90d9ecc7/appcircleio/appcircle-file-upload-to-amazon-s3"})})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},69678:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var o=s(74848);function r(e){let{url:t}=e;return(0,o.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>a});var o=s(96540);const r={},i=o.createContext(r);function n(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);