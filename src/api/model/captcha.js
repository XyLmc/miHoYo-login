const mongoose = require('mongoose')

const captchaSchema = new mongoose.Schema({
    captcha:{
        type:Number,
        required:true
    }
})

module.exports = captchaSchema