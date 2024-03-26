const express = require('express');
const superpowerRouter = express.Router();
const superController = require('../controllers/superController');
const { findHero } = require('../middlewares/heroMV');

superpowerRouter.post('/', findHero, superController.createSuperpower);

module.exports = superpowerRouter;
