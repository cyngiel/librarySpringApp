# LibrarySpringApp

A library rest spring app



## Docker


cd to /docker and build 

```bash
  docker build -t db . 
```

run 
```bash
 docker run -dp 3306:3306 db
```

## Check connection with server


go to the 

```bash
  localhost:8080/ping 
```

should recive "pong"
