"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[34780],{75300:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var r=s(74848),i=s(28453),o=s(69678);const l={title:"Convert Xcresult to HTML/XML",description:"Easily convert Xcresult files to HTML/XML for enhanced readability and archiving. Simplify your development workflow with our effective tools",tags:["xcresult","convert","html","xml","unit tests","UI tests","test reports"]},n="Convert Xcresult to HTML/XML",c={id:"workflows/ios-specific-workflow-steps/convert-xcresult-to-xml-html",title:"Convert Xcresult to HTML/XML",description:"Easily convert Xcresult files to HTML/XML for enhanced readability and archiving. Simplify your development workflow with our effective tools",source:"@site/docs/workflows/ios-specific-workflow-steps/convert-xcresult-to-xml-html.md",sourceDirName:"workflows/ios-specific-workflow-steps",slug:"/workflows/ios-specific-workflow-steps/convert-xcresult-to-xml-html",permalink:"/workflows/ios-specific-workflow-steps/convert-xcresult-to-xml-html",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/workflows/ios-specific-workflow-steps/convert-xcresult-to-xml-html.md",tags:[{label:"xcresult",permalink:"/tags/xcresult"},{label:"convert",permalink:"/tags/convert"},{label:"html",permalink:"/tags/html"},{label:"xml",permalink:"/tags/xml"},{label:"unit tests",permalink:"/tags/unit-tests"},{label:"UI tests",permalink:"/tags/ui-tests"},{label:"test reports",permalink:"/tags/test-reports"}],version:"current",frontMatter:{title:"Convert Xcresult to HTML/XML",description:"Easily convert Xcresult files to HTML/XML for enhanced readability and archiving. Simplify your development workflow with our effective tools",tags:["xcresult","convert","html","xml","unit tests","UI tests","test reports"]},sidebar:"mySidebar",previous:{title:"Cocoapods Install",permalink:"/workflows/ios-specific-workflow-steps/cocoapods-install"},next:{title:"Firebase Upload dSYM",permalink:"/workflows/ios-specific-workflow-steps/firebase-upload-dsym"}},d={},a=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Output Variables",id:"output-variables",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{ExternalUrlRef:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"convert-xcresult-to-htmlxml",children:"Convert Xcresult to HTML/XML"}),"\n",(0,r.jsxs)(t.p,{children:["After the ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/continuous-testing/running-ios-unit-and-ui-tests",children:(0,r.jsx)(t.strong,{children:"Xcodebuild for Unit and UI Tests"})})," step runs, it generates a ",(0,r.jsx)(t.code,{children:"test_result.xcresult"})," file. In specific cases, this test file must be converted to another format. The ",(0,r.jsx)(t.strong,{children:"Convert Xcresult to HTML/XML"})," step is used for converting this test file to ",(0,r.jsx)(t.code,{children:"HTML"})," and ",(0,r.jsx)(t.code,{children:"XML"})," formats."]}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Prerequisite Workflow Step"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/continuous-testing/running-ios-unit-and-ui-tests",children:(0,r.jsx)(t.strong,{children:"Xcodebuild for Unit and UI Tests"})})}),(0,r.jsxs)(t.td,{children:["This step allows you to run unit and UI tests on your project. After this step runs, the related path, ",(0,r.jsx)(t.code,{children:"AC_TEST_RESULT_PATH"})," will be generated automatically."]})]})})]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Please note that if you do not run ",(0,r.jsx)(t.strong,{children:"Xcodebuild for Unit and UI Tests"})," before this step, the step will produce an error because there will be no test result file to convert."]})}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2989-convertOrder.png"}),"\n",(0,r.jsx)(t.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,r.jsx)(t.p,{children:"The parameters required for the operation of this stepper are given below with explanations."}),"\n",(0,r.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/BE2989-convertInput.png"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Status"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_OUTPUT_DIR"})}),(0,r.jsx)(t.td,{children:"Specifies the path for outputs for generated artifacts. This path will be automatically defined. Do not change if it is not necessary."}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_TEST_RESULT_PATH"})}),(0,r.jsxs)(t.td,{children:["This directory will be used for converting from ",(0,r.jsx)(t.code,{children:"Xcresult"})," to ",(0,r.jsx)(t.code,{children:"HTML"})," or ",(0,r.jsx)(t.code,{children:"XML"}),"."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_CONVERT_FILE_NAME"})}),(0,r.jsx)(t.td,{children:"The name of the converted test result file. This will be the new filename for the result file."}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_CONVERT_TYPE"})}),(0,r.jsxs)(t.td,{children:["Specify the convert-type option. Which type should it be converted to? The options are ",(0,r.jsx)(t.code,{children:"XML"})," and ",(0,r.jsx)(t.code,{children:"HTML"}),". The default value is ",(0,r.jsx)(t.code,{children:"XML"}),"."]}),(0,r.jsx)(t.td,{children:"Required"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_INCLUDE_COVERAGE"})}),(0,r.jsxs)(t.td,{children:["If set to ",(0,r.jsx)(t.code,{children:"Yes"}),", it will include the coverage result in the converted file. The default value is ",(0,r.jsx)(t.code,{children:"No"}),"."]}),(0,r.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"$AC_CONVERTED_TEST_RESULT_PATH"})}),(0,r.jsxs)(t.td,{children:["Specifies the path where the converted result is stored. Users can access this path via this variable. Additionally, it will be available for download in the ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/export-build-artifacts#download-exported-artifacts",children:(0,r.jsx)(t.strong,{children:"Download Artifact"})})," section."]})]})})]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["To view the converted test reports on the ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/export-build-artifacts/#download-exported-artifacts",children:(0,r.jsx)(t.strong,{children:"Download Artifacts"})})," page, please ensure that the ",(0,r.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/common-workflow-steps/export-build-artifacts",children:(0,r.jsx)(t.strong,{children:"Export Build Artifacts"})})," step is included in your Workflow after this step."]})}),"\n",(0,r.jsx)(t.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-ios-xcresult-convert-html-xml-component",children:(0,r.jsx)(s,{url:"https://github.com/appcircleio/appcircle-ios-xcresult-convert-html-xml-component",title:"GitHub - appcircleio/appcircle-ios-xcresult-convert-html-xml-component: This step converts the Unit/UI test result xcresult file to HTML or XML",description:"This step converts the Unit/UI test result xcresult file to HTML or XML - appcircleio/appcircle-ios-xcresult-convert-html-xml-component",image:"https://opengraph.githubassets.com/7569fb992bb5f53912f2ef6f80127548545200577c432dfb9a161441c8fca206/appcircleio/appcircle-ios-xcresult-convert-html-xml-component"})})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},69678:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var r=s(74848);function i(e){let{url:t}=e;return(0,r.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>n});var r=s(96540);const i={},o=r.createContext(i);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);