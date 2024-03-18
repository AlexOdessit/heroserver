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
      },
      originDescription: { type: DataTypes.TEXT(128) },
      catchPhrase: { type: DataTypes.TEXT(128) },
      images: { type: DataTypes.BLOB },
    },
    {
      sequelize,
      modelName: 'Hero',
    }
  );
  return Hero;
};
