'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Superpower.belongsTo(models.Hero, {
        foreignKey: 'heroId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Superpower.init(
    {
      powerName: {
        type: DataTypes.STRING,
        field: 'powername',
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Superpower',
      tableName: 'superpowers',
      underscored: true,
    }
  );
  return Superpower;
};
