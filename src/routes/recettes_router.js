const express = require("express");

// const { uploadErrors } = require("../utils/errors.utils");

// let fileupload = require("express-fileupload");

const { OK, CREATED } = require("../helpers/status_codes");
const {
  getAllRecettes,
  getOneRecette,
  getuserRecette,
  addRecette,
  updaterecette,
  addImage,
  deleteOne,
} = require("../controllers/recettes_controller");
const { djValidation } = require("../validators");
const { ValidationError } = require("../helpers/errors");
const recettesController = require("../controllers/recettes_controller");
const isAuth = require("../middlewares/auth.middleware.js");
const recette = require("../models/recette");
const { request } = require("express");
const router = express.Router();

router.get("/", async (_request, response) => {
  const recettes = await getAllRecettes();
  response.status(OK).json(recettes);
});

router.get("/userRecette/:id", isAuth, async (request, response) => {
  const recetteOne = await getOneRecette(request.params.id);
  response.status(OK).json(recetteOne);
});
//chercher un recette en fonction de userid
router.get("/userRecette", isAuth, async (request, response) => {
  const recette = request;
  recette.userId = request.user.id;

  const resultat = await getuserRecette(recette.userId);

  response.status(OK).json(resultat);
});

//////upload avec fileexpress
router.post("/upload", isAuth, async (req, res) => {
  const recetteToAdd = req.body;
  recetteToAdd.userId = req.user.id;

  if (!req.files) {
    res.send({
      status: false,
      message: "No file uploaded",
    });
  } else {
    let avatar = req.files.avatar;

    const img = avatar.data;
    const data = img.toString("base64");
    req.body.image = data;

    const newrecette = await addRecette(req.body);
    res.status(CREATED).json(newrecette);
  }
});

////////

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
