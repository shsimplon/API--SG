const { recette, user } = require("../models");

const { BadRequestError, NotFoundError } = require("../helpers/errors");

const recettesController = {
  getAllRecettes: async () => {
    const listRecettes = await recette.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },

      order: [["name", "ASC"]],
      include: [
        {
          model: user,
          attributes: ["username"],
          as: "users",
        },
      ],
    });
    return { listRecettes };
  },
  getuserRecette: async (userRecette) => {
    const Recette = await recette.findAll({
      where: {
        userId: userRecette,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: user,
          attributes: ["username"],
          as: "users",
        },
      ],
      attributes: ["id", "name", "ingredients", "preparations", "userId"],
    });
    if (!Recette) {
      throw new NotFoundError(
        "Ressource introuvable",
        "Cette recette n'existe pas"
      );
    }

    return Recette;
  },
  addRecette: async (data) => {
    const { name, ingredients, preparations } = data;

    const Recette = await recette.findOne({
      where: {
        name
       
      },
    });

    if (Recette) {
      throw new BadRequestError(
        "Ressource existante",
        "La Recette existe déjà"
      );
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
      where: { id },
    });
    if (!Recette) {
      throw new NotFoundError("LA recette n'existe pas");
    }
    await Recette.update(data);

    const newRecette = await recette.findOne({
      where: {
        id,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    return newRecette;
  },

  deleteOne: async (id) => {
    const recetteFound = await recette.findOne({
      where: { id },
    });
    if (!recetteFound) {
      throw new NotFoundError(
        "Ressource introuvable",
        "Cette recette n'existe pas"
      );
    }

    await recette.destroy({
      where: { id },
    });
  },
};
module.exports = recettesController;
