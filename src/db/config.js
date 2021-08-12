module.exports = {
  development: {
    username: "root",
    password: "1985Athelete",
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "api-sans-Gluten",
    host: "127.0.0.1",
    JWT_SECRET: process.env.JWT_SECRET,
    //  "JWT_SECRET" :"dzefrzegzegsgfzegfzrgLhhhhhhgfdgtjhgfdd./.Jfe",

    dialect: "mysql",
  },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "api-sans-Gluten",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "api-sans-Gluten",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // }
};
