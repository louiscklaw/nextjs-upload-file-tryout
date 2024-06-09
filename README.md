# nextjs-upload-file-tryout

### dev

cd src
yarn
yarn dev

### deploy

docker build -t upload_louislabs_com .
docker tag upload_louislabs_com 192.168.10.61:5000/upload_louislabs_com
docker push 192.168.10.61:5000/upload_louislabs_com

docker compose up -d

.\dc_up.bat
./dc_up.sh

# TODO

discord alert to louis when file arrive
