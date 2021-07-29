"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    static associate(models) {
      
      models.user.belongsToMany(models.recette, {
        through: "likes",
        foreignKey: "userId",
        as: "users",
      });
      models.recette.belongsToMany(models.user, {
        through: "likes",
        foreignKey: "recetteId",
        as: "recettes",
      });

     this.belongsTo(models.user, {
        foreignKey: "userId",
      });

     this.belongsTo(models.recette, {
        foreignKey: "recetteId",
      });
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
      isLike: {
        type: DataTypes.INTEGER,
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
