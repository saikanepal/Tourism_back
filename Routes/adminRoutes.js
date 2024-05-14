const express = require('express');
const { adminLogin } = require('../Controller/AdminLogin -Controller');
const AdminRouter = express.Router();

AdminRouter.get('/login', adminLogin);

module.exports = AdminRouter;