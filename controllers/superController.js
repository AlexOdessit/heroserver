const { Superpower } = require('../models');

module.exports.createHero = async (req, res, next) => {
  try {
    const hero = req;
    const { powerName, description } = req.body;
    const newSuperPower = await Superpower.create({
      powerName,
      description,
    });

    await hero.addSuperpower(newSuperPower);

    res.status(201).send(heroPower);
  } catch (error) {
    next(error.message);
  }
};
