FROM nginx:alpine

ENV API_GATEWAY_URL=https://www.mapfreapis.com \
    CLIENT_ID=  \
    CLIENT_SECRET=  \
    DEFAULT='$uri $uri/' \
    ESCAPE='$'

COPY server/nginx.tmpl /etc/nginx/nginx.tmpl

COPY certs/customerportal.crt /etc/ssl/
COPY certs/customerportal.key /etc/ssl

WORKDIR /usr/share/nginx/html
EXPOSE 80 443
COPY dist .

CMD /bin/sh -c "envsubst < /etc/nginx/nginx.tmpl > /etc/nginx/nginx.conf && nginx -g 'daemon off;' || cat /etc/nginx/nginx.conf"