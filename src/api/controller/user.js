const {Captcha} = require('../model')

exports.login = async (req,res,next) => {
    try{
        res.status(200).send('帅气')
    }catch (err){
        next(err)
    }
}

exports.getCaptcha = async (req,res,next) =>{
    try{
        let captcha = await Captcha.findOne()
        res.status(200).json({
            captcha
        })
    }catch (err){
        next(err)
    }
}

