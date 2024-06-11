"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[22180],{74597:(e,i,t)=>{t.d(i,{Ay:()=>n,RM:()=>s});var r=t(74848),o=t(28453);const s=[{value:"Need help?",id:"need-help",level:3}];function l(e){const i={a:"a",h3:"h3",p:"p",...(0,o.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h3,{id:"need-help",children:"Need help?"}),"\n",(0,r.jsx)(i.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,r.jsx)(t,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function n(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},35833:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var r=t(74848),o=t(28453),s=t(69678),l=t(74597);const n={title:"Manual and Automatic Builds",description:"Learn how to build manually or automatically with webhooks and triggers in Appcircle",tags:["build","build process management","manual build","automatic build","triggers","webhooks"],sidebar_position:10},a="Build Manually or Automatically with Webhooks and Triggers",c={id:"build/build-process-management/build-manually-or-with-triggers",title:"Manual and Automatic Builds",description:"Learn how to build manually or automatically with webhooks and triggers in Appcircle",source:"@site/docs/build/build-process-management/build-manually-or-with-triggers.md",sourceDirName:"build/build-process-management",slug:"/build/build-process-management/build-manually-or-with-triggers",permalink:"/nextjs-upload-file-tryout/build/build-process-management/build-manually-or-with-triggers",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/build/build-process-management/build-manually-or-with-triggers.md",tags:[{label:"build",permalink:"/nextjs-upload-file-tryout/tags/build"},{label:"build process management",permalink:"/nextjs-upload-file-tryout/tags/build-process-management"},{label:"manual build",permalink:"/nextjs-upload-file-tryout/tags/manual-build"},{label:"automatic build",permalink:"/nextjs-upload-file-tryout/tags/automatic-build"},{label:"triggers",permalink:"/nextjs-upload-file-tryout/tags/triggers"},{label:"webhooks",permalink:"/nextjs-upload-file-tryout/tags/webhooks"}],version:"current",sidebarPosition:10,frontMatter:{title:"Manual and Automatic Builds",description:"Learn how to build manually or automatically with webhooks and triggers in Appcircle",tags:["build","build process management","manual build","automatic build","triggers","webhooks"],sidebar_position:10},sidebar:"mySidebar",previous:{title:"Branch Management",permalink:"/nextjs-upload-file-tryout/build/build-process-management/build-profile-branch-operations"},next:{title:"Platform Build Guides",permalink:"/nextjs-upload-file-tryout/build/platform-build-guides/"}},d={},u=[{value:"Manual Build",id:"manual-build",level:2},{value:"Workflows for Manual Builds",id:"workflows-for-manual-builds",level:3},{value:"Automatic Build",id:"automatic-build",level:2},{value:"Setting Up Manual Webhooks for SSH and Public Repositories",id:"setting-up-manual-webhooks-for-ssh-and-public-repositories",level:3},{value:"Managing Triggers for Builds",id:"managing-triggers-for-builds",level:2},{value:"Auto build on every push",id:"auto-build-on-every-push",level:4},{value:"Auto build pull/merge requests",id:"auto-build-pullmerge-requests",level:4},{value:"Triggering different workflows at the same time",id:"triggering-different-workflows-at-the-same-time",level:4},{value:"Selective auto build with specific tags",id:"selective-auto-build-with-specific-tags",level:4},{value:"Skipping a workflow",id:"skipping-a-workflow",level:3},{value:"Retrying a workflow",id:"retrying-a-workflow",level:3},{value:"Further Automatic Build Subjects",id:"further-automatic-build-subjects",level:2},{value:"Trigger Priorities",id:"trigger-priorities",level:3},{value:"Wildcard Reference",id:"wildcard-reference",level:3},{value:"How to enable triggers for AWS CodeCommit repositories?",id:"how-to-enable-triggers-for-aws-codecommit-repositories",level:3},...l.RM];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{ExternalUrlRef:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"build-manually-or-automatically-with-webhooks-and-triggers",children:"Build Manually or Automatically with Webhooks and Triggers"}),"\n",(0,r.jsx)(i.p,{children:"There are multiple ways to trigger a build in Appcircle. You can run builds manually or automate the build process with various triggers."}),"\n",(0,r.jsx)("iframe",{width:"640",height:"315",src:"https://www.youtube.com/embed/zxxax79KD9U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,r.jsx)(i.h2,{id:"manual-build",children:"Manual Build"}),"\n",(0,r.jsxs)(i.p,{children:["As the name states, your build profile will not build your application until you tell it to. You can browse branches in your Git repository and select any commit from any branch you need to build. To initiate a manual build, just press the ",(0,r.jsx)(i.strong,{children:"Start Build"})," button."]}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/adding-a-build-profile-inside.png"}),"\n",(0,r.jsx)(i.h3,{id:"workflows-for-manual-builds",children:"Workflows for Manual Builds"}),"\n",(0,r.jsxs)(i.p,{children:["For the manual builds, the currently available push triggers apply and if no trigger is configured, the following trigger is provided by default under the ",(0,r.jsx)(i.a,{href:"#auto-build-on-every-push",children:"push triggers"}),". If there are others, they may take precedence based on the ",(0,r.jsx)(i.a,{href:"#trigger-priorities",children:"trigger priorities"}),"."]}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/build-manual-push-trigger.png"}),"\n",(0,r.jsx)(i.h2,{id:"automatic-build",children:"Automatic Build"}),"\n",(0,r.jsx)(i.p,{children:"Builds can be triggered with various triggers such as every push to the repository, pull/merge requests, or tagged pushes. This requires the following:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Webhook connection to the repository"}),"\n",(0,r.jsx)(i.li,{children:"Setting up build triggers"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"There are two options to set up webhooks for automatic builds:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["You can ",(0,r.jsx)(i.a,{href:"/build/manage-the-connections/adding-a-build-profile#connect-your-repository",children:"authorize the Appcircle app"})," for GitHub, Bitbucket, or GitLab repositories for direct integration. The triggers will be available for use immediately. (You can skip the next part about the webhook setup.)"]}),"\n",(0,r.jsx)(i.li,{children:"For the repository connections through SSH, you can add the specific webhook for that build profile manually to the compatible git provider. This enables the git provider to send a POST request to Appcircle for the selected events, which you can then use for triggers."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"setting-up-manual-webhooks-for-ssh-and-public-repositories",children:"Setting Up Manual Webhooks for SSH and Public Repositories"}),"\n",(0,r.jsx)(i.p,{children:"For repositories connected through SSH, you can set up triggers with webhooks in compatible repository providers."}),"\n",(0,r.jsx)(i.p,{children:"When you connect a repository through SSH or through a public URL, the Webhook URL option will be enabled in the context menu of the build profile, accessible from the top of the profile details."}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/build-manual-webhook-url.png"}),"\n",(0,r.jsx)(i.p,{children:"If the git provider is detected, a compatible URL will be displayed automatically. If not, you will be first prompted to select the provider to display the webhook URL."}),"\n",(0,r.jsx)(i.p,{children:"You can copy this URL and paste it in the related section in the git provider repository settings with the copy button."}),"\n",(0,r.jsx)(i.p,{children:"You can also regenerate the URL to invalidate/revoke the previous one with the refresh button."}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/build-manual-webhook-url-menu.png"}),"\n",(0,r.jsx)(i.p,{children:"Please refer to the following guides to set up webhooks in various git providers:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["GitHub: ",(0,r.jsx)(i.a,{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks",children:(0,r.jsx)(t,{url:"https://docs.github.com/en/developers/webhooks-and-events/webhooks",title:"Webhooks documentation - GitHub Docs",description:"Webhooks can let your integrations take an action in response to events that occur on GitHub.",image:"https://github.githubassets.com/images/modules/open_graph/github-logo.png"})})]}),"\n",(0,r.jsxs)(i.li,{children:["Bitbucket: ",(0,r.jsx)(i.a,{href:"https://support.atlassian.com/bitbucket-cloud/docs/manage-webhooks/",children:(0,r.jsx)(t,{url:"https://support.atlassian.com/bitbucket-cloud/docs/manage-webhooks/",title:"Manage webhooks | Bitbucket Cloud | Atlassian Support",description:"Webhooks provide a way to configure Bitbucket Cloud to make requests to your service whenever certain events occur.",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})]}),"\n",(0,r.jsxs)(i.li,{children:["GitLab: ",(0,r.jsx)(i.a,{href:"https://docs.gitlab.com/ee/user/project/integrations/webhooks.html",children:(0,r.jsx)(t,{url:"https://docs.gitlab.com/ee/user/project/integrations/webhooks.html",title:"Webhooks | GitLab",description:"Custom HTTP callbacks, used to send events.",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})]}),"\n",(0,r.jsxs)(i.li,{children:["AWS CodeCommit: ",(0,r.jsx)(i.a,{href:"https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-notify.html",children:(0,r.jsx)(t,{url:"https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-notify.html",title:"Manage triggers for an AWS CodeCommit repository - AWS CodeCommit",description:"Describes how to create triggers for events in a CodeCommit repository that can be integrated with other AWS services, including AWS Lambda and Amazon Simple Notification Service.",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})]}),"\n",(0,r.jsxs)(i.li,{children:["Azure DevOps: ",(0,r.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/azure/devops/service-hooks/overview?view=azure-devops",children:(0,r.jsx)(t,{url:"https://docs.microsoft.com/en-us/azure/devops/service-hooks/overview?view=azure-devops",title:"Integrate with service hooks - Azure DevOps",description:"Perform tasks with other services when events happen in your project in Azure DevOps.",image:"https://learn.microsoft.com/en-us/media/open-graph-image.png"})})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"In essence, you need to find the Webhooks section under the repository settings and paste the payload URL. You can then select the relevant events for the triggers, some examples of which are branch/tag creation/removal, pull requests, and pushes."}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["You can also use",(0,r.jsx)(i.a,{href:"/appcircle-api",children:" appcircle-cli"})," to trigger your builds from the command line as well."]})}),"\n",(0,r.jsx)(i.h2,{id:"managing-triggers-for-builds",children:"Managing Triggers for Builds"}),"\n",(0,r.jsx)(i.p,{children:"To set up or manage the build triggers, click the Triggers button in the context menu of the build profile, accessible from the top of the profile details."}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-workflow-trigger-showcase.png"}),"\n",(0,r.jsxs)(i.p,{children:["The triggers are set up at the profile level and you can specify individual branch names or ",(0,r.jsx)(i.a,{href:"#wildcard-reference",children:"utilize wildcards"})," for branch names to trigger builds."]}),"\n",(0,r.jsx)(i.p,{children:"You also need to select a workflow for each trigger and the build will be run with that trigger for the specified branch. You can build the same branch with different workflows (e.g. production or development) or you can use the same workflow for multiple branches (e.g. multiple feature branches built with the develop workflow)."}),"\n",(0,r.jsx)(i.h4,{id:"auto-build-on-every-push",children:"Auto build on every push"}),"\n",(0,r.jsx)(i.p,{children:"Appcircle will start building your application whenever you push a commit to your Git repository. For the specified branches, your project will be built automatically with the selected workflow."}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/build-manual-push-trigger.png"}),"\n",(0,r.jsx)(i.p,{children:"You must choose both workflow and a configuration when you're setting up a trigger."}),"\n",(0,r.jsx)(i.h4,{id:"auto-build-pullmerge-requests",children:"Auto build pull/merge requests"}),"\n",(0,r.jsx)(i.p,{children:"Appcircle will start building your application whenever you initiate a pull request or merge request from the source branch(es) to the target branch."}),"\n",(0,r.jsx)(i.p,{children:"The build will be done with the pull/merge result using the selected workflow. This allows testing of the PR/MR result before the actual approval of the request."}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsx)(i.p,{children:"Make sure that the names of the source branch and the target branch are spelled correctly."})}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/mr-pr-last.png"}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsx)(i.p,{children:"If spaces are used in the name, Appcircle will trim it without spaces."})}),"\n",(0,r.jsxs)(i.admonition,{type:"info",children:[(0,r.jsx)(i.p,{children:"If you are using Azure DevOps Server or Azure DevOps Services Cloud as a Git provider, the Appcircle build trigger will not run for PR status updates (Approve, Approve with suggestions, Wait for author, Reject, etc.) or action changes (Complete, Mark as draft, Abandon)."}),(0,r.jsx)(i.p,{children:"Appcircle will only run the trigger for PR creation or PR updates."})]}),"\n",(0,r.jsx)(i.h4,{id:"triggering-different-workflows-at-the-same-time",children:"Triggering different workflows at the same time"}),"\n",(0,r.jsx)(i.p,{children:"Now you will be able to trigger different workflows in the same source branch and target branch on Appcircle at once. As soon as the trigger is triggered, Appcircle will start running all the triggered triggers in the build queue, starting from the first place in the established trigger queue."}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/build-pr-mr-trigger-multiple.png"}),"\n",(0,r.jsx)(i.h4,{id:"selective-auto-build-with-specific-tags",children:"Selective auto build with specific tags"}),"\n",(0,r.jsx)(i.p,{children:"Appcircle will start building your application with the selected workflow whenever you perform a push with certain tags to your Git repository. Your project will be built automatically only if the push has the tags you specify or you can specify a wildcard tag to build all tagged pushes."}),"\n",(0,r.jsx)(i.p,{children:'This allows build scenarios like building only specific pushes that has the "release" in the tag.'}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/tag-last.png"}),"\n",(0,r.jsx)(i.h3,{id:"skipping-a-workflow",children:"Skipping a workflow"}),"\n",(0,r.jsxs)(i.p,{children:["If your commit message includes ",(0,r.jsx)(i.code,{children:"[skip ci]"})," or ",(0,r.jsx)(i.code,{children:"[ci skip]"}),", your workflow will be skipped."]}),"\n",(0,r.jsx)(i.h3,{id:"retrying-a-workflow",children:"Retrying a workflow"}),"\n",(0,r.jsxs)(i.p,{children:["If your Merge Request comment includes ",(0,r.jsx)(i.code,{children:"[retry]"}),", your workflow will be retried."]}),"\n",(0,r.jsx)(i.h2,{id:"further-automatic-build-subjects",children:"Further Automatic Build Subjects"}),"\n",(0,r.jsx)(i.h3,{id:"trigger-priorities",children:"Trigger Priorities"}),"\n",(0,r.jsx)(i.p,{children:"If you set multiple triggers, certain branch definitions will not take precedence over wildcard definitions. They will all start at the same time. Below is an example:"}),"\n",(0,r.jsxs)(i.p,{children:["Assume that you have a branch named ",(0,r.jsx)(i.code,{children:"development"})," with three push triggers"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Trigger branch: ",(0,r.jsx)(i.code,{children:"*"})," -> Trigger Workflow: Workflow 1"]}),"\n",(0,r.jsxs)(i.li,{children:["Trigger branch: ",(0,r.jsx)(i.code,{children:"development"})," -> Trigger Workflow: Workflow 2"]}),"\n",(0,r.jsxs)(i.li,{children:["Trigger branch: ",(0,r.jsx)(i.code,{children:"develop*"})," -> Trigger Workflow: Workflow 3"]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["When there is a push or PR for the development branch, all triggers (since the word ",(0,r.jsx)(i.code,{children:"development"})," contains both ",(0,r.jsx)(i.code,{children:"*"})," and ",(0,r.jsx)(i.code,{children:"develop*"}),") will be used to start a different build for each branch. At this point, a total of three build pipelines will begin."]}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsx)(i.p,{children:"If multiple triggered builds exceed your plan's concurrency limits, Appcircle will automatically queue them, and all of them will be executed unless you cancel."})}),"\n",(0,r.jsx)(i.h3,{id:"wildcard-reference",children:"Wildcard Reference"}),"\n",(0,r.jsx)(i.p,{children:"You can specify branch names or tags with an asterisk wildcard to automate builds. Below are some examples:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Pattern"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"*-fix"})}),(0,r.jsxs)(i.td,{children:["Build if it ends with ",(0,r.jsx)(i.code,{children:"-fix"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"fix-*"})}),(0,r.jsxs)(i.td,{children:["Build if it starts with ",(0,r.jsx)(i.code,{children:"fix-"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"*-fix-*"})}),(0,r.jsxs)(i.td,{children:["Build if it ",(0,r.jsx)(i.code,{children:"-fix-"})," is present anywhere in the name"]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"fix-*-build"})}),(0,r.jsxs)(i.td,{children:["Build if it starts with ",(0,r.jsx)(i.code,{children:"fix-"})," and ends with ",(0,r.jsx)(i.code,{children:"-build"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"*"})}),(0,r.jsx)(i.td,{children:"Build everything"})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"how-to-enable-triggers-for-aws-codecommit-repositories",children:"How to enable triggers for AWS CodeCommit repositories?"}),"\n",(0,r.jsx)(i.p,{children:"Appcircle supports AWS CodeCommit triggers through an Amazon SNS topic."}),"\n",(0,r.jsxs)(i.p,{children:["For more information, please refer to: ",(0,r.jsx)(i.a,{href:"https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-notify-sns.html",children:(0,r.jsx)(t,{url:"https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-notify-sns.html",title:"Example: Create an AWS CodeCommit trigger for an Amazon SNS topic - AWS CodeCommit",description:"Describes how to create a trigger for events in a CodeCommit repository that can be integrated with Amazon Simple Notification Service.",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})]}),"\n",(0,r.jsx)(i.p,{children:"After you follow the steps in the referenced document above to create a trigger, you need to create a notification rule under CodeCommit Settings as shown below to add a webhook URL."}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/codecommit-settings.png"}),"\n",(0,r.jsx)(i.p,{children:'Then select the "Enable raw message delivery" option while adding the webhook URL as a subscription to the topic.'}),"\n",(0,r.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/enable-raw-message-delivery.png"}),"\n","\n",(0,r.jsx)(l.Ay,{})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},69678:(e,i,t)=>{t.d(i,{A:()=>o});t(96540);var r=t(74848);function o(e){let{url:i}=e;return(0,r.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>n});var r=t(96540);const o={},s=r.createContext(o);function l(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);