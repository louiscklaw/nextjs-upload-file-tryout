"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[9477],{23756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=n(74848),s=n(28453),o=n(69678);const a={title:"Update Metadata on App Store Connect",description:"This step enables you to upload the Metadata information of application on App Store Connect.",tags:["publish","ios","metadata","app store connect"],sidebar_position:5},r="Update Metadata on App Store Connect",d={id:"publish-integrations/ios-publish-integrations/update-metadata-on-app-store-connect",title:"Update Metadata on App Store Connect",description:"This step enables you to upload the Metadata information of application on App Store Connect.",source:"@site/docs/publish-integrations/ios-publish-integrations/update-metadata-on-app-store-connect.md",sourceDirName:"publish-integrations/ios-publish-integrations",slug:"/publish-integrations/ios-publish-integrations/update-metadata-on-app-store-connect",permalink:"/nextjs-upload-file-tryout/publish-integrations/ios-publish-integrations/update-metadata-on-app-store-connect",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/publish-integrations/ios-publish-integrations/update-metadata-on-app-store-connect.md",tags:[{label:"publish",permalink:"/nextjs-upload-file-tryout/tags/publish"},{label:"ios",permalink:"/nextjs-upload-file-tryout/tags/ios"},{label:"metadata",permalink:"/nextjs-upload-file-tryout/tags/metadata"},{label:"app store connect",permalink:"/nextjs-upload-file-tryout/tags/app-store-connect"}],version:"current",sidebarPosition:5,frontMatter:{title:"Update Metadata on App Store Connect",description:"This step enables you to upload the Metadata information of application on App Store Connect.",tags:["publish","ios","metadata","app store connect"],sidebar_position:5},sidebar:"mySidebar",previous:{title:"Get Approval from TestFlight",permalink:"/nextjs-upload-file-tryout/publish-integrations/ios-publish-integrations/approval-test-flight"},next:{title:"Android Integrations Overview",permalink:"/nextjs-upload-file-tryout/publish-integrations/android-publish-integrations/"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"update-metadata-on-app-store-connect",children:"Update Metadata on App Store Connect"}),"\n",(0,i.jsxs)(t.p,{children:["This step uploads all edited metadata information from the ",(0,i.jsx)(t.a,{href:"/publish-module/publish-information/meta-data-information",children:(0,i.jsx)(t.strong,{children:"Metadata Information"})})," page to the corresponding sections on App Store Connect. When this step executes, you can see the detailed updated metadata information with localization."]}),"\n",(0,i.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE3741-previewMetadata.png"}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"This step operates independently; it does not require any specific prior steps. You can incorporate it anywhere in the Publish Flow according to your workflow."}),"\n",(0,i.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE3741-metadataOrder.png"}),"\n",(0,i.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,i.jsx)(t.p,{children:"Below are the parameters necessary for this step's operation, along with their descriptions."}),"\n",(0,i.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE3741-metadataInput.png"}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Uploads screenshots while sending METADATA"})," : This value is ",(0,i.jsx)(t.code,{children:"true"})," by default and includes screen shots uploaded in ",(0,i.jsx)(t.a,{href:"/publish-module/publish-information/meta-data-information#ios-metadata-information",children:(0,i.jsx)(t.strong,{children:"Metadata Information"})})," during the upload process. If ",(0,i.jsx)(t.code,{children:"false"}),", screen shots will not be uploaded."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Update Metadata fields"})," : This value is ",(0,i.jsx)(t.code,{children:"true"})," by default and ensures that the ",(0,i.jsx)(t.a,{href:"/publish-module/publish-information/meta-data-information#ios-metadata-information",children:(0,i.jsx)(t.strong,{children:"Metadata Information"})})," to be updated is uploaded. If ",(0,i.jsx)(t.code,{children:"false"}),", the entered metadata information will not be uploaded."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Clear all previously uploaded screenshots"})," : This value is ",(0,i.jsx)(t.code,{children:"false"})," by default. If ",(0,i.jsx)(t.code,{children:"true"}),", screen shots on the App Store Connect will be deleted and new ones will be uploaded."]}),"\n"]}),(0,i.jsx)(t.admonition,{title:"Clear all previously uploaded screenshots",type:"danger",children:(0,i.jsxs)(t.p,{children:["Note that when this value is selected as ",(0,i.jsx)(t.code,{children:"true"}),", your ",(0,i.jsx)(t.strong,{children:"screen shots"})," will be ",(0,i.jsx)(t.strong,{children:"deleted"})," from your ",(0,i.jsx)(t.strong,{children:"App Store Connect"})," account."]})})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Status"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_XCODE_LIST_DIR"})}),(0,i.jsxs)(t.td,{children:["Specifies the Xcode folder list directory. Current Xcode folder structure examples: ",(0,i.jsx)(t.code,{children:"/Applications/Xcode/14.3/Xcode"})," or ",(0,i.jsx)(t.code,{children:"/Applications/Xcode/15.0/Xcode"}),"."]}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_XCODE_VERSION"})}),(0,i.jsx)(t.td,{children:"Specifies the Xcode version."}),(0,i.jsx)(t.td,{children:"Required"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_UPLOAD_SCREENSHOT_FILES"})}),(0,i.jsx)(t.td,{children:"Uploads screenshot files to App Store Connect for the related app version."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_UPDATE_METADATA_INFO"})}),(0,i.jsx)(t.td,{children:"If disabled updating METADATA info will be ignored."}),(0,i.jsx)(t.td,{children:"Optional"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"$AC_CLEAR_SCREENSHOTS"})}),(0,i.jsx)(t.td,{children:"If enabled all screenshots on App Store Connect will be removed before upload."}),(0,i.jsx)(t.td,{children:"Optional"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},69678:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(74848);function s(e){let{url:t}=e;return(0,i.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);