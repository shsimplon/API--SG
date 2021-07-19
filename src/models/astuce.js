"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class astuce extends Model {
    static associate(models) {
      // this.belongsTo(models.user, { foreignKey: "userId", as: "users" });
     }
  }
  astuce.init({
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
    text: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
    // userId: {
    //   type: DataTypes.UUID,
    //         references: {
    //     model: "users",
    //     key: "id",
    //   },
    // },
    image: {
      type: DataTypes.TEXT
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
      modelName: "astuce",
    }
  );
  return astuce;
};
