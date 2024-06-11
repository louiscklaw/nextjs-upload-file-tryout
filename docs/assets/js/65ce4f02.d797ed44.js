"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[36744],{25410:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=r(74848),s=r(28453),t=r(69678);const i={title:"Managing Runners",description:"Learn how to manage self-hosted runners in Appcircle",tags:["self-hosted runner","self-hosted pool","self-hosted runner management"],sidebar_position:2},l=void 0,a={id:"self-hosted-appcircle/self-hosted-runner/configure-runner/manage-runners",title:"Managing Runners",description:"Learn how to manage self-hosted runners in Appcircle",source:"@site/docs/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-runners.md",sourceDirName:"self-hosted-appcircle/self-hosted-runner/configure-runner",slug:"/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-runners",permalink:"/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-runners",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-runners.md",tags:[{label:"self-hosted runner",permalink:"/tags/self-hosted-runner"},{label:"self-hosted pool",permalink:"/tags/self-hosted-pool"},{label:"self-hosted runner management",permalink:"/tags/self-hosted-runner-management"}],version:"current",sidebarPosition:2,frontMatter:{title:"Managing Runners",description:"Learn how to manage self-hosted runners in Appcircle",tags:["self-hosted runner","self-hosted pool","self-hosted runner management"],sidebar_position:2},sidebar:"mySidebar",previous:{title:"Managing Pools",permalink:"/self-hosted-appcircle/self-hosted-runner/configure-runner/manage-pools"},next:{title:"Service Configuration",permalink:"/self-hosted-appcircle/self-hosted-runner/configure-runner/runner-service"}},d={},u=[{value:"Monitoring Self-hosted Runners",id:"monitoring-self-hosted-runners",level:3},{value:"Move Self-hosted Runner Between Pools",id:"move-self-hosted-runner-between-pools",level:3},{value:"Delete Self-hosted Runner",id:"delete-self-hosted-runner",level:3},{value:"Adding Xcode After Install",id:"adding-xcode-after-install",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"monitoring-self-hosted-runners",children:"Monitoring Self-hosted Runners"}),"\n",(0,o.jsxs)(n.p,{children:['When you add a new self-hosted runner to your organization, it appears at "Self-hosted Runners" list with ',(0,o.jsx)(n.code,{children:"Offline"})," state. You can see your runner in list with given name and pool from CLI."]}),"\n",(0,o.jsxs)(n.p,{children:["After configuring and starting runner service, it becomes ",(0,o.jsx)(n.code,{children:"Online"})," on list."]}),"\n",(0,o.jsx)(n.p,{children:"Self-hosted runners list has also other quick details which give your overview for your runners."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'"Version" is your self-hosted runner\'s version, you got from CLI.'}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./ac-runner --version\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'"Last Contact" shows when Appcircle cloud has last contact with your self-hosted runner.'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['"State" shows your self-hosted runner\'s current build status. For example, it can be ',(0,o.jsx)(n.code,{children:"idle"})," when runner is waiting for a build job and ",(0,o.jsx)(n.code,{children:"running"})," when it's executing build job."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/self-hosted-runner-runners-01.png"}),"\n",(0,o.jsxs)(n.p,{children:["You can ",(0,o.jsx)(n.strong,{children:"disable"})," self-hosted runner from list, using toggle button on right-hand side. When runner is disabled, it won't accept build job anymore. Disabling runner, doesn't affect currently running build pipeline on runner. It will complete its executing job. When complete, it won't take any new build job from queue until you ",(0,o.jsx)(n.strong,{children:"enable"})," it again. Using same toggle button you can enable self-hosted runner."]}),"\n",(0,o.jsx)(n.p,{children:"With quick enable/disable feature, you can remove self-hosted runner from pool temporarily and make some maintenance or debugging. When ready, you can add the self-hosted runner to pool again without any CLI operation."}),"\n",(0,o.jsxs)(n.admonition,{type:"danger",children:[(0,o.jsx)(n.p,{children:"Your pool should have at least one active (ready-to-build) runner for build pipeline continuity."}),(0,o.jsx)(n.p,{children:"If your pool is assigned to an active build profile but doesn't have any active runners, started build jobs from that profile will wait in queue until timeout."}),(0,o.jsx)(n.p,{children:"For this reason, you should think about your pool organization and build profile settings while removing or disabling self-hosted runners."})]}),"\n",(0,o.jsx)(n.h3,{id:"move-self-hosted-runner-between-pools",children:"Move Self-hosted Runner Between Pools"}),"\n",(0,o.jsx)(n.p,{children:"For some reason, you may need to move your runner from one pool to another. For this purpose, use below command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./ac-runner install -p ${Runner Pool}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Runner pool argument must be new target pool to move self-hosted runner."}),"\n",(0,o.jsx)(n.p,{children:"If there is no runner left in old pool, it will be deleted automatically and disappear from build profile pool selection list."}),"\n",(0,o.jsx)(n.p,{children:"If new target pool doesn't exist, it will be created automatically."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Moving self-hosted runner from one pool to another doesn't require service restart. Change will be activated immediately without any manual intervention."})}),"\n",(0,o.jsx)(n.h3,{id:"delete-self-hosted-runner",children:"Delete Self-hosted Runner"}),"\n",(0,o.jsx)(n.p,{children:"If you want to remove your self-hosted runner for any reason, click on runner name to open details view. Here you can see details of your runner. (its pool, create and update times etc.)"}),"\n",(0,o.jsx)(t.A,{url:"https://cdn.appcircle.io/docs/assets/self-hosted-runner-runner-detail-01.png"}),"\n",(0,o.jsx)(n.p,{children:"Click on delete button at the bottom of the page. A confirmation dialog will be visible for your approval. Type runner name into textbox and click on delete."}),"\n",(0,o.jsxs)(n.p,{children:["Deleting runner removes it from pool and it's unreachable from Appcircle cloud. If you want to add same runner again to the same pool or another pool, you need to register and configure it again. See, ",(0,o.jsx)(n.a,{href:"../installation",children:"add self-hosted runner"})," page for details."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Removing or deleting runner from pool doesn't affect running build job on that runner. On-going build job will be completed but that runner won't get any new build job from queue."})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If there is no runner left in self-hosted pool, it will be deleted automatically and disappear from build profile pool selection list."})}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["When a self-hosted pool is deleted from organization for any reason, its related build profiles will return to ",(0,o.jsx)(n.code,{children:"default"})," pool automatically which is Appcircle cloud. So, build jobs will go on with Appcircle-hosted runners automatically."]})}),"\n",(0,o.jsx)(n.h3,{id:"adding-xcode-after-install",children:"Adding Xcode After Install"}),"\n",(0,o.jsx)(n.p,{children:"You can add more Xcode versions side-by-side or more up-to-date Xcode any time after installation."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./ac-runner xcode -v ${Xcode Version}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Xcode version argument is similar to xcode argument on ",(0,o.jsx)(n.a,{href:"../installation#3-configure",children:"installation"}),". You can give one or more versions comma-separated."]}),"\n",(0,o.jsx)(n.p,{children:"For example, below command will install Xcode 13.1.x:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./ac-runner xcode -v 13.1\n"})}),"\n",(0,o.jsx)(n.p,{children:"For example, below command will install both Xcode 13.1.x and 12.5.x side-by-side:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./ac-runner xcode -v 13.1,12.5\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Adding Xcode to self-hosted runner doesn't require service restart. Newly added Xcode versions will be enabled immediately without any manual intervention."})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},69678:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var o=r(74848);function s(e){let{url:n}=e;return(0,o.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var o=r(96540);const s={},t=o.createContext(s);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);