const { Superpower } = require('../models');

module.exports.createSuperpower = async (req, res, next) => {
  try {
    const { body, hero } = req;
    const superpower = await Superpower.create(body);
    if (hero) {
      await hero.addSuperpower(superpower);
    }

    res.status(201).send({ data: superpower });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
