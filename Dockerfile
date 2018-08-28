FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY mapfreusa.com.cer /etc/nginx/certs

WORKDIR /usr/share/nginx/html
EXPOSE 80 443
COPY dist .

