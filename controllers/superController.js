const { Superpower } = require('../models');

module.exports.createSuperpower = async (req, res, next) => {
  try {
    const { body, hero } = req;
    const newSuperPower = await Superpower.create(body);

    await hero.addSuperpower(newSuperPower);

    res.status(201).send({ data: newSuperPower });
  } catch (error) {
    next(error.message);
  }
};
