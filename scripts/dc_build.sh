docker build -t upload_louislabs_com .
docker tag upload_louislabs_com 192.168.10.61:5000/upload_louislabs_com
docker push 192.168.10.61:5000/upload_louislabs_com
