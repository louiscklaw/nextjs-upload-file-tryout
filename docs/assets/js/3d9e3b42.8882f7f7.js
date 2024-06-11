"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[97537],{38841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(74848),i=t(28453),c=t(69678);const s={title:"Connection Management",description:"Learn how to manage connections in Appcircle",tags:["build","manage","connections"],sidebar_position:12},r=void 0,a={id:"build/manage-the-connections/reconnect-change-provider",title:"Connection Management",description:"Learn how to manage connections in Appcircle",source:"@site/docs/build/manage-the-connections/reconnect-change-provider.md",sourceDirName:"build/manage-the-connections",slug:"/build/manage-the-connections/reconnect-change-provider",permalink:"/nextjs-upload-file-tryout/build/manage-the-connections/reconnect-change-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/build/manage-the-connections/reconnect-change-provider.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"manage",permalink:"/nextjs-upload-file-tryout/tags/manage"},{label:"connections",permalink:"/nextjs-upload-file-tryout/tags/connections"}],version:"current",sidebarPosition:12,frontMatter:{title:"Connection Management",description:"Learn how to manage connections in Appcircle",tags:["build","manage","connections"],sidebar_position:12},sidebar:"mySidebar",previous:{title:"Accessing Internal Networks",permalink:"/nextjs-upload-file-tryout/build/manage-the-connections/accessing-repositories-in-internal-networks-firewalls"},next:{title:"Build Process Management",permalink:"/nextjs-upload-file-tryout/build/build-process-management/"}},l={},d=[{value:"Connection Settings",id:"connection-settings",level:2},{value:"OAuth Connection",id:"oauth-connection",level:3},{value:"PAT Connection",id:"pat-connection",level:3},{value:"Disconnect Build Profile",id:"disconnect-build-profile",level:2},{value:"Change Git Provider and Reconnect",id:"change-git-provider-and-reconnect",level:2},{value:"Change Owner",id:"change-owner",level:2}];function h(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"connection-settings",children:"Connection Settings"}),"\n",(0,o.jsxs)(n.p,{children:["You can see the connection details by clicking the ",(0,o.jsx)(n.strong,{children:'"Connection Settings"'})," button in the build profile."]}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/connections-new-main.png"}),"\n",(0,o.jsx)(n.p,{children:"Different types of connections have different connection details in the connection settings."}),"\n",(0,o.jsx)(n.h3,{id:"oauth-connection",children:"OAuth Connection"}),"\n",(0,o.jsxs)(n.p,{children:["For an OAuth connection, the details will be ",(0,o.jsx)(n.strong,{children:'"Provider"'}),", ",(0,o.jsx)(n.strong,{children:'"Token Owner"'}),", ",(0,o.jsx)(n.strong,{children:'"Code"'}),", ",(0,o.jsx)(n.strong,{children:'"Expire Access Token Date"'}),", ",(0,o.jsx)(n.strong,{children:'"Expire Refresh Token Date"'}),", ",(0,o.jsx)(n.strong,{children:'"Refresh Token"'}),", and ",(0,o.jsx)(n.strong,{children:'"Token"'}),"."]}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/connection-last-1n.png"}),"\n",(0,o.jsx)(n.h3,{id:"pat-connection",children:"PAT Connection"}),"\n",(0,o.jsxs)(n.p,{children:["For a PAT (personal access token) connection, the details will be ",(0,o.jsx)(n.strong,{children:'"Token Owner"'}),", and ",(0,o.jsx)(n.strong,{children:'"Personal Access Token"'}),"."]}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/connection-last-3n.png"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"In this section, you can view the PATs you have previously added, if any, and change them profile-specific."}),(0,o.jsx)(n.p,{children:"You only need to make sure that the modified token has the required authorizations for the relevant repository."})]}),"\n",(0,o.jsx)(n.h2,{id:"disconnect-build-profile",children:"Disconnect Build Profile"}),"\n",(0,o.jsxs)(n.p,{children:["You can disconnect the build profile from the Git provider by using the ",(0,o.jsx)(n.strong,{children:"Disconnect"})," button below."]}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/disconnect-1.png"}),"\n",(0,o.jsx)(n.p,{children:'When you click on the "Disconnect" button, Appcircle will bring up a warning dialog box for confirmation.'}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/disconnect-2.png"}),"\n",(0,o.jsxs)(n.p,{children:["When we open a disconnected build profile, Appcircle will bring us a popup to quickly ",(0,o.jsx)(n.strong,{children:"Reconnect"})," build the profile."]}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/disconnect-3.png"}),"\n",(0,o.jsx)(n.p,{children:'If you do not want to connect again at that moment, you can do it later by clicking the "Reconnect" button next to the "Connection Settings".'}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/reconnect-button.png"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"If you disconnect a build profile, only that build profile is disconnected from the Git provider."}),(0,o.jsx)(n.p,{children:"When you reconnect a build profile again, only the relevant build profile will be connected again."})]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["On the other hand, connection operations done from the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/build/manage-the-connections",children:"Connections"})})," page affect all relevant build profiles using those connections."]})}),"\n",(0,o.jsx)(n.h2,{id:"change-git-provider-and-reconnect",children:"Change Git Provider and Reconnect"}),"\n",(0,o.jsx)(n.p,{children:"Appcircle allows changing the Git provider while reconnecting a profile that has been disconnected."}),"\n",(0,o.jsx)(n.p,{children:'For example, assume that a build profile was previously connected to GitLab and then its Git repository had been moved to GitHub. In this case, you can select the new Git provider for that build profile by clicking the "Reconnect" button next to "Connection Settings".'}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/reconnect-button.png"}),"\n",(0,o.jsx)(n.p,{children:'Appcircle will display the Git providers and "Connect via SSH" connection options in a selectable list.'}),"\n",(0,o.jsx)(n.p,{children:'Here you can select the Git provider you want to change or the "Connect via SSH" method regardless of the Git provider.'}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/change-provider.png"}),"\n",(0,o.jsx)(n.p,{children:"Once the connection operations are completed, the Git provider redirects to the Appcircle build profile with the repository selection window."}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/repo-select.png"}),"\n",(0,o.jsx)(n.p,{children:'After you select the relevant Git repository and "Save", the build profile will be connected to the new Git provider.'}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/repo-success-c.png"}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:["After changing the Git provider and reconnecting the repository, you can use the existing branches that are also available in the new repository. When you try to ",(0,o.jsx)(n.strong,{children:"Start Build"}),' with these branches, you should see the up-to-date "Commit ID" from the new repository.']}),(0,o.jsx)(n.p,{children:"Unavailable branches from the old repository connection will be inactive. You can see them in the branch list, but Appcircle does not allow building with the branches that do not exist in the new repository. These kinds of branches will be unusable."})]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"While switching from one connection to another type of connection, the older connection method is not important."}),(0,o.jsx)(n.p,{children:"You can select one of the listed options and switch to that one without considering anything about the previous one."})]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"While changing the Git provider, your previous builds, tests, configurations, workflows, triggers and branch list will not be deleted."})}),"\n",(0,o.jsx)(n.h2,{id:"change-owner",children:"Change Owner"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"token owner"})," of a build profile can now be changed without the need to create a new build profile on Appcircle. The ",(0,o.jsx)(n.strong,{children:"Change Owner"})," button in the build profile ",(0,o.jsx)(n.strong,{children:"Connection"})," detail will help you change the connection ownership so that you can resolve the broken connections or misconfigured repository authorization cases easily by yourself."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["To use this feature, the user must have previously connected to the relevant Git provider on Appcircle via ",(0,o.jsx)(n.a,{href:"/build/manage-the-connections/#managing-oauth-connections",children:"OAuth"}),"."]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The build profile owners will not see the ",(0,o.jsx)(n.strong,{children:"Change Owner"})," button in the ",(0,o.jsx)(n.strong,{children:"Connection"})," detail for their build profiles."]})}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/owner-main.png"}),"\n",(0,o.jsxs)(n.p,{children:["When you browse the same build profile with a different member within the same organization, the ",(0,o.jsx)(n.strong,{children:"Change Owner"})," button will be visible in the window that's opened when we click on the ",(0,o.jsx)(n.strong,{children:"Connection Settings"})," button."]}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/owner-modal.png"}),"\n",(0,o.jsxs)(n.p,{children:["After clicking on the ",(0,o.jsx)(n.strong,{children:"Change Owner"})," button and giving approval on the confirmation screen that appears, the process of taking token ownership of the build profile connection will begin."]}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/owner-warning.png"}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:["The connection ownership change will be permitted for users who are in the same organization (team members) and have ",(0,o.jsx)(n.strong,{children:"Manager"})," role in the ",(0,o.jsx)(n.strong,{children:"build profile"})," scope."]}),(0,o.jsx)(n.p,{children:"In addition, the user who wants to take ownership of the connection must also have access to the repository on the relevant Git provider."})]}),"\n",(0,o.jsxs)(n.p,{children:["When the process is completed successfully, you can click on the ",(0,o.jsx)(n.strong,{children:"Connection Settings"})," button again to see the changed ownership of the build profile connection. In the window that's opened, there won't be a ",(0,o.jsx)(n.strong,{children:"Change Owner"})," button because you are now the profile owner."]}),"\n",(0,o.jsx)(c.A,{url:"https://cdn.appcircle.io/docs/assets/owner-changed.png"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},69678:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(74848);function i(e){let{url:n}=e;return(0,o.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const i={},c=o.createContext(i);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);