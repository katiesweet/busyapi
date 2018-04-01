# ab -p post_data.txt -T application/json -t 60 -n 1000000 -c 3 http://localhost:3000/api/usages
# ab -p post_data.txt -T application/json -t 60 -n 1000000 -c 4 http://129.123.110.23:3000/api/usages
# ab -p post_data.txt -T application/json -k -n 1000000 -c 1000 http://129.123.110.23:3000/api/usages
ab -p post_data.txt -T application/json -k -n 1000000 -c 1000 http://localhost:3000/api/usages
