"use strict";(self.webpackChunkappcircle_docusaurus=self.webpackChunkappcircle_docusaurus||[]).push([[53483],{19298:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=i(74848),t=i(28453),r=i(69678),s=i(70344);const o={title:"Overview",description:"Overview of environment variables in Appcircle",tags:["environment variables","variable groups","text-based variables","file-based variables"],sidebar_position:2},l="Overview of Environment Variables",d={id:"environment-variables/managing-variables",title:"Overview",description:"Overview of environment variables in Appcircle",source:"@site/docs/environment-variables/managing-variables.md",sourceDirName:"environment-variables",slug:"/environment-variables/managing-variables",permalink:"/nextjs-upload-file-tryout/environment-variables/managing-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/environment-variables/managing-variables.md",tags:[{label:"environment variables",permalink:"/nextjs-upload-file-tryout/tags/environment-variables"},{label:"variable groups",permalink:"/nextjs-upload-file-tryout/tags/variable-groups"},{label:"text-based variables",permalink:"/nextjs-upload-file-tryout/tags/text-based-variables"},{label:"file-based variables",permalink:"/nextjs-upload-file-tryout/tags/file-based-variables"}],version:"current",sidebarPosition:2,frontMatter:{title:"Overview",description:"Overview of environment variables in Appcircle",tags:["environment variables","variable groups","text-based variables","file-based variables"],sidebar_position:2},sidebar:"mySidebar",previous:{title:"Introduction to Environment Variables",permalink:"/nextjs-upload-file-tryout/environment-variables/"},next:{title:"Reserved Variables",permalink:"/nextjs-upload-file-tryout/environment-variables/appcircle-specific-environment-variables"}},c={},u=[{value:"Creating environment variable groups",id:"creating-environment-variable-groups",level:3},{value:"Adding key and text-based value pairs",id:"adding-key-and-text-based-value-pairs",level:3},{value:"Adding files as environment variables",id:"adding-files-as-environment-variables",level:3},{value:"Download Environment Variables",id:"download-environment-variables",level:3},{value:"Using environment variable groups in builds",id:"using-environment-variable-groups-in-builds",level:3},{value:"Creating environment variables on the fly",id:"creating-environment-variables-on-the-fly",level:3},{value:"Using Environment Variables For SSH And PAT (Personal Access Token) Connections of the Git Provider",id:"using-environment-variables-for-ssh-and-pat-personal-access-token-connections-of-the-git-provider",level:3}];function v(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"overview-of-environment-variables",children:"Overview of Environment Variables"}),"\n",(0,a.jsx)(n.h3,{id:"creating-environment-variable-groups",children:"Creating environment variable groups"}),"\n",(0,a.jsx)(n.p,{children:"To create an environment variable group, select Environment Variables from the build module. Click on the orange + icon and enter the name of the group into the input box, press enter to save the group name and create the group."}),"\n",(0,a.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3108-var2.png"}),"\n",(0,a.jsx)(n.h3,{id:"adding-key-and-text-based-value-pairs",children:"Adding key and text-based value pairs"}),"\n",(0,a.jsx)(n.p,{children:'To add an environment variable to the group, select the "Text" tab from the top and use the inputs below. Enter a key name, then enter the value for the key and press enter.'}),"\n",(0,a.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3108-var3.png"}),"\n",(0,a.jsx)(n.p,{children:"You can add as many environment variables as you need."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"Variables that need to be secret can be hidden using the lock icon. Such variables cannot be viewed by the users during the build process."})}),"\n",(0,a.jsx)(n.p,{children:"Please note that some environment variables may need to be duplicated to be used in different groups for different purposes."}),"\n",(0,a.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3108-var1.png"}),"\n",(0,a.jsx)(n.h3,{id:"adding-files-as-environment-variables",children:"Adding files as environment variables"}),"\n",(0,a.jsx)(n.p,{children:"You can also add files as environment variables and use them in build workflows in the same way. They can be used for things like API-key based authentication in Firebase or for adding dSYM files."}),"\n",(0,a.jsx)(n.p,{children:'To add a file, select the "File" tab from the top and enter a key name from the inputs below. Then select a file from the file browser that opens when you click the file field.'}),"\n",(0,a.jsx)(n.p,{children:"Then press add to upload the file."}),"\n",(0,a.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3108-var4.png"}),"\n",(0,a.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3108-var5.png"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"When you upload a file as an environment variable, file name is not preserved. The reason of this to prevent file name conflicts. You can upload different files with same name and can use their keys to refer them. You need to use your key to find the location of this file and then you can read the contents of this file."})}),"\n",(0,a.jsx)(n.h3,{id:"download-environment-variables",children:"Download Environment Variables"}),"\n",(0,a.jsxs)(n.p,{children:["You can download and view environment variables in ",(0,a.jsx)(n.strong,{children:"JSON"}),' format. For this, you can use the "Download" button by clicking on the three dots next to one of the variable groups under "Build > Environment Variables > Variable Groups".']}),"\n",(0,a.jsxs)(n.p,{children:["In the downloaded file content, you will see a structure as ",(0,a.jsx)(n.strong,{children:"key-value"})," pairs."]}),"\n",(0,a.jsx)(n.p,{children:"Here you can view text and file-based variables. However, only the name of the environment variables you added as a file will appear. The related file will not be downloaded."}),"\n",(0,a.jsxs)(n.p,{children:['In addition, if the value part of the environment variable is set to hidden during the text-based environment variable addition process, the "isSecret" value will be ',(0,a.jsx)(n.code,{children:"true"})," and the value will be empty in the downloaded file. If it is not hidden, this value will be ",(0,a.jsx)(n.code,{children:"false"}),", and the value will be visible completely."]}),"\n",(0,a.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3108-var6.png"}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:"An example of environment variables downloaded as a JSON file:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "key": "API_URL",\n    "value": "https://api.example.com",\n    "isSecret": false,\n    "id": "API_URL"\n  },\n  {\n    "anahtar": "API_KEY",\n    "value": "",\n    "isSecret": true,\n    "id": "API_KEY"\n  },\n  {\n    "key": "API_SECRET",\n    "value": "",\n    "isSecret": true,\n    "id": "API_SECRET"\n  },\n  {\n    "key": "myFile",\n    "value": "mykeys.json",\n    "isSecret": false,\n    "id": "myFile"\n  }\n]\n'})}),(0,a.jsx)(n.p,{children:"As seen in the example above;"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["if the ",(0,a.jsx)(n.strong,{children:"isSecret"})," value is ",(0,a.jsx)(n.code,{children:"true"}),", the value is empty"]}),"\n",(0,a.jsxs)(n.li,{children:["if the ",(0,a.jsx)(n.strong,{children:"isSecret"})," value is ",(0,a.jsx)(n.code,{children:"false"}),", it has visible value"]}),"\n"]})]}),"\n",(0,a.jsx)(n.h3,{id:"using-environment-variable-groups-in-builds",children:"Using environment variable groups in builds"}),"\n",(0,a.jsx)(n.p,{children:"Environment variable groups can be used in builds to extend the workflow and add additional actions to workflow steps."}),"\n",(0,a.jsxs)(n.p,{children:["To add an environment variable group to a build, go to the build profile from the build module and select ",(0,a.jsx)(n.em,{children:"Build Configuration > Env. Variables"})]}),"\n",(0,a.jsx)(n.p,{children:"Here, you can see a list of previously created environment variable groups. Select the groups you want to be included in this specific build profile. Then click Save to save your selection."}),"\n",(0,a.jsx)(n.p,{children:"Then in workflows, you can specify the environment variable for use."}),"\n",(0,a.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/build-configuration-env-variables.png"}),"\n",(0,a.jsx)(n.h3,{id:"creating-environment-variables-on-the-fly",children:"Creating environment variables on the fly"}),"\n",(0,a.jsxs)(n.p,{children:["If you want to create environment variables on the fly, you should write those environment variables to a special file called ",(0,a.jsx)(n.code,{children:"AC_ENV_FILE_PATH"}),". For example, if we want to create a build number based on a timestamp and use it in the next steps we can use the following custom script."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:' echo "BUILD_NUMBER=$(date +%s)" >> $AC_ENV_FILE_PATH\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Any step after this custom script can access the ",(0,a.jsx)(n.code,{children:"$BUILD_NUMBER"})," environment variable."]}),"\n",(0,a.jsx)(n.h3,{id:"using-environment-variables-for-ssh-and-pat-personal-access-token-connections-of-the-git-provider",children:"Using Environment Variables For SSH And PAT (Personal Access Token) Connections of the Git Provider"}),"\n",(0,a.jsx)(n.p,{children:"You can use personal access tokens or SSH private keys from the environment variables according to your needs by defining them once."}),"\n",(0,a.jsx)(n.p,{children:"So you can add environment variables and use them in multiple projects. Also, this usage allows you to update all your projects at once when there is a change to the SSH private key, or PAT."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"You can create an environment variable and enter the key value for the Personal Access Token."})}),"\n",(0,a.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3108-var7.png"}),"\n",(0,a.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/repocon-azure.png"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"If you are going to use an SSH private key, you need to upload it as a file."})}),"\n",(0,a.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/be-3108-var8.png"}),"\n",(0,a.jsx)(r.A,{url:"https://cdn.appcircle.io/docs/assets/sshconn-var.png"}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:"There are two use cases for the variable group naming here."}),(0,a.jsx)(n.p,{children:"If the variable group nomenclature contains space, the usage will be as follows:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",children:'$"Variable Group:Key"\n'})}),(0,a.jsx)(n.p,{children:"If the variable group nomenclature does not contain any space, it will be used like this:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",children:"$VariableGroup:Key\n"})})]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"If your SSH public key is not defined on the Git provider, Appcircle will not be able to connect to your repository. First, you will need to add your public key to the Git provider."})}),"\n",(0,a.jsx)(s.A,{url:"/build/manage-the-connections/adding-a-build-profile/connecting-to-private-repository-via-ssh",children:"Connecting to Repository via SSH"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},70344:(e,n,i)=>{i.d(n,{A:()=>d});var a,t,r=i(96540);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},s.apply(this,arguments)}const o=e=>{let{title:n,titleId:i,...o}=e;return r.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,a||(a=r.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),t||(t=r.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};var l=i(74848);function d(e){let{children:n,url:i}=e;return(0,l.jsxs)("a",{href:i,className:"content-ref-card",children:[(0,l.jsx)(o,{title:"File Icon",className:"file-icon"}),n]})}},69678:(e,n,i)=>{i.d(n,{A:()=>t});i(96540);var a=i(74848);function t(e){let{url:n}=e;return(0,a.jsx)("img",{className:"screenshot",src:n})}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var a=i(96540);const t={},r=a.createContext(t);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);