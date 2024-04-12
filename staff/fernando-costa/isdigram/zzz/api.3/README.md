# API

## endpoints

- register user

```sh
curl -X POST -H "Content-Type: application/json" -d '{"name":"Pepito Grillo","birthdate":"2000-01-01","email":"pepito@grillo.com","username":"pepitogrillo","password":"123123abc"}' http://localhost:8080/users -v

curl -X POST -H "Content-Type: application/json" -d '{"name":"Cala Baza","birthdate":"2000-02-02","email":"cala@baza.com","username":"calabaza","password":"123123abc"}' http://localhost:8080/users -v
```

-login user

```sh
curl -X POST -H "Content-Type: application/json" -d '{"username":"calabaza","password":"123123abc"}' http://localhost:8080/users/auth -v

curl -X POST -H "Content-Type: application/json" -d '{"username":"pepitogrillo","password":"123123abc"}' http://localhost:8080/users/auth -v
```

-retrive user

```sh
curl -X POST -H "Content-Type: application/json" -d '{"userId":"9jgxjom8mzo"}' http://localhost:8080/users -v
```

// TODO