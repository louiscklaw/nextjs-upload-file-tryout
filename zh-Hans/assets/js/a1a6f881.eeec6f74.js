"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[983],{74597:(e,t,l)=>{l.d(t,{Ay:()=>o,RM:()=>a});var r=l(74848),n=l(28453);const a=[{value:"Need help?",id:"need-help",level:3}];function i(e){const t={a:"a",h3:"h3",p:"p",...(0,n.R)(),...e.components},{ExternalUrlRef:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ExternalUrlRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"need-help",children:"Need help?"}),"\n",(0,r.jsx)(t.p,{children:"Get help from Appcircle's support team, or see how others are using Appcircle by joining our Slack Channel."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://join.slack.com/t/appcircleio/signup",children:(0,r.jsx)(l,{url:"https://join.slack.com/t/appcircleio/signup",title:"Slack",description:"No description available",image:"https://cdn.appcircle.io/docs/assets/appcircle-logo.png"})})})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},51805:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var r=l(74848),n=l(28453),a=l(69678),i=l(70344),o=l(11470),s=l(19365),u=l(74597);const c={title:"Building Flutter Web Applications",description:"You can build your Flutter web applications in Appcircle.",tags:["flutter","web","flutter web","flutter web build"],sidebar_position:8},d="Building Flutter Web Applications",p={id:"build/platform-build-guides/building-flutter-applications/building-flutter-web-applications",title:"Building Flutter Web Applications",description:"You can build your Flutter web applications in Appcircle.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/004_build/platform-build-guides/building-flutter-applications/building-flutter-web-applications.md",sourceDirName:"004_build/platform-build-guides/building-flutter-applications",slug:"/build/platform-build-guides/building-flutter-applications/building-flutter-web-applications",permalink:"/nextjs-upload-file-tryout/zh-Hans/build/platform-build-guides/building-flutter-applications/building-flutter-web-applications",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/004_build/platform-build-guides/building-flutter-applications/building-flutter-web-applications.md",tags:[{label:"flutter",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/flutter"},{label:"web",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/web"},{label:"flutter web",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/flutter-web"},{label:"flutter web build",permalink:"/nextjs-upload-file-tryout/zh-Hans/tags/flutter-web-build"}],version:"current",sidebarPosition:8,frontMatter:{title:"Building Flutter Web Applications",description:"You can build your Flutter web applications in Appcircle.",tags:["flutter","web","flutter web","flutter web build"],sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Building Flutter Mobile Applications",permalink:"/nextjs-upload-file-tryout/zh-Hans/build/platform-build-guides/building-flutter-applications/"},next:{title:"Building Ionic Projects with Custom Scripts",permalink:"/nextjs-upload-file-tryout/zh-Hans/build/platform-build-guides/building-ionic-projects-with-custom-scripts"}},b={},h=[...u.RM];function f(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"building-flutter-web-applications",children:"Building Flutter Web Applications"}),"\n",(0,r.jsxs)(t.p,{children:["If your app supports Flutter Web, you can also build the Flutter web app along with the ",(0,r.jsx)(t.a,{href:"/build/platform-build-guides/building-flutter-applications",children:"Flutter iOS or Android build"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"With Appcircle, you can manage your entire Flutter build workflows both for mobile and web without the need for any third party solutions."}),"\n",(0,r.jsx)(t.p,{children:"Flutter Web Build is available as a workflow step in the workflow marketplace. Just configure your project as you would for iOS or Android and add the Flutter Build for Web step anywhere after the Flutter Install step to include a web build in the workflow."}),"\n",(0,r.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/flutter-web-build-workflow.png"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to build your Flutter project only for the web, you can ",(0,r.jsx)(t.a,{href:"/build/platform-build-guides/building-flutter-applications",children:"add a Flutter Android project in the standard way"}),", save your project configuration once, and then remove all the Android-related steps from the build workflow."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Make sure to not remove ",(0,r.jsx)(t.strong,{children:"Export Build Artifacts"})," from the steps."]})}),"\n",(0,r.jsx)(t.p,{children:"In this case, after removing Android-related steps, the workflow will look like the following:"}),"\n",(0,r.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/build-flutter-web-end-result.png"}),"\n",(0,r.jsx)(t.p,{children:"For more information about workflows, refer the workflow documentation below:"}),"\n",(0,r.jsx)(i.A,{url:"/workflows",children:"What are Workflows"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to deploy your web output automatically, you can use a ",(0,r.jsx)(t.a,{href:"https://github.com/appcircleio/appcircle-custom-script-component/",children:"Custom Script"})," or ",(0,r.jsx)(t.a,{href:"/workflows/common-workflow-steps/upload-files-to-amazon-s3",children:"upload it to Amazon S3"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Once your build is configured, it can be built ",(0,r.jsx)(t.a,{href:"/build/build-process-management/build-manually-or-with-triggers",children:"manually or automatically in the same way with other apps"}),". With Flutter 2.0, you can build your Flutter web apps in the stable channel. (In Flutter 1.x, it was necessary to use the beta channel.)"]}),"\n",(0,r.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/build-flutter-web-workflow-success.png"}),"\n",(0,r.jsxs)(t.p,{children:["After a build, you can download the web build output manually ",(0,r.jsx)(t.a,{href:"/build/platform-build-guides/building-flutter-applications#starting-a-flutter-build-and-after-a-build",children:"from the build artifact list"})," as the ",(0,r.jsx)(t.code,{children:"web.zip"})," file."]}),"\n",(0,r.jsx)(a.A,{url:"https://cdn.appcircle.io/docs/assets/build-flutter-web-artifact-download.png"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"As of Flutter 1.21, the Flutter SDK includes the full Dart SDK. So if you have Flutter installed, you might not need to explicitly download the Dart SDK. If you need to use a different Dart version than the bundled one, you can install it using the below commands."})}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(s.A,{value:"ios",label:"iOS",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"brew tap dart-lang/dart\nbrew install dart\n"})})}),(0,r.jsx)(s.A,{value:"android",label:"Android",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:" sudo apt-get update\n sudo apt-get install apt-transport-https\n sudo sh -c 'wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'\n sudo sh -c 'wget -qO- https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'\n sudo apt-get install dart\n"})})})]}),"\n","\n",(0,r.jsx)(u.Ay,{})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},19365:(e,t,l)=>{l.d(t,{A:()=>i});l(96540);var r=l(18215);const n={tabItem:"tabItem_Ymn6"};var a=l(74848);function i(e){let{children:t,hidden:l,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,i),hidden:l,children:t})}},11470:(e,t,l)=>{l.d(t,{A:()=>v});var r=l(96540),n=l(18215),a=l(23104),i=l(56347),o=l(205),s=l(57485),u=l(31682),c=l(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:l}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:l,attributes:r,default:n}}=e;return{value:t,label:l,attributes:r,default:n}}))}(l);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function b(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:l}=e;const n=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,s.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function f(e){const{defaultValue:t,queryString:l=!1,groupId:n}=e,a=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=l.find((e=>e.default))??l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=h({queryString:l,groupId:n}),[f,m]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Dv)(l);return[n,(0,r.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:n}),g=(()=>{const e=u??f;return b({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=l(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=l(74848);function x(e){let{className:t,block:l,selectedValue:r,selectValue:i,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,l=s.indexOf(t),n=o[l].value;n!==r&&(u(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=s.indexOf(e.currentTarget)+1;t=s[l]??s[0];break}case"ArrowLeft":{const l=s.indexOf(e.currentTarget)-1;t=s[l]??s[s.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":l},t),children:o.map((e=>{let{value:t,label:l,attributes:a}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...a,className:(0,n.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:l??t},t)}))})}function y(e){let{lazy:t,children:l,selectedValue:n}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=f(e);return(0,w.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,w.jsx)(x,{...e,...t}),(0,w.jsx)(y,{...e,...t})]})}function v(e){const t=(0,m.A)();return(0,w.jsx)(j,{...e,children:d(e.children)},String(t))}},70344:(e,t,l)=>{l.d(t,{A:()=>u});var r,n,a=l(96540);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)({}).hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},i.apply(null,arguments)}const o=e=>{let{title:t,titleId:l,...o}=e;return a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":l},o),t?a.createElement("title",{id:l},t):null,r||(r=a.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),n||(n=a.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var s=l(74848);function u(e){let{children:t,url:l}=e;return(0,s.jsxs)("a",{href:l,className:"content-ref-card",children:[(0,s.jsx)(o,{title:"File Icon",className:"file-icon"}),t]})}},69678:(e,t,l)=>{l.d(t,{A:()=>n});l(96540);var r=l(74848);function n(e){let{url:t}=e;return(0,r.jsx)("img",{className:"screenshot",src:t})}},28453:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>o});var r=l(96540);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);