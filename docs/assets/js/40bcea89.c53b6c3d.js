"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[27185],{66437:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(74848),i=s(28453),r=s(69678);const o={title:"Snyk Scan Security",description:"The Snyk Security Scan step enables developers to seamlessly incorporate vulnerability scanning into their CI/CD workflows.",tags:["snyk-scan","security","mobile"]},c="Snyk Scan Security",l={id:"workflows/common-workflow-steps/snyk-scan-security",title:"Snyk Scan Security",description:"The Snyk Security Scan step enables developers to seamlessly incorporate vulnerability scanning into their CI/CD workflows.",source:"@site/docs/workflows/common-workflow-steps/snyk-scan-security.md",sourceDirName:"workflows/common-workflow-steps",slug:"/workflows/common-workflow-steps/snyk-scan-security",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/snyk-scan-security",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/common-workflow-steps/snyk-scan-security.md",tags:[{label:"snyk-scan",permalink:"/nextjs-upload-file-tryout/tags/snyk-scan"},{label:"security",permalink:"/nextjs-upload-file-tryout/tags/security"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/tags/mobile"}],version:"current",frontMatter:{title:"Snyk Scan Security",description:"The Snyk Security Scan step enables developers to seamlessly incorporate vulnerability scanning into their CI/CD workflows.",tags:["snyk-scan","security","mobile"]},sidebar:"mySidebar",previous:{title:"Set Environment Variable",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/set-environment-variable"},next:{title:"SonarQube",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/sonarqube"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{ExternalUrlRef:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"snyk-scan-security",children:"Snyk Scan Security"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://snyk.io/learn/vulnerability-scanner/",children:"Snyk Security Scan"})," is a powerful tool designed to identify and resolve vulnerabilities within your project's dependencies. Leveraging Snyk's extensive vulnerability database, this tool thoroughly analyzes libraries and frameworks used in your project, offering actionable insights to mitigate potential risks."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Snyk Security Scan"})," step integrates directly into Appcircle\u2019s CI/CD workflows, allowing developers to automatically scan project dependencies for vulnerabilities with each build."]}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["Before running the ",(0,t.jsx)(n.strong,{children:"Snyk Scan Security"})," step, certain prerequisites must be completed. These prerequisites, detailed in the table below:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Prerequisite Workflow Step"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/workflows/common-workflow-steps/#git-clone",children:(0,t.jsx)(n.strong,{children:"Git Clone"})})}),(0,t.jsxs)(n.td,{children:["Fetches the repository to be built from the specified branch, ensuring that the ",(0,t.jsx)(n.a,{href:"https://docs.snyk.io/snyk-cli",children:"Snyk CLI"})," can run on the repository path."]})]})})]}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-snyk-scan-cloud-upload_1.png"}),"\n",(0,t.jsx)(n.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,t.jsxs)(n.p,{children:["Each component requires specific input variables for its operation. The input variables necessary for the ",(0,t.jsx)(n.strong,{children:"Snyk Scan Security"})," step are:"]}),"\n",(0,t.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/common-workflow-components-snyk-scan-cloud-upload_2.png"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["Enter confidential information as a ",(0,t.jsx)(n.a,{href:"/environment-variables/managing-variables#adding-key-and-text-based-value-pairs",children:"secret environment variable"}),". Also, select the appropriate ",(0,t.jsx)(n.a,{href:"/environment-variables/managing-variables#using-environment-variable-groups-in-builds",children:"environment variable group"})," in the ",(0,t.jsx)(n.a,{href:"/build/build-process-management/build-profile-configuration/",children:"Configuration"}),"."]})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Status"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$AC_REPOSITORY_DIR"})}),(0,t.jsx)(n.td,{children:"Specifies the directory where the repository is cloned."}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$AC_SNYK_ORGANIZATION"})}),(0,t.jsxs)(n.td,{children:["The name of the ",(0,t.jsx)(n.a,{href:"https://docs.snyk.io/snyk-admin/groups-and-organizations/organizations",children:"Snyk organization"})," under which this project should be tested and monitored."]}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$AC_SNYK_AUTH_TOKEN"})}),(0,t.jsxs)(n.td,{children:["Your ",(0,t.jsx)(n.a,{href:"https://docs.snyk.io/snyk-api/authentication-for-api",children:"Snyk authentication token"}),"."]}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$AC_SYK_CLI_COMMAND"})}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.a,{href:"https://docs.snyk.io/snyk-cli/cli-commands-and-options-summary",children:"Snyk CLI command"})," to execute. The default value is ",(0,t.jsx)(n.code,{children:"test"}),"."]}),(0,t.jsx)(n.td,{children:"Optional"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$AC_SNYK_SEVERITY_THRESHOLD"})}),(0,t.jsxs)(n.td,{children:["Specifies the minimum ",(0,t.jsx)(n.a,{href:"https://docs.snyk.io/manage-risk/prioritize-your-issues/severity-levels",children:"severity level of vulnerabilities"})," to report. Options: ",(0,t.jsx)(n.code,{children:"low"}),", ",(0,t.jsx)(n.code,{children:"medium"}),", ",(0,t.jsx)(n.code,{children:"high"}),"."]}),(0,t.jsx)(n.td,{children:"Optional"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$AC_SNYK_FAIL_ON_ISSUES"})}),(0,t.jsxs)(n.td,{children:["Specifies whether the build should fail based on the Snyk test results. Options: ",(0,t.jsx)(n.code,{children:"yes"}),", ",(0,t.jsx)(n.code,{children:"no"}),"."]}),(0,t.jsx)(n.td,{children:"Optional"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$AC_SNYK_CREATE_REPORT"})}),(0,t.jsxs)(n.td,{children:["Specifies whether to generate an ",(0,t.jsx)(n.a,{href:"https://docs.snyk.io/manage-risk/reporting/getting-started-with-snyk-reports",children:"HTML report"}),". Options: ",(0,t.jsx)(n.code,{children:"yes"}),", ",(0,t.jsx)(n.code,{children:"no"}),"."]}),(0,t.jsx)(n.td,{children:"Optional"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$AC_SNYK_MONITOR"})}),(0,t.jsxs)(n.td,{children:["If enabled, imports the snapshot of dependencies to ",(0,t.jsx)(n.a,{href:"https://docs.snyk.io/snyk-cli/commands/monitor",children:"Snyk for continuous monitoring"}),". Options: ",(0,t.jsx)(n.code,{children:"yes"}),", ",(0,t.jsx)(n.code,{children:"no"}),"."]}),(0,t.jsx)(n.td,{children:"Optional"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$AC_SNYK_ADD_ARG"})}),(0,t.jsx)(n.td,{children:"Additional arguments for the Snyk CLI command."}),(0,t.jsx)(n.td,{children:"Optional"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,t.jsx)(n.p,{children:"The outputs resulting from the operation of this component are as follows:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Output Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$AC_SNYK_REPORT"})}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.a,{href:"https://docs.snyk.io/manage-risk/reporting/",children:"Snyk report"})," file containing the results of executed tests."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$AC_SNYK_MONITOR_EXPLORE_LINK"})}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.a,{href:"https://docs.snyk.io/snyk-cli/commands/monitor",children:"link to explore and monitor"})," the project's security status on Snyk."]})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/appcircleio/appcircle-snyk-scan-secure-component",children:(0,t.jsx)(s,{url:"https://github.com/appcircleio/appcircle-snyk-scan-secure-component",title:"GitHub - appcircleio/appcircle-snyk-scan-secure-component: Appcircle Snyk Scan Security Component",description:"Appcircle Snyk Scan Security Component. Contribute to appcircleio/appcircle-snyk-scan-secure-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/b63214e3e77ffd3ee886e0d6a677d847c4c77ef2174b0e3841f80c803bb3da67/appcircleio/appcircle-snyk-scan-secure-component"})})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},69678:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(74848);function i(e){let{url:n}=e;return(0,t.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);