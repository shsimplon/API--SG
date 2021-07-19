const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");
const { getAllAstuces,addAstuce,getOneAstuce,updateAstuce,deleteOne} = require("../controllers/astuces_controller");
const { djValidation } = require("../validators");
const { ValidationError } = require("../helpers/errors");
const astucesController = require("../controllers/astuces_controller");

const router = express.Router();

router.get("/", async (request, response) => {
  const astuces = await getAllAstuces();
  response.status(OK).json(astuces);
});

router.get("/:name", async (request, response) => {
    const astuce = await getOneAstuce(request.params.name);
    response.status(OK).json(astuce);
  });

router.post("/", async (request, response) => {
    const astuceToAdd = request.body;
    
    const newastuce = await addAstuce(astuceToAdd);
    response.status(CREATED).json(newastuce);
  });



  router.put("/:id", async (request, response) => {
    const astuce = request.body;
  
    const astuceUpdated = await updateAstuce(request.params.id, astuce);
    response.status(OK).json(astuceUpdated);
  });


router.delete("/:id", async (request, response) => {
  await deleteOne(request.params.id);
  response.status(OK).json({ message: "L'astuce  est supprimé avec succès" });
});






module.exports = router;
