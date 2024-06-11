"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[9556],{85995:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=i(74848),n=i(28453),s=i(69678);const o={title:"Jira Comment",description:"Explore Jira Comment, a tool for efficient project management and issue tracking. Enhance your workflow with Appcircle's integration.",tags:["jira","workflow","issue tracking","step"]},a="Jira Comment",c={id:"workflows/common-workflow-steps/jira-comment",title:"Jira Comment",description:"Explore Jira Comment, a tool for efficient project management and issue tracking. Enhance your workflow with Appcircle's integration.",source:"@site/docs/workflows/common-workflow-steps/jira-comment.md",sourceDirName:"workflows/common-workflow-steps",slug:"/workflows/common-workflow-steps/jira-comment",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/jira-comment",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/common-workflow-steps/jira-comment.md",tags:[{label:"jira",permalink:"/nextjs-upload-file-tryout/tags/jira"},{label:"workflow",permalink:"/nextjs-upload-file-tryout/tags/workflow"},{label:"issue tracking",permalink:"/nextjs-upload-file-tryout/tags/issue-tracking"},{label:"step",permalink:"/nextjs-upload-file-tryout/tags/step"}],version:"current",frontMatter:{title:"Jira Comment",description:"Explore Jira Comment, a tool for efficient project management and issue tracking. Enhance your workflow with Appcircle's integration.",tags:["jira","workflow","issue tracking","step"]},sidebar:"mySidebar",previous:{title:"Git Clone",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/git-clone"},next:{title:"Maestro Cloud Upload",permalink:"/nextjs-upload-file-tryout/workflows/common-workflow-steps/maestro-cloud-upload"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration of Jira Comment",id:"configuration-of-jira-comment",level:2},{value:"Jira REST API Version Reference",id:"jira-rest-api-version-reference",level:3},{value:"Changing Template",id:"changing-template",level:3},{value:"Input Variables",id:"input-variables",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{ExternalUrlRef:i}=r;return i||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"jira-comment",children:"Jira Comment"}),"\n",(0,t.jsx)(r.p,{children:"Jira is a software development tool used for issue tracking, project management, and agile software development. It allows users to plan, track, and release software projects. Jira's core functionality includes the ability to create and assign tasks, track progress and status, and collaborate with team members."}),"\n",(0,t.jsxs)(r.p,{children:["By adding Appcircle's ",(0,t.jsx)(r.a,{href:"https://github.com/appcircleio/appcircle-jira-component/",children:(0,t.jsx)(r.strong,{children:"Jira Comment"})})," component to your workflow, you can add comments or change their status according to your workflow."]}),"\n",(0,t.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/jira-component1.png"}),"\n",(0,t.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(r.p,{children:"There is no mandatory sequence for the use of this component. It depends on your business decision which step to use before or after in your workflow."}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["Please note that once the ",(0,t.jsx)(r.strong,{children:"Jira Comment"})," has run successfully, the status of the relevant article in your Jira account will be changed. If the build fails in Appcircle, an incorrect status may appear in your Jira account. Make sure you use it in the correct order in Workflow."]})}),"\n",(0,t.jsxs)(r.admonition,{type:"danger",children:[(0,t.jsxs)(r.p,{children:["To ensure that the ",(0,t.jsx)(r.strong,{children:"Jira Comment"})," step runs even if your workflow fails, please enable the ",(0,t.jsx)(r.code,{children:"Always run this step even if the previous steps fail"})," switch."]}),(0,t.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/BE3199-jiraPrerequisites.png"})]}),"\n",(0,t.jsx)(r.h2,{id:"configuration-of-jira-comment",children:"Configuration of Jira Comment"}),"\n",(0,t.jsxs)(r.p,{children:["To add a comment, the issue ID must be supplied to the component. We need to get this issue ID dynamically so that our workflow can work for multiple branches. Appcircle components use environment variables to pass the state. We can add a step just before the ",(0,t.jsx)(r.strong,{children:"Jira Comment"})," to prepare the necessary environment variables."]}),"\n",(0,t.jsxs)(r.p,{children:["For example, you're working on a feature branch called ",(0,t.jsx)(r.code,{children:"feature/jiraissue-1"}),". You may use the below Ruby script to get\xa0",(0,t.jsx)(r.code,{children:"jiraissue-1"}),"\xa0from the branch name and use this information with the ",(0,t.jsx)(r.strong,{children:"Jira Comment"}),". Please see the ",(0,t.jsx)(r.a,{href:"/workflows/common-workflow-steps/custom-script",children:(0,t.jsx)(r.strong,{children:"Custom Script documentation"})})," for this implementation."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ruby",children:"branch = ENV['AC_GIT_BRANCH']\nfeature_name = branch.split('/')[1].upcase\nputs feature_name\n\n# Write Environment Variable\nopen(ENV['AC_ENV_FILE_PATH'], 'a') { |f|\n    f.puts \"AC_JIRA_ISSUE=#{feature_name}\"\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"jira-rest-api-version-reference",children:"Jira REST API Version Reference"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Jira Comment"})," input types depend on the ",(0,t.jsx)(r.a,{href:"https://developer.atlassian.com/server/jira/platform/rest-apis/#uri-structure",children:"Jira REST API version"}),". Therefore, you can select the appropriate Jira REST API version from the component version selection list. Here's how:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["For ",(0,t.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#version",children:"Jira REST API version 2"}),": This version can be used by both Jira On-Prem and Jira Cloud users. Choose ",(0,t.jsx)(r.code,{children:"2.*.*"})," from the selection list."]}),"\n",(0,t.jsxs)(r.li,{children:["For ",(0,t.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#version",children:"Jira REST API version 3"}),": This version can only be used by Jira Cloud users. Choose ",(0,t.jsx)(r.code,{children:"3.*.*"})," from the selection list."]}),"\n"]}),"\n",(0,t.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/BE3199-jiraAPIVersion.png"}),"\n",(0,t.jsx)(r.h3,{id:"changing-template",children:"Changing Template"}),"\n",(0,t.jsx)(r.p,{children:"Appcircle provides a default template that adds commit id, branch name, time in UTC, and a couple of environment variables. The structure of the Jira comment template depends on the version of the Jira REST API you're utilizing."}),"\n",(0,t.jsxs)(r.p,{children:["If you're utilizing ",(0,t.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-issue-comments/#api-rest-api-2-issue-issueidorkey-comment-post",children:"API version 2"}),", commenting is limited to string type only. On the other hand, for ",(0,t.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-post",children:"Jira API version 3"}),", you have the flexibility to send comments in any format using the Atlassian Document Format (ADF). To create custom comments for version 3, you can leverage tools like the ",(0,t.jsx)(r.a,{href:"https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/",children:"ADF Builder"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"input-variables",children:"Input Variables"}),"\n",(0,t.jsx)(r.p,{children:"There are some necessary parameters for this stepper to work properly. These parameters are given in the table below with their descriptions."}),"\n",(0,t.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/BE3199-jiraInput.png"}),"\n",(0,t.jsx)(r.admonition,{type:"danger",children:(0,t.jsxs)(r.p,{children:["Confidential information should be entered as a ",(0,t.jsx)(r.a,{href:"/environment-variables/managing-variables#adding-key-and-text-based-value-pairs",children:"secret environment variable"}),". Also, ensure that the ",(0,t.jsx)(r.a,{href:"/environment-variables/managing-variables#using-environment-variable-groups-in-builds",children:"environment variable group"})," is selected in the ",(0,t.jsx)(r.a,{href:"/build/build-process-management/build-profile-configuration/",children:"configuration"}),"."]})}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsx)(r.p,{children:"The required inputs for authorization vary based on the type of Jira instance (On-Prem or Cloud). Below is a summary of the required inputs:"}),(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.strong,{children:["For ",(0,t.jsx)(r.a,{href:"https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html",children:"Jira On-Prem"})," Users:"]})}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"AC_JIRA_EMAIL"}),": Not required"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"AC_JIRA_TOKEN"}),": Not required"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"AC_JIRA_PAT"}),": Required"]}),"\n"]}),(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.strong,{children:["For ",(0,t.jsx)(r.a,{href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/",children:"Jira Cloud"})," Users:"]})}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"AC_JIRA_EMAIL"}),": Required"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"AC_JIRA_TOKEN"}),": Required"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"AC_JIRA_PAT"}),": Not required"]}),"\n"]})]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Variable Name"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Status"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"$AC_JIRA_HOST"})}),(0,t.jsxs)(r.td,{children:["Your Jira subdomain. For example: ",(0,t.jsx)(r.code,{children:"mysubdomain.atlassian.net"})]}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"$AC_JIRA_EMAIL"})}),(0,t.jsx)(r.td,{children:"The email associated with your Jira account. This field is required for using API tokens instead of PAT."}),(0,t.jsx)(r.td,{children:"Optional"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"$AC_JIRA_TOKEN"})}),(0,t.jsxs)(r.td,{children:["User's API Token. If this value is fill, the Jira e-mail field must be filled. Only Jira Cloud users can use API Token. You can create token from ",(0,t.jsx)(r.a,{href:"https://id.atlassian.com/manage-profile/security/api-tokens",children:"here"})]}),(0,t.jsx)(r.td,{children:"Optional"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"$AC_JIRA_PAT"})}),(0,t.jsx)(r.td,{children:"Specify the Personal Access Token for Jira authentication. Only Jira On-Prem users can use PAT."}),(0,t.jsx)(r.td,{children:"Optional"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"$AC_JIRA_ISSUE"})}),(0,t.jsxs)(r.td,{children:["The ID or key of the issue. Refer to the ",(0,t.jsx)(r.a,{href:"https://docs.appcircle.io/integrations/jira-integration",children:"documentation"})," for instructions on extracting this information from branch names or commit messages."]}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"$AC_JIRA_FAIL_TRANSITION"})}),(0,t.jsxs)(r.td,{children:["Transition ID or name for the failed step. Optionally change the status of your issue if the previous state fails. Ensure that the ",(0,t.jsx)(r.code,{children:"Always run this step even if the previous steps fail"})," switch is enabled for this feature to work."]}),(0,t.jsx)(r.td,{children:"Optional"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"$AC_JIRA_SUCCESS_TRANSITION"})}),(0,t.jsx)(r.td,{children:"Transition ID or name for the successful step. Optionally change the status of your issue if the previous state succeeds."}),(0,t.jsx)(r.td,{children:"Optional"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"$AC_JIRA_TEMPLATE_V2"})}),(0,t.jsxs)(r.td,{children:["The comment template used to post a comment if ",(0,t.jsx)(r.a,{href:"#jira-rest-api-version-reference",children:"Jira REST API Version 2"})," is selected. Variables prefixed with ",(0,t.jsx)(r.code,{children:"$"})," will be replaced during the build process. Refer to ",(0,t.jsx)(r.a,{href:"#changing-template",children:"this header"})," to modify the template."]}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"$AC_JIRA_TEMPLATE_V3"})}),(0,t.jsxs)(r.td,{children:["The comment template used to post a comment if ",(0,t.jsx)(r.a,{href:"#jira-rest-api-version-reference",children:"Jira REST API Version 3"})," is selected. Variables prefixed with ",(0,t.jsx)(r.code,{children:"$"})," will be replaced during the build process. Refer to ",(0,t.jsx)(r.a,{href:"#changing-template",children:"this header"})," to modify the template."]}),(0,t.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/appcircleio/appcircle-jira-component",children:(0,t.jsx)(i,{url:"https://github.com/appcircleio/appcircle-jira-component",title:"GitHub - appcircleio/appcircle-jira-component",description:"Contribute to appcircleio/appcircle-jira-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/32d9923b0213a14e09ca821fc941c56d5394181284962f7f1455bcf06521e6f1/appcircleio/appcircle-jira-component"})})})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},69678:(e,r,i)=>{i.d(r,{A:()=>n});i(96540);var t=i(74848);function n(e){let{url:r}=e;return(0,t.jsx)("img",{className:"screenshot",src:r})}},28453:(e,r,i)=>{i.d(r,{R:()=>o,x:()=>a});var t=i(96540);const n={},s=t.createContext(n);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);