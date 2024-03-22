const { Hero } = require('../models');

module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;
    const hero = Hero.create(body);
    console.log(hero);
    res.status(200).send(hero);
  } catch (error) {
    next(error);
  }
};
module.exports.getHero = async (req, res, next) => {
  try {
    res.status(200).send('user data');
  } catch (error) {
    next(error);
  }
};
module.exports.getHeros = async (req, res, next) => {
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
