const jwt = require ('jwt-simple');
const moment = require ('moment');


const checkToken = (req,res,next)=>{
    if (!req.headers[user_token])
    return res.json({
        erroe:' You mist include the header'
    });
    const token =req.headers[user_token];
    let payload =null
    try{
        payload= jwt.decode(token,Token_Autn)
    }catch(err){
        return res.json({
            error:'invalid token'
        });
    }
    if (moment().unix()>payload.expiresAT){
        return res.json({error:'Expire token'})
    }
    req.userId=payload.userId

    next();
}


module.exports= {
    checkToken
}