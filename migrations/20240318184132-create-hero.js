'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING(24),
        allowNull: false,
        unique: true,
      },
      realName: {
        type: Sequelize.STRING(24),
        allowNull: false,
        field: 'realname',
        unique: true,
      },
      originDescription: {
        type: Sequelize.TEXT,
        field: 'origin_desc',
        allowNull: true,
      },
      catchPhrase: {
        type: Sequelize.TEXT,
        field: 'catch_phrase',
        allowNull: false,
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
      superpower_id: {
        type: Sequelize.INTEGER,
        field: 'superpower_id',
        allowNull: false,
        references: {
          model: {
            tableName: 'superpowers',
          },
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes');
  },
};
