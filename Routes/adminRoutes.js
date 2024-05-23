const express = require('express');
const { adminLogin,addImage } = require('../Controller/AdminLogin -Controller');
const AdminRouter = express.Router();

AdminRouter.post('/login', adminLogin);
AdminRouter.post('/image',addImage);
module.exports = AdminRouter;