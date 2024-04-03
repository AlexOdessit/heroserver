const heroRouter = require('express').Router();
const heroController = require('../controllers/heroController');
const { findHero } = require('../middlewares/heroMV');
const imageUpoad = require('../utils/imageUpload');

heroRouter.post('/', heroController.createHero);
heroRouter.get('/', heroController.getHeroes);
heroRouter.get('/:heroId', findHero, heroController.getHero);
heroRouter.put('/:heroId', findHero, heroController.updateHero);
heroRouter.delete('/:heroId', findHero, heroController.deleteHero);
heroRouter.use(
  '/:heroId/images',
  findHero,
  imageUpoad.array('gallery', 6),
  heroController.addImageGallery
);

module.exports = heroRouter;
