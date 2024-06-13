"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[45257],{28169:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=s(74848),i=s(28453),o=s(70344),r=s(69678);s(46736);const l={title:"Running Unit & UI Tests",description:"Easily run Unit and UI tests for your iOS applications during builds. Improve app quality with Appcircle's testing features.",tags:["ios","mobile","testing","unit-test","ui-test"],sidebar_position:1},a="Running iOS Unit & UI Tests",c={id:"continuous-testing/ios-testing/running-ios-unit-and-ui-tests",title:"Running Unit & UI Tests",description:"Easily run Unit and UI tests for your iOS applications during builds. Improve app quality with Appcircle's testing features.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/005_continuous-testing/ios-testing/running-ios-unit-and-ui-tests.md",sourceDirName:"005_continuous-testing/ios-testing",slug:"/continuous-testing/ios-testing/running-ios-unit-and-ui-tests",permalink:"/nextjs-upload-file-tryout/zh-Hans/continuous-testing/ios-testing/running-ios-unit-and-ui-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/005_continuous-testing/ios-testing/running-ios-unit-and-ui-tests.md",tags:[{label:"ios",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/ios"},{label:"mobile",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/mobile"},{label:"testing",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/testing"},{label:"unit-test",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/unit-test"},{label:"ui-test",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/ui-test"}],version:"current",sidebarPosition:1,frontMatter:{title:"Running Unit & UI Tests",description:"Easily run Unit and UI tests for your iOS applications during builds. Improve app quality with Appcircle's testing features.",tags:["ios","mobile","testing","unit-test","ui-test"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"iOS Testing",permalink:"/nextjs-upload-file-tryout/zh-Hans/continuous-testing/ios-testing/"},next:{title:"Introduction to Environment Variables",permalink:"/nextjs-upload-file-tryout/zh-Hans/config-management/"}},d={},p=[{value:"Creating tests for iOS applications",id:"creating-tests-for-ios-applications",level:3},{value:"Performing iOS application tests in Appcircle",id:"performing-ios-application-tests-in-appcircle",level:3},{value:"Getting test results",id:"getting-test-results",level:3},{value:"Code Signing Enabled Builds",id:"code-signing-enabled-builds",level:4},{value:"Not Signed Builds",id:"not-signed-builds",level:4},{value:"Generating Test Report",id:"generating-test-report",level:3},{value:"Showing Test Reports",id:"showing-test-reports",level:3},{value:"Automated Tests",id:"automated-tests",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{ExternalUrlRef:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"running-ios-unit--ui-tests",children:"Running iOS Unit & UI Tests"}),"\n",(0,n.jsx)(t.p,{children:"You can easily run your Unit and UI tests for your iOS applications during builds."}),"\n",(0,n.jsx)(t.p,{children:"Unit tests usually test a piece of your code and confirm the code behaves as expected in certain conditions."}),"\n",(0,n.jsx)(t.h3,{id:"creating-tests-for-ios-applications",children:"Creating tests for iOS applications"}),"\n",(0,n.jsxs)(t.p,{children:["Unit tests are created in Xcode using the XCTest framework. Test methods are stored in ",(0,n.jsx)(t.code,{children:"XCTestCase"})," subclass."]}),"\n",(0,n.jsxs)(t.p,{children:["You can create unit tests in Xcode using the ",(0,n.jsx)(t.strong,{children:"Test Navigator"}),". Open the ",(0,n.jsx)(t.strong,{children:"Test Navigator"})," and click on the + icon in the lower left corner. Select ",(0,n.jsx)(t.strong,{children:"New Unit Test Target"}),". You should see the bundle and the ",(0,n.jsx)(t.code,{children:"XCTestCase"})," subclass created."]}),"\n",(0,n.jsx)(t.p,{children:"You can now use XCTAssert functions to test your models or other assets."}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/14-01-iOS-Unit-Tests.jpg"}),"\n",(0,n.jsx)(t.h3,{id:"performing-ios-application-tests-in-appcircle",children:"Performing iOS application tests in Appcircle"}),"\n",(0,n.jsxs)(t.p,{children:["To run your tests during the build process, you can simply add the ",(0,n.jsx)(t.strong,{children:"Xcodebuild for Unit and UI Tests"})," step in your workflows."]}),"\n",(0,n.jsxs)(t.p,{children:["Make sure the step is after the ",(0,n.jsx)(t.strong,{children:"Xcode Select"})," step and before ",(0,n.jsx)(t.strong,{children:"Export Build Artifacts"}),". You can optionally run a regular build afterwards by adding ",(0,n.jsx)(t.strong,{children:"Xcodebuild for Devices/Simulators"})," step after the ",(0,n.jsx)(t.strong,{children:"Xcodebuild for Unit and UI Tests"})," step."]}),"\n",(0,n.jsx)(t.p,{children:"See the following page on our documentation to learn more about adding new workflow steps:"}),"\n",(0,n.jsx)(o.A,{url:"/workflows",children:"What are Workflows and How to Use Them?"}),"\n",(0,n.jsxs)(t.p,{children:["To learn more about ",(0,n.jsx)(t.strong,{children:"Xcodebuild for Unit and UI Tests"})," step, visit its source on Github:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-ios-test-component",children:(0,n.jsx)(s,{url:"https://github.com/appcircleio/appcircle-ios-test-component",title:"GitHub - appcircleio/appcircle-ios-test-component",description:"Contribute to appcircleio/appcircle-ios-test-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/5557a8bc70162c40b778905eed5921db5ae2d218f14a3ef65056904d706b5623/appcircleio/appcircle-ios-test-component"})})}),"\n",(0,n.jsx)(t.h3,{id:"getting-test-results",children:"Getting test results"}),"\n",(0,n.jsx)(t.h4,{id:"code-signing-enabled-builds",children:"Code Signing Enabled Builds"}),"\n",(0,n.jsxs)(t.p,{children:["If you have ",(0,n.jsx)(t.strong,{children:"Xcodebuild for Unit and UI Tests"})," step in your workflow, Unit & UI test results will be created along with the .ipa file in the ",(0,n.jsx)(t.strong,{children:"Export Build Artifacts"})," step. You can download test results in the same ",(0,n.jsx)(t.code,{children:".zip"})," archive and you will see the ",(0,n.jsx)(t.code,{children:"test.xcresult.zip"})," file that includes test data."]}),"\n",(0,n.jsx)(t.h4,{id:"not-signed-builds",children:"Not Signed Builds"}),"\n",(0,n.jsxs)(t.p,{children:["If you don't sign your builds, your test results will be included in the ",(0,n.jsx)(t.code,{children:"xcarchive"})," file created during ",(0,n.jsx)(t.strong,{children:"Export Build Artifacts"}),". You can alternatively disable your build and sign steps in your workflow and get only test results without building or signing your application."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Optionally, you can use 3rd party tools like ","\ud83d\udd17"," ",(0,n.jsx)(t.a,{href:"https://github.com/ChargePoint/xcparse",children:(0,n.jsx)(t.strong,{children:"XCParse"})})," or ","\ud83d\udd17"," ",(0,n.jsx)(t.a,{href:"https://github.com/TitouanVanBelle/XCTestHTMLReport",children:(0,n.jsx)(t.strong,{children:"XCTestHTMLReport"})})," to view your test results in a more user-friendly way."]})}),"\n",(0,n.jsx)(t.h3,{id:"generating-test-report",children:"Generating Test Report"}),"\n",(0,n.jsxs)(t.p,{children:["If you add ",(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-test-report-component",children:"Test Report Component"})," to your workflow, Appcircle will show the result of your tests and code coverage with a clean UI."]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ios-unit-test-report-overview.png"}),"\n",(0,n.jsxs)(t.p,{children:["You must add this component ",(0,n.jsx)(t.strong,{children:"after"})," the ",(0,n.jsx)(t.code,{children:"Xcodebuild for Unit and UI Tests"})," so that it can parse test results. Your workflow should look like the below."]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ios-unit-test-workflow-overview.png"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-test-report-component",children:"Test Report Component"})," shows both test and coverage results. To show coverage results, you must enable ",(0,n.jsx)(t.strong,{children:"Code Coverage"})," in Xcode's scheme settings."]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/test-reports4.png"}),"\n",(0,n.jsxs)(t.admonition,{type:"danger",children:[(0,n.jsxs)(t.p,{children:["There's one important setting that you should change. If any workflow steps fail, Appcircle automatically skips other steps and jumps directly to the Export Build Artifacts step. However, it is possible that some of your tests may fail. ",(0,n.jsx)(t.strong,{children:"If Test Report Component doesn't run, reports will not be generated."})," You should turn on the following toggles so that Test Report Component always runs whether your tests fail or pass."]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Always run this step even if the previous steps fail to ",(0,n.jsx)(t.strong,{children:"ON"})]}),"\n",(0,n.jsxs)(t.li,{children:["Continue with the next step even if this step fails to ",(0,n.jsx)(t.strong,{children:"ON"})]}),"\n"]})]}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ios-unit-test-report-steps-on.png"}),"\n",(0,n.jsx)(t.h3,{id:"showing-test-reports",children:"Showing Test Reports"}),"\n",(0,n.jsx)(t.p,{children:"Appcircle can show passing and failing tests in compact UI. If your tests generate artifacts, those artifacts are also displayed with your test cases."}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ios-unit-test-result-overview.png"}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ios-unit-test-workflow-ui-detail.png"}),"\n",(0,n.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/ios-unit-test-workflow-coverage.png"}),"\n",(0,n.jsx)(t.h2,{id:"automated-tests",children:"Automated Tests"}),"\n",(0,n.jsx)(t.p,{children:"Appcircle currently supports the following mobile automation testing tools:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/#appium-server",children:"Appium"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/ios-specific-workflow-steps/browserstack-app-automation",children:"BrowserStack App Automate (XCUI)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/maestro-cloud-upload",children:"Maestro"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/testinium",children:"Testinium"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Each service allows you to run your tests on real devices, and test scenarios can be started with the artifacts created on Appcircle. Rich reports can be managed by visiting the web site of each service."}),"\n",(0,n.jsx)(t.p,{children:"However, if your tool supports producing the following test report formats, you can also see the test results on Appcircle. Appcircle's Test Report currently supports the following test and coverage formats:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Test Format"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Xcode 13+ ",(0,n.jsx)(t.code,{children:".xctest"})]}),"\n",(0,n.jsxs)(t.li,{children:["JUnit ",(0,n.jsx)(t.code,{children:".xml"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Coverage Format"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["JaCoCo ",(0,n.jsx)(t.code,{children:".xml"})]}),"\n",(0,n.jsxs)(t.li,{children:["Cobertura ",(0,n.jsx)(t.code,{children:".xml"})]}),"\n",(0,n.jsxs)(t.li,{children:["Lcov ",(0,n.jsx)(t.code,{children:"lcov.info"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For example, BrowserStack allows you to ",(0,n.jsx)(t.a,{href:"https://www.browserstack.com/docs/app-automate/xcuitest/view-test-reports",children:"export test results"})," as JUnit. You can get the results of your tests and code coverage results from BrowserStack by using a simple bash script."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -u "$AC_BROWSERSTACK_USERNAME:$AC_BROWSERSTACK_ACCESS_KEY" \\\n--output $AC_OUTPUT_DIR/myreport.xml \\\n-X GET "https://api-cloud.browserstack.com/app-automate/espresso/v2/builds/$BUILD_ID/sessions/$SESSION_ID/report"\n\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Appcircle's ",(0,n.jsx)(t.a,{href:"https://docs.appcircle.io/workflows/ios-specific-workflow-steps/browserstack-app-automation",children:(0,n.jsx)(t.strong,{children:"BrowserStack App Automate(XCUI)"})})," step already parses JUnit Test reports. The above code sample is only given as an example."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},70344:(e,t,s)=>{s.d(t,{A:()=>c});var n,i,o=s(96540);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)({}).hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r.apply(null,arguments)}const l=e=>{let{title:t,titleId:s,...l}=e;return o.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":s},l),t?o.createElement("title",{id:s},t):null,n||(n=o.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),i||(i=o.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var a=s(74848);function c(e){let{children:t,url:s}=e;return(0,a.jsxs)("a",{href:s,className:"content-ref-card",children:[(0,a.jsx)(l,{title:"File Icon",className:"file-icon"}),t]})}},46736:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(74848);function i(e){let{src:t,...s}=e;return(0,n.jsx)("img",{src:t,...s,className:"image-narrow"})}},69678:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(74848);function i(e){let{url:t}=e;return(0,n.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);