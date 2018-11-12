FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY certs/customerportal.crt /etc/ssl/
COPY certs/customerportal.key /etc/ssl

RUN apk add --no-cache nginx-mod-http-perl=1.10.3-r1

ENV ENV DEV
WORKDIR /usr/share/nginx/html
EXPOSE 80 443
COPY dist .

