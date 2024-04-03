'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Hero }) {
      Image.belongsToMany(Hero, {
        through: 'heroes_to_images',
        foreignKey: 'imageId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Image.init(
    {
      imagePath: {
        type: DataTypes.STRING,
        field: 'image_path',
        validate: {
          notEmpty: true,
        },
      },

      imageTitle: {
        type: DataTypes.STRING,
        field: 'image_title',
        validate: {
          notEmpty: true,
        },
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },

    {
      sequelize,
      modelName: 'Image',
      underscored: true,
    }
  );
  return Image;
};
