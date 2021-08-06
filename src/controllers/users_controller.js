const { user } = require("../models");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../helpers/errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getEncryptedPassword(password) {
  let error, encryptedPassword;

  encryptedPassword = await bcrypt.hash(password, 10);

  return encryptedPassword;
}

const userController = {
  getAll: async () => {
    const users = await user.findAll({
      order: [["username", "ASC"]],
      attributes: { exclude: ["dateCreated"] },
      raw: true,
    });
    return users;
  },

  getOne: async (id) => {
    const User = await user.findOne({
      where: {
        id,
      },
      attributes: { exclude: ["dateCreated"] },
    });
    if (!User) {
      throw new NotFoundError("Ressource introuvable", "Ce User n'existe pas");
    }

    return User;
  },

  getByUserName: async (email, password) => {
    const User = await user.findOne({
      where: {
        email,
      },
      attributes: { exclude: ["dateCreated"] },
    });
    if (!User) {
      throw new NotFoundError("Ressource introuvable", "Ce User n'existe pas");
    }

    let correct = await bcrypt.compare(password, User.password);
    if (correct) {
      const MAXAGE = Math.floor(Date.now() / 1000) + 60 * 60; // 1 hour of expiration
      User.exp = MAXAGE;
      token = await jwt.sign(JSON.stringify(User), process.env.JWT_SECRET);
      User.token = token;
      return User;
    } else {
      throw new UnauthorizedError("Wrong Password");
    }
  },

  add: async (data) => {
    const { email, password } = data;

    const User = await user.findOne({
      where: {
        email,
      },
    });

    if (User) {
      throw new BadRequestError("Ressource existante", "Ce User existe déjà");
    }
    data.password = await getEncryptedPassword(password);

    console.log(data.password);
    const newUser = await user.create(data);

    return newUser;
  },

  update: async (id, data) => {
    const userFound = await user.findOne({
      where: { id },
    });
    if (!userFound) {
      throw new NotFoundError("Ressource introuvable", "Ce User n'existe pas");
    }

    await userFound.update(data);

    const User = await user.findOne({
      where: {
        id,
      },
      attributes: { exclude: ["dateCreated"] },
    });

    return User;
  },

  deleteOne: async (id) => {
    const userFound = await user.findOne({
      where: { id },
    });
    if (!userFound) {
      throw new NotFoundError("Ressource introuvable", "Ce User n'existe pas");
    }

    await user.destroy({
      where: { id },
    });
  },
};

module.exports = userController;

// Imports
// var bcrypt = require("bcrypt");
// var models = require("../models");
//  const isAuth = require("../middlewares/auth.middleware");

// // Constants
//  const EMAIL_REGEX     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//  const PASSWORD_REGEX  = /^(?=.*\d).{4,8}$/;

// // Routes
// module.exports = {
//   register: function (req, res) {
//     // Params
//     var email = req.body.email;
//     var username = req.body.username;
//     var password = req.body.password;
//     var bio = req.body.bio;

//     if (email == null || username == null || password == null) {
//       return res.status(400).json({ error: "missing parameters" });
//     }

//     if (username.length >= 13 || username.length <= 3) {
//       return res.status(400).json({ 'error': 'wrong username (must be length 4 - 12)' });
//     }

//     if (!EMAIL_REGEX.test(email)) {
//       return res.status(400).json({ 'error': 'email is not valid' });
//     }

//     if (!PASSWORD_REGEX.test(password)) {
//       return res.status(400).json({ 'error': 'password invalid (must length 4 - 8 and include 1 number at least)' });
//     }

//     models.user
//       .findOne({
//         attributes: ["email"],
//         where: { email: email },
//       })
//       .then(function (userFound) {
//         if (!userFound) {
//           bcrypt.hash(password, 5, function (err, bcryptedPassword) {
//             var newUser = models.user
//               .create({
//                 email: email,
//                 username: username,
//                 password: bcryptedPassword,
//                 bio: bio,
//               })
//               .then(function (newUser) {
//                 return res.status(201).json({
//                   userId: newUser.id,
//                 });
//               })
//               .catch(function (err) {
//                 return res.status(500).json({ error: "cannot add user" });
//               });
//           });
//         } else {
//           return res.status(409).json({ error: "user already exist" });
//         }
//       });
//   },

//   login: function(req, res) {

//     // Params
//     var email    = req.body.email;
//     var password = req.body.password;

//     if (email == null ||  password == null) {
//       return res.status(400).json({ 'error': 'missing parameters' });
//     }

//         models.user.findOne({
//           where: { email: email }
//         })
//         .then(function(userFound) {

//         if (userFound) {
//           bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt) {

//         if(resBycrypt) {

//         return res.status(200).json({
//           'userId': userFound.id,
//           'token': isAuth.generateTokenForUser(userFound)
//         });
//       } else {
//                return res.status(403).json({ 'error': 'invalid password' });
//             }
//           });
//       } else {
//           return res.status(404).json({ 'error': 'user not exist in DB' });
//     }
//     })

//   .catch(function(err) {
//     return res.status(500).json({ 'error': 'unable to verify user' });
//   });

// },

// getUserProfile: function(req, res) {
//   // Getting auth header
//   var headerAuth  = req.headers['authorization'];
//   var userId      = isAuth.getUserId(headerAuth);

//   if (userId < 0)
//     return res.status(400).json({ 'error': 'wrong token' });

//   models.user.findOne({
//     attributes: [ 'id', 'email', 'username', 'bio' ],
//     where: { id: userId }
//   }).then(function(user) {
//     if (user) {
//       res.status(201).json(user);
//     } else {
//       res.status(404).json({ 'error': 'user not found' });
//     }
//   }).catch(function(err) {
//     res.status(500).json({ 'error': 'cannot fetch user' });
//   });
// },

// updateUserProfile: function(req, res) {
//   // Getting auth header
//   var headerAuth  = req.headers['authorization'];
//   var userId      = jwtUtils.getUserId(headerAuth);

//   // Params
//   var bio = req.body.bio;

//   asyncLib.waterfall([
//     function(done) {
//       models.User.findOne({
//         attributes: ['id', 'bio'],
//         where: { id: userId }
//       }).then(function (userFound) {
//         done(null, userFound);
//       })
//       .catch(function(err) {
//         return res.status(500).json({ 'error': 'unable to verify user' });
//       });
//     },
//     function(userFound, done) {
//       if(userFound) {
//         userFound.update({
//           bio: (bio ? bio : userFound.bio)
//         }).then(function() {
//           done(userFound);
//         }).catch(function(err) {
//           res.status(500).json({ 'error': 'cannot update user' });
//         });
//       } else {
//         res.status(404).json({ 'error': 'user not found' });
//       }
//     },
//   ], function(userFound) {
//     if (userFound) {
//       return res.status(201).json(userFound);
//     } else {
//       return res.status(500).json({ 'error': 'cannot update user profile' });
//     }
//   });
// }
// };
