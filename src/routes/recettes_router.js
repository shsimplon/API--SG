const express = require("express");
// const multer = require("multer");
// const upload = multer();
// const fs = require("fs");
// const { promisify } = require("util");
// const pipeline = promisify(require("stream").pipeline);
// let fileupload = require("express-fileupload");
// var fs = require("fs");

const { OK, CREATED } = require("../helpers/status_codes");
const {
  getAllRecettes,
  getOneRecette,
  getuserRecette,
  addRecette,
  updaterecette,
  deleteOne,
} = require("../controllers/recettes_controller");
const { djValidation } = require("../validators");
const { ValidationError } = require("../helpers/errors");
const recettesController = require("../controllers/recettes_controller");
const isAuth = require("../middlewares/auth.middleware.js");
const recette = require("../models/recette");
const router = express.Router();

router.get("/", async (request, response) => {
  const recettes = await getAllRecettes();
  response.status(OK).json(recettes);
});

// router.get("/:name",async (request, response) => {
//     const recette = await getOneRecette(request.params.name);
//     response.status(OK).json(recette);
//   });
//chercher un recette en fonction de userid
router.get("/userRecette", isAuth, async (request, response) => {
  const recette = request;
  recette.userId = request.user.id;

  console.log(recette.userId);

  const resultat = await getuserRecette(recette.userId);

  response.status(OK).json(resultat);
});

// router.post("/", isAuth, async (request, response) => {
//   const recetteToAdd = request.body;
//   recetteToAdd.userId = request.user.id;
//   console.log(recetteToAdd.userId);
//   const newrecette = await addRecette(recetteToAdd);
//   response.status(CREATED).json(newrecette);
// });

router.post("/upload", isAuth, async (request, response) => {
  const recetteToAdd = request.body;
  recetteToAdd.userId = request.user.id;
  let uploadedFile = "";

  try {
    if (!request.files) {
      response.send({
        status: false,
        message: "Error: No file uploaded",
      });
    } else {
      uploadedFile = request.files.uploadedFile;
      uploadedFile.mv("./uploadedFiles/" + uploadedFile.name);
    }
  } catch (err) {
    response.json({ Error: "Error while uploading file." });
  }

  recetteToAdd.image = "./uploadedFiles/" + uploadedFile.name;
  console.log(recetteToAdd);
  const newrecette = await addRecette(recetteToAdd);
  response.status(CREATED).json(newrecette);
});

router.put("/:id", async (request, response) => {
  const recette = request.body;

  const recetteUpdated = await updaterecette(request.params.id, recette);
  response.status(OK).json(recetteUpdated);
});

router.delete("/:id", async (request, response) => {
  await deleteOne(request.params.id);
  response.status(OK).json({ message: "La recette  est supprimé avec succès" });
});

module.exports = router;
