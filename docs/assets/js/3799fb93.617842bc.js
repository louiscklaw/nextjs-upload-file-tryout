"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[10607],{12999:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=r(74848),i=r(28453),t=r(11470),o=r(19365);const l={title:"External Image Registries",description:"Learn how to configure external image registries in Appcircle",tags:["self-hosted","external image registry","registry","sonatype nexus","mirror images","insecure registry","pull images one by one"],sidebar_position:13},a=void 0,c={id:"self-hosted-appcircle/configure-server/external-image-registry",title:"External Image Registries",description:"Learn how to configure external image registries in Appcircle",source:"@site/docs/self-hosted-appcircle/configure-server/external-image-registry.md",sourceDirName:"self-hosted-appcircle/configure-server",slug:"/self-hosted-appcircle/configure-server/external-image-registry",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/external-image-registry",draft:!1,unlisted:!1,editUrl:"https://github.com/appcircleio/appcircle-docusaurus/tree/master/docs/self-hosted-appcircle/configure-server/external-image-registry.md",tags:[{label:"self-hosted",permalink:"/nextjs-upload-file-tryout/tags/self-hosted"},{label:"external image registry",permalink:"/nextjs-upload-file-tryout/tags/external-image-registry"},{label:"registry",permalink:"/nextjs-upload-file-tryout/tags/registry"},{label:"sonatype nexus",permalink:"/nextjs-upload-file-tryout/tags/sonatype-nexus"},{label:"mirror images",permalink:"/nextjs-upload-file-tryout/tags/mirror-images"},{label:"insecure registry",permalink:"/nextjs-upload-file-tryout/tags/insecure-registry"},{label:"pull images one by one",permalink:"/nextjs-upload-file-tryout/tags/pull-images-one-by-one"}],version:"current",sidebarPosition:13,frontMatter:{title:"External Image Registries",description:"Learn how to configure external image registries in Appcircle",tags:["self-hosted","external image registry","registry","sonatype nexus","mirror images","insecure registry","pull images one by one"],sidebar_position:13},sidebar:"mySidebar",previous:{title:"Offline Install/Upgrade",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/offline-installation"},next:{title:"Testing Distribution",permalink:"/nextjs-upload-file-tryout/self-hosted-appcircle/configure-server/testing-distribution"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Appcircle Registry Configuration",id:"appcircle-registry-configuration",level:2},{value:"Sonatype Nexus Configuration",id:"sonatype-nexus-configuration",level:2},{value:"Mirroring Images",id:"mirroring-images",level:2},{value:"Insecure Registry",id:"insecure-registry",level:2},{value:"Pulling Images One By One",id:"pulling-images-one-by-one",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"In the Appcircle's containerized application ecosystem, users have the flexibility to access container images through various external image registries."}),"\n",(0,s.jsx)(n.p,{children:"These external repositories serve as integral components, offering users different avenues to retrieve and manage container images based on their preferences and infrastructure requirements."}),"\n",(0,s.jsx)(n.p,{children:"These services act as intermediaries, facilitating seamless image retrieval, caching frequently accessed images, and providing enhanced security measures for image distribution."}),"\n",(0,s.jsx)(n.h2,{id:"appcircle-registry-configuration",children:"Appcircle Registry Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["For the Appcircle server to work with your own container image registry, you should add an additional setting to the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file of your project."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log in to the Appcircle server with SSH or a remote connection."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.code,{children:"appcircle-server"})," directory."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Edit the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file of your project."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"spacetech"})," in the example codes below is an example project name."]}),(0,s.jsxs)(n.p,{children:["Please find your own project name and replace ",(0,s.jsx)(n.code,{children:"spacetech"})," with your project name."]}),(0,s.jsxs)(n.p,{children:["To see projects, you can check the ",(0,s.jsx)(n.code,{children:"projects"})," directory."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ls -l ./projects\n"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi ./projects/spacetech/global.yaml\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find the ",(0,s.jsx)(n.code,{children:"image"})," key. If it doesn't exist in ",(0,s.jsx)(n.code,{children:"global.yaml"}),", add it."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"image"})," key should be configured with your ",(0,s.jsx)(n.strong,{children:"registry"})," details:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"url"})}),': Registry URL. (For our example, "registry.spacetech.com:8083/appcircle").']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"username"})}),": Username of the registry."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"password"})}),": Password of the registry."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"requiredLogin"})}),": If this variable is set to ",(0,s.jsx)(n.code,{children:"true"}),", the Appcircle server will use the ",(0,s.jsx)(n.code,{children:"username"})," and ",(0,s.jsx)(n.code,{children:"password"})," variables to login to the registry. If the end-user is logged in to his artifact registry manually, or the registry doesn't need authentication, then this variable should be ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"image:\n  registry:\n    url: registry.spacetech.com:8083/appcircle/docker-registry\n    username: registryUsername\n    password: superSecretPassword\n    requiredLogin: true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"sonatype-nexus-configuration",children:"Sonatype Nexus Configuration"}),"\n",(0,s.jsx)(n.p,{children:"To use Sonatype Nexus as your proxy registry, you should follow the below steps."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new repository in Nexus with the type of ",(0,s.jsx)(n.code,{children:"docker (proxy)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Set the registry ",(0,s.jsx)(n.code,{children:"name"})," and ",(0,s.jsx)(n.code,{children:"port"})," as you wish."]}),"\n",(0,s.jsxs)(n.li,{children:["Set the ",(0,s.jsx)(n.code,{children:"Remote Storage"})," as ",(0,s.jsx)(n.code,{children:"https://europe-west1-docker.pkg.dev"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["For the authentication section, you should set ",(0,s.jsx)(n.code,{children:"Username"})," as ",(0,s.jsx)(n.code,{children:"_json_key"})," and ",(0,s.jsx)(n.code,{children:"Password"})," as the content of the ",(0,s.jsx)(n.code,{children:"cred.json"})," file. See the sample screenshot ",(0,s.jsx)(n.a,{href:"https://cdn.appcircle.io/docs/assets/nexus-proxy-settings-3.png",children:"here."})]}),"\n",(0,s.jsx)(n.li,{children:"For SSL, the recommended way is to use a reverse proxy in front of Nexus."}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"You can see some sample screenshots below from Nexus UI for a sample configuration."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cdn.appcircle.io/docs/assets/nexus-proxy-settings-1.png",children:"Proxy repository settings"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cdn.appcircle.io/docs/assets/nexus-proxy-settings-2.png",children:"Remote storage settings"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cdn.appcircle.io/docs/assets/nexus-proxy-settings-3.png",children:"Authentication settings"})}),"\n"]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["After you created the repository, you should add the below section to the ",(0,s.jsx)(n.code,{children:"global.yaml"})," file with your Nexus registry ",(0,s.jsx)(n.code,{children:"url"}),", ",(0,s.jsx)(n.code,{children:"username"})," and ",(0,s.jsx)(n.code,{children:"password"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If you can access your Nexus repository without authentication, you should leave the ",(0,s.jsx)(n.code,{children:"username"})," and ",(0,s.jsx)(n.code,{children:"password"})," fields empty and set ",(0,s.jsx)(n.code,{children:"requiredLogin"})," to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"image:\n  registry:\n    url: registry.spacetech.com:8083/appcircle/docker-registry\n    username:\n    password:\n    requiredLogin: false\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For more detailed usage about the variables, you can check the ",(0,s.jsx)(n.a,{href:"#appcircle-registry-configuration",children:"Appcircle Registry Configuration"})," section."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["In order to proxy Appcircle's registry from the Nexus registry, the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"registry.url"})})," in ",(0,s.jsx)(n.code,{children:"global.yaml"})," must end with"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/appcircle/docker-registry"})}),"\n"]}),(0,s.jsxs)(n.p,{children:["The example ",(0,s.jsx)(n.code,{children:"global.yaml"})," section above is suitable with the example Nexus proxy registry settings shown in the screenshots above."]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:['If you face any issue about "manifest not found" when you try to run ',(0,s.jsx)(n.code,{children:'./ac-self-hosted.sh -n "spacetech" up'}),", try pulling the images one by one from the Nexus proxy registry."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"#pulling-images-one-by-one",children:"Pulling Images On By One"})," script below will force Nexus to pull the images from Appcircle's registry one by one, not in parallel."]}),(0,s.jsx)(n.p,{children:"Nexus has some issues when pulling images in parallel."})]}),"\n",(0,s.jsx)(n.h2,{id:"mirroring-images",children:"Mirroring Images"}),"\n",(0,s.jsx)(n.p,{children:"You can mirror Appcircle container images from the Google Artifact Registry to your local registry."}),"\n",(0,s.jsx)(n.p,{children:"Since there are many images to mirror, you can use a bash script to mirror the images instead of pulling, re-tagging, and pushing them back to your local registry."}),"\n",(0,s.jsx)(n.p,{children:"To mirror images automatically, you can follow the steps below:"}),"\n",(0,s.jsxs)(n.p,{children:["As a ",(0,s.jsx)(n.strong,{children:"pre-requirement"}),", you need to be authenticated to the Google Artifact Registry."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You should already have a ",(0,s.jsx)(n.code,{children:"cred.json"})," file, which you should have taken from us."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To authenticate with your container engine, run the command below:"}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(o.A,{value:"docker",label:"Docker",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat cred.json | docker login -u _json_key --password-stdin  europe-west1-docker.pkg.dev/appcircle/docker-registry\n"})})}),(0,s.jsx)(o.A,{value:"podman",label:"Podman",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat cred.json | podman login -u _json_key --password-stdin  europe-west1-docker.pkg.dev/appcircle/docker-registry\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:'You should see the "Login Succeeded" message after the command execution.'}),"\n",(0,s.jsxs)(n.p,{children:["You can find all container images in the ",(0,s.jsx)(n.code,{children:"docker-images.txt"})," file, which is in the Appcircle server package."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you are on the Appcircle server host, go to the ",(0,s.jsx)(n.code,{children:"appcircle-server"})," directory."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd appcircle-server\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a bash script to mirror the container images."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi mirror-images.sh\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Copy and paste the following code into the bash script:"}),"\n"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(o.A,{value:"docker",label:"Docker",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# Set the source registry URL\nSRC_REGISTRY_URL="europe-west1-docker.pkg.dev/appcircle/docker-registry"\n\n# Set the destination registry URL\nDEST_REGISTRY_URL="registry.spacetech.com:8083/appcircle"\n\n# Loop through each line of the file and pull, tag, and push the Docker image\nwhile read -r IMAGE_NAME || [ -n "$IMAGE_NAME" ]; do\n    if [[ ${IMAGE_NAME:0:1} == "#" ]]; then\n        continue\n    fi\n    echo "Pulling image: $IMAGE_NAME"\n    docker pull $IMAGE_NAME\n    if [ $? -eq 0 ]; then\n        echo "Image pulled successfully: $IMAGE_NAME"\n        # Replace source registry URL  with the new registry URL\n        IMAGE_TAG="${IMAGE_NAME/$SRC_REGISTRY_URL/$DEST_REGISTRY_URL}"\n        # Tag the image with the destination registry URL and repository name\n        docker tag $IMAGE_NAME $IMAGE_TAG\n        # Push the tagged image to the destination registry\n        docker push $IMAGE_TAG\n        if [ $? -eq 0 ]; then\n            echo "Image pushed successfully: $IMAGE_NAME"\n        else\n            echo "Failed to push image: $IMAGE_NAME"\n        fi\n    else\n        echo "Failed to pull image: $IMAGE_NAME"\n    fi\ndone < docker-images.txt\n'})})}),(0,s.jsx)(o.A,{value:"podman",label:"Podman",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# Set the source registry URL\nSRC_REGISTRY_URL="europe-west1-docker.pkg.dev/appcircle/docker-registry"\n\n# Set the destination registry URL\nDEST_REGISTRY_URL="registry.spacetech.com:8083/appcircle"\n\n# Loop through each line of the file and pull, tag, and push the Docker image\nwhile read -r IMAGE_NAME || [ -n "$IMAGE_NAME" ]; do\n    if [[ ${IMAGE_NAME:0:1} == "#" ]]; then\n        continue\n    fi\n    echo "Pulling image: $IMAGE_NAME"\n    podman pull $IMAGE_NAME\n    if [ $? -eq 0 ]; then\n        echo "Image pulled successfully: $IMAGE_NAME"\n        # Replace source registry URL  with the new registry URL\n        IMAGE_TAG="${IMAGE_NAME/$SRC_REGISTRY_URL/$DEST_REGISTRY_URL}"\n        # Tag the image with the destination registry URL and repository name\n        podman tag $IMAGE_NAME $IMAGE_TAG\n        # Push the tagged image to the destination registry\n        podman push $IMAGE_TAG\n        if [ $? -eq 0 ]; then\n            echo "Image pushed successfully: $IMAGE_NAME"\n        else\n            echo "Failed to push image: $IMAGE_NAME"\n        fi\n    else\n        echo "Failed to pull image: $IMAGE_NAME"\n    fi\ndone < docker-images.txt\n'})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["The sample value for ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"DEST_REGISTRY_URL"})})," in the script above must be changed with your container image registry."]}),(0,s.jsx)(n.p,{children:"To find your destination registry URL, please head to your external image registry and check for pull/push command."}),(0,s.jsx)(n.p,{children:"For example, if you're using"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"registry.spacetech.com:8083/appcircle/imagename:latest"})}),"\n"]}),(0,s.jsxs)(n.p,{children:["template for pull/push, the destination registry URL (",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"DEST_REGISTRY_URL"})}),") should be"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"registry.spacetech.com:8083/appcircle"})}),"\n"]}),(0,s.jsxs)(n.p,{children:["Keep in mind that the destination image registry url ",(0,s.jsx)(n.strong,{children:"must not"})," end with ",(0,s.jsx)(n.code,{children:"/"}),"."]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make the ",(0,s.jsx)(n.code,{children:"mirror-images.sh"})," script file executable."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chmod +x mirror-images.sh\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Run the script to mirror all the container images."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./mirror-images.sh\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"If your registry is not using HTTPS, you may get an error during the Docker/Podman push step."}),(0,s.jsxs)(n.p,{children:["You need to add your registry as an insecure registry. Please check the ",(0,s.jsx)(n.a,{href:"#insecure-registry",children:"Insecure Registry"})," section to configure an HTTP registry."]})]}),"\n",(0,s.jsx)(n.h2,{id:"insecure-registry",children:"Insecure Registry"}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsxs)(o.A,{value:"docker",label:"Docker",default:!0,children:[(0,s.jsxs)(n.p,{children:["By default, Docker tries to connect to the server with HTTPS and from the ",(0,s.jsx)(n.code,{children:"443"})," port."]}),(0,s.jsxs)(n.p,{children:["If your registry is running over HTTP, then you should define your registry as an ",(0,s.jsx)(n.strong,{children:"insecure registry"})," in the Docker daemon."]}),(0,s.jsxs)(n.p,{children:["Edit the ",(0,s.jsx)(n.code,{children:"daemon.json"})," file, whose default location is ",(0,s.jsx)(n.code,{children:"/etc/docker/daemon.json"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo vi /etc/docker/daemon.json\n"})}),(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"daemon.json"})," file does not exist, you should create it. Assuming there are no other settings in the file, it should have the following contents:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "insecure-registries": ["registry.spacetech.com:8083"]\n}\n'})}),(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["If you don't specify the port number in the ",(0,s.jsx)(n.code,{children:"daemon.json"})," above, Docker will try to use the default HTTP port, which is ",(0,s.jsx)(n.code,{children:"80"}),"."]}),(0,s.jsxs)(n.p,{children:["If your registry runs on a port other than ",(0,s.jsx)(n.code,{children:"80"}),", you must specify it in the ",(0,s.jsx)(n.code,{children:"daemon.json"})," file, like in the example above."]})]}),(0,s.jsx)(n.p,{children:"Restart the Docker daemon for the changes to take effect."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart docker\n"})})]}),(0,s.jsxs)(o.A,{value:"podman",label:"Podman",children:[(0,s.jsxs)(n.p,{children:["By default, Podman tries to connect to the server with HTTPS and from the ",(0,s.jsx)(n.code,{children:"443"})," port."]}),(0,s.jsxs)(n.p,{children:["If your registry is running over HTTP, then you should define your registry as an ",(0,s.jsx)(n.strong,{children:"insecure registry"})," in the Podman configuration."]}),(0,s.jsxs)(n.p,{children:["Edit the ",(0,s.jsx)(n.code,{children:"registries.conf"})," file, whose default location is ",(0,s.jsx)(n.code,{children:"/etc/containers/registries.conf"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo vi /etc/containers/registries.conf\n"})}),(0,s.jsxs)(n.p,{children:["Copy the template content below, change the ",(0,s.jsx)(n.code,{children:"location"})," to your registry URL, and paste it at the bottom of the ",(0,s.jsx)(n.code,{children:"registries.conf"})," file."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",children:'[[registry]]\nlocation = "registry.spacetech.com:8083"\ninsecure = true\n'})}),(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["If you don't specify the port number in the ",(0,s.jsx)(n.code,{children:"registries.conf"})," above, Podman will try to use the default HTTP port, which is ",(0,s.jsx)(n.code,{children:"80"}),"."]}),(0,s.jsxs)(n.p,{children:["If your registry runs on a port other than ",(0,s.jsx)(n.code,{children:"80"}),", you must specify it in the ",(0,s.jsx)(n.code,{children:"registries.conf"})," file, like in the example above."]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Now you can connect to your registry with HTTP without any errors."}),"\n",(0,s.jsx)(n.h2,{id:"pulling-images-one-by-one",children:"Pulling Images One By One"}),"\n",(0,s.jsxs)(n.p,{children:["If you are having problems pulling all the images in parallel, like happens in ",(0,s.jsx)(n.code,{children:"Nexus"}),", you can use the script below to pull images one by one."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a bash script to to pull images one by one."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi pull-images.sh\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Copy and paste the following code into the bash script:"}),"\n"]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(o.A,{value:"docker",label:"Docker",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# Don\'t change this.\nSRC_REGISTRY_URL="europe-west1-docker.pkg.dev/appcircle/docker-registry"\n\n# Set the proxy registry URL.\nDEST_REGISTRY_URL="registry.spacetech.com:8083/appcircle/docker-registry"\n\nsed -i "s|${SRC_REGISTRY_URL}|${DEST_REGISTRY_URL}|g" docker-images.txt\n\n# Loop through each container image name and pull the container image.\nwhile read -r IMAGE_NAME || [ -n "$IMAGE_NAME" ]; do\n    if [[ ${IMAGE_NAME:0:1} == "#" ]]; then\n        continue\n    fi\n    echo "Pulling image: $IMAGE_NAME"\n    docker pull $IMAGE_NAME\n    if [ $? -eq 0 ]; then\n        echo "Image pulled successfully: $IMAGE_NAME"\n    else\n        echo "Failed to pull image: $IMAGE_NAME"\n    fi\ndone < docker-images.txt\n\nsed -i "s|${DEST_REGISTRY_URL}|${SRC_REGISTRY_URL}|g" docker-images.txt\n'})})}),(0,s.jsx)(o.A,{value:"podman",label:"Podman",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# Don\'t change this.\nSRC_REGISTRY_URL="europe-west1-docker.pkg.dev/appcircle/docker-registry"\n\n# Set the proxy registry URL.\nDEST_REGISTRY_URL="registry.spacetech.com:8083/appcircle/docker-registry"\n\nsed -i "s|${SRC_REGISTRY_URL}|${DEST_REGISTRY_URL}|g" docker-images.txt\n\n# Loop through each container image name and pull the container image.\nwhile read -r IMAGE_NAME || [ -n "$IMAGE_NAME" ]; do\n    if [[ ${IMAGE_NAME:0:1} == "#" ]]; then\n        continue\n    fi\n    echo "Pulling image: $IMAGE_NAME"\n    podman pull $IMAGE_NAME\n    if [ $? -eq 0 ]; then\n        echo "Image pulled successfully: $IMAGE_NAME"\n    else\n        echo "Failed to pull image: $IMAGE_NAME"\n    fi\ndone < docker-images.txt\n\nsed -i "s|${DEST_REGISTRY_URL}|${SRC_REGISTRY_URL}|g" docker-images.txt\n'})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["You should replace the ",(0,s.jsx)(n.code,{children:"DEST_REGISTRY_URL"})," variable per your needs."]}),(0,s.jsx)(n.p,{children:"Let's assume that the URL of your Sonatype Nexus proxy registry is"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"registry.spacetech.com:8083"})}),"\n"]}),(0,s.jsx)(n.p,{children:"and your container image pull command without an image name is"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"registry.spacetech.com:8083/appcircle/docker-registry"})}),"\n"]}),(0,s.jsxs)(n.p,{children:["Then the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"DEST_REGISTRY_URL"})})," should be like below:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"registry.spacetech.com:8083/appcircle/docker-registry"})}),"\n"]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make the ",(0,s.jsx)(n.code,{children:"pull-images.sh"})," script file executable."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chmod +x pull-images.sh\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Run the script to pull all the container images one by one."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./pull-images.sh\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var s=r(18215);const i={tabItem:"tabItem_Ymn6"};var t=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>E});var s=r(96540),i=r(18215),t=r(23104),o=r(56347),l=r(205),a=r(57485),c=r(31682),d=r(89466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:i}}=e;return{value:n,label:r,attributes:s,default:i}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const i=(0,o.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,t=u(e),[o,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[c,h]=g({queryString:r,groupId:i}),[x,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,d.Dv)(r);return[i,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:i}),j=(()=>{const e=c??x;return p({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{j&&a(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),m(e)}),[h,m,t]),tabValues:t}}var m=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function f(e){let{className:n,block:r,selectedValue:s,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const n=e.currentTarget,r=a.indexOf(n),i=l[r].value;i!==s&&(c(n),o(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...t,className:(0,i.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:i}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=x(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,y.jsx)(f,{...e,...n}),(0,y.jsx)(b,{...e,...n})]})}function E(e){const n=(0,m.A)();return(0,y.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(96540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);