var express = require('express')
var router = express.Router();
const UserController = require('../controllers/user.controller');

router.get('/me',UserController.getUser);
router.get('/me/followers',UserController.getMyFollower);

module.exports = router
