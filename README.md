# sidehustle-restapi
> CRUD operations Rest api with NODEJS, Express, and Mysql.

### Folder structure
```sh
sidehustle-restapi
├── package-lock.json
├── package.json
├── server.js
└── src
    ├── config
    │   └── db.config.js
    ├── controllers
    │   └── user.controller.js
    ├── models
    │   └── user.model.js
    └── routes
        └── user.routes.js
```
> `package.json` and `package-lock.json` contain metadata about our project.<br>
> `server.js` is the entry point and contains the logic our server to initialize and start it.<br>
> `src` is our main source folder which serves as a container to our MVC architecture.<br>
> `src/config` contains our configuration and its unique file `db.config.js` is our database connection module which helps connect to a mysql database and exports a database connection instance.<br>
> `src/models` holds our models.<br>
> `src/controllers` handles the controllers.<br>
> `src/routes` holds our routing module.

### Getting started
Clone the repository & change to the cloned folder

Using HTTPS
```sh
git clone https://github.com/desirekaleba/sidehustle-restapi.git && cd sidehustle-restapi
```
Using SSH
```sh
git clone git@github.com:desirekaleba/sidehustle-restapi.git && cd sidehustle-restapi
```
Install dependencies
```sh
npm i
```
Start the server

In watch mode
```sh
npm run dev
```
Production
```sh
npm start
```

### API Endpoints

`GET /api/users` => Get all users <br>
`GET /api/users/:id` Get a user <br>
`POST /api/users` => Add a new user <br>
`PUT /api/users/:id` => Update a user <br>
`DELETE /api/users/:id` => Delete a user <br>

### User schema
```js
{
  id: int,
  email: string,
  phone_number: string
}
```
