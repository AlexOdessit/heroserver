const { Superpower } = require('../models');

module.exports.heroSuperpower = async (req, res, next) => {
  try {
    const { body, hero } = req;
    const superpower = await hero.createSuperpower(body);
    res.status(201).send({ data: superpower });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
