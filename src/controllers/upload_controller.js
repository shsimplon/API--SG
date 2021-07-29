// const recette = require("../models/recette");
// //incrementer les elments dans les fichies
// const fs = require("fs");
// const { promisify } = require("util");
// const pipeline = promisify(require("stream").pipeline);
// const { uploadErrors } = require("../utils/errors_utils")
// module.exports.uploadRecette = async (req, res) => {
//   try {
//     if (
//       req.file.c != "image/jpg" &&
//       req.file.detectedMimeType != "image/png" &&
//       req.file.detectedMimeType != "image/jpeg"
//     )
//       throw Error("invalid file");

//     if (req.file.size > 500000) throw Error("max size");
//   } catch (err) {
//     const errors = uploadErrors(err);
//     return res.status(201).json({ errors });
//   }
//   //permet de remplacer l'image existante et la transformer en format jpg 
//   const fileName = req.body.name + ".jpg";
// // permet dinstaller le shema via fs
//   await pipeline(
//     req.file.stream,
//     fs.createWriteStream(
//       `${__dirname}/../client/public/uploads/etablissemnts/${fileName}`
//     )
//   );
//   try {
//     await recette.findByIdAndUpdate(
//       req.body.userId,
//       { $set : {file: "./uploads/recette/" + fileName}},
//       { new: true, upsert: true, setDefaultsOnInsert: true},
//       (err, docs) => {
//         if (!err) return res.send(docs);
//         else return res.status(500).send({ message: err });
//       }
//     );
//   } catch (err) {
//     return res.status(500).send({ message: err });
//   }
//     }