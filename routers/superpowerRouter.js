const superpowerRouter = require('express').Router();
const { findHero } = require('../middlewares/heroMV');
const superController = require('../controllers/superController');

superpowerRouter.post(
  '/:heroId/superpowers',
  findHero,
  superController.heroSuperpower
);

module.exports = superpowerRouter;
