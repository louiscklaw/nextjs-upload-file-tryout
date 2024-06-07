docker build -t upload_louislabs_com .

docker run --rm -p 3000:3000 -w /usr/bin/app/src -it upload_louislabs_com  bash
