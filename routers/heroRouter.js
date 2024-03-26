const heroRouter = require('express').Router();
const heroController = require('../controllers/heroController');
const { findHero } = require('../middlewares/heroMV');

heroRouter.post('/', heroController.createHero);
heroRouter.get('/', heroController.getHeroes);
heroRouter.get('/:id', findHero, heroController.getHero);
heroRouter.put('/:id', findHero, heroController.updateHero);
heroRouter.delete('/:id', findHero, heroController.deleteHero);

module.exports = heroRouter;
