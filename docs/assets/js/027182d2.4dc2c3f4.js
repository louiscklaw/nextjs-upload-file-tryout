"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[79245],{25124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(74848),r=t(28453),s=t(69678);const o={title:"Set Environment Variable",description:"Set Environment Variable step sets environment value for given keys",tags:["set","environment","variable"]},a="Set Environment Variable",l={id:"workflows/common-workflow-steps/set-environment-variable",title:"Set Environment Variable",description:"Set Environment Variable step sets environment value for given keys",source:"@site/docs/workflows/common-workflow-steps/set-environment-variable.md",sourceDirName:"workflows/common-workflow-steps",slug:"/workflows/common-workflow-steps/set-environment-variable",permalink:"/workflows/common-workflow-steps/set-environment-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/common-workflow-steps/set-environment-variable.md",tags:[{label:"set",permalink:"/tags/set"},{label:"environment",permalink:"/tags/environment"},{label:"variable",permalink:"/tags/variable"}],version:"current",frontMatter:{title:"Set Environment Variable",description:"Set Environment Variable step sets environment value for given keys",tags:["set","environment","variable"]},sidebar:"mySidebar",previous:{title:"Repeato Test Runner",permalink:"/workflows/common-workflow-steps/repeato-test-runner"},next:{title:"Snyk Scan Security",permalink:"/workflows/common-workflow-steps/snyk-scan-security"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{ExternalUrlRef:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"set-environment-variable",children:"Set Environment Variable"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Set Environment Variable"})," step enables the setting of environment values for specified keys. Although creating environment variables via the ",(0,i.jsx)(n.a,{href:"/environment-variables/",children:"Environment Variables"})," page is typically recommended, this step provides flexibility to modify environment variables directly within the build workflow when necessary."]}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["There is no prerequisites step before the ",(0,i.jsx)(n.strong,{children:"Set Environment Variable"})," step. It can be implemented at any point within the workflow as necessary."]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["Please note that you must use the ",(0,i.jsx)(n.strong,{children:"Set Environment Variable"})," step before the step in which you intend to use the environment variable."]})}),"\n",(0,i.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/set-environment-variable_1.png"}),"\n",(0,i.jsx)(n.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,i.jsxs)(n.p,{children:["Each component requires specific input variables for operation. For the ",(0,i.jsx)(n.strong,{children:"Set Environment Variable"})," step, the necessary input variables are:"]}),"\n",(0,i.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/set-environment-variable_2.png"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["Confidential information should be entered as a ",(0,i.jsx)(n.a,{href:"/environment-variables/managing-variables#adding-key-and-text-based-value-pairs",children:"secret environment variable"}),". Also, ensure that the ",(0,i.jsx)(n.a,{href:"/environment-variables/managing-variables#using-environment-variable-groups-in-builds",children:"environment variable group"})," is selected in the ",(0,i.jsx)(n.a,{href:"/build/build-process-management/build-profile-configuration/",children:"Configuration"}),"."]})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Variable Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Status"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"$AC_SETENV_KEYS"})}),(0,i.jsx)(n.td,{children:"Specifies the key of the environment variable to be set. This should be a space-separated list of environment variable keys."}),(0,i.jsx)(n.td,{children:"Required"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"$AC_SETENV_VALUE"})}),(0,i.jsxs)(n.td,{children:["Specifies the value of the environment variable to set. If this field is left blank, the environment variable will be set to ",(0,i.jsx)(n.code,{children:"null"}),"."]}),(0,i.jsx)(n.td,{children:"Optional"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Set Environment Variable"})," step generates no output variables. Success or failure of this step depends on whether the environment variable is set correctly, allowing subsequent use within the workflow."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/appcircleio/appcircle-setenvironment-component.git",children:(0,i.jsx)(t,{url:"https://github.com/appcircleio/appcircle-setenvironment-component.git",title:"GitHub - appcircleio/appcircle-setenvironment-component",description:"Contribute to appcircleio/appcircle-setenvironment-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/a3e1102c3f028fdabddf04d00e269c09e3458d3400a13926ae2235c8ea0e63aa/appcircleio/appcircle-setenvironment-component"})})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},69678:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var i=t(74848);function r(e){let{url:n}=e;return(0,i.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);