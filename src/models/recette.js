"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recette extends Model {
    static associate(models) {
      // this.belongsTo(models.user, { foreignKey: "userId", as: "users" });
     }
  }
  recette.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      // userId: {
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV4,
      //   references: {
      //     model: "users",
      //     key: "id",
      //   },
      // },
      ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      preparations: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      
      image: {
        type: DataTypes.TEXT,
        // defaultValue: "./uploads/etablissements/random-.png"
      },
      video: {
        type: DataTypes.BLOB
      },
     
      likes: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
    },
    {
      sequelize,
      modelName: "recette",
    },
  );
  return recette;
};