FROM nginx:alpine

ENV RESOLVER=127.0.0.0 \
    API_GATEWAY_URL=https://www.mapfreapis.com \
    ESC='$'

COPY server/nginx.tmpl /etc/nginx/nginx.tmpl

COPY certs/customerportal.crt /etc/ssl/
COPY certs/customerportal.key /etc/ssl

WORKDIR /usr/share/nginx/html
EXPOSE 80 443
COPY dist .

CMD /bin/sh -c "envsubst < /etc/nginx/nginx.tmpl > /etc/nginx/nginx.conf && nginx -g 'daemon off;' || cat /etc/nginx/nginx.conf"