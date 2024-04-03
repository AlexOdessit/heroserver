const { Hero, Image } = require('../models');

module.exports.findHero = async (req, res, next) => {
  try {
    const {
      params: { heroId },
    } = req;

    const hero = await Hero.findByPk(heroId);
    if (!hero) {
      const error = new Error('Hero not found');
      error.statusCode = 404;
      throw error;
    }

    req.hero = hero;
    next();
  } catch (error) {
    next(error);
  }
};
