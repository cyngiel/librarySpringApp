FROM mysql:latest 
ENV MYSQL_ROOT_PASSWORD='password'
COPY init_db.sql /mysql/init_db.sql
ADD init_db.sql /docker-entrypont-initdb.d
ADD my_conf.cnf /etc/mysql/conf.d
