FROM nginx:alpine

ARG NGINX_FILE_PATH="server/nginx.conf"
RUN ["cp",${NGINX_FILE_PATH},"/etc/nginx/nginx.conf"]
COPY certs/customerportal.crt /etc/ssl/
COPY certs/customerportal.key /etc/ssl

WORKDIR /usr/share/nginx/html
EXPOSE 80 443
COPY dist .