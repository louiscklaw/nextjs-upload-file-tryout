"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[66810],{81136:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=s(74848),i=s(28453),n=s(69678);const o={title:"AWS Device Farm and Deploy",description:"AWS Device Farm is an application testing service that enables you to run your tests concurrently on multiple mobile devices to speed up the execution of your tests and generates videos and logs to help you quickly identify issues with your app.",tags:["android","ios","mobile","testing","aws"]},d="AWS Device Farm and Deploy",l={id:"workflows/common-workflow-steps/aws-device-farm-and-deploy",title:"AWS Device Farm and Deploy",description:"AWS Device Farm is an application testing service that enables you to run your tests concurrently on multiple mobile devices to speed up the execution of your tests and generates videos and logs to help you quickly identify issues with your app.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/700_workflows/common-workflow-steps/aws-device-farm-and-deploy.md",sourceDirName:"700_workflows/common-workflow-steps",slug:"/workflows/common-workflow-steps/aws-device-farm-and-deploy",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/common-workflow-steps/aws-device-farm-and-deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/common-workflow-steps/aws-device-farm-and-deploy.md",tags:[{label:"android",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/android"},{label:"ios",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/ios"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/mobile"},{label:"testing",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/testing"},{label:"aws",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/aws"}],version:"current",frontMatter:{title:"AWS Device Farm and Deploy",description:"AWS Device Farm is an application testing service that enables you to run your tests concurrently on multiple mobile devices to speed up the execution of your tests and generates videos and logs to help you quickly identify issues with your app.",tags:["android","ios","mobile","testing","aws"]},sidebar:"tutorialSidebar",previous:{title:"Authenticate with Netrc",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/common-workflow-steps/authenticate-with-netrc"},next:{title:"Azure Boards",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/common-workflow-steps/azure-board"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"For iOS",id:"for-ios",level:4},{value:"For Android",id:"for-android",level:4},{value:"Input Variables",id:"input-variables",level:3},{value:"How to get the ARN values",id:"how-to-get-the-arn-values",level:4},{value:"Output Variables",id:"output-variables",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{ExternalUrlRef:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"aws-device-farm-and-deploy",children:"AWS Device Farm and Deploy"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://aws.amazon.com/device-farm/",children:"AWS Device Farm"})," is an application testing service that enables you to run your tests concurrently on multiple mobile devices to speed up the execution of your tests and generates videos and logs to help you quickly identify issues with your app."]}),"\n",(0,r.jsx)(t.p,{children:"Appcircle is integrated with the AWS Device Farm for continuous testing. You can build your app in Appcircle and deploy it directly to AWS Device Farm to run automated tests."}),"\n",(0,r.jsxs)(t.p,{children:["With the ",(0,r.jsx)(t.strong,{children:"AWS Device Farm Deploy and Run"})," step in Appcircle, you can directly deploy your binaries and test scripts during the build to the specified AWS Device Farm project and run tests."]}),"\n",(0,r.jsxs)(t.p,{children:["The full details of the tests are accessible in the ",(0,r.jsx)(t.a,{href:"https://console.aws.amazon.com/devicefarm/",children:"AWS Device Farm console"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"This component works separately for iOS and Android. It depends on different steps for both platforms."}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"Pay attention to the dependent step on whichever platform you are working on."})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/android-specific-workflow-steps/android-build-for-ui-testing",children:"Android Build for UI Testing"})}),(0,r.jsx)(t.td,{children:"The Android Build for UI Testing workflow step is tailored to build your Android test application using Gradle Wrapper (gradlew) for the designated architectures outlined in your project."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps/build-and-test/xcodebuild-for-testing",children:"Xcodebuild Build for Testing"})}),(0,r.jsx)(t.td,{children:"This step builds your application and generates an IPA for testing so that it can be used in test automation frameworks."})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"for-ios",children:"For iOS"}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3049-awsiosOrder.png"}),"\n",(0,r.jsx)(t.h4,{id:"for-android",children:"For Android"}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3049-awsandroidOrder.png"}),"\n",(0,r.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,r.jsx)(t.p,{children:"You can find all the parameters required for this step in the table below, with their descriptions in detail."}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/BE3049-awsInput.png"}),"\n",(0,r.jsxs)(t.admonition,{type:"danger",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Do not hard-code sensitive variables, such as tokens and API keys, directly to the parameters in the step."})}),(0,r.jsxs)(t.p,{children:["We recommend using ",(0,r.jsx)(t.a,{href:"/environment-variables/",children:"Environment Variables"})," groups for such sensitive variables."]})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Status"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_ACCESS_KEY_ID"})}),(0,r.jsxs)(t.td,{children:["AWS Access Key ID. Please follow the ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/security-creds.html#access-keys-and-secret-access-keys",children:(0,r.jsx)(t.strong,{children:"AWS documentation"})}),"."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_SECRET_ACCESS_KEY"})}),(0,r.jsxs)(t.td,{children:["AWS Secret Access Key. Please follow the ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/security-creds.html#access-keys-and-secret-access-keys",children:(0,r.jsx)(t.strong,{children:"AWS documentation"})})]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_DEFAULT_REGION"})}),(0,r.jsxs)(t.td,{children:["AWS Default Region. The default value is ",(0,r.jsx)(t.code,{children:"us-west-2"}),". For more information, please visit this ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints",children:"documentation"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_PROJECT_ARN"})}),(0,r.jsx)(t.td,{children:"The ARN of the project for deploy and run."}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_DEVICE_POOL_ARN"})}),(0,r.jsx)(t.td,{children:"The ARN of the device pool for the run."}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_SCHEDULE_RUN_NAME_PREFIX"})}),(0,r.jsx)(t.td,{children:"The name prefix for the run to be scheduled."}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_SCHEDULE_TEST_TYPE"})}),(0,r.jsxs)(t.td,{children:["The type of the test for the run. Enter ",(0,r.jsx)(t.strong,{children:"BUILTIN_FUZZ"})," for sample test runs. ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateUpload.html#API_CreateUpload_RequestSyntax",children:(0,r.jsx)(t.strong,{children:"See API Reference"})}),"."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_UPLOAD_TIMEOUT"})}),(0,r.jsx)(t.td,{children:"Time out duration (seconds) for the test file upload. The step is skipped if the time out is reached."}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_TEST_TIMEOUT"})}),(0,r.jsx)(t.td,{children:"Time out duration (seconds) for the AWS Device Farm run. The step is skipped if this duration is reached, but the test execution continues in AWS Device Farm."}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_APP_ARN"})}),(0,r.jsx)(t.td,{children:"The ARN of the application package to run tests against, created with CreateUpload. If you don't set this parameter, the subsequent App Upload File Name, App Upload Type and App Upload File Path parameters are required."}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_APP_UPLOAD_FILE_NAME"})}),(0,r.jsxs)(t.td,{children:["The file to be uploaded. The name should not contain any forward slashes (/ ). If you are uploading an iOS app, the file must have an ",(0,r.jsx)(t.strong,{children:"IPA"})," extension. If you are uploading an Android app, the file must have an ",(0,r.jsx)(t.strong,{children:"APK"})," extension."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_APP_UPLOAD_TYPE"})}),(0,r.jsxs)(t.td,{children:["The upload type of the file. Enter ",(0,r.jsx)(t.strong,{children:"ANDROID_APP"})," or ",(0,r.jsx)(t.strong,{children:"IOS_APP"})," for simple APK or IPA uploads."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_APP_UPLOAD_FILE_PATH"})}),(0,r.jsxs)(t.td,{children:["The file path for the app upload. You can use predetermined environment variables like ",(0,r.jsx)(t.code,{children:"$AC_APK_PATH"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_TEST_ARN"})}),(0,r.jsx)(t.td,{children:"The ARN of the uploaded test to be run. If you don't set this parameter, the subsequent Test Upload File Name, Test Upload Type and Test Upload File Path parameters are required."}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_TEST_UPLOAD_FILE_NAME"})}),(0,r.jsxs)(t.td,{children:["The test file to be uploaded. The file must have a ",(0,r.jsx)(t.code,{children:".zip"})," extension."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_TEST_UPLOAD_TYPE"})}),(0,r.jsxs)(t.td,{children:["The upload type of the file. Enter ",(0,r.jsx)(t.strong,{children:"ANDROID_APP"})," or ",(0,r.jsx)(t.strong,{children:"IOS_APP"})," for simple APK or IPA uploads."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_TEST_UPLOAD_FILE_PATH"})}),(0,r.jsxs)(t.td,{children:["The file path for the app upload. You can use predetermined environment variables like ",(0,r.jsx)(t.code,{children:"$AC_APK_PATH"}),"."]}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_TEST_SPEC_ARN"})}),(0,r.jsx)(t.td,{children:"The ARN of the uploaded test spec to be run."}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_TEST_SPEC_UPLOAD_FILE_NAME"})}),(0,r.jsx)(t.td,{children:"The test spec file to be uploaded."}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_TEST_SPEC_UPLOAD_TYPE"})}),(0,r.jsx)(t.td,{children:"The upload type of the test spec."}),(0,r.jsx)(t.td,{children:"Optional"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_TEST_SPEC_UPLOAD_FILE_PATH"})}),(0,r.jsx)(t.td,{children:"The file path for the test spec upload."}),(0,r.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"how-to-get-the-arn-values",children:"How to get the ARN values"}),"\n",(0,r.jsxs)(t.p,{children:["To get the ARN values, you first need to install the AWS CLI. Please refer to the guide for your operating system to install it: ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:(0,r.jsx)(s,{url:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",title:"Install or update to the latest version of the AWS CLI - AWS Command Line Interface",description:"Instructions to install or update the AWS CLI on your system.",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})]}),"\n",(0,r.jsx)(t.p,{children:"Once the CLI is installed, first run the following command to list the projects and get the project ARN:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"aws devicefarm list-projects\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can then get the ARN of the device pools of a specific project as follows. Replace ",(0,r.jsx)(t.code,{children:"MyProjectARN"})," with the project ARN obtained from the previous command."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"aws devicefarm list-device-pools --arn MyProjectARN\n"})}),"\n",(0,r.jsx)(t.p,{children:"For the details of the other AWS Device Farm-specific parameters, please refer to the following documents:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/reference/devicefarm/create-upload.html",children:(0,r.jsx)(s,{url:"https://docs.aws.amazon.com/cli/latest/reference/devicefarm/create-upload.html",title:"create-upload \u2014 AWS CLI 1.33.7 Command Reference",description:"\nDescription\xb6\nUploads an app or test scripts.\nSee also: AWS API Documentation\n",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/reference/devicefarm/schedule-run.html",children:(0,r.jsx)(s,{url:"https://docs.aws.amazon.com/cli/latest/reference/devicefarm/schedule-run.html",title:"schedule-run \u2014 AWS CLI 1.33.7 Command Reference",description:"\nDescription\xb6\nSchedules a run.\nSee also: AWS API Documentation\n",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})}),"\n",(0,r.jsx)(t.p,{children:"After you save your settings, you can run the build and the step will be executed accordingly. You can view the details of the AWS Device Farm Deploy and Run step in the build logs:"}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/aws-farm-android-workflow-result.png"}),"\n",(0,r.jsxs)(t.p,{children:["The full details of the tests are accessible in the ",(0,r.jsx)(t.a,{href:"https://console.aws.amazon.com/devicefarm/",children:"AWS Device Farm console"}),"."]}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/image (104).png"}),"\n",(0,r.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_RUN_ARN"})}),(0,r.jsx)(t.td,{children:"AWS Device Farm Run ARN."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_TEST_RESULT"})}),(0,r.jsx)(t.td,{children:"AWS Device Farm Test result."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_OUTPUT_DEVICEPOOL_ARN"})}),(0,r.jsx)(t.td,{children:"The ARN of the Device pool."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AWS_OUTPUT_APPUPLOAD_ARN"})}),(0,r.jsx)(t.td,{children:"The ARN of the App Upload."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-aws-device-farm-deploy-and-run",children:(0,r.jsx)(s,{url:"https://github.com/appcircleio/appcircle-aws-device-farm-deploy-and-run",title:"GitHub - appcircleio/appcircle-aws-device-farm-deploy-and-run",description:"Contribute to appcircleio/appcircle-aws-device-farm-deploy-and-run development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/fe0dfb9049c223ea25d94166921d7ecb4a9cfb83bc1d85e20ba219021a155693/appcircleio/appcircle-aws-device-farm-deploy-and-run"})})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},69678:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var r=s(74848);function i(e){let{url:t}=e;return(0,r.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var r=s(96540);const i={},n=r.createContext(i);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);