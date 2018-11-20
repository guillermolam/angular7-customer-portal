FROM nginx:alpine

<<<<<<< HEAD
COPY nginx.conf /etc/nginx/nginx.conf
=======
ENV API_GATEWAY_URL=https://www.mapfreapis.com \
    CLIENT_ID=  \
    CLIENT_SECRET=  \
    DEFAULT='$uri $uri/'

COPY server/nginx.tmpl /etc/nginx/nginx.tmpl

>>>>>>> ba099f7af1b2939490e23fad9d0b13b6d35faaca
COPY certs/customerportal.crt /etc/ssl/
COPY certs/customerportal.key /etc/ssl

WORKDIR /usr/share/nginx/html
EXPOSE 80 443
COPY dist .

CMD /bin/sh -c "envsubst < /etc/nginx/nginx.tmpl > /etc/nginx/nginx.conf && nginx -g 'daemon off;' || cat /etc/nginx/nginx.conf"