const { Hero } = require('../models');

module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;
    const hero = await Hero.create(body);

    res.status(200).send(hero);
  } catch (error) {
    next(error.message);
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
    res.status(200).send('Hero updated successfully');
  } catch (error) {
    next(error);
  }
};

module.exports.deleteHero = async (req, res, next) => {
  try {
    const { hero } = req;
    await hero.destroy();
    res.status(200).send('Hero deleted successfully');
  } catch (error) {
    next(error);
  }
};
