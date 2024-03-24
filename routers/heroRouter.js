const heroRouter = require('express').Router();
const heroController = require('../controllers/heroController');
const { findHero } = require('../middlewares/heroMV');

heroRouter.post('/', heroController.createHero);
heroRouter.get('/', heroController.getHeroes);
heroRouter.get('/:superpower_id', findHero, heroController.getHero);
heroRouter.put('/:superpower_id', heroController.updateHero);
heroRouter.delete('/:superpower_id', heroController.deleteHero);

module.exports = heroRouter;
