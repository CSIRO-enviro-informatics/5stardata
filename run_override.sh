CONTAINER=oznome-5star-prod
docker stop $CONTAINER
docker kill $CONTAINER
docker rm $CONTAINER
docker run -dit --name $CONTAINER -p 12000:80  \
         -v "$PWD/htdocs":/usr/local/apache2/htdocs/ \
         -v "$PWD/httpd.conf":/usr/local/apache2/conf/httpd.conf \
         -v "$PWD/httpd-vhosts.conf":/usr/local/apache2/conf/extra/httpd-vhosts.conf \
          httpd:2.4.25

