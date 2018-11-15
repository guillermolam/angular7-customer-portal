FROM nginx:alpine

ENV nginx_file_path server/nginx.conf
COPY $nginx_file_path /etc/nginx/nginx.conf
COPY certs/customerportal.crt /etc/ssl/
COPY certs/customerportal.key /etc/ssl

WORKDIR /usr/share/nginx/html
EXPOSE 80 443
COPY dist .

