const heroRouter = require('express').Router();
const heroController = require('../controllers/heroController');

heroRouter.post('/', heroController.createHero);
heroRouter.get('/', heroController.getHeros);
heroRouter.get('/:id', heroController.getHero);
heroRouter.put('/:id', heroController.updateHero);
heroRouter.delete('/:id', heroController.deleteHero);

module.exports = heroRouter;
