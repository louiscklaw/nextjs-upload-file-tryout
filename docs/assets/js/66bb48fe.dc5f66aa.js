"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[35608],{48386:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var o=r(74848),t=r(28453),s=r(11470),i=r(19365);const a={title:"Proxy Configuration",description:"Learn how to configure a proxy server for your Appcircle self-hosted server",tags:["self-hosted","proxy","configuration"],sidebar_position:7},c=void 0,l={id:"self-hosted-appcircle/configure-server/integrations-and-access/proxy-configuration",title:"Proxy Configuration",description:"Learn how to configure a proxy server for your Appcircle self-hosted server",source:"@site/docs/self-hosted-appcircle/configure-server/integrations-and-access/proxy-configuration.md",sourceDirName:"self-hosted-appcircle/configure-server/integrations-and-access",slug:"/self-hosted-appcircle/configure-server/integrations-and-access/proxy-configuration",permalink:"/self-hosted-appcircle/configure-server/integrations-and-access/proxy-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/integrations-and-access/proxy-configuration.md",tags:[{label:"self-hosted",permalink:"/tags/self-hosted"},{label:"proxy",permalink:"/tags/proxy"},{label:"configuration",permalink:"/tags/configuration"}],version:"current",sidebarPosition:7,frontMatter:{title:"Proxy Configuration",description:"Learn how to configure a proxy server for your Appcircle self-hosted server",tags:["self-hosted","proxy","configuration"],sidebar_position:7},sidebar:"mySidebar",previous:{title:"Login Configuration",permalink:"/self-hosted-appcircle/configure-server/integrations-and-access/login-configuration"},next:{title:"LDAP Settings",permalink:"/self-hosted-appcircle/configure-server/integrations-and-access/ldap-settings"}},d={},h=[{value:"1. Stop Appcircle Server",id:"1-stop-appcircle-server",level:2},{value:"2. Configure Proxy for the Server",id:"2-configure-proxy-for-the-server",level:2},{value:"<code>no_proxy</code> Configuration",id:"no_proxy-configuration",level:3},{value:"Edit <code>no_proxy</code> for Internal Container Network",id:"edit-no_proxy-for-internal-container-network",level:3},{value:"3. Enable Settings on the Container Engine",id:"3-enable-settings-on-the-container-engine",level:2},{value:"4. Start Appcircle Server",id:"4-start-appcircle-server",level:2},{value:"Maintenance of <code>no_proxy</code> Variables",id:"maintenance-of-no_proxy-variables",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In this document, we will explore the configuration of a proxy server to enable internet connectivity from your Appcircle containers for accessing external resources."}),"\n",(0,o.jsx)(n.p,{children:"We will cover Docker and Podman, providing step-by-step instructions to set up and utilize the proxy server effectively."}),"\n",(0,o.jsx)(n.p,{children:"Using proxies on Appcircle containers ensures smooth connectivity to external resources."}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["We're assuming that previously you reviewed or followed ",(0,o.jsx)(n.a,{href:"/self-hosted-appcircle/install-server/docker#3-configure",children:"install self-hosted appcircle"})," section in docs and applied example scenario."]}),(0,o.jsx)(n.p,{children:"Following steps are using example project as project naming, which was told there."})]}),"\n",(0,o.jsx)(n.h2,{id:"1-stop-appcircle-server",children:"1. Stop Appcircle Server"}),"\n",(0,o.jsx)(n.p,{children:"At first, you must shut down your server and configure it when it is stopped for the overall stability of the host machine."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Go to the ",(0,o.jsx)(n.code,{children:"appcircle-server"})," folder."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Stop the server."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" down\n'})}),"\n",(0,o.jsx)(n.h2,{id:"2-configure-proxy-for-the-server",children:"2. Configure Proxy for the Server"}),"\n",(0,o.jsx)(n.p,{children:"For a typical proxy configuration, you need to know the arguments for these parameters:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Username if the proxy has authentication. For example, ",(0,o.jsx)(n.code,{children:"user"})]}),"\n",(0,o.jsxs)(n.li,{children:["Password if the proxy has authentication. For example, ",(0,o.jsx)(n.code,{children:"password"})]}),"\n",(0,o.jsxs)(n.li,{children:["Hostname or IP of the proxy server. For example, ",(0,o.jsx)(n.code,{children:"proxy.spacetech.com"})]}),"\n",(0,o.jsxs)(n.li,{children:["Port of the proxy server. For example, ",(0,o.jsx)(n.code,{children:"8080"})]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["If your proxy server has no authentication, you should ignore the ",(0,o.jsx)(n.code,{children:"user"})," and ",(0,o.jsx)(n.code,{children:"password"})," values in the below sample codes and configurations."]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"You can also use the IP of the proxy server if it does not have a dedicated domain name."})}),"\n",(0,o.jsx)(n.p,{children:"Next, you should enable proxy settings on the host server."}),"\n",(0,o.jsx)(n.p,{children:"To do that you can follow the steps below:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For non-shell processes, edit the ",(0,o.jsx)(n.code,{children:"/etc/environment"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo vi /etc/environment\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add the content below to the ",(0,o.jsx)(n.code,{children:"/etc/environment"})," file."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-env",children:"HTTP_PROXY=http://user:password@proxy.spacetech.com:8080/\nHTTPS_PROXY=http://user:password@proxy.spacetech.com:8080/\nNO_PROXY=localhost,127.0.0.1\n\nhttp_proxy=http://user:password@proxy.spacetech.com:8080/\nhttps_proxy=http://user:password@proxy.spacetech.com:8080/\nno_proxy=localhost,127.0.0.1\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.h3,{id:"no_proxy-configuration",children:[(0,o.jsx)(n.code,{children:"no_proxy"})," Configuration"]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"no_proxy"})," and ",(0,o.jsx)(n.code,{children:"NO_PROXY"})," should be used for your corporate intranet services that should be kept away from the proxy.\nYou can add all the required domains or IPs separated by a comma. Below are some example cases that are common for a typical enterprise installation."]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Git provider (GitLab, Bitbucket, etc.) For example, ",(0,o.jsx)(n.code,{children:"gitlab.spacetech.com"})]}),"\n",(0,o.jsxs)(n.li,{children:["Proxy Repository (Nexus, Harbor, etc.) For example, ",(0,o.jsx)(n.code,{children:"registry.spacetech.com"})]}),"\n"]})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For shell processes, edit the ",(0,o.jsx)(n.code,{children:"/etc/profile.d/proxy.sh"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo vi /etc/profile.d/proxy.sh\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add the content below to the ",(0,o.jsx)(n.code,{children:"/etc/profile.d/proxy.sh"})," file."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-env",children:"export HTTP_PROXY=http://user:password@proxy.spacetech.com:8080/\nexport HTTPS_PROXY=http://user:password@proxy.spacetech.com:8080/\nexport NO_PROXY=localhost,127.0.0.1\n\nexport http_proxy=http://user:password@proxy.spacetech.com:8080/\nexport https_proxy=http://user:password@proxy.spacetech.com:8080/\nexport no_proxy=localhost,127.0.0.1\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["For system integrity, the proxy settings in here should be the same as the above settings in ",(0,o.jsx)(n.code,{children:"/etc/environment"}),".\nAlso see the ",(0,o.jsx)(n.code,{children:"no_proxy"})," tip explained ",(0,o.jsx)(n.a,{href:"#no_proxy-configuration",children:"there"}),"."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Close the terminal and open a new session."}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsx)(n.p,{children:"To make the changes take effect, please open a brand new terminal session."}),(0,o.jsx)(n.p,{children:"Otherwise, you won't succeed in the following steps."})]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Don't forget to change ",(0,o.jsx)(n.code,{children:"user"}),", ",(0,o.jsx)(n.code,{children:"password"}),", proxy ",(0,o.jsx)(n.code,{children:"host"}),", proxy ",(0,o.jsx)(n.code,{children:"port"}),", and ",(0,o.jsx)(n.code,{children:"no_proxy"})," settings for your needs while copying from above."]})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Currently we do not support proxies that requires to install it's own certificate."})}),"\n",(0,o.jsxs)(n.h3,{id:"edit-no_proxy-for-internal-container-network",children:["Edit ",(0,o.jsx)(n.code,{children:"no_proxy"})," for Internal Container Network"]}),"\n",(0,o.jsxs)(n.p,{children:["In order not to break the connection of the containers with each other, we must add the service names to the ",(0,o.jsx)(n.code,{children:"no_proxy"})," and ",(0,o.jsx)(n.code,{children:"NO_PROXY"})," environment variables."]}),"\n",(0,o.jsx)(n.p,{children:"You can follow the steps below to edit these variables correctly."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Go to the ",(0,o.jsx)(n.code,{children:"appcircle-server"})," folder."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Inside the ",(0,o.jsx)(n.code,{children:"helper-tools"})," directory, there is a bash script file called ",(0,o.jsx)(n.code,{children:"no-proxy.sh"}),"."]}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"no-proxy.sh"})," helper tool exists in self-hosted server versions ",(0,o.jsx)(n.code,{children:"3.7.1"})," or later."]}),(0,o.jsxs)(n.p,{children:["If you have an older version installed, please ",(0,o.jsx)(n.a,{href:"/self-hosted-appcircle/update",children:"upgrade"})," your self-hosted server to a newer version. If upgrading is not possible, you should contact us for support."]})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Execute the script with sudo privileges and give your project as argument."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo ./helper-tools/no-proxy.sh ${YOUR_PROJECT}\n"})}),"\n",(0,o.jsx)(n.p,{children:'For example if your project name is "spacetech", you should run the command like below.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo ./helper-tools/no-proxy.sh spacetech\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:["You must run the script from the parent directory of the ",(0,o.jsx)(n.code,{children:"no-proxy.sh"})," script."]}),(0,o.jsxs)(n.p,{children:["Be aware that if you run the script like ",(0,o.jsx)(n.code,{children:"./no-proxy spacetech"}),", it will fail."]})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Restart your terminal session."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Don't forget to start a new terminal session after you run command above for the changes to take effect."})}),"\n",(0,o.jsx)(n.h2,{id:"3-enable-settings-on-the-container-engine",children:"3. Enable Settings on the Container Engine"}),"\n",(0,o.jsxs)(s.A,{groupId:"operating-systems",children:[(0,o.jsxs)(i.A,{value:"docker",label:"Docker",children:[(0,o.jsx)(n.p,{children:"After you enable proxy settings on the host server, you must also edit the Docker's configuration file to notify the container runtime engine that there are proxy settings to use."}),(0,o.jsx)(n.p,{children:"You can follow the steps below to enable proxy settings on the Docker:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Print the value of the ",(0,o.jsx)(n.code,{children:"no_proxy"})," variable to the terminal and copy it."]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"echo $no_proxy\n"})}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Edit the Docker configuration file. It creates if it does not exist."}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"vi ~/.docker/config.json\n"})}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add the proxy settings to the configuration file like below. Paste the copied ",(0,o.jsx)(n.code,{children:"no_proxy"})," variable to the ",(0,o.jsx)(n.code,{children:"noProxy"}),"\xa0section on the configuration file."]}),"\n"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "proxies": {\n    "default": {\n      "httpProxy": "http://user:password@proxy.spacetech.com:8080",\n      "httpsProxy": "http://user:password@proxy.spacetech.com:8080",\n      "noProxy": "localhost,127.0.0.1"\n    }\n  }\n}\n'})}),(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["The Docker file ",(0,o.jsx)(n.code,{children:"config.json"})," might exist on the system. If that's the case, then you should ",(0,o.jsxs)(n.strong,{children:["only add the ",(0,o.jsx)(n.code,{children:"proxies"})," section"]})," of the JSON above to the configuration file."]})}),(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["For system integrity, the proxy settings in here should be the same as the above settings in ",(0,o.jsx)(n.code,{children:"/etc/environment"}),".\nAlso see the ",(0,o.jsx)(n.code,{children:"no_proxy"})," tip explained ",(0,o.jsx)(n.a,{href:"#no_proxy-configuration",children:"there"}),"."]})}),(0,o.jsx)(n.p,{children:"The configuration becomes active after saving the file, you don\u2019t need to restart Docker. However, the configuration only applies to new containers, and doesn\u2019t affect existing containers."}),(0,o.jsxs)(n.p,{children:["So, if you stop the server as the first step in this document, then you can go on with the next step. If not, it's time to ",(0,o.jsx)(n.a,{href:"#1-stop-appcircle-server",children:"stopping the server"})," before going on."]})]}),(0,o.jsx)(i.A,{value:"podman",label:"Podman",children:(0,o.jsx)(n.p,{children:"If you followed until here, you don't need to take extra actions for the Podman container engine."})})]}),"\n",(0,o.jsx)(n.h2,{id:"4-start-appcircle-server",children:"4. Start Appcircle Server"}),"\n",(0,o.jsx)(n.p,{children:"After configuring the proxy settings on the host, you can start your Appcircle server."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Go to the ",(0,o.jsx)(n.code,{children:"appcircle-server"})," folder."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Start the server."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'./ac-self-hosted.sh -n "spacetech" up\n'})}),"\n",(0,o.jsx)(n.p,{children:"Your containers will be able to connect to external resources through the proxy now."}),"\n",(0,o.jsxs)(n.h2,{id:"maintenance-of-no_proxy-variables",children:["Maintenance of ",(0,o.jsx)(n.code,{children:"no_proxy"})," Variables"]}),"\n",(0,o.jsxs)(n.p,{children:["The Appcircle server is getting updates regularly, and there might be a new container service in the ",(0,o.jsx)(n.code,{children:"compose.yaml"})," file."]}),"\n",(0,o.jsxs)(n.p,{children:["To maintain the stability of the system, you should go back to the ",(0,o.jsxs)(n.a,{href:"#edit-no_proxy-for-internal-container-network",children:["Edit ",(0,o.jsx)(n.code,{children:"no_proxy"})," for Internal Container Network"]})," step and re-apply the operations done there on every upgrade."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var o=r(18215);const t={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(t.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var o=r(96540),t=r(18215),s=r(23104),i=r(56347),a=r(205),c=r(57485),l=r(31682),d=r(89466);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:o,default:t}}=e;return{value:n,label:r,attributes:o,default:t}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function u(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=p(e),[i,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[l,h]=x({queryString:r,groupId:t}),[f,y]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,d.Dv)(r);return[t,(0,o.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),j=(()=>{const e=l??f;return u({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),y(e)}),[h,y,s]),tabValues:s}}var y=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function m(e){let{className:n,block:r,selectedValue:o,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),t=a[r].value;t!==o&&(l(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,t.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":o===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function b(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,g.jsx)(m,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,y.A)();return(0,g.jsx)(b,{...e,children:h(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var o=r(96540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);