const heroRouter = require('express').Router();
const heroController = require('../controllers/heroController');
const { findHero } = require('../middlewares/heroMV');

heroRouter.post('/', heroController.createHero);
heroRouter.get('/', heroController.getHeroes);
heroRouter.get('/:heroId', findHero, heroController.getHero);
heroRouter.put('/:heroId', findHero, heroController.updateHero);
heroRouter.delete('/:heroId', findHero, heroController.deleteHero);

module.exports = heroRouter;
