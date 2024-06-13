"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[12187],{53585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var o=t(74848),i=t(28453),s=t(69678);const c={title:"Manage the Connections",description:"The Connections page is a feature where we can check and edit the connections of the Git providers we are connected to.",tags:["build","connections","git providers","oauth","pat","personal access token"],sidebar_position:11},r="Connections",a={id:"build/manage-the-connections/manage-the-connections",title:"Manage the Connections",description:"The Connections page is a feature where we can check and edit the connections of the Git providers we are connected to.",source:"@site/docs/004_build/manage-the-connections/manage-the-connections.md",sourceDirName:"004_build/manage-the-connections",slug:"/build/manage-the-connections/",permalink:"/nextjs-upload-file-tryout/build/manage-the-connections/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/004_build/manage-the-connections/manage-the-connections.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"connections",permalink:"/nextjs-upload-file-tryout/tags/connections"},{label:"git providers",permalink:"/nextjs-upload-file-tryout/tags/git-providers"},{label:"oauth",permalink:"/nextjs-upload-file-tryout/tags/oauth"},{label:"pat",permalink:"/nextjs-upload-file-tryout/tags/pat"},{label:"personal access token",permalink:"/nextjs-upload-file-tryout/tags/personal-access-token"}],version:"current",sidebarPosition:11,frontMatter:{title:"Manage the Connections",description:"The Connections page is a feature where we can check and edit the connections of the Git providers we are connected to.",tags:["build","connections","git providers","oauth","pat","personal access token"],sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Build Module Overview",permalink:"/nextjs-upload-file-tryout/build/"},next:{title:"Adding a Build Profile & Connecting a Repository",permalink:"/nextjs-upload-file-tryout/build/manage-the-connections/adding-a-build-profile/"}},l={},d=[{value:"Managing OAuth Connections",id:"managing-oauth-connections",level:2},{value:"Revoke OAuth Connections",id:"revoke-oauth-connections",level:3},{value:"Reconnect OAuth Connections",id:"reconnect-oauth-connections",level:3},{value:"Managing PAT Connections",id:"managing-pat-connections",level:2},{value:"Adding PAT Connection",id:"adding-pat-connection",level:3},{value:"Editing PAT Connections",id:"editing-pat-connections",level:3},{value:"Deleting PAT Connections",id:"deleting-pat-connections",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"connections",children:"Connections"}),"\n",(0,o.jsx)(n.p,{children:"The Connections page is a feature where we can check and edit the connections of the Git providers we are connected to. You can access this page from the left bar in the Build module."}),"\n",(0,o.jsxs)(n.p,{children:["On this page, you can view ",(0,o.jsx)(n.strong,{children:"OAuth"})," and ",(0,o.jsx)(n.strong,{children:"PAT"})," (Personal Access Token) connections."]}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connections-all-main-new.png"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If you have not previously connected to a Git provider on Appcircle, i.e., created a profile and not connected a repository, you will not see any connection on this page."})}),"\n",(0,o.jsx)(n.h2,{id:"managing-oauth-connections",children:"Managing OAuth Connections"}),"\n",(0,o.jsx)(n.h3,{id:"revoke-oauth-connections",children:"Revoke OAuth Connections"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Revoke Token"})," revokes the token of the Git provider on the Appcircle side. On the Git provider side, the token is still active and available. Appcircle cannot revoke the token from the provider."]}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connections-oauth-revoke-new.png"}),"\n",(0,o.jsx)(n.p,{children:"A revoked connection disconnects all build profiles connected to the respective Git provider. In this case, Appcircle shows a clear warning message. Here, you can see all the affected profiles."}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connections-revoke-modal.png"}),"\n",(0,o.jsxs)(n.p,{children:['When we revoke a Git provider successfully, the "Revoke Token" button disappears. If we reconnect using the ',(0,o.jsx)(n.strong,{children:"Refresh Token"}),' button, the "Revoke Token" button will appear again.']}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connections-revoked-new.png"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"If we open one of the affected build profiles after applying a revoke for a Git provider, we should see the disconnected build profile state in the UI."}),(0,o.jsx)(n.p,{children:"If we reconnect this profile, not only the related build profile but also all other build profiles belonging to that Git provider will be connected."})]}),"\n",(0,o.jsx)(n.h3,{id:"reconnect-oauth-connections",children:"Reconnect OAuth Connections"}),"\n",(0,o.jsxs)(n.p,{children:["If we want to reconnect to the Git provider, we can use the ",(0,o.jsx)(n.strong,{children:"Refresh Token"})," button."]}),"\n",(0,o.jsxs)(n.p,{children:["The\xa0",(0,o.jsx)(n.code,{children:"refresh token"})," is received while connecting to the Git provider, and it's used when needed, for instance, in reconnection or token expiration cases."]}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connections-reconnect-new.png"}),"\n",(0,o.jsx)(n.p,{children:"The refreshing connection action reconnects all previously linked and disconnected build profiles of the corresponding Git provider in Appcircle. Here again, all affected build profiles will be shown."}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connections-reconnect-modal.png"}),"\n",(0,o.jsxs)(n.p,{children:["When the ",(0,o.jsx)(n.strong,{children:"Refresh Token"})," button is clicked, Appcircle redirects to the relevant Git provider's page. After giving the necessary permissions there, the connection will be restored."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["If the connection to the Git provider is active and the ",(0,o.jsx)(n.strong,{children:"Refresh Token"})," button is clicked, Appcircle will re-establish the connection."]})}),"\n",(0,o.jsx)(n.h2,{id:"managing-pat-connections",children:"Managing PAT Connections"}),"\n",(0,o.jsx)(n.p,{children:"The PAT connection list section on the right-hand side has a list of connections that were made using a personal access token."}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connections-main-pat-new.png"}),"\n",(0,o.jsx)(n.p,{children:"The list first shows the logo of the Git provider we're connecting to, then the name we gave to the connection (when multiple instances are used), and finally the URL of the Git provider we're connecting to."}),"\n",(0,o.jsx)(n.h3,{id:"adding-pat-connection",children:"Adding PAT Connection"}),"\n",(0,o.jsx)(n.p,{children:'The "Add New" button at the top of the PAT connection list on the right side allows us to add PAT (Personal Access Token) without creating a new build profile. Then you can use that PAT connection on existing build profiles or while adding a new build profile.'}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/add-new-main.png"}),"\n",(0,o.jsx)(n.p,{children:'After clicking on the "Add New" button, Appcircle will ask us to select a Git provider and fill in the necessary information according to the Git provider, just like in the build profile PAT connection.'}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connections-select-provider.png"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["The name you defined in the ",(0,o.jsx)(n.strong,{children:"Connection Name"})," section must be unique for each Git provider."]}),(0,o.jsx)(n.p,{children:'For example, if you have created a PAT named "my-secret-pat" for GitHub, you cannot create another PAT with the same name for GitHub.'}),(0,o.jsx)(n.p,{children:'But you can create a PAT named "my-secret-pat" for GitLab or Bitbucket, for instance.'})]}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connections-fill-provider-new-1.png"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["In Azure DevOps Server connections, the ",(0,o.jsx)(n.strong,{children:"Owner Username"})," field on Appcircle corresponds to the ",(0,o.jsx)(n.strong,{children:"Collection Name"})," on Azure."]})}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connection-success-pat.png"}),"\n",(0,o.jsx)(n.p,{children:"Now you're ready to use the added PAT connection in your build profiles. While making a new connection, you can see the PAT connection in the available connections list after selecting Git provider."}),"\n",(0,o.jsx)(n.h3,{id:"editing-pat-connections",children:"Editing PAT Connections"}),"\n",(0,o.jsxs)(n.p,{children:["We can see the details of the PAT connection with the ",(0,o.jsx)(n.strong,{children:"Edit"})," button on the right side. These are ",(0,o.jsx)(n.strong,{children:"Provider"}),", ",(0,o.jsx)(n.strong,{children:"Instance URL"}),", ",(0,o.jsx)(n.strong,{children:"Token Owner"}),", ",(0,o.jsx)(n.strong,{children:"Token"}),", and ",(0,o.jsx)(n.strong,{children:"PAT"}),"."]}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connections-pat-detail.png"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Connection Edit"}),", we can change the PAT (Personal Access Token) value."]}),"\n",(0,o.jsx)(n.p,{children:"However, we must make sure that the value we change here is correct and that it was created on the Git provider correctly. Otherwise, the affected build profile or profiles will not be connected."}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/connections-pat-edit.png"}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Connection Edit"}),', you can see the build profiles where PAT is used under "Affected Build Profiles".']}),(0,o.jsx)(n.p,{children:"Changing a PAT value will affect all the build profiles shown here."})]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"While editing PAT connections, you can also write the PAT value using environment variables."}),(0,o.jsxs)(n.p,{children:["You can review ",(0,o.jsx)(n.a,{href:"/environment-variables/managing-variables#using-environment-variables-for-ssh-and-pat-personal-access-token-connections-of-the-git-provider",children:"Using Environment Variables For SSH And PAT (Personal Access Token) Connections"})," page for details."]})]}),"\n",(0,o.jsx)(n.h3,{id:"deleting-pat-connections",children:"Deleting PAT Connections"}),"\n",(0,o.jsxs)(n.p,{children:["You can delete a Personal Access Token (PAT) connection by clicking on the ",(0,o.jsx)(n.strong,{children:"Delete"})," next to the respective entry in your list of PAT connections."]}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/be-3112-deletepat.png"}),"\n",(0,o.jsxs)(n.p,{children:["Upon clicking the ",(0,o.jsx)(n.strong,{children:"Delete"})," button, Appcircle will prompt you to enter the name of the PAT Connection to confirm the deletion operation. After entering the connection name, simply click ",(0,o.jsx)(n.strong,{children:"Delete"})," on the pop-up screen."]}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/be-3112-deletepat2.png"}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsx)(n.p,{children:"If you have an existing Build profile that would be affected by the deletion of the PAT Connection, Appcircle will display a warning message listing the affected builds."}),(0,o.jsx)(n.p,{children:"You will need to disconnect them before you can delete the PAT Connection."}),(0,o.jsxs)(n.p,{children:["For more information about disconnecting a Build profile please refer to the related ",(0,o.jsx)(n.a,{href:"/build/manage-the-connections/reconnect-change-provider#disconnect-build-profile",children:"documentation"}),"."]})]}),"\n",(0,o.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/be-3112-deletepat3.png"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},69678:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(74848);function i(e){let{url:n}=e;return(0,o.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);