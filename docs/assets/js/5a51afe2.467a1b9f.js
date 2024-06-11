"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[33895],{6160:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=t(74848),o=t(28453),s=t(69678),r=t(70344);const l={title:"Testing Distribution Profile",description:"Learn how to create or select a distribution profile for testing in Appcircle",tags:["distribution","testing","distribution profile"],sidebar_position:3},a=void 0,d={id:"distribute/create-or-select-a-distribution-profile",title:"Testing Distribution Profile",description:"Learn how to create or select a distribution profile for testing in Appcircle",source:"@site/docs/distribute/create-or-select-a-distribution-profile.md",sourceDirName:"distribute",slug:"/distribute/create-or-select-a-distribution-profile",permalink:"/nextjs-upload-file-tryout/distribute/create-or-select-a-distribution-profile",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/distribute/create-or-select-a-distribution-profile.md",tags:[{label:"distribution",permalink:"/nextjs-upload-file-tryout/tags/distribution"},{label:"testing",permalink:"/nextjs-upload-file-tryout/tags/testing"},{label:"distribution profile",permalink:"/nextjs-upload-file-tryout/tags/distribution-profile"}],version:"current",sidebarPosition:3,frontMatter:{title:"Testing Distribution Profile",description:"Learn how to create or select a distribution profile for testing in Appcircle",tags:["distribution","testing","distribution profile"],sidebar_position:3},sidebar:"mySidebar",previous:{title:"Using the Testing Portal",permalink:"/nextjs-upload-file-tryout/distribute/testing-management/downloading-binaries"},next:{title:"App Reports",permalink:"/nextjs-upload-file-tryout/distribute/reports/"}},c={},u=[{value:"Auto send your build to the testers",id:"auto-send-your-build-to-the-testers",level:3},{value:"Using authentication for distribution",id:"using-authentication-for-distribution",level:3},{value:"Device Registration (iOS Only)",id:"device-registration-ios-only",level:3},{value:"Using Public Link for Distribution",id:"using-public-link-for-distribution",level:3},{value:"Manually upload your version",id:"manually-upload-your-version",level:3},{value:"New version from build module",id:"new-version-from-build-module",level:3},{value:"Android applications with multiple flavors",id:"android-applications-with-multiple-flavors",level:3},{value:"How to see the multiple flavor results",id:"how-to-see-the-multiple-flavor-results",level:4},{value:"Send your application to Publish",id:"send-your-application-to-publish",level:3},{value:"Share your application with the test groups manually",id:"share-your-application-with-the-test-groups-manually",level:3},{value:"Tracking your distribution",id:"tracking-your-distribution",level:3},{value:"Delete a Distribution Profile",id:"delete-a-distribution-profile",level:3},{value:"Delete Multiple Testing Distribution Versions",id:"delete-multiple-testing-distribution-versions",level:4},{value:"Delete a Single Distribution Profile Version",id:"delete-a-single-distribution-profile-version",level:4}];function p(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Select the Testing Distribution from the left and click on the Add New button. Give a name to your distribution profile."}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"As a best practice, we recommend using one single distribution profile for both iOS and Android versions of the same application."})}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/image (152).png"}),"\n",(0,n.jsx)(i.p,{children:"Once you create the distribution profile, you can now customize its settings. Click on the newly created build profile and then the settings button within the profile."}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/image (153).png"}),"\n",(0,n.jsx)(i.h3,{id:"auto-send-your-build-to-the-testers",children:"Auto send your build to the testers"}),"\n",(0,n.jsx)(i.p,{children:"Auto send feature lets your applications be distributed to specific testing groups whenever a new version is deployed, whether the deployment is triggered via a build process, CLI, or manual upload."}),"\n",(0,n.jsx)(i.p,{children:"To enable the auto send feature, you need to create testing groups and add testers to these groups."}),"\n",(0,n.jsx)(r.A,{url:"/distribute/testing-management/testing-groups",children:"Testing Groups"}),"\n",(0,n.jsx)(i.p,{children:"Under the Auto Send tab in the settings, you can see the testing groups you have created earlier. Just enable each testing group you want to have your application sent automatically whenever a new version is deployed."}),"\n",(0,n.jsx)(i.p,{children:"The first section allows you to share the deployed binaries automatically with the selected groups. They will receive a link to download the specific version on their mobile devices."}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/image (192).png"}),"\n",(0,n.jsx)(i.p,{children:"Your application will be sent to the related testing groups as soon as your build is complete, or when a package is manually uploaded or deployed via CLI."}),"\n",(0,n.jsx)(i.h3,{id:"using-authentication-for-distribution",children:"Using authentication for distribution"}),"\n",(0,n.jsx)(i.p,{children:"Under the Authentication tab in the settings, you can select a preferred authentication method for sharing your application."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"None"}),": No authentication, anyone with the link can download binary files"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Static Username and Password"}),": One single username and password for all testers"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"SSO Login"}),": SSO login for all testers (Enterprise accounts only)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"LDAP Login"}),": LDAP login for all testers (Enterprise accounts only)"]}),"\n"]}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/image (154).png"}),"\n",(0,n.jsxs)(i.p,{children:["To add your SSO and LDAP details, go to ",(0,n.jsx)(i.a,{href:"/account/my-organization",children:"My Organization"}),' Integrations screen and press the "Connect" button next to SSO Login or LDAP Login under the "Connections" section.']}),"\n",(0,n.jsx)(r.A,{url:"/account/my-organization/sso-providers-configuration/single-sign-on",children:"SSO Login"}),"\n",(0,n.jsx)(r.A,{url:"/account/my-organization/ldap-login",children:"LDAP Login"}),"\n",(0,n.jsx)(i.h3,{id:"device-registration-ios-only",children:"Device Registration (iOS Only)"}),"\n",(0,n.jsx)(i.p,{children:"You may enable this option to automatically register devices in the Apple Developer Portal and update your Ad Hoc provisioning profiles. You must select App Store Connect API Key, a build profile, and a configuration."}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/ios-device-registration.png"}),"\n",(0,n.jsx)(i.h3,{id:"using-public-link-for-distribution",children:"Using Public Link for Distribution"}),"\n",(0,n.jsx)(i.p,{children:"You may enable a public link for your distribution. This allows anyone who has the link to access all artifacts of the distribution profile. Additionally, users can now conveniently scan a QR code to retrieve the public link directly. This simplifies the process of accessing and sharing the distribution link, making it more accessible for users on mobile devices or others who prefer quick scanning."}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/be-3160-testing-distribution-public-link.png"}),"\n",(0,n.jsx)(i.h3,{id:"manually-upload-your-version",children:"Manually upload your version"}),"\n",(0,n.jsx)(i.p,{children:'If you have pre-built iOS or Android applications and want to distribute or preview them for testing, you can upload them using the upload field on the right panel (if no version is available) or using the "Upload New Version" button at the bottom right (if there are versions already present) to upload your files to the distribution profile.'}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/image (157).png"}),"\n",(0,n.jsx)(i.p,{children:"After the file is uploaded, it is checked for errors and parsed for metadata. If there is an error, it is displayed on the upload area."}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/image (156).png"}),"\n",(0,n.jsx)(i.p,{children:"Once the upload is complete, you will see the new version added to the top of the list with parsed metadata. You can now share this version with the testers or preview it on a virtual device in your browser."}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/image (158).png"}),"\n",(0,n.jsx)(i.h3,{id:""}),"\n",(0,n.jsx)(i.h3,{id:"new-version-from-build-module",children:"New version from build module"}),"\n",(0,n.jsx)(i.p,{children:"With a successful build, a new version of your application will be added to your distribution profile."}),"\n",(0,n.jsxs)(i.p,{children:["Simply go to ",(0,n.jsx)(i.em,{children:"Build Module"})," ",(0,n.jsx)(i.em,{children:">"})," ",(0,n.jsx)(i.em,{children:"Build Configuration"})," ",(0,n.jsx)(i.em,{children:">"})," ",(0,n.jsx)(i.em,{children:"Distribution"})," and select a distribution profile you want your build to be sent."]}),"\n",(0,n.jsxs)(i.admonition,{type:"tip",children:[(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/BE-3167-buildoutput.png"}),(0,n.jsx)(i.p,{children:"Users have the capability to select their Android build output as .AAB (Android App Bundle) from configuration settings within their Build profile."}),(0,n.jsxs)(i.p,{children:["When the ",(0,n.jsx)(i.code,{children:".AAB"})," build is sent to the designated Testing Distribution profile, either automatically or manually by uploading the file directly within the Testing Distribution profile, it will be automatically converted to ",(0,n.jsx)(i.code,{children:".APK"})," format when shared with a Testing Group. This ensures that the receiving tester downloads the shared artifact in ",(0,n.jsx)(i.code,{children:".APK"})," format."]}),(0,n.jsxs)(i.p,{children:["This conversion capability also applies when sending app versions from a Testing Distribution profile to an ",(0,n.jsx)(i.a,{href:"/enterprise-appstore",children:"Enterprise App Store"})," profile. The shared ",(0,n.jsx)(i.code,{children:".AAB"})," artifact will be downloaded in ",(0,n.jsx)(i.code,{children:".APK"})," format from the Enterprise App Store profile."]})]}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsx)(i.p,{children:"Only signed builds will be distributed. Unsigned builds cannot be distributed."})}),"\n",(0,n.jsx)(i.h3,{id:"android-applications-with-multiple-flavors",children:"Android applications with multiple flavors"}),"\n",(0,n.jsx)(i.p,{children:"For detailed information about multiple flavors, refer to this documentation:"}),"\n",(0,n.jsx)(r.A,{url:"/best-practices/building-multiple-apps-in-one-profile",children:"Building Multiple Apps in One Profile"}),"\n",(0,n.jsx)(i.p,{children:"If your Android application has multiple product flavors, Appcircle will create a build for each flavor of your application and let you distribute them at once. A common usage to multi-flavor applications can be free and paid versions of the same application."}),"\n",(0,n.jsxs)(i.p,{children:["When you build and distribute an application with multiple flavors, and ",(0,n.jsx)(i.code,{children:".apk"})," file will be created for each flavor. When the build is distributed, all of the binaries will be seen on the distribution profile:"]}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/testing-android-multi-flavor.png"}),"\n",(0,n.jsx)(i.h4,{id:"how-to-see-the-multiple-flavor-results",children:"How to see the multiple flavor results"}),"\n",(0,n.jsx)(i.p,{children:"If you also want to download or see the output, you can check through the following steps:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Click the three dot under the actions tab"}),"\n",(0,n.jsxs)(i.li,{children:["Click ",(0,n.jsx)(i.strong,{children:"Artifacts"})," to see all the build outputs."]}),"\n"]}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/testing-android-multi-flavor-download-artifacts.png"}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/testing-android-multi-flavor-artifacts.png"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"If your Git commit has any messages, they will be included in the distribution in Message To Testers area."})}),"\n",(0,n.jsx)(i.h3,{id:"send-your-application-to-publish",children:"Send your application to Publish"}),"\n",(0,n.jsx)(i.p,{children:"You can send your application from your Testing Distribution profile to a designated Publish profile by following these steps:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Click the three dots next to your application"}),"\n",(0,n.jsxs)(i.li,{children:["Click ",(0,n.jsx)(i.strong,{children:"Send to Publish"})]}),"\n",(0,n.jsx)(i.li,{children:"Choose your Publish profile from the list."}),"\n",(0,n.jsxs)(i.li,{children:["Click ",(0,n.jsx)(i.strong,{children:"Send"})]}),"\n"]}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/be-3110-sendpublish.png"}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/be-3110-sendpublish2.png"}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsx)(i.p,{children:"You must have already created the designated Publish profile within the Publish Module, and it should correspond to the operating system of your application (Android or iOS) listed in your Testing Distribution Profile."})}),"\n",(0,n.jsx)(i.h3,{id:"share-your-application-with-the-test-groups-manually",children:"Share your application with the test groups manually"}),"\n",(0,n.jsx)(i.p,{children:"When you have your build ready or uploaded your binary file to Appcircle, you can manually send the file to testers to let them download, install on their devices and run the application for testing purposes."}),"\n",(0,n.jsx)(i.p,{children:"Click on the Share with Testers button and select the testing groups you created previously that need to receive this version of your application. Alternatively, you can enter email addresses of the testers here to send them the application regardless of the testing groups."}),"\n",(0,n.jsx)(i.p,{children:"You can also add a message to testers including testing instructions and release notes."}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/06-07a-SendToTesterGroups.png"}),"\n",(0,n.jsxs)(i.p,{children:["You can automate this message using ",(0,n.jsx)(i.a,{href:"https://github.com/appcircleio/appcircle-release-notes-component/",children:"Release Notes Component"}),". You can enrich the contents of your release notes with environment variables or Ruby snippets. The following default template will print the branch name, commit hash and commit message"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ruby",children:"Branch: $AC_GIT_BRANCH\nCommit Hash:  <%= ENV['AC_GIT_COMMIT'][0..6] %>\nCommit Message: $AC_COMMIT_MESSAGE\n"})}),"\n",(0,n.jsx)(i.h3,{id:"-1"}),"\n",(0,n.jsx)(i.h3,{id:"tracking-your-distribution",children:"Tracking your distribution"}),"\n",(0,n.jsx)(i.p,{children:"After sending your application to testing groups, you can track the actions of testers:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Pending"})," - Means your tester didn't click on the link they received yet"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Clicked, No Login"})," - Means your tester clicked on the link they received but has not logged in to the system yet (only for authenticated distributions)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Login, No Download"})," - Means your tester has logged in (for authenticated distributions) and at the download screen but has not downloaded the binary file yet"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Downloaded"})," - Means your tester clicked and downloaded the binary file"]}),"\n"]}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/image (158).png"}),"\n",(0,n.jsx)(i.h3,{id:"delete-a-distribution-profile",children:"Delete a Distribution Profile"}),"\n",(0,n.jsx)(i.p,{children:"In order to remove clutter and/or free up storage, you can delete an entire profile in a single click.;"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Click on the three dot on the top right of the profile menu"}),"\n",(0,n.jsxs)(i.li,{children:["Click ",(0,n.jsx)(i.code,{children:"Delete"})]}),"\n",(0,n.jsx)(i.li,{children:"Go through the confirmation dialog"}),"\n"]}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/testing-delete-distribution-profile.png"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"In order to free up space, you should also remove the other references pointing to the artifact. In example, if you have the same artifact on the builds, you should also delete those artifacts as well."})}),"\n",(0,n.jsx)(i.h4,{id:"delete-multiple-testing-distribution-versions",children:"Delete Multiple Testing Distribution Versions"}),"\n",(0,n.jsx)(i.p,{children:"If you don't want to delete an entire distribution profile but free up the past distributions, you can also remove multiple entries."}),"\n",(0,n.jsxs)(i.p,{children:["Click on the ",(0,n.jsx)(i.code,{children:"Edit"})," Text to toggle edit mode:"]}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/testing-delete-multiple-edit-button.png"}),"\n",(0,n.jsxs)(i.p,{children:["On edit mode, you will be able to select multiple entries. Select the versions you wish to delete, and click on the ",(0,n.jsx)(i.code,{children:"Delete"})," Text on the top right of the versions:"]}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/testing-delete-multiple-delete-button.png"}),"\n",(0,n.jsx)(i.h4,{id:"delete-a-single-distribution-profile-version",children:"Delete a Single Distribution Profile Version"}),"\n",(0,n.jsx)(i.p,{children:"As an alternative method to bulk delete versions, you can delete a single version at the three dot menu on the top right of the screen.;"}),"\n",(0,n.jsx)(s.A,{url:"https://cdn.appcircle.io/docs/assets/image (205).png"}),"\n",(0,n.jsxs)(i.p,{children:["After clicking ",(0,n.jsx)(i.code,{children:"Delete"})," , type in the version name in the prompt."]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},70344:(e,i,t)=>{t.d(i,{A:()=>d});var n,o,s=t(96540);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(null,arguments)}const l=e=>{let{title:i,titleId:t,...l}=e;return s.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":t},l),i?s.createElement("title",{id:t},i):null,n||(n=s.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),o||(o=s.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var a=t(74848);function d(e){let{children:i,url:t}=e;return(0,a.jsxs)("a",{href:t,className:"content-ref-card",children:[(0,a.jsx)(l,{title:"File Icon",className:"file-icon"}),i]})}},69678:(e,i,t)=>{t.d(i,{A:()=>o});t(96540);var n=t(74848);function o(e){let{url:i}=e;return(0,n.jsx)("img",{className:"screenshot",src:i})}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>l});var n=t(96540);const o={},s=n.createContext(o);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);