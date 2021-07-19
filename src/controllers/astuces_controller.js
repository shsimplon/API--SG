const {recette,user,astuce} = require("../models");

const { BadRequestError, NotFoundError } = require("../helpers/errors");

const astucesController = {
    getAllAstuces: async () => {
      const listAstuces = await astuce.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        order: [["name", "ASC"]],

        // include: [
        //     {
        //       model: user, as: "users" 
        //     }
        //    ],
      });
      return { listAstuces };
    },
    getOneAstuce: async (name) => {
        const Astuce = await astuce.findOne({
          where: {
           
            name,
          },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      includes: [
          {
           model: user, as:'users',
         },
         
         ],         
         attributes: ["id", "name"],
        });
        if (!Astuce) {
          throw new NotFoundError("Ressource introuvable", "Cette astuce n'existe pas");
        }
    
        return Astuce;
      },
      addAstuce: async (data) => {
        const {name, text,} = data;
    
        const Astuce = await astuce.findOne({
          where: {
           name, text
          },
          attributes: {exclude: ['userId']}
        });
    
        if (Astuce) {
          throw new BadRequestError("Ressource existante", "L'astuce existe déjà");
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


    
        const newastuce = await astuce.create(data);
        
        // if (userId)
        // newRecette.addusers(userId);
    
        return newastuce;
      },
      updateAstuce: async (id, data) => {
         const Astuce = await astuce.findOne({
      //     // includes: [
      //     //   {
      //     //     model: user, as:'users',
      //     //    },
           
      //     //  ],      
          where: {id }           
            
       });
       if (!Astuce) {
         throw new NotFoundError("L'astuce n'existe pas");
      }
      await Astuce.update(data);

      const newAstuce = await astuce.findOne({
        where: {
          id
        },
        attributes: {exclude: ["createdAt", "updatedAt"]},
      }); 
  
      return newAstuce;
    },
    
    deleteOne: async (id) => {
      const astuceFound = await astuce.findOne({
        where: { id },
      });
      if (!astuceFound) {
        throw new NotFoundError("Ressource introuvable", "Cette astuce n'existe pas");
      }
  
      await astuce.destroy({
        where: { id },
      });
    }, 

}
module.exports = astucesController;
