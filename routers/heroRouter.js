const heroRouter = require('express').Router();
const heroController = require('../controllers/heroController');

heroRouter.post('/', heroController.createHero);
heroRouter.get('/', heroController.getHeros);
heroRouter.get('/:heroId', heroController.getHero);
heroRouter.put('/:heroId', heroController.updateHero);
heroRouter.delete('/:heroId', heroController.deleteHero);

module.exports = heroRouter;
