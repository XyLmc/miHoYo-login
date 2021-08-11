const express = require('express')
const app = express()
const router = require('./router/index')

//解决跨域问题的工具
const cors =require('cors')
app.use(cors())

app.use(express.json())

app.use('/api',router)


//错误处理中间件
app.use(require('./middleware/error-handler')())
app.listen('3000',()=>{
    console.log('服务器已被开启 http://localhost:3000')
})