"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[55925],{30066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var c=n(74848),s=n(28453),o=(n(46736),n(69678));const i={title:"Appcircle Bot For Slack",description:"Learn how to use Appcircle Bot for Slack",tags:["slack","appcircle bot","slack integration","slack app","slack bot"],sidebar_position:2},a="Appcircle Bot for Slack",r={id:"account/my-organization/notifications-and-communication/slack/appcircle-bot-for-slack",title:"Appcircle Bot For Slack",description:"Learn how to use Appcircle Bot for Slack",source:"@site/docs/account/my-organization/notifications-and-communication/slack/appcircle-bot-for-slack.md",sourceDirName:"account/my-organization/notifications-and-communication/slack",slug:"/account/my-organization/notifications-and-communication/slack/appcircle-bot-for-slack",permalink:"/nextjs-upload-file-tryout/account/my-organization/notifications-and-communication/slack/appcircle-bot-for-slack",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/account/my-organization/notifications-and-communication/slack/appcircle-bot-for-slack.md",tags:[{label:"slack",permalink:"/nextjs-upload-file-tryout/tags/slack"},{label:"appcircle bot",permalink:"/nextjs-upload-file-tryout/tags/appcircle-bot"},{label:"slack integration",permalink:"/nextjs-upload-file-tryout/tags/slack-integration"},{label:"slack app",permalink:"/nextjs-upload-file-tryout/tags/slack-app"},{label:"slack bot",permalink:"/nextjs-upload-file-tryout/tags/slack-bot"}],version:"current",sidebarPosition:2,frontMatter:{title:"Appcircle Bot For Slack",description:"Learn how to use Appcircle Bot for Slack",tags:["slack","appcircle bot","slack integration","slack app","slack bot"],sidebar_position:2},sidebar:"mySidebar",previous:{title:"Slack Notifications",permalink:"/nextjs-upload-file-tryout/account/my-organization/notifications-and-communication/slack/slack-notifications"},next:{title:"Email Notifications",permalink:"/nextjs-upload-file-tryout/account/my-organization/notifications-and-communication/email-connection"}},l={},d=[{value:"Adding Appcircle Bot to Slack",id:"adding-appcircle-bot-to-slack",level:3},{value:"Connecting Appcircle Bot to the Account",id:"connecting-appcircle-bot-to-the-account",level:3},{value:"Adding Appcircle Bot to a Channel",id:"adding-appcircle-bot-to-a-channel",level:3},{value:"Starting a Build with Appcircle Bot",id:"starting-a-build-with-appcircle-bot",level:3},{value:"Distributing the App to Testers",id:"distributing-the-app-to-testers",level:3},{value:"Send the App to Store Submission",id:"send-the-app-to-store-submission",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"appcircle-bot-for-slack",children:"Appcircle Bot for Slack"}),"\n",(0,c.jsx)(t.p,{children:"Appcircle is a comprehensive mobile CI/CD platform that automates the build, test, and deployment processes for mobile app development."}),"\n",(0,c.jsxs)(t.p,{children:["By adding ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," to your Slack workspace, you gain the ability to perform the same actions available on ",(0,c.jsx)(t.a,{href:"https://my.appcircle.io/",children:"appcircle.io"})," directly within Slack, including:"]}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:["\ud83d\udce6"," Start a build based on your chosen profile, branch, and workflow."]}),"\n",(0,c.jsxs)(t.li,{children:["\ud83d\udce4"," Send the selected version to your preferred test profiles or email addresses."]}),"\n",(0,c.jsxs)(t.li,{children:["\ud83d\udceb"," Send the designated version to the ",(0,c.jsx)(t.code,{children:"Submit Store"})," for review and distribution."]}),"\n"]}),"\n",(0,c.jsx)(t.admonition,{type:"info",children:(0,c.jsx)(t.p,{children:"There is currently no integration of Slack available on the self-hosted Appcircle. However, we are actively working on it and it will be available for use on the self-hosted Appcircle in the near future."})}),"\n",(0,c.jsx)(t.h3,{id:"adding-appcircle-bot-to-slack",children:"Adding Appcircle Bot to Slack"}),"\n",(0,c.jsxs)(t.p,{children:["Please note that only the person who added the ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," to the Slack workspace can see and manage it, and that person must be a ",(0,c.jsx)(t.code,{children:"Workspace Owner"})," or a ",(0,c.jsx)(t.code,{children:"Workspace Admin"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["To add the ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," to the workspace, you can choose one of the two options below:"]}),"\n",(0,c.jsxs)(t.ol,{children:["\n",(0,c.jsxs)(t.li,{children:["\n",(0,c.jsxs)(t.p,{children:["You can use the button below to add the ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," to the workspace."]}),"\n",(0,c.jsx)("a",{href:"https://slackbot.appcircle.io/slack/install",children:(0,c.jsx)("img",{alt:"Add to Slack - slack-bot-01.png",height:"44",width:"140",src:"https://cdn.appcircle.io/docs/assets/slack-bot-01.png"})}),"\n",(0,c.jsxs)(t.p,{children:["Then, you need to allow the ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," application."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-02.png"}),"\n"]}),"\n",(0,c.jsxs)(t.li,{children:["\n",(0,c.jsxs)(t.p,{children:["You can use the ",(0,c.jsx)(t.code,{children:"Slack App Directory"})," to add the ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," to the workspace."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-0.png"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(t.p,{children:"You will then see that Slack is connected."}),"\n",(0,c.jsx)(t.h3,{id:"connecting-appcircle-bot-to-the-account",children:"Connecting Appcircle Bot to the Account"}),"\n",(0,c.jsxs)(t.p,{children:["To connect ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," to your account, you need to use the ",(0,c.jsx)(t.code,{children:"Personal Access Token"})," generated from your account. If you don't know how to generate it, you can follow the steps in ",(0,c.jsx)(t.a,{href:"/appcircle-api/api-authentication",children:"this document"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["You can reach the ",(0,c.jsx)(t.code,{children:"Enter the PAT"})," screen with the ",(0,c.jsx)(t.code,{children:"Add Personal Access Token"})," button on the ",(0,c.jsx)(t.code,{children:"Home"})," tab when the application is opened."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-1.png"}),"\n",(0,c.jsx)(t.p,{children:"Enter the PAT on the mini screen that appears."}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-2.png"}),"\n",(0,c.jsxs)(t.p,{children:["If you enter the password correctly, you will receive a confirmation message from ",(0,c.jsx)(t.code,{children:"Appcircle Bot"}),"."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-3.png"}),"\n",(0,c.jsx)(t.p,{children:"If you want to update the PAT, you can follow the above steps for the new PAT."}),"\n",(0,c.jsx)(t.h3,{id:"adding-appcircle-bot-to-a-channel",children:"Adding Appcircle Bot to a Channel"}),"\n",(0,c.jsxs)(t.p,{children:["To be able to use the ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," commands, you need to add it to a channel. Commands cannot be used in private chat. Please note that anyone in the channel where you add the ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," can use the app commands. If an unauthorized person adds ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," to the channel, the app will leave the channel by itself."]}),"\n",(0,c.jsxs)(t.p,{children:["To add ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," to the channel, right-click on the app and click the ",(0,c.jsx)(t.code,{children:"View app details"}),"."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-4.png"}),"\n",(0,c.jsxs)(t.p,{children:["Click the ",(0,c.jsx)(t.code,{children:" + Add this app to a channel"})," button on the screen that appears."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-5.png"}),"\n",(0,c.jsx)(t.h3,{id:"starting-a-build-with-appcircle-bot",children:"Starting a Build with Appcircle Bot"}),"\n",(0,c.jsxs)(t.p,{children:["Start a new build by typing ",(0,c.jsx)(t.code,{children:"/build"})," in the channel where ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," has been added and pressing Enter."]}),"\n",(0,c.jsx)(t.p,{children:"On the screen that appears, select the profile you want to build."}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-6.png"}),"\n",(0,c.jsx)(t.p,{children:"Select a configured branch and a workflow, then start the build. Please note that selecting an unconfigured branch will result in an error."}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-7.png"}),"\n",(0,c.jsxs)(t.p,{children:["If the selections are correct, you will receive a confirmation message from ",(0,c.jsx)(t.code,{children:"Appcircle Bot"}),"."]}),"\n",(0,c.jsx)(t.h3,{id:"distributing-the-app-to-testers",children:"Distributing the App to Testers"}),"\n",(0,c.jsxs)(t.p,{children:["Start a new distribution to testers by typing ",(0,c.jsx)(t.code,{children:"/distribute"})," in the channel where ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," has been added and pressing Enter."]}),"\n",(0,c.jsx)(t.p,{children:"On the screen that appears, select the testing profile you want to distribute."}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-8.png"}),"\n",(0,c.jsxs)(t.p,{children:["Select a version to send, then press the ",(0,c.jsx)(t.code,{children:"Share with Testers"})," button. Please note that you should not select app bundle (AAB) files because ",(0,c.jsx)(t.code,{children:"AAB"})," files are only valid for Google Play submission, and they cannot be shared with testers or previewed on the device."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-9.png"}),"\n",(0,c.jsx)(t.p,{children:"On the screen that appears, fill in the following fields:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:["Select one or more ",(0,c.jsx)(t.code,{children:"testing groups"})," from the options. You can create a new ",(0,c.jsx)(t.code,{children:"testing group"})," via ",(0,c.jsx)(t.a,{href:"https://my.appcircle.io/",children:"appcircle.io"}),"."]}),"\n",(0,c.jsxs)(t.li,{children:["If you want to specify the email addresses of the testers to be sent, you can add these email addresses to the ",(0,c.jsx)(t.code,{children:"Email addresses"})," field by separating them with commas and spaces."]}),"\n",(0,c.jsxs)(t.li,{children:["Type your message in the ",(0,c.jsx)(t.code,{children:"Message to Testers"})," field to leave a message for the testers."]}),"\n"]}),"\n",(0,c.jsxs)(t.p,{children:["After filling in the required fields, press the ",(0,c.jsx)(t.code,{children:"Share"})," button."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-10.png"}),"\n",(0,c.jsxs)(t.p,{children:["Preview your choices on the screen that appears. You can remove email addresses or testing groups, and correct the messages to be sent to the testers. Then press the ",(0,c.jsx)(t.code,{children:"Next"})," button."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-10.0.png"}),"\n",(0,c.jsxs)(t.p,{children:["If the selections are correct, you will receive a confirmation message from ",(0,c.jsx)(t.code,{children:"Appcircle Bot"}),"."]}),"\n",(0,c.jsx)(t.h3,{id:"send-the-app-to-store-submission",children:"Send the App to Store Submission"}),"\n",(0,c.jsxs)(t.p,{children:["Send the built and signed app by typing ",(0,c.jsx)(t.code,{children:"/storesubmit"})," in the channel where ",(0,c.jsx)(t.code,{children:"Appcircle Bot"})," has been added and pressing Enter."]}),"\n",(0,c.jsxs)(t.p,{children:["On the screen that appears, select the ",(0,c.jsx)(t.code,{children:"Distribution Profile"})," you want to send."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-11.png"}),"\n",(0,c.jsxs)(t.p,{children:["Select a version to send, and press the ",(0,c.jsx)(t.code,{children:"Send for Store Submit"})," button. Please note that selecting an unconfigured branch will result in an error."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-12.png"}),"\n",(0,c.jsxs)(t.p,{children:["On the screen that appears, select the ",(0,c.jsx)(t.code,{children:"Store"})," you want to send, and press the ",(0,c.jsx)(t.code,{children:"Send to Store Submit"})," button."]}),"\n",(0,c.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/slack-bot-13.png"}),"\n",(0,c.jsxs)(t.p,{children:["If the selections are correct, you will receive a confirmation message from ",(0,c.jsx)(t.code,{children:"Appcircle Bot"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},46736:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var c=n(74848);function s(e){let{src:t,...n}=e;return(0,c.jsx)("img",{src:t,...n,className:"image-narrow"})}},69678:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var c=n(74848);function s(e){let{url:t}=e;return(0,c.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var c=n(96540);const s={},o=c.createContext(s);function i(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);