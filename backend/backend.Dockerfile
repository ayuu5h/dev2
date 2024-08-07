# backend/backend.Dockerfile
FROM php:7.4-apache
COPY app.php /var/www/html/
RUN docker-php-ext-install mysqli