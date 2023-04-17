const express = require('express');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
