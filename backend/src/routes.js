const express = require('express');
const router = express.Router();

router.use('/authentication', require('./Authentication/Login'));
router.use('/authentication', require('./Authentication/Logout'));
router.use('/authentication', require('./Authentication/Registration'));

module.exports = router;
