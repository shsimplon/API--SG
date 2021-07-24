"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    static associate(models) {
      models.user.belongsToMany(models.recette, {
        through: models.like,
        foreignKey: "userId",
        otherKey: "recetteId",
        // as: 'users',
      });

      models.recette.belongsToMany(models.user, {
        through: models.like,
        foreignKey: "recetteId",
        otherKey: "userId",
        // as: 'recettes',
      });

      models.like.belongsTo(models.user, {
        foreignKey: "userId",
        as: "users",
      });

      models.like.belongsTo(models.recette, {
        foreignKey: "recetteId",
        as: "recettes",
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
