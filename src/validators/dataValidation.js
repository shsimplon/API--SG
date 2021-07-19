const { isNil } = require("lodash");
// // * Checks if `value` is `null` or `undefined`.
const nameValidation = (name) => {
  if (isNil(name) || name === "") {
    return "Le nom doit être renseigné";
  }
  if (typeof name !== "string") {
    return "Le nom doit être une chaîne de caractères";
  }
  if (name.length < 3 || name.length > 100) {
    return "Le nom doit contenir entre 3 et 50 caractères";
  }
  return null;
};
const descriptionValidation = (description) => {
  if (isNil(description) || description === "") {
    return "La description doit être renseigné";
  }
  if (typeof description !== "string") {
    return "La description doit être une chaîne de caractères";
  }
  if (description.length < 5 || description.length > 20000) {
    return "La description doit contenir entre 500 et 20000 caractères";
  }
  return null;
};
const placeValidation = (place) => {
  if (isNil(place) || place === "") {
    return "La place doit être renseigné";
  }
  if (typeof place !== "string") {
    return "La place doit être une chaîne de caractères";
  }
  if (place.length < 5 || place.length > 10000) {
    return "La place doit contenir entre 500 et 2000 caractères";
  }
  return null;
};

module.exports = (data) => {
  const {
    name,
    place,
  
    description,
  } = data;

  const errors = [];
  const nameError = nameValidation(name);
  if (nameError) errors.push({ field: "name", message: nameError });

  const placeError = placeValidation(place);
  if (placeError) errors.push({ field: "place", message: placeError });

  const descriptionError = descriptionValidation(description);
  if (desciptionError)
    errors.push({ field: "desciption", message: desciptionError });
};
