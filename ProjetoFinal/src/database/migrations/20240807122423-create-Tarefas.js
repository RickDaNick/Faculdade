'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tarefas', {
      ID_Tarefa: {
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
      ID_Projeto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Projetos',
          key: 'ID_Projeto'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      DiscTarefa: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      DataTarefa: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('Tarefas');
  }
};
