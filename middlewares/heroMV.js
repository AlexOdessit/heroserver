const { Hero } = require('../models/hero');

module.exports.findHero = async (req, res, next) => {
  try {
    const {
      params: { superpower_id },
    } = req;

    const hero = await Hero.findByPk(superpower_id);
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
