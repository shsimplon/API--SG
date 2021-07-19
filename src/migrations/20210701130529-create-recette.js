'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recettes', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ingredients: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      preparations: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT, 
        allowNull: false,
       

      },
      video: {
        type: Sequelize.BLOB
      },
      // userId: {
      //   type: Sequelize.UUID,
      //   references: {
      //     model: "users",
      //     key: "id",
      //   },
      // },
      likes: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('recettes');
  }
};