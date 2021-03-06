require("dotenv").config();

const server = require("./server");
const db = require("./models");

const port = process.env.PORT || 8080;
//const host = "127.0.0.1";

const env = process.env.NODE_ENV || "development";
// listen server

server.listen(port, async () => {
  console.debug(`Server is listening on port ${port}`);
  console.debug(`Current environment is ${env}`);
  db.sequelize.sync({ alter: false }, () => {
    console.log("db on");
  });
});
