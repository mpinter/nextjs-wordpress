# nextjs-wordpress

Wordpress as headless CMS served into static nextjs

## Dockerizing wordpress

We're using the latest `wordpress` container - to allow changes to it's default setup, we're building it from `Dockerfile` found in `docker` directory.

```
docker build -t mpinter/wordpress - < Dockerfile
```

The `- < Dockerfile` means we're supplying no context to build in and a `Dockerfile` is passed in through standard input - in it, we extend the default `wordpress` container.

### Running locally

Replace passwords and names as you see fit.

Firs time setup database

```
docker run -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=wordpress --name wordpressdb -v "$PWD/database":/var/lib/mysql -d mariadb:latest
```

Then you can start/stop with

```
docker start wordpressdb
docker stop wordpressdb
```

First time setup wordpress server

```
docker run -e WORDPRESS_DB_PASSWORD=password --name wordpress-custom --link wordpressdb:mysql -p 80:80 -v "$PWD/html":/var/www/html -d mpinter/wordpress
```

Then you can start/stop with

```
docker start wordpress-custom
docker stop wordpress-custom
```
