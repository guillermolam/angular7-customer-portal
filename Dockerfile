FROM nginx:alpine

ARG NGINX_FILE_PATH="server/nginx.conf"
ADD ${NGINX_FILE_PATH} /etc/nginx/nginx.conf

RUN echo $NGINX_FILE_PATH
COPY certs/customerportal.crt /etc/ssl/
COPY certs/customerportal.key /etc/ssl

WORKDIR /usr/share/nginx/html
EXPOSE 80 443
COPY dist .

