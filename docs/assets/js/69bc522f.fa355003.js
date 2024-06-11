"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[21380],{89842:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(74848),r=t(28453),n=t(69678);const a={title:"Get Approval via Email",description:"Learn how to Get Approval via Email in Publish",tags:["publish","email publish","approve"],sidebar_position:1},o="Get Approval via Email",l={id:"publish-integrations/common-publish-integrations/get-approval-via-email",title:"Get Approval via Email",description:"Learn how to Get Approval via Email in Publish",source:"@site/docs/publish-integrations/common-publish-integrations/get-approval-via-email.md",sourceDirName:"publish-integrations/common-publish-integrations",slug:"/publish-integrations/common-publish-integrations/get-approval-via-email",permalink:"/publish-integrations/common-publish-integrations/get-approval-via-email",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/publish-integrations/common-publish-integrations/get-approval-via-email.md",tags:[{label:"publish",permalink:"/tags/publish"},{label:"email publish",permalink:"/tags/email-publish"},{label:"approve",permalink:"/tags/approve"}],version:"current",sidebarPosition:1,frontMatter:{title:"Get Approval via Email",description:"Learn how to Get Approval via Email in Publish",tags:["publish","email publish","approve"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Common Integrations Overview",permalink:"/publish-integrations/common-publish-integrations/"},next:{title:"Publish to Microsoft Intune",permalink:"/publish-integrations/common-publish-integrations/send-to-microsoft-intune"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"get-approval-via-email",children:"Get Approval via Email"}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/common-publish-worflow-email-approval-overview.png"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:"Get Approval via Email"})," step allows you to get approval from the email addresses entered as input in the step before moving on to the next steps in Publish."]}),"\n",(0,s.jsx)(i.p,{children:"Based on your business requirements, you can designate certain email addresses to require approval, specify others as optional approvers, or set a minimum number of approvals needed from the provided email addresses."}),"\n",(0,s.jsxs)(i.p,{children:["If some optional users reject the request but there is still a chance to achieve the minimum approval count, the step will remain in ",(0,s.jsx)(i.code,{children:"Waiting"})," status, awaiting responses from other users. For instance, if you set the minimum approval count to 3, and out of 10 users, only one is required, the step can still succeed. Even if 7 optional users reject, approval can still be obtained from the remaining 3 users. However, if 8 optional users reject, the step will fail, as it will no longer be possible to meet the minimum requirement of 3 approvals."]}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/common-publishflow-components-approval-email-1.png"}),"\n",(0,s.jsxs)(i.admonition,{type:"info",children:[(0,s.jsx)(i.p,{children:'Once a user makes a decision, it cannot be changed unless the step is restarted, even if the user sees the "Thank you" page. The step must be restarted to allow the user to make a new decision.'}),(0,s.jsxs)(i.p,{children:["Upon restarting or initiating the step, it resets all answers to ",(0,s.jsx)(i.code,{children:"Waiting"}),". Users must then provide their answers again and will receive new approval emails."]})]}),"\n",(0,s.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(i.p,{children:["There are no required steps that must precede the ",(0,s.jsx)(i.strong,{children:"Get Approval via Email"})," step. However, please note that any steps executed before the ",(0,s.jsx)(i.strong,{children:"Get Approval via Email"})," step in the ",(0,s.jsx)(i.a,{href:"/publish-module/publish-flow",children:"Publish flow"})," will not be impacted by the approval process. The approval logic will only affect the steps that follow the ",(0,s.jsx)(i.strong,{children:"Get Approval via Email"})," step."]}),"\n",(0,s.jsx)(i.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(i.p,{children:"The parameters required for this step to work as expected are listed below:"}),"\n",(0,s.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/common-publishflow-components-approval-email.png"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Variable Name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Status"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_APPROVAL_EMAILS"})}),(0,s.jsxs)(i.td,{children:["The ",(0,s.jsx)(i.strong,{children:"All Required Approval Emails"})," specify the required email addresses, separated by commas, to which special approve and reject links will be sent. All email addresses in this field must be approved for this step to be successful. If one of the required users rejects it, the step will fail. The count of emails cannot be less than the ",(0,s.jsx)(i.strong,{children:"Minimum Required Approval Count"}),"."]}),(0,s.jsx)(i.td,{children:"Optional"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_OPTIONAL_APPROVAL_EMAILS"})}),(0,s.jsxs)(i.td,{children:["The ",(0,s.jsx)(i.strong,{children:"Optional Required Approval Emails"})," specify optional email addresses, separated by commas, to which special approve and reject links will be sent. Optional approval emails may need to be approved if the ",(0,s.jsx)(i.strong,{children:"Minimum Required Approval Count"})," is lower than the count of ",(0,s.jsx)(i.strong,{children:"All Required Approval Emails"}),"."]}),(0,s.jsx)(i.td,{children:"Optional"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"$AC_MINIMUM_APPROVAL_COUNT"})}),(0,s.jsxs)(i.td,{children:["The ",(0,s.jsx)(i.strong,{children:"Minimum Required Approval Count"})," specify the minimum number of required email approvals. The total of required and optional email approvals must be equal to or greater than this number. The step will not succeed unless the minimum number of approvals is fulfilled."]}),(0,s.jsx)(i.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsxs)(i.p,{children:["If the ",(0,s.jsx)(i.strong,{children:"Minimum Required Approval Count"})," cannot be achieved, the step will fail. For example, if the ",(0,s.jsx)(i.strong,{children:"Minimum Required Approval Count"})," is set to 3 and there are a total of 3 users, if one of them rejects, the minimum count cannot be met because only 2 users with approval rights remain."]})}),"\n",(0,s.jsx)(i.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Get Approval via Email"})," step does not produce any output, but the success or failure of the step depends on the approvals or rejections received from the sent emails. This outcome affects the subsequent steps in the ",(0,s.jsx)(i.a,{href:"/publish-module/publish-flow",children:"Publish flow"}),"."]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-publish-email-send.git",children:(0,s.jsx)(t,{url:"https://github.com/appcircleio/appcircle-publish-email-send.git",title:"GitHub - appcircleio/appcircle-publish-email-send: Send approval emails for the flow",description:"Send approval emails for the flow. Contribute to appcircleio/appcircle-publish-email-send development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/61c22e8dfdb9c8dc387fccf54e990a38f4b5749ebcc426415c8643325c9ddccf/appcircleio/appcircle-publish-email-send"})})})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},69678:(e,i,t)=>{t.d(i,{A:()=>r});t(96540);var s=t(74848);function r(e){let{url:i}=e;return(0,s.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var s=t(96540);const r={},n=s.createContext(r);function a(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);