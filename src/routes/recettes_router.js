const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");
const { getAllRecettes,getOneRecette ,addRecette,updaterecette,deleteOne} = require("../controllers/recettes_controller");
const { djValidation } = require("../validators");
const { ValidationError } = require("../helpers/errors");
const recettesController = require("../controllers/recettes_controller");
const isAuth=require ("../middlewares/auth.middleware.js")
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
const recette=request
  recette.userId=request.user.id;
  console.log(recette.userId)
 
 const resultat = await getOneRecette(recette.userId);
 
     response.status(OK).json(resultat);
  });


router.post("/",  isAuth , async (request, response) => {
    const recetteToAdd = request.body;
     recetteToAdd.userId=request.user.id;
    console.log(recetteToAdd.userId)
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
