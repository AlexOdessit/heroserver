const { Hero, Image } = require('../models');

module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;
    const hero = await Hero.create(body);

    res.status(200).send(hero);
  } catch (error) {
    next(error);
  }
};
module.exports.addImageGallery = async (req, res, next) => {
  try {
    const { hero, body, files } = req;

    const imageDataArray = [];

    for (const file of files) {
      const imageData = {
        ...body,
        imagePath: file.filename,
        imageTitle: file.originalname,
      };
      await hero.createImage(imageData);
      imageDataArray.push(imageData);
    }

    res.status(201).send(imageDataArray);
  } catch (error) {
    next(error);
  }
};

module.exports.getHero = async (req, res, next) => {
  try {
    const { hero } = req;
    res.status(200).send({ data: hero });
  } catch (error) {
    next(error);
  }
};

module.exports.getHeroes = async (req, res, next) => {
  try {
    const heroes = await Hero.findAll();
    res.status(200).send(heroes);
  } catch (error) {
    next(error);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const { hero, body } = req;

    await hero.update(body);
    res.status(201).send('Hero updated successfully');
  } catch (error) {
    next(error);
  }
};

module.exports.deleteHero = async (req, res, next) => {
  try {
    const { hero } = req;
    await hero.destroy();
    res.status(201).send('Hero deleted successfully');
  } catch (error) {
    next(error);
  }
};
