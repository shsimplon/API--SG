const { restaurant } = require("../models");

const { BadRequestError, NotFoundError } = require("../helpers/errors");

const restaurantController = {
  getAllRestaurants: async () => {
    const Restaurants = await restaurant.findAll({
      order: [["name", "ASC"]],
      raw: true,
    });
    return Restaurants;
  },
  getRestaurant: async (name) => {
    const Restaurant = await restaurant.findOne({
      where: {
        name,
      },
      attributes: ["id", "name"],
    });
    if (!Restaurant) {
      throw new BadRequestError("Le Restaurant n'existe pas");
    }
    return Restaurant;
  },
  addRestaurant: async (data, request) => {
    const { name, place, description, image, lien } = data;

    const Restaurant = await restaurant.findOne({
      where: {
        name,
      },
    });

    if (Restaurant) {
      throw new BadRequestError("Le Restaurant exist deja");
    } else {
      console.log(image);
      const newRestaurant = await restaurant.create({
        name,
        place,
        description,
        image,
        lien,
      });
      return newRestaurant;
    }
  },
};

module.exports = restaurantController;
