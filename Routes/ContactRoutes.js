// const sampleController = require('../Controller/Sample-Controller');
const express = require('express');
const { postContactDetails, getContactDetails } = require('../Controller/Contact-Controller');
const ContactRouter = express.Router();

ContactRouter.post('/postContactDetail', postContactDetails);
ContactRouter.get('/getContactDetail', getContactDetails);

module.exports = ContactRouter;