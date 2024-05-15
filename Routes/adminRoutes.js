const express = require('express');
const { adminLogin } = require('../Controller/AdminLogin -Controller');
const AdminRouter = express.Router();

AdminRouter.post('/login', adminLogin);

module.exports = AdminRouter;