"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[10937],{38839:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=o(74848),s=o(28453),n=o(69678),i=o(11470),a=o(19365);const l={title:"What are Workflows and How to Use Workflows?",description:"Understand workflows in Appcircle. Learn how to use them for building, testing, and deploying your applications.",tags:["workflow","step","build","test","deploy"],sidebar_position:1},c="What are Workflows and How to Use Them?",u={id:"workflows/index",title:"What are Workflows and How to Use Workflows?",description:"Understand workflows in Appcircle. Learn how to use them for building, testing, and deploying your applications.",source:"@site/docs/workflows/index.md",sourceDirName:"workflows",slug:"/workflows/",permalink:"/workflows/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/index.md",tags:[{label:"workflow",permalink:"/tags/workflow"},{label:"step",permalink:"/tags/step"},{label:"build",permalink:"/tags/build"},{label:"test",permalink:"/tags/test"},{label:"deploy",permalink:"/tags/deploy"}],version:"current",sidebarPosition:1,frontMatter:{title:"What are Workflows and How to Use Workflows?",description:"Understand workflows in Appcircle. Learn how to use them for building, testing, and deploying your applications.",tags:["workflow","step","build","test","deploy"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Build History",permalink:"/build/build-history"},next:{title:"Common Workflow Steps",permalink:"/workflows/common-workflow-steps/"}},d={},p=[{value:"Setting Up Workflows",id:"setting-up-workflows",level:3},{value:"Workflow Steps",id:"workflow-steps",level:3},{value:"Workflow Marketplace",id:"workflow-marketplace",level:3},{value:"Editing Workflow Settings",id:"editing-workflow-settings",level:3},{value:"Build Warning Status",id:"build-warning-status",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{ExternalUrlRef:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"what-are-workflows-and-how-to-use-them",children:"What are Workflows and How to Use Them?"}),"\n",(0,r.jsxs)(i.A,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Android",value:"android"},{label:"React Native",value:"reactnative"},{label:"Flutter",value:"flutter"}],children:[(0,r.jsx)(a.A,{value:"ios",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/WOQedZ15z6s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),(0,r.jsx)(a.A,{value:"android",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FcZv2cCnGFA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),(0,r.jsx)(a.A,{value:"reactnative",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bo0fWk9cATA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),(0,r.jsx)(a.A,{value:"flutter",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/vKFfNvJvRDs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]}),"\n",(0,r.jsx)(t.p,{children:"A workflow is a ladder of steps taken to build your applications."}),"\n",(0,r.jsx)(t.p,{children:"Each step has a different purpose and the workflow can be customized by modifying step parameters and inputs, running custom scripts, or re-ordering steps."}),"\n",(0,r.jsx)(t.p,{children:"Workflows allow you to have complete control on your build process and enhance it with third-party services and features."}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"Please note that modifying workflow steps may cause your builds to fail, so utmost care is recommended when editing workflows."})}),"\n",(0,r.jsx)(t.h3,{id:"setting-up-workflows",children:"Setting Up Workflows"}),"\n",(0,r.jsx)(t.p,{children:"To access the workflow editor for a build profile, click the Workflows button in the context menu of the build profile, accessible from the top of the profile details."}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/image (181).png"}),"\n",(0,r.jsxs)(t.p,{children:["The workflow list will be displayed. To view the ",(0,r.jsx)(t.a,{href:"#workflow-steps",children:"Workflow Steps"})," of a workflow, click on it from the workflow list."]}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/image (197).png"}),"\n",(0,r.jsx)(t.p,{children:'To create a new workflow, press the "New" button at the top of the workflow list and select a template from the default workflows. Then edit the workflow name and press enter. You can also upload your workflow as a YAML file.'}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/workflow-create-edit.png"}),"\n",(0,r.jsx)(t.p,{children:'To rename/delete a current workflow, press the "Edit" button at the top of the workflow list and then click on the context menu that appears next to the workflow items.'}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/image (183).png"}),"\n",(0,r.jsxs)(t.p,{children:['You can use the "Clone" option to create a new workflow based on the currently available ones. You can ',(0,r.jsx)(t.a,{href:"/build/build-process-management/build-manually-or-with-triggers",children:"select different workflows for different build scenarios"})," (e.g. separate workflows for production and development)."]}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/image (184).png"}),"\n",(0,r.jsx)(t.h3,{id:"workflow-steps",children:"Workflow Steps"}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/workflow-ios-showcase.png"}),"\n",(0,r.jsx)(t.p,{children:"Appcircle will build your application with the steps defined in the workflow. Steps will be executed in order from the top to the bottom."}),"\n",(0,r.jsx)(t.p,{children:"You can customize each step for specific configurations with your application structure. Step parameters can be modified, outputs of each step can be used in another step and step versions can be selected accordingly."}),"\n",(0,r.jsx)(t.h3,{id:"workflow-marketplace",children:"Workflow Marketplace"}),"\n",(0,r.jsx)(t.p,{children:"Appcircle's powerful Workflow Editor has a built-in Workflow Marketplace that allows you to select and insert an unlimited amount of steps to your workflow."}),"\n",(0,r.jsx)(t.p,{children:"You can find the full list of available workflow steps in our workflow marketplace at:;"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://www.appcircle.io/integrations/",children:(0,r.jsx)(o,{url:"https://www.appcircle.io/integrations/",title:"Streamline Your Workflow with Appcircle Integrations",description:"50+ Steps for all your mobile development needs. Drag and Drop configuration for build, test, distribute, upload and more.",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})}),"\n",(0,r.jsxs)(t.p,{children:["You can add platform-specific workflow steps, custom scripts, and other steps into your workflow and re-order them as you like. You can also remove the steps you don't need. You can backup your current workflow by clicking the ",(0,r.jsx)(t.strong,{children:"Download YAML"})," button at the bottom."]}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/workflow-ios-download-yaml-showcase.png"}),"\n",(0,r.jsxs)(t.p,{children:["To access the Workflow Marketplace, click on the ",(0,r.jsx)(t.strong,{children:"Manage Workflow"})," button. You will see the Workflow Marketplace on the right and your Workflow steps on the left."]}),"\n",(0,r.jsx)(t.p,{children:"You can now drag and drop steps into your workflow. Any unwanted workflow steps can be removed by clicking on the delete button on the right side of each step."}),"\n",(0,r.jsx)(t.p,{children:"You can also reorder steps so that they will be executed in the order you specify."}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/08-08-WF_Reorder.gif"}),"\n",(0,r.jsx)(t.h3,{id:""}),"\n",(0,r.jsx)(t.h3,{id:"editing-workflow-settings",children:"Editing Workflow Settings"}),"\n",(0,r.jsx)(t.p,{children:"Each workflow step has its own set of configuration options, which can be set by clicking on the step in the workflow screen."}),"\n",(0,r.jsx)(t.p,{children:"The first three items are common for all steps and they are set individually for each step:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step Execution Active:"})," To enable/disable the step execution without removing it from the workflow"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Continue with the next step even if this step fails:"})," If a step is optional or its result should not cause a build error, you can select this option to continue the workflow if this particular step fails. In default workflows, this option is ",(0,r.jsx)(t.code,{children:"on"}),' for specific steps. And since this step is active, the build status will appear as "Warning" when other steps in the build are successful. Detailed explanation about this state is given in the ',(0,r.jsx)(t.a,{href:"#build-warning-status",children:"Build Warning Status"})," section."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Workflow Step Version:"})," You can select a specific version of a step with which to execute your build. If you select a version with an asterisk (*), you will receive the minor updates to the workflow step automatically. The major versions may include added or removed input fields and manual version selection is required for major version updates.;"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:'The items in the "Inputs" section are specific to that step. The reserved environment variables are assigned to these fields by default and the values of these variables are set in the build configuration.'}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/image (187).png"}),"\n",(0,r.jsx)(t.h4,{id:"build-warning-status",children:"Build Warning Status"}),"\n",(0,r.jsx)(t.p,{children:'When we start a build, if we have activated the "Continue with the next step even if this step fails" setting for a component we use in the workflow and this step fails during the build, Appcircle will show the build status as "Warning" if the build is completed successfully for other steps.'}),"\n",(0,r.jsx)(t.p,{children:"In order to simulate the warning state and see its results on the pipeline, we can basically write a script that will fail in Custom Script."}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/status-warning-1.png"}),"\n",(0,r.jsxs)(t.p,{children:['"Continue with the next step even if this step fails" must be ',(0,r.jsx)(t.code,{children:"on"})," in this case."]}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/status-warning-2.png"}),"\n",(0,r.jsx)(t.p,{children:"We are starting a build, and we see that it fails in the pipeline."}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/status-warning-3.png"}),"\n",(0,r.jsx)(t.p,{children:'And the build status will now appear as "Warning".'}),"\n",(0,r.jsx)(n.A,{url:"https://cdn.appcircle.io/docs/assets/status-warning-4.png"})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,o)=>{o.d(t,{A:()=>i});o(96540);var r=o(18215);const s={tabItem:"tabItem_Ymn6"};var n=o(74848);function i(e){let{children:t,hidden:o,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:o,children:t})}},11470:(e,t,o)=>{o.d(t,{A:()=>y});var r=o(96540),s=o(18215),n=o(23104),i=o(56347),a=o(205),l=o(57485),c=o(31682),u=o(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:o}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:o,attributes:r,default:s}}=e;return{value:t,label:o,attributes:r,default:s}}))}(o);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function h(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:o}=e;const s=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,l.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function w(e){const{defaultValue:t,queryString:o=!1,groupId:s}=e,n=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=o.find((e=>e.default))??o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[c,d]=f({queryString:o,groupId:s}),[w,m]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,u.Dv)(o);return[s,(0,r.useCallback)((e=>{o&&n.set(e)}),[o,n])]}({groupId:s}),b=(()=>{const e=c??w;return h({value:e,tabValues:n})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,n]),tabValues:n}}var m=o(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=o(74848);function k(e){let{className:t,block:o,selectedValue:r,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),u=e=>{const t=e.currentTarget,o=l.indexOf(t),s=a[o].value;s!==r&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;t=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;t=l[o]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":o},t),children:a.map((e=>{let{value:t,label:o,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...n,className:(0,s.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":r===t}),children:o??t},t)}))})}function x(e){let{lazy:t,children:o,selectedValue:s}=e;const n=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=w(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,g.jsx)(k,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function y(e){const t=(0,m.A)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(t))}},69678:(e,t,o)=>{o.d(t,{A:()=>s});o(96540);var r=o(74848);function s(e){let{url:t}=e;return(0,r.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var r=o(96540);const s={},n=r.createContext(s);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);