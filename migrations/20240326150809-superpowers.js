'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('superpowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      heroId: {
        type: Sequelize.INTEGER,
        field: 'hero_id',
        allowNull: false,
        references: {
          model: 'heroes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      powerName: {
        type: Sequelize.TEXT,
        allowNull: false,
        field: 'powername',
        unique: true,
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('superpowers');
  },
};
