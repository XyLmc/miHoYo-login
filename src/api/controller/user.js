exports.login = async (req,res,next) => {
    try{
        res.status(200).send('帅气')
    }catch (err){
        next(err)
    }
}

exports.getCaptcha = async (req,res,next) =>{
    try{
        res.status(200).send('验证码')
    }catch (err){
        next(err)
    }
}

