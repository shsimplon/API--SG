//import express
const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
// const path = require("path");
const multer = require("multer");

const helmet = require("helmet");
const morgan = require("morgan");
const cookies = require("cookie-parser");
const isAuth = require("./middlewares/auth.middleware");
const jwt = require("jsonwebtoken");
const cors = require("cors");
// var fs = require('fs');

const routes = require("./routes");
//middeleware
//  const {checkUser,requireAuth} = require("./middlewares/isAuth");

const { notFoundHandler, errorLogger, errorHandler } = require("./middlewares");
//instantiate server
const server = express();
const upload = multer();
server.use(cors());
// Enable file upload using express-fileupload
server.use(
  fileUpload({
    createParentPath: true,
  })
);
// const corsOptions = {
//   origin: process.env.CLIENT_URL,
//   credentials: true,
//   allowedHeaders: ["sessionId", "Content-Type"],
//   exposedHeaders: ["sessionId"],
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
// };
// server.use(cors(corsOptions));

//use les dependences
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

server.use(express.urlencoded({ extended: false }));
server.use(cookies());

// Static Files
server.use("/upload", express.static("public"));
// server.use(fileUpload());
// const corsOptions = {
//   origin: process.env.CLIENT_URL,
//   credentials: true,
//   allowedHeaders: ["sessionId", "Content-Type"],
//   exposedHeaders: ["sessionId"],
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
// };
// server.use(cors(corsOptions));

//configure routes
// server.get("/", function (req, res) {
//   res.setHeader("content-type", "text/html");
//   res.status(200).send("<h1>bonjour mon projet</h1>");
// });

// jwt
// server.get("/jwtid", requireAuth, (request, response) => {
//   response.status(200).send(response.user.id);
// });

server.use("/api", routes);
server.use(isAuth);

server.use(helmet.xssFilter());

server.use("*", notFoundHandler);
server.use(errorLogger);
server.use(errorHandler);

module.exports = server;
