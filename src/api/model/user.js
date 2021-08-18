const mongoose = require('mongoose')
//公用的模型，创建时间和更新时间
const baseModel = require('./base-model')

//数据库用户的数据模型
const userSchema = new mongoose.Schema({
    ...baseModel,
    username:{
        type:String,
        required:true
    },
    phone:{
      type:Number,
      required:true
    },
    userid:{
      type:Number,
      required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = userSchema