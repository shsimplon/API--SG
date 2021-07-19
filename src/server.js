//import express
const express = require("express");
const fileUpload = require('express-fileupload');
const helmet = require("helmet");
const morgan = require("morgan");
const cookies = require("cookie-parser");
const {isAuth, requireAuth} = require('./middlewares/auth.middleware');
const jwt = require('jsonwebtoken')
const cors = require("cors");


 const routes = require("./routes");
 //middeleware
//  const {checkUser,requireAuth} = require("./middlewares/isAuth");

const { notFoundHandler, errorLogger, errorHandler } = require("./middlewares");
//instantiate server
const server = express();
//filtrer ceux qui peuvent faire les req sur le site
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
server.use(cors(corsOptions));
// enable files upload
server.use(fileUpload({
  createParentPath: true
}));

//use les dependences
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

server.use(express.urlencoded({ extended: false }));
server.use(cookies());

// Static Files
server.use(express.static('public'));



server.use("/api", cors());

//configure routes
server.get("/", function (req, res) {
  res.setHeader("content-type", "text/html");
  res.status(200).send("<h1>bonjour mon projet</h1>");
});
// jwt
server.get('/jwtid', requireAuth, (request, response) => {
  response.status(200).send(response.user.id)
});



 server.use("/api", routes);

server.use("*", notFoundHandler);
server.use(errorLogger);
server.use(errorHandler);

module.exports = server;
