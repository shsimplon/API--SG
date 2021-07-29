
// const jwt = require("jsonwebtoken");
// const user = require("../models/user");
// const {UnauthorizedError}=require ("../helpers/errors")

// // verification de token
// const isAuth = (request, response, next) => {

//     const token = request.headers.jwt;
    
//     jwt.verify(token,process.env.JWT_SECRET, (error, user) => {
//         if (error) {
//             console.log(error);
//               throw new UnauthorizedError("You must be login");
//        } else {
//              const {  exp } = user;
         
//              if (Date.now() / 1000 >= exp) {
//                 response.clearCookie("jwt");
                
//                 throw new UnauthorizedError("You must be login");
//              }
//              request.user =user;
//              next();
//         }
//     });
   
// }
// module.exports = isAuth;

// // Imports



// // Exported functions
// // module.exports = {
// //   generateTokenForUser: function(userData) {
// //     return jwt.sign({
// //       userId: userData.id,
// //     },
// //     process.env.JWT_SECRET,
// //     {
// //       expiresIn: '1h'
// //     })
// //   },
// //   parseAuthorization: function(authorization) {
// //     return (authorization != null) ? authorization.replace('Bearer ', '') : null;
// //   },
// //   getUserId: function(authorization) {
// //     var userId = -1;
// //     var token = module.exports.parseAuthorization(authorization);
// //     if(token != null) {
// //       try {
// //         var jwtToken = jwt.verify(token, process.env.JWT_SECRET);
// //         if(jwtToken != null)
// //           userId = jwtToken.userId;
// //       } catch(err) { }
// //     }
// //     return userId;
// // }
// // }




// // require authentification: correspondance à la base de données 
// module.exports.requireAuth = (request, response, next) => {
//   const token = request.headers.jwt;
//   if (token) {
//     jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
//       if (err) {
//         console.log(err);
//         response.send(200).json('no token')
//       } else {
//         console.log(user.id);
//         response.user =user;
//         next();
//       }
//     });
//   } else {
//     console.log('No token');
//   }
// };

const jwt = require("jsonwebtoken");
const user = require("../models/user");
const {UnauthorizedError}=require ("../helpers/errors")

// verification de token
const isAuth = (request, response, next) => {
      //  const token = request.cookies.jwt;
       const token = request.headers.authorization.split('Bearer ')[1];
console.log(token)
    jwt.verify(token,process.env.JWT_SECRET, (error, user) => {
        if (error) {
            console.log(error);
              throw new UnauthorizedError("You must be login");
       } else {
             const {  exp } = user;
         
             if (Date.now() / 1000 >= exp) {
                response.clearCookie("jwt");
                
                throw new UnauthorizedError("You must be login");
             }
             request.user =user;
             next();
        }
    });
   
}
module.exports = isAuth;

// Imports



// Exported functions
// module.exports = {
//   generateTokenForUser: function(userData) {
//     return jwt.sign({
//       userId: userData.id,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: '1h'
//     })
//   },
//   parseAuthorization: function(authorization) {
//     return (authorization != null) ? authorization.replace('Bearer ', '') : null;
//   },
//   getUserId: function(authorization) {
//     var userId = -1;
//     var token = module.exports.parseAuthorization(authorization);
//     if(token != null) {
//       try {
//         var jwtToken = jwt.verify(token, process.env.JWT_SECRET);
//         if(jwtToken != null)
//           userId = jwtToken.userId;
//       } catch(err) { }
//     }
//     return userId;
// }
// }




// require authentification: correspondance à la base de données 
module.exports.requireAuth = (request, response, next) => {
  const token = request.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
      if (err) {
        console.log(err);
        response.send(200).json('no token')
      } else {
        console.log(user.id);
        response.user =user;
        next();
      }
    });
  } else {
    console.log('No token');
  }
}