const express = require("express");
require("express-async-errors");

const restaurantsRouter= require("./restaurants_router");
const patisseriesRouter=require("./patisseries_router")
const astucesRouter=require("./astuces_router")
const recettesRouter=require("./recettes_router")
const userRouter = require ('./users_router.js')
//  const uploadController = require ("./upload_router")

const mainRouter = express.Router();


mainRouter.use("/restaurants",restaurantsRouter);
mainRouter.use("/patisseries",patisseriesRouter);
mainRouter.use("/astuces",astucesRouter);
mainRouter.use("/recettes",recettesRouter);
mainRouter.use('/users',userRouter);
//unpload

//  mainRouter.use('/etablissements',uploadController);



module.exports = mainRouter;