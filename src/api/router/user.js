const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user')

//用户登录
router.post('/user/login',userCtrl.login)

//获取验证码
router.get('/user/captcha',userCtrl.getCaptcha)

module.exports = router