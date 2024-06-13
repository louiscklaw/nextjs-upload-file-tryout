"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[38226],{40837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var s=t(74848),i=t(28453),r=(t(70344),t(83315)),o=t(69678);const a={title:"Understanding Android Versioning",description:"Learn how to manage version code and version name in Android projects with Appcircle",tags:["android","versioning","version code","version name"],sidebar_position:1},l=void 0,d={id:"versioning/android-version",title:"Understanding Android Versioning",description:"Learn how to manage version code and version name in Android projects with Appcircle",source:"@site/docs/versioning/android-version.md",sourceDirName:"versioning",slug:"/versioning/android-version",permalink:"/nextjs-upload-file-tryout/versioning/android-version",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/versioning/android-version.md",tags:[{label:"android",permalink:"/nextjs-upload-file-tryout/tags/android"},{label:"versioning",permalink:"/nextjs-upload-file-tryout/tags/versioning"},{label:"version code",permalink:"/nextjs-upload-file-tryout/tags/version-code"},{label:"version name",permalink:"/nextjs-upload-file-tryout/tags/version-name"}],version:"current",sidebarPosition:1,frontMatter:{title:"Understanding Android Versioning",description:"Learn how to manage version code and version name in Android projects with Appcircle",tags:["android","versioning","version code","version name"],sidebar_position:1},sidebar:"mySidebar",previous:{title:"Versioning",permalink:"/nextjs-upload-file-tryout/versioning/"},next:{title:"Understanding iOS Versioning",permalink:"/nextjs-upload-file-tryout/versioning/ios-version"}},c={},h=[{value:"Enabling Version Management",id:"enabling-version-management",level:2},{value:"Managing Version Code",id:"managing-version-code",level:3},{value:"Managing Version Name",id:"managing-version-name",level:3},{value:"Advanced Settings",id:"advanced-settings",level:3},{value:"Output Variables",id:"output-variables",level:3},{value:"Input Variables",id:"input-variables",level:3},{value:"Versioning Playground",id:"versioning-playground",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{ExternalUrlRef:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"enabling-version-management",children:"Enabling Version Management"}),"\n",(0,s.jsx)(n.p,{children:"In order to manage version code and version name with Appcircle, two requirements must be met:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The build's Version Management toggle must be turned on and required input values must be entered."}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/versioning-android-configuration.png"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Increment Build and Version Number"})," component ",(0,s.jsx)(n.code,{children:"1.0.*"})," or higher must be in your workflow."]}),"\n"]}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/versioning-android-workflow.png"}),"\n",(0,s.jsx)(n.p,{children:"The Versioning tab manages the input values of the component. It is not recommended to change the values of the component with the workflow editor. Instead, it would be best if you always used the Versioning UI to manage the settings."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Gradle files are written in Groovy language. Therefore it can use functions or environment variables during the build. This component doesn't cover all the edge cases. Please test your workflow thoroughly and make sure that it works as intended."})}),"\n",(0,s.jsx)(n.h3,{id:"managing-version-code",children:"Managing Version Code"}),"\n",(0,s.jsx)(n.p,{children:"The versioning system needs a version code source and an offset to calculate the new version code. There are two source types for the version code."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Version Code Source"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Environment Variable"}),"\n",(0,s.jsx)(n.li,{children:"Gradle"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you select ",(0,s.jsx)(n.strong,{children:"Environment Variable"}),", you need to write the source environment variable into ",(0,s.jsx)(n.code,{children:"Version Code"}),". The default value for this input is ",(0,s.jsx)(n.code,{children:"$AC_BUILD_NUMBER"}),". This variable increases after every build. You can also use other environment variables that you create or select from the config screen. Environment variables must start with the ",(0,s.jsx)(n.code,{children:"$"})," sign."]}),"\n",(0,s.jsxs)(n.p,{children:["If you select Gradle, the version code will be read from build.gradle file. If you want to use different flavor, please set them in the ",(0,s.jsx)(n.strong,{children:"Advanced Settings"})," section."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Offset"})}),"\n",(0,s.jsxs)(n.p,{children:["If you select ",(0,s.jsx)(n.code,{children:"$AC_BUILD_NUMBER"})," as your version code source, the version code in your project can be different. To synchronize version code, you can use the offset. The offset value is a number to be added or subtracted from the ",(0,s.jsx)(n.em,{children:"Version Code Source"}),". Negative values can be written such as -10."]}),"\n",(0,s.jsx)(n.h3,{id:"managing-version-name",children:"Managing Version Name"}),"\n",(0,s.jsx)(n.p,{children:"The versioning system needs a version name source and an offset to calculate the new version name. There are two source types for the version name."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Version Name Source"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Environment Variable"}),"\n",(0,s.jsx)(n.li,{children:"Gradle"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you select Environment Variable, you need to write the source environment variable into ",(0,s.jsx)(n.code,{children:"Version Name"})," You can use any environment variable that you create or select from the config screen. Environment variables must start with the ",(0,s.jsx)(n.code,{children:"$"})," sign."]}),"\n",(0,s.jsx)(n.p,{children:"If you select Gradle, the version name will be read from the given Android project."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Offset"})}),"\n",(0,s.jsxs)(n.p,{children:["To synchronize version names, you can use the offset. The offset value is a number to be added or subtracted from the ",(0,s.jsx)(n.em,{children:"Version Name Source"}),". Negative values can be written such as -10."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Increment"})}),"\n",(0,s.jsx)(n.p,{children:"You can increase the major, minor, or patch value of the version name. For version name 2.5.1, values can be summarized below."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Part"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Major"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Minor"}),(0,s.jsx)(n.td,{children:"5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Patch"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Omit Zero Patch Version"})}),"\n",(0,s.jsxs)(n.p,{children:["If true, omits zero in the patch version. So ",(0,s.jsx)(n.em,{children:"42.10.0"})," will become ",(0,s.jsx)(n.em,{children:"42.10"})," and ",(0,s.jsx)(n.em,{children:"42.10.1"})," will remain ",(0,s.jsx)(n.em,{children:"42.10.1"}),". The default is false."]}),"\n",(0,s.jsx)(n.h3,{id:"advanced-settings",children:"Advanced Settings"}),"\n",(0,s.jsx)(n.p,{children:"This component works on standard build.gradle files. If you use flavors in your build.gradle, you can set the flavor name. However, please be aware that flavor support is not foolproof. Due to dynamic nature of build.gradle file, it may not cover all the cases."}),"\n",(0,s.jsx)(n.h3,{id:"output-variables",children:"Output Variables"}),"\n",(0,s.jsx)(n.p,{children:"After the version code or version name update, new values will be written to two environment variables."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_ANDROID_NEW_VERSION_CODE"})}),(0,s.jsx)(n.td,{children:"Represents the incremented version code applied to the project."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_ANDROID_NEW_VERSION_NAME"})}),(0,s.jsx)(n.td,{children:"Represents the incremented version name applied to the project."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"You can use the above values in the remaining steps of your workflow."}),"\n",(0,s.jsx)(n.h3,{id:"input-variables",children:"Input Variables"}),"\n",(0,s.jsx)(n.p,{children:"The versioning system works by consuming environment variables. Even though it's easier to configure it by using UI, sometimes you may want to change them on the fly. Your commit messages or tags can be used to override those settings. The name of the variables and expected values can be found below."}),"\n",(0,s.jsx)(o.A,{url:"https://cdn.appcircle.io/docs/assets/android-workflow-components-increment-build-and-version-number_2.png"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Status"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_REPOSITORY_DIR"})}),(0,s.jsxs)(n.td,{children:["This variable represents the path of the cloned Git repository. If it runs after the ",(0,s.jsx)(n.a,{href:"/workflows/common-workflow-steps/git-clone",children:"Git Clone"})," step, the variable will be automatically populated."]}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_BUILD_NUMBER_SOURCE"})}),(0,s.jsx)(n.td,{children:"Version code source type (environment variable or gradle file)."}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_ANDROID_BUILD_NUMBER"})}),(0,s.jsxs)(n.td,{children:["Version code to set. If ",(0,s.jsx)(n.code,{children:"$AC_BUILD_NUMBER_SOURCE"})," is set to gradle, this variable will be read from the project."]}),(0,s.jsx)(n.td,{children:"Optional"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_BUILD_OFFSET"})}),(0,s.jsxs)(n.td,{children:["The number to be added or subtracted from the ",(0,s.jsx)(n.code,{children:"$AC_ANDROID_BUILD_NUMBER"}),"."]}),(0,s.jsx)(n.td,{children:"Optional"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_VERSION_NUMBER_SOURCE"})}),(0,s.jsx)(n.td,{children:"Version name source type (environment variable or gradle file)."}),(0,s.jsx)(n.td,{children:"Optional"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_ANDROID_VERSION_NUMBER"})}),(0,s.jsxs)(n.td,{children:["Version name to set. If ",(0,s.jsx)(n.code,{children:"$AC_VERSION_NUMBER_SOURCE"})," is set to gradle, this variable will be read from the project."]}),(0,s.jsx)(n.td,{children:"Optional"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_VERSION_STRATEGY"})}),(0,s.jsxs)(n.td,{children:["Version increment strategy (",(0,s.jsx)(n.code,{children:"major"}),", ",(0,s.jsx)(n.code,{children:"minor"}),", ",(0,s.jsx)(n.code,{children:"patch"}),", or ",(0,s.jsx)(n.code,{children:"keep"}),")."]}),(0,s.jsx)(n.td,{children:"Optional"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_VERSION_OFFSET"})}),(0,s.jsxs)(n.td,{children:["The number to be added or subtracted from the ",(0,s.jsx)(n.code,{children:"$AC_ANDROID_VERSION_NUMBER"}),"."]}),(0,s.jsx)(n.td,{children:"Optional"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_PROJECT_PATH"})}),(0,s.jsxs)(n.td,{children:["Specifies the project path. If the project that needs to be built is ",(0,s.jsx)(n.strong,{children:"not located"})," in the root directory where it was cloned from Git, you should provide the subpath as a relative path."]}),(0,s.jsx)(n.td,{children:"Optional"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_VERSION_FLAVOR"})}),(0,s.jsxs)(n.td,{children:["Build flavor. If you select a flavor from the ",(0,s.jsx)(n.a,{href:"#advanced-settings",children:(0,s.jsx)(n.strong,{children:"Advanced Settings"})})," section, the versioning of the chosen flavor will be applied (for example, the Gradle file of the selected flavor will be used)."]}),(0,s.jsx)(n.td,{children:"Optional"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$AC_OMIT_ZERO_PATCH_VERSION"})}),(0,s.jsxs)(n.td,{children:["If ",(0,s.jsx)(n.code,{children:"true"}),", it omits zero in the patch version."]}),(0,s.jsx)(n.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Since you can use any environment variables for the version code and version name, you can consume Appcircle's various environment variables during the build. Appcircle gives plenty of information related to your repo and project."}),"\n",(0,s.jsx)(n.p,{children:"Let's see a couple of ways to utilize those values."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Using Commit Messages"})}),"\n",(0,s.jsxs)(n.p,{children:["We can extract the commit message and set the version name from the message. Commit message is stored inside ",(0,s.jsx)(n.code,{children:"$AC_COMMIT_MESSAGE"}),". Let's say we want to use the version name from the commit message. Let's assume that the commit message is ",(0,s.jsx)(n.code,{children:"[VERSION] 1.2.3"})," Since we will use a calculated value, we have to change our ",(0,s.jsx)(n.code,{children:"$AC_VERSION_NUMBER_SOURCE"})," as well. We also set the offset value as 0 so that the calculated value can be applied directly. We can use the following custom script to extract this information."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"commit_message = ENV['AC_COMMIT_MESSAGE']\n# extract commit message with regex\nversion = commit_message.match(/\\[VERSION\\] (.*)/)\nif version\n  version = version[1]\n  open(ENV['AC_ENV_FILE_PATH'], 'a') { |f|\n    f.puts \"AC_VERSION_NUMBER_SOURCE=env\"\n    f.puts \"AC_VERSION_OFFSET=0\"\n    f.puts \"AC_ANDROID_VERSION_NUMBER=#{version}\"\n}\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"Just add this script as a custom script above the Increment Android Version Component. The type of the script must be set as ruby."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Using Tags"})}),"\n",(0,s.jsxs)(n.p,{children:["It is also possible to extract the version name from the Git tags. The following example assumes that the commit has a single tag. If you tag your version with ",(0,s.jsx)(n.code,{children:"release-1.2.3"}),", the following script will extract the version name from the tag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:"commit_message = ENV['AC_COMMIT_TAGS']\nversion = commit_message.match(/release-(.*)/)\nif version\n  version = version[1]\n  open(ENV['AC_ENV_FILE_PATH'], 'a') { |f|\n    f.puts \"AC_VERSION_NUMBER_SOURCE=env\"\n    f.puts \"AC_VERSION_OFFSET=0\"\n    f.puts \"AC_ANDROID_VERSION_NUMBER=#{version}\"\n}\nend\n"})}),"\n",(0,s.jsx)(n.h3,{id:"versioning-playground",children:"Versioning Playground"}),"\n",(0,s.jsx)(n.p,{children:"You can use the below playground to test the effect of different options"}),"\n",(0,s.jsx)(r.A,{title:"Version Code",subtitle:"Version Name"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"To access the source code of this component, please use the following link:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/appcircleio/appcircle-android-build-version-increment-component.git",children:(0,s.jsx)(t,{url:"https://github.com/appcircleio/appcircle-android-build-version-increment-component.git",title:"GitHub - appcircleio/appcircle-android-build-version-increment-component",description:"Contribute to appcircleio/appcircle-android-build-version-increment-component development by creating an account on GitHub.",image:"https://opengraph.githubassets.com/1b820f5a60bb1a6e7e3092817a6ab3f1df3add025eef10ee341cd87b5f5da46b/appcircleio/appcircle-android-build-version-increment-component"})})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},70344:(e,n,t)=>{t.d(n,{A:()=>d});var s,i,r=t(96540);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)({}).hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},o.apply(null,arguments)}const a=e=>{let{title:n,titleId:t,...a}=e;return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":t},a),n?r.createElement("title",{id:t},n):null,s||(s=r.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),i||(i=r.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var l=t(74848);function d(e){let{children:n,url:t}=e;return(0,l.jsxs)("a",{href:t,className:"content-ref-card",children:[(0,l.jsx)(a,{title:"File Icon",className:"file-icon"}),n]})}},69678:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(74848);function i(e){let{url:n}=e;return(0,s.jsx)("img",{className:"screenshot",src:n})}},83315:(e,n,t)=>{t.d(n,{A:()=>h});var s=t(96540),i=t(74848);const r=function(e){const{checked:n,disabled:t,onChange:s,offstyle:r="btn-warning",onstyle:o="btn-success"}=e;let a=n?o:r;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("label",{style:{userSelect:"none"},children:(0,i.jsxs)("span",{className:"switch-wrapper",children:[(0,i.jsx)("input",{type:"checkbox",checked:n,disabled:t,onChange:e=>s&&s(e)}),(0,i.jsx)("span",{className:"switch",style:{background:a},children:(0,i.jsx)("span",{className:"switch-handle"})})]})})})},o=e=>(0,i.jsxs)("div",{className:"ToggleCircle",children:[(0,i.jsxs)("div",{className:"ToggleCircle_Label",children:[(0,i.jsx)("h1",{children:e.toggleTitle}),(0,i.jsx)("span",{children:e.toggleDesc})]}),(0,i.jsx)(r,{...e})]}),a=e=>(0,i.jsx)("input",{className:"TextInput",value:e.value,onChange:n=>e.onChange(n)}),l=e=>(0,i.jsxs)("div",{className:"TextInputCircle",children:[(0,i.jsx)("div",{className:"TextInputCircle_Label",children:(0,i.jsx)("label",{children:e.title})}),(0,i.jsx)(a,{...e}),e.bottomText&&e.bottomTitle&&(0,i.jsx)("p",{className:"TextInputCircle_bottomText",children:e.bottomTitle})]}),d=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("select",{className:"Select",value:e.value,onChange:n=>e.onChange(n.target.value),children:e.options.map((e=>(0,i.jsx)("option",{className:"Option",style:{color:"#445b77",fontSize:15},value:e.value,children:e.label},e.label)))})}),c=e=>(0,i.jsxs)("div",{className:"TextInputCircle",children:[(0,i.jsx)("div",{className:"TextInputCircle_Label",children:(0,i.jsx)("label",{children:e.title})}),(0,i.jsx)(d,{...e})]});function h(e){const[n,t]=(0,s.useState)("5"),[r,a]=(0,s.useState)("1.2.3"),[d,h]=(0,s.useState)("1"),[u,p]=(0,s.useState)("0"),[m,x]=(0,s.useState)("5"),[j,v]=(0,s.useState)("1.2.3"),[g,f]=(0,s.useState)(!1),[b,w]=(0,s.useState)("keep"),[y,_]=(0,s.useState)(!1),[C,E]=(0,s.useState)(!1),{title:N,subtitle:I}=e;return(0,s.useEffect)((()=>{(()=>{const e=(parseInt(d)||0)+(parseInt(n)||0);x(e)})()}),[n,d]),(0,s.useEffect)((()=>{(()=>{const e=r.split(".").map(Number),n=parseInt(u)||0;switch(b){case"patch":e[2]=(e[2]||0)+n;break;case"minor":e[1]=(e[1]||0)+n,e[2]=e[2]=0;break;case"major":e[0]=(e[0]||0)+n,e[1]=e[1]=0,e[1]=e[2]=0}g&&0==e[2]&&e.pop(),v(e.join("."))})()}),[r,u,b,g]),(0,i.jsxs)("div",{children:[(0,i.jsx)(l,{title:N,bottomText:!1,value:n,name:"buildNumber",onChange:e=>{t(e.target.value)}}),(0,i.jsx)(l,{title:I,bottomText:!1,value:r,name:"versionNumber",onChange:e=>{a(e.target.value)}}),(0,i.jsx)(o,{toggleTitle:`UPDATE ${N.toUpperCase()} WHILE BUILDING`,toggleDesc:`Appcircle will apply the ${N.toLowerCase()} while building based on your settings below.`,checked:y,disabled:!1,onChange:e=>{_(e.target.checked)}}),y&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{title:N+" Offset",bottomText:!1,value:d,onChange:e=>h(e.target.value)}),(0,i.jsx)("div",{className:"Calculated",children:(0,i.jsxs)("label",{children:["Calculated ",N,": ",(0,i.jsx)("span",{children:m})]})})]}),(0,i.jsx)(o,{toggleTitle:`UPDATE ${I.toUpperCase()} WHILE BUILDING`,toggleDesc:`Appcircle will apply the ${I.toLowerCase()} while building based on your settings below.`,checked:C,disabled:!1,onChange:e=>{E(e.target.checked)}}),C&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{title:I+" Offset",bottomText:!1,value:u,onChange:e=>p(e.target.value)}),(0,i.jsx)(c,{title:"Version Strategy",options:[{label:"Keep",value:"keep"},{label:"Major",value:"major"},{label:"Minor",value:"minor"},{label:"Patch",value:"patch"}],value:b,onChange:w}),(0,i.jsx)(o,{toggleTitle:"Omit Zero Patch Version",toggleDesc:"If true omits zero in patch version(so 42.10.0 will become 42.10 and 42.10.1 will remain 42.10.1), default is false",checked:g,disabled:!1,onChange:e=>f(e.target.checked),offstyle:"#a5b5c9",onstyle:"var(--ifm-color-primary)"}),(0,i.jsx)("div",{className:"Calculated",children:(0,i.jsxs)("label",{children:["Calculated ",I,": ",(0,i.jsx)("span",{children:j})]})})]})]})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);