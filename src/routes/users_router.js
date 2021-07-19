// // Imports
const express = require("express");
const isAuth = require("../middlewares/auth.middleware");
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');

const { OK, CREATED } = require("../helpers/status_codes");
const {
  getAll,
  getOne,
  getByUserName,
  add,
  deleteOne,
  update,
} = require("../controllers/users_controller");
const { ValidationError } = require("../helpers/errors");

const router = express.Router();

router.get("/", async (request, response) => {
  const users = await getAll();
  response.status(OK).json(users)
});

router.post("/register", async (request, response) => {
  const user = request.body;
  try {
  const newUser = await add(user);
  response.status(CREATED).json(newUser);
}
catch(err) {
  const errors = signUpErrors(err);
  response.status(200).send({ errors })
}


});

router.get("/:id", isAuth,async (request, response) => {
  const user = await getOne(request.params.id);
  response.status(OK).json(user);
});

router.post("/login", async (request, response) => {
  try {
  const user = await getByUserName(request.body.email,request.body.password);
   const MAXAGE = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour of expiration
  response.cookie('jwt', user.token, { maxAge: MAXAGE });
  response.status(OK).json({user:user,token:user.token});

} catch (err){
  const errors = signInErrors(err);
  response.status(200).json({ errors });
}
});

router.put("/:id",isAuth, async (request, response) => {
  const user = request.body;

  const userUpdated = await update(request.params.id, user,request.user.id);
  response.status(OK).json(quizUpdated);
});

router.delete("/:id", isAuth,async (request, response) => {
  await deleteOne(request.params.id);
  response.status(OK).json({ message: "L'user est supprimé avec succès" });
});

// router.get("/logout/:id", async = (request, response) => {
//   response.cookie('jwt', '', { maxAge: 1});
//   response.redirect('/');
// });

module.exports = router;

// const router = require("express").Router();


// // Imports
// var express      = require('express');
// var users_controller    = require('../controllers/users_controller');
// // var messagesCtrl = require('./routes/messagesCtrl');
// // var likesCtrl    = require('./routes/likesCtrl');

// // Router

//   // Users routes
//   router.post('/register',users_controller.register);
//  router.post('/login',users_controller.login);
//  router.get('/').get(users_controller.getUserProfile);
//   // router.put('/userId').put(users_controller.updateUserProfile);



//   module.exports = router;
