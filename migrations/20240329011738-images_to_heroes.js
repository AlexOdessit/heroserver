'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images_to_heroes', {
      heroId: {
        type: Sequelize.INTEGER,
        field: 'hero_id',
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'heroes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      imageId: {
        type: Sequelize.INTEGER,
        field: 'image_id',
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'images',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('images_to_heroes');
  },
};
