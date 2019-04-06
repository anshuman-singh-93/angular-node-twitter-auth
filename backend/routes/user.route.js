var express = require('express')
var router = express.Router();
const UserController = require('../controllers/user.controller');

router.get('/me',UserController.getUser);
module.exports = router
