const { Hero } = require('../models/hero');

module.exports.findHero = async (req, res, next) => {
  try {
    const {
      params: { heroID },
    } = req;

    const hero = await Hero.findByPk(heroID);
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
