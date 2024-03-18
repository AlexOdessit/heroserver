'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Heros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING(10),
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
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Heros');
  },
};
