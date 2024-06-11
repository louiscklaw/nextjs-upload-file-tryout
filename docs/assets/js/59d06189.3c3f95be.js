"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[13803],{53375:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=t(74848),i=t(28453),o=t(69678);const a={title:"Auth0 SAML",description:"Enable Auth0 SAML for secure user sign-in in your app. Simplify access and enhance security with Appcircle's integration.",tags:["account","organization","sso","auth0","saml","configuration"],sidebar_position:3},r="Auth0 SAML",c={id:"account/my-organization/sso-providers-configuration/auth-saml",title:"Auth0 SAML",description:"Enable Auth0 SAML for secure user sign-in in your app. Simplify access and enhance security with Appcircle's integration.",source:"@site/docs/account/my-organization/sso-providers-configuration/auth-saml.md",sourceDirName:"account/my-organization/sso-providers-configuration",slug:"/account/my-organization/sso-providers-configuration/auth-saml",permalink:"/nextjs-upload-file-tryout/account/my-organization/sso-providers-configuration/auth-saml",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/account/my-organization/sso-providers-configuration/auth-saml.md",tags:[{label:"account",permalink:"/nextjs-upload-file-tryout/tags/account"},{label:"organization",permalink:"/nextjs-upload-file-tryout/tags/organization"},{label:"sso",permalink:"/nextjs-upload-file-tryout/tags/sso"},{label:"auth0",permalink:"/nextjs-upload-file-tryout/tags/auth-0"},{label:"saml",permalink:"/nextjs-upload-file-tryout/tags/saml"},{label:"configuration",permalink:"/nextjs-upload-file-tryout/tags/configuration"}],version:"current",sidebarPosition:3,frontMatter:{title:"Auth0 SAML",description:"Enable Auth0 SAML for secure user sign-in in your app. Simplify access and enhance security with Appcircle's integration.",tags:["account","organization","sso","auth0","saml","configuration"],sidebar_position:3},sidebar:"mySidebar",previous:{title:"Auth0 OpenID",permalink:"/nextjs-upload-file-tryout/account/my-organization/sso-providers-configuration/auth-openid"},next:{title:"Azure AD SAML",permalink:"/nextjs-upload-file-tryout/account/my-organization/sso-providers-configuration/azure-saml"}},l={},d=[{value:"Enable SSO",id:"enable-sso",level:3},{value:"Configure Appcircle and Auth0",id:"configure-appcircle-and-auth0",level:3},{value:"Testing SSO",id:"testing-sso",level:3}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"auth0-saml",children:"Auth0 SAML"}),"\n",(0,s.jsxs)(e.p,{children:["Appcircle supports ",(0,s.jsx)(e.a,{href:"https://auth0.com/",children:"Auth0"})," as OpenID or as a SAML provider."]}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"Only Enterprise accounts support SSO."})}),"\n",(0,s.jsx)(e.h3,{id:"enable-sso",children:"Enable SSO"}),"\n",(0,s.jsxs)(e.p,{children:["SSO can only be enabled by the organization's administrator. To start, go to ",(0,s.jsx)(e.a,{href:"/account/my-organization",children:"My Organization"})," screen and click the ",(0,s.jsx)(e.strong,{children:"Enable Login"})," button under the ",(0,s.jsx)(e.strong,{children:"APPCIRCLE LOGIN"})," section."]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/enable-sso_v3.png"}),"\n",(0,s.jsx)(e.h3,{id:"configure-appcircle-and-auth0",children:"Configure Appcircle and Auth0"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Select Setup SAML SSO Provider"}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/sso-form_v2.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Pick an alias and display name for your organization. Please pick a short and rememberable alias."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"This screen will auto-generate an URL for the next step"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/sso-saml1.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Login to your ",(0,s.jsx)(e.a,{href:"https://auth0.com/",children:"Auth0"})," account and navigate to Applications and then click ",(0,s.jsx)(e.strong,{children:"Create Application"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/authcreateapp.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Select ",(0,s.jsx)(e.strong,{children:"Regular Web Applications"})," and give a name"]}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/authwebapp.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Navigate to ",(0,s.jsx)(e.strong,{children:"Addons"})," of the app and enable the SAML option."]}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/authsamlsettings1.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Click the SAML button and change the settings. For the Callback URL write down the callback URL you have created earlier. For the settings, paste the below JSON"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "nameIdentifierFormat": "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress",\n  "nameIdentifierProbes": [\n    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"\n  ]\n}\n'})}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/authsamlsettings2.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Instead of writing all the settings of SAML, you can download the settings file from Auth0 and upload it. Navigate to the ",(0,s.jsx)(e.strong,{children:"Usage"})," and then click the ",(0,s.jsx)(e.strong,{children:"Download"})," button to download the XML file"]}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/authsamlsettings3.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Go back to Appcircle, upload this XML file by clicking the button under ",(0,s.jsx)(e.strong,{children:"Import SAML Configuration"})]}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/sso-saml1.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Check all the settings on this page and confirm that Redirect and SSO URLs are imported correctly. You can check if the X509 Certificate is imported correctly as well. If you want to enter multiple certificates you can separate them by using a comma between them. Please be aware that you need to remove any new lines or file headers from this edit box. This edit box only accepts a long base64 encoded string."}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"testing-sso",children:"Testing SSO"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"When you connect your Identity Provider, please open a new incognito window and test the SSO integration."}),"\n",(0,s.jsxs)(e.li,{children:["Click the ",(0,s.jsx)(e.strong,{children:"Continue with SSO"})," button."]}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/sso-loginbutton.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Enter the alias you picked."}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/sso-alias.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"You should first see the below confirmation screen."}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/sso-linkaccount.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"After you confirmed account linking, you will get an email."}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/sso-confirmlink.png"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"You can now access your account with SSO integration when you confirm the email."}),"\n",(0,s.jsx)(e.li,{children:"After you enable the SSO, you can only log in to your account with the SSO link. Your old credentials won't work anymore."}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"caution",children:(0,s.jsx)(e.p,{children:"When you connect your Identity Provider, please open a new incognito window and test the SSO integration. Please only log off when you can log in with SSO credentials. If the connection doesn't work, you need to review your settings."})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},69678:(n,e,t)=>{t.d(e,{A:()=>i});t(96540);var s=t(74848);function i(n){let{url:e}=n;return(0,s.jsx)("img",{className:"screenshot",src:e})}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);