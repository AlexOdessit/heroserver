const { Hero } = require('../models');

module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;
    const hero = await Hero.create(body);
    res.status(200).send(hero);
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
    res.status(200).send('full user list');
  } catch (error) {
    next(error);
  }
};
module.exports.updateHero = async (req, res, next) => {
  try {
    res.send('user updated');
  } catch (error) {
    next(error);
  }
};
module.exports.deleteHero = async (req, res, next) => {
  try {
    res.status(200).send('user deleted');
  } catch (error) {
    next(error);
  }
};
