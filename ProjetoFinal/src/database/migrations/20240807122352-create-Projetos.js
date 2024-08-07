'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projetos', {
      ID_Projeto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ID_Usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'ID_Usuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      NomeProjeto: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      Disc_Projeto: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projetos');
  }
};
