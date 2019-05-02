var express = require('express');
var router = express.Router();
var home = require('./controls/home');
var user = require('./controls/user');
var data = require('./controls/data');

/* GET home page. */
router.get('/', home);

/* GET users listing. */
router.get('/user', user);

// 处理前端发来的请求
router.get('/data', data)

module.exports = router;
