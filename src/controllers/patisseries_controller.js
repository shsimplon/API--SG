const {patisserie} = require ("../models");

const { BadRequestError, NotFoundError } = require("../helpers/errors");


const patisserieController = {
  getAllPatisseries: async () => {
      const Patisseries = await patisserie.findAll({
        order: [["name", "ASC"]],
        attributes: { exclude: ["createdAt", "updatedAt"] },
        raw: true,
      });
      return Patisseries;
    },

    getPatisserie: async (name) => {
        const Patiiserie = await patisserie.findOne({
        where: {
          name,
        },
        attributes: ["id", "name"],
      });
      if (!Patiiserie) {
        throw new BadRequestError("La Patiiserie n'existe pas");
      }
      return Patiiserie;
    },
    addPatisserie: async (data,request) => {
        const { name ,place, description,image} = data;
        const Patisserie = await patisserie.findOne({
          where: {
            name,
            place,
            description
          },
        });
    
        if (Patisserie) {
          throw new BadRequestError("La patisserie exist deja");
        } else {
          const newPatisserie = await patisserie.create({ name ,place, description,image});
          return newPatisserie;
        }
      },





}
module.exports = patisserieController;