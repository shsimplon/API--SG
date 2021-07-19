"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    static associate(models) {
    //  this.belongsTo(models.user, { foreignKey: "userId", as: "users" });
    }
  }
  message.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      attachement: {
        type: DataTypes.STRING,
      },
      likes: {
        type: DataTypes.INTEGER,
      },
      // userId: {
      //   type: DataTypes.UUID,
      //   references: {
      //     model: "users",
      //     key: "id",
      //   },
      // },
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
      modelName: "message",
    }
  );
  return message;
};
