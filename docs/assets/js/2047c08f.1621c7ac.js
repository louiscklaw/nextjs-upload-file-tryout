"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[13021],{89640:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=s(74848),o=s(28453),i=s(69678),r=s(70344);const a={title:"Running Unit Tests",description:"Learn how to run unit tests for Android applications in Appcircle",tags:["unit tests","android","android unit tests","testing","continuous testing"],sidebar_position:2},l="Running Android Unit Tests",c={id:"continuous-testing/android-testing/running-android-unit-tests",title:"Running Unit Tests",description:"Learn how to run unit tests for Android applications in Appcircle",source:"@site/docs/continuous-testing/android-testing/running-android-unit-tests.md",sourceDirName:"continuous-testing/android-testing",slug:"/continuous-testing/android-testing/running-android-unit-tests",permalink:"/nextjs-upload-file-tryout/continuous-testing/android-testing/running-android-unit-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/continuous-testing/android-testing/running-android-unit-tests.md",tags:[{label:"unit tests",permalink:"/nextjs-upload-file-tryout/tags/unit-tests"},{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"},{label:"android unit tests",permalink:"/nextjs-upload-file-tryout/tags/android-unit-tests"},{label:"testing",permalink:"/nextjs-upload-file-tryout/tags/testing"},{label:"continuous testing",permalink:"/nextjs-upload-file-tryout/tags/continuous-testing"}],version:"current",sidebarPosition:2,frontMatter:{title:"Running Unit Tests",description:"Learn how to run unit tests for Android applications in Appcircle",tags:["unit tests","android","android unit tests","testing","continuous testing"],sidebar_position:2},sidebar:"mySidebar",previous:{title:"Android Testing",permalink:"/nextjs-upload-file-tryout/continuous-testing/android-testing/"},next:{title:"iOS Testing",permalink:"/nextjs-upload-file-tryout/continuous-testing/ios-testing/"}},d={},u=[{value:"Creating unit tests",id:"creating-unit-tests",level:2},{value:"Running your unit tests in Appcircle",id:"running-your-unit-tests-in-appcircle",level:2},{value:"Generating Test Report",id:"generating-test-report",level:2},{value:"Jacoco Test Coverage",id:"jacoco-test-coverage",level:2},{value:"Showing Test Reports",id:"showing-test-reports",level:2},{value:"Automated Tests",id:"automated-tests",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"running-android-unit-tests",children:"Running Android Unit Tests"}),"\n",(0,n.jsx)(t.p,{children:"Application tests are essential when it comes to improving and maintaining product quality and performing routine checks which are difficult for humans to perform regularly."}),"\n",(0,n.jsx)(t.p,{children:"Unit tests are usually considered first as they run really fast and are relatively easier to write and measure."}),"\n",(0,n.jsx)(t.p,{children:"We will create a local unit test here as an example and show you how to run the test during your build process."}),"\n",(0,n.jsx)(t.h2,{id:"creating-unit-tests",children:"Creating unit tests"}),"\n",(0,n.jsxs)(t.p,{children:["First, please add test dependencies to your ",(0,n.jsx)(t.code,{children:"build.gradle"})," file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-groovy",children:"dependencies {\n    // Required for local unit tests (JUnit 4 framework)\n    testImplementation 'junit:junit:4.12'\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Create your test file in your project\u2019s ",(0,n.jsx)(t.code,{children:"module-name/src/test/java/"})," folder."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'package com.example.appcircle_sample_android;\nimport org.junit.Test;\nimport static org.junit.Assert.*;\n\n/**\n * Example local unit test, which will execute on the development machine (host).\n *\n * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>\n */\npublic class URLValidatorUnitTest {\n\n    @Test\n    public void invalid_url_test() {\n        boolean isValid = URLValidator.isValid("http:/www.google.com");\n        assertFalse(isValid);\n    }\n\n    @Test\n    public void valid_url_test() {\n        boolean isValid = URLValidator.isValid("https://www.google.com");\n        assertTrue(isValid);\n    }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"This example checks to see if the provided URL is valid."}),"\n",(0,n.jsx)(t.h2,{id:"running-your-unit-tests-in-appcircle",children:"Running your unit tests in Appcircle"}),"\n",(0,n.jsx)(t.p,{children:"To run your unit test during the build process, you can simply use a custom script in your build profile."}),"\n",(0,n.jsxs)(t.p,{children:["Simply go to your build workflow and add a custom script after the ",(0,n.jsx)(t.strong,{children:"Sign Application"})," step."]}),"\n",(0,n.jsx)(t.p,{children:"See the following page on our documentation to learn more about creating custom workflow steps:"}),"\n",(0,n.jsx)(r.A,{url:"/workflows/common-workflow-steps/custom-script",children:"Working with Custom Scripts"}),"\n",(0,n.jsx)(t.p,{children:"Add the following Bash script to your custom script step:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd $AC_REPOSITORY_DIR\n./gradlew testRelease # or you can use 'testDebug'\nmv app/build/reports/tests $AC_OUTPUT_DIR\nmv app/build/test-results $AC_OUTPUT_DIR\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This simple Bash script will trigger your unit test and output the test results to be packed along with your binary files. You will get the test results both in ",(0,n.jsx)(t.code,{children:"xml"})," and ",(0,n.jsx)(t.code,{children:"html"})," formats."]}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/Screenshot 2020-04-28 20.47.05.png"}),"\n",(0,n.jsx)(t.h2,{id:"generating-test-report",children:"Generating Test Report"}),"\n",(0,n.jsxs)(t.p,{children:["Appcircle has ",(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-test-report-component",children:"Test Report Component"})," which can show the result of your tests and code coverage in a beautiful UI."]}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/android-unit-test-report-overview.png"}),"\n",(0,n.jsxs)(t.p,{children:["You must add this component ",(0,n.jsx)(t.strong,{children:"after"})," running your tests so that it can parse test results. Your workflow should look like the below."]}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/android-unit-test-workflow.png"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-test-report-component",children:"Test Report Component"})," shows both test and coverage results. This component supports the following test and coverage formats:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://junit.org",children:(0,n.jsx)(t.strong,{children:"JUnit"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.jacoco.org",children:(0,n.jsx)(t.strong,{children:"JaCoCo"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://cobertura.github.io/cobertura",children:(0,n.jsx)(t.strong,{children:"Cobertura"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://lcov-viewer.netlify.app",children:(0,n.jsx)(t.strong,{children:"lcov.info"})})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You must configure the ",(0,n.jsx)(t.strong,{children:"Test Report Component"})," and enter the path of code coverage and test results paths. For example, if you run your tests with an emulator, your files will be generated in the following folders."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Code Coverage Files:"})," ",(0,n.jsx)(t.code,{children:"$AC_COVERAGE_RESULT_PATH"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Test Results:"})," ",(0,n.jsx)(t.code,{children:"$AC_OUTPUT_DIR/test-results"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You must configure the component to parse those folders."}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/android-unit-test-report-workflow.png"}),"\n",(0,n.jsxs)(t.admonition,{type:"danger",children:[(0,n.jsxs)(t.p,{children:["There's one important setting that you should change. If any workflow steps fail, Appcircle automatically skips other steps and jumps directly to the Export Build Artifacts step. However, it is possible that some of your tests may fail. ",(0,n.jsx)(t.strong,{children:"If Test Report Component doesn't run, reports will not be generated."})," You should turn on the following toggles so that Test Report Component always runs whether your tests fail or pass."]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Always run this step even if the previous steps fail to ",(0,n.jsx)(t.strong,{children:"ON"})]}),"\n",(0,n.jsxs)(t.li,{children:["Continue with the next step even if this step fails to ",(0,n.jsx)(t.strong,{children:"ON"})]}),"\n"]})]}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/android-unit-test-report-steps-on.png"}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["If you're using UI tests with emulators, you must select an Intel device (",(0,n.jsx)(t.strong,{children:"Default Intel Pool"}),") since M1 virtual machines (",(0,n.jsx)(t.strong,{children:"Default M1 Pool"}),") don't support nested virtualization. Unit tests can work for both pools."]})}),"\n",(0,n.jsx)(t.h2,{id:"jacoco-test-coverage",children:"Jacoco Test Coverage"}),"\n",(0,n.jsx)(t.p,{children:"If you use the Jacoco tool for test coverage in your project, you can obtain coverage percentages from the test reports Jacoco generates. Jacoco calculates coverage percentages using six different methods, and the coverage percentage will be calculated based on the selected method."}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/be2556-jacocoCoverage2.png"}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"These methods range from the most detailed coverage percentage to the most general:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"INSTRUCTION"}),": JaCoCo counts the smallest unit of single Java bytecode instructions."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"BRANCH"}),": JaCoCo also calculates branch coverage for all if and switch statements."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"COMPLEXITY"}),": JaCoCo also calculates cyclomatic complexity for each non-abstract method and summarizes complexity for classes, packages and groups."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"LINE"}),": For all class files that have been compiled with debug information, coverage information for individual lines can be calculated."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"METHOD"}),": JaCoCo considers a method as executed when at least one instruction has been executed. Since JaCoCo works at the bytecode level, it counts constructors and static initializers as methods."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"CLASS"}),": JaCoCo considers a class as executed when at least one of its methods has been executed. JaCoCo counts constructors and static initializers as methods."]}),"\n"]})]}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"Each calculation type has different coverage percentages. This is because each type has its own level of detail. Therefore, the coverage percentages are different for each one."})}),"\n",(0,n.jsx)(t.h2,{id:"showing-test-reports",children:"Showing Test Reports"}),"\n",(0,n.jsx)(t.p,{children:"Appcircle can show passing and failing tests in compact UI. If your tests generate artifacts, those artifacts are also displayed with your test cases."}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/ios-unit-test-result-overview.png"}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/ios-unit-test-workflow-ui-detail.png"}),"\n",(0,n.jsx)(i.A,{url:"https://cdn.appcircle.io/docs/assets/ios-unit-test-workflow-coverage.png"}),"\n",(0,n.jsx)(t.h2,{id:"automated-tests",children:"Automated Tests"}),"\n",(0,n.jsx)(t.p,{children:"Appcircle currently supports the following mobile automation testing tools:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/#appium-server",children:"Appium"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/android-specific-workflow-steps/browserstack-app-automate-espresso",children:"BrowserStack App Automate - Espresso"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/maestro-cloud-upload",children:"Maestro"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/workflows/common-workflow-steps/testinium",children:"Testinium"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Each service allows you to run your tests on real devices, and test scenarios can be started with the artifacts created on Appcircle. Rich reports can be managed by visiting the web site of each service."}),"\n",(0,n.jsx)(t.p,{children:"However, if your tool supports producing the following test report formats, you can also see the test results on Appcircle. Appcircle's Test Report currently supports the following test and coverage formats:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Test Format"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["JUnit ",(0,n.jsx)(t.code,{children:".xml"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Coverage Format"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["JaCoCo ",(0,n.jsx)(t.code,{children:".xml"})]}),"\n",(0,n.jsxs)(t.li,{children:["Cobertura ",(0,n.jsx)(t.code,{children:".xml"})]}),"\n",(0,n.jsxs)(t.li,{children:["Lcov ",(0,n.jsx)(t.code,{children:"lcov.info"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For example, BrowserStack allows you to ",(0,n.jsx)(t.a,{href:"https://www.browserstack.com/docs/app-automate/espresso/view-test-reports",children:"export test results"})," as JUnit. You can get the results of your tests and code coverage results from BrowserStack by using a simple bash script."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -u "$AC_BROWSERSTACK_USERNAME:$AC_BROWSERSTACK_ACCESS_KEY" \\\n--output $AC_OUTPUT_DIR/myreport.xml \\\n-X GET "https://api-cloud.browserstack.com/app-automate/espresso/v2/builds/$BUILD_ID/sessions/$SESSION_ID/report"\n\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Appcircle's ",(0,n.jsx)(t.a,{href:"/workflows/android-specific-workflow-steps/browserstack-app-automate-espresso",children:(0,n.jsx)(t.strong,{children:"BrowserStack App Automate - Espresso"})})," step already parses JUnit Test reports. The above code sample is only given as an example."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},70344:(e,t,s)=>{s.d(t,{A:()=>c});var n,o,i=s(96540);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r.apply(this,arguments)}const a=e=>{let{title:t,titleId:s,...a}=e;return i.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":s},a),t?i.createElement("title",{id:s},t):null,n||(n=i.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),o||(o=i.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var l=s(74848);function c(e){let{children:t,url:s}=e;return(0,l.jsxs)("a",{href:s,className:"content-ref-card",children:[(0,l.jsx)(a,{title:"File Icon",className:"file-icon"}),t]})}},69678:(e,t,s)=>{s.d(t,{A:()=>o});s(96540);var n=s(74848);function o(e){let{url:t}=e;return(0,n.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);