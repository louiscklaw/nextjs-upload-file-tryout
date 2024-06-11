"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[28728],{74597:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var s=i(74848),t=i(28453);const r=[{value:"Need help?",id:"need-help",level:3}];function o(e){const n={a:"a",h3:"h3",p:"p",...(0,t.R)(),...e.components},{ExternalUrlRef:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"need-help",children:"Need help?"}),"\n",(0,s.jsx)(n.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,s.jsx)(i,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},7232:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var s=i(74848),t=i(28453),r=i(69678),o=i(74597);const a={title:"LDAP Settings",description:"Learn how to configure LDAP settings in Appcircle",tags:["ldap","ldap settings","ldap configuration","ldap login","ldap user lookup decision strategy","ldap user lookup","ldap authentication","ldap auth","ldap user auth","ldap user authentication","ldap user lookup decision","ldap user lookup decision strategy"],sidebar_position:9},l=void 0,c={id:"self-hosted-appcircle/configure-server/integrations-and-access/ldap-settings",title:"LDAP Settings",description:"Learn how to configure LDAP settings in Appcircle",source:"@site/docs/self-hosted-appcircle/configure-server/integrations-and-access/ldap-settings.md",sourceDirName:"self-hosted-appcircle/configure-server/integrations-and-access",slug:"/self-hosted-appcircle/configure-server/integrations-and-access/ldap-settings",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/integrations-and-access/ldap-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/integrations-and-access/ldap-settings.md",tags:[{label:"ldap",permalink:"/nextjs-upload-file-tryout/tags/ldap"},{label:"ldap settings",permalink:"/nextjs-upload-file-tryout/tags/ldap-settings"},{label:"ldap configuration",permalink:"/nextjs-upload-file-tryout/tags/ldap-configuration"},{label:"ldap login",permalink:"/nextjs-upload-file-tryout/tags/ldap-login"},{label:"ldap user lookup decision strategy",permalink:"/nextjs-upload-file-tryout/tags/ldap-user-lookup-decision-strategy"},{label:"ldap user lookup",permalink:"/nextjs-upload-file-tryout/tags/ldap-user-lookup"},{label:"ldap authentication",permalink:"/nextjs-upload-file-tryout/tags/ldap-authentication"},{label:"ldap auth",permalink:"/nextjs-upload-file-tryout/tags/ldap-auth"},{label:"ldap user auth",permalink:"/nextjs-upload-file-tryout/tags/ldap-user-auth"},{label:"ldap user authentication",permalink:"/nextjs-upload-file-tryout/tags/ldap-user-authentication"},{label:"ldap user lookup decision",permalink:"/nextjs-upload-file-tryout/tags/ldap-user-lookup-decision"}],version:"current",sidebarPosition:9,frontMatter:{title:"LDAP Settings",description:"Learn how to configure LDAP settings in Appcircle",tags:["ldap","ldap settings","ldap configuration","ldap login","ldap user lookup decision strategy","ldap user lookup","ldap authentication","ldap auth","ldap user auth","ldap user authentication","ldap user lookup decision","ldap user lookup decision strategy"],sidebar_position:9},sidebar:"mySidebar",previous:{title:"Proxy Configuration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/integrations-and-access/proxy-configuration"},next:{title:"Advanced Configuration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/advanced-configuration/"}},d={},p=[{value:"User Lookup Decision Settings",id:"user-lookup-decision-settings",level:2},{value:"Editing User Lookup Decision Strategy",id:"editing-user-lookup-decision-strategy",level:3},{value:"Affirmative",id:"affirmative",level:4},{value:"Decisive",id:"decisive",level:4},{value:"Applying Changes",id:"applying-changes",level:3},{value:"Testing the LDAP Auth",id:"testing-the-ldap-auth",level:3},{value:"1. Configure multiple LDAPs on server",id:"1-configure-multiple-ldaps-on-server",level:4},{value:"2. Create users with the same username",id:"2-create-users-with-the-same-username",level:4},{value:"3. Test LDAP authentication with users",id:"3-test-ldap-authentication-with-users",level:4},{value:"Verification",id:"verification",level:4},{value:"Appcircle Login with LDAP",id:"appcircle-login-with-ldap",level:2},{value:"Attribute Configuration Settings",id:"attribute-configuration-settings",level:3},{value:"Adding LDAP Configuration",id:"adding-ldap-configuration",level:3},{value:"Remove User From LDAP Server",id:"remove-user-from-ldap-server",level:3},{value:"Remove LDAP Configuration",id:"remove-ldap-configuration",level:3},{value:"LDAP Mapping",id:"ldap-mapping",level:2},{value:"Accessing LDAP Settings",id:"accessing-ldap-settings",level:3},{value:"Configuring LDAP Mapping",id:"configuring-ldap-mapping",level:3},{value:"Setting Up LDAP Configuration",id:"setting-up-ldap-configuration",level:4},{value:"Associating LDAP Groups with Appcircle Organizations",id:"associating-ldap-groups-with-appcircle-organizations",level:4},{value:"Managing LDAP Groups and Mappings",id:"managing-ldap-groups-and-mappings",level:3},{value:"LDAP Role Mapping",id:"ldap-role-mapping",level:3},{value:"Configuring Role Mappings",id:"configuring-role-mappings",level:4},{value:"Role and Permissions Management",id:"role-and-permissions-management",level:4},{value:"LDAP Synchronization",id:"ldap-synchronization",level:3},{value:"Enabling and Managing Synchronization",id:"enabling-and-managing-synchronization",level:4},{value:"Conclusion",id:"conclusion",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},...o.RM];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"user-lookup-decision-settings",children:"User Lookup Decision Settings"}),"\n",(0,s.jsx)(n.p,{children:"The LDAP (Lightweight Directory Access Protocol) user lookup decision strategy is a crucial aspect of user authentication in applications that utilize LDAP for user management."}),"\n",(0,s.jsx)(n.p,{children:"When Appcircle receives a user login request from the Enterprise App Store or Testing Distribution, it needs to determine which LDAP configuration to use for the user lookup and authentication process."}),"\n",(0,s.jsx)(n.p,{children:"In scenarios where a user exists in multiple LDAP configurations, a decision must be made on which configuration to use for authentication."}),"\n",(0,s.jsx)(n.p,{children:"This documentation provides insights into the LDAP user lookup decision strategy and how it can be configured to handle scenarios where a user has multiple usernames and passwords across different LDAP configurations."}),"\n",(0,s.jsx)(n.h3,{id:"editing-user-lookup-decision-strategy",children:"Editing User Lookup Decision Strategy"}),"\n",(0,s.jsx)(n.p,{children:"To configure LDAP lookup decision settings, you can follow the steps below."}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["We're assuming that previously you reviewed or followed ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#3-configure",children:"install self-hosted appcircle"})," section in docs and applied example scenario."]}),(0,s.jsx)(n.p,{children:"Following steps are using example project as project naming, which was told there."})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Go to the Appcircle server directory."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Edit the ",(0,s.jsx)(n.code,{children:"global.yaml"})," of the project."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi projects/spacetech/global.yaml\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Find the keycloak entry and add the ",(0,s.jsx)(n.code,{children:"userLookupDecisionStrategy"})," entry to it. For example;"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"keycloak:\n  initialUsername: admin@spacetech.com\n  enabledRegistration: true\n  userLookupDecisionStrategy: affirmative\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"userLookupDecisionStrategy"})," variable can have two options: ",(0,s.jsx)(n.code,{children:"affirmative"})," or ",(0,s.jsx)(n.code,{children:"decisive"}),"."]}),(0,s.jsxs)(n.p,{children:["If you don't define it or it has an unknown value, it is assumed to be ",(0,s.jsx)(n.code,{children:"decisive"})," by default."]}),(0,s.jsx)(n.h4,{id:"affirmative",children:"Affirmative"}),(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"userLookupDecisionStrategy"}),' is set to "affirmative", the LDAP authentication process will check all LDAP settings, even if the user is found on a particular LDAP configuration. This means that if a user has multiple accounts on different LDAP configurations with different passwords, they will be able to login successfully. The authentication system will search across all LDAP configurations to find a matching username or email and validate the user\'s password, allowing the user to access the system.']}),(0,s.jsx)(n.h4,{id:"decisive",children:"Decisive"}),(0,s.jsxs)(n.p,{children:["On the other hand, when ",(0,s.jsx)(n.code,{children:"userLookupDecisionStrategy"})," is set to \"decisive\", the LDAP authentication process will check a specific LDAP configuration for the user's username or email. If the authentication system finds the username on a particular LDAP, it will verify the user's password only on that specific LDAP configuration. If the provided password is incorrect, the authentication system will not check other LDAP configurations and will immediately return invalid credentials, denying access to the user."]})]}),"\n",(0,s.jsx)(n.h3,{id:"applying-changes",children:"Applying Changes"}),"\n",(0,s.jsxs)(n.p,{children:["After you configure the ",(0,s.jsx)(n.code,{children:"global.yaml"})," of the project, you should restart the Appcircle server for the settings to take effect."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stop the server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Apply the configuration changes."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" export\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start the server."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check the health of the services."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" check\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You should see the message: ",(0,s.jsx)(n.em,{children:'"All services are running successfully."'})]}),"\n",(0,s.jsx)(n.h3,{id:"testing-the-ldap-auth",children:"Testing the LDAP Auth"}),"\n",(0,s.jsx)(n.h4,{id:"1-configure-multiple-ldaps-on-server",children:"1. Configure multiple LDAPs on server"}),"\n",(0,s.jsxs)(n.p,{children:["Ensure that multiple LDAP settings are properly configured on your Appcircle server's ",(0,s.jsx)(n.a,{href:"/account/my-organization/ldap-login",children:"integration settings"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"2-create-users-with-the-same-username",children:"2. Create users with the same username"}),"\n",(0,s.jsx)(n.p,{children:"In each of the configured LDAPs, create user accounts with the same username but different passwords."}),"\n",(0,s.jsx)(n.p,{children:'For example, you can create users with the username "spacetechuser" in both LDAP configurations, each with unique passwords.'}),"\n",(0,s.jsx)(n.p,{children:"This setup will mimic the scenario where a user has multiple accounts on different LDAPs."}),"\n",(0,s.jsx)(n.h4,{id:"3-test-ldap-authentication-with-users",children:"3. Test LDAP authentication with users"}),"\n",(0,s.jsx)(n.p,{children:'Use the "spacetechuser" credentials to attempt a login to the application. For example, enterprise app store or testing distribution'}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"affirmative"})," LDAP authentication strategy will kick in during this test."]}),"\n",(0,s.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,s.jsx)(n.p,{children:'If the "spacetechuser" provides the correct password that matches the user\'s credentials in one of the configured LDAPs, the authentication system will grant access to the Enterprise App Store or Testing Distribution profile.'}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"affirmative"})," strategy ensures that the authentication process checks all LDAP configurations to find a matching username and validate the user's password."]}),"\n",(0,s.jsx)(n.p,{children:'If the "spacetechuser" provides an incorrect password that does not match the user\'s credentials in any of the LDAP configurations, the authentication process will continue checking all the other LDAPs.'}),"\n",(0,s.jsx)(n.p,{children:"If it finds a matching username with the correct password in any of the other LDAP configurations, the user will be granted access."}),"\n",(0,s.jsx)(n.h2,{id:"appcircle-login-with-ldap",children:"Appcircle Login with LDAP"}),"\n",(0,s.jsx)(n.p,{children:"Appcircle login with LDAP aims to provide an alternative authentication solution via the LDAP server. Appcircle's LDAP integration allows businesses to integrate existing directory services, especially Active Directory, directly into the Appcircle login process. This integration simplifies user management."}),"\n",(0,s.jsx)(n.p,{children:"The LDAP distinguished name (DN) is associated with existing Appcircle registered users when:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The existing user signs in to Appcircle with LDAP for the first time."}),"\n",(0,s.jsx)(n.li,{children:"The LDAP email address is the email address of an existing Appcircle user."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If the LDAP email attribute isn\u2019t found in the Appcircle user database, a new user is created."}),"\n",(0,s.jsx)(n.p,{children:"If existing Appcircle users want to enable LDAP to sign in for themselves, they should:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check that their Appcircle user email address matches their LDAP user email address."}),"\n",(0,s.jsx)(n.li,{children:"Sign in to Appcircle by using their LDAP credentials."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This feature only provides a solution for self-hosted Appcircle server installations. Appcircle Login with LDAP is not possible for Appcircle Cloud users."})}),"\n",(0,s.jsx)(n.h3,{id:"attribute-configuration-settings",children:"Attribute Configuration Settings"}),"\n",(0,s.jsx)(n.p,{children:"LDAP users must have an email address, regardless of whether or not it\u2019s used to sign in."}),"\n",(0,s.jsx)(n.p,{children:"Appcircle uses these LDAP attributes to create an account for the LDAP user."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The username LDAP attribute is a string. For example,'mail'."}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Settings"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Examples"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Username LDAP Attribute"}),(0,s.jsx)(n.td,{children:"Name of LDAP attribute, which is mapped as username. For many LDAP server vendors it can be 'uid'. For an active directory, it can be 'sAMAccountName' or 'cn'."}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"mail,email"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"adding-ldap-configuration",children:"Adding LDAP Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'To get started, click on the "Admin" button from the left menu.'}),"\n"]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ldap-1.png"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Go to the "Self-Hosted Settings" screen.'}),"\n"]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ldap-2.png"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'And press the "Connect" button next to "LDAP Login".'}),"\n"]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ldap-3.png"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Click on the "Create" button to create your LDAP configuration.'}),"\n"]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ldap-4.png"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enter the details of your LDAP configuration."}),"\n"]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ldap-5.png"}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"After you fill out the LDAP configuration form, it's strongly recommended that you test the configuration using the test buttons below."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Test Connection"}),"\n",(0,s.jsx)(n.li,{children:"Test Authentication"}),"\n"]})]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ldap-8.png"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Appcircle supports multiple LDAP configurations. If you are using multiple LDAP configurations and a user exists in both LDAPs, user authentication will look at the LDAP order."}),(0,s.jsx)(n.p,{children:'The "Order" field when adding a LDAP configuration is required to do this ordering.'}),(0,s.jsxs)(n.p,{children:["LDAP configuration with an order value of ",(0,s.jsx)(n.code,{children:"1"})," will be used before LDAP configuration with an order value of ",(0,s.jsx)(n.code,{children:"2"})," in user authentication."]})]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ldap-9.png"}),"\n",(0,s.jsx)(n.h3,{id:"remove-user-from-ldap-server",children:"Remove User From LDAP Server"}),"\n",(0,s.jsx)(n.p,{children:"If the user is deleted via LDAP, users coming from LDAP or previously connected users cannot log in to the system. And users who are logged in are automatically logged out."}),"\n",(0,s.jsx)(n.h3,{id:"remove-ldap-configuration",children:"Remove LDAP Configuration"}),"\n",(0,s.jsx)(n.p,{children:"You can quickly remove your saved LDAP configuration from Appcircle Login."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'To delete a LDAP configuration, press the "Manage" button next to the "LDAP Login" option on the "Self-Hosted Settings" page.'}),"\n"]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ldap-10.png"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Select the LDAP configuration you want to delete and click on the "Remove" button.'}),"\n"]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ldap-11.png"}),"\n",(0,s.jsx)(n.p,{children:"After confirmation, the LDAP configuration will be deleted from Appcircle."}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"If a user is logged in to Appcircle with an LDAP configuration and that LDAP configuration is removed, the user will not be able to register in Appcircle."}),(0,s.jsx)(n.p,{children:"This user is also removed from the organization in Appcircle."})]}),"\n",(0,s.jsx)(n.h2,{id:"ldap-mapping",children:"LDAP Mapping"}),"\n",(0,s.jsx)(n.p,{children:"LDAP Mapping in Appcircle allows you to synchronize user groups and roles from your LDAP directory to your Appcircle environment seamlessly. This guide provides a step-by-step approach to setting up and managing LDAP mappings, ensuring your user and role integrations are as efficient as possible."}),"\n",(0,s.jsx)(n.h3,{id:"accessing-ldap-settings",children:"Accessing LDAP Settings"}),"\n",(0,s.jsx)(n.p,{children:"To configure LDAP Mapping, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"Admin"})," section on your dashboard."]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Self-Hosted Settings"})," and click on ",(0,s.jsx)(n.strong,{children:"LDAP Login"})," to access the LDAP configuration options."]}),"\n"]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3671-ldap-mapping-guide.png"}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3671-ldap-mapping-menu.png"}),"\n",(0,s.jsx)(n.h3,{id:"configuring-ldap-mapping",children:"Configuring LDAP Mapping"}),"\n",(0,s.jsx)(n.h4,{id:"setting-up-ldap-configuration",children:"Setting Up LDAP Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Select LDAP Configuration"}),": Begin by selecting your LDAP configuration from the dropdown menu. This is where you define and select the LDAP source to be used for mapping."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LDAP Groups and Appcircle Organizations"}),": Choose an LDAP group and the corresponding Appcircle organization you want to synchronize."]}),"\n"]}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3671-ldap-mapping-info.png"}),"\n",(0,s.jsx)(n.h4,{id:"associating-ldap-groups-with-appcircle-organizations",children:"Associating LDAP Groups with Appcircle Organizations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mapping LDAP Groups"}),": After selecting the LDAP group, map it to an Appcircle organization by clicking ",(0,s.jsx)(n.strong,{children:"Add"}),". This establishes a link where users from the LDAP group are automatically mapped to the corresponding organization in Appcircle."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Appcircle Organizations must be created manually before using them with LDAP Mapping."}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"managing-ldap-groups-and-mappings",children:"Managing LDAP Groups and Mappings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"View Configurations"}),": All active LDAP mappings can be viewed under the LDAP Mapping section. You can modify or delete each mapping as needed by using the ",(0,s.jsx)(n.strong,{children:"Config"})," option."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ldap-role-mapping",children:"LDAP Role Mapping"}),"\n",(0,s.jsx)(n.p,{children:"LDAP Role Mapping allows you to assign specific roles to users based on their LDAP group memberships. This feature streamlines user management by automatically assigning roles to users based on their LDAP role associations."}),"\n",(0,s.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3671-ldap-mapping-config.png"}),"\n",(0,s.jsx)(n.h4,{id:"configuring-role-mappings",children:"Configuring Role Mappings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to the ",(0,s.jsx)(n.strong,{children:"LDAP Role Mapping"})," section where you can assign specific Appcircle roles based on the LDAP roles assigned to users."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add a New Role"}),": Select a role from the available LDAP roles and assign it to users within the specified Appcircle organization. Roles such as administrator, developer, or custom group roles can be mapped accordingly."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"role-and-permissions-management",children:"Role and Permissions Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Each role can have varied permissions across different modules such as Build, Deploy, and Admin settings. Configure these permissions to ensure users have appropriate access levels based on their role."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ldap-synchronization",children:"LDAP Synchronization"}),"\n",(0,s.jsx)(n.p,{children:"You can synchronize users from LDAP groups to Appcircle organizations using LDAP Synchronization. This process involves adding new users and removing unnecessary ones."}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"If you configure an Appcircle organization for synchronization, the synchronization task will override any manual configurations."}),(0,s.jsx)(n.p,{children:"Please note that the synchronization is one-way from LDAP to Appcircle, meaning changes made in Appcircle do not affect LDAP."})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The sync operation does not fetch all users. If a user has not logged in before, they will join the organization with the assigned roles as soon as they log in, provided LDAP Mapping is enabled."}),"\n",(0,s.jsx)(n.li,{children:"If a user does not exist in Appcircle (has not been imported yet), they will be ignored by the synchronization task."}),"\n",(0,s.jsx)(n.li,{children:"The synchronization operation also does not affect the admin user. Even if the admin user is not in the LDAP group, they remain a member of the Appcircle organization."}),"\n",(0,s.jsx)(n.li,{children:"Appcircle Root Organizations must have at least one owner. The synchronization operation will not remove a user if they are the last owner of the root organization."}),"\n",(0,s.jsx)(n.li,{children:"You need to run the synchronization task once for users who are already in Appcircle and linked to LDAP."}),"\n"]})}),"\n",(0,s.jsx)(n.h4,{id:"enabling-and-managing-synchronization",children:"Enabling and Managing Synchronization"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Activate Synchronization"}),": Toggle the LDAP Synchronization option to enable automatic syncing between LDAP and Appcircle."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Manual Sync and Interval Settings"}),": Use the ",(0,s.jsx)(n.strong,{children:"Sync Now"})," button to manually trigger a sync or set a synchronization interval to automate the process at regular intervals."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Setting up LDAP Mapping streamlines user management by automating the synchronization of user roles and groups from LDAP into Appcircle. This guide should assist you in effectively managing user access and roles within your organization, ensuring security and efficiency in your app development processes."}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:'If the LDAP configuration is incorrect or the LDAP server cannot be accessed for some reason, you can always login with the "initial username" and "initial password" that were configured while installing the server.'}),(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#3-configure",children:"configure"})," section in the installation page for the ",(0,s.jsx)(n.code,{children:"global.yaml"})," details."]})]}),"\n","\n",(0,s.jsx)(o.Ay,{})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},69678:(e,n,i)=>{i.d(n,{A:()=>t});i(96540);var s=i(74848);function t(e){let{url:n}=e;return(0,s.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);