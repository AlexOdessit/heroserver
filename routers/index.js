const express = require('express');
const heroRouter = require('./heroRouter');
const superpowerRouter = require('./superpowerRouter.js');
const router = express.Router();

router.use('/heroes', heroRouter);
router.use('/superpower', superpowerRouter);

module.exports = router;
