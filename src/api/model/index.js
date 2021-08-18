const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miHoYo', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error',err=>{
    console.log('数据库链接失败',err)
})

db.once('open',function(){
    console.log('数据库链接成功')
})


module.exports={
    User:mongoose.model('User',require('./user')),
    Captcha:mongoose.model('Captcha',require('./captcha'))
}




