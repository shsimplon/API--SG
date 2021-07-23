const {recette,user} = require("../models");

const { BadRequestError, NotFoundError } = require("../helpers/errors");

const recettesController = {
    getAllRecettes: async () => {
      const listRecettes = await recette.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      
        order: [["name", "ASC"]],
      });
      return { listRecettes };
    },
    getOneRecette: async (machin) => {
        const Recette = await recette.findOne({
          where: {
           
            userId :machin,
          },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      // includes: [
      //     {
      //      model: user, as:'users',
      //    },
         
      //    ],         
         attributes: ["id", "name","userId"],
        });
        if (!Recette) {
          throw new NotFoundError("Ressource introuvable", "Cette recette n'existe pas");
        }
    
        return Recette;
      },
      addRecette: async (data) => {
        const {name, ingredients,preparations} = data;
    
        const Recette = await recette.findOne({
          where: {
           name, ingredients,preparations
          },
          
        });
    
        if (Recette) {
          throw new BadRequestError("Ressource existante", "La Recette existe déjà");
        }

// a tester avec la table user
        // const user = await user.findOne({
        //   where: {
        //     id: userId,
        //   },
        // });
        // if (!user) {
        //   throw new NotFoundError("Le user n'existe pas");
        // }


    
        const newRecette = await recette.create(data);
        
        // if (userId)
        // newRecette.addusers(userId);
    
        return newRecette;
      },
      updaterecette: async (id, data) => {
         const Recette = await recette.findOne({
      //     // includes: [
      //     //   {
      //     //     model: user, as:'users',
      //     //    },
           
      //     //  ],      
          where: {id }           
            
       });
       if (!Recette) {
         throw new NotFoundError("LA recette n'existe pas");
      }
      await Recette.update(data);

      const newRecette = await recette.findOne({
        where: {
          id
        },
        attributes: {exclude: ["createdAt", "updatedAt"]},
      }); 
  
      return newRecette;
    },
    
    deleteOne: async (id) => {
      const recetteFound = await recette.findOne({
        where: { id },
      });
      if (!recetteFound) {
        throw new NotFoundError("Ressource introuvable", "Cette recette n'existe pas");
      }
  
      await recette.destroy({
        where: { id },
      });
    }, 

}
module.exports = recettesController;
