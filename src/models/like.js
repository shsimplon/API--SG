"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    static associate(models) {


      this.belongsToMany(models.user, {
        through: "like",
        foreignKey: "recetteId",
        
      });
      this.belongsToMany(models.recette, {
        through: "like",
        foreignKey: "userId",
        as: "recettes",
      });
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.recette, { foreignKey: "recetteId" });

    }
  }
  like.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      recetteId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        references: {
          model: "recettes",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "like",
    }
  );
  return like;
};
