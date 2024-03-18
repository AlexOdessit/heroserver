'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.belongsTo(models.Superpower, {
        foreignKey: 'heroId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Hero.init(
    {
      nickname: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
      },
      realName: {
        type: DataTypes.STRING(24),
        allowNull: false,
        field: 'realname',
        unique: true,
      },

      originDescription: {
        type: DataTypes.TEXT,
        field: 'origin_desc',
        allowNull: true,
      },
      catchPhrase: {
        type: DataTypes.TEXT,
        field: 'catch_phrase',
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Hero',
      underscored: true,
    }
  );
  return Hero;
};
