const sampleController = require('../Controller/Sample-Controller');
const express = require('express');
const router = express.Router();

router.get('/getSample', sampleController.getSample);
// Export the router
module.exports = router;