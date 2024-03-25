const express = require('express');
const superpowerRouter = express.Router();
const superController = require('../controllers/superController');

superpowerRouter.post('/', superController.createSuperpower);

module.exports = superpowerRouter;
