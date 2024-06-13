"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[91415],{51435:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(74848),n=i(28453),s=i(69678);const r={title:"Common Workflow Steps",description:"Common workflow steps in Appcircle",tags:["workflow","steps","common"]},l="Common Workflow Steps",a={id:"workflows/common-workflow-steps/index",title:"Common Workflow Steps",description:"Common workflow steps in Appcircle",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/700_workflows/common-workflow-steps/index.md",sourceDirName:"700_workflows/common-workflow-steps",slug:"/workflows/common-workflow-steps/",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/common-workflow-steps/",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/700_workflows/common-workflow-steps/index.md",tags:[{label:"workflow",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/workflow"},{label:"steps",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/steps"},{label:"common",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/common"}],version:"current",frontMatter:{title:"Common Workflow Steps",description:"Common workflow steps in Appcircle",tags:["workflow","steps","common"]},sidebar:"tutorialSidebar",previous:{title:"What are Workflows and How to Use Workflows?",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/"},next:{title:"Active SSH Private Key",permalink:"/nextjs-upload-file-tryout/zh-Hans/workflows/common-workflow-steps/active-ssh-private-key"}},c={},d=[{value:"Activate SSH Key",id:"activate-ssh-key",level:2},{value:"Appium Server",id:"appium-server",level:2},{value:"Authenticate with Netrc",id:"authenticate-with-netrc",level:2},{value:"Cache Pull",id:"cache-pull",level:2},{value:"Cache Push",id:"cache-push",level:2},{value:"Code Reviews with Danger",id:"code-reviews-with-danger",level:2},{value:"Custom Scripts",id:"custom-scripts",level:2},{value:"Data Theorem Mobile Secure",id:"data-theorem-mobile-secure",level:2},{value:"Export Build Artifacts",id:"export-build-artifacts",level:2},{value:"File Size Check",id:"file-size-check",level:2},{value:"Firebase App Distribution",id:"firebase-app-distribution",level:2},{value:"Fortify On Demand",id:"fortify-on-demand",level:2},{value:"FTP Upload",id:"ftp-upload",level:2},{value:"Git Clone",id:"git-clone",level:2},{value:"Maestro Cloud Upload",id:"maestro-cloud-upload",level:2},{value:"Repeato Mobile Test Automation",id:"repeato-mobile-test-automation",level:2},{value:"Release Notes",id:"release-notes",level:2},{value:"SonarQube",id:"sonarqube",level:2},{value:"Snyk Scan Security",id:"snyk-scan-security",level:2},{value:"Testinium",id:"testinium",level:2}];function h(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,n.R)(),...e.components},{ContentRef:i,ExternalUrlRef:r}=o;return i||u("ContentRef",!0),r||u("ExternalUrlRef",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"common-workflow-steps",children:"Common Workflow Steps"}),"\n",(0,t.jsx)(o.p,{children:"The steps listed below are common across all build profiles regardless of the target OS and platform."}),"\n",(0,t.jsxs)(o.p,{children:["You can find the full list of available workflow steps in our ",(0,t.jsx)(o.a,{href:"https://github.com/appcircleio/appcircle-workflow-components",children:"workflow marketplace"})," and under each workflow step in this document, you can find the related repository URL, which also includes the documentation for the related step."]}),"\n",(0,t.jsx)(o.h2,{id:"activate-ssh-key",children:"Activate SSH Key"}),"\n",(0,t.jsx)(o.p,{children:"This step sets up your SSH key in the build machine if you used one to connect your repository. This allows the build machine to connect to your private repository using your SSH key."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/active-ssh-private-key",children:(0,t.jsx)(o.p,{children:"Active SSH Private Key"})}),"\n",(0,t.jsx)(o.h2,{id:"appium-server",children:"Appium Server"}),"\n",(0,t.jsxs)(o.p,{children:["This step installs ",(0,t.jsx)(o.a,{href:"https://appium.io/",children:"Appium Server"})," and starts it."]}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/appium-server",children:(0,t.jsx)(o.p,{children:"Appium Server"})}),"\n",(0,t.jsx)(o.h2,{id:"authenticate-with-netrc",children:"Authenticate with Netrc"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:".netrc"})," file contains login and initialization information used by the auto-login process. You can use this component to add credentials for hosts such as your repositories or external hosts. Git automatically recognizes the .netrc file. However, if you want to use the .netrc file with curl, you need to append the ",(0,t.jsx)(o.code,{children:"-n"})," command line parameter. You may also use the ",(0,t.jsx)(o.code,{children:"--netrc-optional"})," parameter if you don't always use the ",(0,t.jsx)(o.code,{children:".netrc"})," file with curl."]}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/authenticate-with-netrc",children:(0,t.jsx)(o.p,{children:"Authenticate with Netrc"})}),"\n",(0,t.jsx)(o.h2,{id:"cache-pull",children:"Cache Pull"}),"\n",(0,t.jsx)(o.p,{children:"Cache push uploads cache archive file to remote location as we explained in detail above. On the other hand cache pull downloads and extracts that archive file in build pipeline. All files and folders are extracted to original locations that came from."}),"\n",(0,t.jsx)(o.admonition,{type:"danger",children:(0,t.jsx)(o.p,{children:"Cache push and pull components should work in coordination on the same cache file. For this reason in order to download the pushed cache, cache pull must have the same cache label used in cache push."})}),"\n",(0,t.jsxs)(o.admonition,{type:"info",children:[(0,t.jsxs)(o.p,{children:["In the event that you need to utilize the cached folder in an alternate branch or a separate project, you have the capability to modify the values of ",(0,t.jsx)(o.code,{children:"$AC_GIT_BRANCH"})," or ",(0,t.jsx)(o.code,{children:"$AC_BUILD_PROFILE_ID"}),"."]}),(0,t.jsxs)(o.p,{children:["These variables can be adjusted within the ",(0,t.jsx)(o.strong,{children:"Cache Label"})," field, as indicated by the red highlight in the accompanying image. Simply replace them with the branch or project ID that corresponds to your intended usage."]}),(0,t.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/cache-01.png"})]}),"\n",(0,t.jsx)(o.p,{children:"Also you can have more than one push and pull pairs in the same build pipeline according to your needs."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/build-cache/cache-pull",children:(0,t.jsx)(o.p,{children:"Cache Pull"})}),"\n",(0,t.jsx)(o.h2,{id:"cache-push",children:"Cache Push"}),"\n",(0,t.jsx)(o.p,{children:"Every single build at Appcircle runs in clean state. It means that all files and folders, that are not versioned in git repository, are lost when build pipeline is completed. For example, installed dependencies or build artifacts. If you need to keep those files and folders, you can use Appcircle cache push and pull components."}),"\n",(0,t.jsx)(o.p,{children:"With cache you can persist any resource that are ignored from Git. So you can transfer files and folders between build pipelines. Sometimes it may speed up your build or it may help if you have reliability issues with the original download location for dependencies. But keep in mind that the cache is uploaded to or downloaded from remote location. It may help you in some cases, but it's not a guaranteed way of speeding up builds. You should try and see the actual results for your project."}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsxs)(o.p,{children:["Using ",(0,t.jsx)(o.strong,{children:"Cache Pull/Push"})," steps, particularly when employing repository management software like ",(0,t.jsx)(o.a,{href:"https://www.sonatype.com/products/sonatype-nexus-repository",children:"Sonatype Nexus Repository"}),", may not always yield the desired efficiency in reducing build time."]})}),"\n",(0,t.jsx)(o.p,{children:"The cache is stored as a single archive file. Cache push and pull components work in coordination on the same cache file defined with a label. With custom labelling you can have different chunks of caches and you can share some caches between branches. Cache labelling helps you organize your caches."}),"\n",(0,t.jsx)(o.p,{children:"When you drag and drop cache push component to your workflow, it comes with pre-defined values according to your project type. For example, for android projects it comes with pre-defined gradle cache paths which should be useful for most Android apps."}),"\n",(0,t.jsx)(o.p,{children:"If you need more paths to cache or need to change paths according to your project, you can customize included and excluded paths as you wish. All path updates will be reflected to archived cache file on your next build."}),"\n",(0,t.jsxs)(o.p,{children:["Cache push uses a pattern in order to select files and folders. Although the pattern is not a regexp, it's closer to a shell glob. For example, ",(0,t.jsx)(o.code,{children:"~/Library/Caches/CocoaPods"}),' will select "Cocoapods" folder from home as a whole. Or for an android project you can cache home ".gradle" folder with ',(0,t.jsx)(o.code,{children:"~/.gradle"}),' include path and exclude all ".lock" files from there with ',(0,t.jsx)(o.code,{children:"~/.gradle/**/*.lock"})," exclude path. Patterns, that can be used in included and excluded paths, is explained in detail ",(0,t.jsx)(o.a,{href:"https://github.com/appcircleio/appcircle-cache-push-component#included--excluded-paths",children:"here"}),"."]}),"\n",(0,t.jsx)(o.admonition,{type:"danger",children:(0,t.jsx)(o.p,{children:"Keep in mind that included paths and cache push step's workflow order are closely related with each other. For example, if you include a path from repository and you place cache push step before git clone step, cache push won't find that path since it's not git cloned yet. Although that's not a fatal error for cache push, it will inform you about unreachable paths on build logs. You can review and resolve those kinds of issues from build logs."})}),"\n",(0,t.jsx)(o.p,{children:'You can not reach the cache archive file directly by yourself. But you can see cache file updates and track changes to cache at the end of build pipeline from "Download Artifacts > ac_cache.zip". Also build logs have some useful information about cache mechanism with how included and excluded paths are processed. You can see produced cache file size from build logs. (Size of cache file affects upload and download durations.)'}),"\n",(0,t.jsx)(o.admonition,{type:"danger",children:(0,t.jsx)(o.p,{children:"You can not delete specific cache file from UI but if you have a problem with cache file and need a fresh one, you can change your cache label to a new one to go on with clean cache."})}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsx)(o.p,{children:"System automatically cleans unreachable and obsolete cache files periodically. For this reason, it's not guaranteed to reach a previously used cache file by using previous cache label in build. Also it\u2019s a good idea to build your workflow in a way that your build won\u2019t fail if the cache can\u2019t be accessed."})}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/build-cache/cache-push",children:(0,t.jsx)(o.p,{children:"Cache Push"})}),"\n",(0,t.jsx)(o.h2,{id:"code-reviews-with-danger",children:"Code Reviews with Danger"}),"\n",(0,t.jsx)(o.p,{children:"Danger runs during your CI process and gives teams the chance to automate common code review chores. This provides another logical step in your build, through this Danger can help lint your rote tasks in daily code review. You can use Danger to codify your team\u2019s norms. Leaving humans to think about harder problems."}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://blog.appcircle.io/article/danger-in-ci-automate-your-mobile-code-reviews",children:(0,t.jsx)(r,{url:"https://blog.appcircle.io/article/danger-in-ci-automate-your-mobile-code-reviews",title:"Danger in CI: Automate Your Mobile Code Reviews - Appcircle Blog",description:"Did you know that you can set rules for your code reviews and make sure they are checked before submitted? You can with running Danger in CI.",image:"https://ac.appcircle.io/wp-content/uploads/2022/11/AnyConv.com__danger-min.webp"})})}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/danger",children:(0,t.jsx)(o.p,{children:"Code Reviews with Danger"})}),"\n",(0,t.jsx)(o.h2,{id:"custom-scripts",children:"Custom Scripts"}),"\n",(0,t.jsx)(o.p,{children:"You can use custom scripts for additional functionalities in your builds. Appcircle will run the commands in your custom scripts and perform the specified actions. These scripts will be run on the build agent and you can use any functionality of the virtual machine as you need."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/custom-script",children:(0,t.jsx)(o.p,{children:"Custom Scripts"})}),"\n",(0,t.jsx)(o.h2,{id:"data-theorem-mobile-secure",children:"Data Theorem Mobile Secure"}),"\n",(0,t.jsx)(o.p,{children:"This component scans your app using Mobile Secure"}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/data-theorem-mobile-secure",children:(0,t.jsx)(o.p,{children:"Data Theorem Mobile Secure"})}),"\n",(0,t.jsx)(o.h2,{id:"export-build-artifacts",children:"Export Build Artifacts"}),"\n",(0,t.jsx)(o.p,{children:"Exports the specified build artifacts from the build agent to the Appcircle dashboard. The exported files will be available for download from the artifacts section of the completed build."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/export-build-artifacts",children:(0,t.jsx)(o.p,{children:"Export Build Artifacts"})}),"\n",(0,t.jsx)(o.h2,{id:"file-size-check",children:"File Size Check"}),"\n",(0,t.jsx)(o.p,{children:"This component checks the file size and either warn or fail the workflow."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/file-size-check",children:(0,t.jsx)(o.p,{children:"File Size Check"})}),"\n",(0,t.jsx)(o.h2,{id:"firebase-app-distribution",children:"Firebase App Distribution"}),"\n",(0,t.jsx)(o.p,{children:"Send your apps to be distributed via Firebase App Distribution"}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/firebase-app-distribution",children:(0,t.jsx)(o.p,{children:"Firebase App Distribution"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://github.com/appcircleio/appcircle-firebase-dsym-upload-component",children:(0,t.jsx)(r,{url:"https://github.com/appcircleio/appcircle-firebase-dsym-upload-component",title:"GitHub - appcircleio/appcircle-firebase-dsym-upload-component",description:"Contribute to appcircleio/appcircle-firebase-dsym-upload-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/0bdb25c1c21e27f551b0cce22a6ebe686efcee740a7475d2077e6900d9db1e48/appcircleio/appcircle-firebase-dsym-upload-component"})})}),"\n",(0,t.jsx)(o.h2,{id:"fortify-on-demand",children:"Fortify On Demand"}),"\n",(0,t.jsxs)(o.p,{children:["This step installs ",(0,t.jsx)(o.a,{href:"https://www.microfocus.com/en-us/cyberres/application-security/fortify-on-demand/",children:"Fortify on Demand"})," and submits a Fortify on Demand Mobile Assessment"]}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/fod-mobile-assesment",children:(0,t.jsx)(o.p,{children:"Fortify On Demand"})}),"\n",(0,t.jsx)(o.h2,{id:"ftp-upload",children:"FTP Upload"}),"\n",(0,t.jsx)(o.p,{children:"This component uploads file or folders to given FTP server."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/ftp-upload",children:(0,t.jsx)(o.p,{children:"FTP Upload"})}),"\n",(0,t.jsx)(o.h2,{id:"git-clone",children:"Git Clone"}),"\n",(0,t.jsx)(o.p,{children:"Clones the Git repository to the build agent with the given arguments."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/git-clone",children:(0,t.jsx)(o.p,{children:"Git Clone"})}),"\n",(0,t.jsx)(o.h2,{id:"maestro-cloud-upload",children:"Maestro Cloud Upload"}),"\n",(0,t.jsx)(o.p,{children:"This component uploasd both your app binary and flows to Maestro Cloud."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/maestro-cloud-upload",children:(0,t.jsx)(o.p,{children:"Maestro Cloud Upload"})}),"\n",(0,t.jsx)(o.h2,{id:"repeato-mobile-test-automation",children:"Repeato Mobile Test Automation"}),"\n",(0,t.jsx)(o.p,{children:"This component creates and automates UI tests for iOS and Android."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/repeato-test-runner",children:(0,t.jsx)(o.p,{children:"Repeato Mobile Test Automation"})}),"\n",(0,t.jsx)(o.h2,{id:"release-notes",children:"Release Notes"}),"\n",(0,t.jsx)(o.p,{children:"You can use Release Notes component to create release notes during your workflow."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/publish-release-notes",children:(0,t.jsx)(o.p,{children:"Release Notes"})}),"\n",(0,t.jsx)(o.h2,{id:"sonarqube",children:"SonarQube"}),"\n",(0,t.jsx)(o.p,{children:"You can use SonarQube component to check your code quality."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/sonarqube",children:(0,t.jsx)(o.p,{children:"SonarQube"})}),"\n",(0,t.jsx)(o.h2,{id:"snyk-scan-security",children:"Snyk Scan Security"}),"\n",(0,t.jsx)(o.p,{children:"By utilizing this step, you will be able to test your project dependencies for vulnerabilities during builds and use Snyk to monitor your projects."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/snyk-scan-security",children:(0,t.jsx)(o.p,{children:"Snyk Scan Security"})}),"\n",(0,t.jsx)(o.h2,{id:"testinium",children:"Testinium"}),"\n",(0,t.jsx)(o.p,{children:"This component runs your test plans with Testinium."}),"\n",(0,t.jsx)(i,{url:"/workflows/common-workflow-steps/testinium",children:(0,t.jsx)(o.p,{children:"Testinium"})})]})}function p(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function u(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},69678:(e,o,i)=>{i.d(o,{A:()=>n});i(96540);var t=i(74848);function n(e){let{url:o}=e;return(0,t.jsx)("img",{className:"screenshot",src:o})}},28453:(e,o,i)=>{i.d(o,{R:()=>r,x:()=>l});var t=i(96540);const n={},s=t.createContext(n);function r(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);