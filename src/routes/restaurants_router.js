const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
  getAllRestaurants,
  getRestaurant,
  addRestaurant,
} = require("../controllers/restaurants_controller");
const router = express.Router();

router.get("/", async (request, response) => {
  const restaurants = await getAllRestaurants();
  response.status(OK).json(restaurants);
});
router.get("/:name", async (request, response) => {
  const restaurant = await getRestaurant(request.params.name);
  response.status(OK).json(restaurant);
});

router.post("/", async (request, response) => {
  if (!request.files) {
    response.send({
      status: false,
      message: "No file uploaded",
    });
  } else {
    let avatar = request.files.avatar;
    const img = avatar.data;
    const data = img.toString("base64");
    request.body.image = data;
    await avatar.mv("./public/uploads/" + avatar.name);

    const newRestaurant = await addRestaurant(request.body);
    response.status(CREATED).json(newRestaurant);
  }
});

module.exports = router;
