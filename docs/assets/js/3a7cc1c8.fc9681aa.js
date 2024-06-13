"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[98768],{83292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(74848),s=r(28453),a=r(11470),o=r(19365);const i={title:"Restarting Host",description:"Learn how to enable automatic startup of your Appcircle server.",tags:["self-hosted","server","restart","automatic startup"],sidebar_position:6},l="Overview",c={id:"self-hosted-appcircle/configure-server/restarting-host",title:"Restarting Host",description:"Learn how to enable automatic startup of your Appcircle server.",source:"@site/docs/self-hosted-appcircle/configure-server/restarting-host.md",sourceDirName:"self-hosted-appcircle/configure-server",slug:"/self-hosted-appcircle/configure-server/restarting-host",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/restarting-host",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/restarting-host.md",tags:[{label:"self-hosted",permalink:"/nextjs-upload-file-tryout/tags/self-hosted"},{label:"server",permalink:"/nextjs-upload-file-tryout/tags/server"},{label:"restart",permalink:"/nextjs-upload-file-tryout/tags/restart"},{label:"automatic startup",permalink:"/nextjs-upload-file-tryout/tags/automatic-startup"}],version:"current",sidebarPosition:6,frontMatter:{title:"Restarting Host",description:"Learn how to enable automatic startup of your Appcircle server.",tags:["self-hosted","server","restart","automatic startup"],sidebar_position:6},sidebar:"mySidebar",previous:{title:"Command-Line Interface (CLI) Configuration",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/advanced-configuration/appcircle-cli"},next:{title:"Offline Install/Upgrade",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/offline-installation"}},u={},d=[{value:"Docker",id:"docker",level:2},{value:"Podman",id:"podman",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"In this section, we will discuss how to enable automatic startup of your Appcircle server."}),"\n",(0,n.jsx)(t.p,{children:"For Docker users, there are built-in mechanisms that handle container restarts, eliminating the need for manual intervention."}),"\n",(0,n.jsx)(t.p,{children:"However, Podman users will need to create a systemd unit service to ensure the application starts automatically upon server reboot."}),"\n",(0,n.jsxs)(a.A,{defaultValue:"docker",groupId:"container-engine",values:[{label:"Docker",value:"docker"},{label:"Podman",value:"podman"}],children:[(0,n.jsxs)(o.A,{value:"docker",children:[(0,n.jsx)(t.h2,{id:"docker",children:"Docker"}),(0,n.jsx)(t.p,{children:"With Docker, you can rely on the built-in restart policies to handle the automatic startup of your Appcircle server."}),(0,n.jsx)(t.p,{children:"Docker will automatically restart the server services if the host reboots."}),(0,n.jsx)(t.p,{children:"This eliminates the need for any additional steps or configurations to ensure your application restarts upon host restart."})]}),(0,n.jsxs)(o.A,{value:"podman",children:[(0,n.jsx)(t.h2,{id:"podman",children:"Podman"}),(0,n.jsx)(t.p,{children:"When using Podman, you will need to create a systemd unit service to enable the automatic startup of your application containers."}),(0,n.jsx)(t.p,{children:"By creating a systemd unit file and configuring it to launch your Appcircle server, you can ensure that your application starts automatically upon host reboot."}),(0,n.jsx)(t.p,{children:"To create a systemd unit service for automatic startup of the Appcircle server, you can follow these steps:"}),(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["You need to have root access on your system for the steps below. Being able to run ",(0,n.jsx)(t.code,{children:"sudo"})," is required. (sudoer)"]})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create a unit service file."}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo vi /etc/systemd/system/appcircle-server.service\n"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Add the following content to the file."}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-systemd",children:"[Unit]\nDescription=Appcircle Server\nWants=network-online.target\nAfter=network-online.target\nRequiresMountsFor=%t/containers\n\n[Service]\nEnvironment=PODMAN_SYSTEMD_UNIT=%n\nUser=${USER}\nGroup=${GROUP}\nExecStartPre=/usr/bin/loginctl enable-linger ${USER}\nExecStart=/bin/bash ${APPCIRCLE_SERVER_DIR}/ac-self-hosted.sh -n spacetech up\nType=oneshot\nRemainAfterExit=yes\n\n[Install]\nWantedBy=multi-user.target\n"})}),(0,n.jsxs)(t.p,{children:["As seen above, some fields have variables(",(0,n.jsx)(t.code,{children:"${.}"}),") that ",(0,n.jsx)(t.strong,{children:"must be replaced with the exact values"}),", according to your runtime environment."]}),(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"You must edit the fields in the service file before enabling the service."})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"User:"})," Replace ",(0,n.jsx)(t.code,{children:"${USER}"})," with your logged in user which is expected to be the owner of the Appcircle server directory."]}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'stat -c "%U" appcircle-server\n'})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Group:"})," Replace ",(0,n.jsx)(t.code,{children:"${GROUP}"})," with your logged in user's group which is expected to be the owner of the Appcircle server directory."]}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'stat -c "%G" appcircle-server\n'})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"PreStart:"})," Replace ",(0,n.jsx)(t.code,{children:"${USER}"})," with your logged in user. It should have the same value as ",(0,n.jsx)(t.strong,{children:"User"})," field above."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"ExecStart:"})," Replace ",(0,n.jsx)(t.code,{children:"${APPCIRCLE_SERVER_DIR}"})," with the absolute path of the Appcircle server directory."]}),"\n"]}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"realpath appcircle-server\n"})}),(0,n.jsxs)(t.p,{children:["Also, do not forget to ",(0,n.jsx)(t.strong,{children:"change the project name to your project"}),', since "spacetech" is our sample project in the documents.']}),(0,n.jsx)(t.p,{children:"You can get a list of your projects in Appcircle server directory with the command below."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ls -d -1 appcircle-server/projects/*/ | xargs -n 1 basename\n"})}),(0,n.jsx)(t.p,{children:"When the systemd unit file is ready, we need to enable it with the commands below:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Reload the systemd daemon to make it aware that a new service exists."}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Enable the service."}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo systemctl enable appcircle-server.service\n"})}),(0,n.jsx)(t.p,{children:"Now, the service is supposed to start on boot, and it should start the Appcircle server when triggered."})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(18215);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),s=r(18215),a=r(23104),o=r(56347),i=r(205),l=r(57485),c=r(31682),u=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:r,groupId:s}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),b=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),s=i[r].value;s!==n&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function w(e){const t=(0,v.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);