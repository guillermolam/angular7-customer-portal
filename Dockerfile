FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY certs/customerportal.crt /etc/ssl/
COPY certs/customerportal.key /etc/ssl

RUN apk add --no-cache nginx-mod-http-perl=1.14.1-r0

ENV ENV DEV 
ENV ROUTE https://dev.mapfreapis.com/mapfre/

WORKDIR /usr/share/nginx/html
EXPOSE 80 443
COPY dist .

