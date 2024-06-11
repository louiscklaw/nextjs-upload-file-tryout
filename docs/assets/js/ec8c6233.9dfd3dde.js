"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[79066],{49782:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=n(74848),s=n(28453),t=n(69678);const i={title:"Managing Pools",description:"Learn how to manage self-hosted pools in Appcircle",tags:["self-hosted runner","self-hosted pool","pool management"],sidebar_position:1},r=void 0,a={id:"self-hosted-appcircle/self-hosted-runner/configure-runner/manage-pools",title:"Managing Pools",description:"Learn how to manage self-hosted pools in Appcircle",source:"@site/docs/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-pools.md",sourceDirName:"self-hosted-appcircle/self-hosted-runner/configure-runner",slug:"/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-pools",permalink:"/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-pools",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-pools.md",tags:[{label:"self-hosted runner",permalink:"/tags/self-hosted-runner"},{label:"self-hosted pool",permalink:"/tags/self-hosted-pool"},{label:"pool management",permalink:"/tags/pool-management"}],version:"current",sidebarPosition:1,frontMatter:{title:"Managing Pools",description:"Learn how to manage self-hosted pools in Appcircle",tags:["self-hosted runner","self-hosted pool","pool management"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Configure Runner",permalink:"/self-hosted-appcircle/self-hosted-runner/configure-runner/"},next:{title:"Managing Runners",permalink:"/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-runners"}},d={},c=[{value:"Monitoring Self-hosted Pools",id:"monitoring-self-hosted-pools",level:3},{value:"Select Pool for Build Profile",id:"select-pool-for-build-profile",level:3},{value:"Pool-Based Xcode Version Selection",id:"pool-based-xcode-version-selection",level:4},{value:"Delete Self-hosted Pool",id:"delete-self-hosted-pool",level:3}];function p(e){const o={admonition:"admonition",h3:"h3",h4:"h4",p:"p",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.h3,{id:"monitoring-self-hosted-pools",children:"Monitoring Self-hosted Pools"}),"\n",(0,l.jsx)(o.p,{children:'When you add a new self-hosted runner to your organization, it appears at "Self-hosted Runners" list with its pool.'}),"\n",(0,l.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/self-hosted-runner-runners-selected-runner-01.png"}),"\n",(0,l.jsx)(o.p,{children:"Pool creation is managed automatically while registering a self-hosted runner from CLI."}),"\n",(0,l.jsx)(o.p,{children:"If a pool doesn't exist in your organization, system creates that pool and adds runner into that pool. If you choose a pool name existing in organization, your runner will be added to that existing pool."}),"\n",(0,l.jsx)(o.h3,{id:"select-pool-for-build-profile",children:"Select Pool for Build Profile"}),"\n",(0,l.jsx)(o.p,{children:'Self-hosted pools are visible as a list in "Build Profiles". Open your app\'s build profile, click on "Config" button and you will find pools at "Config" tab in build profile settings.'}),"\n",(0,l.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/self-hosted-runner-config-pool-list-01.png"}),"\n",(0,l.jsx)(o.p,{children:'If you don\'t have any self-hosted pool yet, list will have only "Default" pool which is Appcircle cloud.'}),"\n",(0,l.jsx)(o.p,{children:"You can choose your self-hosted pools or Appcircle cloud anytime you want and switch between them according to your needs."}),"\n",(0,l.jsxs)(o.admonition,{type:"danger",children:[(0,l.jsx)(o.p,{children:"Keep in mind that, pool selection is important for build pipeline success. Your self-hosted runners in that pool should have required capabilities for the selected build profile."}),(0,l.jsx)(o.p,{children:"For example, if your pool has only android tools configured in its runners, you can't build an iOS app in that pool. Or if you have runners with only Xcode 13.3 in your pool, your Xcode 13.4 selected build profile won't be executed in that pool."})]}),"\n",(0,l.jsxs)(o.admonition,{type:"info",children:[(0,l.jsx)(o.p,{children:"You can not define or select specific self-hosted runner in a pool. When a build job enters queue, it will be selected by any of the runner in that pool. So, as a best practice, try to organize your pool homogeneously."}),(0,l.jsx)(o.p,{children:"Pools should have runners which have similar tools and capabilities. Machine architecture (arm64, x86_64) can also be taken into account when organizing self-hosted pools."})]}),"\n",(0,l.jsx)(o.admonition,{type:"info",children:(0,l.jsx)(o.p,{children:"Changing runner pool doesn't affect current running builds on pool. It will affect next build job after change."})}),"\n",(0,l.jsx)(o.h4,{id:"pool-based-xcode-version-selection",children:"Pool-Based Xcode Version Selection"}),"\n",(0,l.jsx)(o.p,{children:"When self-hosted runners connect, they provide the build platform information they can receive builds for, along with any available Xcode versions. In the self-hosted collection, this information is updated and maintained. The goal is to allow the selection of an Xcode version specific to the runner during the build process instead of using the default Xcode."}),"\n",(0,l.jsx)(o.p,{children:"If we are working with multiple machines on the iOS side, we can now define Xcode versions specific to the runner pool."}),"\n",(0,l.jsx)(o.p,{children:"Accordingly, you can make specific pool selections and set your configurations."}),"\n",(0,l.jsx)("b",{children:"Example Macpool 1:"}),"\n",(0,l.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/macpool1.png"}),"\n",(0,l.jsx)("b",{children:" Example Macpool 2:"}),"\n",(0,l.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/macpool2.png"}),"\n",(0,l.jsx)(o.h3,{id:"delete-self-hosted-pool",children:"Delete Self-hosted Pool"}),"\n",(0,l.jsx)(o.p,{children:"Pool removal is managed automatically while removing or moving runner. If you remove a self-hosted runner and its pool doesn't have any other runners in that pool, then empty pool is deleted automatically and you won't see it in self-hosted runners list or build profile config tab. Same behavior happens when you move a self-hosted runner from one pool to another."}),"\n",(0,l.jsx)(o.p,{children:'If you want to remove pool manually or remove group of runners with pool removal, click on pool name at "Self-hosted Runners" list and use "Delete" button at the bottom of pool details.'}),"\n",(0,l.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/self-hosted-runner-pool-detail-01.png"}),"\n",(0,l.jsx)(o.p,{children:"A confirmation dialog will be visible for your approval. Type pool name into textbox and click on delete."}),"\n",(0,l.jsx)(o.p,{children:'This action removes pool and its runners all together. Previously assigned build profiles will be mapped to "Default" pool and until you assign them to another self-hosted pool, their build jobs will be sent to Appcircle cloud.'}),"\n",(0,l.jsx)(o.admonition,{type:"info",children:(0,l.jsx)(o.p,{children:"Removing or deleting self-hosted pools doesn't affect running build jobs on that pool. On-going build jobs will be completed but that self-hosted pool won't get any new build job from queue."})})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},69678:(e,o,n)=>{n.d(o,{A:()=>s});n(96540);var l=n(74848);function s(e){let{url:o}=e;return(0,l.jsx)("img",{className:"screenshot",src:o})}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>r});var l=n(96540);const s={},t=l.createContext(s);function i(e){const o=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(t.Provider,{value:o},e.children)}}}]);